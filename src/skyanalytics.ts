export class SkyAnalytics {
    private options!: SkyAnalyticsOptions

    init(options: SkyAnalyticsOptions) {
        this.options = options;
    }

    private send(payload: SkyAnalyticsPayloadEvent | SkyAnalyticsPayloadNavigation) {
        const { host, sourceCode } = this.options

        return fetch(`${host}/api/send`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Source-Code': sourceCode,
            },
            body: JSON.stringify(payload),
        })
    }

    event(payload: SkyAnalyticsPayloadEvent) {
        return this.send(payload)
    }

    navigation(payload: SkyAnalyticsPayloadNavigation) {
        return this.send(payload)
    }
}
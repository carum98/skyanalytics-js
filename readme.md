# SkyAnalytics JS
SkyAnalytics JS is an adapter for [SkyAnalytics](https://github.com/carum98/skyanalytics) that allows you to track your website's traffic and user behavior.

## Installation
```shell
npm install https://github.com/carum98/skyanalytics
```

## Usage
```javascript
import SkyAnalytics from 'skyanalytics';

const analytics = new SkyAnalytics('SOURCE_CODE');
```

### Tracking page views
```javascript
analytics.navigation('navigation_name');
```

### Tracking events
```javascript
analytics.event('event_name');
```
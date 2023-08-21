# Findme.js

A free, open-source lightweight javascript library to get a detailed geolocation of IP address as well as to find where you are. Works on both browser side and non-browser side!

## Installation

_TODO_

<!--
```bash
npm i findme-js
``` -->

## Usage

```javascript
import {getGeoInfo} from 'findme-js';

/** Get the geolocation of me */
console.log(await getGeoInfo());

/**
 * Get the geolocation of me via system proxy settings.
 * This only works on non-browser side as in browser side the
 * proxy settings are always determined by your browser.
 */
console.log(await getGeoInfo('', 'system'));

/**
 * Get the geolocation of a certain remote address.
 */
console.log(await getGeoInfo('8.8.4.4');
```

## API

### Function: `getGeoInfo`

```typescript
getGeoInfo: (ip: string = '', proxySettings: ProxySettings = 'none') =>
  Promise<GeoInfo>;
```

| **Parameters** | **Type**        | **Default** | **Description**                                                                                                                                                                                                                                                                                                                                                   |
| -------------- | --------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ip             | string          | `''`        | The IP address of which you want to get the geolocation. Both valid IPv4 and IPv6 addresses are supported. Setting it to empty string to get your own geolocation.                                                                                                                                                                                                |
| proxySettings  | `ProxySettings` | `'none'`    | `'none'`: Don't use a proxy server. <br/> `'system'`: Use system proxy settings. <br/> `[Object ProxyAgent]`: You can also pass a `ProxyAgent` object to customize your own proxy settings. <br/> **Notice:** This parameter will be ignored in browser side! The proxy settings will always be determined by the browser in and you are not able to override it. |

### Interface: `GeoInfo`

The data structure is consistent with the returned data of https://ip-api.com/docs/api:json, but with `status` and `message` field omited.

## Notice

The data source of Findme.js comes from the free open API of https://ip-api.com/.

Due to the usage limit of 45 requests per minute (refer to https://ip-api.com/docs/legal for more information), it may be not a good choice to use it in a high-payload environment.

## License

This library is licensed under LGPL-2.1.

However, as this library uses the free open API of https://ip-api.com, **you must also comply their [user terms](https://ip-api.com/docs/legal) to use this library**, that is, **you can only use this library for a NON-COMMERICIAL purpose and in a NON-COMMERICIAL environment, otherwise the grant of usage will be regarded INVALID. Findme.js shall not be liable for any result caused by such illegal usages.**

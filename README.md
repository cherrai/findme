# Findme.js

A free, open-source light-weighted javascript library to get a detailed geolocation of IP address as well as to find where you are. Works on both browser side and non-browser side!

## Feature

🐰 No API key is required

🐰 Full TypeScript support

🐰 Support remote IP address

🐰 Support usage with proxy settings

🐰 Free, open source, light-weighted

🐰 Works on both browser side and non-browser side

## Installation

```bash
npm i findme-js
```

## Usage

### Samples

```javascript
/** Works on ESM. If you are using CommonJS, refer to next section. */
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

### Import

**Notice**: This library is an ESM. You must use it in module scope, and depends on the type of your module, the ways to import may differ. 

#### In ESM

```javascript
import {getGeoInfo} from 'findme-js';
```

#### In CommonJS

You must use dynamic-import to import an ESM.

```javascript
import('findme-js').then(data => {
  const getGeoInfo = data.geoInfo();
  // ...
});
```
 

You may wrap it in an asynchronous function and use IIFE in order to use it in a more elegant way to avoid importing it multiple times.

```javascript
const getGeoInfoPromise = (async () =>
  (await import('findme-js')).getGeoInfo)();
async function main() {
  const getGeoInfo = await getGeoInfoPromise;
  // ...
}
```

## API

### Function: `getGeoInfo`

```typescript
getGeoInfo: (ip: string = '', proxySettings: ProxySettings = 'none') =>
  Promise<GeoInfo>;
```

| **Parameters** | **Type**        | **Default** | **Description**                                                                                                                                                                                                                                                                                                                                                   |
| -------------- | --------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ip             | string          | `''`        | The IP address of which you want to get the geolocation. You can also pass a domain name instead. Both valid IPv4 and IPv6 addresses are supported. Setting it to empty string to get your own geolocation.                                                                                                                                                                                                |
| proxySettings  | `ProxySettings` | `'none'`    | `'none'`: Don't use a proxy server. <br/> `'system'`: Use system proxy settings. <br/> `[Object AxiosProxyConfig]`: You can also pass an `AxiosProxyConfig` object to customize your own proxy settings. <br/> **Notice:** This parameter will be ignored in browser side! The proxy settings will always be determined by the browser in and you are not able to override it. |

### Interface: `GeoInfo`

The data structure is consistent with the returned data of https://ip-api.com/docs/api:json, but with `status` and `message` field omitted.

## Notice

The data source of Findme.js comes from the free open API of https://ip-api.com/.

Due to the usage limit of 45 requests per minute (refer to https://ip-api.com/docs/legal for more information), it may be not a good choice to use it in a high-payload environment.

## Development

Clone this repository.

Install the dependencies.
```bash
npm i
```

To build the library, run
```bash
npm run build
```

To run the test, run
```bash
npm run dev
```

You can also pass options to define which test to run.
For more information use
```bash
npm run dev -- -h
```


## License

This library is licensed under __GNU Affero General Public License 3.0.__

As this library uses the free open API of https://ip-api.com, **you must also comply their [user terms](https://ip-api.com/docs/legal) to use this library**, that is, **you can only use this library for a NON-COMMERCIAL purpose and in a NON-COMMERCIAL environment, otherwise the grant of usage will be regarded INVALID. Findme.js shall not be liable for any result caused by such illegal usages.**


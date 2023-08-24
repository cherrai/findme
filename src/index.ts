import type {
  GeoInfo,
  GeoInfoResponse,
  GeoInfoSuccess,
  ProxySettings,
} from './typing.js';

import axios, {AxiosProxyConfig} from 'axios';

const IS_IN_BROWSER = globalThis.window ? true : false;

function getGeoInfoFromResponse(response: GeoInfoSuccess) {
  return Object.fromEntries(
    Object.entries(response).filter(
      ([key, _]) => !['status', 'message'].includes(key)
    )
  ) as GeoInfo;
}

/** ProxySettings won't work in browser side. */
export async function getGeoInfo(
  ip: string = '',
  proxySettings: ProxySettings = 'none'
): Promise<GeoInfo> {
  const result = (await axios({
    url: `http://ip-api.com/json/${ip}?fields=status,message,continent,continentCode,country,countryCode,region,\
    regionName,city,district,zip,lat,lon,timezone,offset,currency,isp,org,as,asname,reverse,mobile,proxy,hosting,query`,
    proxy:
      IS_IN_BROWSER || proxySettings === 'none'
        ? false
        : proxySettings === 'system'
        ? undefined
        : proxySettings
  })).data as GeoInfoResponse;

  return result.status === 'fail'
    ? (() => {
        throw {status: result.status, message: result.message};
      })()
    : getGeoInfoFromResponse(result);
}

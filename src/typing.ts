import type { AxiosProxyConfig } from 'axios';

export interface GeoInfo {
  query: string;
  continent: string;
  continentCode: string;
  region: string;
  regionName: string;
  city: string;
  district: string;
  zip: string;
  lat: number;
  lon: number;
  timezone: string;
  offset: number;
  currency: string;
  isp: string;
  org: string;
  as: string;
  asname: string;
  reverse: string;
  mobile: boolean;
  proxy: boolean;
  hosting: boolean;
}

export interface GeoInfoSuccess extends GeoInfo {
  status: 'success';
}

export interface GeoInfoFailed {
  status: 'fail',
  query: string;
  message: 'private range' | 'reserved range' | 'invalid query';
}

export type GeoInfoResponse = GeoInfoSuccess | GeoInfoFailed;

export type ProxySettings = 'system' | 'none' | AxiosProxyConfig;

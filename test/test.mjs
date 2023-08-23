import {getGeoInfo} from '../dist/index.js';
import {ProxyAgent} from 'proxy-agent';
console.log(await getGeoInfo());
console.log(await getGeoInfo('', 'system'));
console.log(await getGeoInfo('', new ProxyAgent()));
console.log(await getGeoInfo('8.8.4.4', 'system'));
console.log(await getGeoInfo('invalid-ip'));

import { getGeoInfo } from '../dist/index.js';
console.log(await getGeoInfo());
console.log(await getGeoInfo('', 'system'));
console.log(await getGeoInfo('www.baidu.com', 'system'));
console.log(await getGeoInfo('invalid-ip'));

import('../dist/index.js').then(data => {
  const getGeoInfo = data.getGeoInfo;
  (async () => {
    console.log(await getGeoInfo());
  })();
});

const GeoInfoPromise = (async () => (await
  import('../dist/index.js')).getGeoInfo)()


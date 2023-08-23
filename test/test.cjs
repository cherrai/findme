
const getGeoInfoPromise = (async () => (await
  import('../dist/index.js')).getGeoInfo)()

async function main() {
  const getGeoInfo = await getGeoInfoPromise;
  console.log(await getGeoInfo());
}

async function anotherMain() {
  const getGeoInfo = await getGeoInfoPromise;
  console.log(await getGeoInfo('8.8.4.4'));
}

async function yetAnotherMain() {
  import('../dist/index.js').then(data => {
    const getGeoInfo = data.getGeoInfo;
    (async () => {
      console.log(await getGeoInfo());
    })();
  });  
}

main();
anotherMain();
yetAnotherMain();

const res = new Calculate(96.23, 100, 229.9, 229.9, 0, 0, 'ЦИРКУЛЬ')
let price = res.calculateBasicPrice();

// console.log('calculateBasicPrice', price);

price = res.watchItWithStorePrice(price);

// console.log('watchItWithStorePrice', price);

price = res.markup(price);

// console.log('markup', price);

price = res.watchHighMargin(price);

// console.log('watchHighMargin', price);

price = res.watchLowMargin(price);

// console.log('watchLowMargin', price);

price = res.watchItWithRecommendedPrice(price,);

// console.log('watchItWithRecommendedPrice', price);

price = res.watchItWithMonitoringPrice(price);

console.log ('Final:', price);
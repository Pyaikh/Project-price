function checkPriceFromMonitoring(product) {

    let price = calculateBasicPrice(product.cost, product.weight)

    price = watchItWithStorePrice(price, product.storeFormat, product.retailPrice) + markup(product.retailPrice, product.cost)

    price = watchHighMargin(price, product.storeFormat, product.retailPrice, product.cost)

    price = watchLowMargin(price, product.actualPrice)

    price = watchItWithStorePrice(price, product.storeFormat)

    price = watchItWithRecommendedPrice(price, product.storeFormat, product.actualPrice, product.recommendedRetailPrice)

    price = watchItWithMonitoringPrice(price, product.cost, product.monitoringPrice)

    price = Math.round(price * 100) / 100

    console.log(price)

}

checkPriceFromMonitoring({
    cost: 96.23,
    weight: 180,
    retailPrice: 229.9,
    actualPrice: 229.9,
    recommendedRetailPrice: 0,
    monitoringPrice: 0,
    storeFormat: 'Циркуль',

})
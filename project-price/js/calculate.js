// Расчет базовой цены на ТБП
function calculateBasicPrice(cost, weight) {
    return Math.round(((cost * 1.1236) + weight/1000 * 7.86) * 100) / 100;
}
function watchItWithStorePrice(price, storeFormat, storePrice) {
    if (storeFormat === "ВПРОК")
        return storePrice * 0.9 * 0.9 < price ? storePrice * 0.9 * 0.9 * 0.995 : price;
    return storePrice < price ? storePrice * 0.995 : price;
}

function markup(retailPrice, cost) {
    return (cost !== 0 && retailPrice !== 0) ? cost * ((retailPrice / cost - 1.5) / 2.5) : 0
}

function watchHighMargin(price, storeFormat, retailPrice, cost) {
    return retailPrice / cost - 1.5 > 0 ?
        Math.min(storeFormat === "ВПРОК" ? retailPrice * 0.9 * 0.9 * 0.95 : retailPrice * 0.95, price) : price
}

function watchLowMargin(price, actualPrice) {
    return Math.max(price, actualPrice * 0.75);
}

function watchItWithRecommendedPrice(price, storeFormat, actualPrice, recommendedPrice) {
    if (recommendedPrice === 0)
        return price
    if (storeFormat !== 'ВПРОК')
        return actualPrice*0.9 <= recommendedPrice ? actualPrice*0.9*0.995 : Math.max(price, recommendedPrice)
    return actualPrice <= recommendedPrice ? actualPrice*0.995 : Math.max(price, recommendedPrice)
}

function watchItWithMonitoringPrice(price, cost, monitoringPrice) {
    if (monitoringPrice === 0 || monitoringPrice > price)
        return price
    return monitoringPrice >= cost*1.05 ? monitoringPrice*0.95 : monitoringPrice*0.995
}
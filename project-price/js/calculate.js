class Calculate {
    constructor(cost, weight, retailPrice, actualPrice, recommendedPrice, monitoringPrice, storeFormat) {
        this.cost = cost
        this.weight = weight
        this.retailPrice = retailPrice
        this.actualPrice = actualPrice
        this.recommendedPrice = recommendedPrice
        this.monitoringPrice = monitoringPrice
        this.storeFormat = storeFormat
    }

//Расчет базовой цены на ТБП
    calculateBasicPrice() {
        return Math.round(((this.cost * 1.1236) + this.weight / 1000 * 7.86) * 100) / 100;
    }

    watchItWithStorePrice(price) {
        if (this.storeFormat === "ВПРОК")
            return this.retailPrice * 0.9 * 0.9 < price ? this.retailPrice * 0.9 * 0.9 * 0.995 : price;
        return this.retailPrice < price ? this.retailPrice * 0.995 : price;
    }


    markup() {
        return (this.cost !== 0 && this.retailPrice !== 0) ? this.cost * ((this.retailPrice / this.cost - 1.5) / 2.5) : 0
    }

    watchHighMargin(price) {
        return this.retailPrice / this.cost - 1.5 > 0 ?
            Math.min(this.storeFormat === "ВПРОК" ? this.retailPrice * 0.9 * 0.9 * 0.95 : this.retailPrice * 0.95, price) : price
    }


    watchLowMargin(price) {
        return Math.max(price, this.actualPrice * 0.75);
    }


    watchItWithRecommendedPrice(price) {
        if (this.recommendedPrice === 0)
            return price
        if (this.storeFormat !== 'ВПРОК')
            return this.actualPrice * 0.9 <= this.recommendedPrice ? this.actualPrice * 0.9 * 0.995 : Math.max(price, this.recommendedPrice)
        return this.actualPrice <= this.recommendedPrice ? this.actualPrice * 0.995 : Math.max(price, this.recommendedPrice)
    }

    watchItWithMonitoringPrice(price) {
        if (this.monitoringPrice === 0 || this.monitoringPrice > price)
            return price
        return this.monitoringPrice >= this.cost * 1.05 ? this.monitoringPrice * 0.95 : this.monitoringPrice * 0.995
    }
}

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








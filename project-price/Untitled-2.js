// Функция для проверки цены из мониторинга
function checkPriceFromMonitoring(params) {

    let basePrice = baseTbpPrice(params.cost, params.weight);
    
    // Расчет базовой цены на ТБП
    // function baseTbpPrice(cost, weight) {
    //     let a = (cost * 1.1236) + (weight * 7.86);
    //     return Math.round(a * 100) / 100;
    // }

    // Этап проверки ЦенаТБП с розничными ценами сети
    // if (params.storeFormat === "ВПРОК") {
    //     const discountRetailPrice = params.retailPrice * 0.9 * 0.9;
    //     if (discountRetailPrice < params.TBPrice) {
    //         params.TBPrice = discountRetailPrice * 0.995;
    //     }
    // } else {
    //     if (params.retailPrice < params.TBPrice) {
    //         params.TBPrice = params.retailPrice * 0.995;
    //     }
    // }

    // Этап расчета сверхнаценки
    // if (params.cost !== 0 && params.retailPrice !== 0) {
    //     const markup = params.cost * ((params.retailPrice / params.cost - 1.5) / 2.5);
    //     if (markup > 0) {
    //         params.TBPrice += markup;
    //         params.TBPrice = Math.round(params.TBPrice * 100) / 100;
    //     }
    // }

    // Защита от перекрученных товаров расчет
    // if (params.storeFormat === "ВПРОК" && (params.retailPrice / params.cost - 1.5) > 0) {
    //     params.TBPrice = Math.min(params.retailPrice * 0.9 * 0.9 * 0.95, params.TBPrice);
    // } else if (params.storeFormat !== "ВПРОК" && (params.retailPrice / params.cost - 1.5) > 0) {
    //     params.TBPrice = Math.min(params.retailPrice * 0.95, params.TBPrice);
    // }

    // Защита от сверхнизкой наценки
    // const discountActualPrice = params.actualPrice * 0.75;
    //
    // if (params.TBPrice > discountActualPrice) {
    //     params.TBPrice = Math.max(params.TBPrice, discountActualPrice * 0.75);
    //     params.TBPrice = Math.round(params.TBPrice * 100) / 100;
    // }

    // Этап проверки ЦенаТБП 
    // if (params.storeFormat === "ВПРОК" && params.actualPrice * 0.9 <= params.recommendedRetailPrice) {
    //     params.TBPrice = params.actualPrice * 0.9 * 0.9 * 0.995;
    //     params.specialPrice = true;
    // } else if (params.storeFormat !== "ВПРОК" && params.actualPrice <= params.recommendedRetailPrice) {
    //     params.TBPrice = params.actualPrice * 0.995
    //     if (params.monitoringPrice > 0 && params.monitoringPrice < params.TBPrice) {
    //         if (params.monitoringPrice >= params.cost * 1.05) {
    //             params.TBPrice = params.monitoringPrice * 0.95;
    //         } else {
    //             params.TBPrice = params.monitoringPrice * 0.995;
    //         }
    //         params.specialPrice = true;
    //     }
    //
    // }

    // Функция для расчета цены на ТБ
    function calculateTBPrice(params) {
        // let calculatePrice = calculateTbpPrice(params.cost, params.weight);

        // Расчет базовой цены на ТБ
        // params.TBPrice = (params.cost * 1.1236) + (params.weight * 7.86);
        // params.TBPrice = Math.round(params.TBPrice * 100) / 100;

        // Если скидочная цена на розничный товар меньше базовой цены на ТБ
        // params.discountRetailPrice = params.retailPrice * 0.9 * 0.9;
        // if (params.discountRetailPrice < params.TBPrice) {
        //     if (params.storeFormat === "ВПРОК") {
        //         params.TBPrice = params.discountRetailPrice * 0.995;
        //     } else {
        //         params.TBPrice = params.retailPrice * 0.995;
        //     }
        // }

        // if (params.cost !== 0 && params.retailPrice !== 0) {
        //
        //     // Расчет наценки
        //     const markup = params.cost * ((params.retailPrice / params.cost - 1.5) / 2.5);
        //     if (markup > 0) {
        //         params.TBPrice += markup;
        //         params.TBPrice = Math.round(params.TBPrice * 100) / 100;
        //     }
        // }

        // Если скидочная цена на актуальный товар меньше базовой цены на ТБ и нет специальной цены
        // let discountActualPrice = params.actualPrice * 0.75;
        // if (params.TBPrice > params.discountActualPrice && !params.specialPrice) {
        //     params.TBPrice = Math.max(params.TBPrice, discountActualPrice * 0.75);
        //     params.TBPrice = Math.round(params.TBPrice * 100) / 100;
        // }

        // Если формат магазина "ВПРОК" и наценка больше нуля
        // if (params.storeFormat === "ВПРОК" && (params.retailPrice / params.cost - 1.5) > 0) {
        //     params.TBPrice = Math.min(params.retailPrice * 0.9 * 0.9 * 0.95, params.TBPrice);
        // } else if (params.storeFormat !== "ВПРОК" && (params.retailPrice / params.cost - 1.5) > 0) {
        //     params.TBPrice = Math.min(params.retailPrice * 0.95, params.TBPrice);
        // }

        // [params.TBPrice, params.specialPrice] = checkPriceFromMonitoring({
        //     TBPrice, monitoringPrice, cost, weight, retailPrice, actualPrice, recommendedRetailPrice, storeFormat, baseTbpPrice
        // });
        
        // Проверка цены из мониторинга
        if (params.actualPrice < params.recommendedRetailPrice) {
            params.specialPrice = true;
        }

        // Если цена акции на розничный товар меньше базовой цены на ТБ и нет специальной цены
        let discountRetailPrice = params.retailPrice * 0.9;
        if (discountRetailPrice < params.TBPrice && !params.specialPrice) {
            params.specialPrice = true;
        }


    }
    console.log(basePrice);
}


checkPriceFromMonitoring({
    cost: 1324,
    weight: 4565,
    retailPrice: 4561,
    actualPrice: 7897,
    specialPrice: true,
    recommendedRetailPrice: 4566,
    monitoringPrice: 5646,
    storeFormat: 'ВПРОК',

});



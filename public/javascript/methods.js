import * as Prices from './prices.js';

function getDomData(rangePicker, switcher){  
    return {
        priceIndex: rangePicker.value/ rangePicker.step, 
        discount: (switcher.classList.contains('selected')) ? true : false
    };
}





export function updateDOM(rangePicker, switcher){
    
    let {priceIndex, discount } = getDomData(rangePicker, switcher)

    document.querySelector('#page-views').innerText = Prices.getViews(priceIndex)
    document.querySelector('#price').innerText = Prices.getPrice(priceIndex,discount)
}
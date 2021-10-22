import * as Methods from './methods.js';
import * as Prices from './prices.js';

var switcher = document.querySelector('.switch');

switcher.addEventListener('click',function(){
    this.classList.toggle('selected')

    if(this.classList.contains('selected')){ 
        Methods.addDiscount()
    } else {
        Methods.removeDiscount();
    }
})


document.querySelector('#selected_range').addEventListener('change',function(){
    let optionIndex = Methods.getCurrentValue(this) / this.step;
    
    let price = (switcher.classList.contains('selected')) ? Prices.getDiscountPrice(optionIndex) : Prices.getPrice(optionIndex);
    console.log(price);
})



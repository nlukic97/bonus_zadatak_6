import * as Methods from './methods.js';

var switcher = document.querySelector('.switch');
var rangePicker = document.querySelector('#selected_range')

switcher.addEventListener('click',function(){
    this.classList.toggle('selected')
    changePrice(rangePicker, this)
})



rangePicker.addEventListener('change',function(){
   changePrice(this, switcher) 
})


function changePrice(switcher, rangePicker){
    Methods.updateDOM(switcher, rangePicker)
}





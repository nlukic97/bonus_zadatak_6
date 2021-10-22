import * as Methods from './methods.js';




var switcher = document.querySelector('.switch');
var rangePicker = document.querySelector('#selected_range')

switcher.addEventListener('click',function(){
    this.classList.toggle('selected')
    changePrice(rangePicker, this)
})



rangePicker.addEventListener('input',function(){
   changePrice(this, switcher)
   updateSecondSlider(this) 
})


function changePrice(switcher, rangePicker){
    Methods.updateDOM(switcher, rangePicker)
}


function updateSecondSlider(rangePicker){
    document.querySelector('.curr-range').style.width = rangePicker.value + '%';
}





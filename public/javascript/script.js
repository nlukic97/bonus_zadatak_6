import * as Methods from './methods.js';

var switcher = document.querySelector('.switch');
var rangePicker = document.querySelector('#selected_range')

switcher.addEventListener('click',function(){
    this.classList.toggle('selected')
    updateAlle(rangePicker, this)
})



rangePicker.addEventListener('change',function(){
   updateAlle(this, switcher) 
})


function updateAlle(switcher, rangePicker){
    Methods.updateDOM(switcher, rangePicker)
}





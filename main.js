const counter=document.getElementById('counter');
const buttomMinus=document.getElementById('minus');
const buttonPlus=document.getElementById('plus');
let counterValue=0;
const applePrice =0.97;
const total = document.getElementById('total');
var calculPrice = counterValue * applePrice;
buttonPlus.addEventListener('click', function(){
    counterValue++;
    if(counterValue==1){   
            counter.innerHTML= counterValue+' article ';
    }else{
    counter.innerHTML= counterValue+' articles';
    total.innerHTML = calculPrice;
    }
   
}

);
buttomMinus.addEventListener('click', function(){
    counterValue--;
    if(counterValue<=0){
        counterValue=0;
        counter.innerHTML= counterValue+' article ';
    }else if(counterValue==1){   
        counter.innerHTML= counterValue+' article ';
    }else{
    counter.innerHTML= counterValue+' articles';
    }
    
});



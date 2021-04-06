const counter=document.getElementById('counter');
const buttomMinus=document.getElementById('minus');
const buttonPlus=document.getElementById('plus');
let counterValue=0;

buttonPlus.addEventListener('click', function(){
    counterValue++;
    if(counterValue==1){   
            counter.innerHTML= counterValue+' article ';
    }else{
    counter.innerHTML= counterValue+' articles';
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



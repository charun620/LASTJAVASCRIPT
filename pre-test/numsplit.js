function numberSpilt(a) {
    if (a%2==0) {
        a/2;
        s =a/2;
        return console.log(`numbersplit(${a})->[`+a/2,a/2+']'); 
    } else  if (a%2==1) {
        return console.log( `numbersplit(${a})->[`+Math.floor(a/2),Math.ceil(a/2)+']');
    }
    else  if (a%2==-1) {
        return console.log(`numbersplit(${a})->[`+ Math.floor(a/2),Math.ceil(a/2)+']');
    }
        
    
}

numberSpilt(4);
numberSpilt(10);
numberSpilt(11);
numberSpilt(-9);
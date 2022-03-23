var brokenCalc = function(startValue, target) {
    let res = 0;
    while(target > startValue){
        res++;
        if(target % 2 == 1){
            target++;
        }else{
            target = target/2;
        }
    }return res+startValue-target;
};

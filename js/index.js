var handlers={
    primeNumberCheck:function(){
        num=document.getElementById('prime_number').value;
        primeFlag=false;
        for(var i=2;i<=num/2;i++){
            if(num % i == 0){
                primeFlag=true
                break
            }
        }
        if(primeFlag){
            document.getElementById("output1").innerHTML='<b>' + "Entered number is not prime"
        }else{
            document.getElementById("output1").innerHTML= '<b>' + "Entered number is prime"
        }   
    }
}
function factorial(n){
     let result=1;

     do{
          result=result*n
          n--;
     }while(n>=1);
     console.log(`${result}`);
}
factorial(4);

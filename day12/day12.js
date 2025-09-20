function fact(n){

    if(n===1){
        return 1;
    }
    return n*fact(n-1);


}


function logging(callback,n){
    let starttime=performance.now();
   let result= callback(n);
    let endtime=performance.now();
    console.log(result +"  " +"Time of executions"+ Number(endtime-starttime));
}

logging(fact,9);
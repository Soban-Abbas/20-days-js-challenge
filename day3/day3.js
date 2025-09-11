//when inner fun still remeber the veribales of outer funcion even outer fun has sttoped its runing
function fun1(){
    let name="Soban";
    return function(){
        console.log("hello" + name)
    }
}


let call=fun1();
call();

//difference b/w returning function and returing by calling fun

function fun2(){
    let a=10;
    function fun3(){
        return a;
    }
return fun3();
   


}
let callfn=fun2();
console.log(callfn)

// it is importan to usdertsand in above function when we return fun() inside it return value becuase it call fun3 then that fun3 return a which is 10 and now fun3 holding 10 so fun2 returning 10

//but when we only return fun name from parent function its means we are returning whole inner fun whose name we are retrunig so we can use outside of code 
// first we call parent fun by storing it in varibale becuase it is returning something like fun the we can call that varibale becuase its holding the function.
let locationInput=document.getElementById("location");
let searchBtn=document.getElementById("searchbtn");
searchBtn.disabled=true;
locationInput.addEventListener("input",function(){
    if(locationInput.value===""){
        searchBtn.disabled=true;
    }else{
        searchBtn.disabled=false;

    }
    
})


searchBtn.addEventListener("click", async function(e){
    let city=locationInput.value.trim();
    console.log(locationInput.value );

    const key= `http://api.weatherapi.com/v1/current.json?key=57f2f7300faa435eaee151111252009&q=${city}`;

    async function weatherapi() {
        let result=await fetch(key)
        return result.json();
    }

let data= await weatherapi();

let show=document.getElementById("div");
show.textContent=`Temperatur in ${city} is ${data.current.temp_c} C`;

})


let locationInput = document.getElementById("location");
let show = document.getElementById("div");
let searchBtn = document.getElementById("searchbtn");
searchBtn.disabled = true;
locationInput.addEventListener("input", function () {
  if (locationInput.value === "") {
    searchBtn.disabled = true;
  } else {
    searchBtn.disabled = false;
  }
});

searchBtn.addEventListener("click",  function (e) {
  let city = locationInput.value.trim();
  console.log(locationInput.value);

  const key = `http://api.weatherapi.com/v1/current.json?key=57f2f7300faa435eaee151111252009&q=${city}`;

   function weatherapi() {
    let result =  fetch(key)
    .then(function(response){
return response.json();

    })
    .then(function(data){
 show.innerHTML = `Temperatur in ${city} is ${data.current.temp_c} C <br> Wind : ${data.current.wind_kph}km/h <br> Humidity : ${data.current.humidity}% <br> Condition : ${data.current.condition.text}`;
    })
    .catch(function(error){
        show.innerHTML=error;
    }).finally(function(){
        console.log('Process Done');
    })
    
  }

//   let data = await weatherapi();

//   
//  
weatherapi();
  locationInput.value = "";
});

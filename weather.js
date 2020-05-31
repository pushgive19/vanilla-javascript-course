const weather = document.querySelector('.js-weather');

const API_KEY = "fd78063dd55b83f26b55f448fc30c9b1";

const COORDS_LS  ='location'

function getWeather(lat, lon){
   fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
   ).then(function(response){
        return response.json();
   }).then(function(json){
       const temperature = json.main.temp;
       const place = json.name;
       weather.innerText=`${place} @ ${temperature}`;
   });
}

function saveLocation(coordsObj){
    localStorage.setItem(COORDS_LS, JSON.stringify(coordsObj));
}

function handleGeoSuccese(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const positionObj = {
        latitude,
        longitude
    }
    saveLocation(positionObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("Can't accese location")
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccese, handleGeoError);
}


}

function loadCoords(){
    const loadedCoords =  localStorage.getItem(COORDS_LS);
    if (loadedCoords === null){
       askForCoords();
    }else{
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}
function init(){
        loadCoords();
}
init();


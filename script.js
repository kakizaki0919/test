let lat = document.getElementById('lat');
let lng = document.getElementById('lng');
let map = document.getElementById('map');

navigator.geolocation.getCurrentPosition((position)=>{   
    let coords = position.coords;
    
    lat.textContent = coords.latitude;
    lng.textContent = coords.longitude;
    map.setAttribute('href', `https://www.google.co.jp/maps/@${coords.latitude},${coords.longitude},15z`);
});
function getPos(){
    navigator.geolocation.getCurrentPosition((position)=>{   
        let coords = position.coords;
        
        
        
        lat.textContent = coords.latitude;
        lng.textContent = coords.longitude;
        
    


        console.log(lat.textContent);
        var MyLatLng = new google.maps.LatLng(lat.textContent, lng.textContent);
        var Options = {
            zoom: 15,      //地図の縮尺値
            center: MyLatLng,    //地図の中心座標
            mapTypeId: 'roadmap'   //地図の種類
        };
        var map = new google.maps.Map(document.getElementById('map'), Options);
        
        new google.maps.Marker({
            position: MyLatLng,
        })
    });
}
setInterval(getPos,5000);
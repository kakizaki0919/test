
let lat = document.getElementById('lat');; // 緯度
let lng = document.getElementById('lng'); // 経度
let zoom = 16; // ズームレベル
navigator.geolocation.getCurrentPosition((position)=>{   
  let coords = position.coords;
  
  lat.textContent = coords.latitude;
  lng.textContent = coords.longitude;
  
  let lat2 = coords.latitude.toFixed(2)
  let lng2 = coords.longitude.toFixed(2)


  console.log(lat.textContent);

  let map = L.map("map"); // 地図の生成
  map.setView([lat.textContent,lng.textContent], zoom); // 緯度経度、ズームレベルを設定する

  // タイルレイヤを生成し、地図に追加する
  // 今回はOpenStreetMapを表示する
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {
      // 著作物の表示
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }
  ).addTo(map);

});


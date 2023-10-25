
let lat = document.getElementById('lat');; // 緯度
let lng = document.getElementById('lng'); // 経度
let zoom = 16; // ズームレベル
var n = 0;
let map = L.map("map"); // 地図の生成
// タイルレイヤを生成し、地図に追加する
    // 今回はOpenStreetMapを表示する
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
      {
        // 著作物の表示
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }
    ).addTo(map);
function getPos(){
  navigator.geolocation.getCurrentPosition((position)=>{   
    let coords = position.coords;
    
    lat.textContent = coords.latitude;
    lng.textContent = coords.longitude;
  


    console.log(lat.textContent);
    console.log(lng.textContent);

    
    map.setView([lat.textContent,lng.textContent], zoom); // 緯度経度、ズームレベルを設定する

    

    const mark = L.marker([lat.textContent,lng.textContent]);
    mark.addTo(map);
    n++;
    console.log(n);

  });
}
setInterval("getPos()",5000);


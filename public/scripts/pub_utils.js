
let gMapsConfig = {}


function initMap(APIpath) {

  map = new google.maps.Map(document.getElementById('map'), {
     zoom: 9,
     center: {lat: 50.9622259, lng: -114.9341703},
     mapTypeId: google.maps.MapTypeId.TERRAIN
  });

  map.data.loadGeoJson(APIpath);
}






// {
//         geodesic: true,
//         strokeColor: '#FF0000',
//         strokeOpacity: 1.0,
//         strokeWeight: 2
//       }


  // map.data.setStyle({
  //   fillColor: 'green',
  //   strokeWeight: 3
  // });
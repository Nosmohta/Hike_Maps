
let gMapsConfig = {}


function initMap(APIpath) {

  map = new google.maps.Map(document.getElementById('map'), {
     zoom: 9,
     center: {lat: 50.9622259, lng: -114.9341703},
     mapTypeId: google.maps.MapTypeId.TERRAIN
  });

  // zoom to show all the features
  var bounds = new google.maps.LatLngBounds();
  map.data.addListener('addfeature', function(e) {
    processPoints(e.feature.getGeometry(), bounds.extend, bounds);
    map.fitBounds(bounds);
  });

  map.data.loadGeoJson(APIpath);
}

function processPoints(geometry, callback, thisArg) {
  if (geometry instanceof google.maps.LatLng) {
    callback.call(thisArg, geometry);
  } else if (geometry instanceof google.maps.Data.Point) {
    callback.call(thisArg, geometry.get());
  } else {
    geometry.getArray().forEach(function(g) {
      processPoints(g, callback, thisArg);
    });
  }
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

$(() => {




  $.ajax({
    method: "POST",
    url: "/api/maps/mapid",
    data: {
      "pathname": location.pathname
    }
  }).done((results) => {
        console.log(results);

        // let parse = JSON.parse(results)

        // console.log("parse", parse);

        // let stringy = JSON.stringify(results);
        // console.log("stringy", stringy);


        var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: {lat: -28, lng: 137}
        });

        // NOTE: This uses cross-domain XHR, and may not work on older browsers.
        map.data.loadGeoJson('https://storage.googleapis.com/mapsdevsite/json/google.json');
      }

        $.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBd-gj2cclo8bKnJzv2ChFVEtengy6LSQE", () => {
                    initMap();
                })


    });

});



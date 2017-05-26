
$(() => {

  const gMapConfig = "hello"

  const flightPathConfig = "hello"

  // console.log(gMapConfig )
  // console.log(flightPathConfig)
  // console.log(location.pathname)



  $.ajax({
    method: "POST",
    url: "/api/maps/mapid",
    data: {
      "pathname": location.pathname
    }
  }).done((results) => {
        let coordinates = results.coordinates

        google.maps.latlng()


        let googleCoords = configCoords(coordinates)
        console.log(googleCoords)

        $.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBd-gj2cclo8bKnJzv2ChFVEtengy6LSQE", () => {
            initMap(coordinates);
            initMap(googleCoords);
        })


        function initMap( coords ) {
              map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: 51.044270, lng: -114.062019},
                zoom: 10,
                mapTypeId: google.maps.MapTypeId.TERRAIN
              });

              var flightPlanCoordinates = coords

              var flightPath = new google.maps.Polyline({
                path: flightPlanCoordinates,
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 2
              });

              flightPath.setMap(map);
            }



      });


 });


        // function initialize(){
        //   var mapOptions = {
        //     zoom: 8,
        //     center: new google.maps.LatLng(47.3239, 5.0428),
        //     mapTypeId: google.maps.MapTypeId.ROADMAP
        //     };
        //   map = new google.maps.Map($("#map"),mapOptions);
        //  }

        // function loadGoogleMaps(){
        //       var script_tag = document.createElement('script');
        //       script_tag.setAttribute("type","text/javascript");
        //       script_tag.setAttribute("src","http://maps.google.com/maps/api/js?sensor=false&callback=gMapsCallback");
        //       (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
        //   }

        //   $(window).bind('gMapsLoaded', initialize);
        //   loadGoogleMaps();



        // // build map
        //     const map = ""

        //     function initMap() {
        //     map = new google.maps.Map(document.getElementById('map'), {
        //         center: {lat: 51.044270, lng: -114.062019},
        //         zoom: 10,
        //         mapTypeId: google.maps.MapTypeId.TERRAIN
        //       });

        //       var flightPlanCoordinates = [
        //         {lat: 51.044270, lng: -114.062019},
        //         {lat: 51.131470, lng: -114.010559},
        //         {lat: 51.0498, lng: -113.8233},
        //         {lat: 51.044270, lng: -114.062019}
        //       ];

        //       var flightPath = new google.maps.Polyline({
        //         path: flightPlanCoordinates,
        //         geodesic: true,
        //         strokeColor: '#FF0000',
        //         strokeOpacity: 1.0,
        //         strokeWeight: 2
        //       });

        //       flightPath.setMap(map);
        //     }


















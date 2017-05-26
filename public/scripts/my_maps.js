$(() => {
  // $.ajax({
  //   method: "GET",
  //   url: "/api/users/userid"
  // }).done((data) => {

  //   })
     $.ajax({
      method: "GET",
      url: "/api/maps"
     }).done((map) => {
        for (hikes of map) {
          console.log(hikes.title)
          let hike = $("<a>").text(hikes.title).attr("href", `/maps/${hikes.id}`);
          let editbutton= $("<button>").attr("type", "button").addClass("btn btn-primary").text("edit");
          let li= $("<li>").append(hike).append(editbutton).addClass("h5");
          $(".myhikes").append(li);
        }
     });


                      var map;
                    function initMap() {
                      map = new google.maps.Map(document.getElementById('map'), {
                        center: {lat: 51.044270, lng: -114.062019},
                        zoom: 10,
                        mapTypeId: google.maps.MapTypeId.TERRAIN

                      });

                      var flightPlanCoordinates = [
                        {lat: 51.044270, lng: -114.062019},
                        {lat: 51.131470, lng: -114.010559},
                        {lat: 51.0498, lng: -113.8233},
                        {lat: 51.044270, lng: -114.062019}
                      ];

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
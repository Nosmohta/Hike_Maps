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
          let hike = $("<a>").text(hikes.title).attr("href", `/maps/${hikes.id}`);
          let editbutton= $("<button>").attr("type", "button").addClass("editing btn btn-primary").text("edit");
          let li= $("<li>").append(hike).append(editbutton).addClass("h5");
          $(".myhikes").append(li);
          $(editbutton).on("click", function() {
            $(".userhikelist").remove();
            buildform();
          });
        }
     });

});

  function buildform() {
      let titletext= $("<p>").text("Title:");
      let titleinput= $("<input>").attr("type", "text").attr("name", "title").attr("value", "");
      let drivingtext= $("<p>").text("Driving Time:");
      let drivinginput= $("<input>").attr("type", "number").attr("name", "drivingtime").attr("value", "");
      let descriptiontext = $("<p>").text("Description:");
      let descriptioninput = $("<textarea>").attr("rows", "4").attr("cols", "50");
      let imageuploadtext = $("<p>").text("Image upload:");
      let imageuploadinput = $("<input>").attr("type", "file").attr("name", "pic").attr("accept", "image/*");
      let coorduploadtext = $("<p>").text("Co-ordinates upload:");
      let coorduploadinput = $("<input>").attr("type", "file").attr("name", "coordinates").attr("accept", "");
      let submission = $("<input>").attr("type", "submit").attr("value", "submit");
      let datainput= $("<form>").addClass("datainput").attr("action", "").append(titletext).append(titleinput).append(drivingtext).append(drivinginput).append(descriptiontext).append(descriptioninput).append(imageuploadtext).append(imageuploadinput).append(coorduploadtext).append(coorduploadinput).append("<br>").append(submission);
      let useredit= $("<div>").addClass("useredit text-left").append(datainput);
      $(".editscreen").append(useredit);
  }
// new button click
$(() => {
     $(".createnew").on("click", function() {
      $(".userhikelist").remove();
      buildform();
     });
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

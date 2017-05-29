$(() => {

    // hardcoded returning map 1 ==> load all user maps or load none...
    // let mapPath = $('.myhikes').attr('src');
    // console.log(mapPath);

    // var map;
    // function initMap() {
    //     map = new google.maps.Map(document.getElementById('map'), {
    //       zoom: 7,
    //       center: {lat: 51, lng: -114}
    //     });
    // // STRETCH - load all owner hike paths on home screen.
    // // map.data.loadGeoJson('/api' + location.pathname);
    // }

    // let apiPath = '/api' + mapPath + '/path';
    // console.log(apiPath);

    //Initialize Map
    var map;
    $.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBd-gj2cclo8bKnJzv2ChFVEtengy6LSQE", () => {
        initMap( '/api/maps/1');
    });



   $.ajax({
    method: "GET",
    url: "/api/users/userid",
    xhrFields: {
      withCredentials: true
    }
   }).done((map) => {
      for (hikes of map) {
        let hike = $("<a>").text(hikes.title).attr("href", `/maps/${hikes.id}`);
        let editbutton= $("<button>").attr("type", "button").addClass("editing btn btn-primary").text("edit").attr("data-id", hikes.id);
        let li= $("<li>").append(hike).append(editbutton).addClass("h5");
        $(".myhikes").append(li);

        //beg: build form function when clicking on edit
        $(editbutton).on("click", function(event) {
          event.preventDefault();
          $(".userhikelist").remove();
          buildform($(this).data("id"));
        });
        //end: build form function when clicking on edit
      }
   });

  // new button click
  $(() => {
       $(".createnew").on("click", function() {
        $(".userhikelist").remove();
        buildformorig();
       });
  });




});


function buildform(mapid) {

  //Load Edit map details
  var map;
  initMap('/api/maps/' + mapid);


  $.ajax({
    method: "POST",
    url: "/api/users/userid/mapid",
    data: {"mapid" : mapid}
  }).done((map) => {

    //Add dynamic image path based on mapid:
    let image = $("<img id='hikeimg' class='img-responsive' width='80%'>").attr('src', '/public/library/hike_images/img-' +map[0].id + '.jpg' );
    let titletext= $("<p>").text("Title:");
    let titleinput= $("<input>").attr("type", "text").attr("name", "title").attr("value", `${map[0].title}`);
    let drivingtext= $("<p>").text("Driving Time:");
    let drivinginput= $("<input>").attr("type", "number").attr("name", "drivingtime").attr("value", `${map[0].travel_time}`);
    let descriptiontext = $("<p>").text("Description:");
    let descriptioninput = $("<textarea>").attr("rows", "4").attr("cols", "50").val( map[0].description);
    let imageuploadtext = $("<p>").text("Image upload:");
    let imageuploadinput = $("<input>").attr("type", "file").attr("name", "pic").attr("accept", "image/*").attr("id", "imageuploadinput");
    let coorduploadtext = $("<p>").text("Co-ordinates upload:");
    let coorduploadinput = $("<input>").attr("type", "file").attr("name", "coordinates").attr("accept", "").attr("id", "coorduploadinput");
    let submission = $("<input>").attr("type", "submit").attr("value", "submit");
    let datainput= $("<form>").addClass("datainput").attr("action", "").append(image).append(titletext).append(titleinput).append(drivingtext).append(drivinginput).append(descriptiontext).append(descriptioninput).append(imageuploadtext).append(imageuploadinput).append(coorduploadtext).append(coorduploadinput).append("<br>").append(submission);
    let useredit= $("<div>").addClass("useredit text-left").append(datainput);
    $(".editscreen").append(useredit);

      $(datainput).on("submit", function(event) {
      event.preventDefault();
      console.log($(titleinput).val());
      console.log($(drivinginput).val());
      console.log($(descriptioninput).val());
            // separate picture saving
      let pathfile = $("#coorduploadinput")[0].files[0];
      console.log(pathfile);

      let imagefile = $("#imageuploadinput")[0].files[0];
      console.log(imagefile);
      image = JSON.stringify(imagefile);
      console.log(image);


  // copy paste
      $.ajax({
        method: "POST",
        url: "/api/users/userid/newhike",
        data: {
          "title" : $(titleinput).val(),
          "travel_time" : $(drivinginput).val(),
          "description" : $(descriptioninput).val(),
          "path" : JSON.stringify(pathfile),
          "picture" : JSON.stringify(imagefile)
        }
      })
    });
  })
}



function buildformorig() {
    let image = $("<img id='hikeimg' class='img-responsive' width='80%'>");
    let titletext= $("<p>").text("Title:");
    let titleinput= $("<input>").attr("type", "text").attr("name", "title").attr("value", "").addClass("titleinput");
    let drivingtext= $("<p>").text("Driving Time:");
    let drivinginput= $("<input>").attr("type", "number").attr("name", "drivingtime").attr("value", "").addClass("drivinginput");
    let descriptiontext = $("<p>").text("Description:");
    let descriptioninput = $("<textarea>").attr("rows", "4").attr("cols", "50").attr("id", "descriptioninput");
    let imageuploadtext = $("<p>").text("Image upload:");
    let imageuploadinput = $("<input>").attr("type", "file").attr("name", "pic").attr("accept", "image/*").attr("id","imageuploadinput");
    let coorduploadtext = $("<p>").text("Co-ordinates upload:");
    let coorduploadinput = $("<input>").attr("type", "file").attr("name", "coordinates").attr("accept", "").attr("id", "coorduploadinput");
    let submission = $("<input>").attr("type", "submit").attr("value", "submit").attr("id", "submission");
    let datainput= $("<form>").addClass("datainput").attr("action", "").append(image).append(titletext).append(titleinput).append(drivingtext).append(drivinginput).append(descriptiontext).append(descriptioninput).append(imageuploadtext).append(imageuploadinput).append(coorduploadtext).append(coorduploadinput).append("<br>").append(submission);
    let useredit= $("<div>").addClass("useredit text-left").append(datainput);
    $(".editscreen").append(useredit);

// submit form
    $(datainput).on("submit", function(event) {
      event.preventDefault();
      console.log($(titleinput).val());
      console.log($(drivinginput).val());
      console.log($(descriptioninput).val());
            // separate picture saving
      let pathfile = $("#coorduploadinput")[0].files[0];
      console.log(pathfile);

      let imagefile = $("#imageuploadinput")[0].files[0];
      console.log(imagefile);

  // copy paste
      $.ajax({
        method: "POST",
        url: "/api/users/userid/newhike",
        data: {
          "title" : $(titleinput).val(),
          "travel_time" : $(drivinginput).val(),
          "description" : $(descriptioninput).val(),
          "path" : JSON.stringify(pathfile),
          "picture" : JSON.stringify(imagefile)
        }
      })
    });

}



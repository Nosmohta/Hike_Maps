
$(() => {

    //Initialize Map

    var map;
    $.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBd-gj2cclo8bKnJzv2ChFVEtengy6LSQE", () => {
        initMap( '/api' + location.pathname + '/path');
    });



  $.ajax({
    method: "GET",
    url: "/api" + location.pathname,
    xhrFields: {
      withCredentials: true
    }
  }).done((results) => {
    //build DOM with results
    $('#title').text(results.title);
    $('#description').text(results.description);
    $('#hiketime').text("Estimated hike time: " + results.travel_time);


    //Add picture from file async
    console.log(location.pathname);

    let mapid = location.pathname.replace('/maps/', '');
    console.log(mapid)
    if(mapid) {
      $('#hikeimg').attr('src', '/public/library/hike_images/img-' + mapid + '.jpg')
    }







  });







});



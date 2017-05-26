$(() => {



  $.ajax({
    method: "GET",
    url: "/api/maps/mapid"
  }).done((results) => {
      //grab map element and change attribute of map to include path details
      //$("<div>").text(user.name).appendTo($("body"));

    console.log("DONE map ajx request.")
  })




});

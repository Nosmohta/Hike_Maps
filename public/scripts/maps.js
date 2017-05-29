$(() => {


 $.ajax({
    method: "GET",
    url: "/api/maps"
  }).done((map) => {
    for(hikes of map) {
      let hike= $("<a>").text(hikes.title).addClass("hike").attr("href", `/maps/${hikes.id}`);
      let div= $("<div>").append(hike);
      $("#hikelist").append(div);
    }
  });





});
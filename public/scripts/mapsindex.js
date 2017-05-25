$(() => {

console.log("hello");
 $.ajax({
    method: "GET",
    url: "/api/maps"
  }).done((map) => {
    for(hikes of map) {
      let hike= $("<a>").text(hikes.title).addClass("hike").attr("href", `/maps/${hikes.id}`);
      let li= $("<li>").append(hike);
      $("#hikelist").append(li);
    }
  });





});
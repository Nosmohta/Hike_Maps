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

});
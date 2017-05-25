$(() => {


  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {

      $("<input>").attr().val(user.name).appendTo($("#autologin"));
    }
  });;





});

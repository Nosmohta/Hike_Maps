$(() => {


  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      console.log(user.name);
      let input = $("<input>").attr().val(user.name)
      let li = $("<li>").append(input);
      $("#autologin").append(li);
    }
  });;





});

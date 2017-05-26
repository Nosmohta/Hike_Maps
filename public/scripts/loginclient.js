$(() => {



  $.ajax({
    method: "GET",
    url: "/api/login"
  }).done((users) => {
    for(user of users) {
      let input = $("<input  type='submit' >").val(user.name)
      let form = $("<form method='POST' action='/login'>").attr( "action", "/users/" + user.name).append(input);
      $("#autologin").append(form);


    }


  });


});

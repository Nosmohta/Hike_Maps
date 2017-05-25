$(() => {



  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      console.log(user.name);
      let input = $("<input  type='submit' >").val(user.name)
      let form = $("<form method='GET' path='/login'>").attr("path", "/login/" + user.name).append(input);
      $("#autologin").append(form);

      // // add event listner to the buttons
      // $([val = user.name]).on("click", () => {
      //   preventDefault();
      //   //ajax req to login
      //   //


      // })

    }


  });


});

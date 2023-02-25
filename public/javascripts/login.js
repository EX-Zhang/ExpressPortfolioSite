
// login.js, Erxun Zhang, 301331403, 2023-2-21

function login() {

  $(".input-alert").css("display", "none"); // Set all error alert unvisible

  let username = $("#username").val();

  let password = $("#password").val()

  let valid_input = true; // Check if the input is valid

  if (username.length === 0) {

    $("#username-alert").css("display", "");

    valid_input = false;

  }

  if (password.length === 0) {

    $("#password-alert").css("display", "");

    valid_input = false;

  }

  if (!valid_input) { // If the input is invalid, stop the function

    return;

  }

  $.ajax({

    url: "/login/check-user",

    method: "post",

    data: {

      username: username,

      password: password,

    },

    success: function (result, status, xhr) {

      let message = result['message'];

      console.log(status);

      if (message === 'success') {

        window.location.href = '/businesscontacts';

      }

    },

    error: () => {

      $("#login-alert").css("display", "");

    },

  });


}

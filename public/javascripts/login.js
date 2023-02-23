
function login() {

  $(".input-alert").css("display", "none");

  let username = $("#username").val();

  let password = $("#password").val()

  let valid_input = true;

  if (username.length === 0) {

    $("#username-alert").css("display", "");

    valid_input = false;

  }

  if (password.length === 0) {

    $("#password-alert").css("display", "");

    valid_input = false;

  }

  if (!valid_input) {

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

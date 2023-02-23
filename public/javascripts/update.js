
function update_Contact(id) {

  $(".input-alert").css("display", "none");

  let name = $("#name").val();

  let number = $("#number").val();

  let email = $("#email").val();

  let valid_input = true;

  if (name.length === 0) {

    $("#name-alert").css("display", "");

    valid_input = false;

  }

  if (number.length === 0) {

    $("#number-alert").css("display", "");

    valid_input = false;

  }

  if (email.length === 0) {

    $("#email-alert").css("display", "");

    valid_input = false;

  }

  if (!valid_input) {

    return;

  }


  $.ajax({

    url: "/update/update",

    method: "post",

    data: {

      id: id,

      name: name,

      number: number,

      email: email,

    },

    success: function (result, status, xhr) {

      let message = result['message'];

      if (message === 'success') {

        window.location.href = '/businesscontacts';

      }

    },


  });

}

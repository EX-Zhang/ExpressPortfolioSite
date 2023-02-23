
function delete_Contact(id) {

  $.ajax({

    url: "/update/delete",

    method: "post",

    data: {

      id: id,

    },

    success: function (result, status, xhr) {

      let message = result['message'];

      if (message === 'success') {

        window.location.href = '/businesscontacts';

      }

    },


  });

}

// ? validate and retrieve the new burger name

$(function () {
  $('#submitBurger').on('click', function (e) {
    e.preventDefault()
    var newBurger = {
      newBurger: $('#newBurger').val().trim(),
      devoured: 0
    };

    function validateForm() {
      var isValid = true;
      if ($("#newBurger").val() === "") {
        isValid = false;
        console.log('you need to enter something');
      }
      return isValid;
    }

    if (validateForm()) {
      console.log($('#newBurger').val());

      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function () {
          console.log("that sounds yummy");
          playAudio('assets/sound/mmm.mp3', 1600);
        }
      );
    }
  });

  // ! function for playing sounds
  function playAudio(url, timeout) {
    var a = new Audio(url);
    a.play();
    // window reloads after the audio is played
    setTimeout(function () {
      location.reload();
    }, timeout);
  }

  // Put / change burger to eaten
  //  ? delete/eat burger
  $(".eat-burger").on("click", function (event) {

    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");

    var eaten = {
      devoured: newDevoured
    };
    // Send the Put request.
    $.ajax("/api/burgers/" + id, {
        type: "Put",
        data: eaten
      })
      .then(
        function () {
          // Play Bite sound
          playAudio('assets/sound/bite.mp3', 150);
        })
  });

  // Delete burger from database/menu
  $(".btn-danger").on("click", function (event) {
    var id = $(this).data("id");

    //  Ajax Delete Request
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("burger deleted from the menu");
        playAudio('assets/sound/byebye.mp3', 700);
      }
    );
  });
});
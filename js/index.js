(function() {
  $(".navbar-toggler-icon")
    .off()
    .on("click", function() {
      if (
        $("#collapsibleNavbar")
          .attr("class")
          .includes("show")
      ) {
        $("#collapsibleNavbar").hide();
      } else {
        //console.log(123);
        $("#collapsibleNavbar").show();
        $("body").css("overflow-y", "hidden");
      }
    });

  $("#registerLink")
    .off()
    .on("click", function() {
      $("#loginFormRow").hide();
      $("#registerFormRow").css({ display: "flex" });
      $("#collapsibleNavbar, #leaderBoard").hide();
      $("#collapsibleNavbar").removeClass("show");
      $(".referBtn, .offerBtn").hide();
    });

  $("#loginlink")
    .off()
    .on("click", function() {
      $("#loginFormRow").css({ display: "flex" });
      $("#registerFormRow").hide();
      $("#collapsibleNavbar, #leaderBoard").hide();
      $("#collapsibleNavbar").removeClass("show");
      $(".referBtn, .offerBtn").hide();
    });

  $(".registerDigiGo")
    .off()
    .on("click", function() {
      $("#registerModal").modal("toggle");
    });

  $("#registerSubmit")
    .off()
    .on("click", function() {
      $("#registerModal").modal("toggle");
      $("#registerFormRow").css({ display: "none" });
      $("#leaderBoard").css({ display: "flex" });
      $(".referBtn, .offerBtn").show();
    });

  $(".loginDigiGo")
    .off()
    .on("click", function() {
      $("#loginFormRow").hide();
      $("#leaderBoard").css({ display: "flex" });
      $(".referBtn, .offerBtn").show();
    });

  $(".cityRewards, .myCityText")
    .off()
    .on("click", function() {
      $("#cityDBSRewards").modal("toggle");
    });
  let weight = 0,
    height = 0;
  function calculateBmi(name, value) {
    if (name === "weight") {
      weight = value;
    } else if (name === "height") {
      height = value;
    }
    if (weight > 0 && height > 0) {
      var finalBmi = weight / (((height / 100) * height) / 100);

      $("#bmi").val(finalBmi);
    }
  }

  $("#weight").on("change keyup paste", function() {
    calculateBmi("weight", $(this).val());
  });
  $("#height").on("change keyup paste", function() {
    calculateBmi("height", $(this).val());
  });

  $(".statistics")
    .off()
    .on("click", function() {
      $("#statsModal").modal("toggle");
    });

  $(".referBtn")
    .off()
    .on("click", function() {
      $("#referModal").modal("toggle");
    });

  $(".offerBtn")
    .off()
    .on("click", function() {
      $("#offerModal").modal("toggle");
    });
})();

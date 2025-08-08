$(document).ready(function () {
  var arrImpostor = [];
  var arrPosition = [];
  var positionIndex = [-1, -1, -1, -1, -1];
  var nLife = 3;
  var nCatch = 0;
  var tmrBrief;
  var tmrGame;
  var amountApppear = 0;

  //$("#gameLoc").hide();
  $("#gameHeader").hide();
  $(".base").hide();
  $(".crew").hide();
  $("#whoDunnit").hide();

  $("#btnStart").click(function () {
    $("#btnStart").hide();
    //$("#gameLoc").show();
    $("#gameHeader").show();
    $(".base").show();
    $("#whoDunnit").show();
    var arrCm = [0, 1, 2, 3, 4];
    var rnd1 = Math.floor(Math.random() * 5);
    arrImpostor.push(arrCm[rnd1]);
    arrCm.splice(rnd1, 1);
    var rnd2 = Math.floor(Math.random() * 4);
    arrImpostor.push(arrCm[rnd2]);

    $("#impostor1").css(
      "background-image",
      "url('images/" + arrImpostor[0] + ".png')"
    );
    $("#impostor2").css(
      "background-image",
      "url('images/" + arrImpostor[1] + ".png')"
    );
    tmrBrief = setInterval(startGame, 3000);
  });

  function startGame() {
    $("#whoDunnit").hide();
    $("#lifecatch").html("Life : " + nLife + "  |  Point : " + nCatch);
    clearInterval(tmrBrief);
    clearInterval(tmrGame);

    var arrLocation = [];
    for (var i = 0; i < 5; i++) {

     				 arrLocation.push($("#crew" + i));

    }
    alert(arrLocation);
    for (var i = 0; i < 5; i++) {
      arrLocation[i].click(function () {
        if (true) {
          nCatch += 1;
        } else {
          nLife -= 1;
        }

        $("#lifecatch").html("Life : " + nLife + "  |  Point : " + nCatch);
      });
    }

    tmrGame = setInterval(gameMechanic, 3000);
  }

  function gameMechanic() {
    amountApppear = 1 + Math.floor(Math.random() * 5);
  }
});

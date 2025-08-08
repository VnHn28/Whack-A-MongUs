<style type="text/css">
  #backgroundColor {
    background-color: #f4f4de;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    position: absolute;
  }

  #btnStart {
    background-color: #e6e6e6;
    margin-top: 20px;
    width: 200px;
    height: 100px;
    left: 43%;
    top: 43%;
    position: absolute;
  }

  .base {
    background-image: url("images/base.PNG");
    background-size: 100%;
    background-repeat: no-repeat;
    width: 250px;
    height: 150px;
    position: absolute;
  }

  #base0 {
    left: 200px;
    top: 200px;
  }

  #base1 {
    left: 600px;
    top: 200px;
  }

  #base2 {
    left: 1000px;
    top: 200px;
  }

  #base3 {
    left: 400px;
    top: 480px;
  }

  #base4 {
    left: 800px;
    top: 480px;
  }

  .crew {
    background-repeat: no-repeat;
    background-size: 100%;
    width: 80px;
    height: 120px;
    position: absolute;
  }

  #crew0 {
    background-image: url("images/0.PNG");
    left: 280px;
    top: 205px;
  }

  #crew1 {
    background-image: url("images/1.PNG");
    left: 680px;
    top: 205px;
  }

  #crew2 {
    background-image: url("images/2.PNG");
    left: 1080px;
    top: 205px;
  }

  #crew3 {
    background-image: url("images/3.PNG");
    left: 480px;
    top: 485px;
  }

  #crew4 {
    background-image: url("images/4.PNG");
    left: 880px;
    top: 485px;
  }

  #gameHeader {
    left: 600px;
    top: 20px;
    position: absolute;
    text-align: center;
  }

  #whoDunnit {
    width: 260px;
    height: 200px;
    background-color: lightblue;
    border-style: solid;
    border-radius: 10px;
    left: 590px;
    top: 250px;
    text-align: center;
    position: absolute;
  }

  #txtWho {
    color: red;
    padding-left: 10px;
    padding-top: 30px;
    font-size: 14pt;
    font-weight: bold;
  }

  #impostor1 {
    width: 80px;
    height: 120px;
    position: absolute;
    left: 30px;
    top: 60px;
    background-size: 100%;
    background-repeat: no-repeat;
  }

  #impostor2 {
    width: 80px;
    height: 120px;
    position: absolute;
    left: 150px;
    top: 60px;
    background-size: 100%;
    background-repeat: no-repeat;
  }
</style>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>A Mole Among Us</title>
  </head>
  <body>
    <div id="backgroundColor">
      <div id="startGame"><button id="btnStart">Start Game</button></div>
      <div id="gameLoc">
        <div id="gameHeader">
          <h3 style="color: red; font-size: 20pt">Catch the Impostors</h3>
          <div id="lifecatch"></div>
        </div>
        <div class="base" id="base0"></div>
        <div class="base" id="base1"></div>
        <div class="base" id="base2"></div>
        <div class="base" id="base3"></div>
        <div class="base" id="base4"></div>
        <div class="crew" id="crew0"></div>
        <div class="crew" id="crew1"></div>
        <div class="crew" id="crew2"></div>
        <div class="crew" id="crew3"></div>
        <div class="crew" id="crew4"></div>
        <div id="whoDunnit">
          <div id="txtWho">There are 2 Impostors</div>
          <div class="impostor" id="impostor1"></div>
          <div class="impostor" id="impostor2"></div>
        </div>
      </div>
    </div>
  </body>
</html>

<script src="https://code.jquery.com/jquery-3.6.0.js"></script>

<script type="text/javascript">
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
</script>

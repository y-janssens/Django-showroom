window.onload = resize();
window.onload = scrollbar();
window.onload = texture();
window.onresize = reportWindowSize;
window.addEventListener("resize", reportWindowSize);
window.onload = touch();

var supportsTouch = "ontouchstart" in window || navigator.msMaxTouchPoints;

if (supportsTouch) {
  clics = "touchstart";
} else if (supportsTouch === undefined) {
  clics = "click";
}

function touch() {
  let check = "ontouchstart" in window || navigator.msMaxTouchPoints;
  if (check) {
    $(".close").trigger("click");
  }
}

let plus = true;
let colorToggle = false;
let muteSound = false;
let panel1 = true;
let panel2 = true;
let panel3 = true;
let panel4 = true;
let panel5 = true;
let panel6 = true;

function toggleOn() {
  $(".toggle").css("visibility", "visible");
  $(".toggle").css("transform", "translateX(-7.6em) scale(0.8)");
  $(".toggle").css("transition", "1250ms ease-in-out");
}

function toggleOff() {
  $(".toggle").css("visibility", "hidden");
  $(".toggle").css("transform", "translateX(0em) scale(0.8)");
  $(".toggle").css("transition", "550ms ease-in-out");
}

$(".close").on("click", function () {
  $("#blocleft").css("transform", "translateX(-18em)");
  $("#blocleft").css("transition", "500ms ease-in-out");
  $(".toggle").css("transform", "translateX(-18em) scale(0.8)");
  $(".toggle").css("transition", "550ms ease-in-out");
  $("#item0").css("transition", "500ms ease-in-out");
  $("#img1").css("transition", "500ms ease-in-out");
  $("#img2").css("transition", "500ms ease-in-out");
  $("#img3").css("transition", "500ms ease-in-out");
  $("canvas").css("transition", "500ms ease-in-out");
  $("#item0").css("margin-left", "0em");
  $("#img1").css("margin-left", "0em");
  $("#img2").css("margin-left", "0em");
  $("#img3").css("margin-left", "0em");
  $("#img4").css("margin-left", "0em");
  $("#img5").css("margin-left", "0em");
  $("#img6").css("margin-left", "0em");
  $("#img7").css("margin-left", "0em");
  $("#vid1").css("margin-left", "0em");
  $("#vid2").css("margin-left", "0em");
  $("#battler").css("margin-left", "0em");
  $("#clock").css("margin-left", "0em");
  $("canvas").css("left", "0em");
  $(".descri1").css("margin-left", "0em");
  $(".descri1").css("margin-left", "0em");
  $(".descri2").css("margin-left", "0em");
  $(".descri2").css("margin-left", "0em");
  $(".descri3").css("margin-left", "0em");
  $(".descri3").css("margin-left", "0em");
  $(".descri4").css("margin-left", "0em");
  $(".descri4").css("margin-left", "0em");
  $(".descri5").css("margin-left", "0em");
  $(".descri5").css("margin-left", "0em");
  $(".descri6").css("margin-left", "0em");
  $(".descri6").css("margin-left", "0em");
  $(".descri7").css("margin-left", "0em");
  $(".descri7").css("margin-left", "0em");
  setTimeout("toggleOn()", 300);
});

$(".toggle").on("click", function () {
  $("#blocleft").css("transform", "translateX(0em)");
  $("#blocleft").css("transition", "500ms ease-in-out");
  $("#item0").css("transition", "500ms ease-in-out");
  $("#img1").css("transition", "500ms ease-in-out");
  $("#img2").css("transition", "500ms ease-in-out");
  $("#img3").css("transition", "500ms ease-in-out");
  $("canvas").css("transition", "500ms ease-in-out");
  $("#item0").css("margin-left", "9em");
  $("#img1").css("margin-left", "9em");
  $("#img2").css("margin-left", "9em");
  $("#img3").css("margin-left", "9em");
  $("#img4").css("margin-left", "9em");
  $("#img5").css("margin-left", "9em");
  $("#img6").css("margin-left", "9em");
  $("#img7").css("margin-left", "9em");
  $("#vid1").css("margin-left", "9em");
  $("#vid2").css("margin-left", "9em");
  $("#battler").css("margin-left", "9em");
  $("#clock").css("margin-left", "9em");
  $("canvas").css("left", "9em");
  $(".descri1").css("margin-left", "9em");
  $(".descri1").css("margin-left", "9em");
  $(".descri2").css("margin-left", "9em");
  $(".descri2").css("margin-left", "9em");
  $(".descri3").css("margin-left", "9em");
  $(".descri3").css("margin-left", "9em");
  $(".descri4").css("margin-left", "9em");
  $(".descri4").css("margin-left", "9em");
  $(".descri5").css("margin-left", "9em");
  $(".descri5").css("margin-left", "9em");
  $(".descri6").css("margin-left", "9em");
  $(".descri6").css("margin-left", "9em");
  $(".descri7").css("margin-left", "9em");
  $(".descri7").css("margin-left", "9em");
  $(".toggle").css("transform", "translateX(1.4em) scale(0.8)");
  $(".toggle").css("transition", "500ms ease-in-out");
  setTimeout("toggleOff()", 550);
});

$(".title1").on("click", function () {
  if (panel1) {
    panel1 = false;
    $(".content1").removeClass;
    $(".content1").slideUp(500);
  } else {
    panel1 = true;
    $(".content1").addClass;
    $(".content1").slideDown(500);
  }
});

$(".title2").on("click", function () {
  if (panel2) {
    panel2 = false;
    $(".content2").slideUp(500);
  } else {
    panel2 = true;
    $(".content2").slideDown(500);
  }
});

$(".title3").on("click", function () {
  if (panel3) {
    panel3 = false;
    $(".content3").slideUp(1000);
  } else {
    panel3 = true;
    $(".content3").slideDown(1000);
  }
});

$(".title4").on("click", function () {
  if (panel4) {
    panel4 = false;
    $(".content4").slideUp(500);
  } else {
    panel4 = true;
    $(".content4").slideDown(500);
  }
});

$(".title5").on("click", function () {
  if (panel5) {
    panel5 = false;
    $(".content5").slideUp(750);
  } else {
    panel5 = true;
    $(".content5").slideDown(750);
  }
});

$(".title6").on("click", function () {
  if (panel6) {
    panel6 = false;
    $(".content6").slideUp(750);
  } else {
    panel6 = true;
    $(".content6").slideDown(750);
  }
});

$(".plus").on("click", function () {
  if (plus) {
    plus = false;
    $("#container").css("visibility", "visible");
    $("#container").css("pointer-events", "initial");
    $("#item0").css("transition", "500ms all");
    $("#item0").css("transform", "translate(-50%, -50%) scale(1)");
    $("#item0").css("visibility", "visible");
    $("#item0").css("opacity", "1");
  } else {
    plus = true;
    $("#container").css("visibility", "hidden");
    $("#container").css("pointer-events", "none");
    $("#item0").css("transition", "250ms all");
    $("#item0").css("transform", "translate(-50%, -50%) scale(0)");
    $("#item0").css("visibility", "hidden");
    $("#item0").css("opacity", "0");
  }
});

$(".clear").on("click", function () {
  if (plus) {
    plus = false;
    $("#container").css("visibility", "visible");
    $("#container").css("pointer-events", "initial");
    $("#item0").css("transition", "500ms all");
    $("#item0").css("transform", "translate(-50%, -50%) scale(1)");
    $("#item0").css("visibility", "visible");
    $("#item0").css("opacity", "1");
  } else {
    plus = true;
    $("#container").css("visibility", "hidden");
    $("#container").css("pointer-events", "none");
    $("#item0").css("transition", "250ms all");
    $("#item0").css("transform", "translate(-50%, -50%) scale(0)");
    $("#item0").css("visibility", "hidden");
    $("#item0").css("opacity", "0");
  }
});

function mute() {
  if (muteSound) {
    muteSound = false;
    sound1.play();
    document.getElementById("sound").src = "./src/assets/ui/son.png";

    $("#sound").css("src");
  } else {
    muteSound = true;
    sound1.stop();
    document.getElementById("sound").src = "./src/assets/ui/soff.png";
  }
}

function reportWindowSize() {
  resize();
}

function resize() {
  var view_width = $(window).width();
  var view_height = $(window).height();
  var height = document.getElementById("item0").offsetHeight;
  var width = document.getElementById("item0").offsetWidth;
  let height_if = document.getElementById("container").offsetHeight;
  s_width_if = height_if / 1400;

  $(".content7").css("height", height);
  $(".content7").css("width", width);
  $(".content7").css("max-height", "80%");
  /*     $('canvas').css('transition', '500ms ease-in-out');
    $('canvas').css('max-height', '80%');
    $('canvas').css('height', '100%');
    $('canvas').css('width', 'auto'); */
  $("#battler").css(
    "transform",
    "translate(-50%, -50%) scale(" + s_width_if + ")"
  );
  $("#clock").css(
    "transform",
    "translate(-50%, -50%) scale(" + s_width_if + ")"
  );
  tooltip();

  /*     if (view_width <= 800) {
        $('body').css('top', '50%');
        $('body').css('left', '50%');
        $('body').css('width', view_height);
        $('body').css('height', view_width);
        $('canvas').css('width', view_height);
        $('canvas').css('height', view_width);       
        $('canvas').css('margin-left', '18em'); 
        $('body').css('transform', 'translate(-50%, -50%) rotateZ(90deg)');
} */
}

function scrollbar() {
  $("#menu, .content7").mCustomScrollbar({
    scrollbarPosition: "outside",
    autoHideScrollbar: "true",
    theme: "minimal-dark",
    scrollInertia: 200,
  });
}

function tooltip() {
  let img1Width = document.getElementById("img1").offsetWidth;
  let img1Height = document.getElementById("img1").offsetHeight;
  let img2Width = document.getElementById("img2").offsetWidth;
  let img2Height = document.getElementById("img2").offsetHeight;
  let img3Width = document.getElementById("img3").offsetWidth;
  let img3Height = document.getElementById("img3").offsetHeight;
  let img4Width = document.getElementById("img4").offsetWidth;
  let img4Height = document.getElementById("img4").offsetHeight;
  let img5Width = document.getElementById("img5").offsetWidth;
  let img5Height = document.getElementById("img5").offsetHeight;
  let img6Width = document.getElementById("img6").offsetWidth;
  let img6Height = document.getElementById("img6").offsetHeight;
  let img7Width = document.getElementById("img7").offsetWidth;
  let img7Height = document.getElementById("img7").offsetHeight;

  $(".descri1").css("width", img1Width);
  $(".descri1").css("height", img1Height);
  $(".descri2").css("width", img2Width);
  $(".descri2").css("height", img2Height);
  $(".descri3").css("width", img3Width);
  $(".descri3").css("height", img3Height);
  $(".descri4").css("width", img4Width);
  $(".descri4").css("height", img4Height);
  $(".descri5").css("width", img5Width);
  $(".descri5").css("height", img5Height);
  $(".descri6").css("width", img6Width);
  $(".descri6").css("height", img6Height);
  $(".descri7").css("width", img7Width);
  $(".descri7").css("height", img7Height);
}

function texture() {
  let lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  document.getElementById("texture").innerHTML = lorem.repeat(20);

  function randomXToY(minVal, maxVal, floatVal) {
    var randVal = minVal + Math.random() * (maxVal - minVal);
    return typeof floatVal == "undefined"
      ? Math.round(randVal)
      : randVal.toFixed(floatVal);
  }

  var exploded = $("#texture").text().split("");
  var count = 100;
  var rdmltr = [];

  while (count--) {
    rdmltr[count] = randomXToY(0, exploded.length);
    while (exploded[rdmltr[count]] == " ") {
      rdmltr[count] = randomXToY(0, exploded.length);
    }
  }
  while (count++ < 100) {
    exploded[rdmltr[count]] =
      '<span class="boldify">' + exploded[rdmltr[count]] + "</span>";
  }

  $("#texture").html(exploded.join(""));
}

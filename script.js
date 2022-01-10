var squares1 = document.getElementById("anim1");
var squares2 = document.getElementById("anim2");
var squares3 = document.getElementById("anim3");
var squares4 = document.getElementById("anim4");
var squares5 = document.getElementById("anim5");
var squares6 = document.getElementById("anim6");

var progress1 = bodymovin.loadAnimation({
	container: document.getElementById('progress1'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'lottie/progress_bar_1.json'
});

var progress2 = bodymovin.loadAnimation({
	container: document.getElementById('progress2'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'lottie/progress_bar_2.json'
});

var progress3 = bodymovin.loadAnimation({
	container: document.getElementById('progress3'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'lottie/progress_bar_3.json'
});

var animation1 = bodymovin.loadAnimation({
	container: document.getElementById('anim1'),
	renderer: 'svg',
	loop: true,
	autoplay: false,
	path: 'lottie/speedometer.json'
});

var animation2 = bodymovin.loadAnimation({
	container: document.getElementById('anim2'),
	renderer: 'svg',
	loop: true,
	autoplay: false,
	path: 'lottie/scales.json'
});

var animation3 = bodymovin.loadAnimation({
	container: document.getElementById('anim3'),
	renderer: 'svg',
	loop: true,
	autoplay: false,
	path: 'lottie/figures.json'
});

var animation4 = bodymovin.loadAnimation({
	container: document.getElementById('anim4'),
	renderer: 'svg',
	loop: true,
	autoplay: false,
	path: 'lottie/variability.json'
});

var animation5 = bodymovin.loadAnimation({
	container: document.getElementById('anim5'),
	renderer: 'svg',
	loop: true,
	autoplay: false,
	path: 'lottie/camera.json'
});

var animation6 = bodymovin.loadAnimation({
	container: document.getElementById('anim6'),
	renderer: 'svg',
	loop: true,
	autoplay: false,
	path: 'lottie/gift.json'
});

squares1.addEventListener("mouseenter", function () {
    animation1.play();
});

squares2.addEventListener("mouseenter", function () {
    animation2.play();
});

squares3.addEventListener("mouseenter", function () {
    animation3.play();
});

squares4.addEventListener("mouseenter", function () {
    animation4.play();
});

squares5.addEventListener("mouseenter", function () {
    animation5.play();
});

squares6.addEventListener("mouseenter", function () {
    animation6.play();
});

squares1.addEventListener("mouseleave", function () {
  animation.gotoAndStop(0);
});

squares2.addEventListener("mouseleave", function () {
  animation.gotoAndStop(0);
});

squares3.addEventListener("mouseleave", function () {
  animation.gotoAndStop(0);
});

squares4.addEventListener("mouseleave", function () {
  animation.gotoAndStop(0);
});

squares5.addEventListener("mouseleave", function () {
  animation.gotoAndStop(0);
});

squares6.addEventListener("mouseleave", function () {
  animation.gotoAndStop(0);
});

function playAnim(anim, loop) {
    if(anim.isPaused) {
        anim.loop = loop;
        anim.goToAndPlay(0);
    }
}

function pauseAnim(anim) {
    if (!anim.isPaused) {
        anim.loop = false;
    }
}

var count = 1;
var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");
var btn = document.getElementById("btn");

function btnclk() {
  if (ul.style.flexDirection == "row") {
    return ul.style.flexDirection = "column"
  };
  if (ul.style.flexDirection == "column") {
    return ul.style.flexDirection = "row"
  }
};

btn.onclick = btnclk;

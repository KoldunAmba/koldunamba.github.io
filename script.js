var squares1 = document.getElementById("anim11");
var squares2 = document.getElementById("anim22");
var squares3 = document.getElementById("anim33");
var squares4 = document.getElementById("anim44");
var squares5 = document.getElementById("anim55");
var squares6 = document.getElementById("anim66");

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
	loop: false,
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
  this.gotoAndStop(1);
});

squares2.addEventListener("mouseleave", function () {
  this.gotoAndStop(1);
});

squares3.addEventListener("mouseleave", function () {
  this.gotoAndStop(1);
});

squares4.addEventListener("mouseleave", function () {
  this.gotoAndStop(1);
});

squares5.addEventListener("mouseleave", function () {
  this.gotoAndStop(1);
});

squares6.addEventListener("mouseleave", function () {
  this.gotoAndStop(1);
});

var count = 1;
var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");
var first_video = document.getElementById("first_video");
var second_video = document.getElementById("second_video");
var third_video = document.getElementById("third_video");
var progress1 = document.getElementById("progress1");
var progress2 = document.getElementById("progress2");
var progress3 = document.getElementById("progress3");
var btn = document.getElementById("progress");

function btnclk() {
  if (count == 1) {
  	first.classList.add("hidden");
  	second.classList.remove('hidden');
  	first_video.classList.add("hidden");
  	second_video.classList.remove('hidden');
  	progress1.classList.add("hidden");
  	progress2.classList.remove('hidden');
  	count = 2;
  	return
  };
  if (count == 2) {
  	second.classList.add('hidden');
  	third.classList.remove('hidden');
  	second_video.classList.add('hidden');
  	third_video.classList.remove('hidden');
  	progress2.classList.add('hidden');
  	progress3.classList.remove('hidden');
  	count = 3;
  	return
  }
  if (count == 3) {
  	first.classList.remove('hidden');
  	third.classList.add('hidden');
  	first_video.classList.remove('hidden');
  	third_video.classList.add('hidden');
  	progress1.classList.remove('hidden');
  	progress3.classList.add('hidden');
  	count = 1;
  	return
  };
};

btn.onclick = btnclk;
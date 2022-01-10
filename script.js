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

squares.addEventListener("mouseenter", function () {
    animation1.play();
});

squares.addEventListener("mouseenter", function () {
    animation2.play();
});

squares.addEventListener("mouseenter", function () {
    animation3.play();
});

squares.addEventListener("mouseenter", function () {
    animation4.play();
});

squares.addEventListener("mouseenter", function () {
    animation5.play();
});

squares.addEventListener("mouseenter", function () {
    animation6.play();
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

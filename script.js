var squares = document.getElementById("anim");
var animation = bodymovin.loadAnimation({
	container: document.getElementById('anim'),
	renderer: 'svg',
	loop: true,
	autoplay: false,
	path: 'lottie/speedometer.json'
})

squares.addEventListener("mouseenter", function () {
    animation.play();
});

function playAnim(anim, loop) {
    if(anim.isPaused) {
        anim.loop = loop;
        anim.goToAndPlay(0);
    }
}

squares.addEventListener("mouseleave", function () {
  animation.gotoAndStop(0);
});

function pauseAnim(anim) {
    if (!anim.isPaused) {
        anim.loop = false;
    }
}


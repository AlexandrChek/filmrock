<template>
    <div class="animation">
		<img class="img-fluid" src="../assets/space.jpg" alt="Space">
		<div class="planet">
			<img id="planet" src="../assets/planet.jpg" alt="Planet">
		</div>
		<div class="star">
			<img id="star" src="../assets/star.jpg" alt="Star">
		</div>
		<p id="inscription">This could be your ad!</p>
	</div>
</template>

<script>
export default {
    name: 'AdvertPlace'
}
</script>

<style scoped>
.animation {
    position: relative;
}
.planet {
    position: absolute;
	left: 3px;
	top: 0;
}
#planet {
    border-radius: 100%;
    width: 1.5vw;
    animation: rotation 14s linear infinite;
	transform-origin: 270% 120% 0;
}
.star {
	position: absolute;
	left: 7%;
	top: 42%;
}
#star {
	border-radius: 40%;
	animation: fading 4s linear infinite;
}
#inscription {
	position: absolute;
	top: 0px;
	left: 31%;
	height: 44.5%;
	font-size: 1.5vw;
	font-weight: bold;
	animation: falling 5s linear infinite;
}
@keyframes rotation {
	0% {transform: rotate(0deg);}
	100% {transform: rotate(360deg);}
}
@keyframes fading {
	0% {opacity: .2;}
	50% {opacity: .75;}
	100% {opacity: .2;}
}
@keyframes falling {
	0% {transform: translate(0, 0);}
	85% {transform: translate(0, 130%);}
	100% {transform: rotate(30deg);}
}
@-webkit-keyframes falling {
	0% {transform: translate(0, 0);}
	85% {transform: translate(0, 130%);}
	100% {transform: rotate(30deg);}
}
@-o-keyframes falling {
	0% {transform: translate(0, 0);}
	85% {transform: translate(0, 400%);}
	100% {transform: rotate(30deg);}
}

@media (max-width: 1399px) {
	#star {
		width: 80%;
	}
	#inscription {
		font-size: 1.46vw;
	}
}
@media (max-width: 1199px) {
	#star {
		width: 75%;
	}
	#inscription {
		font-size: 1.9vw;
		font-stretch: condensed;
		font-weight: bold;
		letter-spacing: .5vw;
		line-height: 1;
	}
	#planet {
		width: 1.7vw;
		transform-origin: 270% 110% 0;
	}
}
@media (max-width: 991px) {
	#inscription {
		font-size: 2.38vw;
		letter-spacing: 0;
	}
	#planet {
		width: 2.27vw;
	}
}
@media (max-width: 767px) {
	.animation {
		margin-top: 57px;
	}
	#planet {
		width: 3.25vw;
		transform-origin: 280% 50% 0;
	}
	#star {
		width: 100%;
	}
	#inscription {
		height: 47%;
		font-size: 3.85vw;
		font-stretch: normal;
	}
}
@media (max-width: 575px) {
	.animation {
		margin-top: 78px;
	}
	#planet {
		width: 4.45vw;
	}
	#inscription {
		font-size: 4.9vw;
	}
}
</style>
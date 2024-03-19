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
    name: 'AdvertPlace',
	data() {
		return {
			to: [
				'home',
				'contacts',
				'logIn',
				'registration'
			]
		}
	},
	mounted() {
		window.addEventListener('load', this.setFontSize)
		window.addEventListener('resize', () => {
			if (this.$route.path === '/' && (window.innerWidth === 767 || 768)) {
				this.resetFontSize()
			} else {this.setFontSize()}
		})

		this.$router.afterEach((to) => {
			if (this.to.includes(to.name)) {
				this.resetFontSize()
			}
		})
	},
	methods: {
		setFontSize() {
			const animation = document.querySelector('.animation')
			const inscription = document.querySelector('#inscription')
			inscription.style.fontSize = animation.offsetWidth * 0.062 + 'px'
		},
		resetFontSize() {
			this.$nextTick(() => {
				const timer = setInterval(() => {
					if (document.querySelector('.animation').offsetWidth) {
						this.setFontSize()
						clearInterval(timer)
					}
				}, 10)
			})
		}
	}
}
</script>

<style scoped lang="scss">
@import '../mixins';

	.animation {
		position: relative;
		margin-top: 50px;
		@media (min-width: 768px) {
			margin-top: 0;
		}
	}
	.planet {
		position: absolute;
		left: 8.5px;
		top: 0;
	}
	#planet {
		border-radius: 100%;
		width: calc(17px + .8vw);
		transform-origin: 240% 170% 0;
		@include animation(rotation 14s linear infinite);
		@media (min-width: 768px) {
			width: calc(12.5px + .585vw);
			transform-origin: 240% 90% 0;
		}
	}
	.star {
		position: absolute;
		left: 7%;
		top: 42%;
	}
	#star {
		border-radius: 40%;
		@include animation(fading 4s linear infinite);
	}
	#inscription {
		position: absolute;
		top: 0;
		left: 31%;
		height: 15%;
		margin: 0;
		font-weight: bold;
		@include animation(falling 5s linear infinite);
	}

	@include keyframes(rotation) {
		0% {transform: rotate(0deg);}
		100% {transform: rotate(360deg);}
	}
	@include keyframes(fading) {
		0% {opacity: .2;}
		50% {opacity: .75;}
		100% {opacity: .2;}
	}
	@include keyframes(falling) {
		0% {transform: translate(0, 0);}
		85% {transform: translate(0, 400%);}
		100% {transform: rotate(21deg);}
	}
</style>
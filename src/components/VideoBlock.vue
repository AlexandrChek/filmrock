<template>
    <div class="col-lg-11 col-12 p-0">
        <ColoredBtns @clickMovie="onMovie" @clickTrailer="onTrailer"/>
        <div class="wrapper-static" :class="{'wrapper-orange': orangeBack, 'wrapper-burgundy': !orangeBack}">
            <div class="ratio ratio-16x9">
                <iframe :src="url" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>

<script>
import ColoredBtns from './ColoredBtns.vue'

export default {
    name: 'VideoBlock',
    components: {ColoredBtns},
    props: ['trailerUrl', 'filmUrl'],
    data() {
        return {
            orangeBack: true,
            url: ''
        }
    },
    mounted() {
        const urlLoader = setInterval(() => {
            this.url = this.trailerUrl
            if(this.url) {clearInterval(urlLoader)}
        }, 10)
    },
    methods: {
        onMovie() {
            this.orangeBack = false
            this.url = this.filmUrl
        },
        onTrailer() {
            this.orangeBack = true
            this.url = this.trailerUrl
        }
    }
}
</script>

<style scoped lang="scss">
@import '../variables';

    .wrapper-static {
        padding: 4px;
    }
    .wrapper-orange {
        background-color: orange;
    }
    .wrapper-burgundy {
        background-color: $burgundy;
    }
</style>
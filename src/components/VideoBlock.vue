<template>
    <ColoredBtns @movieClicked="onMovie" @trailerClicked="onTrailer"/>
    <div class="p-1" :class="{'back-orange': orangeBack, 'back-burgundy': !orangeBack}">
        <VideoFrame v-if="orangeBack" :url="trailerUrl"/>
        <div v-else>
            <VideoFrame v-if="filmUrl" :url="filmUrl"/>
            <p v-else>
                There is no such film on YouTube. We suggest using an <br v-if="mw575"/>
                <a :href="altUrl" target="_blank">alternative source</a>
            </p>
        </div>
    </div>
</template>

<script>
import ColoredBtns from './ColoredBtns.vue'
import VideoFrame from './VideoFrame.vue'

export default {
    name: 'VideoBlock',
    components: {
        ColoredBtns,
        VideoFrame
    },
    props: ['trailerUrl', 'filmUrl', 'altUrl'],
    data() {
        return {
            orangeBack: true,
            mw575: false
        }
    },
    mounted() {
        this.linkWidthControl()
        window.onresize = () => {this.linkWidthControl()}
    },
    methods: {
        onMovie() {
            this.orangeBack = false
            this.url = this.filmUrl
        },
        onTrailer() {
            this.orangeBack = true
            this.url = this.trailerUrl
        },
        linkWidthControl() {
            if (window.matchMedia('(max-width: 575px)').matches) {
                this.mw575 = true
            } else {
                this.mw575 = false
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import '../variables';
@import '../extends';

    .back-orange {
        background-color: orange;
    }
    .back-burgundy {
        background-color: $burgundy;
    }
    p {
        text-align: center;
        font-weight: bold;
        font-size: $colored-btn-f-size;
        margin: 5vh 0;
    }
    a {
        @extend %link;
        padding: 0 calc($colored-btn-f-size / 5);
    }
</style>
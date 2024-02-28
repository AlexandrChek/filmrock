<template>
    <div class="d-inline-flex justify-content-center position-relative w-100 py-1">
        <OvalArrowBtn :rightArrow="false" @click="goLeft" v-if="position"/>
        <div class="d-inline-flex justify-content-center">
            <router-link v-for="film in shortList" :to="'/' + film.id" :key="film.id" class="movie-item">
                <img :src="film.src" :alt="film.title" class="img-fluid">
                <div class="title-small">{{film.title}}</div>
                <div class="genres">
                    {{film.genre}}, {{film.genre2}}
                </div>
            </router-link>
        </div>
        <OvalArrowBtn :rightArrow="true" @click="goRight" v-if="rightArrowShown"/>
    </div>
</template>

<script>
import OvalArrowBtn from './OvalArrowBtn.vue'

export default {
    name: 'MovieLine',
    props: ['list', 'shortListLength'],
    components: {OvalArrowBtn},
    data() {
        return { position: 0 }
    },
    watch: {
        shortListLength(val) {
            if (this.position > 10 - val) {
                this.position--
            }
        }
    },
    computed: {
        shortList() {
            let start = this.position
            let end = start + this.shortListLength
            return this.list.slice(start, end)
        },
        rightArrowShown() {
            return this.position < 10 - this.shortListLength
        }
    },
    methods: {
        goLeft() {
            this.position--
        },
        goRight() {
            this.position++
        }
    }
}
</script>

<style scoped lang="scss">
@import '../variables';
@import '../mixins';

    $title-f-size: calc(13px + .45vw);

    .movie-item {
        margin-left: calc(3.5px + .25vw);
        text-decoration: none;
        width: 100%;
        animation: appearance .3s linear;
        &:hover {
            background-color: $black-light;
        }
    }
    .title-small {
        max-width: 300px;
        font-size: calc(13px + .45vw);
        font-weight: bold;
        line-height: 1.15;
        color: $toxic-green;
        padding-top: 2px;
    }
    .genres {
        font-size: calc($title-f-size * 0.8);
        color: wheat;
        word-spacing: 3px;
    }

    @include keyframes(appearance) {
        0% {scale: 0;}
        100% {scale: 1;}
    }
</style>
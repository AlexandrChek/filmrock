<template>
    <div class="d-inline-flex align-items-center justify-content-center w-100">
        <ArrowLeftBtn @click="goLeft" v-if="position"/>
        <div class="d-inline-flex justify-content-center">
            <router-link v-for="film in list" :to="'/' + film.id" :key="film.id" class="d-inline-flex movie-item">
                <div class="w-100">
                    <img :src="film.src" :alt="film.title" class="img-fluid w-100">
                    <div class="title-small">{{film.title}}</div>
                    <div class="genres">
                        {{film.genre}}, {{film.genre2}}
                    </div>
                </div>
            </router-link>
        </div>
        <ArrowRightBtn @click="goRight" v-if="rightArrowShown"/>
    </div>
</template>

<script>
import ArrowRightBtn from './ArrowRightBtn.vue'
import ArrowLeftBtn from './ArrowLeftBtn.vue'

export default {
    name: 'MovieLine',
    props: ['list', 'position', 'rightArrowShown'],
    components: {ArrowRightBtn, ArrowLeftBtn},
    methods: {
        goLeft() {
            this.$emit('leftArrowClicked')
        },
        goRight() {
            this.$emit('rightArrowClicked')
        }
    }
}
</script>

<style scoped lang="scss">
@import '../variables';

.movie-item {
    box-sizing: content-box;
    margin-left: .35vw;
    text-decoration: none;
    width: 100%;
    animation: appearance .3s linear;
    &:hover {
        background-color: $black-light;
    }
    @media (max-width: 767px) {
        margin-left: .78vw;
    }
}
.title-small {
    font-size: 17.5px;
    font-weight: bold;
    color: $toxic-green;
    margin-left: .5vw;
    @media (max-width: 991px) {
        font-size: 15.5px;
    }
}
.genres {
    color: wheat;
    margin-left: .5vw;
    word-spacing: 3px;
    @media (max-width: 1199px) {
        font-size: 15px;
    }
    @media (max-width: 767px) {
        font-size: 14px;
    }
    @media (max-width: 575px) {
        font-size: 13.2px;
    }
}

@keyframes appearance {
    0% {scale: 0;}
    100% {scale: 1;}
}
</style>
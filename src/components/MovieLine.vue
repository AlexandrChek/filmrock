<template>
    <div class="d-inline-flex justify-content-center">
        <router-link v-for="film in list" :to="'/' + film.id" :key="film" class="d-inline-flex movie-item">
            <div class="w-100">
                <img :src="film.src" :alt="film.title" class="img-fluid w-100">
                <div class="title-small">{{film.title}}</div>
                <div class="genres">
                    {{film.genre}}, {{film.genre2}}
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'MovieLine',
    props: ['list']
}
</script>

<style scoped lang="scss">
@import '../variables';

.movie-item {
    box-sizing: content-box;
    margin-left: .3vw;
    text-decoration: none;
    width: 100%;
    animation: scroll .3s linear;
    &:hover {
        background-color: $black-light;
    }
    @media (max-width: 767px) {
        margin-left: .7vw;
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

@keyframes scroll {
    0% {scale: 0;}
    100% {scale: 1;}
}
</style>
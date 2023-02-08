<template>
    <div class="d-inline-flex">
        <div class="trailer-button" @click="onTrailer">Trailer</div>
        <div class="movie-button" @click="onMovie">Movie</div>
    </div>
</template>

<script>
export default {
    name: 'ColoredBtns',
    methods: {
        onMovie() {
            this.$emit('clickMovie')
        },
        onTrailer() {
            this.$emit('clickTrailer')
        }
    }
}
</script>

<style scoped lang="scss">
@import '../variables';

%buttons {
    color: black;
    width: 12vw;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
    @media (max-width: 1199px) {
        font-size: 18.5px;
    }
    @media (max-width: 991px) {
        font-size: 17px;
    }
    @media (max-width: 575px) {
        width: 17vw;
        font-size: 3.5vw;
    }
}
.trailer-button {
    @extend %buttons;
    background-color: orange;
    border-top-left-radius: 3px;
}
.movie-button {
    @extend %buttons;
    background-color: $burgundy;
    border-top-right-radius: 3px;
}
</style>
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
        text-align: center;
        font-weight: bold;
        font-size: calc(12px + .4vw);
        padding: 1.5px calc(12px + 1.3vw) 1px;
        cursor: pointer;
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
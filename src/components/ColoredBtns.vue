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
        onMovie () {
            this.$emit('clickMovie')
        },
        onTrailer () {
            this.$emit('clickTrailer')
        }
    }
}
</script>

<style scoped>
.trailer-button {
    background-color: orange;
    border-top-left-radius: 3px;
}
.movie-button {
    background-color: rgb(145, 20, 20);
    border-top-right-radius: 3px;
}
.movie-button, .trailer-button {
    color: black;
    width: 12vw;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
}
@media (max-width: 1199px) {
    .movie-button, .trailer-button {
        font-size: 18.5px;
    }
}
@media (max-width: 991px) {
    .movie-button, .trailer-button {
        font-size: 17px;
    }
}
@media (max-width: 575px) {
    .movie-button, .trailer-button {
        width: 17vw;
        font-size: 3.5vw;
        
    }
}
</style>
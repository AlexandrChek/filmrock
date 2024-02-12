<template>
    <div class="row d-flex justify-content-center mx-1 my-3">
        <div class="col-xl-3 col-lg-4 col-sm-4 col-5 p-0 text-center">
            <img :src="film.src" :alt="film.title" class="img-fluid">
        </div>
        <div class="col-xl-8 col-lg-7 col-sm-8 col-7 px-xl-4">
            <FilmTitle>{{film.title}}</FilmTitle>
            <AdaptiveParagraf>
                Year: &ensp;{{film.year}}
            </AdaptiveParagraf>
            <AdaptiveParagraf>
                Genres: &ensp;{{film.genre}},&ensp;{{film.genre2}}
            </AdaptiveParagraf>
            <AdaptiveParagraf>
                Country: &ensp;{{film.country}}
            </AdaptiveParagraf>
            <AdaptiveParagraf>
                Director: &ensp;{{film.director}}
            </AdaptiveParagraf>
            <AdaptiveParagraf>
                Actors: &ensp;{{film.actors}} and others...
            </AdaptiveParagraf>
            <AdaptiveParagraf>
                Lasting: &ensp;{{film.lasting}}
            </AdaptiveParagraf>
            <AdaptiveParagraf class="m-0 ratings">
                Rating: &ensp;{{film.rating || 0}}
            </AdaptiveParagraf>
            <AdaptiveParagraf class="ratings">
                Number of ratings: &ensp;{{film.numberOfRatings || 0}}
            </AdaptiveParagraf>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import FilmTitle from './FilmTitle.vue'
import AdaptiveParagraf from './AdaptiveParagraf.vue'

export default {
    name: 'SmallCard',
    props: ['film'],
    components: {
        FilmTitle,
        AdaptiveParagraf
    }
}
</script>

<style scoped lang="scss">
@import '../variables';

    .ratings {
        color: $toxic-green;
        font-weight: bold; 
    }
</style>
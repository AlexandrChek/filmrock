<template>
    <div class="d-flex flex-column big-wrapper">
        <router-link
            v-for="film in searchedMovies"
            :to="'/' + film.id"
            :key="film.id"
            class="container-fluid movie-item"
        >
            <SmallCard :film="film"/>
        </router-link>
    </div>
    <div v-if="pagination" class="d-flex justify-content-center w-100 mb-3">
        <div class="d-inline-flex justify-content-center">
            <SimplArrowBtn v-if="currentPage > 1" @click="scrollLeft">
                &ensp; &#171; &ensp;
            </SimplArrowBtn>
            <PageNumbers :pages="pages" :currentPage="currentPage" @numberClicked="changePage"/>
            <SimplArrowBtn v-if="currentPage < numberOfPages" @click="scrollRight">
                &ensp; &#187; &ensp;
            </SimplArrowBtn>
        </div>
    </div>
</template>

<script>
import SmallCard from '../components/SmallCard.vue'
import PageNumbers from '../components/PageNumbers.vue'
import SimplArrowBtn from '../components/SimplArrowBtn.vue'

export default {
    name: 'SearchResults',
    components: {
        SmallCard,
        PageNumbers,
        SimplArrowBtn
    },
    data() {
        return {
            allSearchedMovies: [],
            searchedMovies: [],
            pagination: false,
            firstFilm: 0,
            lastFilm: 10,
            numberOfPages: 2,
            allPages: [],
            pages: [],
            firstPage: 0,
            lastPage: 5,
            currentPage: 1
        }
    },
    mounted() {
        this.allSearchedMovies = JSON.parse(sessionStorage.getItem('allSearchedMovies'))

        if (this.allSearchedMovies.length <= 10) {
            this.searchedMovies = [...this.allSearchedMovies]
        } else {
            this.pagination = true
            this.selectSearchedMovies()
            this.numberOfPages = Math.ceil(this.allSearchedMovies.length / 10)

            this.allPages = [...Array(this.numberOfPages).keys()].map(i => i + 1)

            if (this.numberOfPages <= 5) {
                this.pages = [...this.allPages]
            } else {
                this.selectPages()
            }
        }

        if (this.$store.state.pageNum > 1) {
            this.changePage(this.$store.state.pageNum)
        }
    },
    beforeRouteLeave(to, from, next) {
        if (Number(to.path.slice(1)) && this.currentPage > 1) {
            this.$store.state.pageNum = this.currentPage
            next()
        } else {
            this.$store.state.pageNum = 1
            next()
        }
    },
    methods: {
        selectSearchedMovies() {
            if (this.allSearchedMovies.length - this.firstFilm > 10) {
                this.searchedMovies = this.allSearchedMovies.slice(this.firstFilm, this.lastFilm)
            } else {
                this.searchedMovies = this.allSearchedMovies.slice(this.firstFilm)
            }
        },
        selectPages() {
            if (this.allPages.length - this.firstPage > 5) {
                this.pages = this.allPages.slice(this.firstPage, this.lastPage)
            } else {
                this.pages = this.allPages.slice(this.firstPage)
            }
        },
        changePage(n) {
            this.currentPage = n
            this.firstFilm = (n - 1) * 10
            this.lastFilm = this.firstFilm + 10
            this.selectSearchedMovies()
        },
        scrollLeft() {
            this.currentPage--
            this.lastFilm = this.firstFilm - 1
            this.firstFilm -= 10
            this.selectSearchedMovies()
            if (this.currentPage <= this.firstPage) {
                this.firstPage--
                this.lastPage--
                this.selectPages()
            }
        },
        scrollRight() {
            this.currentPage++
            this.firstFilm += 10
            if (this.allSearchedMovies.length - this.firstFilm >= 10) {
                this.lastFilm += 10
            } else {
                this.lastFilm += (this.allSearchedMovies.length - this.firstFilm - 1) 
            }
            this.selectSearchedMovies()
            if (this.currentPage > this.lastPage) {
                this.firstPage++
                this.lastPage++
                this.selectPages()
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import '../variables';

    .big-wrapper {
        min-height: calc(100vh - ($main-title-f-size * 3));
        @media (hover: none) and (pointer: coarse) {
            overflow-y: scroll;
        }
    }
    .movie-item {
        text-decoration: none;
        color: wheat;
        &:hover {
            background-color: $black-light;
        }
    }
</style>
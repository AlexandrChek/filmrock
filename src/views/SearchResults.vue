<template>
    <div class="d-flex flex-column big-wrapper">
        <router-link v-for="film in searchedMovies" :to="'/' + film.id" :key="film" class="movie-item">
            <div class="container-fluid">
                <div class="row d-flex justify-content-center m-2">
                    <div class="col-xxl-4 col-md-3 col-sm-4 col-5 text-center p-0">
                        <img :src="film.src" :alt="film.title" class="img-fluid">
                    </div>
                    <div class="col-xxl-7 col-md-9 col-sm-8 col-7">
                        <FilmTitle>{{film.title}}</FilmTitle>
                        <AdaptiveParagraf>Year: &ensp;{{film.year}}</AdaptiveParagraf>
                        <AdaptiveParagraf>Genres: &ensp;{{film.genre}},&ensp;{{film.genre2}}</AdaptiveParagraf>
                        <AdaptiveParagraf>Country: &ensp;{{film.country}}</AdaptiveParagraf>
                        <AdaptiveParagraf>Director: &ensp;{{film.director}}</AdaptiveParagraf>
                        <AdaptiveParagraf>Actors: &ensp;{{film.actors}} and others...</AdaptiveParagraf>
                        <AdaptiveParagraf>Lasting: &ensp;{{film.lasting}}</AdaptiveParagraf>
                        <AdaptiveParagraf class="m-0">Rating: &ensp;
                            <span v-if="film.rating">{{film.rating}}</span>
                            <span v-else>0</span>
                        </AdaptiveParagraf>
                        <AdaptiveParagraf>Number of ratings: &ensp;
                            <span v-if="film.numberOfRatings">{{film.numberOfRatings}}</span>
                            <span v-else>0</span>
                        </AdaptiveParagraf>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
    <div v-if="pagination" class="text-center p-5">
        <div class="d-inline-flex justify-content-center">
        <SimplArrowBtn v-if="currentPage > 1" @click="scrollLeft">&ensp; &#171; &ensp;</SimplArrowBtn>
        <PageNumbers v-for="n in pages" :key="n" @click="changePage(n)">
            <div>
                <div v-if="n === currentPage" id="arrow-up">&#9650;</div>
                <div v-else id="void">.</div>
            </div>
            <div :class="{'current-number': n === currentPage}">{{n}}</div>
        </PageNumbers>
        <SimplArrowBtn v-if="currentPage < numberOfPages" @click="scrollRight">&ensp; &#187; &ensp;</SimplArrowBtn>
        </div>
    </div>
</template>

<script>
import FilmTitle from '../components/FilmTitle.vue'
import AdaptiveParagraf from '../components/AdaptiveParagraf.vue'
import PageNumbers from '../components/PageNumbers.vue'
import SimplArrowBtn from '../components/SimplArrowBtn.vue'
import {getDatabase, ref, onValue} from 'firebase/database'

export default {
    name: 'SearchResults',
    components: {
        FilmTitle,
        AdaptiveParagraf,
        PageNumbers,
        SimplArrowBtn
    },
    data () {
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
        const db = getDatabase()
        const filmsObj = ref(db, 'films/')
        onValue(filmsObj, (snapshot) => {
            let finalObj = snapshot.val()
            let filmsArr = Object.values(finalObj)
            if (sessionStorage.getItem('searchedTitle')) {
                let searchedTitle = sessionStorage.getItem('searchedTitle').toLowerCase()
                this.allSearchedMovies = filmsArr.filter(e => {
                    let title = e.title.toLowerCase()
                    return title.includes(searchedTitle)
                })
            } else if (sessionStorage.getItem("searchedFilms")) {
                this.allSearchedMovies = JSON.parse(sessionStorage.getItem("searchedFilms"))
                this.allSearchedMovies.sort((a,b) => {
                    return a.year - b.year
                })
            }
            if (this.allSearchedMovies.length <= 10) {
                this.searchedMovies = this.allSearchedMovies
            } else {
                this.pagination = true
                this.selectSearchedMovies()
                this.numberOfPages = Math.ceil(this.allSearchedMovies.length / 10)
                let i = 1
                while (i <= this.numberOfPages) {
                    this.allPages.push(i)
                    i++
                }
                if (this.numberOfPages <= 5) {
                this.pages = this.allPages
                } else {
                    this.selectPages()
                }
            }
            
            if (this.allSearchedMovies.length <= 2) {
                this.heightControl()
            }
        })

        window.onresize = () => {
            if (this.allSearchedMovies.length <= 2) {
                this.heightControl()
            }
        }
    },
    methods: {
        heightControl () {
            let windowWidth = window.innerWidth
            let wrapper = document.querySelector('.big-wrapper')
            let deductions = 0
            if (windowWidth >= 1400) {
                deductions = 172
            } else if (windowWidth < 1400 && windowWidth >= 1200) {
                deductions = 148
            } else if (windowWidth < 1200 && windowWidth >= 992) {
                deductions = 125
            } else if (windowWidth < 992 && windowWidth >= 768) {
                deductions = 101
            } else if (windowWidth < 576) {
                deductions = 89.4
            }
            if (this.allSearchedMovies.length <= 1) {
                if (deductions > 0) {
                    wrapper.style.height = window.innerHeight - deductions + "px"
                } else {
                    wrapper.style.height = 'auto'
                }
            } else if (this.allSearchedMovies.length === 2) {
                if (windowWidth < 992 && windowWidth >= 768 || windowWidth < 576) {
                    wrapper.style.height = window.innerHeight - deductions + "px"
                } else {
                    wrapper.style.height = 'auto'
                }
            }
        },
        selectSearchedMovies () {
            let firstFilm = this.firstFilm
            let lastFilm = this.lastFilm
            if (this.allSearchedMovies.length - firstFilm > 10) {
                this.searchedMovies = this.allSearchedMovies.slice(firstFilm, lastFilm)
            } else {
                this.searchedMovies = this.allSearchedMovies.slice(firstFilm)
            }
        },
        selectPages () {
            let firstPage = this.firstPage
            let lastPage = this.lastPage
            if (this.allPages.length - firstPage > 5) {
                this.pages = this.allPages.slice(firstPage, lastPage)
            } else {
                this.pages = this.allPages.slice(firstPage)
            }
        },
        changePage (n) {
            this.currentPage = n
            this.firstFilm = (n - 1) * 10
            this.lastFilm = this.firstFilm + 10
            this.selectSearchedMovies()
        },
        scrollLeft () {
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
        scrollRight () {
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
.movie-item {
    text-decoration: none;
    color: wheat;
    &:hover {
        background-color: $black-light;
    }
}
span {
    color: $toxic-green;
    font-weight: bold; 
}
#arrow-up, .current-number {
    color: $toxic-green;
    font-weight: 1000;
}
#void {
    color: black;
}
@media (hover: none) and (pointer: coarse) {
    .big-wrapper {
        overflow-y: scroll;
    }
}
</style>

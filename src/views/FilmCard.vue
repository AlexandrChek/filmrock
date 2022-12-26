<template>
    <div class="container-fluid">
        <div class="row d-flex justify-content-center m-2">
            <div class="col-xxl-3 col-md-3 col-sm-4 col-5 text-center">
                <img :src="currentFilm.src" :alt="currentFilm.title" class="img-fluid">
            </div>
            <div class="col-xxl-8 col-md-9 col-sm-8 col-7">
                <FilmTitle>{{currentFilm.title}}</FilmTitle>
                <AdaptiveParagraf>Year: &ensp;{{currentFilm.year}}</AdaptiveParagraf>
                <AdaptiveParagraf>Genres: &ensp;{{currentFilm.genre}}, {{currentFilm.genre2}}</AdaptiveParagraf>
                <AdaptiveParagraf>Country: &ensp;{{currentFilm.country}}</AdaptiveParagraf>
                <AdaptiveParagraf>Director: &ensp;{{currentFilm.director}}</AdaptiveParagraf>
                <AdaptiveParagraf>Actors: &ensp;{{currentFilm.actors}} and others...</AdaptiveParagraf>
                <AdaptiveParagraf>Lasting: &ensp;{{currentFilm.lasting}}</AdaptiveParagraf>
                <AdaptiveParagraf class="m-0">Rating: &ensp;<span>{{rating}}</span></AdaptiveParagraf>
                <AdaptiveParagraf>Number of ratings: &ensp;<span>{{numberOfRatings}}</span></AdaptiveParagraf>
                <MyButton v-if="notRated" @click="rateFilm">Rate the film</MyButton>
                <AdaptiveParagraf class="rated" v-else>You have rated this film. Thank you!</AdaptiveParagraf>
            </div>
            <ModalRegWarning v-if="regWarning" @closewarning="closeRegWarning">
                To rate films you have to log into your account ore register.
            </ModalRegWarning>
            <ModalRate v-if="showModalRate" @reseivingrating="setRating" @closerating="closeModalRate"/>
        </div>
        <div class="row d-flex justify-content-center mx-1 mb-3">
            <AdaptiveParagraf class="col-xxl-11 col-12 m-0">
                <b>Description:</b> &ensp;{{currentFilm.description}}
            </AdaptiveParagraf>
        </div>
        <div class="row d-flex justify-content-center mx-1 my-2">
            <div class="col-xxl-11 col-12">
                <ColoredBtns @clickMovie="onMovie" @clickTrailer="onTrailer"/>
                <div class="wrapper-static" :class="{'wrapper-orange': trailer, 'wrapper-burgundy': !trailer}">
                    <div class="ratio ratio-16x9" v-if="trailer">
                        <iframe :src="currentFilm.trailer" allowfullscreen></iframe>
                    </div>
                    <div class="ratio ratio-16x9" v-else>
                        <iframe :src="currentFilm.url" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
        <div class="row d-flex justify-content-center mx-1 mt-4">
            <div class="col-xxl-11 col-12">
                <LineHeader>You might be interested with:</LineHeader>
                <div class="d-inline-flex align-items-center justify-content-center w-100">
                    <ArrowLeftBtn @click="goLeft" v-if="position"/>
                    <div class="d-inline-flex justify-content-center">
                        <router-link v-for="film in shortList" :to="'/' + film.id" :key="film" class="d-inline-flex movie-item">
                            <div>
                                <img :src="film.src" :alt="film.title" class="img-fluid">
                                <div class="title-small">{{film.title}}</div>
                                <FilmGenres>
                                    {{film.genre}}, {{film.genre2}}
                                </FilmGenres>
                            </div>
                        </router-link>
                    </div>
                    <ArrowRightBtn @click="goRight" v-if="position < 10 - shortListLength"/>
                </div>
            </div>
        </div>
        <div class="row d-flex justify-content-center mx-1 mt-4">
            <div class="col-xxl-11 col-12 mb-5">
                <LineHeader>Reviews</LineHeader>
                <ReviewForm/>
                <div v-for="review in reviews" :key="review" class="mt-3">
                    <AdaptiveParagraf class="m-0 review-head">{{review.user}}, &ensp;{{review.date}}</AdaptiveParagraf>
                    <AdaptiveParagraf>{{review.body}}</AdaptiveParagraf>
                </div>
                <MyButton v-if="allReviewsBtn" @click="showAllReviews">Show all reviews</MyButton>
                <MyButton v-if="collapseRewiewsBtn" @click="collapseRewiews">Collapse rewiews</MyButton>
            </div>
        </div>
    </div>
</template>

<script>
import MyButton from '../components/MyButton.vue'
import FilmTitle from '../components/FilmTitle.vue'
import AdaptiveParagraf from '../components/AdaptiveParagraf.vue'
import ModalRegWarning from '../components/ModalRegWarning.vue'
import ModalRate from '../components/ModalRate.vue'
import ColoredBtns from '../components/ColoredBtns.vue'
import LineHeader from '../components/LineHeader.vue'
import ArrowLeftBtn from '../components/ArrowLeftBtn.vue'
import ArrowRightBtn from '../components/ArrowRightBtn.vue'
import FilmGenres from '../components/FilmGenres.vue'
import ReviewForm from '../components/ReviewForm.vue'
import {getDatabase, ref, set, onValue} from 'firebase/database'

export default {
    name: 'FilmCard',
    components: {
        MyButton,
        FilmTitle,
        AdaptiveParagraf,
        ModalRegWarning,
        ModalRate,
        ColoredBtns,
        LineHeader,
        ArrowLeftBtn,
        ArrowRightBtn,
        FilmGenres,
        ReviewForm
    },
    data () {
        return {
            currentFilm: {},
            rating: 0,
            numberOfRatings: 0,
            regWarning: false,
            showModalRate: false,
            notRated: true,
            trailer: true,
            position: 0,
            windowWidth: window.innerWidth,
            shortListLength: 0,
            suitableMovies: [],
            id: this.$route.params.id,
            reviews: {},
            allReviews: {},
            allReviewsBtn: false,
            collapseRewiewsBtn: false
        }
    },
    mounted() {
        const db = getDatabase()
        const filmsObj = ref(db, 'films/')
        onValue(filmsObj, (snapshot) => {
            let finalObj = snapshot.val()
            let filmsArr = Object.values(finalObj)
            this.currentFilm = filmsArr.filter(film => {
                return film.id == this.id
            })[0]
            if (this.currentFilm.rating) {
                this.rating = this.currentFilm.rating
            }
            if (this.currentFilm.numberOfRatings) {
                this.numberOfRatings = this.currentFilm.numberOfRatings
            }
            while (this.suitableMovies.length < 10) {
                if (this.currentFilm.relatedTo) {
                    for (let i = 0; i < filmsArr.length; i++) {
                        if (filmsArr[i].relatedTo === this.currentFilm.relatedTo && filmsArr[i].id !== this.currentFilm.id) {
                            this.suitableMovies.push(filmsArr[i])
                        }
                    }
                    for (let i = 0; i < filmsArr.length; i++) {
                        let id = filmsArr[i].id
                        if (filmsArr[i].genre === this.currentFilm.genre &&
                        filmsArr[i].genre2 === this.currentFilm.genre2 &&
                        id !== this.currentFilm.id) {
                            if (this.suitableMovies) {
                                let q = 0
                                for (let i = 0; i < this.suitableMovies.length; i++) {
                                    if (this.suitableMovies[i].id === id) {q++}
                                }
                                if (q === 0) {
                                    this.suitableMovies.push(filmsArr[i])
                                }
                            } else {
                                this.suitableMovies.push(filmsArr[i])
                            }
                        } else if (filmsArr[i].genre === this.currentFilm.genre2 &&
                        filmsArr[i].genre2 === this.currentFilm.genre &&
                        id !== this.currentFilm.id) {
                            if (this.suitableMovies) {
                                let q = 0
                                for (let i = 0; i < this.suitableMovies.length; i++) {
                                    if (this.suitableMovies[i].id === id) {q++}
                                }
                                if (q === 0) {
                                    this.suitableMovies.push(filmsArr[i])
                                }
                            } else {
                                this.suitableMovies.push(filmsArr[i])
                            }
                        }
                    }
                    for (let i = 0; i < filmsArr.length; i++) {
                        let id = filmsArr[i].id
                        if (filmsArr[i].genre === this.currentFilm.genre ||
                        filmsArr[i].genre === this.currentFilm.genre2 ||
                        filmsArr[i].genre2 === this.currentFilm.genre ||
                        filmsArr[i].genre2 === this.currentFilm.genre2 &&
                        id !== this.currentFilm.id) {
                            if (this.suitableMovies) {
                                let q = 0
                                for (let i = 0; i < this.suitableMovies.length; i++) {
                                    if (this.suitableMovies[i].id === id) {q++}
                                }
                                if (q === 0) {
                                    this.suitableMovies.push(filmsArr[i])
                                }
                            } else {
                                this.suitableMovies.push(filmsArr[i])
                            }
                        }
                    }
                } else {
                    for (let i = 0; i < filmsArr.length; i++) {
                        let id = filmsArr[i].id
                        if (filmsArr[i].genre === this.currentFilm.genre &&
                        filmsArr[i].genre2 === this.currentFilm.genre2 &&
                        id !== this.currentFilm.id) {
                            if (this.suitableMovies) {
                                let q = 0
                                for (let i = 0; i < this.suitableMovies.length; i++) {
                                    if (this.suitableMovies[i].id === id) {q++}
                                }
                                if (q === 0) {
                                    this.suitableMovies.push(filmsArr[i])
                                }
                            } else {
                                this.suitableMovies.push(filmsArr[i])
                            }
                        } else if (filmsArr[i].genre === this.currentFilm.genre2 &&
                        filmsArr[i].genre2 === this.currentFilm.genre &&
                        id !== this.currentFilm.id) {
                            if (this.suitableMovies) {
                                let q = 0
                                for (let i = 0; i < this.suitableMovies.length; i++) {
                                    if (this.suitableMovies[i].id === id) {q++}
                                }
                                if (q === 0) {
                                    this.suitableMovies.push(filmsArr[i])
                                }
                            } else {
                                this.suitableMovies.push(filmsArr[i])
                            }
                        }
                    }
                    for (let i = 0; i < filmsArr.length; i++) {
                        let id = filmsArr[i].id
                        if (filmsArr[i].genre === this.currentFilm.genre ||
                        filmsArr[i].genre === this.currentFilm.genre2 ||
                        filmsArr[i].genre2 === this.currentFilm.genre ||
                        filmsArr[i].genre2 === this.currentFilm.genre2 &&
                        id !== this.currentFilm.id) {
                            if (this.suitableMovies) {
                                let q = 0
                                for (let i = 0; i < this.suitableMovies.length; i++) {
                                    if (this.suitableMovies[i].id === id) {q++}
                                }
                                if (q === 0) {
                                    this.suitableMovies.push(filmsArr[i])
                                }
                            } else {
                                this.suitableMovies.push(filmsArr[i])
                            }
                        }
                    }
                }
            } 

            if (this.currentFilm.reviews) {
                let unsorted = Object.values(this.currentFilm.reviews)
                let allReviews = unsorted.sort((a,b) => {
                    return b.revId - a.revId
                })
                this.allReviews = allReviews
                if (allReviews.length <= 25) {
                    this.reviews = allReviews
                } else {
                    this.reviews = allReviews.slice(0, 25)
                    this.allReviewsBtn = true
                }
            }
        })

        if (this.$store.state.user) {
            const user = this.$store.state.user
            const grossUserObj = ref(db, 'users/' + user)
            onValue(grossUserObj, (snapshot) => {
                let netUserObj = snapshot.val()
                if (netUserObj.ratings) {
                    let ratings = Object.keys(netUserObj.ratings)
                    for (let i = 0; i < ratings.length; i++) {
                        if (ratings[i] === this.id) {
                            this.notRated = false
                        }
                    }
                }
            })
        }

        this.getShortListLength()
        window.onresize = () => {this.getShortListLength()}
    },
    computed: {
        shortList () {
            let start = this.position
            let end = start + this.shortListLength
            return this.suitableMovies.slice(start, end)
    }
  },
    methods: {
        rateFilm () {
            if (this.$store.state.user) {
                this.showModalRate = true
            } else {
                this.regWarning = true
            }
        },
        closeRegWarning () {
            this.regWarning = false
        },
        closeModalRate () {
            this.showModalRate = false
        },
        setRating (rating) {
            const db = getDatabase()
            let id = this.id
            let currentRating = Number(rating)
            let currentNumberOfRatings = this.numberOfRatings + 1
            let user = this.$store.state.user
            if (this.rating > 0) {
                currentRating = ((this.numberOfRatings * this.rating + currentRating) / currentNumberOfRatings).toFixed(1)
            }
            set(ref(db, 'films/' + id + '/rating'), currentRating)
            set(ref(db, 'films/' + id + '/numberOfRatings'), currentNumberOfRatings)
            set(ref(db, 'users/' + user + '/ratings/' + id), true)
            this.rating = currentRating
            this.numberOfRatings = currentNumberOfRatings
            this.showModalRate = false
            this.$router.push('/' + id)
        },
        onMovie () {
            this.trailer = false
        },
        onTrailer () {
            this.trailer = true
        },
        goLeft () {
            this.position--
        },
        goRight () {
            this.position++
        },
        getShortListLength () {
            this.windowWidth = window.innerWidth
            if (this.windowWidth >= 992) {
                this.shortListLength = 5
            } else if (this.windowWidth < 992 && this.windowWidth >= 768) {
                this.shortListLength = 4
            } else if (this.windowWidth < 768 && this.windowWidth >= 576) {
                this.shortListLength = 3
            } else {
                this.shortListLength = 2
            }
        },
        showAllReviews () {
            this.reviews = this.allReviews
            this.allReviewsBtn = false
            this.collapseRewiewsBtn = true
        },
        collapseRewiews () {
            this.reviews = this.allReviews.slice(0, 25)
            this.collapseRewiewsBtn = false
            this.allReviewsBtn = true
        }
    }
}
</script>

<style scoped>
span, .rated, .review-head {
    color: #1dda2c;
}
.wrapper-static {
    padding: 4px;
}
.wrapper-orange {
    background-color: orange;
}
.wrapper-burgundy {
    background-color: rgb(145, 20, 20);
}
.movie-item {
    margin-left: .3vw;
    text-decoration: none;
    width: 100%;
}
.title-small {
    font-weight: bold;
    color: #1dda2c;
    margin-left: .5vw;
}
@media (max-width: 1199px) {
    .title-small {
        font-size: 1.3vw;
    }
}
@media (max-width: 991px) {
    .title-small {
        font-size: 1.5vw;
    }
}
@media (max-width: 767px) {
    .title-small {
        font-size: 2.3vw;
    }
}
@media (max-width: 575px) {
    .title-small {
        font-size: 3.15vw;
    }
    
}
</style>
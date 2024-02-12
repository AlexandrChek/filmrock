<template>
    <div class="container-fluid">
        <SmallCard :film="currentFilm">
            <MyButton v-if="notRated" @click="rateFilm">
                Rate the film
            </MyButton>
            <AdaptiveParagraf class="rated" v-else>
                You have rated this film. Thank you!
            </AdaptiveParagraf>
        </SmallCard>
        <ModalRegWarning v-if="regWarning" @closewarning="closeRegWarning">
                To rate films you have to log into your account ore register.
        </ModalRegWarning>
        <ModalRate v-if="showModalRate" @reseivingrating="setRating" @closerating="closeModalRate"/>
        <div class="row d-flex justify-content-center mx-1 mb-3">
            <AdaptiveParagraf class="col-lg-11 col-12 m-0 p-0">
                <b>Description:</b> &ensp;{{currentFilm.description}}
            </AdaptiveParagraf>
        </div>
        <div class="row d-flex justify-content-center mx-1 my-2">
            <VideoBlock :trailerUrl="currentFilm.trailer" :filmUrl="currentFilm.url"/>
        </div>
        <div class="row d-flex justify-content-center mx-1 mt-4">
            <div class="col-lg-11 col-12 p-0">
                <LineHeader>This might interest you:</LineHeader>
                <MovieLine
                    :list="shortList"
                    :position="position"
                    :rightArrowShown="rightArrowShown"
                    @leftArrowClicked="moveLeft"
                    @rightArrowClicked="moveRight"
                />
            </div>
        </div>
        <div class="row d-flex justify-content-center mx-1 mt-4">
            <div class="col-lg-11 col-12 mb-5 p-0">
                <LineHeader>Reviews</LineHeader>
                <ReviewForm/>
                <ReviewsList v-if="reviewsLength" :reviewsLength="reviewsLength" :allReviews="allReviews"/>
            </div>
        </div>
    </div>
</template>

<script>
import SmallCard from '../components/SmallCard.vue'
import VideoBlock from '../components/VideoBlock.vue'
import MyButton from '../components/MyButton.vue'
import AdaptiveParagraf from '../components/AdaptiveParagraf.vue'
import ModalRegWarning from '../components/ModalRegWarning.vue'
import ModalRate from '../components/ModalRate.vue'
import LineHeader from '../components/LineHeader.vue'
import MovieLine from '../components/MovieLine.vue'
import ReviewForm from '../components/ReviewForm.vue'
import ReviewsList from '../components/ReviewsList.vue'
import {getDatabase, ref, set, onValue} from 'firebase/database'

export default {
    name: 'FilmCard',
    components: {
        SmallCard,
        VideoBlock,
        MyButton,
        AdaptiveParagraf,
        ModalRegWarning,
        ModalRate,
        LineHeader,
        MovieLine,
        ReviewForm,
        ReviewsList
    },
    data () {
        return {
            currentFilm: {},
            regWarning: false,
            showModalRate: false,
            notRated: true,
            position: 0,
            shortListLength: 0,
            suitableMovies: [],
            id: this.$route.params.id,
            allReviews: [],
            reviewsLength: 0
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
            
            while(this.suitableMovies.length < 10) {
                if(this.currentFilm.relatedTo) {
                    for(let i = 0; i < filmsArr.length; i++) {
                        if (
                            filmsArr[i].relatedTo === this.currentFilm.relatedTo &&
                            filmsArr[i].id !== this.currentFilm.id
                        ) {
                            this.suitableMovies.push(filmsArr[i])
                        }
                    }
                    this.getSuitablesByGenre(filmsArr)
                } else {
                    this.getSuitablesByGenre(filmsArr)
                }
            }

            if(this.currentFilm.reviews) {
                let unsorted = Object.values(this.currentFilm.reviews)
                this.allReviews = unsorted.sort((a,b) => {
                    return b.revId - a.revId
                })
                this.reviewsLength = this.allReviews.length
            }
        })

        if(this.$store.state.user) {this.determineIsFilmRated(db)}

        this.getShortListLength()
        window.onresize = () => this.getShortListLength()
    },
    watch: {
        $route() {
            document.location.reload()
        }
    },
    computed: {
        shortList() {
            let start = this.position
            let end = start + this.shortListLength
            return this.suitableMovies.slice(start, end)
        },
        rightArrowShown() {
            return this.position < 10 - this.shortListLength
        }
    },
    methods: {
        determineIsFilmRated(db) {
            const user = this.$store.state.user
            const grossUserObj = ref(db, 'users/' + user)
            onValue(grossUserObj, (snapshot) => {
                let netUserObj = snapshot.val()
                if(netUserObj.ratings) {
                    let ratedFilms = Object.keys(netUserObj.ratings)
                    for(let i = 0; i < ratedFilms.length; i++) {
                        if(ratedFilms[i] === this.id) {
                            this.notRated = false
                            return
                        }
                    }
                }
            })
        },
        getSuitablesByGenre(filmsArr) {
            for(let i = 0; i < filmsArr.length; i++) {
                if (
                    filmsArr[i].id != this.id &&
                    !this.suitableMovies.includes(filmsArr[i]) &&
                    (
                        (
                            filmsArr[i].genre === this.currentFilm.genre &&
                            filmsArr[i].genre2 === this.currentFilm.genre2
                        ) ||
                        (
                            filmsArr[i].genre === this.currentFilm.genre2 &&
                            filmsArr[i].genre2 === this.currentFilm.genre
                        )
                    )
                ) {
                    this.suitableMovies.push(filmsArr[i])
                }
            }
            for(let i = 0; i < filmsArr.length; i++) {
                if (
                    filmsArr[i].id != this.id &&
                    !this.suitableMovies.includes(filmsArr[i]) &&
                    (
                        filmsArr[i].genre === this.currentFilm.genre ||
                        filmsArr[i].genre2 === this.currentFilm.genre2 ||
                        filmsArr[i].genre === this.currentFilm.genre2 ||
                        filmsArr[i].genre2 === this.currentFilm.genre
                    )
                    )
                {
                    this.suitableMovies.push(filmsArr[i])
                }
            }
        },
        getShortListLength() {
            let windowWidth = window.innerWidth
            if (windowWidth >= 992) {
                this.shortListLength = 5
            } else if (windowWidth < 992 && windowWidth >= 768) {
                this.shortListLength = 4
            } else if (windowWidth < 768 && windowWidth >= 576) {
                this.shortListLength = 3
            } else {
                this.shortListLength = 2
            }
        },
        rateFilm() {
            if(this.$store.state.user) {
                this.showModalRate = true
            } else {
                this.regWarning = true
            }
        },
        closeRegWarning() {
            this.regWarning = false
        },
        closeModalRate() {
            this.showModalRate = false
        },
        setRating(rating) {
            const db = getDatabase()
            const oldRating = this.currentFilm.rating
            const oldNumberOfRatings = this.currentFilm.numberOfRatings
            let currentRating = Number(rating)
            const currentNumberOfRatings = oldNumberOfRatings + 1
            const id = this.id
            const user = this.$store.state.user

            if(oldNumberOfRatings) {
                currentRating = ((oldNumberOfRatings * oldRating + currentRating) / currentNumberOfRatings).toFixed(1)
            }
            set(ref(db, 'films/' + id + '/rating'), currentRating)
            set(ref(db, 'films/' + id + '/numberOfRatings'), currentNumberOfRatings)
            set(ref(db, 'users/' + user + '/ratings/' + id), true)
            this.showModalRate = false
            this.$router.push('/' + id)
        },
        moveLeft() {
            this.position--
        },
        moveRight() {
            this.position++
        }
    }
}
</script>

<style scoped lang="scss">
@import '../variables';

.rated {
    color: $toxic-green;
}
</style>
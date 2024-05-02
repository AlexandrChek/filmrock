<template>
    <div class="mb-3 pt-md-0 pt-2">
        <SearchFilm :filmsArr="filmsArr" @gotTitleForAdwSearch="saveTitle" @notFound="showNotFound"/>
        <NotFound v-if="notFound"/>
        <AdvancedOptions v-if="advancedOptionsBtn" :optionsShown="optionsShown" @click="showOptions"/>
        <div v-if="optionsShown" class="mt-4 mb-3 period-genre-country"> 
            <SearchPeriod @yearEntered="saveYear" @periodEntered="savePeriod"/>
            <div class="genre-country">
                <MySelect id="genre" @focused="getGenres" :values="genres" @itemSelected="saveGenre">
                    Genre
                </MySelect>
                <MySelect @focused="getCountries" :values="countries" @itemSelected="saveCountry">
                    Country
                </MySelect>
            </div>
        </div>
        <div v-if="optionsShown">
            <MyButton @click="advancedSearch">Advanced search</MyButton>
            <NotFound v-if="notFound2"/>
        </div>
    </div>
</template>

<script>
import MyButton from './MyButton.vue'
import NotFound from './NotFound.vue'
import MySelect from './MySelect.vue'
import AdvancedOptions from './AdvancedOptions.vue'
import SearchFilm from './SearchFilm.vue'
import SearchPeriod from './SearchPeriod.vue'
import {getDatabase, ref, onValue} from 'firebase/database'

export default {
    name: 'SearchBlock',
    components: {
        MyButton,
        NotFound,
        MySelect,
        AdvancedOptions,
        SearchFilm,
        SearchPeriod
    },
    data() {
        return {
            filmsArr: [],
            title: '',
            notFound: false,
            notFound2: false,
            advancedOptionsBtn: false,
            allowAdwancedOptions: false,
            optionsShown: true,
            year: 0,
            yearFrom: 0,
            yearTo: 0,
            genres: [],
            selectedGenre: '',
            countries: [],
            selectedCountry: '',
            dontPush: false
        }
    },
    mounted() {
        this.widthControlSearch()
        window.onresize = () => this.widthControlSearch()

        document.addEventListener('DOMContentLoaded', this.getFilmsArr())
    },
    methods: {
        widthControlSearch() {
            if (window.innerWidth < 768) {
                this.advancedOptionsBtn = true
                this.setOptionsState()
            } else {
                this.advancedOptionsBtn = false
                this.optionsShown = true
            }
        },
        getFilmsArr() {
            const db = getDatabase()
            const filmsObj = ref(db, 'films/')
            onValue(filmsObj, (snapshot) => {
                let finalObj = snapshot.val()
                this.filmsArr = Object.values(finalObj)
            })
        },
        saveTitle(val) {
            this.title = val
        },
        showNotFound() {
            this.notFound = true
        },
        setOptionsState() {
            if (this.allowAdwancedOptions) {
                this.optionsShown = true
            } else {
                this.optionsShown = false
            }
        },
        showOptions() {
            if (!this.allowAdwancedOptions) {
                this.allowAdwancedOptions = true
                this.setOptionsState()
            } else {
                this.allowAdwancedOptions = false
                this.setOptionsState()
            }
        },
        saveYear(year) {
            this.year = year
        },
        savePeriod(from, to) {
            this.yearFrom = from
            this.yearTo = to
        },
        getGenres() {
            let grossGenres = []
            this.filmsArr.forEach(item => {
                grossGenres.push(item.genre, item.genre2)
            })
            this.genres = ['All', ...new Set(grossGenres)]
        },
        saveGenre(val) {
            if (val === 'All') {
                this.selectedGenre = ''
            } else {
                this.selectedGenre = val
            }
        },
        getCountries() {
            let grossCountries = []
            this.filmsArr.forEach(item => {
                grossCountries.push(item.country)
            })
            this.countries = ['All', ...new Set(grossCountries)]
        },
        saveCountry(val) {
            if (val === 'All') {
                this.selectedCountry = ''
            } else {
                this.selectedCountry = val
            }
        },
        advancedSearch() {
            let searchedFilms = []
            if (this.title && !this.year && !this.yearFrom && !this.selectedGenre && !this.selectedCountry) {
                searchedFilms = this.filmsArr.filter(e => {
                    return e.title.toLowerCase().includes(this.title.toLowerCase())
                })
            } else if (this.title && this.year && !this.yearFrom && !this.selectedGenre && !this.selectedCountry) {
                searchedFilms = this.filmsArr.filter(e => {
                    return (
                        e.title.toLowerCase().includes(this.title.toLowerCase()) &&
                        e.year == this.year
                    )
                })
            } else if (this.title && !this.year && this.yearFrom && !this.selectedGenre && !this.selectedCountry) {
                searchedFilms = this.filmsArr.filter(e => {
                    return (
                        e.title.toLowerCase().includes(this.title.toLowerCase()) &&
                        e.year >= this.yearFrom &&
                        e.year <= this.yearTo
                    )
                })
            } else if (this.title && this.year && !this.yearFrom && this.selectedGenre && !this.selectedCountry) {
                searchedFilms = this.filmsArr.filter(e => {
                    return (
                        e.title.toLowerCase().includes(this.title.toLowerCase()) &&
                        e.year == this.year &&
                        (e.genre == this.selectedGenre || e.genre2 == this.selectedGenre)
                    )
                })
            } else if (this.title && !this.year && this.yearFrom && this.selectedGenre && !this.selectedCountry) {
                searchedFilms = this.filmsArr.filter(e => {
                    return (
                        e.title.toLowerCase().includes(this.title.toLowerCase()) &&
                        e.year >= this.yearFrom &&
                        e.year <= this.yearTo &&
                        (e.genre == this.selectedGenre || e.genre2 == this.selectedGenre)
                    )
                })
            } else if (this.title && this.year && !this.yearFrom && this.selectedGenre && this.selectedCountry) {
                searchedFilms = this.filmsArr.filter(e => {
                    return(
                        e.title.toLowerCase().includes(this.title.toLowerCase()) &&
                        e.year == this.year &&
                        (e.genre == this.selectedGenre || e.genre2 == this.selectedGenre) &&
                        e.country == this.selectedCountry
                    )
                })
            } else if (this.title && !this.year && this.yearFrom && this.selectedGenre && this.selectedCountry) {
                searchedFilms = this.filmsArr.filter(e => {
                    return (
                        e.title.toLowerCase().includes(this.title.toLowerCase()) &&
                        e.year >= this.yearFrom &&
                        e.year <= this.yearTo &&
                        (e.genre == this.selectedGenre || e.genre2 == this.selectedGenre) &&
                        e.country == this.selectedCountry
                    )
                })
            } else if (this.title && !this.year && !this.yearFrom && this.selectedGenre && !this.selectedCountry) {
                searchedFilms = this.filmsArr.filter(e => {
                    return (
                        e.title.toLowerCase().includes(this.title.toLowerCase()) &&
                        (e.genre == this.selectedGenre || e.genre2 == this.selectedGenre)
                    )
                })
            } else if (this.title && !this.year && !this.yearFrom && this.selectedGenre && this.selectedCountry) {
                searchedFilms = this.filmsArr.filter(e => {
                    return (
                        e.title.toLowerCase().includes(this.title.toLowerCase()) &&
                        (e.genre == this.selectedGenre || e.genre2 == this.selectedGenre) &&
                        e.country == this.selectedCountry
                    )
                })
            } else if (this.title && !this.year && !this.yearFrom && !this.selectedGenre && this.selectedCountry) {
                searchedFilms = this.filmsArr.filter(e => {
                    return (
                        e.title.toLowerCase().includes(this.title.toLowerCase()) &&
                        e.country == this.selectedCountry
                    )
                })
            } else if (!this.title && this.year && !this.yearFrom && !this.selectedGenre && !this.selectedCountry) {
                searchedFilms = this.filmsArr.filter(e => {
                    return e.year == this.year
                })
            } else if (!this.title && !this.year && this.yearFrom && !this.selectedGenre && !this.selectedCountry) {
                searchedFilms = this.filmsArr.filter(e => {
                    return (
                        e.year >= this.yearFrom &&
                        e.year <= this.yearTo
                    )
                })
            } else if (!this.title && this.year && !this.yearFrom && this.selectedGenre && !this.selectedCountry) {
                searchedFilms = this.filmsArr.filter(e => {
                    return (
                        e.year == this.year &&
                        (e.genre == this.selectedGenre || e.genre2 == this.selectedGenre)
                    )
                })
            } else if (!this.title && !this.year && this.yearFrom && this.selectedGenre && !this.selectedCountry) {
                searchedFilms = this.filmsArr.filter(e => {
                    return (
                        e.year >= this.yearFrom &&
                        e.year <= this.yearTo &&
                        (e.genre == this.selectedGenre || e.genre2 == this.selectedGenre)
                    )
                })
            } else if (!this.title && this.year && !this.yearFrom && this.selectedGenre && this.selectedCountry) {
                searchedFilms = this.filmsArr.filter(e => {
                    return (
                        e.year == this.year &&
                        (e.genre == this.selectedGenre || e.genre2 == this.selectedGenre) &&
                        e.country == this.selectedCountry
                    )
                })
            } else if (!this.title && !this.year && this.yearFrom && this.selectedGenre && this.selectedCountry) {
                searchedFilms = this.filmsArr.filter(e => {
                    return (
                        e.year >= this.yearFrom &&
                        e.year <= this.yearTo &&
                        (e.genre == this.selectedGenre || e.genre2 == this.selectedGenre) &&
                        e.country == this.selectedCountry
                    )
                })
            } else if (!this.title && this.year && !this.yearFrom && !this.selectedGenre && this.selectedCountry) {
                searchedFilms = this.filmsArr.filter(e => {
                    return (
                        e.year == this.year &&
                        e.country == this.selectedCountry
                    )
                })
            } else if (!this.title && !this.year && this.yearFrom && !this.selectedGenre && this.selectedCountry) {
                searchedFilms = this.filmsArr.filter(e => {
                    return (
                        e.year >= this.yearFrom &&
                        e.year <= this.yearTo &&
                        e.country == this.selectedCountry
                    )
                })
            } else if (!this.title && !this.year && !this.yearFrom && this.selectedGenre && !this.selectedCountry) {
                searchedFilms = this.filmsArr.filter(e => {
                    return (e.genre == this.selectedGenre || e.genre2 == this.selectedGenre)
                })
            } else if (!this.title && !this.year && !this.yearFrom && this.selectedGenre && this.selectedCountry) {
                searchedFilms = this.filmsArr.filter(e => {
                    return (
                        (e.genre == this.selectedGenre || e.genre2 == this.selectedGenre) &&
                        e.country == this.selectedCountry
                    )
                })
            } else if (!this.title && !this.year && !this.yearFrom && !this.selectedGenre && this.selectedCountry) {
                searchedFilms = this.filmsArr.filter(e => {
                    return e.country == this.selectedCountry
                })
            }

            if (this.yearFrom && this.yearTo && this.yearFrom > this.yearTo) {
                this.dontPush = true
            } else {
                this.dontPush = false
            }

            if (!searchedFilms.length) {
                this.notFound2 = true
            } else if (!this.dontPush) {
                sessionStorage.setItem('allSearchedMovies', JSON.stringify(searchedFilms))
                this.$router.push('/searchres')
            }
        }
    }
}
</script>

<style scoped lang="scss">
    #genre {
        margin-bottom: 15px;
    }

    @media (min-width: 576px) and (max-width: 767px) {
        .period-genre-country {
            display: flex;
        }
        .genre-country {
            margin-left: 50px;
        }
        #genre {
            margin-bottom: 23px;
        }
    }
</style>
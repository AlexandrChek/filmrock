<template>
    <div class="mb-3 pt-md-0 pt-2">
        <SearchFilm @gotTitleForAdwSearch="saveTitle" @searchTitleClicked="searchTitle"></SearchFilm>
        <NotFound v-if="notFound"></NotFound>
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
            <NotFound v-if="notFound2"></NotFound>
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

export default {
    name: 'SearchBlock',
    props: ['filmsArr'],
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
        saveTitle(val) {
            this.title = val
        },
        searchTitle(val) {
            let allSearchedMovies = []
            this.filmsArr.forEach(item => {
                let title = item.title.toLowerCase()
                if (title.includes(val.toLowerCase())) {
                    allSearchedMovies.push(item)
                }
            })
            if (!allSearchedMovies.length) {
                this.notFound = true
            } else {
                sessionStorage.setItem('allSearchedMovies', JSON.stringify(allSearchedMovies))
                this.$router.push('/searchres')
            }
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
            this.genres = ['', ...new Set(grossGenres)]
        },
        saveGenre(val) {
            this.selectedGenre = val
        },
        getCountries() {
            let grossCountries = []
            this.filmsArr.forEach(item => {
                grossCountries.push(item.country)
            })
            this.countries = ['', ...new Set(grossCountries)]
        },
        saveCountry(val) {
            this.selectedCountry = val
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

    @media (max-width: 767px) and (min-width: 576px) {
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
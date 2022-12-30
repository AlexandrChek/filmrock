<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-3 col-md-4 col-sm-12 d-flex flex-column justify-content-between">
        <div>
          <SearchFilm @gotTitleForAdwSearch="saveTitle" @searchMovie="searchTitle"></SearchFilm>
          <NotFound v-if="notFound"></NotFound>
          <AdvancedOptions v-if="advancedOptionsBtn" :show="advancedOptions" @click="showOptions"/>
          <div v-if="advancedOptions" class="period-genre-country"> 
            <SearchPeriod @yearEntered="saveYear" @periodEntered="savePeriod"/>
            <div class="my-3 w-100 genre-country">
              <div class="d-inline-flex my-2 w-100">
                <label for="genre">Genre</label>
                <select id="genre" @focus="getGenres" v-model="selectedGenre">
                  <option v-for="genre in genres" :key="genre">{{genre}}</option>
                </select>
              </div>
              <div class="d-inline-flex my-3 w-100">
                <label for="country">Country</label>
                <select id="country" @focus="getCountries" v-model="selectedCountry">
                  <option v-for="country in countries" :key="country">{{country}}</option>
                </select>
              </div>
            </div>
          </div>
          <div v-if="advancedOptions" class="text-start btn-wrapper">
            <MyButton @click="advancedSearch">Advanced search</MyButton>
            <NotFound v-if="notFound2"></NotFound>
          </div>
        </div>
        <AdvertPlace v-if="animationLeft"></AdvertPlace>
      </div>
      <div class="col-lg-9 col-md-8 col-sm-12 px-0 pb-2 mt-1 movie-lines">
        <LineHeader>New movies</LineHeader>
        <div class="d-inline-flex align-items-center justify-content-center w-100">
          <ArrowLeftBtn @click="goLeft" v-if="position"/>
          <div class="d-inline-flex justify-content-center line-wrapper">
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
        <LineHeader>Top rated movies</LineHeader>
        <div class="d-inline-flex align-items-center justify-content-center w-100">
          <ArrowLeftBtn @click="goLeftTop" v-if="positionTop"/>
          <div class="d-inline-flex justify-content-center">
            <router-link v-for="film in shortListTop" :to="'/' + film.id" :key="film" class="d-inline-flex movie-item">
              <div>
                <img :src="film.src" :alt="film.title" class="img-fluid">
                <div class="title-small">{{film.title}}</div>
                <FilmGenres>
                  {{film.genre}}, {{film.genre2}}
                </FilmGenres>
              </div>
            </router-link>
          </div>
          <ArrowRightBtn @click="goRightTop" v-if="positionTop < 10 - shortListLength"/>
        </div>
      </div>
    </div>
  </div>
  <AdvertPlace v-if="!animationLeft"></AdvertPlace>
  <TrailersLink></TrailersLink>
</template>

<script>
// @ is an alias to /src
import MyButton from '../components/MyButton.vue'
import NotFound from '../components/NotFound.vue'
import AdvancedOptions from '../components/AdvancedOptions.vue'
import AdvertPlace from '../components/AdvertPlace.vue'
import LineHeader from '../components/LineHeader.vue'
import ArrowLeftBtn from '../components/ArrowLeftBtn.vue'
import ArrowRightBtn from '../components/ArrowRightBtn.vue'
import FilmGenres from '../components/FilmGenres.vue'
import SearchFilm from '../components/SearchFilm.vue'
import SearchPeriod from '../components/SearchPeriod.vue'
import TrailersLink from '../components/TrailersLink.vue'
import {getDatabase, ref, onValue} from 'firebase/database'

export default {
  name: 'HomeView',
  components: {
    LineHeader,
    ArrowLeftBtn,
    ArrowRightBtn,
    FilmGenres,
    SearchFilm,
    SearchPeriod,
    MyButton,
    NotFound,
    AdvancedOptions,
    AdvertPlace,
    TrailersLink
  },
  data () {
    return {
      filmsArr: [],
      newMovies: [],
      position: 0,
      topMovies: [],
      positionTop: 0,
      windowWidth: window.innerWidth,
      shortListLength: 0,
      title: '',
      year: 0,
      yearFrom: 0,
      yearTo: 0,
      genres: [],
      selectedGenre: '',
      countries: [],
      selectedCountry: '',
      notFound: false,
      notFound2: false,
      advancedOptionsBtn: false,
      allowAdwancedOptions: false,
      advancedOptions: true,
      dontPush: false,
      animationLeft: true
    }
  },
  created() {
    const db = getDatabase()
    const filmsObj = ref(db, 'films/')
    onValue(filmsObj, (snapshot) => {
      let finalObj = snapshot.val()
      this.filmsArr = Object.values(finalObj)
      let filmsArr = this.filmsArr
      let recentFilms = []
      let ratedFilms = []
      let currYear = new Date().getFullYear()
      for (let i = 0; i < filmsArr.length; i++) {
        if (filmsArr[i].year === currYear) {
          recentFilms.push(filmsArr[i])
        }
        if(filmsArr[i].rating) {
          ratedFilms.push(filmsArr[i])
        }
      }
      if (recentFilms.length < 10) {
        let r = 10 - recentFilms.length
        let lastYear = []
        for (let i = 0; i < filmsArr.length; i++) {
          if (filmsArr[i].year === currYear - 1) {
            lastYear.push(filmsArr[i])
          }
        }
        lastYear = lastYear.sort((a,b) => {
          return b.id - a.id
        }).slice(0, r)
        this.newMovies = [...recentFilms, ...lastYear]
      } else {
        this.newMovies = recentFilms.sort((a,b) => {
          return b.id - a.id
        }).slice(0, 10)
      }

      this.topMovies = ratedFilms.sort((a,b) => {
        return b.rating - a.rating
      }).slice(0, 10)
    })

    this.widthControl()
    window.onresize = () => {this.widthControl()}
  },
  computed: {
    shortList () {
      let start = this.position
      let end = start + this.shortListLength
      return this.newMovies.slice(start, end)
    },
    shortListTop () {
      let start = this.positionTop
      let end = start + this.shortListLength
      return this.topMovies.slice(start, end)
    }
  },
  methods: {
    widthControl () {
      this.windowWidth = window.innerWidth
      if (this.windowWidth >= 992) {
        this.shortListLength = 4
      } else if (this.windowWidth < 992 && this.windowWidth >= 576) {
        this.shortListLength = 3
      } else {
        this.shortListLength = 2
      }
      if (this.windowWidth < 768) {
        this.animationLeft = false
        this.advancedOptionsBtn = true
        this.getOptionsState()
      } else {
        this.animationLeft = true
        this.advancedOptionsBtn = false
        this.advancedOptions = true
      }
    },
    goLeft () {
      this.position--
    },
    goRight () {
      this.position++
    },
    goLeftTop () {
      this.positionTop--
    },
    goRightTop () {
      this.positionTop++
    },
    saveTitle (val) {
      this.title = val
    },
    searchTitle (val) {
      let searchedFilms = 0
      for (let i = 0; i < this.filmsArr.length; i++) {
        let title = this.filmsArr[i].title.toLowerCase()
        if (title.includes(val.toLowerCase())) {
          searchedFilms++
        }
      }
      if (!searchedFilms) {
        this.notFound = true
      } else {
        sessionStorage.setItem('searchedTitle', val)
        if (sessionStorage.getItem('selectedIds')) {
          sessionStorage.removeItem('selectedIds')
        }
        this.$router.push('/searchres')
      }
    },
    saveYear (year) {
      this.year = year
    },
    savePeriod (from, to) {
      this.yearFrom = from
      this.yearTo = to
    },
    getGenres () {
      let grossGenres = []
      for (let i = 0; i < this.filmsArr.length; i++) {
        grossGenres.push(this.filmsArr[i].genre)
        grossGenres.push(this.filmsArr[i].genre2)
      }
      this.genres = [...new Set(grossGenres)]
      this.genres.unshift('')
    },
    getCountries () {
      let grossCountries = []
      for (let i = 0; i < this.filmsArr.length; i++) {
        grossCountries.push(this.filmsArr[i].country)
      }
      this.countries = [...new Set(grossCountries)]
      this.countries.unshift('')
    },
    getOptionsState () {
      if (this.allowAdwancedOptions) {
        this.advancedOptions = true
      } else {
        this.advancedOptions = false
      }
    },
    showOptions () {
      if (!this.allowAdwancedOptions) {
        this.allowAdwancedOptions = true
        this.getOptionsState()
      } else {
        this.allowAdwancedOptions = false
        this.getOptionsState()
      }
    },
    advancedSearch () {
      let searchedFilms = []
      if (this.title && !this.year && !this.yearFrom && !this.selectedGenre && !this.selectedCountry) {
        searchedFilms = this.filmsArr.filter((e) => {
          return e.title.toLowerCase().includes(this.title.toLowerCase())
        })
        if (searchedFilms.length === 0) {
          this.notFound2 = true
        }
      } else if (this.title && this.year && !this.yearFrom && !this.selectedGenre && !this.selectedCountry) {
        searchedFilms = this.filmsArr.filter((e) => {
          return (
            e.title.toLowerCase().includes(this.title.toLowerCase()) &&
            e.year == this.year
          )
        })
        if (searchedFilms.length === 0) {
          this.notFound2 = true
        }
      } else if (this.title && !this.year && this.yearFrom && !this.selectedGenre && !this.selectedCountry) {
        searchedFilms = this.filmsArr.filter((e) => {
          return (
            e.title.toLowerCase().includes(this.title.toLowerCase()) &&
            e.year >= this.yearFrom &&
            e.year <= this.yearTo
          )
        })
        if (searchedFilms.length === 0) {
          this.notFound2 = true
        }
      } else if (this.title && this.year && !this.yearFrom && this.selectedGenre && !this.selectedCountry) {
        searchedFilms = this.filmsArr.filter((e) => {
          return (
            e.title.toLowerCase().includes(this.title.toLowerCase()) &&
            e.year == this.year &&
            (e.genre == this.selectedGenre || e.genre2 == this.selectedGenre)
          )
        })
        if (searchedFilms.length === 0) {
          this.notFound2 = true
        }
      } else if (this.title && !this.year && this.yearFrom && this.selectedGenre && !this.selectedCountry) {
        searchedFilms = this.filmsArr.filter((e) => {
          return (
            e.title.toLowerCase().includes(this.title.toLowerCase()) &&
            e.year >= this.yearFrom &&
            e.year <= this.yearTo &&
            (e.genre == this.selectedGenre || e.genre2 == this.selectedGenre)
          )
        })
        if (searchedFilms.length === 0) {
          this.notFound2 = true
        }
      } else if (this.title && this.year && !this.yearFrom && this.selectedGenre && this.selectedCountry) {
        searchedFilms = this.filmsArr.filter((e) => {
          return(
            e.title.toLowerCase().includes(this.title.toLowerCase()) &&
            e.year == this.year &&
            (e.genre == this.selectedGenre || e.genre2 == this.selectedGenre) &&
            e.country == this.selectedCountry
          )
        })
        if (searchedFilms.length === 0) {
          this.notFound2 = true
        }
      } else if (this.title && !this.year && this.yearFrom && this.selectedGenre && this.selectedCountry) {
        searchedFilms = this.filmsArr.filter((e) => {
          return (
            e.title.toLowerCase().includes(this.title.toLowerCase()) &&
            e.year >= this.yearFrom &&
            e.year <= this.yearTo &&
            (e.genre == this.selectedGenre || e.genre2 == this.selectedGenre) &&
            e.country == this.selectedCountry
          )
        })
        if (searchedFilms.length === 0) {
          this.notFound2 = true
        }
      } else if (this.title && !this.year && !this.yearFrom && this.selectedGenre && !this.selectedCountry) {
        searchedFilms = this.filmsArr.filter((e) => {
          return (
            e.title.toLowerCase().includes(this.title.toLowerCase()) &&
            (e.genre == this.selectedGenre || e.genre2 == this.selectedGenre)
          )
        })
        if (searchedFilms.length === 0) {
          this.notFound2 = true
        }
      } else if (this.title && !this.year && !this.yearFrom && this.selectedGenre && this.selectedCountry) {
        searchedFilms = this.filmsArr.filter((e) => {
          return (
            e.title.toLowerCase().includes(this.title.toLowerCase()) &&
            (e.genre == this.selectedGenre || e.genre2 == this.selectedGenre) &&
            e.country == this.selectedCountry
          )
        })
        if (searchedFilms.length === 0) {
          this.notFound2 = true
        }
      } else if (this.title && !this.year && !this.yearFrom && !this.selectedGenre && this.selectedCountry) {
        searchedFilms = this.filmsArr.filter((e) => {
          return (
            e.title.toLowerCase().includes(this.title.toLowerCase()) &&
            e.country == this.selectedCountry
          )
        })
        if (searchedFilms.length === 0) {
          this.notFound2 = true
        }
      } else if (!this.title && this.year && !this.yearFrom && !this.selectedGenre && !this.selectedCountry) {
        searchedFilms = this.filmsArr.filter((e) => {
          return e.year == this.year
        })
        if (searchedFilms.length === 0) {
          this.notFound2 = true
        }
      } else if (!this.title && !this.year && this.yearFrom && !this.selectedGenre && !this.selectedCountry) {
        searchedFilms = this.filmsArr.filter((e) => {
          return (
            e.year >= this.yearFrom &&
            e.year <= this.yearTo
          )
        })
        if (searchedFilms.length === 0) {
          this.notFound2 = true
        }
      } else if (!this.title && this.year && !this.yearFrom && this.selectedGenre && !this.selectedCountry) {
        searchedFilms = this.filmsArr.filter((e) => {
          return (
            e.year == this.year &&
            (e.genre == this.selectedGenre || e.genre2 == this.selectedGenre)
          )
        })
        if (searchedFilms.length === 0) {
          this.notFound2 = true
        }
      } else if (!this.title && !this.year && this.yearFrom && this.selectedGenre && !this.selectedCountry) {
        searchedFilms = this.filmsArr.filter((e) => {
          return (
            e.year >= this.yearFrom &&
            e.year <= this.yearTo &&
            (e.genre == this.selectedGenre || e.genre2 == this.selectedGenre)
          )
        })
        if (searchedFilms.length === 0) {
          this.notFound2 = true
        }
      } else if (!this.title && this.year && !this.yearFrom && this.selectedGenre && this.selectedCountry) {
        searchedFilms = this.filmsArr.filter((e) => {
          return (
            e.year == this.year &&
            (e.genre == this.selectedGenre || e.genre2 == this.selectedGenre) &&
            e.country == this.selectedCountry
          )
        })
        if (searchedFilms.length === 0) {
          this.notFound2 = true
        }
      } else if (!this.title && !this.year && this.yearFrom && this.selectedGenre && this.selectedCountry) {
        searchedFilms = this.filmsArr.filter((e) => {
          return (
            e.year >= this.yearFrom &&
            e.year <= this.yearTo &&
            (e.genre == this.selectedGenre || e.genre2 == this.selectedGenre) &&
            e.country == this.selectedCountry
          )
        })
        if (searchedFilms.length === 0) {
          this.notFound2 = true
        }
      } else if (!this.title && this.year && !this.yearFrom && !this.selectedGenre && this.selectedCountry) {
        searchedFilms = this.filmsArr.filter((e) => {
          return (
            e.year == this.year &&
            e.country == this.selectedCountry
          )
        })
        if (searchedFilms.length === 0) {
          this.notFound2 = true
        }
      } else if (!this.title && !this.year && this.yearFrom && !this.selectedGenre && this.selectedCountry) {
        searchedFilms = this.filmsArr.filter((e) => {
          return (
            e.year >= this.yearFrom &&
            e.year <= this.yearTo &&
            e.country == this.selectedCountry
          )
        })
        if (searchedFilms.length === 0) {
          this.notFound2 = true
        }
      } else if (!this.title && !this.year && !this.yearFrom && this.selectedGenre && !this.selectedCountry) {
        searchedFilms = this.filmsArr.filter((e) => {
          return (e.genre == this.selectedGenre || e.genre2 == this.selectedGenre)
        })
        if (searchedFilms.length === 0) {
          this.notFound2 = true
        }
      } else if (!this.title && !this.year && !this.yearFrom && this.selectedGenre && this.selectedCountry) {
        searchedFilms = this.filmsArr.filter((e) => {
          return (
            (e.genre == this.selectedGenre || e.genre2 == this.selectedGenre) &&
            e.country == this.selectedCountry
          )
        })
        if (searchedFilms.length === 0) {
          this.notFound2 = true
        }
      } else if (!this.title && !this.year && !this.yearFrom && !this.selectedGenre && this.selectedCountry) {
        searchedFilms = this.filmsArr.filter((e) => {
          return e.country == this.selectedCountry
        })
        if (searchedFilms.length === 0) {
          this.notFound2 = true
        }
      }
      if (this.yearFrom && this.yearTo && this.yearFrom > this.yearTo) {
        this.dontPush = true
      } else {
        this.dontPush = false
      }
      if (searchedFilms.length > 0 && !this.dontPush) {
        let idsArr = []
        for (let i = 0; i < searchedFilms.length; i++) {
          idsArr.push(searchedFilms[i].id)
        }
        let selectedIds = idsArr.join(',')
        sessionStorage.setItem('selectedIds', selectedIds)
        if (sessionStorage.getItem('searchedTitle')) {
          sessionStorage.removeItem('searchedTitle')
        }
        this.$router.push('/searchres')
      }
    }
  }
}
</script>

<style scoped>
select {
  margin: 0 8px;
  width: 44.5%;
  color: rgb(5, 112, 5);
}
select:focus {
  border: none;
  outline: 3px solid #1dda2c;
  border-radius: .1px;
  background-color: beige;
}
.movie-lines {
  border: .1px solid wheat;
}
.line-wrapper {
  margin-right: .5vw;
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
  label {
    font-size: 15px;
  }
  select {
    width: 54.5%;
  }
}
@media (max-width: 767px) {
  .period-genre-country {
    display: flex;
  }
  .genre-country {
    margin-left: 50px;
  }
  select {
    width: 21vw;
  }
  .btn-wrapper {
    margin: 15px 0;
  }
  .movie-item {
    margin-left: .7vw;
  }
}
@media (max-width: 575px) {
  .period-genre-country {
    display: block;
  }
  .genre-country {
    margin-left: 0px;
  }
  label {
    font-size: smaller;
  }
  select {
    width: 31vw;
  }
}
</style>

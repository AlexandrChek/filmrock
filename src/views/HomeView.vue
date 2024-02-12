<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-3 col-md-4 col-sm-12 d-flex flex-column justify-content-between">
        <SearchBlock :filmsArr="filmsArr"/>
        <AdvertPlace v-if="animationLeft"/>
      </div>
      <div class="col-lg-9 col-md-8 col-sm-12 px-0 pb-2 mt-1 movie-lines">
        <LineHeader>New movies</LineHeader>
        <MovieLine 
          :list="shortList"
          :position="position"
          :rightArrowShown="rightArrowShown"
          @leftArrowClicked="moveLeft"
          @rightArrowClicked="moveRight"
        />
        <LineHeader>Top rated movies</LineHeader>
        <MovieLine 
          :list="shortListTop"
          :position="positionTop"
          :rightArrowShown="rightArrowTopShown"
          @leftArrowClicked="moveLeftTop"
          @rightArrowClicked="moveRightTop"
        />
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-center" v-if="!animationLeft">
    <AdvertPlace/>
  </div>
  <TrailersLink/>
</template>

<script>
import SearchBlock from '../components/SearchBlock.vue'
import AdvertPlace from '../components/AdvertPlace.vue'
import LineHeader from '../components/LineHeader.vue'
import MovieLine from '../components/MovieLine.vue'
import TrailersLink from '../components/TrailersLink.vue'
import {getDatabase, ref, onValue} from 'firebase/database'

export default {
  name: 'HomeView',
  components: {
    LineHeader,
    MovieLine,
    SearchBlock,
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
      shortListLength: 0,
      animationLeft: true
    }
  },
  created() {
    const db = getDatabase()
    const filmsObj = ref(db, 'films/')

    onValue(filmsObj, (snapshot) => {
      let finalObj = snapshot.val()
      this.filmsArr = Object.values(finalObj)
      this.getNewMovies()
      this.getTopMovies()
    })

    this.widthControl()
    window.addEventListener('resize', this.widthControl)
  },
  computed: {
    shortList() {
      let start = this.position
      let end = start + this.shortListLength
      return this.newMovies.slice(start, end)
    },
    rightArrowShown() {
      return this.position < 10 - this.shortListLength
    },
    shortListTop() {
      let start = this.positionTop
      let end = start + this.shortListLength
      return this.topMovies.slice(start, end)
    },
    rightArrowTopShown() {
      return this.positionTop < 10 - this.shortListLength
    }
  },
  methods: {
    getNewMovies() {
      let sortedByYear = this.filmsArr.sort((a,b) => {
        return b.year - a.year
      }).slice(0, 10)
      let newYears = []
      sortedByYear.forEach(item => {newYears.push(item.year)})
      let uniqueYears = [...new Set(newYears)]

      if(uniqueYears.length === 1) {
        this.newMovies = sortedByYear.sort((a,b) => {
          return b.id - a.id
        })
      } else {
        uniqueYears.forEach(year => {
          let yearItems = []
          sortedByYear.forEach(item => {
            if(item.year === year) {
              yearItems.push(item)
            }
          })
          let sortedYearItems = yearItems.sort((a,b) => {
            return b.id - a.id
          })
          if(!this.newMovies.length) {
            this.newMovies = [...sortedYearItems]
          } else {
            this.newMovies = [...this.newMovies, ...sortedYearItems]
          }
        })
      }
    },
    getTopMovies() {
      let ratedFilms = []
      this.filmsArr.forEach(item => {
        if(item.rating) {
          ratedFilms.push(item)
        }
      })
      this.topMovies = ratedFilms.sort((a,b) => {
        return b.rating - a.rating
      }).slice(0, 10)
    },
    widthControl() {
      let windowWidth = window.innerWidth

      if(windowWidth >= 992) {
        this.shortListLength = 4
      } else if (windowWidth < 992 && windowWidth >= 576) {
        this.shortListLength = 3
      } else {
        this.shortListLength = 2
      }

      if(windowWidth < 768) {
        this.animationLeft = false
      } else {
        this.animationLeft = true
      }
    },
    moveLeft() {
      this.position--
    },
    moveRight() {
      this.position++
    },
    moveLeftTop() {
      this.positionTop--
    },
    moveRightTop() {
      this.positionTop++
    }
  }
}
</script>

<style scoped>
.movie-lines {
  border: .1px solid wheat;
}
</style>
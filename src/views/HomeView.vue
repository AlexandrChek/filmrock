<template>
  <div class="container-fluid">
    <div class="row mt-1">
      <div class="col-lg-3 col-md-4 col-sm-12 d-flex flex-column justify-content-between">
        <SearchBlock/>
        <AdvertPlace v-if="animationLeft"/>
      </div>
      <div class="col-lg-9 col-md-8 col-sm-12 px-0 movie-lines">
        <LineHeader :left="true">New movies</LineHeader>
        <MovieLine :list="newMovies" :shortListLength="shortListLength"/>
        <LineHeader :left="true">Top rated movies</LineHeader>
        <MovieLine :list="topMovies" :shortListLength="shortListLength"/>
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
import {getDatabase, ref, query, orderByChild, limitToLast, onValue} from 'firebase/database'

export default {
  name: 'HomeView',
  components: {
    LineHeader,
    MovieLine,
    SearchBlock,
    AdvertPlace,
    TrailersLink
  },
  data() {
    return {
      newMovies: [],
      topMovies: [],
      shortListLength: 0,
      animationLeft: true
    }
  },
  created() {
    const db = getDatabase()
    this.getNewMovies(db)
    this.getTopMovies(db)

    this.homeWidthControl()
    window.addEventListener('resize', this.homeWidthControl)
  },
  methods: {
    getNewMovies(db) {
      const filmsObj = query(ref(db, 'films/'), orderByChild('year'), limitToLast(10))
      onValue(filmsObj, (snapshot) => {
        let newObj = snapshot.val()
        this.newMovies = Object.values(newObj).reverse()
      })
    },
    getTopMovies(db) {
      const filmsObj = query(ref(db, 'films/'), orderByChild('rating'), limitToLast(10))
      onValue(filmsObj, (snapshot) => {
        let topObj = snapshot.val()
        let topArr = Object.values(topObj)
        this.topMovies = topArr.sort((a, b) => {
          return b.rating - a.rating
        })
      })
    },
    homeWidthControl() {
      let windowWidth = window.innerWidth

      if (windowWidth < 576) {
        this.shortListLength = 2
      } else if (windowWidth < 992) {
        this.shortListLength = 3
      } else {
        this.shortListLength = 4
      }

      if (windowWidth < 768) {
        this.animationLeft = false
      } else {
        this.animationLeft = true
      }
    }
  }
}
</script>

<style scoped>
  .movie-lines {
    border: .1px solid wheat;
  }
</style>
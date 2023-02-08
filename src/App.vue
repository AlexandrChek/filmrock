<template>
  <div class="container-fluid sticky-top">
    <div class="row pt-1">
      <div class="col-md-4 col-sm-4 col-4 p-0">
        <LogoType/>
      </div>
      <div class="col-md-1 col-sm-5 col-5 px-0" v-if="$store.state.user">
        <RegUser/>
      </div>
      <div class="col-md-7 col-sm-3 col-3 d-inline-flex justify-content-center menu-wrapper">
        <NavBar/>
      </div>
    </div>
  </div>
  <router-view/>
  <MyFooter/>
</template>

<script>
  import LogoType from '@/components/Logo.vue'
  import RegUser from '@/components/RegUser.vue'
  import NavBar from '@/components/NavBar.vue'
  import MyFooter from '@/components/Footer.vue'

  export default {
    components: {
      LogoType,
      RegUser,
      NavBar,
      MyFooter
    },
    mounted () {
      let user = localStorage.getItem('user')
      if (user) {
        this.$store.state.user = user
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  background-color: black;
  color: wheat;
}
.sticky-top {
  background-color: black;
}
@media (max-width: 991px) {
  .menu-wrapper {
    padding-left: 24px;
    padding-right: 0;
  }
}
</style>

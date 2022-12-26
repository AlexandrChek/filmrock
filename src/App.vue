<template>
  <div class="container-fluid sticky-top">
    <div class="row">
      <div class="col-md-3 col-3 p-0">
        <LogoType/>
      </div>
      <div class="col-md-2 col-6 d-flex flex-column justify-content-center" v-if="$store.state.user">
        <RegUser/>
      </div>
      <div class="col-md-7 col-3 d-inline-flex align-items-center justify-content-end">
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
      this.$router.push('/')
      
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
</style>

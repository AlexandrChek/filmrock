<template>
  <MyHeader/>
  <router-view/>
  <MyFooter/>
</template>

<script>
  import MyHeader from '@/components/Header.vue'
  import MyFooter from '@/components/Footer.vue'

  export default {
    components: {
      MyHeader,
      MyFooter
    }
  }
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: black;
  color: wheat;
}
</style>
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
    },
    mounted() {
      if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
        window.addEventListener('load', this.setHeightUnit)
        window.addEventListener('resize', this.setHeightUnit)
      }
    },
    methods: {
      setHeightUnit() {
        const vh = window.innerHeight / 100
        document.documentElement.style.setProperty('--vh', `${vh}px`)
      }
    }
  }
</script>

<style>
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    background-color: black;
    color: wheat;
    -moz-text-size-adjust: none;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
    margin: 0;
  }
  button {
    -webkit-appearance: button;
  }
  a {
    text-decoration-skip-ink: all;
  }
</style>
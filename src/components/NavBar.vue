<template>
  <div v-if="inlineMenu || isMenuActive" :class="{'horiz': inlineMenu, 'vert': !inlineMenu && isMenuActive}">
    <nav v-for="item in menu" :key="item.name">
      <router-link :to="item.to" @click="closeMenu">
        {{item.name}}
      </router-link> 
    </nav>
  </div>
  <BurgerBtn @burgerClicked="isMenuActive = !isMenuActive" ref="burger"/>
</template>

<script>
import BurgerBtn from './BurgerBtn.vue'

export default {
  name: 'NavBar',
  components: { BurgerBtn },
  data() {
    return {
      menu: [
        {to: "/", name: "Home"},
        {to: "/contacts", name: "Contacts"},
        {to: "/logIn", name: "Log In"},
        {to: "/registration", name: "Registration"}
      ],
      inlineMenu: window.matchMedia('(min-width: 768px)').matches,
      isMenuActive: false
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.inlineMenu = window.matchMedia('(min-width: 768px)').matches
    })
  },
  methods: {
    closeMenu() {
      this.isMenuActive = false
      this.$refs.burger.showLines()
    }
  }
}
</script>

<style scoped lang="scss">
@import '../variables';

  nav {
    width: 100%;
    background-color: $black-light;
    border-bottom: .5px dotted wheat;
    @media (min-width: 768px) {
      width: auto;
      background-color: transparent;
      border: none;
    }
  }
  nav a {
    display: block;
    padding: calc(5px + .2vw) 1.5vw 0;
    font-size: calc(17px + 1.4vw);
    letter-spacing: .2vw;
    font-weight: bold;
    color: white;
    text-decoration: none;
    &:hover {
      background-color: $black-light;
    }
    &.router-link-exact-active {
      color: $toxic-green;
    }
    @media (min-width: 768px) {
      display: inline;
      padding: 2px 7px;
      margin: .7vw;
      font-size: calc(3px + 1.79vw);
      border: .5px solid wheat;
      border-radius: 7px;
    }
  }
  .horiz {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .vert {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    right: calc($burger-width + 12px);
    top: calc($burger-top - 2px);
    z-index: 2;
    border: .1px solid wheat;
  }
</style>
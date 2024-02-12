<template>
  <div v-if="inlineMenu || isMenuActive" :class="{'horiz': inlineMenu, 'vert': !inlineMenu && isMenuActive}">
    <nav v-for="item in menu" :key="item.name">
      <router-link :to="item.to" class="rounded" @click="closeMenu">
        {{item.name}}
      </router-link> 
    </nav>
  </div>
  <BurgerBtn :burgerShown="burgerShown" @linesClicked="openMenu" @crossClicked="closeMenu"/>
</template>

<script>
import BurgerBtn from './BurgerBtn.vue'

export default {
  name: 'NavBar',
  components: {BurgerBtn},
  data() {
    return {
      menu: [
        {to: "/", name: "Home"},
        {to: "/contacts", name: "Contacts"},
        {to: "/logIn", name: "Log In"},
        {to: "/registration", name: "Registration"}
      ],
      inlineMenu: window.matchMedia('(min-width: 768px)').matches,
      isMenuActive: false,
      burgerShown: true
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.inlineMenu = window.matchMedia('(min-width: 768px)').matches
    })
  },
  methods: {
    openMenu() {
      this.isMenuActive = true
      this.burgerShown = false
    },
    closeMenu() {
      if(!this.inlineMenu) {
        this.isMenuActive = false
        this.burgerShown = true
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '../variables';

nav a {
  font-size: calc(3px + 1.79vw);
  letter-spacing: .2vw;
  font-weight: bold;
  color: white;
  text-decoration: none;
  border: .5px solid wheat;
  margin: .7vw;
  padding: 2px 7px;
  &:hover {
    background-color: $black-light;
  }
  &.router-link-exact-active {
    color: $toxic-green;
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
  right: calc(4% + 20px);
  top: 28%;
  z-index: 2;
  border: .1px solid wheat;
}

@media (max-width: 767px) {
  nav a {
    display: block;
    margin: 0 .7vw;
    padding: auto 1.5vw;
    border: none;
    font-size: calc(12px + 1.55vw);
  }
  nav {
    width: 100%;
    background-color: $black-light;
    border-bottom: .1px dotted wheat;
  }
}
</style>
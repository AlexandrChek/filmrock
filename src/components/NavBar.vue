<template>
  <div class="horiz" :class="{'vert': isMenuActive}">
    <nav v-for="item in menu" :key="item">
      <router-link :to="item.to" class="rounded" @click="closeMenu">{{item.name}}</router-link> 
    </nav>
  </div>
  <div class="burger">
    <div v-if="burger" class="burger-lines">
      <p @click="openMenu">&#9776;</p>
    </div>
    <div v-else class="cross">
      <p @click="closeMenu">&#10060;</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      menu: [
        {to: "/", name: "Home"},
        {to: "/contacts", name: "Contacts"},
        {to: "/logIn", name: "Log In"},
        {to: "/registration", name: "Registration"}
      ],
      isMenuActive: false,
      burger: true
    }
  },
  methods: {
    openMenu () {
      this.burger = false;
      this.isMenuActive = true;
    },
    closeMenu () {
      this.burger = true;
      this.isMenuActive = false;
    }
  }
}
</script>

<style scoped>
nav a {
  font-size: 2vw;
  letter-spacing: .2vw;
  font-weight: bold;
  color: white;
  text-decoration: none;
  border: .5px solid wheat;
  margin: .7vw;
  padding: 2px 7px;
}
nav a:hover {
  background-color: rgb(44, 44, 44);
}
.horiz {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 60px;
}
.burger {
  display: none;
  position: absolute;
  right: 3%;
}
p {
  margin: 0px;
}
.vert {
  display: none;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  right: calc(3.5% + 20px);
  top: 2.2vw;
  z-index: 2;
  border: .1px solid wheat;
}
.burger-lines {
  color: #1dda2c;
  background-color: black;
  font-weight: bold;
  font-size: 31px;
}
.cross {
  color: red;
  background-color: black;
  font-size: 20px;
}
nav a.router-link-exact-active {
  color: #1dda2c;
}
@media (max-width: 991px) {
  .horiz {
    margin-left: 14px;
  }
  nav a {
  font-size: 2.1vw;
  }
}
@media (max-width: 767px) {
  .horiz {
    display: none;
  }
  .vert {
    display: flex;
  }
  .burger {
    display: flex;
  }
  nav a {
    border: none;
    font-size: 3.7vw;
    padding: auto 1.5vw;
  }
  nav {
    width: 100%;
    background-color: #333333;
    border-bottom: .1px dotted wheat;
  }
}
@media (max-width: 575px) {
  .burger-lines {
    font-size: 28px;
  }
  .vert {
    top: 6.35vw;
  }
  nav a {
    font-size: 4vw;
  }
}
</style>
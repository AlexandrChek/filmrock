<template>
    <div class="container-fluid sticky-top">
        <div class="row">
            <div class="col-md-4 col-5 p-0">
                <LogoType/>
            </div>
            <div class="col-md-1 col-5 px-0 d-flex justify-content-center position-relative">
                <RegUser v-if="$store.state.user"/>
            </div>
            <div class="col-md-7 col-2 d-flex justify-content-center">
                <NavBar/>
            </div>
        </div>
    </div>
</template>

<script>
import LogoType from './Logo.vue'
import RegUser from './RegUser.vue'
import NavBar from './NavBar.vue'

export default {
    name: 'MyHeader',
    components: {
        LogoType,
        RegUser,
        NavBar
    },
    mounted() {
        let user = localStorage.getItem('user')
        if(user) {
            this.$store.state.user = user
        }
    }
}
</script>

<style scoped>
    .sticky-top {
        background-color: black;
    }
</style>
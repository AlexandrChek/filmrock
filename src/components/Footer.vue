<template>
    <div class="d-inline-flex align-items-center">
        <LogoType/>
        <span> - the best way to search movies!</span>
    </div>
</template>

<script>
import LogoType from './Logo.vue'

export default {
    name: 'MyFooter',
    components: {LogoType}
}
</script>

<style scoped>
span {
    font-family: URW Chancery L, cursive;
    font-size: 2vw;
    letter-spacing: .3vw;
}
@media (max-width: 991px) {
    span {
        font-size: 2.57vw;
    }
}
@media (max-width: 767px) {
    span {
        font-size: 3.35vw;
    }
}
@media (max-width: 575px) {
    span {
        font-size: 3.2vw;
        font-stretch: condensed;
        letter-spacing: .25vw;
    }
}
</style>


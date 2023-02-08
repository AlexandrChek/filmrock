<template>
    <div class="d-inline-flex align-items-center justify-content-center">
        <img src="../assets/logo.jpg" alt="FilmRock">
        <p>FilmRock</p>
    </div>
</template>

<script>
export default {
    name: 'LogoType'
}
</script>

<style scoped lang="scss">
@import '../variables';

img {
    width: 70px;
    margin-left: 40px;
    @media (max-width: 1399px) {
        width: 60px;
    }
    @media (max-width: 1199px) {
        width: 50px;
        margin-left: 30px;
    }
    @media (max-width: 991px) {
        width: 43px;
    }
    @media (max-width: 767px) {
        width: 37px;
        margin-left: 17px;
    }
    @media (max-width: 575px) {
        width: 32px;
    }
}
p {
    font-family: Impact, fantasy;
    font-size: 4vw;
    color: $toxic-green;
    margin: 0 2vw;
    @media (max-width: 767px) {
        font-size: 5vw; 
    }
    @media (max-width: 575px) {
        font-size: 7vw;
    }
}
</style>
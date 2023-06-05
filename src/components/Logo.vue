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
    width: calc(35px + 2.5vw);
    margin-left: 40px;
    @media (max-width: 1199px) {
        margin-left: 30px;
        width: calc(30px + 2.5vw);
    }
    @media (max-width: 991px) {
        width: calc(20px + 3vw);
    }
    @media (max-width: 767px) {
        margin-left: 16px;
    }
}
p {
    font-family: Impact, fantasy;
    font-size: calc(35px + 2.5vw);
    color: $toxic-green;
    margin: 0 1.3vw;
    @media (max-width: 1199px) {
        font-size: calc(30px + 2.5vw);
    }
    @media (max-width: 991px) {
        font-size: calc(20px + 3vw);
    }
    @media (max-width: 575px) {
        font-size: calc(15px + 4vw);
    }
}
</style>
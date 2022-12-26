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

<style scoped>
img {
    width: 70px;
    margin-left: 40px;
}
p {
    font-family: Impact, fantasy;
    font-size: 4vw;
    color: #1dda2c;
    margin: 0 2vw;
}
@media (max-width: 1399px) {
    img {
        width: 60px;
    }
}
@media (max-width: 1199px) {
    img {
        width: 50px;
        margin-left: 30px;
    }
}
@media (max-width: 991px) {
    img {
        width: 43px;
    }
}
@media (max-width: 767px) {
    img {
        width: 37px;
        margin-left: 17px;
    }
    p {
        font-size: 5vw;
    }
}
@media (max-width: 575px) {
    img {
        margin-left: 11px;
    }
    p {
        font-size: 7vw;
    }
}
</style>
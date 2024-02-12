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
    width: calc($main-title-f-size * 0.82);
    margin-left: calc(8px + 1.3vw);
    border-radius: 3px;
}
p {
    font-family: Impact, fantasy;
    font-size: $main-title-f-size;
    color: $toxic-green;
    margin: 0 calc(3px + 0.5vw);
}
</style>
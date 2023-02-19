<template>
    <p>
        You can find new trailers <a href="https://www.youtube.com/channel/UCT0hbLDa-unWsnZ6Rjzkfug" target="_blank">here</a>
    </p>
</template>

<script>
export default {
    name: 'TrailersLink'
}
</script>

<style scoped lang="scss">
@import '../variables';

p {
    margin: 17px 0;
    text-align: center;
    font-size: 25px;
    letter-spacing: 4px;
    color: white;
    a {
        color: $toxic-green;
    }
    a:hover {
        background: radial-gradient(at bottom, $burgundy, black 83%);
    }
    @media (max-width: 1199px) {
        font-size: 23px;
    }
    @media (max-width: 991px) {
        font-size: 20px;
        margin: 45px 0;
    }
    @media (max-width: 767px) {
        margin: 17px 0;
        font-size: 3.35vw;
    }
}
</style>
<template>
    <p><slot></slot></p>
</template>

<script>
export default {
    name: 'AdaptiveParagraf'
}
</script>

<style scoped lang="scss">
p {
    font-size: 1.2vw;
    letter-spacing: .07vw;
    margin-bottom: 1vw;
    @media (max-width: 1399px) {
        font-size: 1.3vw;
    }
    @media (max-width: 1199px) {
        font-size: 1.5vw;
    }
    @media (max-width: 991px) {
        font-size: 1.75vw;
    }
    @media (max-width: 767px) {
        font-size: 2.3vw;
    }
    @media (max-width: 575px) {
        font-size: 3.3vw;
        letter-spacing: .12vw;
    }
}

</style>
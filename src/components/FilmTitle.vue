<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'FilmTitle'
}
</script>

<style scoped lang="scss">
@import '../variables';

div {
    font-size: 3vw;
    color: $toxic-green;
    @media (max-width: 1199px) {
        font-size: 3.7vw;
    }
    @media (max-width: 991px) {
        font-size: 3.8vw;
    }
    @media (max-width: 575px) {
        font-size: 5.4vw;
    }
}
</style>
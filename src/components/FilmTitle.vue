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

<style scoped>
div {
    font-size: 3vw;
    color: #1dda2c;
}
@media (max-width: 1199px) {
    div {
        font-size: 3.7vw;
    }
}
@media (max-width: 991px) {
    div {
        font-size: 3.8vw;
    }
}
@media (max-width: 575px) {
    div {
        font-size: 5.4vw;
    }
}
</style>
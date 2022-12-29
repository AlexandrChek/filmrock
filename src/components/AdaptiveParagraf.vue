<template>
    <p><slot></slot></p>
</template>

<script>
export default {
    name: 'AdaptiveParagraf'
}
</script>

<style scoped>
p {
    font-size: 1.2vw;
    letter-spacing: .07vw;
    margin-bottom: 1vw;
}
@media (max-width: 1399px) {
    p {
        font-size: 1.3vw;
    }
}
@media (max-width: 1199px) {
    p {
        font-size: 1.5vw;
    }
}
@media (max-width: 991px) {
    p {
        font-size: 1.75vw;
    }
}
@media (max-width: 767px) {
    p {
        font-size: 2.3vw;
    }
}
@media (max-width: 575px) {
    p {
        font-size: 2.95vw;
        letter-spacing: .13vw;
    }
}
</style>
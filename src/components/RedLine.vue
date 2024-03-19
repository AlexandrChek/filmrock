<template>
    <p><slot></slot></p>
</template>

<script>
    export default {
        name: 'RedLine'
    }
</script>

<style scoped lang="scss">
    p {
        text-align: center;
        line-height: 2.7;
        font-size: calc(7px + 1.95vw);
        letter-spacing: .17vw;
        margin: 5px 0;
        background: radial-gradient(red 1%, black 80%);
        @media (min-width: 576px) {
            line-height: 2.55;
            font-size: calc(11px + .8vw);
            letter-spacing: calc(1.5px + .04vw);
        }
    }
</style>
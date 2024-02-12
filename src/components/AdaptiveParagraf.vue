<template>
    <p><slot></slot></p>
</template>

<script>
export default {
    name: 'AdaptiveParagraf'
}
</script>

<style scoped lang="scss">
@import '../variables';

p {
    font-size: $main-text-f-size;
    letter-spacing: .07vw;
    margin-bottom: calc($main-text-f-size / 1.8);
    line-height: 1.3;
    @media (max-width: 575px) {
        letter-spacing: .12vw;
    }
}
</style>
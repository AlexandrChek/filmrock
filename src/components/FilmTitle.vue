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

    $f-size: calc($main-text-f-size * 2);

    div {
        font-size: $f-size;
        color: $toxic-green;
        line-height: 1;
        margin-bottom: calc($f-size / 1.8);
    }
</style>
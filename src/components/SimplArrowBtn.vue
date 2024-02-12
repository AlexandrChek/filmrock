<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'SimplArrowBtn'
}
</script>

<style scoped lang="scss">
@import '../variables';

div {
    margin: $page-number-f-size 5px 0 5px;
    border: 1px solid wheat;
    font-size: calc($page-number-f-size * 1.15);
    cursor: pointer;
    &:hover {
        color: $toxic-green;
        background-color: $black-light;
        border: 1px solid $toxic-green;
    }
}
</style>
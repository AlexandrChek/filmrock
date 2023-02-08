<template>
    <div class="mx-2">
        <p>
            <slot></slot>
        </p>
    </div>
</template>

<script>
export default {
    name: 'SimplArrowBtn'
}
</script>

<style scoped lang="scss">
@import '../variables';

p {
    height: 58%;
    margin: 50% 0 10px;
    border: 1px solid wheat;
    font-size: x-large;
    cursor: pointer;
    &:hover {
        color: $toxic-green;
        background-color: $black-light;
        border: 1px solid $toxic-green;
    }
    @media (max-width: 991px) {
        font-size: large;
    }
    @media (max-width: 767px) {
        font-size: 3.25vw;
    }
    @media (max-width: 575px) {
        font-size: 4.5vw;
    }
}
</style>
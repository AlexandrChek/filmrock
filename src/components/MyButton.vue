<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'MyButton'
}
</script>

<style scoped lang="scss">
@import '../variables';

$dark-burgundy: rgb(82, 12, 12);
button {
    padding: 4px 11px;
    background-color: $burgundy;
    color: white;
    font-weight: bold;
    font-size: 1.2vw;
    letter-spacing: .07vw;
    word-spacing: .35vw;
    border-radius: 7px;
    border: 2px solid $dark-burgundy;
    box-shadow: inset 0px -1.5px 3px 3px $dark-burgundy;
    &:hover {
        color: $backlight;
        background-color: rgb(175, 25, 25);
    }
    &:active {
        box-shadow: none;
        transition: all .1s;
    }
    @media (max-width: 1399px) {
        font-size: 1.3vw;
    }
    @media (max-width: 1199px) {
        font-size: 1.5vw;
        padding: 3px 10px;
        box-shadow: inset 0px -1px 3px 2.5px $dark-burgundy;
    }
    @media (max-width: 991px) {
        font-size: 1.75vw;
    }
    @media (max-width: 767px) {
        font-size: 2.3vw;
    }
    @media (max-width: 575px) {
        font-size: 14px;
        letter-spacing: .25vw;
    }
}
</style>
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
        background-color: $burgundy;
        color: white;
        font-weight: bold;
        font-size: $btn-f-size;
        line-height: 1;
        letter-spacing: .2vw;
        word-spacing: 1.5px;
        white-space: nowrap;
        padding: 10px clamp(9px, calc($btn-f-size / 1.5), 12px) 12.5px;
        border-radius: 7px;
        border: 2px solid $dark-burgundy;
        box-shadow: inset 0px -1.5px 3px 3px $dark-burgundy;
        &:hover {
            color: $backlight;
            background-color: rgb(175, 25, 25);
        }
        &:active {
            box-shadow: none;
        }
        @media (min-width: 576px) {
            letter-spacing: normal;
        }
        @media (min-width: 1400px) {
            word-spacing: normal;
        }
    }
</style>
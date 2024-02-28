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
        padding: 11px 12px 13px 12px;
        background-color: $burgundy;
        color: white;
        font-weight: bold;
        font-size: $btn-f-size;
        line-height: 1;
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
        @media (max-width: 1399px) {
            word-spacing: 1.5px;
        }
        @media (max-width: 1199px) {
            padding: 10px 11px 12.5px 11px;
        }
        @media (max-width: 575px) {
            letter-spacing: .2vw;
        }
    }
</style>
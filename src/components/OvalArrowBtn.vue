<template>
    <button :class="{'right': rightArrow, 'left': !rightArrow}">
        <span v-if="rightArrow">&#62;</span>
        <span v-else>&#60;</span>
    </button>
</template>

<script>
export default {
    name: 'OvalArrowBtn',
    props: ['rightArrow']
}
</script>

<style scoped lang="scss">
@import '../variables';
@import '../mixins';

    $vert-padding: calc(11px + .3vw);
    $f-size: 33px;

    @mixin arrow-btn($side) {
        border-radius: 50%;
        border: none;
        background-color: white;
        opacity: .6;
        z-index: 2;
        font-size: $f-size;
        line-height: 1;
        font-weight: bold;
        padding: $vert-padding calc(3px + .2vw);
        position: absolute;
        top: calc(50% - ($f-size / 2 + $vert-padding));
        #{$side}: .2vw;
        @media (hover: hover) and (pointer: fine) {
            padding-bottom: calc($vert-padding - 3px);
        }
        &:hover {
            opacity: .8;
            color: $toxic-green;
            @include animation(moving-#{$side} .3s)
        }
    }

    .right {
        @include arrow-btn(right);
    }
    .left {
        @include arrow-btn(left);
    }

    @include keyframes(moving-right) {
        0% {right: .2vw;}
        50% {right: 0;}
        100% {right: .2vw;}
    }
    @include keyframes(moving-left) {
        0% {left: .2vw;}
        50% {left: 0;}
        100% {left: .2vw;}
    }
</style>
<template>
    <div>
        <input type="checkbox" id="burger-check" @change="showHideMenu">
        <label for="burger-check"></label>
    </div>
</template>

<script>
    export default {
        name: 'BurgerBtn',
        methods: {
            showHideMenu() {
                this.$emit('burgerClicked')
            },
            //show lines from parent
            showLines() {
                document.querySelector('#burger-check').checked = false
            }
        }
    }
</script>

<style scoped lang="scss">
@import '../variables';

    $height: calc($main-title-f-size - $burger-top);
    $second-line-top: calc(($height - 3.5px) / 2);

    div {
        position: relative;
        @media (min-width: 768px) {
            display: none;
        }
    }
    #burger-check {
        position: absolute;
        display: none;
    }
    label {
        position: relative;
        top: $burger-top;
        display: block;
        width: $burger-width;
        height: $height;
        &::before,
        &::after {
            content: '';
            position: absolute;
            left: 0;
            border: none;
            width: 100%;
            height: 3.5px;
            background-color: $toxic-green;
        }
        &::before {
            top: 0;
            box-shadow: 0 $second-line-top 0 0 $toxic-green;
            transition: box-shadow .3s .15s, top .3s .15s, transform .3s;
        }
        &::after {
            bottom: 0;
            transition: bottom .3s .15s, transform .3s;
        }
    }

    @mixin transformation($top-bottom, $angle) {
        #{$top-bottom}: $second-line-top;
        transform: rotate(#{$angle}deg);
        background-color: red;
        transition: #{$top-bottom} .3s, transform .3s .15s;
    }

    #burger-check:checked + label::before {
        @include transformation(top, 45);
        box-shadow: none;
    }
    #burger-check:checked + label::after {
        @include transformation(bottom, -45);
    }
</style>
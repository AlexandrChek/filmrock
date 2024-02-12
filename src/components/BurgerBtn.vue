<template>
    <div>
        <p v-if="burgerShown" class="burger-lines" @click="hideLines">&#9776;</p>
        <p v-else class="cross" @click="showLines">&#10060;</p>
    </div>
</template>

<script>
    export default {
        name: 'BurgerBtn',
        props: ['burgerShown'],
        methods: {
            hideLines() {
                this.$emit('linesClicked')
            },
            showLines() {
                this.$emit('crossClicked')
            }
        }
    } 
</script>

<style scoped lang="scss">
@import '../variables';

    div {
        display: none;
        position: absolute;
        right: 3%;
        top: 28%;
        @media (max-width: 767px) {
            display: flex;
        }
    }
    p {
        margin: 0;
    }
    .burger-lines {
        color: $toxic-green;
        background-color: black;
        font-weight: bold;
        font-size: 31px;
        line-height: calc(21px + 1vw);
    }
    .cross {
        color: red;
        background-color: black;
        font-size: 20px;
    }
</style>
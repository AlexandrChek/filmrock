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
        display: flex;
        position: absolute;
        right: 2.1%;
        top: 15%;
        @media (min-width: 768px) {
            display: none;
        }
    }
    p {
        margin: 0;
    }
    .burger-lines {
        color: $toxic-green;
        background-color: black;
        font-weight: bold;
        font-size: calc(22px + 1vw);
        line-height: 1;
    }
    .cross {
        color: red;
        background-color: black;
        font-size: 23px;
    }
</style>
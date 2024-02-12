<template>
    <div class="number-wrapper" v-for="n in pages" :key="n" @click="transmitPage(n)">
        <div>
            <div v-if="n === currentPage" id="arrow-up">&#9650;</div>
            <div v-else id="void">.</div>
        </div>
        <div :class="{'current-number': n === currentPage}">{{n}}</div>
    </div>
</template>

<script>
export default {
    name: 'PageNumbers',
    props: ['pages', 'currentPage'],
    emits: ['numberClicked'],
    methods: {
        transmitPage(n) {
            this.$emit('numberClicked', n)
        }
    }
}
</script>

<style scoped lang="scss">
@import '../variables';

    .number-wrapper {
        margin: 0 10px;
        font-size: $page-number-f-size;
        cursor: pointer;
    }
    #arrow-up, .current-number {
        color: $toxic-green;
        font-weight: 1000;
    }
    #void {
        color: black;
    }
</style>
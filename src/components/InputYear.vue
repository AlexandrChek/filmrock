<template>
    <input type="number" v-model="year" @blur="updateValue">
</template>

<script>
    export default {
        name: 'InputYear',
        data() {
            return { year: '' }
        },
        methods: {
            updateValue() {
                this.$emit('valueEntered', this.year)
            }
        }
    }
</script>

<style scoped lang="scss">
@import '../variables';
@import '../extends';

    $year-padding-top: calc($search-label-f-size / 8);

    input {
        font-size: $search-label-f-size;
        width: calc($search-label-f-size * 3 + 7px);
        height: $year-height;
        line-height: calc($year-height - $year-padding-top);
        padding: $year-padding-top 0 0 3px;
        border-radius: 3px;
        @extend %input-settings;
        -moz-appearance: textfield;
        &::-webkit-inner-spin-button {
            display: none;
        }
    }
    
    @media (hover: hover) and (pointer: fine) {
        input {
            width: calc($search-label-f-size * 3 + 15px);
            &:focus::-webkit-inner-spin-button {
                display: block;
            }
            &:focus {
                -moz-appearance: auto;
            }
        }
    }
</style>
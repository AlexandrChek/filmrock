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

    input {
        padding: 1px 0 0 4px;
        font-size: $search-label-f-size;
        width: calc(60px + 1.1vw);
        height: calc($search-label-f-size * 1.55);
        border-radius: 3px;
        border: none;
        &:focus {
            outline: 3px solid $toxic-green;
            background-color: $backlight;
        }
    }
</style>
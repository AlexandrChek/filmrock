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
        width: calc(60px + 1.1vw);
        font-size: $search-label-f-size;
        border-radius: 2px;
        border: none;
        &:focus {
            outline: 3px solid $toxic-green;
            background-color: $backlight;
        }
    }
</style>
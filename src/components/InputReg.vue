<template>
    <input class="rounded w-100" v-model="value">
</template>

<script>
export default {
    name: 'InputReg',
    data() {
        return {
            value: ''
        }
    },
    watch: {
        value(val) {
            this.updateModelValue(val)
        }
    },
    methods: {
        updateModelValue(val) {
            this.$emit('enterValue', val)
        },
        //for cleaning from parent:
        cleanValue() {
            this.value = ''
        }
    }
}
</script>

<style scoped lang="scss">
@import '../variables';
@import '../extends';

    input {
        font-size: calc(16px + 2vw);
        line-height: 1;
        padding: 1px 3px 3px;
        @extend %input-settings;
        @media (min-width: 576px) {
            font-size: calc(24.5px + .34vw);
        }
    }
</style>
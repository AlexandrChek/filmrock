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

    input {
        font-size: 21.5px;
        border: 3px solid black;
        &:focus {
            outline: none;
            border-color: $toxic-green;
            background-color: $backlight;
        }
        @media (min-width: 576px) {
            font-size: 24px;
        }
    }
</style>
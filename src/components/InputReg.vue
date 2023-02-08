<template>
    <input class="rounded" v-model="value">
</template>

<script>
export default {
    name: 'InputReg',
    data () {
        return {
            value: ''
        }
    },
    watch: {
        value (val) {
            this.updateModelValue(val)
        }
    },
    methods: {
        updateModelValue (val) {
            this.$emit('enterValue', val)
        },
        //for cleaning from parent:
        cleanValue () {
            this.value = ''
        }
    }
}
</script>

<style scoped lang="scss">
@import '../variables';

input {
    width: 100%;
    font-size: x-large;
    &:focus {
        border: none;
        outline: 3px solid $toxic-green;
        background-color: $backlight;
    }
    @media (max-width: 575px) {
        font-size: 21.5px;
    }
}
</style>
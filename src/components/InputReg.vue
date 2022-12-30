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

<style scoped>
input {
    width: 100%;
    font-size: x-large;
}
input:focus {
    border: none;
    outline: 3px solid #1dda2c;
    background-color: beige;
}
@media (max-width: 575px) {
    input {
        font-size: 21.5px;
    }
}
</style>
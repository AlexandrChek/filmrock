<template>
    <select v-model="selectedValue">
        <option v-for="item in values" :key="item">{{ item }}</option>
    </select>
</template>

<script>
export default {
    name: 'MySelect',
    props: ['values'],
    data() {
        return {
            selectedValue: null 
        }
    },
    watch: {
        selectedValue() {
            this.$emit('selectedItem', this.selectedValue)
        }
    }
}
</script>

<style scoped lang="scss">
@import '../variables';

select {
    margin: 0 8px;
    width: 44.5%;
    color: rgb(5, 112, 5);
    border: none;
    border-radius: 2px;
    &:focus {
        border: 3px solid $toxic-green;
        background-color: $backlight;
    }
}
</style>
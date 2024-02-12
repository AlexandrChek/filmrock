<template>
    <div class="d-inline-flex w-100">
        <label><slot></slot></label>
        <select @focus="reportFocus" v-model="selectedValue">
            <option v-for="item in values" :key="item">{{ item }}</option>
        </select>
    </div>
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
            this.$emit('itemSelected', this.selectedValue)
        }
    },
    methods: {
        reportFocus() {
            this.$emit('focused')
        }
    }
}
</script>

<style scoped lang="scss">
@import '../variables';
@import '../extends';

    label {
        @extend %label-search;
    }
    select {
        font-size: $search-label-f-size;
        width: calc($search-label-f-size * 8);
        color: rgb(5, 112, 5);
        border: 3px solid transparent;
        outline: none;
        border-radius: 2px;
        &:focus {
            border-color: $toxic-green;
            background-color: $backlight;
        }
    }
</style>
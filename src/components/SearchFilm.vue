<template>
    <div class="mb-1">
        <InputReg type="search" placeholder="matrix" @enterValue="saveValue" ref="title"/>
    </div>
    <div class="text-end">
        <MyButton @click="search">Search</MyButton>
    </div>
</template>

<script>
import InputReg from './InputReg.vue'
import MyButton from './MyButton.vue'

export default {
    name: 'SearchFilm',
    components: {
        InputReg,
        MyButton
    },
    data() {
        return {
            searchedValue: ''
        }
    },
    emits: [
        'gotTitleForAdwSearch',
        'searchTitleClicked'
    ],
    methods: {
        saveValue(val) {
            this.searchedValue = val
            this.$emit('gotTitleForAdwSearch', val)
        },
        search() {
            this.$emit('searchTitleClicked', this.searchedValue)
            this.$refs.title.cleanValue()
        }
    }
}
</script>
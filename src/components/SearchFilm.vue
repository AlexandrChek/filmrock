<template>
    <div class="m-1">
        <InputReg type="text" placeholder="matrix" @enterValue="saveValue" ref="title"/>
    </div>
    <div class="text-end mx-1">
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
    data () {
        return {
            searchedValue: ''
        }
    },
    emits: [
        'gotTitleForAdwSearch',
        'searchMovie'
    ],
    methods: {
        saveValue (val) {
            this.searchedValue = val
            this.$emit('gotTitleForAdwSearch', val)
        },
        search () {
            this.$emit('searchMovie', this.searchedValue)
            this.$refs.title.cleanValue()
        }
    }
}
</script>
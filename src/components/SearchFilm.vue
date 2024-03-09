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
    props: ['filmsArr'],
    data() {
        return {
            searchedValue: ''
        }
    },
    emits: [
        'gotTitleForAdwSearch',
        'notFound'
    ],
    methods: {
        saveValue(val) {
            this.searchedValue = val
            this.$emit('gotTitleForAdwSearch', val)
        },
        search() {
            this.$refs.title.cleanValue()

            let allSearchedMovies = []
            this.filmsArr.forEach(item => {
                let title = item.title.toLowerCase()
                if (title.includes(this.searchedValue.toLowerCase())) {
                    allSearchedMovies.push(item)
                }
            })
            if (!allSearchedMovies.length) {
                this.$emit('notFound')
            } else {
                sessionStorage.setItem('allSearchedMovies', JSON.stringify(allSearchedMovies))
                this.$router.push('/searchres')
            }
        }
    }
}
</script>
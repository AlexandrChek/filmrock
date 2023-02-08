<template>
    <form>
        <textarea placeholder="Enter your review here" class="d-block mb-2" v-model="review" @focus="onFocusReview"></textarea>
        <MyButton @click.prevent="send">Send</MyButton>
    </form>
    <ModalRegWarning v-if="regWarning" @closewarning="closeRegWarning">
        To make comments you have to log into your account ore register.
    </ModalRegWarning>
</template>

<script>
import MyButton from './MyButton.vue'
import ModalRegWarning from './ModalRegWarning.vue'
import {getDatabase, ref, set} from 'firebase/database'

export default {
    name: 'ReviewForm',
    components: {
        MyButton,
        ModalRegWarning
    },
    data () {
        return {
            review: '',
            regWarning: false
        }
    },
    methods: {
        send () {
            const db = getDatabase()
            let id = this.$route.params.id
            let user = this.$store.state.user
            let body = this.review
            let dateObj = new Date()
            let year = String(dateObj.getFullYear())
            let month = String(dateObj.getMonth())
            if (month === '') {month = '00'}
            if(month.length === 1) {
                month = '0' + month
            }
            let day = String(dateObj.getDate())
            if (day === '') {day = '00'}
            if(day.length === 1) {
                day = '0' + day
            }
            let hours = String(dateObj.getHours())
            if (hours === '') {hours = '00'}
            if(hours.length === 1) {
                hours = '0' + hours
            }
            let minutes = String(dateObj.getMinutes())
            if (minutes === '') {minutes = '00'}
            if(minutes.length === 1) {
                minutes = '0' + minutes
            }
            let seconds = String(dateObj.getSeconds())
            if (seconds === '') {seconds = '00'}
            if(seconds.length === 1) {
                seconds = '0' + seconds
            }
            let revId = Number(year + month + day + hours + minutes + seconds)
            let date = year + '-' + month + '-' + day + '_' + hours + ':' + minutes + ':' + seconds
            set(ref(db, 'films/' + id + '/reviews/' + revId), {revId, user, date, body})
            this.review = ''
        },
        onFocusReview () {
            if (!this.$store.state.user) {
                this.regWarning = true
                document.querySelector('textarea').blur()
            }
        },
        closeRegWarning () {
            this.regWarning = false
        }
    }
}
</script>

<style scoped lang="scss">
@import '../variables';

textarea {
    width: 50%;
    &:focus {
        border: none;
        outline: 3px solid $toxic-green;
        background-color: $backlight;
    }
    @media (max-width: 767px) {
        width: 100%;
    }
}
</style>
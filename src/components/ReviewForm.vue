<template>
    <form>
        <textarea :placeholder="proposition" class="mb-2" v-model="review" @focus="checkReg"></textarea>
        <MyButton class="send-btn" @click.prevent="send">Send</MyButton>
    </form>
    <ModalRegWarning v-if="regWarning" @closewarning="closeRegWarning">
        To make comments you have to log into your account or to register.
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
    data() {
        return {
            proposition: 'Enter your review here',
            review: '',
            regWarning: false
        }
    },
    emits: ['reviewSent'],
    methods: {
        send() {
            if (!this.$store.state.user) {
                this.regWarning = true
            } else {
                const db = getDatabase()
                const id = this.$route.params.id
                const user = this.$store.state.user
                const body = this.review
                const dateObj = new Date()
                const year = String(dateObj.getFullYear())
                
                let normalDateObj = {
                    month: String(dateObj.getMonth() + 1),
                    day: String(dateObj.getDate()),
                    hours: String(dateObj.getHours()),
                    minutes: String(dateObj.getMinutes()),
                    seconds: String(dateObj.getSeconds())
                }

                for (let key in normalDateObj) {
                    if (normalDateObj[key] === '') {
                        normalDateObj[key] = '00'
                    }
                    if (normalDateObj[key].length === 1) {
                        normalDateObj[key] = '0' + normalDateObj[key]
                    }
                }

                const month = normalDateObj.month,
                    day = normalDateObj.day,
                    hours = normalDateObj.hours,
                    minutes = normalDateObj.minutes,
                    seconds = normalDateObj.seconds
                
                let revId = Number(year + month + day + hours + minutes + seconds)
                let date = year + '-' + month + '-' + day + '_' + hours + ':' + minutes + ':' + seconds
                set(ref(db, 'films/' + id + '/reviews/' + revId), {revId, user, date, body})
                
                this.review = ''
                this.$emit('reviewSent')
            }
        },
        checkReg() {
            if (!this.$store.state.user) {
                this.regWarning = true
                document.querySelector('textarea').blur()
            }
        },
        closeRegWarning() {
            this.regWarning = false
        }
    }
}
</script>

<style scoped lang="scss">
@import '../variables';
@import '../extends';

    textarea {
        display: block;
        width: 100%;
        font-size: $btn-f-size;
        line-height: 1.35;
        padding: 0 3px 2px;
        @extend %input-settings;
        &:focus {
            border-radius: 2px;
            height: calc($btn-f-size * 5 * 1.35 + 5px);
        }
        @media (min-width: 768px) {
            width: 50%;
        }
    }
</style>
<template>
    <LineHeader class="text-center">Registration</LineHeader>
    <div class="d-flex justify-content-center">
        <form>
            <div class="mb-3">
                <label for="userName">User name</label>
                <InputReg type="text" id="userName" @enterValue="updateUserName"/>
                <p class="prompt">Not less than 3 symbols</p>
            </div>
            <div class="mb-3">
                <label for="password">Password</label>
                <InputReg type="password" id="password" @focus="showModalName" @enterValue="updatePassword"/>
            </div>
            <div class="mb-3">
                <label for="password2">Password (again)</label>
                <InputReg type="password" id="password2" @enterValue="updatePassword2"/>
            </div>
            <button class="btn btn-danger my-3" @click.prevent="register">Register</button>
        </form>
    </div>
    <div class="d-flex justify-content-center mt-5 mb-3">
        <AdvertPlace></AdvertPlace>
    </div>
    <ModalInfo v-if="modalNameShort" @pressclose="closeModalNameShort">
        The length of your user name must be not less than 3 (three) symbols!
    </ModalInfo>
    <ModalInfo v-if="modalNameUsed" @pressclose="closeModalNameUsed">
        This name is already in use by another user. Try another, please!
    </ModalInfo>
    <ModalInfo v-if="modalPasswordZero" @pressclose="closeModalPassword">
        Enter your password, please!
    </ModalInfo>
    <ModalInfo v-if="modalPassword2" @pressclose="closeModalPassword2">
        Your passwords in both fields must be identical!
    </ModalInfo>
</template>

<script>
import LineHeader from '../components/LineHeader.vue'
import InputReg from '../components/InputReg.vue'
import ModalInfo from '../components/ModalInfo.vue'
import AdvertPlace from '../components/AdvertPlace.vue'
import { getDatabase, ref, set, onValue } from "firebase/database"

export default {
    name: 'RegistrationViev',
    components: {
        LineHeader,
        InputReg,
        ModalInfo,
        AdvertPlace
    },
    data () {
        return {
            modalNameShort: false,
            modalNameUsed: false,
            modalPasswordZero: false,
            modalPassword2: false,
            userName: '',
            password: '',
            password2: '',
            stopCheking: false
        }
    },
    methods: {
        updateUserName (value) {
            this.userName = value
        },
        updatePassword (value) {
            this.password = value
        },
        updatePassword2 (value) {
            this.password2 = value
        },
        showModalName () {
            if (this.userName.length < 3) {
                this.modalNameShort = true
            } else {
                const db = getDatabase()
                const usersObj = ref(db, 'users/')
                onValue(usersObj, (snapshot) => {
                    let finalObj = snapshot.val()
                    let usersArr = Object.values(finalObj)
                    if (this.stopCheking === false) {
                        for (let i = 0; i < usersArr.length; i++) {
                            if (this.userName === usersArr[i].userName) {
                                this.modalNameUsed = true
                            }
                        }
                    }
                })
            }
        },
        closeModalNameShort () {
            this.modalNameShort = false
            let userNameEl = document.querySelector('#userName')
            userNameEl.focus()
        },
        closeModalNameUsed () {
            this.modalNameUsed = false
            let userNameEl = document.querySelector('#userName')
            userNameEl.focus()
        },
        closeModalPassword () {
            this.modalPasswordZero = false
        },
        closeModalPassword2 () {
            this.modalPassword2 = false
        },
        register () {
            if (this.password.length < 1) {
                this.modalPasswordZero = true
            } else if (this.password !== this.password2) {
                this.modalPassword2 = true
            } else {
                this.stopCheking = true
                const db = getDatabase()
                let userName = this.userName
                let password = this.password
                set(ref(db, 'users/' + userName), {userName, password})
                localStorage.setItem('user', userName)
                this.$store.state.user = userName
                this.$router.push('/')
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import '../extends';
@import '../variables';

form {
    @extend %reg-block-size;
}
label {
    @extend %label-reg;
}
.prompt {
    font-size: 13px;
    color: $toxic-green;
}
</style>
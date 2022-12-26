<template>
    <div class="d-flex justify-content-center">
        <form>
            <div class="mb-3">
                <label for="userName">User name</label>
                <InputReg type="text" id="userName" @enterValue="saveUserName"/>
            </div>
            <div class="mb-3">
                <label for="password">Password</label>
                <InputReg type="password" id="password" @enterValue="savePassword"/>
            </div>
            <button class="btn btn-primary mt-2" @click.prevent="logInUser">Log In</button>
        </form>
    </div>
    <ModalInfo v-if="noUserOrPasswordMod" @pressclose="closeNoUserPassMod">
        Enter both username and password, please!
    </ModalInfo>
    <ModalInfo v-if="wrongUserMod" @pressclose="closeWrongUserMod">
        Wrong username or password. Correct them or register, please!
    </ModalInfo>
    <div class="d-flex justify-content-center m-2">
        <div class="d-flex go-to-reg">
            <p>If you have no an account, you should register.</p>
            <button class="btn btn-primary mx-3" id="btn-2" @click="registration">Registration</button>
        </div>
    </div>
    <div class="d-flex justify-content-center mt-5 mb-3">
        <AdvertPlace></AdvertPlace>
    </div>
</template>

<script>
import InputReg from '../components/InputReg.vue'
import ModalInfo from '../components/ModalInfo.vue'
import AdvertPlace from '../components/AdvertPlace.vue'
import {getDatabase, ref, onValue} from 'firebase/database'

export default {
    name: 'LogIn',
    components: {
        InputReg,
        ModalInfo,
        AdvertPlace
    },
    data () {
        return {
            userName: '',
            password: '',
            noUserOrPasswordMod: false,
            wrongUserMod: false
        }
    },
    methods: {
        saveUserName (value) {
            this.userName = value
        },
        savePassword (value) {
            this.password = value
        },
        closeNoUserPassMod () {
            this.noUserOrPasswordMod = false
        },
        closeWrongUserMod () {
            this.wrongUserMod = false
        },
        logInUser () {
            let user = this.userName
            let password = this.password
            if (user && password) {
                const db = getDatabase()
                const grossUsersObj = ref(db, 'users/')
                onValue(grossUsersObj, (snapshot) => {
                    let netUsersObj = snapshot.val()
                    let usersArr = Object.values(netUsersObj)
                    for (let i = 0; i < usersArr.length; i++) {
                        if (usersArr[i].userName === user && usersArr[i].password === password) {
                            localStorage.setItem('user', user)
                            this.$store.state.user = user
                            this.$router.push('/')
                        } else {
                            this.wrongUserMod = true
                        }
                    }
                })
            } else {
                this.noUserOrPasswordMod = true
            }
        },
        registration () {
            this.$router.push('/registration')
        }
    }
}
</script>

<style scoped>
form, .go-to-reg {
    width: 40%;
    margin-top: 3vw;
}
label, p {
    color: #1dda2c;
    margin: 5px;
    font-weight: 550;
}
@media (max-width: 991px) {
    form, .go-to-reg {
        width: 50%;
    }
}
@media (max-width: 767px) {
    label, p {
        margin: 3px;
    }
    form, .go-to-reg {
        width: 63%;
    }
}
@media (max-width: 575px) {
    form, .go-to-reg {
        width: 75%;
    }
    label {
        font-size: 3.4vw;
    }
    p {
        margin: 0px;
        font-size: 2.9vw;
    }
    #btn-2 {
        width: 35%;
        font-size: 3.1vw;
    }
    #userName, #password {
        width: 95%;
    }
}
</style>
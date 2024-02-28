<template>
    <div class="d-flex justify-content-center pt-4">
        <form>
            <div class="mb-3">
                <label for="userName">User name</label>
                <InputReg type="text" id="userName" @enterValue="updateUserName"/>
                <p class="prompt">Not less than 3 symbols</p>
            </div>
            <div class="mb-3">
                <label for="password">Password</label>
                <InputReg type="password" id="password" @focus="checkUserName" @enterValue="updatePassword"/>
            </div>
            <div class="mb-4">
                <label for="password2">Password (again)</label>
                <InputReg type="password" id="password2" @enterValue="updatePassword2"/>
            </div>
            <button class="btn btn-danger" @click.prevent="register">Register</button>
        </form>
    </div>
</template>

<script>
import InputReg from './InputReg.vue'
import { getDatabase, ref, set, onValue } from "firebase/database"

export default {
    name: 'FormReg',
    components: {InputReg},
    data() {
        return {
            userName: '',
            password: '',
            password2: ''
        }
    },
    methods: {
        updateUserName(value) {
            this.userName = value
        },
        updatePassword(value) {
            this.password = value
        },
        updatePassword2(value) {
            this.password2 = value
        },
        checkUserName() {
            if (this.userName.length < 3) {
                this.$emit('nameProblem', 'shortUserName')
            } else {
                const db = getDatabase()
                const usersObj = ref(db, 'users/')
                onValue(usersObj, (snapshot) => {
                    let finalObj = snapshot.val()
                    let usersArr = Object.values(finalObj)
                    for (let i = 0; i < usersArr.length; i++) {
                        if (this.userName === usersArr[i].userName) {
                            this.$emit('nameProblem', 'userNameUsed')
                            return
                        }
                    }
                })
            }
        },
        focusUserName() {
            document.querySelector('#userName').focus()
        },
        register() {
            if (!this.password) {
                this.$emit('passwordProblem', 'noPassword')
            } else if (this.password !== this.password2) {
                this.$emit('passwordProblem', 'passwordMismatch')
            } else {
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
        @media (max-width: 575px) {
            font-size: calc(10px + .3vw);
        }
    }
</style>
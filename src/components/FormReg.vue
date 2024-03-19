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
import { getDatabase, ref, get, set } from "firebase/database"

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
                get(ref(db, 'users/'))
                .then((snapshot) => {
                    let finalObj = snapshot.val()
                    let usersArr = Object.keys(finalObj)
                    let isNameUsed = usersArr.find(e => {
                        return e === this.userName
                    })

                    if (isNameUsed) {
                        this.$emit('nameProblem', 'userNameUsed')
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
                set(ref(db, 'users/' + this.userName), {password: this.password})
                localStorage.setItem('user', this.userName)
                this.$store.state.user = this.userName
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
        font-size: calc(10px + .3vw);
        color: $toxic-green;
        @media (min-width: 576px) {
            font-size: 13px;
        }
    }
</style>
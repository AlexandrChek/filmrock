<template>
    <div class="d-flex justify-content-center mb-4">
        <form>
            <div class="mb-3">
                <label for="userName">User name</label>
                <InputReg type="text" id="userName" @enterValue="saveUserName"/>
            </div>
            <div class="mb-3">
                <label for="password">Password</label>
                <InputReg type="password" id="password" @enterValue="savePassword"/>
            </div>
            <button class="btn btn-primary" @click.prevent="logInUser">
                Log In
            </button>
        </form>
    </div>
</template>

<script>
import InputReg from './InputReg.vue'
import {getDatabase, ref, onValue} from 'firebase/database'

export default {
    name: 'FormLogin',
    components: {InputReg},
    data() {
        return {
            userName: '',
            password: ''
        }
    },
    methods: {
        saveUserName(value) {
            this.userName = value
        },
        savePassword(value) {
            this.password = value
        },
        logInUser() {
            if(this.userName && this.password) {
                const db = getDatabase()
                const grossUsersObj = ref(db, 'users/')
                onValue(grossUsersObj, (snapshot) => {
                    const netUsersObj = snapshot.val()
                    const usersArr = Object.values(netUsersObj)
                    for(let i = 0; i < usersArr.length; i++) {
                        if(usersArr[i].userName === this.userName && usersArr[i].password === this.password) {
                            localStorage.setItem('user', this.userName)
                            this.$store.state.user = this.userName
                            this.$router.push('/')
                        } else if(i === usersArr.length - 1) {
                            this.$emit('problem', 'wrongUser')
                        }
                    }
                })
            } else {
                this.$emit('problem', 'noUserOrPassword')
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import '../extends';

    form {
        @extend %reg-block-size;
    }
    label {
        @extend %label-reg;
    }
</style>
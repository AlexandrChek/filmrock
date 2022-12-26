<template>
    <div class="text-center user-icon" @click="getExitButton">
        <img src="../assets/user.png" alt="User" class="img-fluid rounded-circle">
    </div>
    <div class="text-center user">{{$store.state.user}}</div>
    <div class="rounded exit-button" v-if="exitButton">
        <div class="d-flex justify-content-end">
            <p class="rounded cross" @click="removeButton">&#10060;</p>
        </div>
        <MyButton @click="logOut" class="m-2">Log Out</MyButton>
    </div>
</template>

<script>
import MyButton from './MyButton.vue'

export default {
    name: "RegUser",
    components: { MyButton },
    data () {
        return {
            exitButton: false
        }
    },
    methods: {
        getExitButton() {
            this.exitButton = true
        },
        removeButton () {
            this.exitButton = false
        },
        logOut() {
            this.$store.state.user = ""
            localStorage.removeItem("user")
        }
    }
}
</script>

<style scoped>
.user {
    font-size: 15px;
    color: white;
}
.user-icon {
    opacity: .7;
    cursor: pointer;
}
.user-icon:hover {
    opacity: 1;
}
.exit-button {
    border: 1px solid wheat;
    background-color: black;
    z-index: 3;
    position: absolute;
    top: 5.1vw;
    left: 29.5vw;
}
.cross {
    color: red;
    border: 1px solid red;
    padding: 0 7px;
    cursor: pointer;
}
@media (max-width: 1399px) {
    .exit-button {
        top: 5.5vw;
    }
}
@media (max-width: 1199px) {
    img {
        width: 23%;
    }
    .user {
        font-size: 14px;
    }
    .exit-button {
        left: 29vw;
    }
}
@media (max-width: 991px) {
    .user {
        font-size: 13px;
    }
    .exit-button {
        top: 5.8vw;
        left: 27.5vw;
    }
    .cross {
        font-size: 14px; 
    }
}
@media (max-width: 767px) {
    img {
        width: 8%;
    }
    .user {
        font-size: 12px;
    }
    .exit-button {
        top: 7.3vw;
        left: 42.5vw;
    }
    .cross {
        font-size: 13px; 
    }
}
@media (max-width: 575px) {
    img {
        width: 11%;
    }
    .exit-button {
        top: 10.17vw;
        left: 40.7vw;
    }
}
</style>
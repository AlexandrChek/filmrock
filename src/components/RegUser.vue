<template>
    <div class="text-center user-icon" @click="getExitButton">
        <img src="../assets/user.png" alt="User" class="img-fluid rounded-circle">
    </div>
    <div class="text-center user">{{$store.state.user}}</div>
    <div class="rounded exit-button" v-if="exitButton">
        <div class="d-flex justify-content-end">
            <p class="rounded cross" @click="removeButton">&#10060;</p>
        </div>
        <MyButton @click="logOut" id="exit">Log Out</MyButton>
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
    top: calc(16px + 4.15vw);
    left: 33.45vw;
}
.cross {
    color: red;
    border: 1px solid red;
    padding: 0 7px;
    cursor: pointer;
}
#exit {
    margin: 0 9px;
}
@media (max-width: 1399px) {
    .exit-button {
        top: 5.68vw;
        left: 33.1vw;
    }
}
@media (max-width: 1199px) {
    img {
        width: 50%;
    }
    .user {
        font-size: 14px;
    }
    .exit-button {
        top: calc(15px + 4.78vw);
        left: 32.45vw;
    }
}
@media (max-width: 991px) {
    .user {
        font-size: 13px;
    }
    .exit-button {
        left: 31.37vw;
    }
    .cross {
        font-size: 14px; 
    }
}
@media (max-width: 767px) {
    img {
        width: 12%;
    }
    .user {
        font-size: 12px;
    }
    .exit-button {
        top: calc(14px + 5.95vw);
        left: 46.47vw;
    }
    .cross {
        font-size: 13px; 
    }
}
@media (max-width: 575px) {
    img {
        width: 14%;
    }
    .exit-button {
        top: 5px;
        left: 45vw;
    }
    #exit {
        margin: 0 2px;
    }
}
</style>
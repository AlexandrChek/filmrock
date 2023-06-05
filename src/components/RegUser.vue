<template>
    <div class="d-flex flex-column w-100">
        <div class="user-wrapper" @click="getExitButton">
            <img src="../assets/user.png" alt="User" class="rounded-circle">
            <div class="text-center user">{{$store.state.user}}</div>
        </div>
        <div class="rounded exit-button" v-if="exitButton">
            <div class="d-flex justify-content-end">
                <p class="rounded cross" @click="removeButton">&#10060;</p>
            </div>
            <MyButton @click="logOut" id="exit">Log Out</MyButton>
        </div>
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

<style scoped lang="scss">
@import '../variables';

.user-wrapper {
    width: 49%;
    margin: 10% 0 0 25.5%;
    cursor: pointer;
    &:hover img {
        opacity: 1;
    }
    &:hover .user {
        color: $toxic-green;
    }
}
img {
    width: 100%;
    min-width: 21px;
    opacity: .7;
}
.user {
    font-size: 15px;
    color: white;
}
.exit-button {
    border: 1px solid wheat;
    background-color: black;
    z-index: 3;
    position: absolute;
    top: calc(29px + 4.3vw);
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
        left: 33.1vw;
    }
}
@media (max-width: 1199px) {
    .user {
        font-size: 14px;
    }
    .exit-button {
        left: 32.45vw;
    }
}
@media (max-width: 991px) {
    .user {
        font-size: 13px;
    }
    .exit-button {
        top: calc(24px + 4.1vw);
        left: 31.37vw;
    }
    .cross {
        font-size: 14px; 
    }
}
@media (max-width: 767px) {
    .user-wrapper {
        width: 12%;
        margin: 2.5px 0 0 44%;
    }
    .user {
        font-size: 12px;
    }
    .exit-button {
        top: calc(15px + 5.5vw);
        left: 46.47vw;
    }
    .cross {
        font-size: 13px; 
    }
}
@media (max-width: 575px) {
    .exit-button {
        top: 2px;
        left: 45vw;
    }
    #exit {
        margin: 0 2px;
    }
}
</style>
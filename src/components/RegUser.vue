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
    margin-left: 25.5%;
    cursor: pointer;
    img {
        width: 100%;
        opacity: .7;
    }
    .user {
        font-size: 15px;
        color: white;
    }
    &:hover img {
        opacity: 1;
    }
    &:hover .user {
        color: $toxic-green;
    }
}
.exit-button {
    border: 1px solid wheat;
    background-color: black;
    z-index: 3;
    position: absolute;
    top: calc(19px + 4.3vw);
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
        top: 5.85vw;
        left: 33.1vw;
    }
}
@media (max-width: 1199px) {
    .user {
        font-size: 14px;
    }
    .exit-button {
        top: calc(18px + 4.7vw);
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
    .user-wrapper {
        width: 12%;
        margin-left: 44%;
    }
    .user {
        font-size: 12px;
    }
    .exit-button {
        top: calc(16px + 6vw);
        left: 46.47vw;
    }
    .cross {
        font-size: 13px; 
    }
}
@media (max-width: 575px) {
    .user-wrapper {
        width: 14%;
        margin-left: 43%;
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
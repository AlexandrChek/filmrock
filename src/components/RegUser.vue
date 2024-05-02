<template>
    <div class="d-flex flex-column justify-content-center user-wrapper" @click="getExitButton">
        <img src="../assets/user.png" alt="User" class="d-block mx-auto rounded-circle">
        <p class="m-0 user">{{$store.state.user}}</p>
    </div>
    <LogOut v-if="showExitBlock" @logOutBtnClicked="closeExitBlock"/>
</template>

<script>
import LogOut from './LogOut.vue'

export default {
    name: "RegUser",
    components: { LogOut },
    data() {
        return {
            showExitBlock: false
        }
    },
    methods: {
        getExitButton() {
            this.showExitBlock = true
        },
        closeExitBlock() {
            this.showExitBlock = false
        }
    }
}
</script>

<style scoped lang="scss">
@import '../variables';

    .user-wrapper {
        cursor: pointer;
        &:hover img {
            opacity: 1;
        }
        &:hover .user {
            color: $toxic-green;
        }
    }
    img {
        width: calc(10.8px + 2vw);
        max-width: 100%;
        opacity: .7;
    }
    .user {
        font-size: calc(8px + .755vw);
        line-height: 1.25;
        text-align: center;
        color: white;
    }
</style>
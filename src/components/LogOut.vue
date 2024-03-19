<template>
    <div class="rounded exit-block">
        <div class="d-flex justify-content-end">
            <p class="rounded cross" @click="removeButton">&#10060;</p>
        </div>
        <MyButton @click="logOut" class="exit-btn">Log out</MyButton>
    </div>
</template>

<script>
import MyButton from './MyButton.vue'

export default {
    name: 'LogOut',
    components: { MyButton },
    methods: {
        removeButton() {
            this.$emit('logOutBtnClicked')
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

    .exit-block {
        border: 1px solid wheat;
        background-color: black;
        z-index: 3;
        position: absolute;
        top: calc(24px + 4.25vw);
    }
    .cross {
        font-size: calc(11.5px + .4vw);
        color: red;
        border: 1px solid red;
        padding: 0 7px;
        cursor: pointer;
    }
    .exit-btn {
        margin: 2px 3px;
        @media (min-width: 768px) {
            margin: 4px 8px;
            width: calc(($btn-f-size / 1.5 * 6 + 1.5px) + ($btn-horiz-padding * 2));
        }
    }
</style>
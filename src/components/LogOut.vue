<template>
    <div class="exit-block">
        <span class="cross" @click="removeButton">&#10060;</span>
        <br/>
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

    $rounding: 7px;

    .exit-block {
        border: 1px solid wheat;
        background-color: black;
        border-radius: $rounding;
        z-index: 3;
        position: absolute;
        top: calc(24px + 4.25vw);
    }
    .cross {
        float: right;
        font-size: calc(11.5px + .4vw);
        color: red;
        border: 1px solid red;
        border-radius: $rounding;
        padding: 0 $rounding;
        cursor: pointer;
    }
    .exit-btn {
        margin: 14px 3px 2px 3px;
        @media (min-width: 768px) {
            margin: 16px 8px 4px 8px;
        }
    }
</style>
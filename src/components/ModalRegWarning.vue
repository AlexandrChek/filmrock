<template>
    <div class="modal-warning rounded">
        <p><slot></slot></p>
        <div class="d-flex justify-content-around">
            <button class="btn btn-danger" @click="logIn">Log in</button>
            <button class="btn btn-danger" @click="register">Register</button>
            <button class="btn btn-danger" @click="close">Cancel</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalRegWarning',
    methods: {
        logIn() {
            this.$router.push('/logIn')
        },
        register() {
            this.$router.push('/registration')
        },
        close() {
            this.$emit('closewarning')
        }
    }
}
</script>

<style scoped lang="scss">
@import '../extends';
.modal-warning {
    @extend %modals;
}
p {
    @extend %modal-p;
}
button {
    width: 27%;
    padding: 5px 0;
    @media (max-width: 767px) {
        width: 29%;
    }
    @media (max-width: 575px) {
        font-size: 14px;
    }
}
</style>
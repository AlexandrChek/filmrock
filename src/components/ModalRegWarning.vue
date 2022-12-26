<template>
    <div class="modal-warning rounded">
        <p><slot></slot></p>
        <div class="text-center">
            <button class="btn btn-danger m-2" @click="logIn">Log in</button>
            <button class="btn btn-danger m-2" @click="register">Register</button>
            <button class="btn btn-danger m-2" @click="close">Cancel</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalRegWarning',
    methods: {
        logIn () {
            this.$router.push('/logIn')
        },
        register () {
            this.$router.push('/registration')
        },
        close () {
            this.$emit('closewarning')
        }
    }
}
</script>

<style scoped>
.modal-warning {
    position: fixed;
    top: 20vw;
    left: 35%;
    width: 30%;
    z-index: 2;
    background-color: rgb(205, 205, 205);
    border: 1px solid black;
}
p {
    font-size: 19px;
    font-weight: bold;
    color: black;
    margin: 13px; 
}
button {
    width: 25%;
}
@media (max-width: 1399px) {
    .modal-warning {
        left: 34%;
        width: 32%;
    }
}
@media (max-width: 1199px) {
    .modal-warning {
        left: 30%;
        width: 40%;
    }
}
@media (max-width: 991px) {
    p {
        font-size: 18px;
    }
    .modal-warning {
        left: 26%;
        width: 48%;
    }
}
@media (max-width: 767px) {
    .modal-warning {
        top: 32vh;
        left: 22%;
        width: 56%;
    }
    p {
        font-size: 17px;
    }
    button {
        width: 27%;
    }
}
@media (max-width: 575px) {
    .modal-warning {
        left: 14%;
        width: 72%;
    }
    p {
        font-size: 16px;
    }
    button {
        font-size: 14px;
        padding: 3px 2px;
    }
}
</style>
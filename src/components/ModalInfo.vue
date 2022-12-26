<template>
    <div class="modal-info rounded">
        <p><slot></slot></p>
        <div class="text-center">
            <button class="btn btn-danger m-2" @click="close">Ok</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalInfo',
    methods: {
        close () {
            this.$emit('pressclose')
        }
    }
}
</script>

<style scoped>
.modal-info {
    position: absolute;
    top: 35vh;
    left: 35%;
    width: 30%;
    z-index: 2;
    background-color: rgb(205, 205, 205);
    border: 1px solid black;
}
p {
    font-size: 17px;
    font-weight: bold;
    color: black;
    margin: 12px; 
}
button {
    width: 25%;
}
@media (max-width: 991px) {
    p {
        font-size: 15px;
    }
    button {
        width: 35%;
    }
}
@media (max-width: 767px) {
    .modal-info {
        top: 32vh;
        left: 30%;
        width: 40%;
    }
}
@media (max-width: 575px) {
    .modal-info {
        left: 17%;
        width: 64%;
    }
    p {
        font-size: 13px;
    }
}
</style>
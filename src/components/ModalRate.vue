<template>
    <div class="modal-rating rounded">
        <p>Rate the film (from 0 to 10):</p>
        <div class="rate-wrapper">
            0 <input type="range" min="0" max="10" step="0.5" v-model="rating"> 10
        </div>
        <div class="rating-value">{{rating}}</div>
        <div class="text-center">
            <button class="btn btn-success m-3" @click="sendRating">Rate</button>
            <button class="btn btn-danger m-3" @click="close">Cancel</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalRate',
    data () {
        return {
            rating: 0
        }
    },
    methods: {
        sendRating () {
            this.$emit('reseivingrating', this.rating)
        },
        close () {
            this.$emit('closerating')
        }
    }
}
</script>

<style scoped>
.modal-rating {
    position: absolute;
    top: 35vh;
    left: 35%;
    width: 30%;
    z-index: 2;
    background-color: rgb(205, 205, 205);
    border: 1px solid black;
}
p {
    text-align: center;
    font-size: 19px;
    font-weight: bold;
    color: black;
    margin: 15px; 
}
.rate-wrapper {
    color: blue;
    font-weight: bold;
    text-align: center;
}
input {
    width: 80%;
    margin: 1vw 0;
}
.rating-value {
    text-align: center;
    color: blue;
    font-size: 40px;
    font-weight: 900;
    margin-bottom: 1vw;
}
button {
    width: 27%;
}
@media (max-width: 1399px) {
    .modal-rating {
        width: 38%;
        left: 31%;
    }
}
@media (max-width: 1199px) {
    .modal-rating {
        width: 44%;
        left: 28%;
    }
}
@media (max-width: 991px) {
    .modal-rating {
        width: 46%;
        left: 27%;
    }
    .rating-value {
        font-size: 32px;
    }
}
@media (max-width: 767px) {
    .modal-rating {
        top: 32vh;
        left: 23%;
        width: 54%;
    }
    .rating-value {
        font-size: 30px;
    }
    button {
        width: 30%;
    }
}
@media (max-width: 575px) {
    .modal-rating {
        left: 15%;
        width: 70%;
    }
    p {
        font-size: 16px;
    }
}
</style>
<template>
    <div class="modal-rating rounded">
        <p>Rate the film (from 0 to 10):</p>
        <div class="rate-wrapper">
            0 <input type="range" min="0" max="10" step="0.5" v-model="rating"> 10
        </div>
        <div class="rating-value">{{rating}}</div>
        <div class="d-flex justify-content-around">
            <button class="btn btn-success" @click="sendRating">Rate</button>
            <button class="btn btn-danger" @click="close">Cancel</button>
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

<style scoped lang="scss">
@import '../extends';

.modal-rating {
    @extend %modals;
}
p {
    @extend %modal-p;
    text-align: center;
}
.rate-wrapper {
    text-align: center;
    color: blue;
    font-weight: bold;
}
input {
    width: 80%;
    margin: 1vw 0;
}
.rating-value {
    text-align: center;
    color: blue;
    font-weight: 900;
    font-size: 40px;
    margin-bottom: 1vw;
    @media (max-width: 991px) {
        font-size: 32px;
    }
    @media (max-width: 767px) {
        font-size: 30px;  
    }
}
button {
    width: 27%;
    @media (max-width: 767px) {
        width: 30%;
    }
}
</style>
<template>
    <div class="d-flex justify-content-center go-to-reg-wrapper">
        <div class="d-flex justify-content-evenly align-items-center go-to-reg">
            <p>If you have no an account, you should register.</p>
            <button class="btn btn-primary" @click="goToRegistration">
                Registration
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'GoToReg',
        methods: {
            goToRegistration() {
                this.$router.push('/registration')
            }
        }
    }
</script>

<style scoped lang="scss">
@import '../variables';
@import '../extends';

    %f-size {
        font-size: $label-reg-f-size-min-576;
        @media (max-width: 575px) {
            font-size: calc(5px + 2.05vw);
        }
    }

    .go-to-reg-wrapper {
        margin-bottom: 40px;
        @media (max-width: 1199px) {
            margin-bottom: 20px;
        }
        @media (max-width: 991px) {
            margin-bottom: 30px;
        }
        @media (max-width: 767px) {
            margin: 0;
        }
    }
    .go-to-reg {
        @extend %reg-block-size;
    }
    p {
        color: $toxic-green;
        margin: 0 11px 0 0;
        @extend %f-size;
    }
    button {
        @extend %f-size;
    }
</style>
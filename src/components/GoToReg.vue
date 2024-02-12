<template>
    <div class="d-flex justify-content-center align-items-center go-to-reg">
        <p>If you have no an account, you should register.</p>
        <button class="btn btn-primary" @click="goToRegistration">
            Registration
        </button>
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

    .go-to-reg {
        @extend %reg-block-size;
        margin: 0 auto 48px auto;
        @media (max-width: 767px) {
            margin: 0 auto;
        }
    }
    p {
        color: $toxic-green;
        margin: 0 12px 0 0;
        font-size: calc(14px + .24vw);
    }

    @media (max-width: 575px) {
        p, button {
            font-size: calc(5px + 2.05vw);
        }
    }
</style>
<template>
    <div class="pt-md-4 pt-2 login-view">
        <FormLogin @problem="showModal"/>
        <ModalInfo v-if="modalShown" @pressclose="closeModal">
            {{ modalMessage }}
        </ModalInfo>
        <GoToReg/>
        <div class="d-flex justify-content-center">
            <AdvertPlace/>
        </div>
    </div>
</template>

<script>
import FormLogin from '../components/FormLogin.vue'
import ModalInfo from '../components/ModalInfo.vue'
import GoToReg from '../components/GoToReg.vue'
import AdvertPlace from '../components/AdvertPlace.vue'

export default {
    name: 'LogIn',
    components: {
        FormLogin,
        ModalInfo,
        GoToReg,
        AdvertPlace
    },
    mounted() {
        this.$store.state.showMainFooter = false
    },
    unmounted() {
        this.$store.state.showMainFooter = true
    },
    data() {
        return {
            modalShown: false,
            modalMessage: ''
        }
    },
    methods: {
        showModal(problem) {
            if (problem === 'wrongUser') {
                this.modalMessage = 'Wrong username or password. Correct them or register, please!'
            } else if (problem === 'noUserOrPassword') {
                this.modalMessage = 'Enter both username and password, please!'
            }

            this.modalShown = true
        },
        closeModal() {
            this.modalShown = false
        }
    }
}
</script>

<style scoped lang="scss">
@import '../variables';

@mixin view-min-h($footer-f-size) {
    min-height: calc(100vh - (($main-title-f-size + $footer-f-size) * 1.5 + $login-footer-pad-top + $login-footer-pad-bot));
}

    .login-view {
        @include view-min-h($second-footer-f-size-575);
        @media (min-width: 576px) {
            @include view-min-h($second-footer-f-size);
        }
    }
</style>
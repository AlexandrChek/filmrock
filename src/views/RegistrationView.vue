<template>
    <LineHeader class="header-center">Registration</LineHeader>
    <FormReg
        @nameProblem="showModalWrongName"
        @passwordProblem="showModalPasswordProblem"
        ref="regForm"
    />
    <ModalInfo v-if="modalShown" @pressclose="closeModal">
        {{ modalMessage }}
    </ModalInfo>
    <div class="d-flex justify-content-center mt-5 mb-3">
        <AdvertPlace/>
    </div>
</template>

<script>
import LineHeader from '../components/LineHeader.vue'
import FormReg from '../components/FormReg.vue'
import ModalInfo from '../components/ModalInfo.vue'
import AdvertPlace from '../components/AdvertPlace.vue'

export default {
    name: 'RegistrationViev',
    components: {
        LineHeader,
        FormReg,
        ModalInfo,
        AdvertPlace
    },
    data() {
        return {
            modalShown: false,
            modalMessage: '',
            userNameProblem: false
        }
    },
    methods: {
        showModalWrongName(problem) {
            if(problem === 'shortUserName') {
                this.modalMessage = 'The length of your user name must be not less than three symbols!'
            } else if(problem === 'userNameUsed') {
                this.modalMessage = 'This name is already in use by another user. Try another, please!'
            }

            this.userNameProblem = true
            this.modalShown = true
        },
        showModalPasswordProblem(problem) {
            if(problem === 'noPassword') {
                this.modalMessage = 'Enter your password, please!'
            }else if(problem === 'passwordMismatch') {
                this.modalMessage = 'Your passwords in both fields must be identical!'
            }

            this.modalShown = true
        },
        closeModal() {
            this.modalShown = false

            if(this.userNameProblem) {
                this.$refs.regForm.focusUserName()
                this.userNameProblem = false
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import '../extends';

    .header-center {
        @extend %line-header-center;
    }
</style>
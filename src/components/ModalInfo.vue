<template>
    <div class="modal-info rounded">
        <p><slot></slot></p>
        <div class="text-center">
            <button class="btn btn-danger m-1" @click="close">Ok</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalInfo',
    methods: {
        close() {
            this.$emit('pressclose')
        }
    }
}
</script>

<style scoped lang="scss">
@import '../extends';

    .modal-info {
        @extend %modals;
    }
    p {
        @extend %modal-p;
    }
    button {
        width: 35%;
        @media (min-width: 992px) {
            width: 28%;
        }
    }
</style>
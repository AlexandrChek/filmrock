<template>
    <div class="btn-wrapper">
        <p v-if="show" id="up">&#9650;</p>
        <div>Advanced<br/>search</div>
        <p v-if="!show" id="down">&#9660;</p>
    </div>
</template>

<script>
export default {
    name: 'AdvancedOptions',
    props: ['show']
}
</script>

<style scoped lang="scss">
@import '../variables';
.btn-wrapper {
    width: 16%;
    color: $toxic-green;
    text-align: center;
    p {
        width: 32%;
        margin: 0 auto;
        font-size: 12px;
        background-color: $black-light;
    }
    div {
        border-radius: 3px;
        background-color: $black-light;
    }
    &:active p, &:active div {
        background-color: rgb(62, 62, 62);
    }
}
#down {
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
}
#up {
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
}
@media (max-width: 575px) {
    .btn-wrapper {
        width: 20%;
        div {
            font-size: 14px;
        }
    }
}
</style>
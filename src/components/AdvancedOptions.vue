<template>
    <div class="btn-wrapper">
        <p v-if="optionsShown" id="up">&#9650;</p>
        <div>Advanced<br/>search</div>
        <p v-if="!optionsShown" id="down">&#9660;</p>
    </div>
</template>

<script>
export default {
    name: 'AdvancedOptions',
    props: ['optionsShown']
}
</script>

<style scoped lang="scss">
@import '../variables';

    .btn-wrapper {
        width: calc(58px + 5vw);
        color: $toxic-green;
        text-align: center;
        p {
            width: 32%;
            margin: 0 auto;
            font-size: 12px;
            background-color: $black-light;
        }
        div {
            border-radius: 3.5px;
            background-color: $black-light;
            font-size: calc(9px + 1.1vw);
            line-height: 1.25;
            padding: 5px 0 2.5px 0;
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
</style>
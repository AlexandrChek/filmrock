<template>
    <div class="btn-wrapper">
        <p v-if="show" id="up">&#9650;</p>
        <div class="advanced-options-btn">Advanced search</div>
        <p v-if="!show" id="down">&#9660;</p>
    </div>
</template>

<script>
export default {
    name: 'AdvancedOptions',
    props: ['show']
}
</script>

<style scoped>
.btn-wrapper {
    width: 16%;
    color: #1dda2c;
    text-align: center;
}
.advanced-options-btn {
    border-radius: 3px;
    background-color: rgb(44, 44, 44);
}
.advanced-options-btn:active {
    background-color: rgb(62, 62, 62);
}
p {
    width: 32%;
    margin: 0 auto;
    font-size: 12px;
    background-color: rgb(44, 44, 44);
}
#down {
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
}
#up {
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
}
.btn-wrapper:active p {
    background-color: rgb(62, 62, 62);
}
@media (max-width: 575px) {
    .btn-wrapper {
        width: 20%;
    }
    .advanced-options-btn {
        font-size: 14.5px;
    }
}
</style>
<template>
    <button class="rounded">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'MyButton'
}
</script>

<style scoped>
button {
    padding: 4px 11px;
    background-color: rgb(145, 20, 20);
    color: white;
    font-weight: bold;
    font-size: 1.2vw;
    letter-spacing: .07vw;
    word-spacing: .35vw;
    box-shadow: inset 0px -1.5px 3px 3px rgb(82, 12, 12);
}
button:hover {
    color: rgb(255, 253, 230);
    background-color: rgb(175, 25, 25);
}
button:active {
    box-shadow: none;
    transition: .2s;
}
@media (max-width: 1399px) {
    button {
        font-size: 1.3vw;
    }
}
@media (max-width: 1199px) {
    button {
        font-size: 1.5vw;
        padding: 3px 10px;
        box-shadow: inset 0px -1px 3px 2.5px rgb(82, 12, 12);
    }
}
@media (max-width: 991px) {
    button {
        font-size: 1.75vw;
    }
}
@media (max-width: 767px) {
    button {
        font-size: 2.3vw;
    }
}
@media (max-width: 575px) {
    button {
        font-size: 14px;
        letter-spacing: .25vw;
    }
}
</style>
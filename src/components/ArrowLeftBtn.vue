<template>
    <button>&#60;</button>
</template>

<script>
export default {
    name: 'ArrowLeftBtn'
}
</script>

<style scoped>
button {
    border-radius: 50%;
    border-width: .5px;
    background-color: white;
    opacity: .6;
    z-index: 2;
    font-size: 33px;
    font-weight: bold;
    padding: .4vw;
    position: relative;
    right: -1.2vw;
}
button:hover {
    opacity: .8;
    color: #1dda2c;
    right: -0.9vw;
}
@media (max-width: 1199px) {
    button {
        font-size: 27px;
    }
}
@media (max-width: 991px) {
    button {
        font-size: 26px;
        right: -1.7vw;
    }
    button:hover {
        right: -1.4vw;
    }
}
@media (max-width: 767px) {
    button {
        font-size: 32px;
        right: -2.3vw;
    }
    button:hover {
        right: -2vw;
    }
}
@media (max-width: 575px) {
    button {
        font-size: 33px;
    }
}
</style>
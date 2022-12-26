<template>
    <div class="mx-2">
        <p>
            <slot></slot>
        </p>
    </div>
</template>

<script>
export default {
    name: 'SimplArrowBtn'
}
</script>

<style scoped>
p {
    height: 58%;
    margin: 50% 0 10px;
    border: 1px solid wheat;
    font-size: x-large;
    cursor: pointer;
}
p:hover {
    color: #1dda2c;
    background-color: rgb(44, 44, 44);
    border: 2px solid #1dda2c;
    font-weight: 800;
    z-index: 3;
}
@media (max-width: 991px) {
    p {
        font-size: large; 
    }
}
@media (max-width: 767px) {
    p {
        font-size: 3.25vw; 
    }
}
@media (max-width: 575px) {
    p {
        font-size: 4.5vw;
    }
}
</style>
<template>
    <p>
        You can find new trailers <a href="https://www.youtube.com/channel/UCT0hbLDa-unWsnZ6Rjzkfug" target="_blank">here</a>
    </p>
</template>

<script>
export default {
    name: 'TrailersLink'
}
</script>

<style scoped>
p {
    margin: 17px 0;
    text-align: center;
    font-size: 25px;
    letter-spacing: 4px;
    color: white;
}
a {
    color: #1dda2c;
}
@media (max-width: 1199px) {
    p {
        font-size: 23px;  
    }
}
@media (max-width: 991px) {
    p {
        font-size: 20px;
        margin: 45px 0;  
    }
}
@media (max-width: 767px) {
    p {
        margin: 17px 0;
        font-size: 3.35vw;
    }
}
</style>
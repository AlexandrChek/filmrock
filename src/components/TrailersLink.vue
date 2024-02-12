<template>
    <p>
        You can find new trailers
        <a href="https://www.youtube.com/channel/UCT0hbLDa-unWsnZ6Rjzkfug" target="_blank">
            here
        </a>
    </p>
</template>

<script>
export default {
    name: 'TrailersLink'
}
</script>

<style scoped lang="scss">
@import '../variables';

    $let-spacing: calc(1.7px + .055vw);

    p {
        margin-top: calc($main-title-f-size * 0.7);
        text-align: center;
        font-size: calc(10px + .9vw);
        letter-spacing: $let-spacing;
        color: white;
        a {
            color: $toxic-green;
            padding-left: $let-spacing;
        }
        a:hover {
            border-radius: 5px;
            text-decoration: none;
            color: black;
            background-color: $light-green;
            box-shadow: 0 0 12px 3px $light-green;
        }
    }
</style>
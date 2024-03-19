<template>
    <div>
        <p class="m-0 px-1 contacts">LinkedIn:</p>
        <a href="https://linkedin.com/in/chekcheev" target="_blank">
            https://linkedin.com/in/chekcheev
        </a>
    </div>
</template>

<script>
    export default {
        name: 'LinkedIn'
    }
</script>

<style scoped lang="scss">
@import '../variables';
@import '../extends';

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        @media (min-width: 680px) {
            flex-direction: row;
            justify-content: center;
        }
    }
    p {
        @extend %contacts-settings;
        @extend %contacts-settings-2;
    }
    a {
        @extend %contacts-settings;
        &:hover {
            color: $light-green;
            text-shadow: 0 0 20px $light-green;
        }
    }
</style>
<template>
    <p :class="{'left-alignment': left, 'center-alignment': !left}">
        <slot></slot>
    </p>
</template>

<script>
export default {
    name: 'LineHeader',
    props: ['left']
}
</script>

<style scoped lang="scss">
@import '../variables';

    p {
        font-size: calc(13.2px + .58vw);
        font-weight: 900;
        letter-spacing: 1.1px;
        margin: 0;
        background-color: wheat;
        color: $burgundy;
    }
    .left-alignment {
        padding-left: 20px;
        @media (max-width: 575px) {
            padding-left: 12px;
        }
    }
    .center-alignment {
        text-align: center;
    }
</style>
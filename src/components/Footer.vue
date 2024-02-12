<template>
    <div v-if="$store.state.showMainFooter" class="d-inline-flex align-items-center w-100">
        <LogoType/>
        <p class="first-variant"> - the best way to search movies!</p>
    </div>
    <p v-else class="second-variant">
        <span>FilmRock</span> - the best way to search movies!
    </p>
</template>

<script>
import LogoType from './Logo.vue'

export default {
    name: 'MyFooter',
    components: {LogoType}
}
</script>

<style scoped lang="scss">
@import '../variables';

    @mixin text-settings($f-size, $f-size-575) {
        margin: 0;
        font-family: URW Chancery L, cursive;
        letter-spacing: .17vw;
        font-size: $f-size;
        @media (max-width: 575px) {
            font-size: $f-size-575;
        }
    }

    .first-variant {
        @include text-settings(calc(12px + 1vw), 3.27vw);
    }
    .second-variant {
        @include text-settings($second-footer-f-size, $second-footer-f-size-575);
        padding: $login-footer-pad-top 0 $login-footer-pad-bot 0;
        text-align: center;
    }
    span {
        color: $toxic-green;
        font-weight: bold;
    }
</style>
<template>
    <button>&#62;</button>
</template>

<script>
export default {
    name: 'ArrowRightBtn'
}
</script>

<style scoped lang="scss">
@import '../mixins';

button {
    @include arrow-btn(left);
}
</style>
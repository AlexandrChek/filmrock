<template>
    <button>&#60;</button>
</template>

<script>
export default {
    name: 'ArrowLeftBtn'
}
</script>

<style scoped lang="scss">
@import '../mixins';

button {
    @include arrow-btn(right);
}
</style>
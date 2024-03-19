<template>
    <p class="my-3 not-found">
      There is no such movie in the database.
    </p>
</template>

<script>
export default {
    name: 'NotFound',
}
</script>

<style scoped lang="scss">
@import '../variables';

  .not-found {
    font-weight: bold;
    color: $toxic-green;
  }
</style>
<template>
    <p><slot></slot></p>
</template>

<script>
export default {
    name: 'LineHeader'
}
</script>

<style scoped lang="scss">
@import '../variables';

p {
  font-size: calc(13.5px + .58vw);
  font-weight: 900;
  letter-spacing: 1.2px;
  margin-bottom: 5px;
  padding-left: 20px;
  background-color: wheat;
  color: $burgundy;
  @media (max-width: 575px) {
      padding-left: 12px;
  }
}
</style>
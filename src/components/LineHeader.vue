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
  font-size: 21px;
  font-weight: 900;
  letter-spacing: 4.5px;
  margin-bottom: 5px;
  padding-left: 20px;
  background-color: wheat;
  color: $burgundy;
  @media (max-width: 991px) {
    font-size: 18px;
    letter-spacing: 4px;
  }
  @media (max-width: 767px) {
      font-size: 17px;
  }
  @media (max-width: 575px) {
      font-size: 3.5vw;
      letter-spacing: 3.5px;
      padding-left: 13px;
  }
}
</style>
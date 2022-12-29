<template>
    <p><slot></slot></p>
</template>

<script>
export default {
    name: 'LineHeader'
}
</script>

<style scoped>
p {
  font-size: 21px;
  font-weight: 900;
  letter-spacing: 7px;
  word-spacing: 11px;
  margin-bottom: 5px;
  padding-left: 20px;
  background-color: wheat;
  color: rgb(143, 25, 25);
}
@media (max-width: 991px) {
  p {
    font-size: 18px;
  }
}
@media (max-width: 767px) {
  p {
    font-size: 17px;
  }
}
@media (max-width: 575px) {
  p {
    font-size: 3.5vw;
    letter-spacing: 5.3px;
    word-spacing: 3px;
    padding-left: 13px;
  }
}
</style>
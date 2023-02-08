<template>
    <div class="d-inline-flex">
        <img src="../assets/viber.png" alt="Viber">
        <img src="../assets/telegram.png" alt="Telegram">
        <img src="../assets/whats_up.png" alt="What`s up">
        <img src="../assets/meet.png" alt="Meet">
        <img src="../assets/zoom.png" alt="Zoom">
    </div>
    <div class="not-gsm">
        (not GSM<img src="../assets/dont_call.jpg" alt="Not GSM">)
    </div>
</template>

<script>
export default {
    name: 'MyMessengers'
}
</script>

<style scoped lang="scss">
img {
  margin: 5px;
  max-height: 41px;
  border-radius: 9px;
  @media (max-width: 575px) {
    margin: 4px;
    width: 7.8vw;
  }
}
.not-gsm {
    margin-left: 5px;
}
</style>
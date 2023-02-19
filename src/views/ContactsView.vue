<template>
  <LineHeader class="text-center">Contacts</LineHeader>
  <div class="tel-wrapper">
    <div class="contacts tel">
      Telephone: +38(066)9072641
    </div>
    <div class="d-inline-flex contacts tel">
      <MyMessengers/>
    </div>
  </div>
  <div class="text-center p-3 contacts">E-mail: chekcheev.alex@gmail.com</div>
  <div class="p-3 gmt-wrapper">
    <div class="gmt-3">
      <span class="contacts">Timezone:&ensp;</span>
      <div class="time-season">daylight savings time - <span class="contacts">GMT+3,&ensp;</span></div>
    </div>
    <div class="gmt-2 mb-2">
      <div class="time-season">winter time - <span class="contacts">GMT+2</span></div>
    </div>
  </div>
  <div class="offer">
    <div>Making websites</div>
    <div>Adaptive layout based on Vue.js & Bootstrap</div>
  </div>
  <div class="d-inline-flex justify-content-center w-100 my-4">
    <AdvertPlace></AdvertPlace>
  </div>
</template>

<script>
import LineHeader from '../components/LineHeader.vue'
import MyMessengers from '../components/MyMessengers.vue'
import AdvertPlace from '../components/AdvertPlace.vue'

export default {
  name: 'ContactsView',
  components: {
    LineHeader,
    MyMessengers,
    AdvertPlace
  }
}
</script>

<style scoped lang="scss">
@import '../variables';
.tel-wrapper {
  @extend .gmt-3;
  width: 100%;
  padding: 40px 0 20px;
}
.contacts {
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 5.5px;
  color: $toxic-green;
  text-align: center;
}
.gmt-wrapper {
  @extend .gmt-3;
  width: 100%;
}
.gmt-3 {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.time-season {
  font-size: 20px;
  color: $toxic-green;
}
.offer div {
  text-align: center;
  font-size: 20px;
  letter-spacing: 5px;
  margin: 5px 0;
  line-height: 2.5;
  background: radial-gradient(red 3%, black 65%);
}
@media (max-width: 1199px) {
  .tel-wrapper {
    flex-direction: column;
  }
  .tel {
    margin: 0 auto;
  }
}
@media (max-width: 991px) {
  .gmt-wrapper {
    flex-direction: column;
  }
  .gmt-3, .gmt-2 {
    margin: 0 auto;
  }
  .offer div {
    background: radial-gradient(red 3%, black 79%);
  }
}
@media (max-width: 767px) {
  .gmt-3 {
    flex-direction: column;
  }
  .offer div {
    margin: 9px 0;
    padding: 0 25px;
    letter-spacing: 3.5px;
    line-height: 2;
    background: radial-gradient(red 1%, black 81%);
  }
}
@media (max-width: 575px) {
  .tel-wrapper {
    padding: 20px 0 20px;
  }
  .contacts {
    font-size: 5.2vw;
    letter-spacing: 1vw;
  }
  .time-season {
    font-size: 4.7vw;
  }
  .offer div {
    font-size: 3.9vw;
    letter-spacing: .7vw;
  }
}
</style>

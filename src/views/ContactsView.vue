<template>
  <LineHeader :left="false">Contacts</LineHeader>
  <div class="mt-sm-5 mt-4 mb-3 tel-wrapper">
    <p class="m-0 contacts">
      Telephone: +38(066)9072641
    </p>
    <div class="d-flex contacts">
      <MyMessengers/>
    </div>
  </div>
  <p class="px-1 contacts">
    E-mail: chekcheev.alex@gmail.com
  </p>
  <div class="mb-sm-5 mb-4"><LinkedIn/></div>
  <RedLine v-for="item in offers" :key="item">
    {{ item }}
  </RedLine>
  <div class="d-flex justify-content-center mt-sm-5 my-3">
    <AdvertPlace/>
  </div>
</template>

<script>
import LineHeader from '../components/LineHeader.vue'
import MyMessengers from '../components/MyMessengers.vue'
import LinkedIn from '../components/LinkedIn.vue'
import RedLine from '../components/RedLine.vue'
import AdvertPlace from '../components/AdvertPlace.vue'

export default {
  name: 'ContactsView',
  components: {
    LineHeader,
    MyMessengers,
    LinkedIn,
    RedLine,
    AdvertPlace
  },
  data() {
    return {
      offers: [
        'Making websites',
        'Responsive layout based on Vue.js or JS'
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '../extends';

  .tel-wrapper {
    display: flex;
    justify-content: center;
    @media (max-width: 1199px) {
      flex-direction: column;
      align-items: center;
    }
  }
  .contacts {
    @extend %contacts-settings;
    @extend %contacts-settings-2;
  }
</style>
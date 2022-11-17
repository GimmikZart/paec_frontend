<template>
  <div id="app">
    <Header></Header>
    <Jumbotron></Jumbotron>
    <ChiSiamo></ChiSiamo>
    <Servizi></Servizi>
    <Contatti></Contatti>
    <Footer></Footer>
    <BannerAiuto></BannerAiuto>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Jumbotron from '@/sections/Jumbotron.vue'
import ChiSiamo from '@/sections/ChiSiamo.vue'
import Servizi from '@/sections/Servizi.vue'
import Contatti from '@/sections/Contatti.vue'
import Footer from '@/sections/Footer.vue'
import BannerAiuto from '@/components/BannerAiuto.vue'


export default {
  name: 'App',
  components: {
    Header,
    Jumbotron,
    ChiSiamo,
    Servizi,
    Contatti,
    Footer,
    BannerAiuto
  }
}
</script>

<style lang="scss">
@import "@/scss/generic";
</style>

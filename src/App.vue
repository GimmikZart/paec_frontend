<template>
  <div id="app">
    <Header></Header>
    <Jumbotron></Jumbotron>
    <ChiSiamo></ChiSiamo>
    <Servizi></Servizi>
    <Contatti></Contatti>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Jumbotron from './sections/Jumbotron.vue'
import ChiSiamo from './sections/ChiSiamo.vue'
import Servizi from './sections/Servizi.vue'
import Contatti from './sections/Contatti.vue'


export default {
  name: 'App',
  components: {
    Header,
    Jumbotron,
    ChiSiamo,
    Servizi,
    Contatti
  }
}
</script>

<style lang="scss">
@import "@/scss/generic";
</style>

<template>
  <section id="description">
    <!-- LEFT -->
    <div class="h-100 w-30">
      <BoxColorati v-for="(box, index) in boxColorati" :key="index" :color="box.color" :htmlText="box.htmlText"></BoxColorati>
    </div>
    <!-- RIGHT -->
    <div class="h-100">

    </div>
  </section>
</template>

<script>
import BoxColorati from '@/components/ChiSiamo/BoxColorati.vue'
export default {
  name: 'Description',
  components: {
    BoxColorati
  },
  data: () => ({
    boxColorati: [
      {
        color: 'red',
        htmlText: 'Gestione <br> <b>Urgenze</b> <br> 24 ore su 24'
      },
      {
        color: 'lightBlue',
        htmlText: 'Reperibilità <br> <b>Notturne</b> <br> e festivi'
      },
      {
        color: 'yellow',
        htmlText: 'Membri di <br> <b>“Professione </b> <br> <b>in Famiglia”</b>'
      }
    ]
  }),

}
</script>

<style lang="scss" scoped>
  #description{
    display: flex;
    height: $viewPort;
  }
</style>

<template>
  <div id="targets">
    <h2>I NOSTRI OBBIETTIVI</h2>
    <div class="container">
      <Target v-for="(target, index) in targets" :key="index" :target="target" :index="index + 1"></Target>
    </div>
  </div>
</template>

<script>
import Target from '@/components/ChiSiamo/Target.vue'
export default {
  name: 'Targets',
  components: {
    Target
  },
  data: () => ({
    targets: [
      {
        title: 'GENERARE BENESSERE SOCIALE ',
        subTitle: null
      },
      {
        title: 'DIVENTARE UN PUNTO DI RIFERIMENTO PER IL CITTADINO',
        subTitle: null
      },
      {
        title: 'CREARE POSTI DI LAVORO E NUOVI SERVIZI',
        subTitle:'(tra cui: “progetto fine vita”, per le cure palliative domiciliari)'
      },
      {
        title: 'SPORTELLO DI ORIENTAMENTO PER ANZIANI',
        subTitle: '(gestione assistenza badanti, ricerca di disponibilità nellestrutture per anziani, cooperazione con sale di commiato)'
      },
      {
        title: 'APPLICAZIONE E DIFFUSIONE DELLA TELEMEDICINA',
        subTitle: '(con il sostegno di aziende specializzate)'
      },
      {
        title: 'SERVIZIO INFERMIERISTICO ORDINARIO E DI URGENZA DIURNO E NOTTURNO',
        subTitle: null
      }
    ]
  }),
}
</script>

<style lang="scss" scoped>
#targets{
    padding: 2rem;
    h2{
      font-size: 3rem;
      text-align: center;
      color: $darkBlue;
    }
    .container{
      margin-top: 2rem;
      margin-bottom: 2rem ;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
</style>

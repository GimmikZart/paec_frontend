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
        title: 'SISTEMARE E ORIENTARE LE PERSONE ANZIANE',
        subTitle: '(gestione assistenza badanti, ricerca di disponibilità nellestrutture per anziani, cooperazione con sale di commiato)'
      },
      {
        title: 'APPLICARE E DIFFONDERE LA TELEMEDICINA',
        subTitle: '(con il sostegno di aziende specializzate)'
      },
      {
        title: 'FORNIRE SERVIZI INFERMIERISTICI H24',
        subTitle: null
      }
    ]
  }),
}
</script>

<style lang="scss" scoped>
//generic
#targets{
  padding: 2rem;
  margin: auto;
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

// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) { 

}

// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) { 

}

// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) { 

}

// smartphones
@media (max-width: 575.98px) { 

}
</style>

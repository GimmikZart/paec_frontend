<template>
  <section id="description">
    <!-- LEFT -->
    <div id="left" class="h-100 w-30">
      <BoxColorati v-for="(box, index) in boxColorati" :key="index" :boxInfo="box"></BoxColorati>
    </div>
    <!-- RIGHT -->
    <div id="right" class="h-100">
      <div id="title">
        <h2>CHI SIAMO</h2>
        <h4>NOI RISOLVIAMO PROBLEMI</h4>
      </div>
      <div id="img"></div>
      <div id="paragraph">
        <div>
          <p>
            Siamo un'agenzia che fornisce <b>servizi domiciliari infermieristici</b>, di <b>telemedicina</b> e di <b>aiuto alla persona</b>. <br><br>
            Proponiamo alle famiglie <b>soluzioni assistenziali</b> studiate sui bisogni di ogni singola persona, attraverso una vasta rete di <b>professionisti</b>. <br><br>
            Nata da una squadra di persone con <b>esperienza pluriennale</b> nel settore, Professione Assistenza garantisce <b>competenza</b>, <b>serietà</b> e <b>affidabilità</b>, requisiti indispensabili per garantire una vera <b>qualità al servizio</b>.
          </p>
        </div>
      </div>
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
        icon: 'emergency.svg',
        htmlText: 'Gestione <br> <b>Urgenze</b> <br> 24 ore su 24'
      },
      {
        color: 'lightBlue',
        icon: 'night.svg',
        htmlText: 'Reperibilità <br> <b>Notturne</b> <br> e festivi'
      },
      {
        color: 'yellow',
        icon: 'professione-in-famiglia.png',
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
    min-height: 750px;
    #right{
      width: 100%;
      position: relative;
      #title{
        width: 100%;
        height: 15%;
        background-color: $darkBlue;
        padding: 0.5rem;
        h2{
          text-align: center;
          font-size: 3rem;
          font-weight: bold;
          color: white;
        }
        h4{
          text-align: center;
          font-size: 1.5rem;
          font-weight: 200;
          color: white;
        }
      }
      #img{
        width: 100%;
        height: 40%;
        background-image: url("~@/assets/immagini/chi_siamo/team.jpeg");
        background-repeat: no-repeat;
        background-size: cover;
      }
      #paragraph{
        width: 80%;
        height: 45%;
        margin: auto;
        display: flex;
        align-items: center;
        padding: 1rem;
        div{
          border-top: 5px solid $yellow;
          height: 90%;
          display: flex;
          align-items: center;
          border-bottom: 5px solid $yellow;
          padding: 1rem;
          p{
            text-align: center;
            font-size: 1.5rem;
            
          }
        }
      }
    }
  }
</style>

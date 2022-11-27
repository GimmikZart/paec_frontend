<template>
  <section id="description">
    <!-- LEFT -->
    <div id="left">
      <BoxColorati v-for="(box, index) in boxColorati" :key="index" :boxInfo="box"></BoxColorati>
    </div>
    <!-- RIGHT -->
    <div id="right">
      <div id="title">
        <h2>CHI SIAMO</h2>
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
  //generic
  #description{
    display: flex;
    height: $viewPort;
    min-height: 750px;
    #left{
      height: 100%;
      width: 30%;
    }
    #right{
      width: 100%;
      height: 100%;
      position: relative;
      #title{
        width: 100%;
        height: 15%;
        background-color: $darkBlue;
        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        h2{
          text-align: center;
          font-size: 3rem;
          font-weight: bold;
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

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1200px) { 

  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 992px) { 

  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 768px) { 
    #description{
      flex-direction: column-reverse;
      height: auto;
      min-height: 0;
      #left{
        width: 100%;
        display: flex;
      }
      #right{
        #paragraph{
          margin: 2rem auto;
        }
        #img{
          height: 40vh;
        }
      }
    }
  }

  // smartphones
  @media (max-width: 576px) { 
    #description{
      #left{
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      }
      #right{
        #paragraph{
          width: 100%;
          margin: 1rem auto;
        }
        #img{
          height: 40vh;
        }
      }
    }
  }
</style>
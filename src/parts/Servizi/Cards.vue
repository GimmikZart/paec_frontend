<template>
  <div id="cards">
    <!-- TOP -->
    <div id="top">
      <!-- LEFT -->
      <div id="left">
        <Card class="card" :info="info1"></Card>
      </div>
      <!-- RIGHT -->
      <div id="right">
        <Card class="card" :info="info2"></Card>
        <Card class="card" :info="info3"></Card>
      </div>
    </div>
    <!-- BOTTOM -->
    <div id="bottom">
      <Card class="card" id="farmaci-card" :info="info4" :sideList="true"></Card>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Servizi/Card.vue'
export default {
  name: 'Cards',
  components: {
    Card
  },
  data: () => ({
    info1: {
      icon: 'home-hospital.svg',
      color: 'red',
      title: 'PRESTAZIONI INFERMIERISTICHE DOMICILIARI',
      services: [
        "Terapie endovenose, fleboclisi / ipodermoclisi",
        "Iniezioni intramuscolari e sottocutanee",
        "Cateterismi vescicali / lavaggi vescicali",
        "Clisteri evacuanti ",
        "Medicazioni semplici e complesse",
        "Gestione piaghe da decubito",
        "Misurazione parametri vitali (PA, FC, SpO2)",
        "Tamponi Covid 19",
        "Terapie palliative",
        "Reperibilità notturna"
      ]
    },
    info2: {
      icon: 'telemedicine.svg',
      color: 'blue',
      title: 'TELEMEDICINA DOMICILIARE',
      services: [
        "Assistenza a ore domiciliare",
        "Assistenza h24 in convivenza domiciliare"
      ]
    },
    info3: {
      icon: 'nurse.svg',
      color: 'yellow',
      title: 'BADANTI / OPERATRICI DI AIUTO / ASSISTENTI FAMILIARI',
      services: [
        "Elettrocardiogrammi con referto medico entro 2 ore",
        "Holter cardiaci delle 24 o 48 ore con referto medico entro 2 giorni"
      ]
    },
    info4: {
      icon: 'mediaction.svg',
      color: 'green',
      title: 'FARMACI',
      services: [
        "Richiediamo noi i farmaci al tuo medico per tempo",
        "Ritiro prioritario in farmacia",
        "Te li portiamo direttamente a casa",
        "Preparazione della terapia settimanale"
      ]
    }

    
  }),
}
</script>

<style lang="scss" scoped>
  #cards{
    //height: 100vh;
    #top{
      height: 50%;
      display: flex;
      #left{
        width: 50%;
        .card{
          height: 100%;
        }
      }
      #right{
        width: 50%;
        .card{
          height: 50%;
        }
      }
    }
    #bottom{
      height: 50%;
      #farmaci-card{
        height: 300px;
      }
    }
  }
</style>

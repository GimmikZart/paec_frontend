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
        "Prelievi ematici domiciliari",
        "Terapie endovenose, fleboclisi e ipodermoclisi",
        "Iniezioni intramuscolari e sottocutanee",
        "Cateterismi vescicali e lavaggi vescicali",
        "Clisteri evacuanti ",
        "Medicazioni semplici e complesse",
        "Gestione piaghe da decubito",
        "Misurazione parametri vitali (PA, FC, SpO2)",
        "Tamponi Covid 19",
        "Terapie palliative",
        "Reperibilità notturna",
        "Ritiro referti"
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
      title: 'SERVIZIO FARMACI',
      services: [
        "Richiediamo tempestivamente i tuoi farmaci al medico curante prima dell'esaurimento",
        "Consegna a domicilio o ritiro prioritario in farmacia (evita la coda)",
        "Preparazione terapie settimanali"
      ]
    }

    
  }),
}
</script>

<style lang="scss" scoped>
  //generic
  #cards{
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

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) { 

  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) { 

  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) { 
     #cards{
        #top{
          flex-direction: column;
          #left{
            width: 100%;
            .card{
              height: 400px;
            }
          }
          #right{
            width: 100%;
            .card{
              height: 250px;
            }
          }
        }
     }
  }

  // smartphones
  @media (max-width: 575.98px) { 

  }
</style>

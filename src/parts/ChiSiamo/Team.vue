<template>
  <div id="team">
    <h2>IL NOSTRO TEAM</h2>
    <div class="container">
      <TeamComponent v-for="(member, index) in teamMember" :key="index" :teamMember="member"></TeamComponent>
    </div>
  </div>
</template>

<script>
import TeamComponent from '@/components/ChiSiamo/TeamComponent.vue'

export default {
  name: 'Team',
  components: {
    TeamComponent,
  },
  data: () => ({
    teamMember: [
      {
        name: 'Pierluigi P.',
        photo: 'pierluigi.png',
        roles: [
          'Responsabile amministrativo',
          'Coordinatore badanti/operatrici di aiuto domiciliari',
          'Selezione del personale'
        ]
      },
      {
        name: 'Davide D.',
        photo: 'davide.png',
        roles: [
          'Coordinatore infermieristico',
          'Infermiere libero professionista'
        ]
      },
      {
        name: 'Barbara M.',
        photo: 'barbara.png',
        roles: [
          'Organizzazione dei servizi',
          'Front desk',
          'Pubbliche relazioni'
        ]
      }
    ]
  }),
}
</script>

<style lang="scss" scoped>
  //generic
  #team{
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

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) { 

  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) { 

  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) { 
    #team{
      .container{
        justify-content: space-around;
      }
    }
  }

  // smartphones
  @media (max-width: 575.98px) { 
    #team{
      .container{
        flex-direction: column;
      }
    }
  }
</style>

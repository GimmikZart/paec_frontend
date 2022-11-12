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
        name: 'Pierluigi Piazza',
        photo: 'photo.png',
        roles: [
          'Responsabile amministrativo',
          'Coordinatore badanti/operatrici di aiuto domiciliari',
          'Selezione del personale'
        ]
      },
      {
        name: 'Davide Dacci',
        photo: 'photo.png',
        roles: [
          'Coordinatore infermieristico',
          'Infermiere libero professionista'
        ]
      },
      {
        name: 'Barbara Montanini',
        photo: 'photo.png',
        roles: [
          'Organizzazione dei servizi',
          'Front desk',
          'Pubbliche relazioni'
        ]
      },
      {
        name: 'Sebastiano Paterlini',
        photo: 'photo.png',
        roles: [
          'Pubbliche relazioni',
          'Responsabile web',
          'Comunicazione'
        ]
      }
    ]
  }),
}
</script>

<style lang="scss" scoped>
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
</style>

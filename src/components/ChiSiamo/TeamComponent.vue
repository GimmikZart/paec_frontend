<template>
  <div id="team-component">
    <!-- SOPRA -->
    <div id="sopra">
      <img class="blob" src="@/assets/immagini/chi_siamo/blob.svg" alt="">
      <img class="photo" :src="getPhoto" alt="">
    </div>
    <!-- SOTTO -->
    <div id="sotto">
      <h4>{{teamMember.name}}</h4>
      <h6 v-for="role in teamMember.roles" :key="role">{{role}}</h6>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'TeamComponent',
  props: ['teamMember'],
  computed: {
    getPhoto(){
      return require('@/assets/immagini/chi_siamo/' + this.teamMember.photo) 
    }
  }
}
</script>

<style lang="scss" scoped>
  #team-component{
    width: 20%;
    #sopra{
      border-bottom: 0.7rem solid $darkBlue;
      position: relative;
      display: flex;
      justify-content: center;
      .blob{
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: auto;
        opacity: 50%;
        path{
          fill: $yellow;
        }
      }
      .photo{
        width: 80%;
        z-index: 2;
        height: auto;
        margin: auto;
      }
    }
    #sotto{
      h4{
        text-align: center;
        font-size: 1.5rem;
        font-weight: bold;
      }
      h6{
        font-size: 1rem;
        font-weight: 200;
        text-align: center;
      }
    }
    
  }
</style>

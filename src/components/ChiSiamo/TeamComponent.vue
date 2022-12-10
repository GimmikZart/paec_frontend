<template>
  <div class="team-component" ref="team_component">
    <!-- SOPRA -->
    <div id="sopra">
      <img class="blob" src="@/assets/immagini/chi_siamo/blob.svg" alt="">
      <img class="photo animate__animated animate__fadeInUp" ref="photo" :src="getPhoto" alt="">
    </div>
    <!-- SOTTO -->
    <div class="animate__animated animate__fadeInDown" id="sotto" ref="sotto">
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
  },
  methods: {
    animationOnScroll: function(){
      let scrollpos = window.scrollY

      console.log({scrollpos});
      let team_component = this.$refs.team_component.el
      console.log({team_component});
      let photo = this.$refs.photo
      console.log({photo});
      


      
      //const teamComponent_height = team_component.offsetHeight

      /* const add_class_on_scroll = () => photo.classList.add("animate__animated animate__fadeInUp")
      const remove_class_on_scroll = () => photo.classList.remove("animate__animated animate__fadeInUp")

      window.addEventListener('scroll', function() { 
        console.log('PROVS');
        scrollpos = window.scrollY;

        if (scrollpos >= teamComponent_height) { 
          console.log('ARRIVATO');
          add_class_on_scroll() 
        }
        else { remove_class_on_scroll() }
      }) */
    }
  },
  mounted: function(){
    //this.animationOnScroll()
  }
}
</script>

<style lang="scss" scoped>
  //generic
  .team-component{
    width: 20%;
    #sopra{
      border-bottom: 0.7rem solid $darkBlue;
      position: relative;
      display: flex;
      justify-content: center;
      overflow: hidden;
      z-index:2;
      background-color: white;
      .blob{
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        opacity: 0.5;
        path{
          fill: $yellow;
        }
      }
      .photo{
        width: auto;
        z-index: 2;
        height: 200px;
        margin: auto;
      }
    }
    #sotto{
      overflow: hidden;
      z-index: -1;
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

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) { 

  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) { 

  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) { 
      .team-component{
        margin: 2rem;
        width: 30%;
      }
  }

  // smartphones
  @media (max-width: 575.98px) { 
    .team-component{
      margin: auto;
      width: 60%;
      margin-bottom: 2rem;
      #sotto{
        h4{
          font-size: 2rem;
        }
        h6{
          font-size: 1.3rem;
        }
      }
    }
  }
</style>

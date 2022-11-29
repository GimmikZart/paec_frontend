<template>
  <header id="header">
    <section id="large-header" class="container ma-auto d-flex align-center justify-space-between">
      <div @click="scrollToTargetAdjusted('jumbotron')" id="logo">
        <img src="@/assets/immagini/logo/logo.png" alt="">
        <h5>Professione <br> Assistenza <br> e Cura</h5>
      </div>

      <a @click="scrollToTargetAdjusted('chi-siamo')">CHI SIAMO</a>
      <a @click="scrollToTargetAdjusted('servizi')">SERVIZI</a>
      <a @click="scrollToTargetAdjusted('contatti')">CONTATTI</a>
      <a href="mailto:info@pacparma.it" id="lavora-con-noi">LAVORA CON NOI</a>
    </section>

    <section id="small-header">
      <div id="logo" @click="scrollToTargetAdjusted('jumbotron')">
        <img src="@/assets/immagini/logo/logo.png" alt="">
        <h5>Professione <br> Assistenza <br> e Cura</h5>
      </div>
      <button @click="toggleMenu">
        <HamburgerMenu :isOpen="menuOpen"></HamburgerMenu>
      </button>
      <div v-if="menuOpen" id="menuList">
        <a @click="scrollToTargetAdjusted('chi-siamo')">CHI SIAMO</a>
        <a @click="scrollToTargetAdjusted('servizi')">SERVIZI</a>
        <a @click="scrollToTargetAdjusted('contatti')">CONTATTI</a>
        <a href="mailto:info@pacparma.it" id="lavora-con-noi">LAVORA CON NOI</a>
      </div>
    </section>
  </header>
</template>

<script>
import HamburgerMenu from '@/components/HamburgerMenu.vue'
export default {
  name: 'Header',
  components: {
    HamburgerMenu
  },
  data: () => ({
    menuOpen: false,
  }),
  computed: {
    breakPoint(){
      let windowWidth = window.innerWidth;
      return windowWidth;
    }
  },
  methods: {
    toggleMenu(){
      this.menuOpen = !this.menuOpen
    },
    scrollToTargetAdjusted(id){
      this.menuOpen = false
      var element = document.getElementById(id);
      let header = document.getElementById('header').firstElementChild;
      console.log({header});
      var headerOffset = 60;
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
      window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
      });
    } 
  }
}
</script>

<style lang="scss" scoped>
  /* GENERIC  */
  header{
    height: $headerHeight;
    width: 100%;
    background-color: $header;
    position: fixed;
    display: flex;
    align-items: center;
    top:0;
    left:0;
    z-index: 10;
    #large-header{
        height: 70%;
        #logo {
          height: 100%;
          display: flex;
          cursor: pointer;
          align-items: center;
          img{
            height: 100%;
            margin-right: 1rem;
          }
          h5{
            font-size: 0.9rem;
            color: white;
          }
        }

        a{
          cursor: pointer;
          color: white;
          text-decoration: none;
          font-weight: bold;
          font-size:1.2rem;
        }
      }
    #small-header{
      display: none;
    }
  }

  #lavora-con-noi{
    background-color: $yellow;
    padding: 10px 20px;
    border-radius: 30px;
    text-align: center;
  }

// Small devices (landscape phones, less than 768px)
@media (max-width: 768px) { 
  header{
    width: 100%;
    padding: 0 1rem;
    #large-header{
      display: none;
    }
    #small-header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      width: 100%;
      z-index:10;
      #logo{
        display: flex;
        align-items: center;
        height: 100%;
        img{
          height: 70%;
          margin-right: 1rem;
        }
        h5{
          font-size: 1.5rem;
          color: white;
        }
      }
      #menuList{
        position: fixed;
        width: 100%;
        background-color: $blue;
        position: fixed;
        top:70px;
        left:0;
        height: calc(100% - 70px);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 2rem;
        padding-bottom: 50px;
        bottom: 0;
        right: 0;
        z-index: 9;
        /* &::after{
          content: '';
          height: calc(100vh - 70px);
          width: 100vw;
          z-index:9;
          
          background-color: $blue;
        } */
        a{
          font-size: 3rem;
          height: calc(80% / 3);
          display: flex;
          align-items: center;
          padding: 2rem;
          color: white;
          font-weight: bold;
          z-index: 10;
          border-bottom: 2px solid white;
          &#lavora-con-noi{
            background-color: $yellow;
            margin: 10px 20px;
            border-radius: 1rem;
            height: 20%;
            display: flex;
            justify-content: center;
          }
        }
      }
    }
  }
}

// smartphones
@media (max-width: 576px) { 

}






</style>

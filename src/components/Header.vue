<template>
  <header id="header">
    <section id="large-header" class="container ma-auto d-flex align-center justify-space-between">
      <div id="logo">
        <img src="@/assets/immagini/logo/logo.png" alt="">
        <h5>Professione <br> Assistenza <br> e Cura</h5>
      </div>

      <a href="">CHI SIAMO</a>
      <a href="">SERVIZI</a>
      <a href="">CONTATTI</a>
      <a href="" id="lavora-con-noi">LAVORA CON NOI</a>
    </section>

    <section id="small-header">
      <div id="logo">
        <img src="@/assets/immagini/logo/logo.png" alt="">
        <h5>Professione <br> Assistenza <br> e Cura</h5>
      </div>
      <button @click="toggleMenu">
        <HamburgerMenu></HamburgerMenu>
      </button>
      <div v-if="menuOpen" id="menuList">
        <a href="">CHI SIAMO</a>
        <a href="">SERVIZI</a>
        <a href="">CONTATTI</a>
        <a href="" id="lavora-con-noi">LAVORA CON NOI</a>
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
      console.log({windowWidth});
      return windowWidth;
    }
  },
  methods: {
    toggleMenu(){
      this.menuOpen = !this.menuOpen
      console.log("click");
    }
  }
}
</script>

<style lang="scss" scoped>
  /* GENERIC  */
  header{
    height: $headerHeight;
    width: 100%;
    background-color: $darkBlue;
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


// Large devices (desktops, less than 1200px)
@media (max-width: 1200px) { 
  header{
    padding: 0 2rem;
    #large-header{
      .container{
        display: flex;
        justify-content: space-around;
      }
    }
  }
}

// Medium devices (tablets, less than 992px)
@media (max-width: 992px) { 

}

// Small devices (landscape phones, less than 768px)
@media (max-width: 768px) { 
  header{
    width: 100%;
    #large-header{
      display: none;
    }
    #small-header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      width: 100%;
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
        height: $viewPort;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 2rem;
        bottom: 0;
        right: 0;
        a{
          font-size: 3rem;
          height: calc(80% / 3);
          display: flex;
          align-items: center;
          padding: 2rem;
          color: white;
          font-weight: bold;
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

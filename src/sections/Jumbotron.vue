<template>
  <section id="jumbotron" class="d-flex align-end">
    <div id="catchy" class="h-80 w-100 d-flex align-center justify-space-around flex-column">
      <img class="animate__animated animate__backInDown" src="@/assets/immagini/logo/logo.png" alt="">
      <div class="d-flex flex-column align-center">
        <h1 class="animate__animated animate__fadeInDown">PROFESSIONE ASSISTENZA E CURA</h1>
        <h3 class="animate__animated animate__fadeInUp">IL TUO AIUTO IMMEDIATO NEL MOMENTO DEL REALE BISOGNO</h3>
      </div>
      <div id="action" @click="scrollToTargetAdjusted('chi-siamo')">
        <h5>SCOPRI CHI SIAMO E I NOSTRI SERVIZI</h5>
        <img class="animate__animated animate__pulse animate__infinite	" src="@/assets/immagini/jumbotron/arrow_down.svg" alt="">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Jumbotron',
  methods: {
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

<style lang="scss">

  //generic
  #jumbotron{
    height: 100vh;
    width: 100%;
    background-image: url("~@/assets/immagini/jumbotron/mani.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    overflow: hidden;
    #catchy{
      z-index: 2;
      padding: 0 1rem;
      img{
        width: 15rem;
        height: auto;
        animation-delay: 0.5s;
      }
      h1{
        font-size: 4rem;
        font-weight: bold;
        color: white;
        text-align: center;
        animation-delay: 1.5s;
      }
      h3{
        font-size: 1.7rem;
        color: white;
        font-weight: 200;
        text-align: center;
        animation-delay: 1.5s;
      }
      

      #action{
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h5{
          font-size: 1rem;
          color: white;
          font-weight: 200;
        }
        img{
          width: 3rem;
          height: 3rem;
        }
      }
    }
    &::after{
      content: "";
      position: absolute;
      top: 0; 
      left: 0;
      width: 100%; 
      height: 100vh;
      background-color: $darkBlue;
      opacity: 0.3;
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

  }

  // smartphones
  @media (max-width: 575.98px) { 
    #jumbotron{
      height: 100vh;
      width: 100%;
      background-image: url("~@/assets/immagini/jumbotron/mani_verticali.jpg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      overflow: hidden;
      #catchy{
        #action{
          margin-bottom: 50px;
        }
      }
    }
  }
</style>

<template>
  <section id="jumbotron" class="d-flex align-end">
    <div id="catchy" class="h-70 w-100 d-flex align-center justify-space-around flex-column">
      <img src="@/assets/immagini/logo/logo.png" alt="">
      <div class="d-flex flex-column align-center">
        <h1>PROFESSIONE ASSISTENZA E CURA</h1>
        <h3>IL TUO AIUTO IMMEDIATO NEL MOMENTO DEL REALE BISOGNO</h3>
      </div>
      <div id="action">
        <h5>SCOPRI CHI SIAMO E I NOSTRI SERVIZI</h5>
        <img src="@/assets/immagini/jumbotron/arrow_down.svg" alt="">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Jumbotron',
}
</script>

<style lang="scss">
  #jumbotron{
    height: 100vh;
    width: 100%;
    background-image: url("~@/assets/immagini/jumbotron/jumbotron.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    #catchy{
      z-index: 2;
      img{
        width: 200px;
        height: auto;
      }
      h1{
        font-size: 80px;
        font-weight: bold;
        color: white;
      }
      h3{
        font-size: 40px;
        color: white;
        font-weight: 200;
      }
      

      #action{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h5{
          font-size: 20px;
          color: white;
          font-weight: 200;
        }
        img{
          width: 50px;
          height: 50px;
        }
      }
    }
    &::after{
      content: "";
      position: absolute;
      top: 0; 
      left: 0;
      width: 100%; 
      height: 100%;
      background-color: $blue;
      opacity: 50%;
    }
  }
</style>

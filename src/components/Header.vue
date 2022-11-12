<template>
  <header id="header">
    <section class="container ma-auto d-flex align-center justify-space-between">
      <div id="logo">
        <img src="@/assets/immagini/logo/logo.png" alt="">
        <h5>Professione <br> Assistenza <br> e Cura</h5>
      </div>

      <a href="">CHI SIAMO</a>
      <a href="">SERVIZI</a>
      <a href="">CONTATTI</a>
      <a href="" id="lavora-con-noi">LAVORA CON NOI</a>
    </section>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss" scoped>
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
    .container{
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
          font-size: 1.5rem;
          color: white;
        }
      }

      a{
        color: white;
        text-decoration: none;
        font-weight: bold;
        font-size:1.5rem;
        &#lavora-con-noi{
          background-color: $yellow;
          padding: 10px 20px;
          border-radius: 30px;
        }
      }
      
    }
  }
</style>

<template>
  <div id="banner-aiuto">
    <h2>HAI BISOGNO DI AIUTO URGENTE?</h2>
    <a href="tel:0521839583">CHIAMA SUBITO</a>
  </div>
</template>

<script>
export default {
  name: 'BannerAiuto',
}
</script>

<style lang="scss" scoped>
  #banner-aiuto{
    display: none;
    box-shadow: 10px 10px 10px 10px black;
    width: 100vw;
    max-height: 50px;
    background-color: $red;
    position: sticky;
    bottom: 0;
    left: 0;
    z-index: 10;
    align-items: center;
    justify-content: space-around;
    padding: 1rem;
    h2{
      font-size: 1.2rem;
      color: white;
      //width: 70%;
      text-align: center;
    }
    a{
      background-color: white;
      border-radius: 3rem;
      padding: 1rem;
      color: $red;
      width: 30%;
      font-weight: bold;
      text-align: center;
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
    #banner-aiuto{
      display: flex;
    }
  }

</style>

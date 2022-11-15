<template>
  <div id="servizi">
    <h2>SERVIZI</h2>
    <h3>REPERIBILITA H24</h3>
    <div class="container">
      <Quote></Quote>
      <Cards></Cards>
    </div>
  </div>
</template>

<script>
import Quote from '@/components/Servizi/Quote.vue'
import Cards from '@/parts/Servizi/Cards.vue'
export default {
  name: 'Servizi',
  components: {
    Quote,
    Cards
  }
}
</script>

<style lang="scss" scoped>
  //generic
  #servizi{
    background-color: $lightBlue;
    padding: 2rem;
    h2{
      font-size: 3rem;
      text-align: center;
      color: white;
    }
    h3{
      font-size: 2rem;
      text-align: center;
      color: white;
      font-weight: 200;
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

  }
</style>

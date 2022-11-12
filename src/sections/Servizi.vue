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
</style>

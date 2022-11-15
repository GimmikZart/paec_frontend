<template>
  <section id="chi-siamo">
    <Description></Description>
    <Team></Team>
    <Targets></Targets>
  </section>
</template>

<script>
import Description from '../parts/ChiSiamo/Description.vue'
import Team from '../parts/ChiSiamo/Team.vue'
import Targets from '@/parts/ChiSiamo/Targets.vue'
export default {
  name: 'ChiSiamo',
  components: {
    Description,
    Team,
    Targets
  }
}
</script>

<style scoped>
  
</style>

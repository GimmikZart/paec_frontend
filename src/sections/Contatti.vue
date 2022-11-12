<template>
  <section id="contatti">
    <!-- MAP -->
    <div id="map-container">
      <Map></Map>
    </div>
    <!-- INFO -->
    <div id="info">
      <ContactInfo></ContactInfo>
    </div>
  </section>
</template>

<script>
import Map from '@/parts/Contatti/Map.vue'
import ContactInfo from '@/parts/Contatti/ContactInfo.vue'
export default {
  name: 'Contatti',
  components: {
    Map,
    ContactInfo
  }
}
</script>

<style lang="scss" scoped>
  #contatti{
    height: $viewPort;
    display: flex;
    #map-container{
      width: 50%;
      height: 100%;
    }
    #info{
      width: 50%;
    }
  }
</style>

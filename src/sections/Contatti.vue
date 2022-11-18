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
  //generic
  #contatti{
    height: $viewPort;
    display: flex;
    #map-container{
      width: 50%;
      height: 100%;
    }
    #info{
      padding-top: 1rem;
      width: 50%;
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
    #contatti{
    padding-top: 2rem ;
    flex-direction: column-reverse;
    #map-container{
      width: 100%;
      aspect-ratio: 1 / 1;
      height: auto;
    }
    #info{
      width: 100%;
    }
  }
  }

  // smartphones
  @media (max-width: 575.98px) { 

  }
</style>

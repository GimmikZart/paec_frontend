<template>
  <section>
    <div id="map"></div>
    <div class="buttons">
      <button @click="markersVisible">MOSTRA SERVIZI</button>
      <button @click="zoomOut">MOSTRA DALL'ALTO</button>
      <button @click="toggle3D">{{treDButton}}</button>
    </div>
  </section>
</template>
<script src="https://api.tomtom.com/maps-sdk-for-web/cdn/5.x/5.60.0/maps/maps-web.min.js"></script>
<script src="https://api.tomtom.com/maps-sdk-for-web/cdn/5.x/5.60.0/services/services-web.min.js"></script>
<script>
export default {
  name: 'Map',
  data: () => ({
    zoom: 12,
    markers: false,
    treD: true
  }),
  computed: {
    treDButton(){
      return this.treD? 'DISATTIVA 3D' : 'ATTIVA 3D'
    }
  },
  methods: {
    mapCreation(){
      console.log('MAP');
      const tt = window.tt; 
      
      console.log('TEST');
      var placeCoordinates = [ 10.323827215877811, 44.7833422487341 ];
      var parkingCoordinates = [10.325009918676923, 44.78270031005824];
      var bus1Coordinates = [10.32520075910985, 44.78367672759646];
      var bus2Coordinates = [10.324198422915403, 44.78359166529155]

  
      var map = tt.map({
        container: 'map',
        key: 'GA5MivJiK0ZxoB9tGaVHIhVkwckf4jOc',
        style: 'tomtom://vector/1/basic-main',
        center: placeCoordinates,
        pitch: this.treD ? 50 : null,
        zoom: this.zoom
      });
      
      

      if (this.markers) {
        var customMarkerPark = document.createElement('div');
        customMarkerPark.id = 'customMarkerPark';

        var customMarkerBus1 = document.createElement('div');
        customMarkerBus1.id = 'customMarkerBus1';

        var customMarkerBus2 = document.createElement('div');
        customMarkerBus2.id = 'customMarkerBus2';

        var markerPark = new tt.Marker({element: customMarkerPark}).setLngLat(parkingCoordinates).addTo(map);
        var markerBus1 = new tt.Marker({element: customMarkerBus1}).setLngLat(bus1Coordinates).addTo(map);
        var markerBus2= new tt.Marker({element: customMarkerBus2}).setLngLat(bus2Coordinates).addTo(map);
      } else {
        if(this.treD){
          /* ROTATE */
          map.on('load', function() { requestAnimationFrame(rotateCamera)});
          function rotateCamera(timestamp) {
              var rotationDegree = timestamp / 200 % 360;
              map.rotateTo(rotationDegree, { duration: 0 });
              requestAnimationFrame(rotateCamera);
          }
        /* END ROTATE */
        }
        
      }

      var customMarkerPlace = document.createElement('div');
      customMarkerPlace.id = 'customMarkerPlace';

      var markerPlace = new tt.Marker({element: customMarkerPlace}).setLngLat(placeCoordinates).addTo(map);
    },
    markersVisible(){
      console.log('vis');
      this.zoom = 16.5
      this.markers = true
      this.mapCreation()
    },
    zoomOut(){
      console.log('zoom');
      this.zoom = 12
      this.markers = false
      this.mapCreation()
    },
    toggle3D(){
      this.treD = !this.treD
      this.mapCreation()
    }
  },
  mounted(){
    this.mapCreation()
  },
  updated(){
    this.mapCreation()
  }
}
</script>


<style lang="scss" scoped>

  //generic
  section{
    width: 100%;
    height: 100%;
    position: relative;
    #map{
      width: 100%;
      height: 100%;
    }
    .buttons{
      width: 100%;
      height: 10%;
      position: absolute;
      display: flex;
      justify-content: space-around;
      bottom: 2rem;
      left: 0;
      background: none;
      z-index: 2;
      button{
        width: calc(100% / 4);
        height: 100%;
        border-radius: 3rem;
        border: none;
        -webkit-box-shadow: inset 0px -5px 15px -5px #000000;
        -moz-box-shadow: inset 0px -5px 15px -5px #000000;
        -o-box-shadow: inset 0px -5px 15px -5px #000000;
        box-shadow: inset 0px -5px 15px -5px #000000;
        //border: 1px solid rgba(0, 0, 0, 0.5);
        background: $darkBlue;
        color: white;
        cursor: pointer;
        font-weight: bold;
        font-size: 1rem;
      }
    }
  }
  
  ::v-deep #customMarkerPlace{
    background-image: url('~@/assets/immagini/contatti/logo.jpg');
    background-size:cover;
    background-position: center;
    border-radius: 100%;
    border: 2px solid black;
    width: 50px;
    height: 50px;
  }

  ::v-deep #customMarkerPark{
    background-image: url('~@/assets/immagini/contatti/parking-logo.jpg');
    background-size:cover;
    background-position: center;
    border: 2px solid black;
    border-radius: 0.2rem;
    width: 30px;
    height: 30px;
  }

  ::v-deep #customMarkerBus1{
    background-image: url('~@/assets/immagini/contatti/bus.jpg');
    background-size:cover;
    background-position: center;
    border-radius: 0.2rem;
    border: 2px solid black;
    width: 30px;
    height: 30px;
  }
  ::v-deep #customMarkerBus2{
    background-image: url('~@/assets/immagini/contatti/bus.jpg');
    background-size:cover;
    background-position: center;
    border-radius: 0.2rem;
    border: 2px solid black;
    width: 30px;
    height: 30px;
  }

  /* MEDIA QUERIES */
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

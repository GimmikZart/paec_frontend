<template>
  <div id="badge">
      <div id="left">
        <img src="@/assets/immagini/contatti/parking-logo.jpg" alt="">
        <h6>GRATUITO</h6>
      </div>
      <p>
        Siamo a Parma in <b>via Ognibene 2 </b> <br> 
        nel quartiere <b>Montanara</b> <br>
        adiacenti ad un <b>ampio parcheggio gratuito</b> <br>
        e alla fermata degli <b>autobus 2, 7, 13 e 21</b> 
      </p>
      <div id="right">
        <img src="@/assets/immagini/contatti/bus.jpg" alt="">
        <h6>2, 7, 13 E 21</h6>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Badge',
}
</script>

<style lang="scss" scoped>
//generic
#badge{
  display: flex;
  background-color: lightgrey;
  padding: 2rem 0rem;
  margin: 1rem 0;
  p{
    width: 50%;
    text-align: center;
    font-size: 1.2rem;
  }
  #left, #right{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 25%;
    img{
      height: 5rem;
    }
    h6{
      font-size: 1rem;
      font-weight: bold;
    }
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

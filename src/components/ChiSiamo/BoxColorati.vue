<template>
  <div class="box-colorati" :class="`bc-${boxInfo.color}`">
    <div id="circle">
      <img :src="getPhoto" alt="">
    </div>
    <div id="text" >
      <p v-html="boxInfo.htmlText"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoxColorati',
  props: ["boxInfo"],
  computed: {
    getPhoto(){
      return require('@/assets/immagini/chi_siamo/' + this.boxInfo.icon) 
    }
  },
  created: function(){
    
  }
  
}
</script>

<style lang="scss" scoped>
//generic
.box-colorati{
  padding: 2rem;
  display: flex;
  align-items: center;
  height: calc(100% / 3);
  min-height: 250px;
  width: 100%;
  #circle{
    height: auto;
    aspect-ratio : 1 / 1;
    width: 70%;
    border: 2px solid white;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    img{
      width: 70%;
      height: auto;
      fill: white;
      stroke: white;
    }
  }
  #text{
    height: 80%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      color: white;
      font-size: 1.5rem;
    }
  }
}

// Large devices (desktops, less than 1200px)
@media (max-width: 1200px) { 

}

// Medium devices (tablets, less than 992px)
@media (max-width: 992px) { 

}

// Small devices (landscape phones, less than 768px)
@media (max-width: 768px) { 
  .box-colorati{
    width: calc(100% / 3);
    min-height: 0;
    height: 150px;
  }
}

// smartphones
@media (max-width: 576px) { 
  .box-colorati{
    width: 100%;
    min-height: 0;
    height: 150px;
    #circle{
      height: 90%;
      width: auto;
    }
    #text{
      p {
        color: white;
        font-size: 2rem;
      }
    }
  }
}

</style>

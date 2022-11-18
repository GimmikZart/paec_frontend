<template>
  <a :href="buttonData.href" id="action-button" :class="`bc-${buttonData.color1}`">
    <span id="content">{{buttonData.content}}</span>
    <small :class="`c-${buttonData.color2}`">{{buttonData.title}}</small>
    <div class="icon-box" :class="`bc-${buttonData.color2}`">
      <img :src="getIcon" alt="">
    </div>
  </a>
</template>

<script>
export default {
  name: 'ActionButton',
  props: ['buttonData'],
  computed: {
    getIcon(){
      return require('@/assets/immagini/chi_siamo/' + this.buttonData.icon) 
    }
  },
  created(){
    
  }
}
</script>

<style lang="scss" scoped>
//generic
#action-button{
  width: 70%;
  //height: 80px;
  display: flex;
  align-items: center;
  padding: 1rem;
  margin: 2rem auto;
  position: relative;
  #content{
    width: 100%;
    display: block;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    color: black;
  }
  small{
    position: absolute;
    font-size: 1.5rem;
    font-weight: bold;
    top: -1rem;
    left: 10%;
  }
  .icon-box{
    height: 120%;
    aspect-ratio: 1 / 1;
    position: absolute;
    top:50%;
    border-radius: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(-70% , -50%);
    img{
      height: 50%;
    }



  }
}

// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) { 

}

// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) { 
  #action-button{
    #content{
      font-size: 1.5rem;
    }
    small{
      font-size: 1.3rem;
      top: -0.8rem;
    }
  }
}

// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) { 

}

// smartphones
@media (max-width: 575.98px) { 

}
</style>

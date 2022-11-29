<template>
  <div id="quote">
    <img src="@/assets/immagini/servizi/quote.svg" alt="">
    <p>
      Professione Assistenza e Cura garantisce competenza, 
      serietà ed affidabilità.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Quote',
}
</script>

<style lang="scss" scoped>
//generic
#quote{
  margin: 3rem;
  border: 3px solid white;
  border-radius: 30px;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.15);
  position: relative;
  img{
    position: absolute;
    top:-4rem;
    left: -2rem;
    width: 10%;
    transform: rotate(180deg);
  }
  p{
    width: 80%;
    margin: auto;
    font-size: 2rem;
    font-style: italic;
    text-align: center;
    color: white;
    font-weight: 400;
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
  #quote{
    img{
      position: absolute;
      top:-2rem;
      left: -2rem;
      width: 10%;
    }
  }
}

// smartphones
@media (max-width: 575.98px) { 
  #quote{
    img{
      position: absolute;
      top:-2rem;
      left: -2rem;
      width: 12%;
    }
    p{
      width: 90%;
      margin: auto;
      font-size: 2rem;
      text-align: center;
      color: white;
      font-weight: 400;
    }
  }
}
</style>

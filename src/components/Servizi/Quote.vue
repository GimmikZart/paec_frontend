<template>
  <div id="quote">
    <img src="@/assets/immagini/servizi/quote.svg" alt="">
    <p>
      Professione Assistenza e Cura garantisce serietà, 
      affidabilità, alta reperibilità e calore: il quid in più senza il quale 
      non potrebbero prendersi cura dei nostri affetti.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Quote',
}
</script>

<style lang="scss" scoped>
#quote{
  width: 100%;
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
    text-align: center;
    color: white;
    font-weight: 400;
  }
}
</style>

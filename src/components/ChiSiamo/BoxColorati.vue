<template>
  <div class="box-colorati" :class="`bc-${color}`">
    <div id="circle">
      <span>icona</span>
    </div>
    <div id="text" >
      <p v-html="htmlText"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoxColorati',
  props: ["color", "htmlText"]
}
</script>

<style lang="scss" scoped>
.box-colorati{
  padding: 2rem;
  display: flex;
  align-items: center;
  height: calc(100% / 3);
  width: 100%;
  #circle{
    height: 80%;
    aspect-ratio : 1 / 1;
    width: auto;
    border: 2px solid white;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
  #text{
    height: 80%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      color: white;
      font-size: 30px;
    }
  }
}

</style>

<template>
  <div id="target">
    <div class="layer front" :class="{'reverse': isEven}">
      <div class="circle" :class="{'reverse': isEven}">
        <span>{{index}}</span>
      </div>
      <div class="text" :class="{'reverse': isEven}">
        <h3>{{target.title}}</h3>
        <h4 v-if="target.subTitle">{{target.subTitle}}</h4>
      </div>
    </div>
    <div class="layer back" :class="{'reverse': isEven}"></div>
  </div>
</template>

<script>
export default {
  name: 'Target',
  props: ['target', 'index'],
  computed: {
    isEven(){
      return this.index % 2 == 0
    }
  }
}
</script>

<style lang="scss" scoped>
  //generic
  #target{
    width: 100%;
    position: relative;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    .layer{
      width: 80%;
      height: 150px;
      border-radius: 20px;
      .circle{
        height: 100%;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        aspect-ratio: 1 / 1;
        border-radius: 100%;
        border: 5px solid white;
        background-color: $orange2;
        transform: translate(-70% , 0%);
        &.reverse{
          right: 0;
          transform: translate(70% , 0%);
        }
        span{
          font-size: 5rem;
          color: white;
          font-weight: bold;
        }
      }
      &.front{
        background-color: $orange3;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        position: relative;
        &.reverse{
          align-items: flex-end;
        }
        .text{
          width: 80%;
          margin-left: 5rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          &.reverse{
            margin-left: 0;
            margin-right: 5rem;
            align-items: flex-end;
            text-align: end;
          }
          h3{
            font-size: 2rem;
            color: $darkBlue;
            font-weight: bold;
          }
          h4{
            font-size: 1.2rem;
            color: $darkBlue;
            font-weight: 200;
          }
        }
      }
      &.back{
        position: absolute;
        z-index: -1;
        background-color: $orange;
        transform: translate(1rem, 1rem);
        &.reverse{
          transform: translate(-1rem, 1rem);
        }
      } 
    }
  }

  // Large devices (desktops, less than 1200px)
  @media (max-width: 1199.98px) { 

  }

  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) { 
    #target{
      width: 90%;
      margin: 2rem auto;
      .layer{
        height: 100px;
      }
    }
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px) { 

  }

  // smartphones
  @media (max-width: 575.98px) { 
    #target{
      width: 80%;
      margin: 1rem auto;
      .layer{
        height: 100px;
        width: 100%;
        .circle{
          height: 70%;
        }
        &.front{
          .text{
            h3{
              font-size: 1.5rem;
              color: $darkBlue;
              font-weight: bold;
            }
            h4{
              font-size: 1rem;
              color: $darkBlue;
              font-weight: 200;
            }
          }
        }
      }
    }
  }
</style>

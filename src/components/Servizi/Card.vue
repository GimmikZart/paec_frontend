<template>
  <div class="card">
    <article>
      <div class="title-box" :class="'bc-' + info.color">
        <div class="circle">
          <img :src="getIcon" alt="">
        </div>
        <h2>{{info.title}}</h2>
      </div>
      <div class="service-list">
        <div class="badge" :class="'bc-' + info.color"></div>
        <ul class="list" :class="{'flex-row flex-wrap': sideList}">
          <li class="list-item" :class="{'w-50': sideList}" v-for="(service, index) in info.services" :key="index">
            <div class="point" :class="'bc-' + info.color"></div>
            {{service}}
          </li>
        </ul>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ["info", "sideList"],
  computed: {
    getIcon(){
      return require('@/assets/immagini/servizi/' + this.info.icon) 
    }
  }
}
</script>

<style lang="scss" scoped>
  //generic
  .card{
    height: 100%;
    width: 100%;
    padding: 0.5rem;
    article{
      height: 100%;
      width: 100%;
      border: 3px solid white;
      border-radius: 20px;
      overflow: hidden;
      .title-box{
        height: 100px;
        padding: 1rem;
        display: flex;
        align-items: center;
        .circle{
          width: auto;
          aspect-ratio: 1 / 1;
          height: 100%;
          border-radius: 100%;
          background-color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          img{
            height: 70%;
          }
        }
        h2{
          margin-left: 1rem;
          color: white;
          font-size: 1.5rem;
        }
      }
      .service-list{
        height: calc(100% - 100px);
        min-height: 150px;
        width: 100%;
        background-color: white;
        padding: 0 1rem;
        display: flex;
        .badge{
          height: 100%;
          width: 50px;
          opacity: 0.2;
        }
        .list{
          height: 100%;
          width: calc(100% - 50px);  
          padding: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          .list-item{
            list-style: none;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            padding: 0.3rem;
            margin-bottom: 0.5rem;
            display: flex;
            align-items: center;
            .point{
              width: 5px;
              height: 5px;
              border-radius: 100%;
              margin-right: 0.5rem;
            }
          }      
        }
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
    .card{
      height: auto;
    }
    .card{
      height: auto;
      article{
        .service-list{
          .list{
            flex-wrap: nowrap!important;
            flex-direction: column!important;
            .list-item{
              width: 100%!important;
            }
          }
        }
      }
    }
  }

  // smartphones
  @media (max-width: 575.98px) { 

  }
</style>

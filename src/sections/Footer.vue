<template>
  <div id="footer">
    <div id="sopra">
      <div id="logo">
        <img src="../assets/immagini/logo/logo.png" alt="">
        <h5>Professione Assistenza e Cura</h5>
      </div>
      <div id="powered">
        <span>Powered by <a href="https://www.linkedin.com/in/gianmarco-montanari-46997183/">G. Montanari</a>  &amp; <a href="https://www.adserviziofarmaci.com/contact">AD Servizi</a></span>
      </div>
    </div>
    <div id="sotto">
      <span>Privacy Policy in accordo a GDPR - Regolamento 2016/679</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
  #footer{
    width: 100%;
    border: none;
    padding: 1rem 3rem;
    background-color: $darkBlue;
    #sopra{
      height: 50px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      #logo{
        height: 100%;
        display: flex;
        align-items: center;
        img{
          height: 100%;
          width: auto;
          margin-right: 1rem;
        }
        h5{
          font-size: 0.9rem;
          color: white;
        }
      }
      #powered{
        span {
          font-size: 0.9rem;
          color: white;
          a{
            text-decoration: none;
            color: white;
            font-weight: bold;
            margin: 0 0.5rem;
          }
        }
      } 
    }
    #sotto{
      span{
        display: block;
        text-align: center;
        font-size: 0.7rem;
        color: rgba(255, 255, 255, 0.7);
      }
    }
  }

  // smartphones
  @media (max-width: 576px) { 
    #footer{
      padding: 1rem;
      #sopra{
        height: 40px;
        #logo{
          height: 100%;
          display: flex;
          align-items: center;
          img{
            height: 100%;
            width: auto;
            margin-right: 1rem;
          }
          h5{
            font-size: 0.9rem;
            color: white;
          }
        }
        #powered{
          span {
            font-size: 0.8rem;
            a{
              margin: 0 0.2rem;
            }
          }
        } 
      }
      #sotto{
        span{
          display: block;
          text-align: center;
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.7);
        }
      }
    }
  }
</style>

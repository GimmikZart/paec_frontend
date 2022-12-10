<template>
  <section id="contact-info">
    <h2>CONTATTI</h2>
    <Badge></Badge>
    <ActionButton v-for="(button, index) in buttons" :key="index" :buttonData="button"></ActionButton>
  </section>
</template>

<script>
import Badge from '@/components/Contatti/Badge.vue'
import ActionButton from '@/components/Contatti/ActionButton.vue'
export default {
  name: 'ContactInfo',
  components:{
    Badge,
    ActionButton
  },
  data: () => ({
    buttons: [
      {
        color1: 'green2',
        color2: 'green',
        icon: 'telephone.svg',
        title: 'Numero di telefono',
        content: '0521 576875',
        href: 'tel:0521576875'
      },
      {
        color1: 'yellow3',
        color2: 'yellow2',
        icon: 'whatsapp.svg',
        title: 'Numero di cellulare',
        content: '324 9557683',
        href: 'https://wa.me/+393249557683'
      },
      {
        color1: 'blue3',
        color2: 'blue2',
        icon: 'location.svg',
        title: 'Indirizzo',
        content: 'Via Ognibene 2, PR',
        href: 'https://goo.gl/maps/fQpRjwGZZoQPDG23A'
      },
      {
        color1: 'red3',
        color2: 'red2',
        icon: 'email.svg',
        title: 'Email',
        content: 'info@pacparma.it',
        href: 'mailto:info@pacparma.it'
      }
    ]
  }),
}
</script>

<style lang="scss" scoped>
//generic
#contact-info{
  width: 100%;
  height: 100%;
  h2{
    font-size: 3rem;
    text-align: center;
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

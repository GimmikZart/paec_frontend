<template>
    <div id="nav-icon3" ref="hamburger">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>

<script>
export default {
    name: 'HamburgerMenu',
    props:['isOpen'],
    watch: {
        isOpen: function(){
            this.toggleOpen()
        }
    },
    methods: {
        toggleOpen(){
            this.$refs.hamburger.classList.toggle('open');
        }
    }
}
</script>

<style lang="scss" scoped>
    #nav-icon3 {
        width: 50px;
        height: 40px;
        position: relative;
        -webkit-transform: rotate(0deg) scale(0.7);
        -moz-transform: rotate(0deg) scale(0.7);
        -o-transform: rotate(0deg) scale(0.7);
        transform: rotate(0deg) scale(0.7);
        -webkit-transition: .5s ease-in-out;
        -moz-transition: .5s ease-in-out;
        -o-transition: .5s ease-in-out;
        transition: .5s ease-in-out;
        cursor: pointer;
    }

    #nav-icon3 span {
        display: block;
        position: absolute;
        height: 5px;
        width: 100%;
        background: white;
        border-radius: 9px;
        opacity: 1;
        left: 0;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .25s ease-in-out;
        -moz-transition: .25s ease-in-out;
        -o-transition: .25s ease-in-out;
        transition: .25s ease-in-out;
    }
    /* Icon 3 */
    #nav-icon3 span:nth-child(1) {
        top: 0px;
    }

    #nav-icon3 span:nth-child(2),#nav-icon3 span:nth-child(3) {
        top: 18px;
    }

    #nav-icon3 span:nth-child(4) {
        top: 36px;
    }

    #nav-icon3.open span:nth-child(1) {
        top: 18px;
        width: 0%;
        left: 50%;
    }

    #nav-icon3.open span:nth-child(2) {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    #nav-icon3.open span:nth-child(3) {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }

    #nav-icon3.open span:nth-child(4) {
        top: 18px;
        width: 0%;
        left: 50%;
    }
</style>
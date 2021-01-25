<template>
  <div>
    <vue-particles
        class="part"
        color="#fff"
        :particleOpacity="1"
        :particlesNumber="60"
        shapeType="circle"
        :particleSize="4"
        linesColor="#fff"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
      <bet-menu class="menu"></bet-menu>
  </div>
</template>

<script>
import BetMenu from "@/components/circlemenu"
export default {
  components:{
    BetMenu,
  }
}
</script>

<style>
.part{
background-image: linear-gradient(to right, #597266 0%, #5d4157 100%);
height: 90vh;
}
.menu{
  position: fixed;
  right: 50%;
  top:50%
}
</style>
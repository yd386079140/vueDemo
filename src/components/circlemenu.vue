<template>
  <div>
    <circle-menu type="middle" :number="4" animate="animated jello" mask='white' circle>
    <button type="button" slot="item_btn"></button>
    <a slot="item_1" class="fa fa-twitter fa-lg"></a>
    <a slot="item_2" class="fa fa-weixin fa-lg"></a>
    <a slot="item_3" class="fa fa-weibo fa-lg"></a>
    <a slot="item_4" class="fa fa-github fa-lg"></a>
  </circle-menu>
  <circle-menu type="middle-around" :number="4" animate="animated jello" mask='black' btn circle class="butt">
      <a slot="item_1" class="iconfont icon-account"></a>
      <a slot="item_2" class="iconfont icon-account"></a>
      <a slot="item_3" class="iconfont icon-account"></a>
      <a slot="item_4" class="iconfont icon-account"></a>
  </circle-menu>
    </div>
</template>

<script>
import CircleMenu from 'vue-circle-menu'
export default {
  components: {
    CircleMenu
  },
  data(){
    return{

    }
  }
}
</script>

<style>
.butt{
  margin-top: 100px;
}
</style>
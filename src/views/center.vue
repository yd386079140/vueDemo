<template>
  <div>
    <progress-bar
      :Cardwidth="90"
      :Cardheight="30"
      :width="value"
      :title='title'
      :rightSize='rightSize'
      :ColorIndex="2">>
      </progress-bar>

      <van-slider bar-height='4' v-model="value" @change="onChange" class="slider"/>

      <div class="btn">
        <van-button type="primary">主要按钮</van-button>
        <van-button type="info">信息按钮</van-button>
        <van-button type="default">默认按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button type="danger">危险按钮</van-button>
      </div>


  </div>
</template>

<script>
import Vue from 'vue';
import { Slider,Toast,Button } from 'vant';
Vue.use(Slider,Toast,Button);
import 'vant/lib/button/style';
import 'vant/lib/slider/style';
import 'vant/lib/toast/style';

import ProgressBar from '@/components/progressbar'
export default {
  components: {
    ProgressBar,
    'van-slider': Slider,
    'van-button': Button
  },
  data(){
    return{
      title:'今日消耗流量',
      rightSize:'8GB',
      // progre:20,
      value: 50
    }
  },
  methods:{
    onChange(value) {
      Toast('当前值：' + value);
    },
  }
}
</script>

<style scoped>
.btn{
  margin: 300px auto;
  width: 50vw;
}
.slider{
  margin: 100px auto;
  width: 50vw;
}
</style>
<template>
  <div>
    <progress-bar
      :Cardwidth="90"
      :Cardheight="30"
      :width="value1"
      :title='title'
      :rightSize='rightSize'
      :ColorIndex="2">>
    </progress-bar>
    <progress-bar
      :Cardwidth="90"
      :Cardheight="30"
      :width="value2"
      :title='title'
      :rightSize='rightSize'
      :ColorIndex="0">>
    </progress-bar>
    <progress-bar
      :Cardwidth="90"
      :Cardheight="30"
      :width="value3"
      :title='title'
      :rightSize='rightSize'
      :ColorIndex="1">>
    </progress-bar>
    <progress-bar
      :Cardwidth="90"
      :Cardheight="30"
      :width="value4"
      :title='title'
      :rightSize='rightSize'
      :ColorIndex="3">>
    </progress-bar>

    <div class="box-slider">
      <van-slider bar-height='4' v-model="value1" @change="onChange1" class="slider"/>
      <van-slider bar-height='4' v-model="value2" @change="onChange2" class="slider"/>
      <van-slider bar-height='4' v-model="value3" @change="onChange3" class="slider"/>
      <van-slider bar-height='4' v-model="value4" @change="onChange4" class="slider"/>
    </div>


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

import { Slider,Toast,Button } from 'vant';

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
      value1: 50,
      value2: 50,
      value3: 50,
      value4: 50,
    }
  },
  methods:{
    onChange1(value1) {
      Toast('进度条1值为：' + value1);
    },
    onChange2(value2) {
      Toast('进度条2值为' + value2);
    },
    onChange3(value3) {
      Toast('进度条3值为' + value3);
    },
    onChange4(value4) {
      Toast('进度条4值为' + value4);
    },
  }
}
</script>

<style scoped>
.btn{
  margin: 30px auto;
  width: 50vw;
}
.slider{
  width: 30vw;
}
.box-slider{
  margin: 0 auto;
  width: 80vw;
  height: 30vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
}
</style>
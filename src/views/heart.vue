<template>
  <div>
    <div class="container">
      <div class="container-box" v-for="(item,index) in bookList" :key="index">
        <div class="imgIcon">
          <img :src="item.picture" alt="">
          <van-icon v-if="isLike" name="like-o" class="icon" @click="handleAdd(index)"/>
          <van-icon v-else name="like" color="red" class="icon"/>
        </div>
        <p>《{{item.title}}》</p>
        <p style="fontSize:15px;margin:5px">作者：{{item.author}}</p>
        <p class="book-info">{{item.info}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from 'vant';
import 'vant/lib/icon/style';
export default {
  components:{
    'van-icon':Icon
  },
  data(){
    return{
      isLike:true,
      bookList:[
        {
          picture:'https://bookcover.yuewen.com/qdbimg/349573/1018027842/180',
          title:'万族之劫',
          author:'老鹰吃小鸡',
          info:'重生过去、畅想未来、梦幻现实，再塑传奇人生！'
        },
        {
          picture:'https://bookcover.yuewen.com/qdbimg/349573/1018027842/180',
          title:'万族之劫',
          author:'老鹰吃小鸡',
          info:'重生过去、畅想未来、梦幻现实，再塑传奇人生！'
        },
        {
          picture:'https://bookcover.yuewen.com/qdbimg/349573/1018027842/180',
          title:'万族之劫',
          author:'老鹰吃小鸡',
          info:'重生过去、畅想未来、梦幻现实，再塑传奇人生！'
        },
        {
          picture:'https://bookcover.yuewen.com/qdbimg/349573/1018027842/180',
          title:'万族之劫',
          author:'老鹰吃小鸡',
          info:'重生过去、畅想未来、梦幻现实，再塑传奇人生！'
        },
        {
          picture:'https://bookcover.yuewen.com/qdbimg/349573/1018027842/180',
          title:'万族之劫',
          author:'老鹰吃小鸡',
          info:'重生过去、畅想未来、梦幻现实，再塑传奇人生！'
        },
        {
          picture:'https://bookcover.yuewen.com/qdbimg/349573/1018027842/180',
          title:'万族之劫',
          author:'老鹰吃小鸡',
          info:'重生过去、畅想未来、梦幻现实，再塑传奇人生！'
        },
        {
          picture:'https://bookcover.yuewen.com/qdbimg/349573/1018027842/180',
          title:'万族之劫',
          author:'老鹰吃小鸡',
          info:'重生过去、畅想未来、梦幻现实，再塑传奇人生！'
        },
        {
          picture:'https://bookcover.yuewen.com/qdbimg/349573/1018027842/180',
          title:'万族之劫',
          author:'老鹰吃小鸡',
          info:'重生过去、畅想未来、梦幻现实，再塑传奇人生！'
        },
        {
          picture:'https://bookcover.yuewen.com/qdbimg/349573/1018027842/180',
          title:'万族之劫',
          author:'老鹰吃小鸡',
          info:'重生过去、畅想未来、梦幻现实，再塑传奇人生！'
        },
        {
          picture:'https://bookcover.yuewen.com/qdbimg/349573/1018027842/180',
          title:'万族之劫',
          author:'老鹰吃小鸡',
          info:'重生过去、畅想未来、梦幻现实，再塑传奇人生！'
        },

      ]
    }
  },
  methods:{
    handleAdd(index){
      const isAdd = this.bookList.indexOf(index)
      if(isAdd === -1){
        this.isLike = !this.isLike
        }

    }
  }
}
</script>

<style>
.container{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  background-color: teal;
  width: 100vw;
}
.container-box{
  width: 160px;
  background-color: rgb(255, 255, 255);
  margin: 10px 0px;
  border-radius: 10px;
  position: relative;
}
.imgIcon img{
  width: 100%;
  height: 180px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}
.icon{
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 23px;
}
.book-info{
  margin: 5px;
  width: 150px;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

</style>
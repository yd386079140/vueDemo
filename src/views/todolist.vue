<template>
  <div class="cont">
    <input type="text" placeholder="随便输点" v-model="infomation" @keyup.enter="allInfo">
    <div class="btn">
      <button @click="allInfo">所有任务</button>
      <button @click="state = 1">未完成任务</button>
      <button @click="state = 2">已完成任务</button>
    </div>
    <div class="ulList">
      <ul>
        <li v-for="(item,index) in changeState"
        :key="index"
        :style="item.state !== 1 ?'text-decoration:line-through':''"
        :class="item.state !== 1 ? 'red' : ''"
        >
          <van-switch :value="item.state !== 1" @change="handleChange(index, item)"/>
          {{item.name}}
          <!-- :style="isRed ?'text-decoration:line-through':''" :class="isRed ? 'red' : ''" -->
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import * as Utils from '@/utils/utils'
import { Switch } from 'vant';
import 'vant/lib/switch/style';

export default {
  components:{
    'van-switch':Switch,
  },
  data(){
    return{
      state:0,
      infomation:'',
      todolist:[
        {id:1,name:'萨湖分化和辐射防护',state:1},
        {id:2,name:'和恢复数据机房回复',state:1}
        ],
    }
  },
  computed:{
    changeState(){
      console.log(this.state)
      if (this.state === 0) {
        return this.todolist
    }else{
        return this.todolist.filter(item => item.state == this.state)
      }
    }
  },
  methods:{
    allInfo(){
      this.state = 0
      if(this.infomation !== ''){
        const name = this.infomation
        const id = new Date().getTime()
        this.todolist.push({id: id, name: name, state: 1})
        this.infomation = ''
      }
    },
    handleChange (index, item) {
      const state = item.state === 1 ? 2 : 1
      this.$set(this.todolist, index, { ...item, state })
      console.log(this.todolist[index])
    }
  }
}

</script>

<style scoped>
.cont{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.btn{
  float: left;
}
.red{
  color: brown;
}
</style>
<template>
  <div class="cont">
    <input type="text" placeholder="随便输点" v-model="infomation" @keyup.enter="allInfo">
    <div class="btn">
      <button @click="allInfo">所有任务</button>
      <button @click="doingInfo">未完成任务</button>
      <button @click="doneInfo">已完成任务</button>
    </div>
    <div class="ulList">

      <ul v-show='all'>

        <li v-for="(item,index) in todolist" :key="index" :style="isRed ?'text-decoration:line-through':''" :class="isRed ? 'red' : ''">
          <input type="checkbox" @change="handleRed">
          {{item.name}}
          </li>
      </ul>

      <ul v-show="doing">
        <li v-for="(item,index) in doinglist" :key="index">{{item.name}}</li>
      </ul>

      <ul v-show="done">
        <li v-for="(item,index) in donelist" :key="index">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      infomation:'',
      todolist:[
        {id:1,name:'萨湖分化和辐射防护',state:1},
        {id:2,name:'和恢复数据机房回复',state:1}
        ],
      all:true,
      doing:false,
      done:false,
      isRed:false,
      doinglist:[
        'lol'
      ],
      donelist:[
        'tnt'
      ]
    }
  },
  methods:{
    allInfo(){
      this.all = true
      this.done = false
      this.doing = false
      if(this.infomation !== ''){
        const name = this.infomation
        const id = new Date().getTime()
        this.todolist.push({id: id, name: name, state: 1})
        this.infomation = ''
      }
    },
    doingInfo(){
      this.all = false
      this.doing = true
      this.done = false
    },
    doneInfo(){
      this.all = false
      this.doing = false
      this.done = true
    },
    handleRed(){
      this.isRed = true
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
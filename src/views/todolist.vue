<template>
  <div>
    <input type="text" placeholder="随便输点" v-model="infomation" @keyup.enter="allInfo">
    <button @click="allInfo">所有任务</button>
    <button @click="doingInfo">未完成任务</button>
    <button @click="doneInfo">已完成任务</button>
    <ul>
      <li v-for="(item,index) in '{todolist}'" :key="index"></li>
    </ul>
    <!-- <ul  v-if='all'>
      <li v-for="(item,index) in todolist" :key="index">{{item}}</li>
    </ul>

    <ul  v-else-if="doing">
      <li v-for="(item,index) in doinglist" :key="index">{{item}}</li>
    </ul>

    <ul  v-else-if="done">
      <li v-for="(item,index) in donelist" :key="index">{{item}}</li>
    </ul> -->
  </div>
</template>

<script>
export default {
  data(){
    return{
      infomation:'',
      todolist:[
        '1','2'
      ],
      all:true,
      doing:false,
      done:false,
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
      this.todolist.push(this.infomation)
      this.infomation = ''
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
    }
  }
}
</script>

<style>

</style>
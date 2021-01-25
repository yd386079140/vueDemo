<template>
  <div class="cont">
    <input type="text" placeholder="随便输点" v-model="infomation" @keyup.enter="allInfo">
    <div class="btn">
      <button @click="allInfo">所有任务</button>
      <button @click="doingInfo">未完成任务</button>
      <button @click="doneInfo">已完成任务</button>
    </div>
    <div class="ulList">
      <ul>
        <li v-for="(item,index) in changeState"
        :key="index"
        >
          <input type="checkbox" v-model="checked" @change="handleChangeState(item)">
          {{item.name}}
          <!-- :style="isRed ?'text-decoration:line-through':''" :class="isRed ? 'red' : ''" -->
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      checked:false,
      state:0,
      infomation:'',
      todolist:[
        {id:1,name:'萨湖分化和辐射防护',state:0},
        {id:2,name:'和恢复数据机房回复',state:0}
        ],
      isRed:false,
    }
  },
  computed:{
    changeState(){
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
        this.todolist.push({id: id, name: name, state: 0})
        this.infomation = ''
      }
    },
    doingInfo(){
      if(this.checked === false){
        this.state = 1
      }
    },
    doneInfo(){
      if(this.checked === false){
        this.state = 2
      }
    },
    handleChangeState(){
      this.checked = true
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
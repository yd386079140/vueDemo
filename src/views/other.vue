<template>
  <div>
    <header>
      <section>
        <label for="title">ToDoList</label>
        <input type="text" v-model="eachInfo" @keyup.enter="addInfo" placeholder="添加ToDo"/>
      </section>
			<button class="btn" @click="addInfo"  :disabled="eachInfo === ''">添加</button>
    </header>
    <section>
      <h2>正在进行
        <span>{{ todoList.length }}</span>
      </h2>
      <ol class="demo-box">
        <li v-for="(item,index) in todoList" :key="index">
          <input type="checkbox" @change="changeInfo(index)">
          <p>{{item}}</p>
          <a @click="subInfo(index)">-</a>
        </li>
      </ol>
      <h2>已经完成
        <span>{{ doneList.length }}</span>
      </h2>
      <ul>
        <li draggable="true" v-for="(i,index) in doneList" :key="index">
          <input type="checkbox" checked="checked" @change="backInfo(index)">
          <p>{{i}}</p>
          <a @click="subInfomation(index)">-</a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
// import * as Utils from '@/utils'
export default {
	data(){
		return{
			eachInfo:'',
			todoList:[
				'记得吃药',
			],
			doneList:[
				'记得吃饭',
			]
		}
	},
	methods:{
		addInfo(){
			if(this.eachInfo !== ''){
			this.todoList.push(this.eachInfo)
			this.eachInfo = ''
			}
		},
		subInfo(index){
			this.todoList.splice(index,1)
		},
		changeInfo(index){
			this.todoList.splice(index,1),
			this.doneList.push(index)
		},
		backInfo(index){
			this.doneList.splice(index,1)
			this.todoList.push(index)
		},
		subInfomation(index){
			this.doneList.splice(index,1)
		}
	}
}
</script>

<style>
.btn{
	background-color: white;
	color: teal;
}
</style>
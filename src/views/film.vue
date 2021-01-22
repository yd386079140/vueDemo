<template>
  <div class="contain">
    <div class="animation"></div>

    <form class="input">
    <input type="text" v-model="modelMation">
    <button @click="handleAddMAtion" :disabled="modelMation === ''">增加</button>
    <ul>
      <li
        v-for="(item,index) in Mation"
        :key="index"
        :class='{active:redMation === index}'
        @click="handleRedMation(index)"
      >
        {{item}}
        <button @click="handleSubMation(index)">删除</button>
        </li>
    </ul>
    </form>

    <div class="grid">
      <div
      class="grid-item"
      v-for="(item,index) in 9"
      :key="index"
      @click="handleOne(index)"
      :class="showBoxs.indexOf(index) === -1 ? '' : 'hover'"
      >
      </div>
    </div>
    <div class="bigShowBox">
      <div
      v-for="(item,index) in showBoxs"
      :key="index"
      class="showBox"
      @click="handleBack">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      modelMation:'',
      Mation:[],
      redMation:null,
      idx:[],
      showBoxs:[]
    }
  },
  methods:{
    handleAddMAtion(){
      this.Mation.push(this.modelMation)
      this.modelMation = ''
    },
    handleSubMation(index){
      this.Mation.splice(index,1)
    },
    handleRedMation(index){
      this.redMation = index
    },
    handleOne(index){
      const isAdded = this.showBoxs.indexOf(index)
      if(isAdded === -1){
        this.showBoxs.push(index)
      }else{
        this.showBoxs.splice(isAdded,1)
      }
    },
    handleBack(index){
      this.showBoxs.splice(index,1)
    }
  },
}
</script>

<style scoped>
.contain{
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
}
.input{
  position: fixed;
  left: 0;
  top: 0;
}
.active{
  color: red;
}
.grid{
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px 50px;
  width: 500px;
  height: 500px;
  box-shadow: 0 10px 18px rgba(36, 37, 38, 0.08);
  border-radius: 26px;
  place-items: center;
  place-content: center;
}
.grid:hover{
box-shadow: 5px 12px 20px rgba(36, 37, 38, 0.13);
}
.grid-item{
  background-image: linear-gradient(to top, #dbdcd7 0%, #dddcd7 24%, #e2c9cc 30%, #e7627d 46%, #b8235a 59%, #801357 71%, #3d1635 84%, #1c1a27 100%);
  border-radius: 50%;
  height: 100px;
  width: 100px;
  /* -webkit-animation: swirl-out-fwd 0.65s ease-in both;
  animation: swirl-out-fwd 0.65s ease-in both; */
}
.hover{
  border-radius: 50%;
  background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
}
@-webkit-keyframes swirl-out-fwd {
  0% {
    -webkit-transform: rotate(0) scale(1);
            transform: rotate(0) scale(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(540deg) scale(5);
            transform: rotate(540deg) scale(5);
    opacity: 0;
  }
}
@keyframes swirl-out-fwd {
  0% {
    -webkit-transform: rotate(0) scale(1);
            transform: rotate(0) scale(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(540deg) scale(5);
            transform: rotate(540deg) scale(5);
    opacity: 0;
  }
}

.bigShowBox{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  height: 100px;
  width: 500px;
  box-shadow: 0 10px 18px rgba(36, 37, 38, 0.08);
  background-image: linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%);
  border-radius: 26px;
}
.bigShowBox:hover{
box-shadow: 5px 12px 20px rgba(36, 37, 38, 0.13);
}
.showBox{
  border-radius: 50%;
  height: 60px;
  width: 60px;
  background-image: linear-gradient(to top, #dbdcd7 0%, #dddcd7 24%, #e2c9cc 30%, #e7627d 46%, #b8235a 59%, #801357 71%, #3d1635 84%, #1c1a27 100%);
  margin: -10px;
  border: solid 2px white;
  -webkit-animation: animation 1.1s both;
  animation: animation 1.1s both;
}
@-webkit-keyframes animation {
  0% {
    -webkit-transform: translateY(-500px);
            transform: translateY(-500px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateY(-65px);
            transform: translateY(-65px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateY(-28px);
            transform: translateY(-28px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}
@keyframes animation {
  0% {
    -webkit-transform: translateY(-500px);
            transform: translateY(-500px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateY(-65px);
            transform: translateY(-65px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateY(-28px);
            transform: translateY(-28px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}
</style>
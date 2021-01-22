<template>
    <div>
        <div v-if="books.length">
            <table>
                <thead>
                    <th></th>
                    <th>书籍名称</th>
                    <th>出版日期</th>
                    <th>价格</th>
                    <th>购买数量</th>
                    <th>操作</th>
                </thead>
                <tbody>
                    <transition-group name="list">
                    <tr v-for="(item,index) in books" :key="index" class="list-item">
                        <td>{{item.id}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.date}}</td>
                        <td>{{item.price | getPrice}}</td>
                        <td>
                            <button @click="sub(index)" :disabled="item.count <= 1">-</button>
                            {{item.count}}
                            <button @click="add(index)">+</button>
                        </td>
                        <td><button @click="removeHandle(index)">移除</button></td>
                    </tr>
                    </transition-group>
                </tbody>
            </table>
        <h2>总价格：{{totalPrice | getPrice}}</h2>
        </div>
        <h2 v-else>购物车为空哦</h2>
    </div>
</template>

<script>
export default {
    data(){
        return{
            ifIndex:false,
            books: [
			{
				id: 1,
				name: '《算法导论》',
				date: '2006-9',
				price: 85.00,
				count: 1
			},
			{
				id: 2,
				name: '《UNIX编程艺术》',
				date: '2006-2',
				price: 59.00,
				count: 1
			},
			{
				id: 3,
				name: '《编程珠玑》',
				date: '2008-10',
				price: 39.00,
				count: 1
			},
			{
				id: 4,
				name: '《代码大全》',
				date: '2006-3',
				price: 128.00,
				count: 1
			},
        ]
        }
    },
    methods:{
        add(index){
            this.books[index].count++
        },
        sub(index){
            this.books[index].count--
        },
        removeHandle(id){
            this.books.splice(id,1)
        },
    },
    computed:{
        totalPrice(){
            return this.books.reduce(function(preValue,it){
                return preValue + it.price * it.count
            },0)
        }

    },
    filters:{
        getPrice(price){
            return "￥"+ price.toFixed(2)
        }
    }
}
</script>

<style scoped>
table {
  border: 1px solid #e9e9e9;
  border-collapse: collapse;
  border-spacing: 0;
  margin: 200px auto;
}

th, td {
  padding: 8px 16px;
  border: 1px solid #e9e9e9;
  text-align: left;
}

th {
  background-color: #f7f7f7;
  color: #5c6b77;
  font-weight: 600;
}

.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(30px);
}
/* .active{
    color: rgb(202, 66, 25);
    font-weight: 700;
} */
.moveOut{
    -webkit-animation: slide-out-right 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    animation: slide-out-right 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}
@-webkit-keyframes slide-out-right {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
}
@keyframes slide-out-right {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
}

</style>
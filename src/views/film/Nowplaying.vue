<template>
  <div>
    nowplaying
    <ul>
      <li
        v-for="data in list"
        :key="data.filmId"
        @click="changepage(data.filmId)"
      >
        <div><img :src="data.poster" /></div>
        <div class="shu">
          <span>《{{ data.name }}》</span>
          <span>总分钟数：{{ data.runtime }}</span>
          <span>{{ data.category }}</span>
          <!-- <p>主演：{{data.actors | actorfilter}}</p> -->
          <span>导演：{{ data.director }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
// import Vue from 'vue'
// Vue.filter("actorfilter",function(data){
//     var newlist = data.map(item=>item.name)
//     return newlist.jion('')

// })
export default {
  data() {
    return {
      list: ["111", "222", "333"],
    };
  },
  mounted() {
    axios({
      url:
        "https://www.apiopen.top/novelApi",
      // headers: {
      //   "X-Client-Info":
      //     '{"a":"3000","ch":"1002","v":"5.0.4","e":"16057635104733053960193"}',
      //   "X-Host": "mall.film-ticket.film.list",
      // },
    }).then((res) => {
      console.log(res.data);
      this.list = res.data.data.films;
      this.total = res.data.data.total;
    });
  },
  methods: {
    changepage(id) {
      console.log(id);
      this.$router.push(`/Little/${id}`);
    },
  },
};
</script>

<style scoped>
li {
  padding: 10px;
  overflow: hidden;
}
li img {
  width: 90px;
  height: 120px;
  float: left;
}
.shu {
  display: flex;
  flex-direction: column;
}
.shu span {
  padding: 5px;
}
</style>
<template>
  <nav>
    <!-- 声明式导航 -->
    <ul>
      <router-link to="/film" tag="li" activeClass="myactive">
        <i class="iconfont icon-electronics"></i>
        渐变球
      </router-link>
      <router-link to="/cinema" tag="li" activeClass="myactive">
        <i class="iconfont icon-store"></i>
        echarts</router-link
      >
      <router-link to="/center" tag="li" activeClass="myactive">
        <i class="iconfont icon-account"></i>
        书籍</router-link
      >
      <router-link to="/other" tag="li" activeClass="myactive">
        <i class="iconfont icon-smile"></i>
        任务书</router-link
      >
      <router-link to="/todolist" tag="li" activeClass="myactive">
        <i class="iconfont icon-favorites"></i>
        记事本</router-link
      >
      <router-link to="/demo" tag="li" activeClass="myactive">
        <i class="iconfont icon-atm"></i>
        其他</router-link
      >
    </ul>
  </nav>
</template>

<style scoped>
.myactive {
  color: red;
}

nav {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 50px;
  background: white;
}
ul {
  display: flex;
  list-style: none;
}
ul li {
  flex: 1;
  text-align: center;
}
li {
  display: flex;
  flex-direction: column;
}
</style>

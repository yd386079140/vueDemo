<template>
  <nav>
    <!-- 声明式导航 -->
    <ul>
      <router-link to="/film" tag="li" activeClass="myactive">
        <i class="iconfont icon-electronics"></i>
        电影
      </router-link>
      <router-link to="/cinema" tag="li" activeClass="myactive">
        <i class="iconfont icon-store"></i>
        影院</router-link
      >
      <router-link to="/center" tag="li" activeClass="myactive">
        <i class="iconfont icon-account"></i>
        我的</router-link
      >
      <router-link to="/other" tag="li" activeClass="myactive">
        <i class="iconfont icon-account"></i>
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

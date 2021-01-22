<template>
  <div>
    <tabbar></tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
import tabbar from "@/components/Tabbar";
export default {
  components: {
    tabbar,
  },
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html{
  height: 100%;
}
</style>

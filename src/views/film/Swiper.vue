<template>
  <div class="swiper-container filmswiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination film-swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper"; // js
import "swiper/swiper-bundle.css";
export default {
  mounted() {
    /* eslint-disable no-new */
    new Swiper(".filmswiper", {
      //   direction: 'vertical',
      loop: true,
      autoplay: {
        delay: 2000,
      },
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },
    });
  },
};
</script>

<style scoped>
.swiper-wrapper {
  width: 100%;
  height: 200px;
  background-color: teal;
}
.film-swiper-pagination {
  text-align: right;
}
</style>

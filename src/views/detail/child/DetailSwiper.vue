<template>
  <swiper class="detail-swiper" :options="swiperOptions">
    <swiper-slide v-for="(item,index) in topImgs" :key="index">
      <a :href="item.link">
        <img :src="item" alt="topImg" />
      </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import Swiper2, { Pagination, Autoplay } from "swiper";
Swiper2.use([Pagination, Autoplay]);

// import style (>= Swiper 6.x)
import "swiper/swiper-bundle.css";
export default {
  name: "DetailSwiper",
  components: { Swiper, SwiperSlide },
  props: {
    topImgs: Array,
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //允许分页点击跳转
        },
      },
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style  scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
  /* margin-top: 44px; */
}
.detail-swiper img {
  width: 100%;
}
</style>
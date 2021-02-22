<template>
  <div class="banner">
    <swiper class="swiper-container" :options="swiperOptions">
      <swiper-slide v-for="(item,index) in banner" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt @load="imgLoad" />
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import Swiper2, { Pagination, Autoplay } from "swiper";
Swiper2.use([Pagination, Autoplay]);

// import style (>= Swiper 6.x)
import "swiper/swiper-bundle.css";

export default {
  name: "HomeSwiper",
  components: { Swiper, SwiperSlide },
  props: {
    banner: Array,
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
      isLoad: true,
    };
  },
  computed: {
    // swiper() {
    //   return this.$refs.mySwiper.$swiper;
    // },
  },
  mounted() {},
  methods: {
    imgLoad() {
      if (this.isLoad) {
        this.$emit("swiperLoad");
        this.isLoad = false;
      }
    },
  },
};
</script>

<style  scoped>
.banner .swiper-container {
  width: 100%;
  /* height: 200px; */
  /* background: pink; */
}
.banner .swiper-container img {
  width: 100%;
  vertical-align: middle;
}
</style>
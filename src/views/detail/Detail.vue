<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar" @navClick="navClick" ref="detailNavBar"></detail-nav-bar>

    <scroll class="content" ref="scroll" @scroll="themaScroll" :probeIndex="3">
      <template>
        <detail-swiper :topImgs="topImgs" />
        <detail-info :info="info" />
        <detail-shop-info :shop="shop" />
        <detail-goods-info :detailInfo="detailInfo" @imgLoad="imgLoad" />
        <detail-params ref="params" :itemParams="itemParams" />
        <detail-comment ref="comment" :commentInfo="commentInfo" />
        <good-list ref="recommend" :listItem="recommends" />
      </template>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
    <detail-bottom-bar @addCart="addToCart" />
    <toast :message="message" :isShow="isShow" />
  </div>
</template>

<script>
import DetailNavBar from "./child/DetailNavBar.vue";
import DetailSwiper from "./child/DetailSwiper.vue";
import DetailInfo from "./child/DetailInfo.vue";
import DetailShopInfo from "./child/DetailShopInfo.vue";
import DetailGoodsInfo from "./child/DetailGoodsInfo.vue";
import DetailParams from "./child/DetailParams.vue";
import DetailComment from "./child/DetailComment.vue";
import DetailBottomBar from "./child/DetailBottomBar.vue";

import Scroll from "../../components/common/scroll/Scroll.vue";
import GoodList from "../../components/content/goods/GoodList.vue";
import BackTop from "../../components/content/backTop/BackTop.vue";

import { reqDetail, reqRecommend } from "@/network/home";
import { mixin } from "@/assets/utils/mixin.js";
import { mapActions } from "vuex";
import Toast from "../../components/common/toast/Toast.vue";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParams,
    DetailComment,
    DetailBottomBar,
    GoodList,
    BackTop,
    Scroll,
    Toast,
  },
  data() {
    return {
      iid: null,
      topImgs: [],
      info: {
        title: "",
        desc: "",
        newPrice: "",
        oldPrice: "",
        lowNowPrice: "",
        discountDesc: "",
        columns: [],
        services: [],
      },
      shop: {},
      detailInfo: [],
      itemParams: {},
      commentInfo: {},
      recommends: [],
      themaTop: [],
      getTopY: null,
      refresh: null,
      navIndex: null,
      isShowBackTop: false,
      message: "",
      isShow: false,
    };
  },
  mixins: [mixin],
  created() {
    // 获取点击时的图片id
    this.iid = this.$route.params.iid;
    // 请求数据
    this.getDetail();
    // 请求推荐数据图片
    this.getRecommend();
  },
  mounted() {
    // 获取各主题的位置，同时防抖
    this.getTopY = this.debounce(() => {
      this.themaTop = [];
      this.themaTop.push(0);
      this.themaTop.push(this.$refs.params.$el.offsetTop);
      this.themaTop.push(this.$refs.comment.$el.offsetTop);
      this.themaTop.push(this.$refs.recommend.$el.offsetTop);
      this.themaTop.push(Number.MAX_VALUE);
    }, 200);
    this.refresh = this.debounce(() => {
      this.$refs.scroll.refresh();
    }, 100);
  },
  methods: {
    ...mapActions(["addShopCart"]), // 印射actions中的函数
    getDetail() {
      reqDetail(this.iid).then((res) => {
        const data = res.result;
        // console.log(res.result);
        // 获取轮播图
        this.topImgs = data.itemInfo.topImages;
        // 获取中间信息数据
        const info = this.info;
        info.title = data.itemInfo.title;
        info.desc = data.itemInfo.desc;
        info.newPrice = data.itemInfo.price;
        info.oldPrice = data.itemInfo.oldPrice;
        info.lowNowPrice = data.itemInfo.lowNowPrice;
        info.discountDesc = data.itemInfo.discountDesc;
        info.columns = data.columns;
        info.services = data.shopInfo.services;
        //商家数据信息
        this.shop = data.shopInfo;
        this.detailInfo = data.detailInfo.detailImage[0].list;
        // 尺寸参数相关信息
        this.itemParams = data.itemParams;
        // 评论相关信息
        if (data.rate.cRate != 0) {
          this.commentInfo = data.rate.list[0];
        }
      });
    },
    getRecommend() {
      reqRecommend().then((res) => {
        this.recommends = res.data.list;
      });
    },
    imgLoad() {
      this.refresh();
      this.getTopY();
      // console.log(this.themaTop);
    },
    navClick(index) {
      // console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themaTop[index], 1);
    },
    // 滚动动态切换nav主题
    themaScroll(position) {
      for (let i = 0; i < this.themaTop.length - 1; i++) {
        if (
          this.navIndex != i &&
          -position.y >= this.themaTop[i] &&
          -position.y < this.themaTop[i + 1]
        ) {
          this.navIndex = i;
          this.$refs.detailNavBar.currentIndex = i;
        }
      }
      // 回顶部动态显示和隐藏
      this.isShowBackTop = -position.y > 3000;
    },
    // 点击回到顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    // 监听点击加入购物车
    addToCart() {
      const product = {};
      product.img = this.topImgs[0];
      product.iid = this.iid;
      product.title = this.info.title;
      product.desc = this.info.desc;
      product.realPrice = this.info.lowNowPrice;
      // this.$store.commit('addShopCart', product)
      // 使用mapActions印射的actions函数
      // Toast提示
      this.addShopCart(product).then((res) => {
        this.message = res;
        this.isShow = true;
        setTimeout(() => {
          this.isShow = false;
          this.message = "";
        }, 2000);
      });
      // this.$store.dispatch("addShopCart", product); //或者直接分发actions事件
    },
  },
};
</script>

<style  scoped>
#detail {
  height: 100vh;
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.detail-nav-bar {
  background-color: #fff;
}
.content {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
  /* position: absolute;
  top: 44px;
  bottom: 0px;
  left: 0;
  right: 0; */
}
</style>
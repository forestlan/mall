<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <tab-conrol
      :title="['流行','精选','新款']"
      class="tab-control1"
      @tabClick="tabClick1"
      v-show="isFixed"
      ref="tab1"
    />
    <scroll
      class="content"
      ref="scroll"
      @scroll="backShow1"
      :probeIndex="3"
      :pullUpLoad="true"
      @pullingUp="loadMore"
    >
      <template>
        <home-swiper :banner="banner" @swiperLoad="swiperLoad"></home-swiper>
        <recommend :recommend="recommend" />
        <tab-conrol :title="['流行','精选','新款']" @tabClick="tabClick1" ref="tab2" />
        <good-list :listItem="showGoods"></good-list>
      </template>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from "../../components/common/navBar/NavBar.vue";
import TabConrol from "../../components/common/tabControl/TabConrol.vue";
import GoodList from "../../components/content/goods/GoodList.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import BackTop from "../../components/content/backTop/BackTop.vue";

import HomeSwiper from "./child/HomeSwiper.vue";
import Recommend from "./child/Recommend.vue";

import { reqHomeMultidata, reqHomeList } from "@/network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    Recommend,
    TabConrol,
    GoodList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banner: null,
      recommend: null,
      goods: {
        new: {
          page: 0,
          list: [],
        },
        sell: {
          page: 0,
          list: [],
        },
        pop: {
          page: 0,
          list: [],
        },
      },
      currentType: "pop",
      isShowBackTop: false,
      isFixed: false,
      tabOffsetTop: 0,
      saveY: 0,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  activated() {
    // 进入后重新赋值（解决BScroll的BUG，keep-alive有时无效的bug）
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
  },
  deactivated() {
    // 离开时保存单前位置
    this.saveY = this.$refs.scroll.scroll.y;
  },
  created() {
    // 请求轮播图数据
    this.getHomeMultidata();
    // 初始请求商品数据
    this.getList("pop");
    this.getList("new");
    this.getList("sell");
  },
  mounted() {
    const refresh = this.debounce(this.$refs.scroll.refresh, 100);
    this.$bus.$on("imgItemLoad", () => {
      refresh();
    });
  },
  methods: {
    // 防抖函数
    debounce(fn, delay) {
      let timer = null;
      return function () {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          fn.apply(this);
        }, delay);
      };
    },
    // 上拉加载更多
    loadMore() {
      this.getList(this.currentType);
    },
    // 回顶部动态显示和隐藏
    backShow1(position) {
      this.isShowBackTop = -position.y > 1000;
      this.isFixed = -position.y > this.tabOffsetTop;
    },
    // 点击回到顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    // 中间流行-精选-新款tab切换
    tabClick1(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
      }
      this.$refs.tab1.currentIndex = index;
      this.$refs.tab2.currentIndex = index;
    },
    // 监听获取tabcontrol滚动位置
    swiperLoad() {
      this.tabOffsetTop = this.$refs.tab2.$el.offsetTop;
    },

    // 请求获取轮播图数据和推荐数据
    async getHomeMultidata() {
      const res = await reqHomeMultidata();
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    },
    // 请求获取商品数据列表
    getList(type) {
      const page = this.goods[type].page + 1;
      reqHomeList(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp(); //结束上次上拉加载
      });
    },
  },
};
</script>

<style  scoped>
#home {
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: aliceblue;
}
.tab-control1 {
  position: relative;
  z-index: 9;
  /* top: 44px; */
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  /* height: 500px; */
  overflow: hidden;
}
</style>
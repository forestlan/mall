<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  components: {},
  props: {
    probeIndex: Number,
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeIndex,
      click: true,
      pullUpLoad: this.pullUpLoad,
    });
    // 监听滚动事件
    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });
    // 监听滚动到底
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
    // console.log(this.scroll.scrollerHeight)
  },

  methods: {
    // 回到顶部
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    refresh() {
      // console.log("------");
      this.scroll && this.scroll.refresh();
    },
  },
};
</script>

<style  scoped>
</style>
<template>
  <div class="bottom">
    <div class="icon">
      <div class="img1"></div>
      <div>客服</div>
    </div>
    <div class="icon">
      <div class="img2"></div>
      <div>店铺</div>
    </div>
    <div class="icon">
      <div class="img3"></div>
      <div>收藏</div>
    </div>
    <div class="add" @click="addToCart">加入购物车</div>
    <div class="buy">购买</div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {
    addToCart(){
      this.$emit('addCart');
    }
  },
};
</script>

<style scoped>
.bottom {
  color: blue;
  height: 49px;
  display: flex;
  text-align: center;
}
.icon {
  flex: 1 1 auto;
  font-size: 12px;
  color: black;
}
.icon .img1 {
  width: 25px;
  height: 25px;
  background-image: url("~assets/img/detail/detail_bottom.png");
  background-size: cover;
  background-position: 0 -60px;
  margin: 3px auto;
}
.icon .img2 {
  width: 25px;
  height: 25px;
  background-image: url("~assets/img/detail/detail_bottom.png");
  background-size: cover;
  background-position: 0 -112px;
  margin: 3px auto;
}
.icon .img3 {
  width: 25px;
  height: 25px;
  background-image: url("~assets/img/detail/detail_bottom.png");
  background-size: cover;
  margin: 3px auto;
}

.add {
  background-color: #ffdf11;
  width: 100px;
  line-height: 49px;
  font-size: 16px;
}
.buy {
  background-color: #ff779c;
  width: 80px;
  line-height: 49px;
  font-size: 16px;
}
</style>
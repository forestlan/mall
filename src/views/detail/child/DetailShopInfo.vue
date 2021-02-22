<template>
  <div class="shop-info">
    <div class="logo">
      <img :src="shop.shopLogo" alt="logo" />
      <span>{{shop.name}}</span>
    </div>
    <div class="sell-score">
      <div class="sell">
        <div class="sell-left">
          <div class="number">{{shop.cSells | sellCounter}}</div>
          <div class="font">总销量</div>
        </div>
        <div class="sell-right">
          <div class="number">{{shop.cGoods}}</div>
          <div class="font">全部宝贝</div>
        </div>
      </div>
      <div class="score">
        <div v-for="(item,index) in shop.score" :key="index" class="score-item">
          <span class="score-name">{{item.name}}</span>
          <span :class="{'score-color':item.isBetter}" class="score-score">{{item.score}}</span>
          <span class="up-low" :class="{'up-low-color':item.isBetter}">{{item.isBetter?'高':'低'}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  components: {},
  props: {
    shop: Object,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  filters: {
    sellCounter(value) {
      let res = value;
      if (value > 10000) {
        res = (value / 10000).toFixed(1) + "万";
      }
      return res;
    },
  },
};
</script>

<style  scoped>
.shop-info {
  padding: 20px 10px;
  border-bottom: 15px solid #f6f6f6;
}
.logo {
  height: 55px;
  font-size: 16px;
}
.logo img {
  width: 50px;
  border-radius: 50%;
  border: 1px solid #000;
  vertical-align: middle;
  margin-right: 10px;
}
.sell-score {
  height: 150px;
  display: flex;
  justify-content: space-around;
  padding: 25px 0;
  font-size: 16px;
  position: relative;
}
.sell {
  display: flex;
  justify-content: space-between;
  border-right: solid 1px #f6f6f6;
  text-align: center;
  padding: 0 20px;
  width: 50%;
}

.sell-left,
.sell-right {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.number {
  font-size: 18px;
}
.font {
  font-size: 14px;
}
.score {
  width: 50%;
  padding: 0 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.score-item {
  display: flex;
  justify-content: start;
  /* margin-bottom: 8px; */
}
.score-name {
  margin-right: 10px;
}
.score-score {
  color: green;
}
.score-color {
  color: red;
}
.up-low {
  position: absolute;
  right: 20px;
  color: aliceblue;
  background-color: green;
}
.up-low-color {
  background-color: red;
}
</style>
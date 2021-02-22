<template>
  <div class="car">
    <nav-bar class="car-nav">
      <template v-slot:center>购物车({{cartListLength}})</template>
    </nav-bar>
    <scroll class="cart-list">
      <cart-list-item v-for="(item,index) in cartList" :key="index" :product="item"></cart-list-item>
    </scroll>
    <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from "../../components/common/navBar/NavBar.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";

import { mapGetters } from "vuex";

import CartListItem from "./child/CartListItem.vue";
import CartBottomBar from './child/CartBottomBar.vue';

export default {
  name: "Car",
  components: { NavBar, Scroll, CartListItem, CartBottomBar },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["cartListLength", "cartList"]),
  },
  mounted() {},
  methods: {},
};
</script>

<style  scoped>
.car {
  height: 100vh;
}
.car-nav {
  background-color: #ff8198;
  color: aliceblue;
}
.cart-list {
  height: calc(100% - 44px - 49px - 40px);
  overflow: hidden;
}
</style>
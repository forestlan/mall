<template>
  <div class="bottom-bar">
    <div class="check-button">
      <check-button :isChecked="isSelectedAll" @click.native="check" />
      <span>全选</span>
    </div>
    <div class="total">合计：￥{{totalPrice}}</div>
    <div class="buy">去结算({{length}})</div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton.vue";
export default {
  name: "CartBottomBar",
  components: { CheckButton },
  data() {
    return {};
  },
  computed: {
    totalPrice() {
      return this.$store.state.cartList
        .filter((item) => !item.checked)
        .reduce((pre, item) => {
          return pre + item.realPrice * item.count;
        }, 0)
        .toFixed(2);
    },
    length() {
      return this.$store.state.cartList.filter((item) => !item.checked).length;
    },
    isSelectedAll() {
      const cartList = this.$store.state.cartList;
      return cartList.length === 0
        ? true
        : this.$store.state.cartList.find((item) => item.checked);
    },
  },
  mounted() {},
  methods: {
    check() {
      const cartList = this.$store.state.cartList;
      if (this.isSelectedAll) {
        cartList.forEach((item) => (item.checked = false));
      } else {
        cartList.forEach((item) => (item.checked = true));
      }
    },
  },
};
</script>

<style  scoped>
.bottom-bar {
  display: flex;
  background-color: #f6f6f6;
  height: 40px;
  border-bottom: 1px solid #aaa;
  font-size: 16px;
  text-align: center;
}
.check-button {
  width: 60px;
  display: flex;
}
.bottom-bar .total {
  flex: 1 1 auto;
}
.bottom-bar .buy {
  width: 100px;
  background-color: coral;
}
.bottom-bar span,
.total,
.buy {
  line-height: 40px;
}
</style>
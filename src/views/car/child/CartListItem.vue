<template>
  <div class="listItem">
    <check-button :isChecked="product.checked" @click.native="check" />
    <div class="img">
      <img :src="product.img" alt="img" />
    </div>
    <div class="info">
      <p class="title">{{product.title}}</p>
      <p class="desc">{{product.desc}}</p>
      <div class="count">
        <span class="price">￥{{product.realPrice}}</span>
        <span>×{{product.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton.vue";
export default {
  name: "CartListItem",
  components: {
    CheckButton,
  },
  props: {
    product: {},
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    check() {
      this.product.checked = !this.product.checked;
    },
  },
};
</script>

<style  scoped>
.listItem {
  display: flex;
  justify-content: space-evenly;
  height: 100px;
  border-bottom: 1px solid rgb(192, 189, 189);
}
.listItem .img img {
  width: 70px;
  border-radius: 10px;
  padding: 5px;
}
.info {
  width: 280px;
  padding: 5px;
}
.info p {
  margin-bottom: 10px;
}
.info .title,
.desc {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.info .title {
  font-size: 18px;
}
.info .desc {
  font-size: 16px;
}
.info .price {
  color: chocolate;
  font-size: 16px;
}
.info .count {
  display: flex;
  justify-content: space-between;
}
</style>
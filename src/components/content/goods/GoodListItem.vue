<template>
  <div class="good-list-item" @click="itemClick">
    <img :src="imgShow" alt @load="imgLoad" />
    <div class="title">
      <p>{{item.title}}</p>
    </div>
    <div class="title2">
      <span class="price">￥{{item.price}}</span>
      <!-- <img src="~assets/img/common/collect.svg" alt=""> -->
      <span class="collect">{{item.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodListItem",
  data() {
    return {};
  },
  props: {
    item: Object,
  },
  mounted() {},
  methods: {
    imgLoad() {
      this.$bus.$emit("imgItemLoad");
    },
    // 跳转详情页
    itemClick() {
      this.$router.push("/detail/" + this.item.iid);
    },
  },
  computed: {
    imgShow() {
      return this.item.image || this.item.show.img ;
    },
  },
};
</script>

<style  scoped>
.good-list-item img {
  width: 100%;
  border-radius: 10px;
}
.good-list-item .title p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
}
.good-list-item .title2 {
  text-align: center;
  font-size: 14px;
}
.good-list-item .price {
  color: #ff8198;
  margin-right: 10px;
}
.good-list-item .collect::before {
  content: "";
  width: 14px;
  height: 14px;
  display: inline-block;
  background-image: url("~assets/img/common/collect.svg");
  background-size: cover;
}
</style>
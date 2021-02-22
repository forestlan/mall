<template>
  <div class="info">
    <h2 class="info-title">{{info.title}}</h2>
    <div class="price">
      <span class="newPrice">{{info.newPrice}}</span>
      <span class="oldPrice">{{info.oldPrice}}</span>
      <span :class="{'discountDesc':info.discountDesc}">{{info.discountDesc}}</span>
    </div>
    <div class="columns">
      <span>{{info.columns[0]}}</span>
      <span>{{info.columns[1]}}</span>
    </div>
    <div class="services">
      <div v-for="(item,index) in info.services" :key="index">
        <img
          src="//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png"
          alt="icon"
        />
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailInfo",
  components: {},
  props: {
    info: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style  scoped>
.info {
  padding: 0 10px;
}
.info-title {
  font-size: 15px;
  font-weight: normal;
  padding: 5px 0;
}
.price {
  padding: 10px 0;
}
.price span {
  margin-right: 5px;
}
.newPrice {
  color: #ff5777;
}
.oldPrice {
  font-size: 12px;
  color: #c1c1c1;
  text-decoration: line-through;
}
.discountDesc {
  border-radius: 10px;
  background-color: #ff5777;
  color: aliceblue;
  font-size: 12px;
  padding: 3px 10px;
}
.columns {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  font-size: 14px;
  color: #c1c1c1;
  border-bottom: 1px solid #f6f6f6;
}
.services {
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  font-size: 12px;
  padding: 25px 0;
  border-bottom: 5px solid #f6f6f6;
}
.services img {
  width: 12px;
}
</style>
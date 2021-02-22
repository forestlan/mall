<template>
  <div class="goods-info">
    <!-- <div class="info-desc">{{detailInfo.desc}}</div> -->
    <div class="info-img">
      <img
        v-for="(item,index) in detailInfo"
        :key="index"
        :src="item"
        alt="info-img"
        @load="imgLoad"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  components: {},
  props: {
    detailInfo: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      
    };
  },
  mounted() {},
  methods: {
    imgLoad() {
      this.$emit("imgLoad");
    },
  },
  
};
</script>

<style  scoped>
.info-desc {
  font-size: 16px;
  padding: 10px;
}
.info-img img {
  width: 100%;
  /* margin-top: 5px; */
}
</style>
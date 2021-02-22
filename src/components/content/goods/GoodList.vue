<template>
  <div class="good-list">
    <good-list-item class="good-list-item" v-for="(item,index) in listItem" :key="index" :item="item"></good-list-item>
  </div>
</template>

<script>
import GoodListItem from "./GoodListItem.vue";
export default {
  name: "GoodList",
  components: {
    GoodListItem,
  },
  props: {
    listItem: Array,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style  scoped>
.good-list {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
.good-list-item{
    width: 48%;
}
</style>
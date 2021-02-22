<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(item,index) in title"
      :key="index"
      @click="itemClick(index)"
      :class="{'active':currentIndex===index}"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabConrol",
  components: {},
  props: {
    title: Array,
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  mounted() {},
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick', index);
    },
  },
};
</script>

<style  scoped>
.tab-control {
  display: flex;
  background-color: #fff;  
}
.tab-control-item {
  flex: 1;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.tab-control-item span {
  padding: 5px;
}
.active {
  color: #ff5777;
}
.active span {
  border-bottom: 3px solid #ff5777;
}
</style>
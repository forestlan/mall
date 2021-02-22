<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="isActive">
      <slot name="item-icon-active"></slot>
    </div>
    <div v-else>
      <slot name="item-icon"></slot>
    </div>
    <div :style="ActiveStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  components: {},
  props: {
    path: String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data() {
    return {

    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1;
    },
    ActiveStyle() {
      return this.isActive?{color:this.activeColor}:{};
    },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path).catch((e) => e);
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1 1 auto;
  text-align: center;
}
.tab-bar-item img {
  width: 20px;
  height: 20px;
  margin-top: 3px;
  margin-bottom: 2px;
  vertical-align: middle;
}
</style>
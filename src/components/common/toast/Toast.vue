<template>
  <div class="toast" v-show="isShow">
    <span>{{message}}</span>
  </div>
</template>

<script>
export default {
  name: "Toast",
  components: {},
  props: {
    message: {
      type: String,
      dafault: "",
    },
    isShow: {
      type: Boolean,
      default: false,
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
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 30px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 99;
  line-height: 30px;
  text-align: center;
  border-radius: 5px;
}
</style>
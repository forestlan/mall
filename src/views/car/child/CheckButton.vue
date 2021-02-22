<template>
  <div class="button" :class="{checked:isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="buttonImg" />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  components: {},
  props: {
    isChecked: Boolean,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style  scoped>
.button {
  width: 20px;
  height: 20px;
  background-color: coral;
  border-radius: 50%;
  margin: auto 0;
  margin-left: 2px;
}
.button img {
  width: 100%;
  padding: 2px;
}
.checked {
  border: 1px solid #aaa;
  background-color: #fff;
}
</style>
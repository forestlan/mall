<template>
  <div>
    <nav-bar class="cate-nav">
      <template v-slot:center>
        <div>分类</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../components/common/navBar/NavBar.vue";
export default {
  name: "Category",
  components: { NavBar },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style  scoped>
.cate-nav{
    color: #fff;
    background-color: #ff8198;
}
</style>
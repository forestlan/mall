<template>
  <div>
    <nav-bar class="personal-nav">
      <template v-slot:center>
        <div>我的</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../components/common/navBar/NavBar.vue";
export default {
  name: "Personal",
  components: { NavBar },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style  scoped>
.personal-nav {
  color: #fff;
  background-color: #ff8198;
}
</style>
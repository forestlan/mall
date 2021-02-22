<template>
  <div>
    <nav-bar>
      <template v-slot:left>
        <div @click="backClick">
          <img src="@/assets/img/common/back.svg" alt="back" class="back-img" />
        </div>
      </template>
      <template v-slot:center>
        <div class="title">
          <div
            v-for="(item,index) in title"
            :key="item"
            :class="{'active':index===currentIndex}"
            @click="titleClick(index)"
          >{{item}}</div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../../components/common/navBar/NavBar.vue";
export default {
  name: "DetailNavBar",
  components: { NavBar },
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  mounted() {},
  methods: {
    backClick() {
      this.$router.back();
    },
    titleClick(index) {
      this.currentIndex = index;
      this.$emit('navClick',index);
    },
  },
};
</script>

<style  scoped>
.back-img {
  margin-top: 10px;
  margin-left: 20px;
}
.title {
  display: flex;
  justify-content: space-evenly;
  font-size: 15px;
}
.active {
  color: #ff8198;
}
</style>
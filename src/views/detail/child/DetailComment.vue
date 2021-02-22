<template>
  <div class="comment" v-if="Object.keys(commentInfo).length!=0">
    <div class="title">
      <div>用户评价</div>
      <div>更多</div>
    </div>
    <div class="avatar">
      <img :src="commentInfo.user.avatar" alt="avatar" />
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="content">{{commentInfo.content}}</div>
    <div class="time">
      <span>{{commentInfo.created | formatDate}}</span>
      <span>{{commentInfo.style}}</span>
    </div>
    <div class="img">
      <img v-for="(item,index) in commentInfo.images" :key="index" :src="item" alt="img" />
    </div>
  </div>
</template>

<script>
import { formatDateTime } from "@/assets/utils/Date";

export default {
  name: "DetailComment",
  components: {},
  props: {
    commentInfo: Object,
  },
  data() {
    return {};
  },
  mounted() {
  },
  methods: {},
  filters: {
    formatDate(value) {
        return formatDateTime(value*1000);
    },
  },
};
</script>

<style  scoped>
.comment {
  padding: 10px;
}
.title {
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f6f6f6;
}
.avatar {
  display: flex;
  padding: 10px 0;
}
.avatar img {
  width: 40px;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 10px;
}
.avatar span {
  line-height: 40px;
  font-size: 18px;
}
.content,
.time {
  font-size: 14px;
  padding: 10px 0;
}
.time span {
  margin-right: 10px;
}
.img img {
  width: 100px;
  margin-right: 10px;
}
</style>
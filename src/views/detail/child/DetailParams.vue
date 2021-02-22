<template>
  <div class="params" v-if="Object.keys(itemParams).length!=0">
    <div>{{itemParams.rule.key}}</div>
    <table class="table-rule" rules="rows">
      <tr v-for="(item,index) in itemParams.rule.tables[0]" :key="index">
        <td v-for="(td ,indey) in item" :key="indey">{{td}}</td>
      </tr>
    </table>
    <div class="disclaimer">{{itemParams.rule.disclaimer}}</div>
    <div>{{itemParams.info.key}}</div>
    <table class="table-info" rules="rows">
      <tr v-for="(item,index) in itemParams.info.set" :key="index">
        <!-- <td v-for="(td ,indey) in item" :key="indey">{{td}}</td> -->
        <td class="key">{{item.key}}</td>
        <td class="value">{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailParams",
  components: {},
  props: {
    itemParams: Object,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  
};
</script>

<style  scoped>
.params {
  padding: 10px 10px;
  border-bottom: 5px solid #f6f6f6;
}
.params .table-rule {
  text-align: center;
  font-size: 16px;
  width: 100%;
}
.params .table-rule tr {
  height: 50px;
}
.disclaimer {
  font-size: 14px;
  color: #ff5777;
  margin-bottom: 20px;
}
.table-info {
  margin: o auto;
  width: 100%;
  /* padding: 20px 0; */
  font-size: 16px;
  /* text-align: center; */
}
.table-info tr {
  height: 50px;
  /* line-height: 30px; */
}
.table-info .key {
  width: 100px;
  text-align: center;
  /* padding: 0 20px 0 20px; */
}
.table-info .value {
  color: #ff5777;
}
</style>
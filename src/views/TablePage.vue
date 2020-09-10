<template>
  <div>
    <div class="search">
      <search-item label="姓名">
        <el-input size="small"></el-input>
      </search-item>
      <search-item label="地址">
        <el-input size="small"></el-input>
      </search-item>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180" align="center"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180" align="center"></el-table-column>
      <el-table-column prop="address" label="地址" align="center"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import SearchItem from "../components/SearchItem.vue";
export default {
  name: "MyTodo",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  components: {
    SearchItem
  }
};
</script>

<style lang="stylus" scoped>
.search {
  display: flex;
}
</style>
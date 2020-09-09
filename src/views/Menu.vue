<template>
  <el-menu router>
    <el-submenu index="mission">
      <template slot="title">
        <i class="el-icon-suitcase-1"></i>
        <span>任务管理</span>
      </template>
      <el-menu-item index="/mission/myTodo">
        <i class="el-icon-document"></i>
        <span>我的待办</span>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {};
</script>

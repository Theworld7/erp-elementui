<template>
  <div>
    <el-container>
      <el-aside width="250px">
        <div class="logo">Logo</div>
        <side-menu></side-menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <el-card>
            <router-view></router-view>
          </el-card>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import SideMenu from "./Menu";
export default {
  name: "Home",
  components: {
    SideMenu
  }
};
</script>

<style lang="stylus" scoped>
.el-aside {
  height: 100vh;
  overflow-y: auto;
}

.el-header {
  display: flex;
  justify-content: space-between;
}

.el-menu {
  border: 0;
}

.el-main {
  background: #e6e6e6;

  .el-card {
    height: calc(100vh - 102px);
  }
}

.logo {
  display: flex;
  justify-content: center;
  height: 60px;
}
</style>

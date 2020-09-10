<template>
  <el-menu router>
    <el-submenu index="mission">
      <template slot="title">
        <i class="el-icon-suitcase-1"></i>
        <span>常规页面</span>
      </template>
      <el-menu-item index="/normal/tablePage">
        <i class="el-icon-document"></i>
        <span>表格列表</span>
      </el-menu-item>
    </el-submenu>
    <el-submenu index="map">
      <template slot="title">
        <i class="el-icon-position"></i>
        <span>地图</span>
      </template>
      <el-menu-item index="/map/baiduMap">
        <i class="el-icon-place"></i>
        <span>百度地图</span>
      </el-menu-item>
      <el-menu-item index="/map/gaodeMap">
        <i class="el-icon-map-location"></i>
        <span>高德地图</span>
      </el-menu-item>
    </el-submenu>
    <el-submenu index="vsisualization">
      <template slot="title">
        <i class="el-icon-s-data"></i>
        <span>可视化</span>
      </template>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {};
</script>

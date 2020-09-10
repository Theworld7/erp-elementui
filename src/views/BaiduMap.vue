<template>
  <div>
    <div class="bmap"></div>
  </div>
</template>

<script>
export default {
  props: {
    ak: String,
    default: "//api.map.baidu.com/api?v=2.0&ak=xyBxzGXuVGou6EHhxywVxWLnkfwv42eT"
  },
  method: {
    setScript() {
      
    },
    init() {
      this.map = new BMap.Map(this.$refs.bmap);
    }
  }
};
</script>

<style>
</style>
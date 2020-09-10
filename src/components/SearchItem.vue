<template>
  <div class="search-item">
    <p class="label">{{label}}</p>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String
  }
};
</script>

<style lang="stylus" scoped>
.search-item {
  display: flex;
  align-items: center;
  margin-right: 12px;

  .label {
    margin-right: 10px;
  }

  .content {
    width: 150px;
  }
}
</style>
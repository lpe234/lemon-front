<template>
  <div class="article-details">
    article-details: {{ $route.params.id }}
  </div>
</template>

<script>
  export default {
    name: 'article-details'
  }
</script>

<style lang="less" scoped>

  @import "../assets/basic";

  .article-details {

  }
</style>

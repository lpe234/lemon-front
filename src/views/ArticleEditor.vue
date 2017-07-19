<template>
  <div class="article-editor">

    <p v-if="$route.meta.action==='create'">
      article-create
    </p>
    <p v-else>
      article-edit: {{ $route.params.id }}
    </p>


  </div>
</template>

<script>
  export default {
    name: 'article-editor'
  }
</script>

<style lang="less" scoped>

  @import "../assets/basic";

  .article-editor {

  }
</style>

<template>
  <div class="article-editor">

    <p v-if="$route.meta.action==='create'">
      article-create
    </p>
    <p v-else>
      article-edit: {{ $route.params.id }}
    </p>

    标题：<input type="text" title="标题" v-model="article.title" /><br><br>

    概要：<input type="text" title="概要" v-model="article.summary" /><br><br>


    <div id="editor">
      <mavon-editor
        :value="editor.defaultValue"
        :ishljs="editor.highlightJS"
        :toolbars="editor.defaultToolbars"
        v-on:change="receiveData"
      ></mavon-editor>
    </div>

    <button @click="doSave">保存</button>
    <button @click="doPublish">发布</button>

  </div>
</template>

<script>
  // Local Registration
  import { mavonEditor } from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'

  export default {
    name: 'article-editor',
    components: {
      mavonEditor
    },
    data () {
      return {
        editor: {
          defaultValue: '开始书写...',
          highlightJS: false,
          defaultToolbars: {
            'bold': true,
            'italic': true,
            'header': true,
            'underline': true,
            'strikethrough': true,
            'mark': true,
            'superscript': true,
            'subscript': true,
            'quote': true,
            'ol': true,
            'ul': true,
            'link': true,
            'imagelink': true,
            'code': true,
            'table': true,
            'undo': true,
            'redo': true,
            'alignleft': true,
            'aligncenter': true,
            'alignright': true,
            'navigation': true,
            'subfield': true,
            'htmlcode': true
          }
        },
        article: {
          title: '',
          summary: '',
          content: ''
        }
      }
    },
    methods: {
      doSave () {
        console.log('save')
        console.log(this.article)
      },
      doPublish () {
        console.log('publish')
        console.log(this.article)
      },
      // get markdown text
      receiveData (val, render) {
        this.article.content = val
      }
    }
  }
</script>

<style lang="less" scoped>

  @import "../assets/basic";

  .article-editor {

  }
</style>

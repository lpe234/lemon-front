<template>
  <div class="article-details">
    article-details: {{ $route.params.id }}

    <h1 v-text="article.title"></h1>
    <button @click="editArticle">编辑</button>
    <span v-text="article.summary"></span>
    <div v-html="preContent"></div>

  </div>
</template>

<script>
  import ArticleApi from '../api/ArticleApi'
  import marked from 'marked'

  import '../assets/darcula.css'

  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: false,
    smartLists: false,
    smartypants: false,
    highlight: function (code) {
      return require('highlight.js').highlightAuto(code).value
    }
  })

  const api = new ArticleApi()

  export default {
    name: 'article-details',
    data () {
      return {
        article: {
          id: '',
          title: '',
          summary: '',
          content: '',
          create_time: ''
        }
      }
    },
    methods: {
      getArticle () {
        let that = this
        const aid = that.$route.params.id
        api.getById(aid).then(function (resp) {
          that.article = resp.data.data.article
          console.log(resp)
        })
      },
      editArticle () {
        this.$router.push({name: 'ArticleDetailsEditor', params: {id: this.article.id}})
      }
    },
    computed: {
      preContent () {
        return marked(this.article.content)
      }
    },
    mounted () {
      this.getArticle()
    }
  }
</script>

<style lang="less" scoped>

  @import "../assets/basic";

  .article-details {

  }
</style>

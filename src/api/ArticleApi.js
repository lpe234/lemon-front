/**
 * Created by lpe234 on 2017/7/19.
 */

import $ from './'

class ArticleApi {
  getById (aid) {
    return $.get('article.json')
  }
}

export default ArticleApi

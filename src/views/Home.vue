<template>
  <div class="home">
    <b-card-group columns v-for="blog in $store.getters.allBlogs" :key="blog.id">
      <b-card
        :title="blog.title"
        :sub-title="blog.userName"
        :img-src="blog.img"
        img-alt="Image"
        img-top
        >
        <b-card-text>
          {{ blog.content }}
        </b-card-text>
        <b-card-text class="small text-muted">{{ blog.publishTime }}</b-card-text>
        <template #footer>
          <b-container>
            <b-row align-v="center" no-gutters>
              <b-col cols="1" align-self="start">
                <a href="javascript:void(0);">
                  <b-img src="~@/img/like.svg"  height="30sp"></b-img>
                </a>
              </b-col>
              <b-col>
                <span class="num" style="font-size: 150%;">{{ blog.likes }}</span>
              </b-col>
            </b-row>
            <b-row align-v="center" align-h="start">
                <b-input-group class="mt-3">
                  <b-form-input placeholder="发条友善的评论"></b-form-input>
                  <b-input-group-append>
                    <b-button variant="outline-secondary">发表评论</b-button>
                  </b-input-group-append>
                </b-input-group>
            </b-row>
            <b-row align-v="center" align-h="end">
              <b-button v-b-toggle.collapse-1 variant="link">查看评论>></b-button>
              <b-collapse id="collapse-1" class="mt-2">
                <b-card>
                  <b-list-group>
                    <b-list-group-item v-for="comment in blog.comments" :key="comment.id">
                      {{ comment.content }}test
                    </b-list-group-item>
                    <b-list-group-item>test2</b-list-group-item>
                  </b-list-group>
                </b-card>
              </b-collapse>
            </b-row>
          </b-container>
        </template>
      </b-card>
    </b-card-group>
  </div>
</template>

<style scoped>

</style>

<script>
import Axios from 'axios'
Axios.defaults.withCredentials = true

export default {
  name: 'Home',
  methods: {
    getAllBlogs() {   // 拿到所有的blog
      var that = this
      Axios.get(process.env.VUE_APP_URL + '/api/blog/blogs')
        .then((response) => {
          response.data.blogs.forEach((blog) => { // 根据blog.id拿到blog对应的comment
            Axios.get(process.env.VUE_APP_URL + '/api/comment/comments/' + blog.id)
              .then((response) => {
                blog.comments = response.data.comments
              })
              .catch((error) => {
                console.log(error)
              })
          });
          that.$store.commit({
            type: 'setBlogs',
            blogs: response.data.blogs
          })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  mounted() {
    this.getAllBlogs()
  }
}
</script>

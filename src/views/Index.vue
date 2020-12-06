<template>
  <div class="index">
    <b-card-group columns>
      <b-card v-for="blog in $store.getters.allBlogs" :key="blog.id"
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
                <a href="javascript:void(0);" v-on:click.once="addlikes(blog.id)">
                  <b-img src="~@/img/like.svg"  height="30sp"></b-img>
                </a>
              </b-col>
              <b-col>
                <span class="num" style="font-size: 150%;">{{ blog.likes }}</span>
              </b-col>
            </b-row>
            <b-row align-v="center" align-h="start">
                <b-input-group class="mt-3">
                  <b-form-input placeholder="发条友善的评论" v-model="newComments[blog.id]"></b-form-input>
                  <b-input-group-append>
                    <b-button variant="outline-secondary" v-on:click.once="addComment(blog.id); newComments[blog.id]='';">发表评论</b-button>
                  </b-input-group-append>
                </b-input-group>
            </b-row>
            <b-row align-v="center" align-h="end">
              <b-button v-b-toggle.collapse-1 variant="link">查看评论>></b-button>
              <b-collapse id="collapse-1" class="mt-2">
                <b-card>
                  <b-list-group>
                    <b-list-group-item v-for="comment in blog.comments" :key="comment.id">
                      {{ comment.content }}
                    </b-list-group-item>
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
import errorHandle from '@/util/errorHandle.js'

export default {
  name: 'Index',
  data() {
    return {
      newComments: {}
    }
  },
  methods: {
    getAllBlogs() {   // 拿到所有的blog
      var that = this
      Axios.get(process.env.VUE_APP_URL + '/api/blog/blogs')
        .then((response) => {
          if (response.data.success === true)
          {
            that.$store.commit({
              type: 'setBlogs',
              blogs: response.data.blogs
            })
          }
          // 根据blog.id拿到blog对应的comment
          that.$store.getters.allBlogs.forEach((blog) => {
            Axios.get(process.env.VUE_APP_URL + '/api/comment/comments/' + blog.id)
              .then((res) => {
                if (res.data.success === true)
                {
                  that.$store.commit({
                    type: 'setComments',
                    blogId: blog.id,
                    comments: res.data.comments
                  })
                }
              })
              .catch(errorHandle)
          });
        })
        .catch(errorHandle)
    },
    addlikes(blogId) {   // 点赞
      var that = this
      Axios.put(process.env.VUE_APP_URL + '/api/blog/add/likes/' + blogId)
        .then((response) => {
          if (response.data.success === true)
          {
            that.$store.commit({
              type: 'addLikes',
              blogId: blogId
            })
          }
        })
        .catch(errorHandle)
    },
    addComment(blogId) {  // 增加评论
      var that = this
      Axios.post(process.env.VUE_APP_URL + '/api/comment/add', {
        content: that.newComments[blogId],
        blogId: blogId
      })
      .then((response) => {
        if (response.data.success === true) {
          that.$store.commit({
            type: 'addComments',
            blogId: blogId,
            comments: response.data.comments
          })
        }
      })
    }
  },
  mounted() {
    this.getAllBlogs()
  }
}
</script>

<style scoped>

</style>
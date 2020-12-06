<template>
  <div class="write-blog row align-items-center justify-content-center">
    <b-container>
      <b-form @submit="onSubmit" v-if="show">
        <b-form-group
          id="input-group-blog-title"
          label="博客主题："
          label-for="input-blog-title"
        >
          <b-form-input
            id="input-blog-title"
            v-model="newBlog.title"
            required
            placeholder="Enter blog title"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-blog-content"
          label="博客内容："
          label-for="input-blog-content"
        >
          <b-form-textarea
            id="input-blog-content"
            v-model="newBlog.content"
            required
            placeholder="Enter blog content"
          ></b-form-textarea>
        </b-form-group>

        <b-form-group
          id="input-group-blog-img"
          label="博客图片："
          label-for="input-blog-img"
        >
          <b-form-file
            id="input-blog-img"
            v-model="imgFile"
            v-on:input="uploadImg"
            required
            placeholder="Choose a img or drop it here..."
            drop-placeholder="Drop img here..."
          ></b-form-file>
          <b-img fluid :src="newBlog.img"></b-img>
        </b-form-group>
        <b-button type="submit" variant="primary">发布博客</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import Axios from 'axios';
Axios.defaults.withCredentials = true
import errorHandle from "@/util/errorHandle.js";

export default {
  name: "writeBlog",
  data() {
    return {
      newBlog: {
        title: "",
        content: "",
        img: "",
      },
      imgFile: null,
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      var that = this
      Axios.post(process.env.VUE_APP_URL + '/api/blog/add/blog', this.newBlog)
        .then((response) => {
          if (response.data.success === true)
          {
            location = '/home?userName=' + that.$store.getters.userName
          }
        })
    },
    uploadImg() {
      // 读取图片，解析成base64
      var reader = new FileReader();
      reader.readAsDataURL(this.imgFile);
      reader.onload = (e) => {
        this.newBlog.img = e.target.result;
      };
      reader.onerror = errorHandle;
    },
  },
};
</script>

<style scoped>

</style>

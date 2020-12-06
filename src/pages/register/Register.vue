<template>
  <div id="register">
    <b-container>
      <div>
        <b-alert :show="registerShow" dismissible variant="danger">用户名已存在</b-alert>
      </div>

      <b-img center fluid src="~@/img/register.gif" alt="register"> </b-img>

      <b-form @submit="onSubmit" v-if="show">
        <b-form-group label="用户名：" label-for="input-username">
          <b-form-input
            id="input-username"
            v-model="form.userName"
            required
            placeholder="Enter useName"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="密码：" label-for="input-password">
          <b-form-input
            id="input-password"
            type="password"
            v-model="form.passWord"
            required
            placeholder="Enter passWord"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="邮箱：" label-for="input-email">
          <b-form-input
            id="input-email"
            type="email"
            v-model="form.email"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>

        <b-form-group>
          <b-button squared block type="submit" variant="outline-primary"
            >注册</b-button
          >
        </b-form-group>

        <b-form-group>
          <b-button
            squared
            block
            type="button"
            variant="outline-secondary"
            href="/login"
            >已有账号，去登录</b-button
          >
        </b-form-group>
      </b-form>

      <p class="text-center">© 2020-2020</p>
    </b-container>
  </div>
</template>

<script>
import Axios from "axios";
Axios.defaults.withCredentials = true
import errorHandle from '@/util/errorHandle.js'

export default {
  name: "Register",
  data() {
    return {
      form: {
        userName: "",
        passWord: "",
        email: "",
      },
      registerShow: false,
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      var that = this
      Axios.post(process.env.VUE_APP_URL + "/api/login/register", this.form)
        .then((response) => {
          if (response.data.success === true)
          {
            that.registerShow = false
            location = '/login?userName=' + that.form.userName
          }
          else
          {
            that.registerShow = true
          }
        })
        .catch(errorHandle);
    }
  }
};
</script>

<style scoped>

</style>

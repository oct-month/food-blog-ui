<template>
  <div
    id="login"
    class="row align-items-center justify-content-center login-center"
  >
    <b-container>
      <div>
        <b-alert :show="loginShow.success" dismissible variant="success">登陆成功</b-alert>
        <b-alert :show="loginShow.fail" dismissible variant="danger">用户名或密码错误</b-alert>
      </div>

      <b-img center fluid src="~@/img/login.gif" alt="login"> </b-img>

      <b-form @submit="onSubmit" v-if="show">
        <b-form-group label="用户名:" label-for="input-username">
          <b-form-input
            id="input-username"
            v-model="form.userName"
            required
            placeholder="Enter useName"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="密码:" label-for="input-password">
          <b-form-input
            id="input-password"
            type="password"
            v-model="form.passWord"
            required
            placeholder="Enter passWord"
          ></b-form-input>
        </b-form-group>

        <b-form-group>
          <b-button
            squared
            block
            type="submit"
            variant="outline-primary"
            >登录</b-button
          >
        </b-form-group>

        <b-form-group>
          <b-button
            squared
            block
            type="button"
            variant="outline-secondary"
            href="/register"
            >注册</b-button
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
import getUrlParams from '@/util/getUrlParams.js'
import errorHandle from '@/util/errorHandle.js'

export default {
  name: "Login",
  data() {
    return {
      form: {
        userName: "",
        passWord: "",
      },
      loginShow: {
        success: false,
        fail: false
      },
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault(); // 预定义的默认操作
      var that = this
      Axios.post(process.env.VUE_APP_URL + "/api/login/dologin", this.form)
        .then((response) => {
          if (response.data.success === true)
          {
            that.loginShow.success = true
            that.loginShow.fail = false
            location = '/'
          }
          else
          {
            that.loginShow.success = false
            that.loginShow.fail = true
          }
        })
        .catch(errorHandle);
    },
  },
  mounted() {
    this.form.userName = getUrlParams('userName') || ''
  }
};
</script>

<style scoped>
#login {
  height: 100vh;
  margin-left: 0em;
  margin-right: 0em;
}
</style>

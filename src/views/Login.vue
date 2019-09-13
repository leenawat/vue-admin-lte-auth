<template>
  <div class="hold-transition login-page">
    <div class="login-box">
      <div class="login-logo">
        <a href="../../index2.html">
          <b>Admin</b>LTE
        </a>
      </div>
      <!-- /.login-logo -->
      <div class="login-box-body">
        <p class="login-box-msg">Sign in to start your session</p>

        <div>
          <div class="form-group has-feedback">
            <input type="email" class="form-control" placeholder="Email" />
            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
          </div>
          <div class="form-group has-feedback">
            <input type="password" class="form-control" placeholder="Password" />
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          <div class="row">
            <div class="col-xs-8">
              <div class="checkbox icheck">
                <label>
                  <input type="checkbox" />
                  Remember Me {{token}}
                </label>
              </div>
            </div>
            <!-- /.col -->
            <div class="col-xs-4">
              <button @click="login()" class="btn btn-primary btn-block btn-flat">Sign In</button>
            </div>
            <!-- /.col -->
          </div>
        </div>

        <div class="social-auth-links text-center">
          <p>- OR -</p>
          <a href="#" class="btn btn-block btn-social btn-facebook btn-flat">
            <i class="fa fa-facebook"></i> Sign in using
            Facebook
          </a>
          <a href="#" class="btn btn-block btn-social btn-google btn-flat">
            <i class="fa fa-google-plus"></i> Sign in using
            Google+
          </a>
        </div>
        <!-- /.social-auth-links -->

        <a href="#">I forgot my password</a>
        <br />
        <a href="register.html" class="text-center">Register a new membership</a>
      </div>
      <!-- /.login-box-body -->
    </div>
    <!-- /.login-box -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    token: ""
  }),
  methods: {
    login() {
      axios
        .post("https://expressjs-auth.herokuapp.com/user/login", {
          username: "user",
          password: "password"
        })
        .then(response => {
          console.log(response.data);
          this.token = response.data.token;
          this.getUserInfo();
        })
        .catch(err => {
          console.log(err);
        });
    },
    getUserInfo() {
      axios({
        method: "GET",
        url: "https://expressjs-auth.herokuapp.com/user/info",
        headers: {
          Authorization: "Bearer user-token"
        }
      })
        .then(res => {
          console.log(res.data);
          if (res.data && res.data.roles.length > 0) {
            this.$router.push({ name: "home" });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
.login-box {
  padding-top: 100px;
  margin-top: 0px;
  margin-bottom: 0px;
  height: 100vh;
}
</style>
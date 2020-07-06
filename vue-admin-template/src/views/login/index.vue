<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <img src="@/assets/login/title.png" alt class="title" />
      <div class="login-form-cont">
        <img src="@/assets/login/logo.png" alt class="logo" />
        <div class="form-container">
          <el-form-item prop="username">
            <span class="svg-container">
              <svg-icon icon-class="user" />
            </span>
            <el-input
              v-model="loginForm.username"
              name="username"
              type="text"
              :readonly="readonlyStatus"
              placeholder="请输入用户名"
              @keyup.enter.native="handleLogin"
            />
          </el-form-item>
          <el-form-item prop="password">
            <span class="svg-container">
              <svg-icon icon-class="password" />
            </span>
            <el-input
              :type="pwdType"
              v-model="loginForm.password"
              name="password"
              placeholder="请输入密码"
              class="el-psd"
              @keyup.enter.native="handleLogin"
              :readonly="readonlyStatus"
            />
            <span class="show-pwd" @click="showPwd">
              <svg-icon :icon-class="pwdType === 'password' ? 'eye' : 'eye-open'" />
            </span>
          </el-form-item>
          <el-form-item prop="code" class="code-item">
            <el-input
              v-model="loginForm.code"
              name="code"
              class="code"
              type="text"
              placeholder="请输入验证码"
              @keyup.enter.native="handleLogin"
            />
            <span class="code-img" @click="refreshCode">
              <img :src="codeurl" alt="请点击获取验证码" />
            </span>
            <div class="refresh" @click="refreshCode">
              刷新
              <i class="el-icon-refresh" />
            </div>
          </el-form-item>
          <!-- <el-form-item prop="randomStr">
            <span class="svg-container">
              <svg-icon icon-class="randomStr" />
            </span>
            <el-input
              v-model="loginForm.randomStr"
              name="randomStr"
              class="el-psd"
            />
            <span class="show-pwd" @click="showPwd">
              <svg-icon :icon-class="pwdType === 'password' ? 'eye' : 'eye-open'" />
            </span>
          </el-form-item>-->
          <el-form-item style="margin-top: 50px;">
            <el-button
              :loading="loading"
              type="primary"
              style="width:100%;"
              @click="handleLogin"
            >登 录</el-button>
          </el-form-item>
        </div>
      </div>
    </el-form>
  </div>
</template>

<script>
import { getVerificationCode } from "@/api/login";
import { randNum } from "@/utils/index";

export default {
  name: "Login",
  data() {
    const validateUsername = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("用户名不能为空"));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("密码不能为空"));
      } else {
        callback();
      }
    };
    const validateCode = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("验证码不能为空"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "",
        password: "",
        code: "",
        randomStr: ""
      },
      loginRules: {
        code: [
          {
            required: true,
            trigger: "blur",
            validator: validateCode
          }
        ],
        username: [
          {
            required: true,
            trigger: "blur",
            validator: validateUsername
          }
        ],
        password: [
          {
            required: true,
            trigger: "blur",
            validator: validatePass
          }
        ]
      },
      loading: false,
      pwdType: "password",
      redirect: undefined,
      // codeurl: window.g.baseURL + '/auth/code?randomStr=' + randNum(17),
      codeurl: "",
      randCode: 0,
      readonlyStatus: true
    };
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect;
        console.log(1);
      },
      immediate: true
    }
  },
  mounted: function() {
    this.changeRead();
  },
  created() {
    this.refreshCode();
    this.loginForm.username = "fos";
    this.loginForm.password = "a123456";
    // this.loginForm.username = 'JJXXDC2'
    //   this.loginForm.password = 'a123456'
  },
  methods: {
    changeRead() {
      var that = this;
      setTimeout(function() {
        that.readonlyStatus = false;
      }, 1000);
    },
    showPwd() {
      if (this.pwdType === "password") {
        this.pwdType = "";
      } else {
        this.pwdType = "password";
      }
    },
    refreshCode() {
      // this.readonlyStatus = false;
      this.loginForm.randomStr = randNum(17);
      // getVerificationCode(this.randCode).then(response => {
      // console.log(response)
      this.codeurl =
        window.g.baseURL + "/auth/code?randomStr=" + this.loginForm.randomStr;
      // })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("Login", this.loginForm)
            .then((value) => {
              this.loading = false;
              this.$router.push({
                path: this.redirect || "/"
              });
            })
            .catch((value) => {
              this.loading = false;
              this.refreshCode();
            });
        } else {
          console.log("提交错误，请刷新页面重试");
          return false;
        }
      });
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
$bg: #2d3a4b;
$light_gray: #eee;

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 35px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      appearance: none;
      -ms-progress-appearance: none;
      -webkit-appearance: none;
      border-radius: 0px;
      // padding: 12px 5px 12px 15px;
      color: #ffffff;
      height: 35px;

      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }

    input[type="password"]::-ms-reveal {
      display: none;
    }

    input[type="password"]::-ms-clear {
      display: none;
    }
  }

  .el-psd {
    input {
      width: 85%;
      margin-left: -10px;
      padding-left: 0;
    }
  }

  .el-form-item {
    background: #133e7e;
    border-radius: 5px;
    border: solid 1px #1276c3;
    color: #ffffff;
    font-size: 16px;
    width: 320px;
    margin: 0 auto;
    height: 42px;
    margin-bottom: 20px;

    .el-form-item__content {
      line-height: 31px;
    }
  }
}
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background: url(../../assets/login/bg.jpg) no-repeat center center;
  background-size: 100% 100%;
  position: relative;

  .login-form {
    position: absolute;
    left: 0;
    right: -50%;
    top: 0;
    bottom: 0;
    width: 412.5px;
    height: 491.5px;
    margin: auto;
  }

  .svg-container {
    padding: 4px 5px 5px 1px;
    color: #ffffff;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    border-right: 1px solid #1276c3;
  }

  .title {
    margin: 0 auto;
    height: 33px;
    width: 243.75px;
  }

  .login-form-cont {
    width: 412.5px;
    height: 470.5px;
    background: url(../../assets/login/border.png);
    background-size: 100% 100%;
    margin-top: 25px;
    text-align: center;
    box-sizing: border-box;
    padding: 50px 30px 30px 30px;

    .logo {
      width: 42px;
      margin: 0 auto;
    }

    .form-container {
      width: 100%;
      height: 300px;
      background-color: rgba(19, 62, 126, 0.5);
      padding-top: 20px;
      margin-top: 20px;

      .code-item {
        background: none;
        border: none;
        height: auto;

        .code {
          width: 162px;
          background: #133e7e;
          border-radius: 5px;
          border: solid 1px #1276c3;
          vertical-align: middle;
          height: 42px;
          line-height: 42px;
        }

        .code-img {
          display: inline-block;
          vertical-align: middle;
          cursor: pointer;
          color: #ffffff;
          width: 135px;
          height: 42px;
          margin-left: 15px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .refresh {
          color: #36a9e1;
          cursor: pointer;
          position: absolute;
          right: 0;
        }
      }
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: #ffffff;
    cursor: pointer;
    user-select: none;
    z-index: 20;
  }
}
</style>

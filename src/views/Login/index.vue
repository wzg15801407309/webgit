<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height>
        <v-row class="align-center justify-center">
          <v-col sm="8" md='6' lg='5' xl='3'>
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <!-- <v-toolbar-title>Login form</v-toolbar-title> -->
                <v-toolbar-title>代理商管理后台</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form ref="login_form">
                  <v-text-field label="Loginname" v-model="loginForm.loginname" name="loginname" prepend-icon="mdi-account" type="text" :rules="[rules.required]"></v-text-field>
                  <v-text-field id="password" label="Password" name="password" v-model="loginForm.password" prepend-icon="mdi-lock" :type="passwordDisplay ? 'text' : 'password'" :append-icon="passwordDisplay ? 'mdi-eye' : 'mdi-eye-off'" @click:append="passwordDisplay = !passwordDisplay"
                                :rules="[rules.required]"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn :loading="loginLoading" color="primary" @click="userLogin">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-snackbar top :color="snackbar.color" v-model="snackbar.show">
      {{ snackbar.text }}
      <v-btn text @click="snackbar.show = false">Close</v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import { mlogin } from '@/api/api.js'
export default {
  name: "Login",
  data: () => ({
    passwordDisplay: false,
    loginLoading: false,
    loginForm: {
      loginname: "",
      password: ""
    },
    rules: {
      required: value => !!value || "Required."
    },
    snackbar: {
      show: false,
      text: "",
      color: "primary"
    }
  }),
  methods: {
    userLogin () {
      const _this = this;
      if (!_this.$refs.login_form.validate()) return;
      // 表单验证成功
      _this.loginLoading = true;
      mlogin(_this.loginForm).then(res => {
        if (res.errcode) {
          console.log('消息提示框需要做', res)
          return
        }
        // 保存token
        window.sessionStorage.setItem('token', res.token);
        // 保存 userinfo
        window.sessionStorage.setItem('userinfo', JSON.stringify(res));
        _this.loginLoading = false;
        _this.$router.replace("/dashboard");
      });

    },
    snackbarShow (text, color) {
      this.snackbar = {
        show: true,
        text,
        color
      };
    }
  }
};
</script>

<style scoped></style>
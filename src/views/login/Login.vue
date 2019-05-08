<template>
  <div class="root">
    <vue-particles  class="lizi" ></vue-particles>
    <div class="login-box">
      <el-card class="box-card1">
        <div class="card-body" @click="switchClick">
          <div class="login-title">{{isRegister?'登录':'注册'}}</div>
        </div>
      </el-card>
      <el-card class="box-card2">
        <div class="card-body">
          <div class="login-title">{{isRegister?'注册':'登录'}}</div>
          <div class="box-title">三行诗</div>
          <div class="line-box"></div>
          <div class="form-box">
            <div class="form-item">
              <div class="item-name">用户名：</div>
              <el-input class="item-input" v-model="form.userName"></el-input>
            </div>
            <div class="form-item">
              <div class="item-name">密码：</div>
              <el-input class="item-input" v-model="form.password"></el-input>
            </div>
            <div class="form-item" v-show="isRegister">
              <div class="item-name">确认密码：</div>
              <el-input class="item-input" v-model="form.rePassword"></el-input>
            </div>
            <div class="form-item">
              <div class="item-name">验证码：</div>
              <el-input class="item-input" v-model="form.code"></el-input>
              <identify class="identify" :identifyCode="identifyCode" @canvasClick="canvasClick"></identify>
            </div>
          </div>

          <el-button class="btn" type="primary" :loading="false">{{isRegister?"立 即 注 册":"立 即 登 录"}}</el-button>
        </div>
      </el-card>
    </div>
    <div class="left-bottom-box">
      螃蟹在剥我的壳，笔记本在写我。
      <br>漫天的我落在枫叶上雪花上。
      <br>而你在想我。
      <br>
      <div class="author">—— 佚名</div>
    </div>
    <div class="right-top-box">
      I love three things in the world,
      <br>sun ,moon ,and you，
      <br>sun for morning ,moon for night ,you forever.
      <div class="author">—— Twilight</div>
    </div>
  </div>
</template>

<script>
import Identify from "@components/Identify.vue";
export default {
  name: "Login",
  props: {
    msg: String
  },
  data: () => ({
    tableData: [],
    form: {
      userName: "",
      password: "",
      rePassword: "",
      code: ""
    },
    isRegister: true,
    identifyCode: "8659"
  }),
  components: {
    Identify
  },
  mounted() {},
  methods: {
    switchClick() {
      this.isRegister = !this.isRegister;
      this.canvasClick();
    },
    canvasClick() {
      let randomNum = Math.floor(Math.random() * 9000) + 1000;
      this.identifyCode = String(randomNum);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.right-top-box {
  transform: rotate(45deg);
  -ms-transform: rotate(45deg); /* IE 9 */
  -moz-transform: rotate(45deg); /* Firefox */
  -webkit-transform: rotate(45deg); /* Safari 和 Chrome */
  -o-transform: rotate(45deg); /* Opera */
  height: auto;
  position: absolute;
  top: 140px;
  right: 37px;
  font-size: 24px;
  color: #fff;
  line-height: 55px;
  text-align: center;
}
.author {
  text-align: right;
  padding-bottom: 30px;
}
view {
  font-family: "黑体";
}
.left-bottom-box {
  height: auto;
  position: absolute;
  bottom: 50px;
  left: 50px;
  display: inline-block;
  text-align: left;
  writing-mode: vertical-rl;
  color: #fff;
  font-size: 24px;
  line-height: 55px;
  text-decoration: underline;
}
.identify {
  margin-top: 3px;
  margin-left: 6px;
  border-radius: 4px;
}
.btn {
  width: 100%;
  margin-top: 50px;
}
.form-box {
  margin-top: 50px;
}
.item-name {
  width: 100px;
  text-align: left;
}
.item-input {
  flex: 1;
}
.form-item {
  display: flex;
  align-items: center;
  margin-top: 30px;
}
.root {
  min-width: 100%;
  min-height: 100vh;
  display: inline-block;
  text-align: center;
  background-color: #efefef;
  background-image: url(https://api.dujin.org/bing/1920.php);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center 0;
  background-size: cover;
}
.login-box {
  width: 400px;
  display: inline-block;
  margin-top: 200px;
  position: relative;
}
.box-card1 {
  width: 100%;
  height: 550px;
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  text-align: left;
}
.box-card2 {
  width: 100%;
  height: 550px;
  position: absolute;
  top: -40px;
  left: 40px;
  display: inline-block;
  text-align: left;
}
.card-body {
  position: relative;
  display: inline-block;
  text-align: center;
  width: 100%;
}
.login-title {
  position: absolute;
  left: -12px;
  top: -12px;
  width: 30px;
  font-size: 18px;
  font-family: "黑体";
}
.box-title {
  text-align: center;
  font-size: 24px;
  font-family: "黑体";
  width: 100%;
  margin-top: 20px;
}
.line-box {
  margin-top: 40px;
  width: 100%;
  height: 5px;
  border-top: 1px solid #409eff;
  border-bottom: 1px solid #409eff;
}
</style>
<style>
.el-input-group__append {
  padding: 1px;
}
</style>


<template>
  <div class="app">
    <div class="back" :style="backgroundDiv">
    </div>
    <div class = "total">
      <div class="character">
        {{" 准 星 系 统 "}}
      </div>
      <div class = "Sub_Title">
        {{" — Focus on accuracy & efficiency — "}}
      </div>
      <div class="down">
        {{"准星系统 Copyright © 2021 杨屹涵 - 17301054 版权所有"}}
      </div>
      <div class="name animated" >
        <el-input v-model="input1" placeholder="请输入工号" ></el-input>
      </div>
      <div class="password animated" >
        <el-input v-model="input2" placeholder="请输入密码" show-password></el-input>
      </div>
      <div class = "border animated" v-if="this.input1.length !== 0 && this.input2.length !== 0">
        <el-button v-on:click="loadIt" icon="el-icon-check" v-bind:class="enter" round >
          {{msg}}
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import "../api/api";
  import swal from 'sweetalert';

  export default {
    name: "animated",
    data() {
      return {
        backgroundDiv: {
          backgroundImage: 'url(' + require('../assets/switch.gif') + ')',
          backgroundRepeat:'no-repeat'
        },
        input1:'',
        input2:'',
        input3:'',
        enter:'btn',
        msg:'工号密码登录',
        icon:'',
      }
    },
    methods:{
      loadIt:function () {
        if(this.enter==='btn'){
          let params="user_id="+this.input1+"&password="+this.input2;
          this.icon="el-icon-edit"
          this.msg=null
          this.enter='botton'
          this.$axios({
            url: this.$loginUrl,
            method: 'post',
            data: {
              user_id: this.input1,
              password: this.input2
            },
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json;charset=utf-8"
            },
          }).then(res => {
            console.info(res)
            if(res.data.status === 'Success'){
              swal({
                title: "登陆成功",
                text: "欢迎进入准星系统",
                icon: "success",
                button: "确认",
              }).then(value=> {
                if (value = true) {
                    this.$router.push('tables/integrate')
                    this.globalValue.user_id = this.input1
                    this.globalValue.user_name = res.data.user_name
                }
              });
            }else{
              swal({
                title: "登陆失败",
                text:  "用户名或密码错误，请重新输入",
                icon:  "error",
                button: "确认",
              }).then(value=> {
                if (value = true) {
                  this.icon=''
                  this.msg='工号密码登录'
                  this.enter='btn'
                }
              });
            }
          });
        }
      },
    }
  }
</script>

<style scoped>
  .app {
    height: max-content;
    font-family: 华光敦韵宋_CNKI;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #4f99ff;
  }
  .total{
    height: max-content;
  }
  .animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  .character{
    font-weight: bold;
    margin-top: -420px;
    font-size: 54px;
  }
  .Sub_Title{
    margin-top: 4px;
    font-size: 30px;
  }
  .down{
    margin-top: 260px;
    font-size: 14px;
    color: #e0e0e0;
  }
  .back {
    height: 723px;
    vertical-align: middle;
    background: no-repeat center center;
    background-size: auto;
  }
  @keyframes fadeBottomIn {
    0%{
      opacity: 0;
      transform: translate3d(0,100%,0);
      -webkit-transform: translate3d(0,100%,0);
    }
    100%{
      opacity: 1;
      transform: none;
      -webkit-transform: none;
    }
  }
  @keyframes showUp {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
  .name {
    margin-top: -240px;
    margin-left: 665px;
    height: 20px;
    width: 200px;
    z-index: auto;
    animation-delay:1.5s;
    animation-name: fadeBottomIn;
    -webkit-animation-name: fadeBottomIn;
  }
  .password {
    margin-top: 40px;
    margin-left: 665px;
    height: 20px;
    width: 200px;
    z-index: auto;
    animation-delay:2.5s;
    animation-name: fadeBottomIn;
    -webkit-animation-name: fadeBottomIn;
  }
  .upper{
    margin-left: -6px;
    animation-delay:0.5s;
    animation-name: showUp;
    -webkit-animation-name: showUp;
  }
  .border{
    margin-top: 40px;
    margin-left: -6px;
    animation-name: showUp;
    -webkit-animation-name: showUp;
  }
  .btn{
    height: 40px;
    width: 200px;
    text-indent: -2px;
  }
  .botton{
    height: 40px;
    width: 10px;
    text-indent: -3.5px;
  }

</style>

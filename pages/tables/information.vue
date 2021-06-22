<template>
  <div class="container">
    <div>
      <main-menu></main-menu>
    </div>
    <div>
      <a-layout :style="{ marginLeft: '200px',top:'15px'}">
        <a-layout-content :style="{ margin: '80px 20px 0', overflow: 'initial' }">
          <div :style="{ background: '#f0f2f5' }" >
            <div :style="{height:'568px',marginTop:'5px',background:'#fff'}" id="app">
              <template>
                <a-row>
                  <a-col span="12" class="left_photo">
                  <img class="photo" src="~static/avatar_yihan.jpg"  style=" width:300px ; height:300px;border-radius: 50%" />
                  </a-col>
                  <a-col span="12" class="right_info">
                    <div class="name">
                      {{name_it}}
                    </div>
                    <div class="id">
                      {{id_it}}
                    </div>
                    <div class="seat">
                      {{seat_it}}
                    </div>
                    <div class="phone">
                      {{phone_it}}
                    </div>
                    <div class="email">
                      {{email_it}}
                    </div>
                    <div class="possess">
                      {{possess_it}}
                    </div>
                    <el-button v-on:click="ExitIt" icon="el-icon-circle-close" type="danger" class="exit">
                      {{"退出账号"}}
                    </el-button>
                  </a-col>
                </a-row>
              </template>
            </div>
          </div>

        </a-layout-content>
        <a-layout-footer :style="{ textAlign: 'center' }">
          准星系统 Copyright © 2021 杨屹涵 - 17301054 版权所有
        </a-layout-footer>
      </a-layout>
    </div>
  </div>
</template>

<script>
  import MainMenu from "../../components/mainMenu/mainMenu";
  import "../../api/api";
  import swal from "sweetalert";

  export default {
    name: "order",
    components: {
      MainMenu
    },
    data() {
      return {
        name_it:    "姓名："+this.globalValue.user_name,
        id_it:      "工号："+this.globalValue.user_id,
        seat_it:    '',
        phone_it:   '',
        email_it:   '',
        possess_it: '',
      };
    },
    methods: {
      ExitIt:function () {
        swal({
          title: "退出成功",
          icon: "success",
          button: "确认",
        }).then(value=> {
          if (value = true) {
            this.$router.replace({path: '../'})
          }
        });
      }
    },
    mounted() {
      this.$axios({
        url: this.$infoUrl,
        method: 'post',
        data: {
          user_id: this.globalValue.user_id,
        },
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json;charset=utf-8"
        },
      }).then(res=>{
        console.info(res)
        if(res.data.status == 'Success'){
          this.seat_it = "工位："+res.data.user_location
          this.phone_it= "手机："+res.data.user_phone
          this.email_it= "邮箱："+res.data.user_email
          this.possess_it = "岗位："+res.data.user_job
        }
      })
    },
    computed: {
    }
  };
</script>

<style scoped>
  .photo{
    margin-left: 45%;
    margin-top: 20%;
    border:solid 4px #4f99ff;
  }
  .name{
    margin-top: 20.5%;
    margin-left: 20px;
    font-size: 20px;
  }
  .id{
    margin-top: 10px;
    margin-left: 20px;
    font-size: 20px;
  }
  .seat{
    margin-top: 10px;
    margin-left: 20px;
    font-size: 20px;
  }
  .phone{
    margin-top: 10px;
    margin-left: 20px;
    font-size: 20px;
  }
  .email{
    margin-top: 10px;
    margin-left: 20px;
    font-size: 20px;
  }
  .possess{
    margin-top: 10px;
    margin-left: 20px;
    font-size: 20px;
  }
  .exit{
    margin-top: 16px;
    margin-left: 20px;
    width: 200px;
    border-radius: 8px;
  }
</style>
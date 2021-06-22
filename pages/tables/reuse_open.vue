<template>
  <div class="container">
    <div>
      <main-menu></main-menu>
    </div>
    <div>
      <a-layout :style="{ marginLeft: '200px',top:'15px'}">
        <a-layout-content :style="{ margin: '85px 20px 0', overflow: 'initial' }">
          <div :style="{ padding: '16px', background: '#fff', textAlign: 'center',height:'568px' }">
            <a-row>
              <span class="labelhead" >开屏样式配置</span>
              <br><br>
            </a-row>
            <a-row>
              <div style="width:100% ; height:464px;border-radius: 10px; border:dashed 2px #4f99ff;" class="draw_place">
                <span class="innerlabel" style="float: right; margin-right: 16px;margin-top: 12px;color: #d7d7d7">样式编号：{{adv_style_id}}</span>
                <br><br>
                <el-button class="tool_button" @click="openDrawer" type="primary" :style="{float:'left',borderRadius:'0px 8px 8px 0px',marginLeft: left_it+'px'}">
                  <a-icon type="tool" style="font-size: 24px"/>
                  <br><br>工<br><br>具<br><br>栏<br><br>
                </el-button>
                <a-drawer
                        placement="left"
                        :closable="false"
                        :visible="drawer"
                        :get-container="false"
                        :mask="false"
                        :maskStyle={}
                        :width="378"
                        :wrap-style="{ position: 'absolute' }"
                        @close="closeDrawer"
                        closable="true"
                >
                  <!-- 胶囊图 -->
                  <a-row>
                    <a-row>
                      <span class="innerlabel">图片</span>
                    </a-row>
                    <a-row>
                      <el-button size="mini"style="border-radius:8px;width: 312px;margin-top: 8px" @click="upload_logo">上传图片</el-button>
                    </a-row>
                    <a-row style="width: 336px">
                      <draggable
                              class="dragLogo list-group"
                              :list="list_logo_pull"
                              :group="{ name: 'logo', pull: 'clone', put: false }"
                              @change="log_pull">
                        <img
                                class="list-group-logo"
                                v-for="element in list_logo_pull"
                                :key="element.address"
                                :src="require('../../assets/'+element.address)"
                                style="margin-top: 12px;margin-right: 12px;width:150px; height:200px;border-radius: 20px; border:dashed 2px #4f99ff;float: left"/>
                      </draggable>
                    </a-row>
                  </a-row>
                </a-drawer>
                <!--预览-->
                <div style="width:270px ; height:360px;border-radius: 20px; border:dashed 2px #4f99ff;margin-left: 495px;margin-top: 12px;padding: 18px">
                  <a-row style="margin-left: -20px;margin-top: -20px">
                    <draggable
                            class="dragLogo list-group"
                            :list="list_logo_push"
                            group="logo"
                            @change="log_logo_push">
                      <img
                              class="list-group-logo"
                              v-for="element in list_logo_push"
                              :key="element.address"
                              :src="require('../../assets/'+element.address)"
                              style="width:272px; height: 362px; border-radius: 20px;float: left; border:dashed 2px #4f99ff;"
                      />
                    </draggable>
                  </a-row>
                </div>
              </div>
            </a-row>
            <a-row style="margin-top: 7px">
              <el-button size="mini" type="primary" style="border-radius:8px;padding: 7px 45px;" @click="hand_in" v-clipboard:copy="adv_style_id" v-clipboard:success="onCopy" v-clipboard:error="onError">提交</el-button>
            </a-row>
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
  import draggable from "vuedraggable"

  export default {
    name: "order",
    components: {
      MainMenu,
      draggable
    },

    data() {
      return{
        adv_style_id:'KP0002',
        drawer: false,
        left_it:0,
        list_logo_pull:[
          {address:'open_01.png', id:1 },
          {address:'open_02.png', id:2 },
          {address:'open_03.png', id:3 },
          {address:'open_04.png', id:4 },
        ],
        list_logo_push:[
          {address:'empty_open.png', id:1}
        ],
      };
    },

    mounted() {
      this.$axios({
        url:this.$table2Url,
        method:'get',
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json;charset=utf-8"
        }
      }).then(res => {
        if(res.status==200){
          if(res.data.code==0){
            this.table_data=res.data.data
          }else if(res.data.code==-1){
            alert("查询失败！")
          }
        }else{
          alert(res.data.msg)
        }
      })
    },

    methods: {
      openDrawer(){
        this.drawer = true;
      },
      closeDrawer(){
        this.drawer = false;
      },
      hand_in(){
        swal({
          title:"样式编号："+this.adv_style_id+" 保存成功",
          text:"编号已复制到剪切板！",
          icon: "success",
          button: "确认",
        });
      },
      onCopy(e) {

      },
      onError() {

      },
      log_pull: function(evt) {
        window.console.log(evt);
      },
      log_logo_push: function(evt) {
        this.list_logo_push.pop();
        window.console.log(evt);
      },
      upload_logo(){

      },
    },
  };
</script>
<style scoped>

  .el-divider--horizontal{
    margin-top: 12px;
    margin-bottom: 8px;
  }

  .el-divider--vertical{
    height: 438px;
  }

  span.labelhead{
    font-size: 20px;
    float: left;
    margin-left: 6px;
  }

  span.innerlabel{
    font-size: 16px;
    font-weight: bold;
    float: left;
  }

  span.detail{
    font-size: 16px;
    float: left;
  }

  .draw_place{
    overflow: hidden;
    position: relative;
  }

  .tool_button{
    height: 380px;
    padding-right: 5px;
    padding-left: 5px;
  }

</style>
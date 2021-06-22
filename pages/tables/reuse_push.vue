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
              <span class="labelhead" >Push样式配置</span>
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
                        :width="364"
                        :wrap-style="{ position: 'absolute' }"
                        @close="closeDrawer"
                        closable="true"
                        >
                  <!-- 图标 -->
                  <a-row>
                    <a-row>
                      <span class="innerlabel">图标</span>
                    </a-row>
                    <a-row>
                      <el-button size="mini"style="border-radius:8px;width: 312px;margin-top: 8px" @click="upload_logo">上传图标</el-button>
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
                              style="margin-top: 12px;width:88px ; height:88px;border-radius: 10px; border:dashed 2px #4f99ff;margin-right: 24px;float: left"/>
                      </draggable>
                    </a-row>
                  </a-row>
                  <el-divider></el-divider>
                  <!-- 按钮 -->
                  <a-row>
                    <a-row>
                      <span class="innerlabel">按钮</span>
                    </a-row>
                    <a-row style="width: 336px">
                      <draggable
                              class="dragBtn list-group"
                              :list="list_btn_pull"
                              :group="{ name: 'btn', pull: 'clone', put: false }"
                              @change="log_pull">
                        <el-button
                              class="dragBtn list-group"
                              v-for="element in list_btn_pull"
                              :key="element.type"
                              :type="element.type"
                              size="mini"
                              style="width:150px; float:left ; border-radius: 8px; margin-right: 12px;margin-top: 12px;margin-left: 0px"
                        >请输入内容</el-button>

                      </draggable>
                    </a-row>
                  </a-row>
                </a-drawer>
                <!--预览-->
                <div style="width:480px ; height:164px;border-radius: 8px; border:dashed 2px #4f99ff;margin-left: 395px;margin-top: 64px;padding: 18px">
                  <a-row>
                    <a-col span="6">
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
                                style="width:84px; height: 84px; border-radius: 8px;border: dashed 2px #4f99ff;float: left"
                                />
                      </draggable>
                    </a-col>
                    <a-col span="18" style="margin-left: -10px">
                      <a-row>
                        <el-input size="small" placeholder = "请输入标题" disabled style="border-radius: 8px;border: dashed 2px #4f99ff"/>
                        <br>
                        <el-input class="content_input" placeholder = "请输入内容" disabled style="margin-top: 12px;border-radius: 8px;font-size: 13px;;border: dashed 2px #4f99ff"/>
                        <br>
                      </a-row>
                      <a-row style="margin-top: 12px;">
                        <!--取消按钮-->
                        <a-col :span="12">
                          <div style="border-radius: 8px; border:dashed 2px #4f99ff;height:30px;width: 150px;font-size: 13px;padding-top: 4px;background-color: #f5f7fa;float: left">
                            <draggable
                                    class="dragBtn list-group"
                                    :list="list_btn_push1"
                                    group="btn"
                                    @change="log_btn_push">
                              <el-button
                                    class="dragBtn list_group"
                                    v-for="element in list_btn_push1"
                                    :key="element.type"
                                    :type="element.type"
                                    size="mini"
                                    @change="log_btn_push"
                                    style="width: 150px;float: left;margin-left:-2px;margin-top: -6px;border-radius: 8px">取消按钮
                              </el-button>
                            </draggable>
                          </div>
                        </a-col>
                        <!--确认按钮-->
                        <a-col :span="12">
                          <div style="border-radius: 8px; border:dashed 2px #4f99ff;height:30px;width: 150px;font-size: 13px;padding-top: 4px;background-color: #f5f7fa;float: right">
                            <draggable
                                    class="dragBtn list-group"
                                    :list="list_btn_push2"
                                    group="btn"
                                    @change="log_btn_push">
                              <el-button
                                      class="dragBtn list_group"
                                      v-for="element in list_btn_push2"
                                      :key="element.type"
                                      :type="element.type"
                                      size="mini"
                                      @change="log_btn_push"
                                      style="width: 150px;float: left;margin-left:-2px;margin-top: -6px;border-radius: 8px">确认按钮
                              </el-button>
                            </draggable>
                          </div>
                        </a-col>
                      </a-row>
                      <br><br>
                     </a-col>
                  </a-row>
                </div>
                <br><br>
                <span class="innerlabel" style="color: #d7d7d7;margin-left: 460px" >按钮位可为空，或只选一个<br>其中左侧为取消按钮，右侧为确认按钮</span>
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
        adv_style_id:'PU0002',
        drawer: false,
        left_it:0,
        list_logo_pull:[
          {address:'xiaomi.png', id:1 },
          {address:'Apple.png', id:2 },
          {address:'empty_square.png', id:3 },
          {address:'empty_square.png', id:4 },
          {address:'empty_square.png', id:5 },
          {address:'empty_square.png', id:6 }
        ],
        list_logo_push:[
          {address:'add_square.png', id:1}
        ],
        list_btn_pull:[
          {type: 'default',id:1},
          {type: 'primary',id: 2},
          {type: 'success',id:3},
          {type: 'danger',id:4}
        ],
        list_btn_push1:[],
        list_btn_push2:[],
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
      log_btn_push: function(evt) {
        if(this.list_btn_push1.length > 1){
          this.list_btn_push1.pop();
        };
        if(this.list_btn_push2.length > 1){
          this.list_btn_push2.pop();
        };
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

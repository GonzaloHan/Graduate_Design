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
              <span class="labelhead">预测信息配置</span>
              <br><br>
            </a-row>
            <div style="border:dashed 2px #4f99ff;width: 101%;margin-left: -6px;border-radius: 10px;padding: 12px;height:464px">
            <a-row :gutter="10">
              <a-col span="11">
                <a-row>
                  <span class="innerlabel">广告编号：</span>
                  <span class="detail">{{adv_ID}}</span>
                </a-row>
                <el-divider></el-divider>
                <a-row>
                  <span class="innerlabel">输入广告名称：</span>
                  <el-input size="mini" v-model="input_adv_name" placeholder="简要描述广告内容" style="float: left; width: 220px"/>
                  <br><br>
                  <span class="innerlabel">选择展现形式：</span>
                  <el-checkbox-group v-model="model4" style="margin-top:2px;float: left" max="1">
                    <el-checkbox label="model4_b1">push推送</el-checkbox>
                    <el-checkbox label="model4_b2">开屏广告</el-checkbox>
                    <el-checkbox label="model4_b3">首页Banner</el-checkbox>
                    <el-checkbox label="model4_b4">搜索胶囊图</el-checkbox>
                  </el-checkbox-group>
                  <br><br>
                  <span class="innerlabel">输入样式编号：</span>
                  <el-input size="mini" v-model="input_adv_show_ID" placeholder="例：PU0001" style="float: left; width: 120px"/>
                  <br><br>
                  <span class="innerlabel">输入人群包编号：</span>
                  <el-input size="mini" v-model="input_adv_people_ID" placeholder="例：PP0001" style="float: left; width: 120px"/>
                </a-row>
                <el-divider></el-divider>
                <a-row>
                  <span class="innerlabel">是否需要AB测试：</span>
                  <el-checkbox-group v-model="model5" style="margin-top:2px;float: left" max="1">
                    <el-checkbox label="model5_b1">是</el-checkbox>
                    <el-checkbox label="model5_b2">否</el-checkbox>
                  </el-checkbox-group>
                  <br><br>
                  <span class="innerlabel">输入广告标题(A)：</span>
                  <el-input size="mini" v-model="input_adv_label_A" placeholder="请控制在10个文字以内" style="float: left; width: 220px" maxlength="10" show-word-limit/>
                  <br><br>
                  <span class="innerlabel">输入广告内容(A)：</span>
                  <el-input size="mini" v-model="input_adv_concept_A" placeholder="请控制在24个文字以内" style="float: left; width: 420px" maxlength="24" show-word-limit/>
                  <br><br>
                  <a-row v-if="this.model5.indexOf('model5_b1') != -1">
                    <span class="innerlabel">输入广告标题(B)：</span>
                    <el-input size="mini" v-model="input_adv_label_B" placeholder="请控制在10个文字以内" style="float: left; width: 220px" maxlength="10" show-word-limit/>
                    <br><br>
                    <span class="innerlabel">输入广告内容(B)：</span>
                    <el-input size="mini" v-model="input_adv_concept_B" placeholder="请控制在24个文字以内" style="float: left; width: 420px" maxlength="24" show-word-limit/>
                  </a-row>
                  <a-row v-if="this.model5.indexOf('model5_b1') == -1">
                    <span class="innerlabel">输入广告标题(B)：</span>
                    <el-input size="mini" v-model="input_adv_label_none" placeholder="请控制在10个文字以内" style="float: left; width: 220px" maxlength="10" show-word-limit disabled/>
                    <br><br>
                    <span class="innerlabel">输入广告内容(B)：</span>
                    <el-input size="mini" v-model="input_adv_concept_none" placeholder="请控制在24个文字以内" style="float: left; width: 420px" maxlength="24" show-word-limit disabled/>
                  </a-row>
                </a-row>
              </a-col>
              <a-col span="2">
                <el-divider direction="vertical"></el-divider>
              </a-col>
              <a-col span="11" style="margin-left: -44px">
                <a-row>
                  <span class="innerlabel">跳转链接：</span>
                  <el-input
                          type="textarea"
                          :rows="2"
                          placeholder="请输入内容"
                          v-model="jump_link"
                          style="margin-top: 12px;border-radius: 8px;margin-left: -8px;width: 560px">
                  </el-input>
                </a-row>
                <el-divider></el-divider>
                <a-row>
                  <span class="innerlabel">发送时间：</span>
                  <el-date-picker
                          v-model="date_value"
                          type="datetime"
                          placeholder="选择日期时间"
                          size="mini"
                          style="float:left;">
                  </el-date-picker>
                </a-row>
                <el-divider></el-divider>
                <a-row>
                  <span class="innerlabel">预览样式：</span>
                  <img src = "../../assets/Top2.png" style=" width:314px ; height:170px;border-radius: 10px; border:dashed 2px #4f99ff;float: left;margin-top: 4px" />
                </a-row>
                <el-divider></el-divider>
                <a-row>
                  <span class="innerlabel">预览手机：</span>
                  <el-input size="mini" v-model="input_adv_phone" placeholder="请输入手机IMEI号" style="float: left; width: 220px"/>
                  <el-button size="mini" @click="preview" style="float: left;margin-left:10px ;border-radius: 4px;padding: 6.5px 13px">发送预览</el-button>
                </a-row>
              </a-col>
            </a-row>
            </div>
            <div style="margin-top: 7px">
              <el-button type="primary" size="mini" style="padding: 7px 45px;border-radius: 8px" @click="predict">预测</el-button>
              <el-button type="success" size="mini" style="padding: 7px 45px;border-radius: 8px" @click="send">发送</el-button>
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
      return{
        adv_ID:'AD0005',
        input_adv_name:[],
        model4:[],
        input_adv_show_ID:[],
        input_adv_people_ID:[],
        model5:[],
        input_adv_label_none:[],
        input_adv_concept_none:[],
        input_adv_label_A:[],
        input_adv_concept_A:[],
        input_adv_label_B:[],
        input_adv_concept_B:[],
        date_value:'',
        input_adv_phone:[],
        jump_link:'',
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
      preview(){
        swal({
          title: "预览发送成功",
          text:  "请查收！",
          icon:  "success",
          button: "确认",
        })
      },
      predict(){
        swal({
          title: "预测成功",
          text:  "请在『预测信息展示』中查看预测点击率！",
          icon:  "success",
          button: "确认",
        })
      },
      send(){
        swal({
          title: "发送成功",
          text:  "请在『预测信息展示』中查看预测点击率！",
          icon:  "success",
          button: "确认",
        })
      },
    },
  };
</script>
<style scoped>

  .el-divider--horizontal{
    margin: 15px 0;
    width: 365px;
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

</style>

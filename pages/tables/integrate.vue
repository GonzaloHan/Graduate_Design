<template>
  <div class="container">
    <div>
      <main-menu></main-menu>
    </div>
    <div>
      <a-layout :style="{ marginLeft: '200px',top:'15px'}">
        <a-layout-content :style="{ margin: '85px 20px 0', overflow: 'initial' }">
          <div :style="{ padding: '16px', background: '#fff', textAlign: 'center',height:'568px' }">
            <!-- 第一板块-->
            <a-row>
              <span class="labelhead">广告样式Top4</span>
              <div class="littlenote">点击样式即可复制 ID</div>
              <br>
              <el-radio-group size="medium" v-model="model1">
                <el-radio-button label="model1_b1">push推送</el-radio-button>
                <el-radio-button label="model1_b2">开屏广告</el-radio-button>
                <el-radio-button label="model1_b3">首页Banner</el-radio-button>
                <el-radio-button label="model1_b4">搜索胶囊图</el-radio-button>
              </el-radio-group>
              <br><br>
              <!-- 图片位-->
              <a-row gutter="8">
                <a-col span="6">
                  <div @mouseover="mouse_in1" @mouseleave="mouse_out1" v-clipboard:copy="adv_id1" v-clipboard:success="onCopy" v-clipboard:error="onError">
                    <img src = "../../assets/Top1.png" style=" width:300px ; height:170px;border-radius: 10px; border:dashed 2px #4f99ff;" />
                    <span v-if="mouse_act1 === 'in'" class="IDtag">编号：{{adv_id1}}</span>
                  </div>
                </a-col>
                <a-col span="6">
                  <div @mouseover="mouse_in2" @mouseleave="mouse_out2" v-clipboard:copy="adv_id2" v-clipboard:success="onCopy" v-clipboard:error="onError">
                    <img src = "../../assets/Top2.png" style=" width:300px ; height:170px;border-radius: 10px; border:dashed 2px #4f99ff;" />
                    <span v-if="mouse_act2 === 'in'" class="IDtag">编号：{{adv_id2}}</span>
                  </div>
                </a-col>
                <a-col span="6">
                  <div @mouseover="mouse_in3" @mouseleave="mouse_out3" v-clipboard:copy="adv_id3" v-clipboard:success="onCopy" v-clipboard:error="onError">
                    <img src = "../../assets/Top3.png" style=" width:300px ; height:170px;border-radius: 10px; border:dashed 2px #4f99ff;" />
                    <span v-if="mouse_act3 === 'in'" class="IDtag">编号：{{adv_id3}}</span>
                  </div>
                </a-col>
                <a-col span="6">
                  <div @mouseover="mouse_in4" @mouseleave="mouse_out4" v-clipboard:copy="adv_id4" v-clipboard:success="onCopy" v-clipboard:error="onError">
                    <img src = "../../assets/Top4.png" style=" width:300px ; height:170px;border-radius: 10px; border:dashed 2px #4f99ff;" />
                    <span v-if="mouse_act4 === 'in'" class="IDtag">编号：{{adv_id4}}</span>
                  </div>
                </a-col>
              </a-row>
              <!--简介位-->
              <a-row gutter="8">
                <a-col span="6" style="margin-top: 6px">
                  <div class="describe">制作者：{{person1}}</div>
                  <div class="describe">使用次数：{{click_num1}}</div>
                  <div class="describe">平均点击率：{{click_rate1}}</div>
                </a-col>
                <a-col span="6" style="margin-top: 6px">
                  <div class="describe">制作者：{{person2}}</div>
                  <div class="describe">使用次数：{{click_num2}}</div>
                  <div class="describe">平均点击率：{{click_rate2}}</div>
                </a-col>
                <a-col span="6" style="margin-top: 6px">
                  <div class="describe">制作者：{{person3}}</div>
                  <div class="describe">使用次数：{{click_num3}}</div>
                  <div class="describe">平均点击率：{{click_rate3}}</div>
                </a-col>
                <a-col span="6" style="margin-top: 6px">
                  <div class="describe">制作者：{{person4}}</div>
                  <div class="describe">使用次数：{{click_num4}}</div>
                  <div class="describe">平均点击率：{{click_rate4}}</div>
                </a-col>
              </a-row>
            </a-row>
            <!-- 第二模块-->
            <a-divider></a-divider>
            <a-row>
              <span class="labelhead">制作广告样式</span><br><br>
              <a-row>
                <a-col span="12">
                  <div class = "step">步骤一：</div>
                  <span class = "describe2">选择广告展现形式</span>
                  <el-radio-group v-model="model2" style="margin-top: 12px">
                    <el-radio label="model2_b1">push推送</el-radio>
                    <el-radio label="model2_b2">开屏广告</el-radio>
                    <el-radio label="model2_b3">首页Banner</el-radio>
                    <el-radio label="model2_b4">搜索胶囊图</el-radio>
                  </el-radio-group>
                </a-col>
                <a-col span="12">
                  <div class = "step">步骤二：</div>
                  <span class = "describe2">点击『开始配置』按钮，自由且简单地探索多重多样的广告样式!</span>
                  <el-button type="primary" size="medium" style = "border-radius: 8px; float: right;margin-right: 6px" @click="integrate_it">开始配置<i class="el-icon-d-arrow-right el-icon--right"></i></el-button>
                </a-col>
              </a-row>
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

  const data=[];

  export default {
    name: "order",
    components: {
      MainMenu
    },

    data() {
      return {
        model1:'select1',
        model2:'',
        adv_id1:'PU2532',
        adv_id2:'PU9042',
        adv_id3:'PU3589',
        adv_id4:'PU2648',
        mouse_act1:'out',
        mouse_act2:'out',
        mouse_act3:'out',
        mouse_act4:'out',
        person1:'杨屹涵',
        click_num1:'14',
        click_rate1:'1.48%',
        person2:'王洋',
        click_num2:'8',
        click_rate2:'1.02%',
        person3:'张翔',
        click_num3:'18',
        click_rate3:'0.80%',
        person4:'杨屹涵',
        click_num4:'7',
        click_rate4:'0.78%'
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
        mouse_in1(){
          this.mouse_act1 = 'in'
        },
        mouse_out1(){
          this.mouse_act1 = 'out'
        },
        mouse_in2(){
          this.mouse_act2 = 'in'
        },
        mouse_out2(){
          this.mouse_act2 = 'out'
        },
        mouse_in3(){
          this.mouse_act3 = 'in'
        },
        mouse_out3(){
          this.mouse_act3 = 'out'
        },
        mouse_in4(){
          this.mouse_act4 = 'in'
        },
        mouse_out4(){
          this.mouse_act4 = 'out'
        },
        onCopy(e) {
          this.$message.success("编号："+e.text+" 复制成功！")
        },
        onError() {
          this.$message.warning("复制失败，请重试！")
        },
        integrate_it(){
          if(this.model2 === 'model2_b1'){
            this.$router.replace('/tables/reuse_push')
          }
          else if(this.model2 === 'model2_b2'){
            this.$router.replace('/tables/reuse_open')
          }
          else if(this.model2 === 'model2_b3'){
            this.$router.replace('/tables/reuse_Banner')
          }
          else if(this.model2 === 'model2_b4'){
            this.$router.replace('/tables/reuse_search')
          }else{
            this.$message.warning("请选择广告展现形式！")
          }
        }

    },
  };
</script>
<style scoped>
  span.labelhead{
    font-size: 20px;
    float: left;
    margin-left: 6px;
  }
  div.littlenote{
    font-size: 15px;
    color: #d7d7d7;
    font-style: italic;
    text-align: right;
    margin-right: 6px;
  }
  div.describe{
    font-size:15px;
    font-weight: lighter;
    text-align: left;
    margin-left: 6px;
  }
  span.describe2{
    font-size:15px;
    font-weight: lighter;
    float: left;
    margin-top: 8px;
    margin-left: 6px;
  }
  div.step{
    font-size: 15px;
    font-style: italic;
    color: #4f99ff;
    text-align: left;
    margin-left: 6px;
  }
  span.IDtag{
    width: 300px;
    height: 30px;
    line-height: 28px;
    display: block;
    margin-left: 5px;
    padding-right: 12px;
    background-color: #d7d7d7;
    border-radius: 0px 0px 10px 10px;
    opacity: 0.4;
    position: absolute;
    bottom: 0;
    color: black;
    font-size: 15px;
    font-weight: bold;
    text-align: right;
  }
</style>

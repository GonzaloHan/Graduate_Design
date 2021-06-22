<!--首页左栏 -->
<template>
    <a-layout id="components-layout-demo-fixed-sider">
        <a-layout-header :style="{ overflow: 'auto', height: '64px', width:'100%',position: 'fixed', left:'200px',background: '#fff' }">
            <el-row>
                <el-col :span="19">
                    <div class="DateText">{{nowTime}}</div>
                </el-col>
                <el-col :span="5">
                    <span class="NameText">{{name}}</span>
                    <img class="avatar" src="~static/avatar_yihan.jpg"  style=" width:40px ; height:40px;border-radius: 50%" />
                </el-col>
            </el-row>
        </a-layout-header>
        <a-layout>
            <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
                <div class="logo">
                    <span class="system">准星系统</span>
                </div>
                <a-menu theme="dark" mode="inline">
                    <a-sub-menu key="0">
                        <span slot="title"><i class="el-icon-cpu"></i><span style="margin-left: 12px">广告样式集成</span></span>
                        <a-menu-item key="sub-integrate" @click="gotoIntegrate">
                            <i class = 'el-icon-circle-plus-outline'></i>
                            <span style="margin-left: 10px">简单配置</span>
                        </a-menu-item>
                        <a-menu-item key="sub-reuse" @click="gotoReuse">
                            <i class = 'el-icon-brush'></i>
                            <span style="margin-left: 10px">样式复用</span>
                        </a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu key="9">
                        <span slot="title"><i class="el-icon-coordinate"></i><span style="margin-left: 12px">精准发布及预测</span></span>
                        <a-menu-item key="sub-people_bag" @click="gotoDistribute">
                            <i class = 'el-icon-help'></i>
                            <span style="margin-left: 10px">人群包采集</span>
                        </a-menu-item>
                        <a-menu-item key="sub-gather" @click="gotoSend">
                            <i class="el-icon-connection"></i>
                            <span style="margin-left: 10px">预测配置</span>
                        </a-menu-item>
                        <a-menu-item key="sub-guess" @click="gotoPredict">
                            <i class="el-icon-view"></i>
                            <span style="margin-left: 10px">信息展示</span>
                        </a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu key="2">
                        <span slot="title"><i class="el-icon-pie-chart"></i><span style="margin-left: 12px">运营数据展示</span></span>
                        <a-menu-item key="sub-person" @click="gotoAnalysis_person">
                            <a-icon type="user" />
                            <span>个人数据</span>
                        </a-menu-item>
                        <a-menu-item key="sub-group" @click="gotoAnalysis_group">
                            <a-icon type="home" />
                            <span>团队数据</span>
                        </a-menu-item>
                        <a-menu-item key="sub-app" @click="gotoAnalysis_app">
                            <a-icon type="share-alt" />
                            <span>联运数据</span>
                        </a-menu-item>
                    </a-sub-menu>
                    <a-menu-item key="3" @click="gotoInfo">
                        <i class="el-icon-document-copy" />
                        <span style="margin-left: 8px">个人信息</span>
                    </a-menu-item>
                </a-menu>
            </a-layout-sider>
            <a-layout-content>
                <div v-show="popup" style="margin-left: 500px">
                    <!--这里是要展示的内容层-->
                    <div class="reuse" style="padding: 16px">
                        <a-row>
                            <span class = 'popup_label'>样式复用</span>
                            <br><br>
                            <span class = 'popup_dialog'>样式编号：</span>
                            <el-input size="mini" v-model="input_reuse_ID" placeholder="请输入旧样式编号"style="width: 260px"></el-input>
                        </a-row>
                        <br>
                        <a-row :gutter="16">
                            <a-col :span="12">
                                <el-button size="mini" type="primary" style="width: 168px;float: right;border-radius: 8px" @click="reuse_it">确认</el-button>
                            </a-col>
                            <a-col :span="12">
                                <el-button size="mini" type="danger" style="width: 168px;float: left;border-radius: 8px" @click="closepopup">取消</el-button>
                            </a-col>
                        </a-row>
                    </div>
                    <!--这里是半透明背景层-->
                    <div class="over"></div>
                </div>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script>
    export default {
        data(){
            return{
                nowTime:new Date().toLocaleString(),
                name:this.globalValue.user_name,
                popup:0,
                input_reuse_ID:'',
            }
        },
        props: {
        },
        mounted() {
            let that= this;
            this.timer = setInterval(function() {
                that.nowTime =  new Date().toLocaleString();
            });
        },
        beforeDestroy: function() {
            if (this.timer) {
                clearInterval(this.timer);
            }
        },
        methods: {
            onCollapse(collapsed, type) {
                console.log(collapsed, type);
            },
            onBreakpoint(broken) {
                console.log(broken);
            },
            gotoIntegrate(){
                this.$router.replace('/tables/integrate')
            },
            gotoReuse(){
                this.popup = 1;
            },
            gotoDistribute(){
              this.$router.replace('/tables/distribute')
            },
            gotoSend(){
                this.$router.replace('/tables/Send')
            },
            gotoPredict(){
                this.$router.replace('/tables/Predict')
            },
            gotoAnalysis_person(){
              this.$router.replace('/tables/analysis_person')
            },
            gotoAnalysis_group(){
                this.$router.replace('/tables/analysis_group')
            },
            gotoAnalysis_app(){
                this.$router.replace('/tables/analysis_app')
            },
            gotoInfo(){
                this.$router.replace('/tables/information')
            },
            closepopup(){
                this.popup = 0;
            },
            reuse_it(){
                if(this.input_reuse_ID.indexOf("PU") != -1){
                    this.$router.replace('/tables/reuse_push')
                }
                else if(this.input_reuse_ID.indexOf("KP") != -1){
                    this.$router.replace('/tables/reuse_open')
                }
                else if(this.input_reuse_ID.indexOf("BA") != -1){
                    this.$router.replace('/tables/reuse_Banner')
                }
                else if(this.input_reuse_ID.indexOf("SE") != -1){
                    this.$router.replace('/tables/reuse_search')
                }else {
                    this.$message.warning("请输入正确格式的样式编号")
                }
            }

        },
    };
</script>

<style>
  #components-layout-demo-fixed-sider .logo {
    height: 64px;
    background: #000442;
    color: white;
  }

  .system{
    font-size: 24px;
    margin-left: 46px;
    line-height: 64px;
  }
  .DateText{
      margin-left: -30px;
      font-size: 20px;
  }

  .NameText{
      margin-left: 22px;
      font-size: 20px;
  }

  .avatar{
      margin-top: -8px;
      margin-left: 10px;
      border:solid 2px #4f99ff;
  }

  span{
      font-size: 14px;
  }

  .over {
      position: fixed;
      width: 100%;
      height: 100%;
      opacity: 0.7;
      filter: alpha(opacity=70);
      top: 0;
      left: 0;
      z-index: 9999;
      background-color: #111111;
  }
  .popup_label{
      font-size: 20px;
  }

  .popup_dialog{
      font-size: 16px;
  }

  .reuse {
      position: fixed;
      height: 168px;
      width: 380px;
      background-color: white;
      border-radius: 8px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 10000;
  }


</style>



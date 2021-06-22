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
              <span class="labelhead">信息展示</span>
              <br><br>
            </a-row>
            <a-row :gutter="10">
              <a-col :span="3">
                <el-input v-model="input_adv_id" placeholder="输入广告编号" suffix-icon="el-icon-edit"></el-input>
              </a-col>
              <!-- 名称输入-->
              <a-col :span="4">
                <el-input v-model="input_adv_name" placeholder="输入广告名称" suffix-icon="el-icon-edit"></el-input>
              </a-col>
              <!-- 类别下拉框-->
              <a-col :span="4">
                <el-select v-model="value_show_type" multiple collapse-tags placeholder="选择展现类型">
                  <el-option
                          v-for="item in show_type_options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                  </el-option>
                </el-select>
              </a-col>
              <a-col :span="3">
                <el-input v-model="input_adv_show_id" placeholder="输入样式编号" suffix-icon="el-icon-edit"></el-input>
              </a-col>
              <a-col :span="3">
                <el-input v-model="stable_click_rate" disabled></el-input>
              </a-col>
              <!-- 排序方式下拉框-->
              <a-col :span="3">
                <el-select v-model="value_order" placeholder="选择排序方式">
                  <el-option label="不排序" value="order_no"></el-option>
                  <el-option label="升序" value="order_asc"></el-option>
                  <el-option label="降序" value="order_des"></el-option>
                </el-select>
              </a-col>
              <a-col :span="2">
                <el-button v-on:click="apply_filter" icon="el-icon-circle-check" type="primary" style="width: 124px" round>
                  {{"应用"}}
                </el-button>
              </a-col>
              <a-col :span="2">
                <el-button v-on:click="no_filter" icon="el-icon-circle-close" type="danger" style="margin-left: 30px" round/>
              </a-col>
            </a-row>
            <br>
            <a-row>
              <a-table
                      :columns="predict_table"
                      :rowKey="record => record.id"
                      :dataSource="predict_data"
                      :pagination="pagination"
                      :loading="loading"
                      :size="middle"
                      @change="handleTableChange"
                      style="height: 468px">
              <span slot="adv_status" slot-scope="text,record" >
                <span v-if="record.adv_status === '编辑中'" style="color: limegreen">编辑中</span>
                <span v-if="record.adv_status === '发送中'" style="color: orange">发送中</span>
                <span v-if="record.adv_status === '已完成'" style="color: #4f99ff">已完成</span>
                <span v-if="record.adv_status === '撤回中'" style="color: red">撤回中</span>
              </span>
                <span slot="adv_click" slot-scope="text,record">
                <el-button type="primary" @click="get_Inform(record.adv_id)" size="mini" style="border-radius: 8px">查看</el-button>
              </span>
              </a-table>
            </a-row>
            </div>
          <div v-show="popup" style="margin-left: 100px">
            <!--这里是要展示的内容层-->
            <div class="more_info" style="padding: 16px">
              <a-row>
                <span class = 'popup_label'>详细广告信息</span>
                <el-button size="mini" style="float: right" icon="el-icon-close" circle @click="closepopup"></el-button>
                <br><br>
                <a-row>
                  <a-col span="12">
                    <span class="popup_dialog">预测 / 实际CTR</span><br>
                    <a-card :bordered="false" style="height: 320px">
                      <div id="ctr_bar_chart" style="width:360px; height:300px;margin-left: -24px " ></div>
                    </a-card>
                  </a-col>
                  <a-col span="12">
                    <div class="popup_dialog">编号：{{info_data.adv_id}}</div>
                    <div class="popup_dialog">名称：{{info_data.adv_name}}</div>
                    <div class="popup_dialog">形式：{{info_data.adv_show_type}}</div>
                    <div class="popup_dialog">样式编号：{{info_data.adv_show_id}}</div>
                    <div class="popup_dialog">类别：{{info_data.adv_cat}}</div>
                    <div class="popup_dialog">标题：{{info_data.adv_label}}</div>
                    <div class="popup_dialog">内容：{{info_data.adv_index}}</div>
                    <div class="popup_dialog">人群包：{{info_data.adv_people_id}}</div>
                    <div class="popup_dialog">发送时间：{{info_data.adv_time}}</div>
                    <div class="popup_dialog">预测点击率：{{info_data.adv_pre_click_rate}}</div>
                    <div class="popup_dialog">实际点击率：{{info_data.adv_click_rate}}</div>
                    <span class="popup_dialog">发送状态：{{info_data.adv_status}}</span>
                    <el-button v-if="info_data.adv_status === '编辑中'"
                            type="text" @click="reuse_it" style="margin-top: -4px" >（继续编辑）</el-button>
                  </a-col>
                </a-row>
              </a-row>
              <br>
            </div>
            <!--这里是半透明背景层-->
            <div class="over"></div>
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

  const predict_table = [
    {
      title: '广告编号',
      dataIndex: 'adv_id',
      align:'center',
      width: '10%',
    },
    {
      title: '名称',
      dataIndex: 'adv_name',
      align: 'center',
      width: '10%',
      ellipsis: true,
    },
    {
      title: '展现形式',
      dataIndex: 'adv_show_type',
      align: 'center',
      width: '10%'
    },
    {
      title: '样式编号',
      dataIndex: 'adv_show_id',
      align:'center',
      width: '10%',
    },
    {
      title: '广告标题',
      dataIndex: 'adv_label',
      align:'center',
      width: '20%',
      ellipsis: true,
    },
    {
      title: '人群包编号',
      dataIndex: 'adv_people_id',
      align:'center',
      width: '10%',
    },
    {
      title: '预测点击率',
      dataIndex: 'adv_pre_click_rate',
      align:'center',
      width: '10%',
    },
    {
      title: '状态',
      dataIndex: 'adv_status',
      align:'center',
      width: '10%',
      scopedSlots: { customRender: 'adv_status' },
    },
    {
      title: '查看详情',
      dataIndex: 'adv_click',
      key:'adv_click',
      align:'center',
      width: '10%',
      scopedSlots: { customRender: 'adv_click' },
    }
  ];
  var ctr_chart;
  var pre_click_rate,click_rate;

  export default {
    name: "order",
    components: {
      MainMenu
    },

    data() {
      return {
        popup: 0,
        predict_data:[],
        info_data:[],
        predict_table,
        pagination: {},
        loading: false,
        middle:'middle',
        stable_click_rate:'按照点击率',
        show_type_options:[
          {
            label:'push推送',
            value: 'type_push'
          },{
            label: '开屏广告',
            value: 'type_begin'
          },{
            label: '首页Banner',
            value: 'type_Banner'
          },{
            label: '搜索胶囊图',
            value: 'type_search'
          }],
        value_show_type:[],
        input_adv_id:'',
        input_adv_name:'',
        input_adv_show_id:'',
        value_order:'',
      };
    },

    mounted:function() {
      this.get_data(0);
    },

    methods: {

      get_data:function(check_type){
        this.$axios({
          url:this.$predictUrl,
          method:'post',
          data: {
            adv_check_type: check_type.toString(),
            adv_id: this.input_adv_id === '' ? 'null' : this.input_adv_id,
            adv_name: this.input_adv_name === '' ? 'null' : this.input_adv_name,
            adv_show_type: this.value_show_type.length === 0 ? 'null' : this.value_show_type[0],
            adv_show_id: this.input_adv_show_id === '' ? 'null' : this.input_adv_show_id,
            adv_order: this.value_order === '' ? 'null' : this.value_order,
            user_id: this.globalValue.user_id
          },
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json;charset=utf-8"
          }
        }).then(res => {
          console.info(res)
          if(res.data.status == 'Success'){
            if(check_type.toString() === '0'){
              this.predict_data = res.data.predict_data
            }else{
              this.info_data = res.data.predict_data
            }
          }else {
            this.$message.error('数据库连接失败，请重试');
          }
        })
      },

      callback(key) {
        console.log(key);
      },

      onChange(date, dateString) {
        console.log(date, dateString);
      },

      handleTableChange(pagination, filters, sorter) {
        console.log(pagination);
        const pager = {...this.pagination};
        pager.current = pagination.current;
        this.pagination = pager;
        this.fetch({
          results: pagination.pageSize,
          page: pagination.current,
          sortField: sorter.field,
          sortOrder: sorter.order,
          ...filters,
        });
      },

      get_Inform(adv_id){
        this.get_data(adv_id)
        let that = this
        var t = setTimeout(function () {
          that.popup = 1
          that.initCtrChart(that.info_data.adv_pre_click_rate.toString().replace("%",""),
                  that.info_data.adv_click_rate.toString().replace("%",""));
        },200)
      },

      closepopup(){
        this.popup = 0;
      },

      initCtrChart(pre_click_rate,click_rate){
        var echarts = require('echarts');
        ctr_chart = echarts.init(document.getElementById('ctr_bar_chart'));
        ctr_chart.setOption({
          xAxis: {
            data: ['预测', '实际'],
            splitNumber: 10,
            axisTick: {
              show: true,
              alignWithLabel: true
            }
          },
          yAxis: {
            type: 'value',
            min: 0,
            max: 0.5,
            show: false,
            axisTick: {
              show: false,
              alignWithLabel: true
            }
          },
          series: [
            {
              type: 'bar',
              barWidth: 60,
              itemStyle: {
                normal:{
                  color: new echarts.graphic.LinearGradient(
                          0, 0, 0, 1,
                          [
                            {offset: 0, color: '#c0d8f5'},
                            {offset: 0.6, color: '#70b3ec'},
                            {offset: 1, color: '#4f99ff'}
                          ]
                  ),
                  label: {
                    show: true, //开启显示
                    position: 'top', //在上方显示
                    textStyle: { //数值样式
                      color: '#525252',
                      fontSize: 16
                    }
                  }
                }
              },
              data: [pre_click_rate,click_rate]
            }
          ]
        })
      },

      setName(e) { //文字超出显示省略号
        return '<span  title="' + e + '" style="display:inline-block;width: 100%;text-align: center;' +
                '        overflow : hidden;' +
                '        text-overflow: ellipsis;' +
                '        white-space: nowrap;">' + e + '</span>'
      },

      apply_filter:function(){
        this.get_data();
        this.$notify({
          title: '筛选条件已应用',
          type: 'success',
          offset:80
        });
      },

      no_filter:function () {
        this.$notify({
          title: '筛选条件已清除',
          type: 'success',
          offset:80
        });
        this.input_Code = [],
                this.input_adv_id = [],
                this.input_adv_name = [],
                this.value_show_type = [],
                this.input_adv_show_id = [],
                this.value_order = []
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

  span.popup_dialog{
    font-size: 16px;
    line-height: 28px;
  }

  div.popup_dialog{
    font-size: 16px;
    line-height: 28px;
    text-align: left;
  }

  .more_info {
    position: fixed;
    height: 430px;
    width: 800px;
    background-color: white;
    border-radius: 8px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 10000;
  }

</style>

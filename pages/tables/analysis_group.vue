<template>
    <div class="container">
        <div>
            <main-menu style="z-index: 9999;position: relative"></main-menu>
            <a-layout :style="{ marginLeft: '200px',top:'15px'}">
                <!--                信息汇总-->
                <a-layout-content :style="{ margin: '85px 20px 0', overflow: 'initial' }">
                    <div :style="{ padding: '24px', background: '#fff', textAlign: 'center',height:'450px' }">
                        <span class="medium-head">DAU、利润统计（日）</span>
                        <!--                        <a-range-picker @change="onChange" :style="{float:'right'}"/>-->
                        <br>
                        <div id="main4" style="height: 100%;width: 100%" ></div>
                    </div>
                </a-layout-content>

                <a-layout-content :style="{ margin: '20px 20px 0', overflow: 'initial' }">
                    <div>
                        <a-row :gutter="16">
                            <!--                            KPI-->
                            <a-col :span="6">
                                <a-card :bordered="false" style="height: 250px" >
                                    <span class="sellhead">Q1预期利润 KPI</span><br>
                                    <span class="totalsell" >￥{{profit_KPI}}</span><br>
                                    <span class="comparehead">上个Q实际利润 ￥{{com_pro_KPI}}</span>
                                    <br>
                                    <a-divider />
                                    <span class="sellhead">已完成利润 KPI</span>&nbsp;<br>
                                    <span class="totalsell">￥{{done_KPI}}</span>
                                </a-card>
                            </a-col>
                            <!--                            客户数-->
                            <a-col :span="6">
                                <a-card :bordered="false"  style="height: 250px">
                                    <span class="sellhead">已联运应用</span><br>
                                    <span class="totalsell" >{{coop_App}}个</span><br>
                                    <span class="comparehead">上个Q联运应用 ￥{{com_coop_App}}</span>
                                    <br>
                                    <a-divider />
                                    <span class="sellhead">待联运应用</span>&nbsp;<br>
                                    <span class="totalsell">{{wl_coop_App}}个</span>
                                </a-card>
                            </a-col>
                            <!-- DAU，点击率-->
                            <a-col :span="6">
                                <a-card :bordered="false"  style="height: 250px">
                                    <span class="sellhead">DAU</span><br>
                                    <span class="totalsell" >{{dau}}W</span><br>
                                    <span class="comparehead" v-if="com_dau > 0">同期增长{{' '+com_dau+' '}}%</span>
                                    <span class="comparehead" v-if="com_dau === 0">与同期持平</span>
                                    <span class="comparehead" v-if="com_dau < 0">同期下降{{' '+Math.abs(com_dau)+' '}}%</span>
                                    <i v-if="com_dau > 0" class="el-icon-caret-top" style="color: #00d500" ></i>
                                    <i v-if="com_dau < 0" class="el-icon-caret-bottom" style="color: #ff0000" ></i>
                                    <br>
                                    <a-divider />
                                    <span class="sellhead">广告点击率</span>&nbsp;<br>
                                    <span class="totalsell">{{avg_click_rate}}%</span><br>
                                    <span class="comparehead" v-if="com_click_rate > 0">同期增长{{' '+com_click_rate+' '}}%</span>
                                    <span class="comparehead" v-if="com_click_rate === 0">与同期持平</span>
                                    <span class="comparehead" v-if="com_click_rate < 0">同期下降{{' '+Math.abs(com_click_rate)+' '}}%</span>
                                    <i v-if="com_click_rate > 0" class="el-icon-caret-top" style="color: #00d500" ></i>
                                    <i v-if="com_click_rate < 0" class="el-icon-caret-bottom" style="color: #ff0000" ></i>
                                </a-card>
                            </a-col>
                            <!--                            人员贡献占比-->
                            <a-col :span="6">
                                <a-card :bordered="false"  style="height: 250px">
                                    <span class="sellhead">运营人员贡献占比</span>
                                    <div id="main3" style="height: 230%;width: 100%"></div>
                                </a-card>
                            </a-col>
                        </a-row>
                    </div>
                </a-layout-content>
                <a-layout-content :style="{ margin: '20px 20px 0', overflow: 'initial'}">
                    <div>
                        <a-row >
                            <a-col :span="24">
                                <a-card :bordered="false">
                                    <span class="medium-head">广告详情</span>
                                    <br><br>
                                    <a-row :gutter="10">
                                        <!-- 编号输入-->
                                        <a-col :span="3">
                                            <el-input v-model="input_Code" placeholder="输入编号" suffix-icon="el-icon-edit"></el-input>
                                        </a-col>
                                        <!-- 运营人员下拉框-->
                                        <a-col :span="4">
                                            <el-select v-model="value_people" multiple collapse-tags placeholder="选择运营人员">
                                                <el-option
                                                        v-for="item in people_options"
                                                        :key="item.value"
                                                        :label="item.label"
                                                        :value="item.value">
                                                </el-option>
                                            </el-select>
                                        </a-col>
                                        <!-- 展现形式下拉框-->
                                        <a-col :span="4">
                                            <el-select v-model="value_show" multiple collapse-tags placeholder="选择展现形式">
                                                <el-option
                                                        v-for="item in show_options"
                                                        :key="item.value"
                                                        :label="item.label"
                                                        :value="item.value">
                                                </el-option>
                                            </el-select>
                                        </a-col>
                                        <!-- 类别下拉框-->
                                        <a-col :span="4">
                                            <el-select v-model="value_category" multiple collapse-tags placeholder="选择类别">
                                                <el-option
                                                        v-for="item in cat_options"
                                                        :key="item.value"
                                                        :label="item.label"
                                                        :value="item.value">
                                                </el-option>
                                            </el-select>
                                        </a-col>
                                        <a-col :span="2">
                                            <!-- 排序变量下拉框-->
                                            <el-input v-model="value_var" disabled placeholder="按点击率">
                                            </el-input>
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
                                            <el-button v-on:click="apply_filter" icon="el-icon-circle-check" style="width: 124px " type="primary" round>
                                                {{"应用"}}
                                            </el-button>
                                        </a-col>
                                        <a-col :span="1">
                                            <el-button v-on:click="no_filter" icon="el-icon-circle-close" style="margin-left: 30px" type="danger"  round/>
                                        </a-col>
                                    </a-row>
                                    <br>
                                    <a-table
                                            :columns="columns_table"
                                            :rowKey="record => record.id"
                                            :dataSource="table_data"
                                            :pagination="pagination"
                                            :loading="loading"
                                            @change="handleTableChange"
                                            :style="{height:'400px'}"
                                    >
                                    </a-table>
                                </a-card>
                            </a-col>
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
    const table_data=[
        {
            adv_Code:'AD0001',
            adv_maker:'杨屹涵',
            adv_sub:'Push推送',
            adv_type:'视频',
            adv_index:'腾讯视频月卡仅需1元钱！',
            adv_time:'2021-03-14 20:00:00',
            adv_rate:'0.32%'
        },
        {
            adv_Code:'AD0002',
            adv_maker:'杨屹涵',
            adv_sub:'Push推送',
            adv_type:'视频',
            adv_index:'腾讯视频月卡仅需1元钱！',
            adv_time:'2021-03-15 20:00:00',
            adv_rate:'0.41%'
        },
        {
            adv_Code:'AD0003',
            adv_maker:'杨屹涵',
            adv_sub:'开屏广告',
            adv_type:'工具',
            adv_index:'小度小度！我在！',
            adv_time:'2021-03-14 08:00:00',
            adv_rate:'0.27%'
        },
        {
            adv_Code:'AD0004',
            adv_maker:'杨屹涵',
            adv_sub:'Push推送',
            adv_type:'视频',
            adv_index:'腾讯视频月卡仅需1元钱！',
            adv_time:'2021-03-16 20:00:00',
            adv_rate:'0.39%'
        },
        {
            adv_Code:'AD0005',
            adv_maker:'杨屹涵',
            adv_sub:'搜索胶囊图',
            adv_type:'体育',
            adv_index:'懂球帝，更懂你',
            adv_time:'2021-03-12 10:00:00',
            adv_rate:'0.50%'
        },
        {
            adv_Code:'AD0006',
            adv_maker:'杨屹涵',
            adv_sub:'Push推送',
            adv_type:'视频',
            adv_index:'腾讯视频月卡仅需1元钱！',
            adv_time:'2021-03-17 20:00:00',
            adv_rate:'0.27%'
        }
    ];

    const columns_table = [
        {
            title: '编号',
            dataIndex: 'adv_Code',
            align:'center',
            width: '12.5%',
        },
        {
            title: '运营人员',
            dataIndex: 'adv_maker',
            align:'center',
            width: '12.5%',
        },
        {
            title: '展现形式',
            dataIndex: 'adv_sub',
            align:'center',
            width: '12.5%',
        },
        {
            title: '类别',
            dataIndex: 'adv_type',
            align:'center',
            width: '12.5%',
        },
        {
            title: '广告内容',
            dataIndex: 'adv_index',
            align:'center',
            width: '22.5%',
        },
        {
            title: '发送时间',
            dataIndex: 'adv_time',
            align:'center',
            width: '15%',
        },
        {
            title: '点击率',
            dataIndex: 'adv_rate',
            align:'center',
            width: '12.5%',
        }
    ];
    var dis_approved,approved,group_pro_KPI,group_done_KPI,coop_App,wl_coop_App,dau,avg_click_rate;
    var send_num=new Array();
    var click_rate=new Array();
    var smile=new Array();
    var app_cat=new Array();
    var base64;
    var myChart1,myChart2,myChart3;

    export default {
        components: {
            MainMenu
        },
        data() {
            return {
                table_data,
                pagination: {},
                loading: false,
                columns_table,
                profit_KPI:'3,000,000',
                com_pro_KPI:'2,700,000',
                done_KPI:'2,089,428',
                coop_App:13,
                dau:16,
                avg_click_rate:0.47,
                com_coop_App:12,
                wl_coop_App:4,
                com_dau:0,
                com_click_rate:0.03,
                img_base64:'',
                people_options:[
                    {
                        label:'杨屹涵',
                        value:'yyh'
                    },{
                        label:'徐一知',
                        value:'xyz'
                    },{
                        label:'张翔',
                        value:'zx'
                    },{
                        label:'Oliver',
                        value:'oliver'
                    },{
                        label:'王洋',
                        value:'wy'
                    }
                ],
                cat_options:[
                    {
                        label:'视频',
                        value:'cat_video'
                    },{
                        label: '体育',
                        value: 'cat_sport'
                    },{
                        label:'金融',
                        value: 'cat_finance'
                    },{
                        label:'育儿',
                        value: 'cat_child'
                    },{
                        label: '教育',
                        value: 'cat_edu'
                    },{
                        label: '工具',
                        value: 'cat_tool'
                    },{
                        label:'电商',
                        value: 'cat_market'
                    }
                ],
                show_options:[{
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
                }
                ],
                input_Code:[],
                value_people:[],
                value_show:[],
                value_category:[],
                value_var:'按点击率',
                value_order:[]
            }
        },

        methods: {

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

            connect() {
                this.$axios({
                    url: this.$indexUrl,
                    method: 'get',
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "application/json;charset=utf-8"
                    }
                }).then(res => {
                    console.info(res.data)
                    if (res.status == 200) {
                        if (res.data.code == 0) {
                            dis_approved = res.data.data[0]["dis_approved"];
                            approved = res.data.data[0]["approved"]
                            group_pro_KPI = res.data.data[0]["group_pro_KPI"]
                            group_done_KPI = res.data.data[0]["group_done_KPI"]
                            coop_App = res.data.data[0]["coop_App"]
                            wl_coop_App = res.data.data[0]["wl_coop_App"]
                            dau = res.data.data[0]["dau"]
                            avg_click_rate = res.data.data[0]["avg_click_rate"]
                            this.profit_KPI = group_pro_KPI
                            this.done_KPI = group_done_KPI
                            this.coop_App = coop_App
                            this.wl_coop_App = wl_coop_App
                            this.dau = dau
                            this.avg_click_rate = avg_click_rate
                            this.approvedRate = approved * 100 / (dis_approved + approved)
                            smile = res.data.data[3]
                            this.table_data=smile
                            //console.info(res.data.data[1].length)

                            for(var i =0;i<res.data.data[2]['fall_list'].length;i++){
                                send_num.push(res.data.data[2]['fall_list'][i]['num'])
                            }
                            for(var i =0;i<res.data.data[2]['stranger'].length;i++){
                                click_rate.push(res.data.data[2]['stranger'][i]['num'])
                            }


                            base64 = res.data.data[4]["pic_base64"]
                            app_cat=res.data.data[1]
                            this.img_base64=base64
                            console.info(smile)
                            myChart1.setOption({
                                series:[{
                                    type: 'pie',
                                    height: 100,
                                    weight: 100,
                                    radius: '55%',
                                    center: ['50%', '40%'],
                                    data:[
                                        {value:approved,name:'合格'},
                                        {value:dis_approved,name:'不合格'}
                                    ]
                                }]
                            })

                            myChart2.setOption({
                                legend: {
                                    orient: 'horizontal',
                                    left: 0,
                                    right: 0,
                                    height: 30,
                                    weight: 40,
                                    icon: 'circle',
                                    data: ['视频', '体育', '金融', '育儿', '教育', '工具', '电商'],
                                    show: true
                                },
                                series: [
                                    {
                                        type: 'bar',
                                        name: '视频',
                                        data: [
                                            {value:app_cat[0]["event_num"],name:'视频'}
                                        ],
                                        barMaxHeight: 20,
                                        label: {
                                            show: true,
                                            position: 'inside'
                                        },
                                    },
                                    {
                                        type: 'bar',
                                        name: '体育',
                                        data: [
                                            {value:app_cat[1]["event_num"],name:'体育'}
                                        ],
                                        barMaxWidth: 20, // 柱条的最大宽度，不设时自适应
                                        // 图形上的文本标签
                                        label: {
                                            show: true,
                                            position: 'inside'
                                        },
                                    },
                                    {
                                        type: 'bar',
                                        name: '金融',
                                        data: [
                                            {value:app_cat[2]["event_num"],name:'金融'}
                                        ],
                                        barMaxWidth: 20,
                                        label: {
                                            show: true,
                                            position: 'inside'
                                        },
                                    },
                                    {
                                        type: 'bar',
                                        name: '育儿',
                                        data: [
                                            {value:app_cat[3]["event_num"],name:'育儿'}
                                        ],
                                        barMaxWidth: 20,
                                        label: {
                                            show: true,
                                            position: 'inside'
                                        },
                                    },
                                    {
                                        type: 'bar',
                                        name: '教育',
                                        data: [
                                            {value:app_cat[4]["event_num"],name:'教育'}
                                        ],
                                        barMaxWidth: 20,
                                        label: {
                                            show: true,
                                            position: 'inside'
                                        },
                                    },
                                    {
                                        type: 'bar',
                                        name: '工具',
                                        data: [
                                            {value:app_cat[5]["event_num"],name:'工具'}
                                        ],
                                        barMaxWidth: 20,
                                        label: {
                                            show: true,
                                            position: 'inside'
                                        },
                                    },
                                    {
                                        type: 'bar',
                                        name: '电商',
                                        data: [
                                            {value:app_cat[6]["event_num"],name:'电商'}
                                        ],
                                        barMaxWidth: 20,
                                        label: {
                                            show: true,
                                            position: 'inside'
                                        },
                                    },
                                ],
                            })
                            myChart3.setOption({
                                series: [
                                    {
                                        type: 'bar',
                                        data: send_num,
                                        barGap: '100%',
                                        barCategoryGap: '40%'
                                    },
                                    {
                                        type: 'line',
                                        data: click_rate,
                                        barGap: '100%',
                                        barCategoryGap: '40%'
                                    },
                                ],
                            })
                            //console.info(send_num)
                        } else if (res.data.code == -1) {
                            alert("请求失败！")
                        }
                    } else {
                        alert(res.data.msg)
                    }
                })
            },

            initCharts3() {
                var echarts = require('echarts');
                // 基于准备好的dom，初始化echarts实例
                myChart2 = echarts.init(document.getElementById('main3'));
                myChart2.setOption({
                    color: ['#ff5151', '#28ff28', '#4dffff', '#ffca18', '#f9ff5a'],
                    tooltip: {},
                    xAxis: {
                        type: 'value',
                        show: false
                    },
                    yAxis: {
                        show: false,
                        type: 'category'
                    },
                    legend: {
                        orient: 'horizontal',
                        left: 0,
                        right: 0,
                        height: 30,
                        weight: 40,
                        icon: 'circle',
                        data: ['杨屹涵','徐一知','张翔','Oliver','王洋'],
                        show: true
                    },
                    series: [
                        {
                            type: 'bar',
                            name: '杨屹涵',
                            data: [
                                {value:19,name:'杨屹涵'}
                            ],
                            barMaxHeight: 20,
                            label: {
                                show: true,
                                position: 'inside'
                            },
                        },
                        {
                            type: 'bar',
                            name: '徐一知',
                            data: [
                                {value:14,name:'徐一知'}
                            ],
                            barMaxWidth: 20, // 柱条的最大宽度，不设时自适应
                            // 图形上的文本标签
                            label: {
                                show: true,
                                position: 'inside'
                            },
                        },
                        {
                            type: 'bar',
                            name: '张翔',
                            data: [
                                {value:8,name:'张翔'}
                            ],
                            barMaxWidth: 20,
                            label: {
                                show: true,
                                position: 'inside'
                            },
                        },
                        {
                            type: 'bar',
                            name: 'Oliver',
                            data: [
                                {value:7,name:'育儿'}
                            ],
                            barMaxWidth: 20,
                            label: {
                                show: true,
                                position: 'inside'
                            },
                        },
                        {
                            type: 'bar',
                            name: '王洋',
                            data: [
                                {value:5,name:'王洋'}
                            ],
                            barMaxWidth: 20,
                            label: {
                                show: true,
                                position: 'inside'
                            },
                        }
                    ],
                    grid: {
                        left: 6,
                        top: 40,   // 与容器顶部的距离
                    },
                });
            },

            initCharts4() {
                var echarts = require('echarts');
                // 基于准备好的dom，初始化echarts实例
                myChart3 = echarts.init(document.getElementById('main4'));
                // 绘制图表
                myChart3.setOption({
                    color: ['#02F78E', '#5e98ed'],
                    title: {
                        // text: 'ECharts 入门示例'
                    },

                    tooltip: {},
                    xAxis: {
                        data: ['4日', '5日', '6日', '7日', '8日', '9日', '10日', '11日', '12日', '13日'],
                        splitNumber: 10,
                        axisTick: {
                            show: true,
                            alignWithLabel: true
                        }
                    },
                    legend: {
                        data: ['DAU', '利润']
                    },
                    yAxis: [
                        {
                            name: 'DAU',
                            type: 'value',
                            min: 0,
                            max: 50,
                            interval: 5,
                            show: true,
                            axisLabel: {formatter: '{value}w'},
                            axisTick: {
                                show: false,
                                alignWithLabel: true
                            }
                        },
                        {
                            name: '利润',
                            type: 'value',
                            min: 0,
                            max: 10,
                            interval: 1,
                            show: true,
                            axisLabel: {formatter: '{value}k'},
                            axisTick: {
                                show: false,
                                alignWithLabel: true
                            }
                        },
                    ],
                    series: [
                        {
                            type: 'bar',
                            data: [30, 20, 27,35,31, 20, 43, 14, 37, 23],
                            barGap: '100%',
                            barCategoryGap: '40%'
                        },
                        {
                            type: 'line',
                            data: [21,12 ,33 ,35 ,37 ,24 ,39 ,21,28,16],
                            barGap: '100%',
                            barCategoryGap: '40%'
                        },
                    ],
                    grid: {
                        right: '5%',
                        left: '5%',
                        top: '15%',   // 与容器顶部的距离
                        bottom: '15%', // 与容器底部的距离
                    },

                });
            },
            apply_filter:function(){
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
                    this.value_show = [],
                    this.value_category = [],
                    this.value_var = '按点击率',
                    this.value_order = []
            }
        },
        mounted() {
            this.connect()
            this.initCharts3()
            this.initCharts4()
        }

    }

</script>

<style>
    .medium-head{
        font-size:15px;
        float:left;
        font-weight: lighter;
    }
    span.sellhead{
        font-size: 15px;
        font-weight: lighter;
    }
    span.totalsell{
        font-size: 24px;
        font-weight: bold;
    }
    span.comparehead{
        font-size: 12px;
        font-weight: lighter;
        font-style: italic;
    }

</style>

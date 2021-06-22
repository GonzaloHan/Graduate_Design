<template>
    <div class="container">
        <div>
            <main-menu style="z-index: 9999;position: relative"></main-menu>
            <a-layout :style="{ marginLeft: '200px',top:'15px'}">
                <!--                信息汇总-->
                <a-layout-content :style="{ margin: '85px 20px 0', overflow: 'initial' }">
                    <div :style="{ padding: '24px', background: '#fff', textAlign: 'center',height:'450px' }">
                        <span class="medium-head">联运应用利润、曝光统计（日）</span>
                        <br>
                        <div id="main4" style="height: 100%;width: 100%" ></div>
                    </div>
                </a-layout-content>

                <a-layout-content :style="{ margin: '20px 20px 0', overflow: 'initial' }">
                    <div>
                        <a-row :gutter="16">
                            <!--                            联运应用类别占比-->
                            <a-col :span="6">
                                <a-card :bordered="false"  style="height: 250px">
                                    <span class="sellhead">联运应用类别占比</span>
                                    <div id="main3" style="height: 230%;width: 100%"></div>
                                </a-card>
                            </a-col>
                            <!--                            联运应用类别占比-->
                            <a-col :span="6">
                                <a-card :bordered="false"  style="height: 250px">
                                    <span class="sellhead">联运类别利润占比</span>
                                    <div id="main5" style="height: 180%;width: 100%;"></div>
                                </a-card>
                            </a-col>

                            <!--                            利润KPI-->
                            <a-col :span="6">
                                <a-card :bordered="false"  style="height: 250px">
                                    <span class="sellhead">Q1预期联运利润 KPI</span><br>
                                    <span class="totalsell" >￥{{profit_KPI}}</span><br>
                                    <span class="comparehead">上个Q联运利润 ￥{{com_profit_KPI}}</span>
                                    <br>
                                    <a-divider />
                                    <span class="sellhead">已完成联运利润 KPI</span>&nbsp;<br>
                                    <span class="totalsell">￥{{done_profit_KPI}}</span>
                                </a-card>
                            </a-col>
                            <!--                            曝光量KPI-->
                            <a-col :span="6">
                                <a-card :bordered="false"  style="height: 250px">
                                    <span class="sellhead">Q1预期联运曝光 KPI</span><br>
                                    <span class="totalsell" >{{explode_KPI}}KW</span><br>
                                    <span class="comparehead">上个Q联运曝光 {{com_explode_KPI}}KW</span>
                                    <br>
                                    <a-divider />
                                    <span class="sellhead">已完成联运曝光 KPI</span>&nbsp;<br>
                                    <span class="totalsell">{{done_explode_KPI}}KW</span>
                                </a-card>
                            </a-col>
                        </a-row>
                    </div>
                </a-layout-content>

                <a-layout-content :style="{ margin: '20px 20px 0', overflow: 'initial'}">
                    <div>
                        <a-row>
                            <a-col :span="24">
                                <a-card :bordered="false">
                                    <span class="medium-head">联运应用详情</span>
                                    <br><br>
                                    <a-row :gutter="10">
                                        <!-- 编号输入-->
                                        <a-col :span="3">
                                            <el-input v-model="input_Code" placeholder="输入编号" suffix-icon="el-icon-edit"></el-input>
                                        </a-col>
                                        <!-- 名称输入-->
                                        <a-col :span="4">
                                            <el-input v-model="input_Name" placeholder="输入名称" suffix-icon="el-icon-edit"></el-input>
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
                                        <!-- 联运模式下拉框-->
                                        <a-col :span="3">
                                            <el-select v-model="value_type" placeholder="选择联运模式">
                                                <el-option label="整包联运" value="type_all"></el-option>
                                                <el-option label="分包联运" value="type_div"></el-option>
                                            </el-select>
                                        </a-col>
                                        <a-col :span="3">
                                            <!-- 排序变量下拉框-->
                                            <el-select v-model="value_var" placeholder="选择排序变量">
                                                <el-option label="DAU" value="var_dau"></el-option>
                                                <el-option label="流水" value="var_flow"></el-option>
                                                <el-option label="利润" value="var_profit"></el-option>
                                            </el-select>
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
                                    <a-table
                                            :columns="columns_table"
                                            :align=center
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
            adv_id:'APP0001',
            adv_name:'爱奇艺',
            adv_cat:'视频',
            adv_type:'整包联运',
            adv_dau:'10kw',
            adv_water:'2k',
            adv_profit:'0.3k'
        },
        {
            adv_id:'APP0002',
            adv_name:'百度网盘极速版',
            adv_cat:'工具',
            adv_type:'分包联运',
            adv_dau:'7kw',
            adv_water:'1k',
            adv_profit:'0.1k'
        },
        {
            adv_id:'APP0003',
            adv_name:'腾讯视频',
            adv_cat:'视频',
            adv_type:'整包联运',
            adv_dau:'5kw',
            adv_water:'0.8k',
            adv_profit:'0.05k'
        },
        {
            adv_id:'APP0004',
            adv_name:'巧虎学英语',
            adv_cat:'教育',
            adv_type:'整包联运',
            adv_dau:'3kw',
            adv_water:'5k',
            adv_profit:'0.2k'
        },
    ];
    const columns_table = [
        {
            title: '编号',
            dataIndex: 'adv_id',
            align:'center',
            width: '10%',
        },
        {
            title: '名称',
            dataIndex: 'adv_name',
            align:'center',
            width: '20%',
        },
        {
            title: '类别',
            dataIndex: 'adv_cat',
            align:'center',
            width: '10%',
        },
        {
            title: '联运模式',
            dataIndex: 'adv_type',
            align:'center',
            width: '30%',
        },
        {
            title: 'DAU',
            dataIndex: 'adv_dau',
            align:'center',
            width: '10%',
        },
        {
            title: '流水',
            dataIndex: 'adv_water',
            align:'center',
            width: '10%',
        },
        {
            title: '利润',
            dataIndex: 'adv_profit',
            align:'center',
            width: '10%',
        }
    ];
    var dis_approved,approved,week_num,day_num,profit_KPI,done_profit_KPI,explode_KPI,done_explode_KPI;
    var send_num=new Array();
    var click_rate=new Array();
    var smile=new Array();
    var emotion=new Array();
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
                weekNum:0,
                dayNum:0,
                profit_KPI:'500,000',
                done_profit_KPI:'172,432',
                com_profit_KPI:'378,000',
                explode_KPI:60,
                done_explode_KPI:17,
                com_explode_KPI:40,
                approvedRate:0,
                img_base64:'',
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
                input_Code:[],
                input_Name:[],
                value_category:[],
                value_type:[],
                value_var:[],
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
                            week_num = res.data.data[0]["week_num"]
                            day_num = res.data.data[0]["day_num"]
                            profit_KPI = res.data.data[0]["profit_KPI"]
                            done_profit_KPI = res.data.data[0]["done_profit_KPI"]
                            explode_KPI = res.data.data[0]["explode_KPI"]
                            done_explode_KPI = res.data.data[0]["done_explode_KPI"]
                            this.weekNum = week_num
                            this.dayNum = day_num
                            this.profit_KPI = profit_KPI
                            this.done_profit_KPI = done_profit_KPI
                            this.explode_KPI = explode_KPI
                            this.done_explode_KPI = done_explode_KPI
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
                            emotion=res.data.data[1]
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
                                            {value:emotion[0]["event_num"],name:'视频'}
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
                                            {value:emotion[1]["event_num"],name:'体育'}
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
                                            {value:emotion[2]["event_num"],name:'金融'}
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
                                            {value:emotion[3]["event_num"],name:'育儿'}
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
                                            {value:emotion[4]["event_num"],name:'教育'}
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
                                            {value:emotion[5]["event_num"],name:'工具'}
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
                                            {value:emotion[6]["event_num"],name:'电商'}
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
                    color: ['#ff5151', '#28ff28', '#4dffff', '#ffca18', '#f9ff5a', '#d0d0d0', '#ff95ca'],
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
                        data: ['视频', '体育', '金融', '育儿', '教育', '工具', '电商'],
                        show: true
                    },
                    series: [
                        {
                            type: 'bar',
                            name: '视频',
                            data: [
                                {value:3,name:'视频'}
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
                                {value:1,name:'体育'}
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
                                {value:2,name:'金融'}
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
                                {value:1,name:'育儿'}
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
                                {value:3,name:'教育'}
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
                                {value:1,name:'工具'}
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
                                {value:2,name:'电商'}
                            ],
                            barMaxWidth: 20,
                            label: {
                                show: true,
                                position: 'inside'
                            },
                        },
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
                        data: ['利润', '曝光']
                    },
                    yAxis: [
                        {
                            name: '利润',
                            type: 'value',
                            min: 0,
                            max: 5,
                            interval: 0.5,
                            show: true,
                            axisLabel: {formatter: '{value}k'},
                            axisTick: {
                                show: false,
                                alignWithLabel: true
                            }
                        },
                        {
                            name: '曝光',
                            type: 'value',
                            min: 0,
                            max: 50,
                            interval: 5,
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
                            data: [2, 2.4, 4.1, 3.7, 2.5, 1.8, 3.6, 1.9, 3.1, 3.2],
                            barGap: '100%',
                            barCategoryGap: '40%'
                        },
                        {
                            type: 'line',
                            data: [3.2,3.7 ,4.2 ,3.4 ,2.1 ,1.9 ,3.4 ,2.2,3.4,3.3],
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

            initCharts5() {
                var echarts = require('echarts');
                // 基于准备好的dom，初始化echarts实例
                myChart2 = echarts.init(document.getElementById('main5'));
                myChart2.setOption({
                    color: ['#ff5151', '#28ff28', '#4dffff', '#ffca18', '#f9ff5a', '#d0d0d0', '#ff95ca'],
                    tooltip: {
                        trigger: 'item'
                    },
                    series: [
                        {
                            type: 'pie',
                            radius: ['40%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    fontSize: '20',
                                    fontWeight: 'bold'
                                }
                            },
                            labelLine: {
                                show: false
                            },
                            data: [
                                {value: 28, name: '视频'},
                                {value: 7, name: '体育'},
                                {value: 14, name: '金融'},
                                {value: 4, name: '育儿'},
                                {value: 10, name: '教育'},
                                {value: 2, name: '工具'},
                                {value: 35, name: '电商'}
                            ]
                        }
                    ]
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
                this.input_Name = [],
                this.value_category = [],
                this.value_type = [],
                this.value_var = [],
                this.value_order = []
            }

        },
        mounted() {
            this.connect()
            this.initCharts3()
            this.initCharts4()
            this.initCharts5()
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

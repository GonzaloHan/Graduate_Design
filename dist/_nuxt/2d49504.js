(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1122:function(t,e,o){var content=o(1130);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(125).default)("33fa1cac",content,!0,{sourceMap:!1})},1126:function(t,e,o){"use strict";var n=o(9),r=o(1139),l=o.n(r),c=(o(1140),o(1141)),d=o.n(c),_=o(1142),f=o.n(_);n.default.use(d.a),n.default.use(l.a),n.default.prototype.$axios=f.a,n.default.prototype.$loginUrl="http://123.56.222.132:5000/login",n.default.prototype.$indexUrl="http://123.56.222.132:5000/index",n.default.prototype.$table1Url="http://123.56.222.132:5000/table1",n.default.prototype.$table2Url="http://123.56.222.132:5000/table2",n.default.prototype.$table3Url="http://123.56.222.132:5000/table3",n.default.prototype.$table4Url="http://123.56.222.132:5000/table4",n.default.prototype.$table6Url="http://123.56.222.132:5000/table6",n.default.prototype.$table7Url="http://123.56.222.132:5000/table7",n.default.prototype.$collectInfoUrl="http://123.56.222.132:5000/collectInfo",n.default.prototype.$loginWithFaceUrl="http://123.56.222.132:5000/loginWithFace"},1128:function(t,e,o){t.exports=o.p+"img/avatar_yihan.b616668.jpg"},1129:function(t,e,o){"use strict";o(1122)},1130:function(t,e,o){var n=o(124)(!1);n.push([t.i,"#components-layout-demo-fixed-sider .logo{height:64px;background:#000442;color:#fff}.system{font-size:24px;margin-left:46px;line-height:64px}.DateText{margin-left:-30px;font-size:20px}.NameText{margin-left:22px;font-size:20px}.avatar{margin-top:-8px;margin-left:10px;border:2px solid #4f99ff}span{font-size:14px}.over{position:fixed;width:100%;height:100%;opacity:.7;filter:alpha(opacity=70);top:0;left:0;z-index:999;background-color:#111}.popup_label{font-size:20px}.popup_dialog{font-size:16px}.reuse{position:fixed;height:168px;width:380px;background-color:#fff;border-radius:8px;left:50%;top:50%;transform:translate(-50%,-50%);z-index:1000}",""]),t.exports=n},1131:function(t,e,o){"use strict";o(178);var n={data:function(){return{nowTime:(new Date).toLocaleString(),name:"杨屹涵",popup:0,input_reuse_ID:""}},props:{},mounted:function(){var t=this;this.timer=setInterval((function(){t.nowTime=(new Date).toLocaleString()}))},beforeDestroy:function(){this.timer&&clearInterval(this.timer)},methods:{onCollapse:function(t,e){console.log(t,e)},onBreakpoint:function(t){console.log(t)},gotoIntegrate:function(){this.$router.replace("/tables/integrate")},gotoReuse:function(){this.popup=1},gotoDistribute:function(){this.$router.replace("/tables/distribute")},gotoSend:function(){this.$router.replace("/tables/Send")},gotoPredict:function(){this.$router.replace("/tables/Predict")},gotoAnalysis_person:function(){this.$router.replace("/tables/analysis_person")},gotoAnalysis_group:function(){this.$router.replace("/tables/analysis_group")},gotoAnalysis_app:function(){this.$router.replace("/tables/analysis_app")},gotoInfo:function(){this.$router.replace("/tables/information")},closepopup:function(){this.popup=0},reuse_it:function(){-1!=this.input_reuse_ID.indexOf("PU")?this.$router.replace("/tables/reuse_push"):-1!=this.input_reuse_ID.indexOf("KP")?this.$router.replace("/tables/reuse_open"):-1!=this.input_reuse_ID.indexOf("BA")?this.$router.replace("/tables/reuse_Banner"):-1!=this.input_reuse_ID.indexOf("SE")?this.$router.replace("/tables/reuse_search"):this.$message.warning("请输入正确格式的样式编号")}}},r=(o(1129),o(76)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-layout",{attrs:{id:"components-layout-demo-fixed-sider"}},[n("a-layout-header",{style:{overflow:"auto",height:"64px",width:"100%",position:"fixed",left:"200px",background:"#fff"}},[n("el-row",[n("el-col",{attrs:{span:"19"}},[n("div",{staticClass:"DateText"},[t._v(t._s(t.nowTime))])]),t._v(" "),n("el-col",{attrs:{span:"5"}},[n("span",{staticClass:"NameText"},[t._v(t._s(t.name))]),t._v(" "),n("img",{staticClass:"avatar",staticStyle:{width:"40px",height:"40px","border-radius":"50%"},attrs:{src:o(1128)}})])],1)],1),t._v(" "),n("a-layout",[n("a-layout-sider",{style:{overflow:"auto",height:"100vh",position:"fixed",left:0}},[n("div",{staticClass:"logo"},[n("span",{staticClass:"system"},[t._v("准星系统")])]),t._v(" "),n("a-menu",{attrs:{theme:"dark",mode:"inline"}},[n("a-sub-menu",{key:"0"},[n("span",{attrs:{slot:"title"},slot:"title"},[n("i",{staticClass:"el-icon-cpu"}),n("span",{staticStyle:{"margin-left":"12px"}},[t._v("广告样式集成")])]),t._v(" "),n("a-menu-item",{key:"sub-integrate",on:{click:t.gotoIntegrate}},[n("i",{staticClass:"el-icon-circle-plus-outline"}),t._v(" "),n("span",{staticStyle:{"margin-left":"10px"}},[t._v("简单配置")])]),t._v(" "),n("a-menu-item",{key:"sub-reuse",on:{click:t.gotoReuse}},[n("i",{staticClass:"el-icon-brush"}),t._v(" "),n("span",{staticStyle:{"margin-left":"10px"}},[t._v("样式复用")])])],1),t._v(" "),n("a-sub-menu",{key:"9"},[n("span",{attrs:{slot:"title"},slot:"title"},[n("i",{staticClass:"el-icon-coordinate"}),n("span",{staticStyle:{"margin-left":"12px"}},[t._v("精准发布及预测")])]),t._v(" "),n("a-menu-item",{key:"sub-people_bag",on:{click:t.gotoDistribute}},[n("i",{staticClass:"el-icon-help"}),t._v(" "),n("span",{staticStyle:{"margin-left":"10px"}},[t._v("人群包采集")])]),t._v(" "),n("a-menu-item",{key:"sub-gather",on:{click:t.gotoSend}},[n("i",{staticClass:"el-icon-connection"}),t._v(" "),n("span",{staticStyle:{"margin-left":"10px"}},[t._v("预测信息配置")])]),t._v(" "),n("a-menu-item",{key:"sub-guess",on:{click:t.gotoPredict}},[n("i",{staticClass:"el-icon-view"}),t._v(" "),n("span",{staticStyle:{"margin-left":"10px"}},[t._v("预测信息展示")])])],1),t._v(" "),n("a-sub-menu",{key:"2"},[n("span",{attrs:{slot:"title"},slot:"title"},[n("i",{staticClass:"el-icon-pie-chart"}),n("span",{staticStyle:{"margin-left":"12px"}},[t._v("运营数据展示")])]),t._v(" "),n("a-menu-item",{key:"sub-person",on:{click:t.gotoAnalysis_person}},[n("a-icon",{attrs:{type:"user"}}),t._v(" "),n("span",[t._v("个人数据")])],1),t._v(" "),n("a-menu-item",{key:"sub-group",on:{click:t.gotoAnalysis_group}},[n("a-icon",{attrs:{type:"home"}}),t._v(" "),n("span",[t._v("团队数据")])],1),t._v(" "),n("a-menu-item",{key:"sub-app",on:{click:t.gotoAnalysis_app}},[n("a-icon",{attrs:{type:"share-alt"}}),t._v(" "),n("span",[t._v("联运数据")])],1)],1),t._v(" "),n("a-menu-item",{key:"3",on:{click:t.gotoInfo}},[n("i",{staticClass:"el-icon-document-copy"}),t._v(" "),n("span",{staticStyle:{"margin-left":"8px"}},[t._v("个人信息")])])],1)],1),t._v(" "),n("a-layout-content",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.popup,expression:"popup"}],staticStyle:{"margin-left":"500px"}},[n("div",{staticClass:"reuse",staticStyle:{padding:"16px"}},[n("a-row",[n("span",{staticClass:"popup_label"},[t._v("样式复用")]),t._v(" "),n("br"),n("br"),t._v(" "),n("span",{staticClass:"popup_dialog"},[t._v("样式编号：")]),t._v(" "),n("el-input",{staticStyle:{width:"260px"},attrs:{size:"mini",placeholder:"请输入旧样式编号"},model:{value:t.input_reuse_ID,callback:function(e){t.input_reuse_ID=e},expression:"input_reuse_ID"}})],1),t._v(" "),n("br"),t._v(" "),n("a-row",{attrs:{gutter:16}},[n("a-col",{attrs:{span:12}},[n("el-button",{staticStyle:{width:"168px",float:"right","border-radius":"8px"},attrs:{size:"mini",type:"primary"},on:{click:t.reuse_it}},[t._v("确认")])],1),t._v(" "),n("a-col",{attrs:{span:12}},[n("el-button",{staticStyle:{width:"168px",float:"left","border-radius":"8px"},attrs:{size:"mini",type:"danger"},on:{click:t.closepopup}},[t._v("取消")])],1)],1)],1),t._v(" "),n("div",{staticClass:"over"})])])],1)],1)}),[],!1,null,null,null);e.a=component.exports},1138:function(t,e,o){t.exports=o.p+"img/empty.999b694.png"},1149:function(t,e,o){var map={"./Apple.png":1178,"./Banner_01.png":1179,"./Banner_02.png":1180,"./Banner_03.png":1181,"./Banner_04.png":1182,"./README.md":1183,"./add_square.png":1184,"./css/global.css":1185,"./empty.png":1138,"./empty_banner.png":1187,"./empty_open.png":1188,"./empty_rectangle.png":1189,"./empty_search.png":1190,"./empty_square.png":1191,"./open_01.png":1192,"./open_02.png":1193,"./open_03.png":1194,"./open_04.png":1195,"./search_01.png":1196,"./search_02.png":1197,"./search_03.png":1198,"./search_04.png":1199,"./search_05.png":1200,"./search_06.png":1201,"./switch.gif":1160,"./xiaomi.png":1202};function n(t){var e=r(t);return o(e)}function r(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=r,t.exports=n,n.id=1149},1160:function(t,e,o){t.exports=o.p+"img/switch.550fe60.gif"},1178:function(t,e,o){t.exports=o.p+"img/Apple.487435c.png"},1179:function(t,e,o){t.exports=o.p+"img/Banner_01.f4bd27f.png"},1180:function(t,e,o){t.exports=o.p+"img/Banner_02.bb4e592.png"},1181:function(t,e,o){t.exports=o.p+"img/Banner_03.0c5ddd4.png"},1182:function(t,e,o){t.exports=o.p+"img/Banner_04.059790b.png"},1183:function(t,e){throw new Error("Module parse failed: Unexpected character '#' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> # ASSETS\n| \n| **This directory is not required, you can delete it if you don't want to use it.**")},1184:function(t,e,o){t.exports=o.p+"img/add_square.05c0104.png"},1185:function(t,e,o){var content=o(1186);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(125).default)("43dee4e4",content,!0,{sourceMap:!1})},1186:function(t,e,o){var n=o(124)(!1);n.push([t.i,"",""]),t.exports=n},1187:function(t,e,o){t.exports=o.p+"img/empty_banner.c794296.png"},1188:function(t,e,o){t.exports=o.p+"img/empty_open.7a9ed07.png"},1189:function(t,e,o){t.exports=o.p+"img/empty_rectangle.87faeb1.png"},1190:function(t,e,o){t.exports=o.p+"img/empty_search.13baabd.png"},1191:function(t,e,o){t.exports=o.p+"img/empty_square.fb123d0.png"},1192:function(t,e,o){t.exports=o.p+"img/open_01.fcf6cbb.png"},1193:function(t,e,o){t.exports=o.p+"img/open_02.bd18c01.png"},1194:function(t,e,o){t.exports=o.p+"img/open_03.9f4136d.png"},1195:function(t,e,o){t.exports=o.p+"img/open_04.46bc617.png"},1196:function(t,e,o){t.exports=o.p+"img/search_01.c170a56.png"},1197:function(t,e,o){t.exports=o.p+"img/search_02.8069406.png"},1198:function(t,e,o){t.exports=o.p+"img/search_03.ee39c1c.png"},1199:function(t,e,o){t.exports=o.p+"img/search_04.c876c1c.png"},1200:function(t,e,o){t.exports=o.p+"img/search_05.7eaf9dc.png"},1201:function(t,e,o){t.exports=o.p+"img/search_06.9cb899a.png"},1202:function(t,e,o){t.exports=o.p+"img/xiaomi.6a3e7bf.png"},1411:function(t,e,o){var content=o(1789);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(125).default)("01ff11ee",content,!0,{sourceMap:!1})},1788:function(t,e,o){"use strict";o(1411)},1789:function(t,e,o){var n=o(124)(!1);n.push([t.i,".el-divider--horizontal[data-v-3cb9c77c]{margin-top:12px;margin-bottom:8px}.el-divider--vertical[data-v-3cb9c77c]{height:438px}span.labelhead[data-v-3cb9c77c]{font-size:20px;float:left;margin-left:6px}span.innerlabel[data-v-3cb9c77c]{font-weight:700}span.detail[data-v-3cb9c77c],span.innerlabel[data-v-3cb9c77c]{font-size:16px;float:left}.draw_place[data-v-3cb9c77c]{overflow:hidden;position:relative}.tool_button[data-v-3cb9c77c]{height:380px;padding-right:5px;padding-left:5px}",""]),t.exports=n},1807:function(t,e,o){"use strict";o.r(e);var n=o(1131),r=(o(1126),o(1159)),l=o.n(r),c=o(1229),d=o.n(c),_={name:"order",components:{MainMenu:n.a,draggable:d.a},data:function(){return{adv_style_id:"PU0002",drawer:!1,left_it:0,list_logo_pull:[{address:"xiaomi.png",id:1},{address:"Apple.png",id:2},{address:"empty_square.png",id:3},{address:"empty_square.png",id:4},{address:"empty_square.png",id:5},{address:"empty_square.png",id:6}],list_logo_push:[{address:"add_square.png",id:1}],list_btn_pull:[{type:"default",id:1},{type:"primary",id:2},{type:"success",id:3},{type:"danger",id:4}],list_btn_push1:[],list_btn_push2:[]}},mounted:function(){var t=this;this.$axios({url:this.$table2Url,method:"get",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json;charset=utf-8"}}).then((function(e){200==e.status?0==e.data.code?t.table_data=e.data.data:-1==e.data.code&&alert("查询失败！"):alert(e.data.msg)}))},methods:{openDrawer:function(){this.drawer=!0},closeDrawer:function(){this.drawer=!1},hand_in:function(){l()({title:"样式编号："+this.adv_style_id+" 保存成功",text:"编号已复制到剪切板！",icon:"success",button:"确认"})},onCopy:function(t){},onError:function(){},log_pull:function(t){window.console.log(t)},log_logo_push:function(t){this.list_logo_push.pop(),window.console.log(t)},log_btn_push:function(t){this.list_btn_push1.length>1&&this.list_btn_push1.pop(),this.list_btn_push2.length>1&&this.list_btn_push2.pop(),window.console.log(t)},upload_logo:function(){}}},f=(o(1788),o(76)),component=Object(f.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",[n("main-menu")],1),t._v(" "),n("div",[n("a-layout",{style:{marginLeft:"200px",top:"15px"}},[n("a-layout-content",{style:{margin:"85px 20px 0",overflow:"initial"}},[n("div",{style:{padding:"16px",background:"#fff",textAlign:"center",height:"568px"}},[n("a-row",[n("span",{staticClass:"labelhead"},[t._v("Push样式配置")]),t._v(" "),n("br"),n("br")]),t._v(" "),n("a-row",[n("div",{staticClass:"draw_place",staticStyle:{width:"100%",height:"464px","border-radius":"10px",border:"dashed 2px #4f99ff"}},[n("span",{staticClass:"innerlabel",staticStyle:{float:"right","margin-right":"16px","margin-top":"12px",color:"#d7d7d7"}},[t._v("样式编号："+t._s(t.adv_style_id))]),t._v(" "),n("br"),n("br"),t._v(" "),n("el-button",{staticClass:"tool_button",style:{float:"left",borderRadius:"0px 8px 8px 0px",marginLeft:t.left_it+"px"},attrs:{type:"primary"},on:{click:t.openDrawer}},[n("a-icon",{staticStyle:{"font-size":"24px"},attrs:{type:"tool"}}),t._v(" "),n("br"),n("br"),t._v("工"),n("br"),n("br"),t._v("具"),n("br"),n("br"),t._v("栏"),n("br"),n("br")],1),t._v(" "),n("a-drawer",{attrs:{placement:"left",closable:!1,visible:t.drawer,"get-container":!1,mask:!1,maskStyle:{},width:364,"wrap-style":{position:"absolute"},closable:"true"},on:{close:t.closeDrawer}},[n("a-row",[n("a-row",[n("span",{staticClass:"innerlabel"},[t._v("图标")])]),t._v(" "),n("a-row",[n("el-button",{staticStyle:{"border-radius":"8px",width:"312px","margin-top":"8px"},attrs:{size:"mini"},on:{click:t.upload_logo}},[t._v("上传图标")])],1),t._v(" "),n("a-row",{staticStyle:{width:"336px"}},[n("draggable",{staticClass:"dragLogo list-group",attrs:{list:t.list_logo_pull,group:{name:"logo",pull:"clone",put:!1}},on:{change:t.log_pull}},t._l(t.list_logo_pull,(function(element){return n("img",{key:element.address,staticClass:"list-group-logo",staticStyle:{"margin-top":"12px",width:"88px",height:"88px","border-radius":"10px",border:"dashed 2px #4f99ff","margin-right":"24px",float:"left"},attrs:{src:o(1149)("./"+element.address)}})})),0)],1)],1),t._v(" "),n("el-divider"),t._v(" "),n("a-row",[n("a-row",[n("span",{staticClass:"innerlabel"},[t._v("按钮")])]),t._v(" "),n("a-row",{staticStyle:{width:"336px"}},[n("draggable",{staticClass:"dragBtn list-group",attrs:{list:t.list_btn_pull,group:{name:"btn",pull:"clone",put:!1}},on:{change:t.log_pull}},t._l(t.list_btn_pull,(function(element){return n("el-button",{key:element.type,staticClass:"dragBtn list-group",staticStyle:{width:"150px",float:"left","border-radius":"8px","margin-right":"12px","margin-top":"12px","margin-left":"0px"},attrs:{type:element.type,size:"mini"}},[t._v("请输入内容")])})),1)],1)],1)],1),t._v(" "),n("div",{staticStyle:{width:"480px",height:"164px","border-radius":"8px",border:"dashed 2px #4f99ff","margin-left":"395px","margin-top":"64px",padding:"18px"}},[n("a-row",[n("a-col",{attrs:{span:"6"}},[n("draggable",{staticClass:"dragLogo list-group",attrs:{list:t.list_logo_push,group:"logo"},on:{change:t.log_logo_push}},t._l(t.list_logo_push,(function(element){return n("img",{key:element.address,staticClass:"list-group-logo",staticStyle:{width:"84px",height:"84px","border-radius":"8px",border:"dashed 2px #4f99ff",float:"left"},attrs:{src:o(1149)("./"+element.address)}})})),0)],1),t._v(" "),n("a-col",{staticStyle:{"margin-left":"-10px"},attrs:{span:"18"}},[n("a-row",[n("el-input",{staticStyle:{"border-radius":"8px",border:"dashed 2px #4f99ff"},attrs:{size:"small",placeholder:"请输入标题",disabled:""}}),t._v(" "),n("br"),t._v(" "),n("el-input",{staticClass:"content_input",staticStyle:{"margin-top":"12px","border-radius":"8px","font-size":"13px",border:"dashed 2px #4f99ff"},attrs:{placeholder:"请输入内容",disabled:""}}),t._v(" "),n("br")],1),t._v(" "),n("a-row",{staticStyle:{"margin-top":"12px"}},[n("a-col",{attrs:{span:12}},[n("div",{staticStyle:{"border-radius":"8px",border:"dashed 2px #4f99ff",height:"30px",width:"150px","font-size":"13px","padding-top":"4px","background-color":"#f5f7fa",float:"left"}},[n("draggable",{staticClass:"dragBtn list-group",attrs:{list:t.list_btn_push1,group:"btn"},on:{change:t.log_btn_push}},t._l(t.list_btn_push1,(function(element){return n("el-button",{key:element.type,staticClass:"dragBtn list_group",staticStyle:{width:"150px",float:"left","margin-left":"-2px","margin-top":"-6px","border-radius":"8px"},attrs:{type:element.type,size:"mini"},on:{change:t.log_btn_push}},[t._v("取消按钮\n                            ")])})),1)],1)]),t._v(" "),n("a-col",{attrs:{span:12}},[n("div",{staticStyle:{"border-radius":"8px",border:"dashed 2px #4f99ff",height:"30px",width:"150px","font-size":"13px","padding-top":"4px","background-color":"#f5f7fa",float:"right"}},[n("draggable",{staticClass:"dragBtn list-group",attrs:{list:t.list_btn_push2,group:"btn"},on:{change:t.log_btn_push}},t._l(t.list_btn_push2,(function(element){return n("el-button",{key:element.type,staticClass:"dragBtn list_group",staticStyle:{width:"150px",float:"left","margin-left":"-2px","margin-top":"-6px","border-radius":"8px"},attrs:{type:element.type,size:"mini"},on:{change:t.log_btn_push}},[t._v("确认按钮\n                            ")])})),1)],1)])],1),t._v(" "),n("br"),n("br")],1)],1)],1),t._v(" "),n("br"),n("br"),t._v(" "),n("span",{staticClass:"innerlabel",staticStyle:{color:"#d7d7d7","margin-left":"460px"}},[t._v("按钮位可为空，或只选一个"),n("br"),t._v("其中左侧为取消按钮，右侧为确认按钮")])],1)]),t._v(" "),n("a-row",{staticStyle:{"margin-top":"7px"}},[n("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.adv_style_id,expression:"adv_style_id",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],staticStyle:{"border-radius":"8px",padding:"7px 45px"},attrs:{size:"mini",type:"primary"},on:{click:t.hand_in}},[t._v("提交")])],1)],1)]),t._v(" "),n("a-layout-footer",{style:{textAlign:"center"}},[t._v("\n        准星系统 Copyright © 2021 杨屹涵 - 17301054 版权所有\n      ")])],1)],1)])}),[],!1,null,"3cb9c77c",null);e.default=component.exports}}]);
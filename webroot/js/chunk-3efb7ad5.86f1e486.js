(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3efb7ad5","chunk-2d0a3d24","chunk-2d0df024"],{"048b":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("j-vxe-table",{ref:"vTable",staticStyle:{"margin-top":"8px"},attrs:{toolbar:"","row-number":"","row-selection":"","drag-sort":"","keep-source":"",height:580,loading:e.loading,dataSource:e.dataSource,columns:e.columns},on:{valueChange:e.handleValueChange},scopedSlots:e._u([{key:"toolbarSuffix",fn:function(){return[a("a-button",{on:{click:e.handleTableCheck}},[e._v("表单验证")]),a("a-tooltip",{attrs:{placement:"top",title:"获取值，忽略表单验证",autoAdjustOverflow:!0}},[a("a-button",{on:{click:e.handleTableGet}},[e._v("获取值")])],1),a("a-tooltip",{attrs:{placement:"top",title:"模拟加载1000条数据",autoAdjustOverflow:!0}},[a("a-button",{on:{click:e.handleTableSet}},[e._v("设置值")])],1)]},proxy:!0},{key:"action",fn:function(t){return[a("a",{on:{click:function(a){return e.handleCK(t)}}},[e._v("查看")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{attrs:{title:"确定删除吗？"},on:{confirm:function(a){return e.handleDL(t)}}},[a("a",[e._v("删除")])])]}}])})},l=[],o=a("caaf"),i=a.n(o),r=a("ca00"),c=a("2475"),s={name:"JVxeDemo1",data:function(){return{loading:!1,columns:[{title:"不可编辑",key:"normal",type:c["b"].normal,width:"180px",fixed:"left",defaultValue:"normal-new"},{title:"单行文本",key:"input",type:c["b"].input,width:"180px",defaultValue:"",placeholder:"请输入${title}",validateRules:[{required:!0,message:"请输入${title}"},{pattern:/^[a-z|A-Z][a-z|A-Z\d_-]*$/,message:"${title}必须以字母开头，可包含数字、下划线、横杠"},{unique:!0,message:"${title}不能重复"},{handler:function(e,t,a){var n=e.cellValue;e.row,e.column;"abc"===n?t(!1,"${title}不能是abc"):t(!0)},message:"${title}默认提示"}]},{title:"多行文本",key:"textarea",type:c["b"].textarea,width:"200px"},{title:"数字",key:"number",type:c["b"].inputNumber,width:"80px",defaultValue:32,statistics:["sum","average"]},{title:"下拉框",key:"select",type:c["b"].select,width:"180px",options:[{title:"String",value:"string"},{title:"Integer",value:"int"},{title:"Double",value:"double"},{title:"Boolean",value:"boolean"}],allowInput:!0,placeholder:"请选择"},{title:"下拉框_字典",key:"select_dict",type:c["b"].select,width:"180px",options:[],dictCode:"sex",placeholder:"请选择"},{title:"下拉框_多选",key:"select_multiple",type:c["b"].selectMultiple,width:"205px",options:[{title:"String",value:"string"},{title:"Integer",value:"int"},{title:"Double",value:"double"},{title:"Boolean",value:"boolean"}],defaultValue:["int","boolean"],placeholder:"多选"},{title:"下拉框_搜索",key:"select_search",type:c["b"].selectSearch,width:"180px",options:[{title:"String",value:"string"},{title:"Integer",value:"int"},{title:"Double",value:"double"},{title:"Boolean",value:"boolean"}]},{title:"日期时间",key:"datetime",type:c["b"].datetime,width:"200px",defaultValue:"2019-4-30 14:52:22",placeholder:"请选择"},{title:"复选框",key:"checkbox",type:c["b"].checkbox,width:"100px",customValue:["Y","N"],defaultChecked:!1},{title:"操作",key:"action",type:c["b"].slot,fixed:"right",minWidth:"100px",align:"center",slotName:"action"}],dataSource:[]}},created:function(){this.randomPage(0,20,!0)},methods:{handleCK:function(e){this.$message.success("请在控制台查看输出")},handleDL:function(e){e.target.removeRows(e.row)},handleValueChange:function(e){},handleTableCheck:function(){var e=this;this.$refs.vTable.validateTable().then((function(t){t?e.$message.error("验证未通过，请在控制台查看详细"):e.$message.success("验证通过")}))},handleTableGet:function(){this.$refs.vTable.getTableData();this.$message.success("获取值成功，请看控制台输出")},handleTableSet:function(){this.randomPage(1,1e3,!0)},randomPage:function(e,t){var a=this,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];n&&(this.loading=!0);for(var l=function(){var e=Object(r["j"])(1e3,9999999999999);return i()(new Date(e)).format("YYYY-MM-DD HH:mm:ss")},o=(e-1)*t,c=["string","int","double","boolean"],s=Date.now(),u=[],d=0;d<t;d++)u.push({id:Object(r["l"])(),normal:"normal-".concat(o+d+1),input:"text-".concat(o+d+1),textarea:"textarea-".concat(o+d+1),number:Object(r["j"])(0,233),select:c[Object(r["j"])(0,3)],select_dict:Object(r["j"])(1,2).toString(),select_multiple:function(){for(var e=Object(r["j"])(1,4),t=[],a=0;a<e;a++)Object(r["i"])(t,c[Object(r["j"])(0,3)]);return t}(),select_search:c[Object(r["j"])(0,3)],datetime:l(),checkbox:["Y","N"][Object(r["j"])(0,1)]});this.dataSource=u;var p=Date.now(),h=p-s;n&&h<t&&setTimeout((function(){a.loading=!1}),t-h)}}},u=s,d=a("5d22"),p=Object(d["a"])(u,n,l,!1,null,"30b1e721",null);t["default"]=p.exports},"87a0":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("j-vxe-table",{ref:"vTable",staticStyle:{"margin-top":"8px"},attrs:{toolbar:"","row-number":"","row-selection":"","keep-source":"",height:484,loading:e.loading,dataSource:e.dataSource,columns:e.columns,pagination:e.pagination},on:{pageChange:e.handlePageChange},scopedSlots:e._u([{key:"toolbarSuffix",fn:function(){return[a("a-button",{on:{click:e.handleTableGet}},[e._v("获取值")])]},proxy:!0}])})},l=[],o=(a("caaf"),a("ca00")),i=a("2475"),r={name:"JVxeDemo2",data:function(){return{loading:!1,columns:[{title:"下拉框_字典表搜索",key:"select_dict_search",type:i["b"].selectDictSearch,width:"200px",dict:"sys_user,realname,username"},{title:"JPopup",key:"popup",type:i["b"].popup,width:"180px",popupCode:"demo",field:"name,sex,age",orgFields:"name,sex,age",destFields:"popup,popup_sex,popup_age"},{title:"JP-性别",key:"popup_sex",type:i["b"].select,dictCode:"sex",disabled:!0,width:"100px"},{title:"JP-年龄",key:"popup_age",type:i["b"].normal,width:"80px"},{title:"进度条",key:"progress",type:i["b"].progress,minWidth:"120px"},{title:"单选",key:"radio",type:i["b"].radio,width:"130px",options:[{text:"男",value:"1"},{text:"女",value:"2"}],allowClear:!0},{title:"上传",key:"upload",type:i["b"].upload,width:"180px",btnText:"点击上传",token:!0,responseName:"message",action:window._CONFIG["domianURL"]+"/sys/common/upload"},{title:"图片上传",key:"image",type:i["b"].image,width:"180px",token:!0},{title:"文件上传",key:"file",type:i["b"].file,width:"180px",token:!0}],dataSource:[],pagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30","100","200"],total:1e3}}},created:function(){this.randomPage(this.pagination.current,this.pagination.pageSize,!0)},methods:{handlePageChange:function(e){this.pagination.current=e.current,this.pagination.pageSize=e.pageSize,this.randomPage(e.current,e.pageSize,!0)},handleTableGet:function(){this.$refs.vTable.getTableData();this.$message.success("获取值成功，请看控制台输出")},randomPage:function(e,t){var a=this,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];n&&(this.loading=!0);for(var l=Date.now(),i=[],r=0;r<t;r++){var c=Object(o["j"])(0,2);i.push({id:Object(o["l"])(),select_dict_search:["","admin","","jeecg",""][Object(o["j"])(0,4)],progress:Object(o["j"])(0,100),radio:c?c.toString():null})}this.dataSource=i;var s=Date.now(),u=s-l;n&&u<t&&setTimeout((function(){a.loading=!1}),t-u)}}},c=r,s=a("5d22"),u=Object(s["a"])(c,n,l,!1,null,"59815a48",null);t["default"]=u.exports},f6e4:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("a-tabs",[a("a-tab-pane",{key:"1",attrs:{tab:"基础示例",forceRender:""}},[a("j-vxe-demo1")],1),a("a-tab-pane",{key:"2",attrs:{tab:"高级示例",forceRender:""}},[a("j-vxe-demo2")],1)],1)],1)},l=[],o=a("048b"),i=a("87a0"),r={name:"JVXETableDemo",components:{JVxeDemo2:i["default"],JVxeDemo1:o["default"]},data:function(){return{}},methods:{}},c=r,s=a("5d22"),u=Object(s["a"])(c,n,l,!1,null,"78af96ca",null);t["default"]=u.exports}}]);
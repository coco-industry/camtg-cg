(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9b36bf9c","chunk-1fa85c28","chunk-07a0c1a0"],{"2b2b":function(a,t,e){"use strict";e("ae8f")},4867:function(a,t,e){"use strict";e.r(t);var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("a-card",{attrs:{bordered:!1}},[e("div",{staticClass:"table-page-search-wrapper"},[e("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&a._k(t.keyCode,"enter",13,t.key,"Enter")?null:a.searchQuery(t)}}},[e("a-row",{attrs:{gutter:24}},[e("a-col",{attrs:{md:6,sm:8}},[e("a-form-item",{attrs:{label:"表名"}},[e("a-input",{attrs:{placeholder:"请输入表名"},model:{value:a.queryParam.dataTable,callback:function(t){a.$set(a.queryParam,"dataTable",t)},expression:"queryParam.dataTable"}})],1)],1),e("a-col",{attrs:{md:6,sm:8}},[e("a-form-item",{attrs:{label:"数据ID"}},[e("a-input",{attrs:{placeholder:"请输入ID"},model:{value:a.queryParam.dataId,callback:function(t){a.$set(a.queryParam,"dataId",t)},expression:"queryParam.dataId"}})],1)],1),e("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[e("a-col",{attrs:{md:6,sm:24}},[e("a-button",{attrs:{type:"primary"},on:{click:a.searchQuery}},[a._v("查询")]),e("a-button",{staticStyle:{"margin-left":"8px"},on:{click:a.searchReset}},[a._v("重置")])],1)],1)],1)],1)],1),e("div",{staticClass:"table-operator"},[e("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(t){return a.handleCompare()}}},[a._v("数据比较")])],1),e("div",[e("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[e("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),a._v("已选择 "),e("a",{staticStyle:{"font-weight":"600"}},[a._v(a._s(a.selectedRowKeys.length))]),a._v("项  \n      "),e("a",{staticStyle:{"margin-left":"24px"},on:{click:a.onClearSelected}},[a._v("清空")])]),e("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",columns:a.columns,dataSource:a.dataSource,pagination:a.ipagination,loading:a.loading,rowSelection:{selectedRowKeys:a.selectedRowKeys,onChange:a.onSelectChange}},on:{change:a.handleTableChange},scopedSlots:a._u([{key:"dataContent",fn:function(a,t){return e("span",{},[e("j-ellipsis",{attrs:{value:a,length:80}})],1)}}])})],1),e("data-log-modal",{ref:"modalForm",on:{ok:a.modalFormOk}})],1)},n=[],o=e("b469"),s=e("b65a"),r=e("d579"),l={name:"DataLogList",mixins:[s["a"]],components:{JEllipsis:r["default"],DataLogModal:o["default"]},data:function(){return{description:"数据日志管理页面",columns:[{title:"表名",align:"center",dataIndex:"dataTable",width:"120"},{title:"数据ID",align:"center",dataIndex:"dataId",width:"120"},{title:"版本号",align:"center",dataIndex:"dataVersion",width:"50"},{title:"数据内容",align:"center",dataIndex:"dataContent",width:"150",scopedSlots:{customRender:"dataContent"}},{title:"创建人",align:"center",dataIndex:"createBy",width:"100"}],url:{list:"/sys/dataLog/list"}}},methods:{handleCompare:function(){return this.selectionRows&&2==this.selectionRows.length?this.selectionRows[0].dataId!=this.selectionRows[1].dataId?(this.openNotifIcon("请选择相同的数据库表和数据ID进行比较"),!1):(this.$refs.modalForm.addModal(this.selectionRows),void(this.$refs.modalForm.title="数据比较")):(this.openNotifIcon("请选择两条数据"),!1)},openNotifIcon:function(a){this.$notification["warning"]({message:"提示信息",description:a})}}},d=l,c=(e("2b2b"),e("5d22")),u=Object(c["a"])(d,i,n,!1,null,"5e3c5a3a",null);t["default"]=u.exports},"4a1c":function(a,t,e){"use strict";e("a862")},a862:function(a,t,e){},ae8f:function(a,t,e){},b469:function(a,t,e){"use strict";e.r(t);var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("a-modal",{attrs:{width:a.modalWidth,visible:a.visible,title:"数据对比窗口",confirmLoading:a.confirmLoading,cancelText:"取消"},on:{ok:a.handleOk,cancel:a.handleCancel}},[e("a-spin",{attrs:{spinning:a.confirmLoading}},[e("a-form",{staticClass:"form",attrs:{form:a.form},on:{submit:a.handleSubmit}},[e("a-row",{staticClass:"form-row",attrs:{gutter:24}},[e("a-col",{attrs:{md:12,sm:8}},[e("a-form-item",{attrs:{label:"数据库表名","label-col":{span:6},"wrapper-col":{span:15}}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["dataTale",{}],expression:"[ 'dataTale', {}]"}],attrs:{placeholder:"请输入数据库表名",disabled:""},on:{blur:a.handleTableBlur}})],1)],1),e("a-col",{attrs:{md:12,sm:8}},[e("a-form-item",{attrs:{label:"数据ID","label-col":{span:5},"wrapper-col":{span:15}}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["dataId",{}],expression:"[ 'dataId', {}]"}],attrs:{placeholder:"请输入数据ID",disabled:""},on:{blur:a.handleIdBlur}})],1)],1)],1),e("a-row",{staticClass:"form-row",attrs:{gutter:24}},[e("a-col",{attrs:{md:12,sm:8}},[e("a-form-item",{attrs:{label:"版本号1","label-col":{span:6},"wrapper-col":{span:15}}},[e("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["dataVersion1",{}],expression:"[ 'dataVersion1', {}]"}],attrs:{placeholder:"请选择版本号"},on:{change:a.handleChange1}},a._l(a.DataVersionList,(function(t,i){return e("a-select-option",{key:i.toString(),attrs:{value:t.id}},[a._v("\n                  "+a._s(t.dataVersion)+"\n                ")])})),1)],1)],1),e("a-col",{attrs:{md:12,sm:8}},[e("a-form-item",{attrs:{label:"版本号2","label-col":{span:5},"wrapper-col":{span:15}}},[e("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["dataVersion2",{}],expression:"[ 'dataVersion2', {}]"}],attrs:{placeholder:"请选择版本号"},on:{change:a.handleChange2}},a._l(a.DataVersionList,(function(t,i){return e("a-select-option",{key:i.toString(),attrs:{value:t.id}},[a._v("\n                  "+a._s(t.dataVersion)+"\n                ")])})),1)],1)],1)],1)],1)],1),e("data-log-compare-modal",{ref:"modal",on:{ok:a.modalFormOk}})],1)],1)},n=[],o=e("0fea"),s=e("fcbc"),r={name:"DataLogModal",components:{DataLogCompareModal:s["default"]},dataId1:"",dataId2:"",dataTable1:"",dataID3:"",data:function(){return{modalWidth:700,modaltoggleFlag:!0,confirmDirty:!1,title:"操作",visible:!1,model:{},confirmLoading:!1,headers:{},form:this.$form.createForm(this),url:{queryDataVerListUrl:"/sys/dataLog/queryDataVerList"},DataVersionList:[]}},created:function(){},methods:{addModal:function(a){var t=this,e=a[0].dataTable,i=a[0].dataId,n=a[0].dataVersion,o=a[1].dataVersion;this.dataId1=a[0].id,this.dataId2=a[1].id,this.dataTable1=a[0].dataTable,this.dataID3=a[0].dataId,this.initDataVersionList(),this.form.resetFields(),this.visible=!0,this.$nextTick((function(){t.form.setFieldsValue({dataTale:e,dataId:i,dataVersion1:n,dataVersion2:o})}))},handleOk:function(){this.close(),this.$refs.modal.compareModal(this.dataId1,this.dataId2),this.$refs.modal.title="数据比较"},handleCancel:function(){this.close()},handleSubmit:function(){},close:function(){this.$emit("close"),this.visible=!1,this.disableSubmit=!1},modalFormOk:function(){},initDataVersionList:function(){var a=this,t=this;Object(o["c"])(t.url.queryDataVerListUrl,{dataTable:this.dataTable1,dataId:this.dataID3}).then((function(t){t.success?a.DataVersionList=t.result:(a.DataVersionList=[],a.dataId1="",a.dataId2="")}))},handleChange1:function(a){this.dataId1=a},handleChange2:function(a){this.dataId2=a},handleTableBlur:function(a){this.dataTable1=a.target.value,this.initDataVersionList()},handleIdBlur:function(a){this.dataID3=a.target.value,this.initDataVersionList()}}},l=r,d=e("5d22"),c=Object(d["a"])(l,i,n,!1,null,"499ee242",null);t["default"]=c.exports},fcbc:function(a,t,e){"use strict";e.r(t);var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("a-modal",{attrs:{width:a.modalWidth,visible:a.visible,footer:null,cancelText:"关闭"},on:{cancel:a.handleCancel}},[e("div",{staticClass:"marginCss"},[e("a-table",{ref:"table",attrs:{size:"small",bordered:"",rowKey:"id",columns:a.columns,dataSource:a.dataSource,rowClassName:a.setdataCss,loading:a.loading,scroll:{y:700},pagination:!1},scopedSlots:a._u([{key:"avatarslot",fn:function(t,i){return[e("div",{staticClass:"anty-img-wrap"},[e("img",{attrs:{src:a.getAvatarView(i)}})])]}}])},[e("span",{attrs:{slot:"dataVersionTitle1"},slot:"dataVersionTitle1"},[e("a-icon",{attrs:{type:"smile-o"}}),a._v(" 版本:"+a._s(a.dataVersion1Num))],1),e("span",{attrs:{slot:"dataVersionTitle2"},slot:"dataVersionTitle2"},[e("a-icon",{attrs:{type:"smile-o"}}),a._v(" 版本:"+a._s(a.dataVersion2Num))],1)])],1)])},n=[],o=e("0fea"),s={name:"DataLogCompareModal",data:function(){return{modalWidth:1e3,modaltoggleFlag:!0,confirmDirty:!1,title:"操作",visible:!1,model:{},confirmLoading:!1,headers:{},dataVersion1Num:"",dataVersion2Num:"",columns:[{title:"字段名",align:"left",dataIndex:"code",width:"30%"},{align:"left",dataIndex:"dataVersion1",width:"30%",slots:{title:"dataVersionTitle1"}},{title:"",dataIndex:"imgshow",align:"center",scopedSlots:{customRender:"avatarslot"},width:"10%"},{align:"left",dataIndex:"dataVersion2",width:"30%",slots:{title:"dataVersionTitle2"}}],dataSource:[],loading:!1,url:{queryCompareUrl:"/sys/dataLog/queryCompareList"}}},created:function(){},methods:{loadData:function(a,t){var e=this;this.dataSource=[];var i=this;Object(o["c"])(i.url.queryCompareUrl,{dataId1:a,dataId2:t}).then((function(a){if(a.success){i.dataVersion1Num=a.result[0].dataVersion,i.dataVersion2Num=a.result[1].dataVersion;var t=JSON.parse(a.result[0].dataContent),n=JSON.parse(a.result[1].dataContent);for(var o in t)for(var s in n)o==s&&e.dataSource.push({code:o,imgshow:"",dataVersion1:t[o],dataVersion2:n[s]})}}))},compareModal:function(a,t){this.visible=!0,this.loadData(a,t)},handleCancel:function(){this.close()},modalFormOk:function(){},close:function(){this.$emit("close"),this.visible=!1,this.disableSubmit=!1},setdataCss:function(a){var t="trcolor",e=a.dataVersion1,i=a.dataVersion2;if(e!=i)return t},getAvatarView:function(a){return a.dataVersion1!=a.dataVersion2?"/goright.png":""}}},r=s,l=(e("4a1c"),e("5d22")),d=Object(l["a"])(r,i,n,!1,null,"6f34d1e7",null);t["default"]=d.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bb4b4476","chunk-190a68c0","chunk-41ce25e6","chunk-edffddfe","chunk-6c6406d9","chunk-2d0de953","chunk-2d0de953"],{"0baf":function(e,t,a){},"39a5":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:800,visible:e.visible,confirmLoading:e.confirmLoading,okButtonProps:{props:{disabled:e.disableSubmit}},cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[e.editStatus?a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"客户姓名",hasFeedback:""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入客户姓名!"}]}],expression:"['name', {rules: [{ required: true, message: '请输入客户姓名!' }]}]"}],attrs:{placeholder:"请输入客户姓名",readOnly:e.disableSubmit}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"性别",hasFeedback:""}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["sex",{}],expression:"['sex', {}]"}],attrs:{placeholder:"请选择性别"}},[a("a-select-option",{attrs:{value:"1"}},[e._v("男性")]),a("a-select-option",{attrs:{value:"2"}},[e._v("女性")])],1)],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"身份证号码",hasFeedback:""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["idcard",e.validatorRules.idcard],expression:"['idcard', validatorRules.idcard]"}],attrs:{placeholder:"请输入身份证号码",readOnly:e.disableSubmit}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"身份证扫描件",hasFeedback:""}},[a("j-image-upload",{attrs:{text:"上传",isMultiple:!0},model:{value:e.fileList,callback:function(t){e.fileList=t},expression:"fileList"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"联系方式",hasFeedback:""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["telphone",e.validatorRules.telphone],expression:"[ 'telphone', validatorRules.telphone]"}],attrs:{readOnly:e.disableSubmit}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单号码",hidden:e.hiding,hasFeedback:""},model:{value:this.orderId,callback:function(t){e.$set(this,"orderId",t)},expression:"this.orderId"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderId",{}],expression:"[ 'orderId', {}]"}],attrs:{disabled:"disabled"}})],1)],1)],1):e._e()],1)},i=[],n=a("0fea"),o=a("85ee"),s=a.n(o),l=a("a593"),d=a("9fb0"),c=a("e610"),u={name:"JeecgOrderCustomerModal",components:{JImageUpload:c["default"]},data:function(){return{title:"操作",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},columns:[{title:"客户名",align:"center",dataIndex:"name"},{title:"性别",align:"center",dataIndex:"sex"},{title:"身份证号码",align:"center",dataIndex:"idcard"},{title:"身份证扫描件",align:"center",dataIndex:"idcardPic"},{title:"电话",dataIndex:"telphone",align:"center"},{title:"订单号码",dataIndex:"orderId",align:"center"},{title:"创建人",dataIndex:"createBy",align:"center"},{title:"创建时间",dataIndex:"createTime",align:"center"},{title:"更新时间",dataIndex:"updateBy",align:"center"},{title:"更新人",dataIndex:"updateTime",align:"center"}],fileList:[],disableSubmit:!1,selectedRowKeys:[],orderId:"",hiding:!1,headers:{},picUrl:"",picArray:[],previewVisible:!1,previewImage:"",addStatus:!1,editStatus:!1,confirmLoading:!1,form:this.$form.createForm(this),url:{add:"/test/order/addCustomer",edit:"/test/order/editCustomer",fileUpload:window._CONFIG["domianURL"]+"/sys/common/upload",getOrderCustomerList:"/test/order/listOrderCustomerByMainId"},validatorRules:{telphone:{rules:[{validator:this.validateMobile}]},idcard:{rules:[{validator:this.validateIdCard}]}}}},computed:{uploadAction:function(){return this.url.fileUpload}},created:function(){var e=l["default"].ls.get(d["a"]);this.headers={"X-Access-Token":e}},methods:{add:function(e){this.hiding=!0,e?(this.orderId=e,this.edit({orderId:e},"")):this.$message.warning("请选择一个客户信息")},detail:function(e){this.edit(e,"d")},edit:function(e,t){var a=this;"e"==t?(this.hiding=!1,this.disableSubmit=!1):"d"==t?(this.hiding=!1,this.disableSubmit=!0):(this.hiding=!0,this.disableSubmit=!1),this.form.resetFields(),this.orderId=e.orderId,this.model=Object.assign({},e),e.id?(this.hiding=!1,this.addStatus=!1,this.editStatus=!0,this.$nextTick((function(){a.form.setFieldsValue(s()(a.model,"id","name","sex","idcard","telphone","orderId","createBy","createTime","updateBy","updateTime"))})),setTimeout((function(){a.fileList=e.idcardPic}),5)):(this.addStatus=!1,this.editStatus=!0),this.visible=!0},close:function(){this.$emit("close"),this.visible=!1,this.picUrl="",this.fileList=[]},handleOk:function(){var e=this,t=this;this.form.validateFields((function(a,r){if(!a){t.confirmLoading=!0;var i="",o="";e.model.id?(i+=e.url.edit,o="put"):(i+=e.url.add,o="post");var s=Object.assign(e.model,r);s.orderId=e.orderId,""!=e.fileList?s.idcardPic=e.fileList:s.idcardPic="",Object(n["h"])(i,s,o).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()},validateMobile:function(e,t,a){!t||new RegExp(/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/).test(t)?a():a("您的手机号码格式不正确!")},validateIdCard:function(e,t,a){!t||new RegExp(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/).test(t)?a():a("您的身份证号码格式不正确!")}}},m=u,p=(a("f88c"),a("5d22")),f=Object(p["a"])(m,r,i,!1,null,"800ce91c",null);t["default"]=f.exports},"61dc":function(e,t,a){},6620:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"订单号"}},[a("a-input",{attrs:{placeholder:"请输入订单号"},model:{value:e.queryParam.orderCode,callback:function(t){e.$set(e.queryParam,"orderCode",t)},expression:"queryParam.orderCode"}})],1)],1),a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"订单类型"}},[a("a-select",{attrs:{placeholder:"请输入订单类型"},model:{value:e.queryParam.ctype,callback:function(t){e.$set(e.queryParam,"ctype",t)},expression:"queryParam.ctype"}},[a("a-select-option",{attrs:{value:"1"}},[e._v("国内订单")]),a("a-select-option",{attrs:{value:"2"}},[e._v("国际订单")])],1)],1)],1),a("a-col",{attrs:{md:6,sm:24}},[a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)])],1)],1)],1),a("div",{staticClass:"table-operator"},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]),e.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.batchDel}},[a("a-icon",{attrs:{type:"delete"}}),e._v("\n          删除\n        ")],1)],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(" 批量操作\n        "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),a("div",[a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v(" 已选择 "),a("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys.length))]),e._v("项\n      "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),a("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",filterMultiple:"filterMultiple",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange,type:e.type},customRow:e.clickThenCheck},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,r){return a("span",{},[a("a",{on:{click:function(t){return e.handleEdit(r)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(r.id)}}},[a("a",[e._v("删除")])])],1)}}])})],1),a("a-tabs",{attrs:{defaultActiveKey:"1"}},[a("a-tab-pane",{key:"1",attrs:{tab:"客户信息"}},[a("Jeecg-Order-Customer-List",{ref:"JeecgOrderCustomerList"})],1),a("a-tab-pane",{key:"2",attrs:{tab:"机票信息",forceRender:""}},[a("Jeecg-Order-Ticket-List",{ref:"JeecgOrderTicketList"})],1)],1),a("jeecgOrderDMain-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},i=[],n=a("dd9d"),o=a("d544"),s=a("8c22"),l=a("0fea"),d=a("39a5"),c=a("aa8e"),u=a("b65a"),m={name:"JeecgOrderDMainList",mixins:[u["a"]],components:{JeecgOrderTicketModal:c["default"],JeecgOrderCustomerModal:d["default"],JeecgOrderDMainModal:n["default"],JeecgOrderCustomerList:o["default"],JeecgOrderTicketList:s["default"]},data:function(){return{description:"订单管理页面",ipagination:{current:1,pageSize:5,pageSizeOptions:["5","10","20"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},columns:[{title:"#",dataIndex:"",key:"rowIndex",width:60,align:"center",customRender:function(e,t,a){return parseInt(a)+1}},{title:"订单号",align:"center",dataIndex:"orderCode"},{title:"订单类型",align:"center",dataIndex:"ctype",customRender:function(e){var t="";return"1"===e?t="国内订单":"2"===e&&(t="国际订单"),t}},{title:"订单日期",align:"center",dataIndex:"orderDate"},{title:"订单金额",align:"center",dataIndex:"orderMoney"},{title:"订单备注",align:"center",dataIndex:"content"},{title:"操作",dataIndex:"action",align:"center",scopedSlots:{customRender:"action"}}],type:"radio",url:{list:"/test/order/orderList",delete:"/test/order/delete",deleteBatch:"/test/order/deleteBatch"}}},methods:{clickThenCheck:function(e){var t=this;return{on:{click:function(){t.onSelectChange(e.id.split(","),[e])}}}},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t,this.$refs.JeecgOrderCustomerList.getOrderMain(this.selectedRowKeys[0]),this.$refs.JeecgOrderTicketList.getOrderMain(this.selectedRowKeys[0])},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[],this.$refs.JeecgOrderCustomerList.queryParam.mainId=null,this.$refs.JeecgOrderTicketList.queryParam.mainId=null,this.$refs.JeecgOrderCustomerList.loadData(),this.$refs.JeecgOrderTicketList.loadData(),this.$refs.JeecgOrderCustomerList.selectedRowKeys=[],this.$refs.JeecgOrderCustomerList.selectionRows=[],this.$refs.JeecgOrderTicketList.selectedRowKeys=[],this.$refs.JeecgOrderTicketList.selectionRows=[]},handleDelete:function(e){var t=this,a=this;Object(l["a"])(a.url.delete,{id:e}).then((function(e){e.success?(a.$message.success(e.message),a.loadData(),t.$refs.JeecgOrderCustomerList.loadData(),t.$refs.JeecgOrderTicketList.loadData()):a.$message.warning(e.message)}))},searchQuery:function(){this.selectedRowKeys=[],this.selectionRows=[],this.$refs.JeecgOrderCustomerList.queryParam.mainId=null,this.$refs.JeecgOrderTicketList.queryParam.mainId=null,this.$refs.JeecgOrderCustomerList.loadData(),this.$refs.JeecgOrderTicketList.loadData(),this.$refs.JeecgOrderCustomerList.selectedRowKeys=[],this.$refs.JeecgOrderCustomerList.selectionRows=[],this.$refs.JeecgOrderTicketList.selectedRowKeys=[],this.$refs.JeecgOrderTicketList.selectionRows=[],this.loadData()}}},p=m,f=(a("a468"),a("5d22")),h=Object(f["a"])(p,r,i,!1,null,"1bacfb3c",null);t["default"]=h.exports},"85ee":function(e,t,a){(function(t){var a=1/0,r=9007199254740991,i="[object Arguments]",n="[object Function]",o="[object GeneratorFunction]",s="[object Symbol]",l="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,c=l||d||Function("return this")();function u(e,t,a){switch(a.length){case 0:return e.call(t);case 1:return e.call(t,a[0]);case 2:return e.call(t,a[0],a[1]);case 3:return e.call(t,a[0],a[1],a[2])}return e.apply(t,a)}function m(e,t){var a=-1,r=e?e.length:0,i=Array(r);while(++a<r)i[a]=t(e[a],a,e);return i}function p(e,t){var a=-1,r=t.length,i=e.length;while(++a<r)e[i+a]=t[a];return e}var f=Object.prototype,h=f.hasOwnProperty,g=f.toString,b=c.Symbol,v=f.propertyIsEnumerable,y=b?b.isConcatSpreadable:void 0,w=Math.max;function C(e,t,a,r,i){var n=-1,o=e.length;a||(a=S),i||(i=[]);while(++n<o){var s=e[n];t>0&&a(s)?t>1?C(s,t-1,a,r,i):p(i,s):r||(i[i.length]=s)}return i}function k(e,t){return e=Object(e),O(e,t,(function(t,a){return a in e}))}function O(e,t,a){var r=-1,i=t.length,n={};while(++r<i){var o=t[r],s=e[o];a(s,o)&&(n[o]=s)}return n}function x(e,t){return t=w(void 0===t?e.length-1:t,0),function(){var a=arguments,r=-1,i=w(a.length-t,0),n=Array(i);while(++r<i)n[r]=a[t+r];r=-1;var o=Array(t+1);while(++r<t)o[r]=a[r];return o[t]=n,u(e,this,o)}}function S(e){return _(e)||L(e)||!!(y&&e&&e[y])}function I(e){if("string"==typeof e||J(e))return e;var t=e+"";return"0"==t&&1/e==-a?"-0":t}function L(e){return j(e)&&h.call(e,"callee")&&(!v.call(e,"callee")||g.call(e)==i)}var _=Array.isArray;function $(e){return null!=e&&D(e.length)&&!M(e)}function j(e){return R(e)&&$(e)}function M(e){var t=T(e)?g.call(e):"";return t==n||t==o}function D(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}function T(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function R(e){return!!e&&"object"==typeof e}function J(e){return"symbol"==typeof e||R(e)&&g.call(e)==s}var F=x((function(e,t){return null==e?{}:k(e,m(C(t,1),I))}));e.exports=F}).call(this,a("2409"))},"8c22":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-operator",staticStyle:{margin:"-25px 0px 10px 2px"},attrs:{md:24,sm:24}},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]),e.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.batchDel}},[a("a-icon",{attrs:{type:"delete"}}),e._v("\n          删除\n        ")],1)],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(" 批量操作\n        "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),a("div",[a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v(" 已选择 "),a("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys.length))]),e._v("项\n      "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),a("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,r){return a("span",{},[a("a",{on:{click:function(t){return e.handleEdit(r)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("\n            更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.handleDetail(r)}}},[e._v("详情")])]),a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(r.id)}}},[a("a",[e._v("删除")])])],1)],1)],1)],1)}}])})],1),a("JeecgOrderTicket-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},i=[],n=a("aa8e"),o=a("b65a"),s=a("0fea"),l={name:"JeecgOrderTicketList",mixins:[o["a"]],components:{JeecgOrderTicketModal:n["default"]},data:function(){return{description:"机票信息",columns:[{title:"航班号",align:"center",dataIndex:"ticketCode"},{title:"航班时间",align:"center",dataIndex:"tickectDate"},{title:"订单号码",align:"center",dataIndex:"orderId"},{title:"创建人",align:"center",dataIndex:"createBy"},{title:"创建时间",align:"center",dataIndex:"createTime",sorter:!0},{title:"操作",key:"operation",align:"center",width:130,scopedSlots:{customRender:"action"}}],url:{list:"/test/order/listOrderTicketByMainId",delete:"/test/order/deleteTicket",deleteBatch:"/test/order/deleteBatchTicket"}}},methods:{loadData:function(e){var t=this;1===e&&(this.ipagination.current=1);var a=this.getQueryParams();Object(s["c"])(this.url.list,{orderId:a.mainId,pageNo:this.ipagination.current,pageSize:this.ipagination.pageSize}).then((function(e){e.success?(t.dataSource=e.result.records,t.ipagination.total=e.result.total):t.dataSource=null}))},getOrderMain:function(e){this.queryParam.mainId=e,this.loadData(1)},handleAdd:function(){this.$refs.modalForm.add(this.queryParam.mainId),this.$refs.modalForm.title="添加机票信息"}}},d=l,c=(a("facd"),a("5d22")),u=Object(c["a"])(d,r,i,!1,null,"3e5b2200",null);t["default"]=u.exports},a468:function(e,t,a){"use strict";a("61dc")},aa8e:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:800,visible:e.visible,okButtonProps:{props:{disabled:e.disableSubmit}},confirmLoading:e.confirmLoading,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"航班号",hasFeedback:""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["ticketCode",{rules:[{required:!0,message:"请输入航班号!"}]}],expression:"['ticketCode', {rules:[{ required: true,message: '请输入航班号!'}]}]"}],attrs:{placeholder:"请输入航班号",readOnly:e.disableSubmit}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"航班时间",hasFeedback:""}},[a("j-date",{directives:[{name:"decorator",rawName:"v-decorator",value:["tickectDate",{rules:[{required:!0,message:"请输入航班号!"}]}],expression:"['tickectDate',{rules:[{ required: true,message: '请输入航班号!'}]}]"}],attrs:{"trigger-change":!0}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单号码",hidden:e.hiding,hasFeedback:""},model:{value:this.orderId,callback:function(t){e.$set(this,"orderId",t)},expression:"this.orderId"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderId",{}],expression:"[ 'orderId', {}]"}],attrs:{disabled:"disabled"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"创建人",hidden:e.hiding,hasFeedback:""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["createBy",{}],expression:"[ 'createBy', {}]"}],attrs:{readOnly:e.disableSubmit}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"创建时间",hidden:e.hiding,hasFeedback:""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["createTime",{}],expression:"[ 'createTime', {}]"}],attrs:{readOnly:e.disableSubmit}})],1)],1)],1)],1)},i=[],n=a("0fea"),o=a("85ee"),s=a.n(o),l=a("caaf"),d=a.n(l),c=a("2dab"),u={components:{JDate:c["default"]},name:"JeecgOrderTicketModal",data:function(){return{title:"操作",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},moment:d.a,format:"YYYY-MM-DD HH:mm:ss",disableSubmit:!1,orderId:"",hiding:!1,confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{},url:{add:"/test/order/addTicket",edit:"/test/order/editTicket"}}},created:function(){},methods:{add:function(e){e?this.edit({orderId:e},""):this.$message.warning("请选择一条航班数据")},detail:function(e){this.edit(e,"d")},edit:function(e,t){var a=this;"e"==t?(this.hiding=!1,this.disableSubmit=!1):"d"==t?(this.hiding=!1,this.disableSubmit=!0):(this.hiding=!0,this.disableSubmit=!1),this.form.resetFields(),this.orderId=e.orderId,this.model=Object.assign({},e),this.visible=!0,this.$nextTick((function(){a.form.setFieldsValue(s()(a.model,"ticketCode","tickectDate","orderId","createBy","createTime","updateBy","updateTime"))}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(a,r){if(!a){t.confirmLoading=!0;var i="",o="";e.model.id?(i+=e.url.edit,o="put"):(i+=e.url.add,o="post");var s=Object.assign(e.model,r);s.mainId=e.orderId,Object(n["h"])(i,s,o).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()}}},m=u,p=a("5d22"),f=Object(p["a"])(m,r,i,!1,null,"6f93af9c",null);t["default"]=f.exports},af54:function(e,t,a){},b046:function(e,t,a){"use strict";a("e530")},c298:function(e,t,a){},d18d:function(e,t,a){"use strict";a("af54")},d544:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-operator",staticStyle:{margin:"-25px 0px 10px 0px"},attrs:{md:24,sm:24}},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]),e.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.batchDel}},[a("a-icon",{attrs:{type:"delete"}}),e._v("\n          删除\n        ")],1)],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(" 批量操作\n        "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),a("div",[a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v(" 已选择 "),a("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys.length))]),e._v("项\n      "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),a("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,r){return a("span",{},[a("a",{on:{click:function(t){return e.handleEdit(r)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("\n            更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.handleDetail(r)}}},[e._v("详情")])]),a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(r.id)}}},[a("a",[e._v("删除")])])],1)],1)],1)],1)}}])})],1),a("jeecgOrderCustomer-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},i=[],n=a("39a5"),o=a("6620"),s=a("b65a"),l=a("0fea"),d={name:"JeecgOrderCustomerList",mixins:[s["a"]],components:{JeecgOrderDMainList:o["default"],JeecgOrderCustomerModal:n["default"]},data:function(){return{description:"订单客户信息",columns:[{title:"客户名",align:"center",width:100,dataIndex:"name",key:"name"},{title:"性别",align:"center",dataIndex:"sex",customRender:function(e){return 1==e?"男":2==e?"女":e}},{title:"身份证号码",align:"center",dataIndex:"idcard"},{title:"电话",dataIndex:"telphone",align:"center"},{title:"操作",key:"operation",align:"center",width:130,scopedSlots:{customRender:"action"}}],url:{list:"/test/order/listOrderCustomerByMainId",delete:"/test/order/deleteCustomer",deleteBatch:"/test/order/deleteBatchCustomer"}}},methods:{loadData:function(e){var t=this;1===e&&(this.ipagination.current=1);var a=this.getQueryParams();Object(l["c"])(this.url.list,{orderId:a.mainId,pageNo:this.ipagination.current,pageSize:this.ipagination.pageSize}).then((function(e){e.success?(t.dataSource=e.result.records,t.ipagination.total=e.result.total):t.dataSource=null}))},getOrderMain:function(e){this.queryParam.mainId=e,this.loadData(1)},handleAdd:function(){this.$refs.modalForm.add(this.queryParam.mainId),this.$refs.modalForm.title="添加客户信息"}}},c=d,u=(a("d18d"),a("5d22")),m=Object(u["a"])(c,r,i,!1,null,"032e064e",null);t["default"]=m.exports},dd9d:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:1e3,visible:e.visible,confirmLoading:e.confirmLoading},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单号",hasFeedback:""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderCode",{rules:[{required:!0,message:"请输入订单号!"}]}],expression:"['orderCode', {rules: [{ required: true, message: '请输入订单号!' }]}]"}],attrs:{placeholder:"请输入订单号"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单类型"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ctype",{}],expression:"['ctype',{}]"}],attrs:{placeholder:"请输入订单类型"}},[a("a-select-option",{attrs:{value:"1"}},[e._v("国内订单")]),a("a-select-option",{attrs:{value:"2"}},[e._v("国际订单")])],1)],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单日期"}},[a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderDate",{}],expression:"[ 'orderDate',{}]"}],attrs:{showTime:"",format:"YYYY-MM-DD HH:mm:ss"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单金额"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderMoney",{}],expression:"[ 'orderMoney', {}]"}],staticStyle:{width:"200px"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单备注"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["content",{}],expression:"['content', {}]"}],attrs:{placeholder:"请输入订单备注"}})],1)],1)],1)],1)},i=[],n=a("0fea"),o=a("2dab"),s=a("85ee"),l=a.n(s),d=a("caaf"),c=a.n(d);function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var f={name:"JeecgOrderDMainModal",components:{JDate:o["default"]},data:function(){return{title:"操作",visible:!1,orderMainModel:{jeecgOrderCustomerList:[{}],jeecgOrderTicketList:[{}]},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{},url:{add:"/test/order/add",edit:"/test/order/edit",orderCustomerList:"/test/order/listOrderCustomerByMainId",orderTicketList:"/test/order/listOrderTicketByMainId"}}},methods:{add:function(){this.edit({})},edit:function(e){var t=this;this.form.resetFields(),this.orderMainModel=Object.assign({},e),this.visible=!0,this.$nextTick((function(){t.form.setFieldsValue(l()(t.orderMainModel,"orderCode","ctype","orderMoney","content")),t.form.setFieldsValue({orderDate:t.orderMainModel.orderDate?c()(t.orderMainModel.orderDate):null})}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(a,r){if(!a){t.confirmLoading=!0;var i="",o="";e.orderMainModel.id?(i+=e.url.edit,o="put"):(i+=e.url.add,o="post");var s=Object.assign(e.orderMainModel,r);s.orderDate=s.orderDate?s.orderDate.format("YYYY-MM-DD HH:mm:ss"):null;var l=m({},s);Object(n["h"])(i,l,o).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()}}},h=f,g=(a("b046"),a("5d22")),b=Object(g["a"])(h,r,i,!1,null,"3947da84",null);t["default"]=b.exports},e530:function(e,t,a){},f88c:function(e,t,a){"use strict";a("0baf")},facd:function(e,t,a){"use strict";a("c298")}}]);
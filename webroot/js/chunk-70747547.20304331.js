(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70747547","chunk-2d212c43"],{"2f83":function(e,t,a){},"8c22":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-operator",staticStyle:{margin:"-25px 0px 10px 2px"},attrs:{md:24,sm:24}},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]),e.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.batchDel}},[a("a-icon",{attrs:{type:"delete"}}),e._v("\n          删除\n        ")],1)],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(" 批量操作\n        "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),a("div",[a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v(" 已选择 "),a("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys.length))]),e._v("项\n      "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),a("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,i){return a("span",{},[a("a",{on:{click:function(t){return e.handleEdit(i)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("\n            更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.handleDetail(i)}}},[e._v("详情")])]),a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(i.id)}}},[a("a",[e._v("删除")])])],1)],1)],1)],1)}}])})],1),a("JeecgOrderTicket-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},l=[],n=a("aa8e"),o=a("b65a"),r=a("0fea"),d={name:"JeecgOrderTicketList",mixins:[o["a"]],components:{JeecgOrderTicketModal:n["default"]},data:function(){return{description:"机票信息",columns:[{title:"航班号",align:"center",dataIndex:"ticketCode"},{title:"航班时间",align:"center",dataIndex:"tickectDate"},{title:"订单号码",align:"center",dataIndex:"orderId"},{title:"创建人",align:"center",dataIndex:"createBy"},{title:"创建时间",align:"center",dataIndex:"createTime",sorter:!0},{title:"操作",key:"operation",align:"center",width:130,scopedSlots:{customRender:"action"}}],url:{list:"/test/order/listOrderTicketByMainId",delete:"/test/order/deleteTicket",deleteBatch:"/test/order/deleteBatchTicket"}}},methods:{loadData:function(e){var t=this;1===e&&(this.ipagination.current=1);var a=this.getQueryParams();Object(r["c"])(this.url.list,{orderId:a.mainId,pageNo:this.ipagination.current,pageSize:this.ipagination.pageSize}).then((function(e){e.success?(t.dataSource=e.result.records,t.ipagination.total=e.result.total):t.dataSource=null}))},getOrderMain:function(e){this.queryParam.mainId=e,this.loadData(1)},handleAdd:function(){this.$refs.modalForm.add(this.queryParam.mainId),this.$refs.modalForm.title="添加机票信息"}}},s=d,c=(a("facd"),a("cba8")),m=Object(c["a"])(s,i,l,!1,null,"3e5b2200",null);t["default"]=m.exports},aa8e:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:800,visible:e.visible,okButtonProps:{props:{disabled:e.disableSubmit}},confirmLoading:e.confirmLoading,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form-model",{ref:"form",attrs:{model:e.model,rules:e.validatorRules}},[a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"航班号",prop:"ticketCode",hasFeedback:""}},[a("a-input",{attrs:{placeholder:"请输入航班号",readOnly:e.disableSubmit},model:{value:e.model.ticketCode,callback:function(t){e.$set(e.model,"ticketCode",t)},expression:"model.ticketCode"}})],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"航班时间",prop:"tickectDate",hasFeedback:""}},[a("j-date",{model:{value:e.model.tickectDate,callback:function(t){e.$set(e.model,"tickectDate",t)},expression:"model.tickectDate"}})],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单号码",hidden:e.hiding,hasFeedback:""},model:{value:this.orderId,callback:function(t){e.$set(this,"orderId",t)},expression:"this.orderId"}},[a("a-input",{attrs:{disabled:"disabled"},model:{value:e.model.orderId,callback:function(t){e.$set(e.model,"orderId",t)},expression:"model.orderId"}})],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"创建人",hidden:e.hiding,hasFeedback:""}},[a("a-input",{attrs:{readOnly:e.disableSubmit},model:{value:e.model.createBy,callback:function(t){e.$set(e.model,"createBy",t)},expression:"model.createBy"}})],1),a("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"创建时间",hidden:e.hiding,hasFeedback:""}},[a("a-input",{attrs:{readOnly:e.disableSubmit},model:{value:e.model.createTime,callback:function(t){e.$set(e.model,"createTime",t)},expression:"model.createTime"}})],1)],1)],1)],1)},l=[],n=a("0fea"),o=a("caaf"),r=a.n(o),d=a("2dab"),s={components:{JDate:d["default"]},name:"JeecgOrderTicketModal",data:function(){return{title:"操作",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},moment:r.a,format:"YYYY-MM-DD HH:mm:ss",disableSubmit:!1,orderId:"",hiding:!1,confirmLoading:!1,validatorRules:{ticketCode:[{required:!0,message:"请输入航班号!"}],tickectDate:[{required:!0,message:"请输入航班时间!"}]},url:{add:"/test/order/addTicket",edit:"/test/order/editTicket"}}},created:function(){},methods:{add:function(e){e?this.edit({orderId:e},""):this.$message.warning("请选择一条航班数据")},detail:function(e){this.edit(e,"d")},edit:function(e,t){"e"==t?(this.hiding=!1,this.disableSubmit=!1):"d"==t?(this.hiding=!1,this.disableSubmit=!0):(this.hiding=!0,this.disableSubmit=!1),this.model=Object.assign({},e),this.visible=!0},close:function(){this.$emit("close"),this.visible=!1,this.$refs.form.resetFields()},handleOk:function(){var e=this,t=this;this.$refs.form.validate((function(a){if(!a)return!1;t.confirmLoading=!0;var i="",l="";e.model.id?(i+=e.url.edit,l="put"):(i+=e.url.add,l="post"),e.model.mainId=e.model.orderId,Object(n["h"])(i,e.model,l).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}))},handleCancel:function(){this.close()}}},c=s,m=a("cba8"),u=Object(m["a"])(c,i,l,!1,null,"1c960cda",null);t["default"]=u.exports},facd:function(e,t,a){"use strict";a("2f83")}}]);
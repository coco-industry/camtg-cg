(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d212c43"],{aa8e:function(e,a,t){"use strict";t.r(a);var l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("a-modal",{attrs:{title:e.title,width:800,visible:e.visible,okButtonProps:{props:{disabled:e.disableSubmit}},confirmLoading:e.confirmLoading,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[t("a-spin",{attrs:{spinning:e.confirmLoading}},[t("a-form-model",{ref:"form",attrs:{model:e.model,rules:e.validatorRules}},[t("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"航班号",prop:"ticketCode",hasFeedback:""}},[t("a-input",{attrs:{placeholder:"请输入航班号",readOnly:e.disableSubmit},model:{value:e.model.ticketCode,callback:function(a){e.$set(e.model,"ticketCode",a)},expression:"model.ticketCode"}})],1),t("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"航班时间",prop:"tickectDate",hasFeedback:""}},[t("j-date",{model:{value:e.model.tickectDate,callback:function(a){e.$set(e.model,"tickectDate",a)},expression:"model.tickectDate"}})],1),t("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单号码",hidden:e.hiding,hasFeedback:""},model:{value:this.orderId,callback:function(a){e.$set(this,"orderId",a)},expression:"this.orderId"}},[t("a-input",{attrs:{disabled:"disabled"},model:{value:e.model.orderId,callback:function(a){e.$set(e.model,"orderId",a)},expression:"model.orderId"}})],1),t("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"创建人",hidden:e.hiding,hasFeedback:""}},[t("a-input",{attrs:{readOnly:e.disableSubmit},model:{value:e.model.createBy,callback:function(a){e.$set(e.model,"createBy",a)},expression:"model.createBy"}})],1),t("a-form-model-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"创建时间",hidden:e.hiding,hasFeedback:""}},[t("a-input",{attrs:{readOnly:e.disableSubmit},model:{value:e.model.createTime,callback:function(a){e.$set(e.model,"createTime",a)},expression:"model.createTime"}})],1)],1)],1)],1)},i=[],o=t("0fea"),d=t("caaf"),s=t.n(d),r=t("2dab"),n={components:{JDate:r["default"]},name:"JeecgOrderTicketModal",data:function(){return{title:"操作",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},moment:s.a,format:"YYYY-MM-DD HH:mm:ss",disableSubmit:!1,orderId:"",hiding:!1,confirmLoading:!1,validatorRules:{ticketCode:[{required:!0,message:"请输入航班号!"}],tickectDate:[{required:!0,message:"请输入航班时间!"}]},url:{add:"/test/order/addTicket",edit:"/test/order/editTicket"}}},created:function(){},methods:{add:function(e){e?this.edit({orderId:e},""):this.$message.warning("请选择一条航班数据")},detail:function(e){this.edit(e,"d")},edit:function(e,a){"e"==a?(this.hiding=!1,this.disableSubmit=!1):"d"==a?(this.hiding=!1,this.disableSubmit=!0):(this.hiding=!0,this.disableSubmit=!1),this.model=Object.assign({},e),this.visible=!0},close:function(){this.$emit("close"),this.visible=!1,this.$refs.form.resetFields()},handleOk:function(){var e=this,a=this;this.$refs.form.validate((function(t){if(!t)return!1;a.confirmLoading=!0;var l="",i="";e.model.id?(l+=e.url.edit,i="put"):(l+=e.url.add,i="post"),e.model.mainId=e.model.orderId,Object(o["h"])(l,e.model,i).then((function(e){e.success?(a.$message.success(e.message),a.$emit("ok")):a.$message.warning(e.message)})).finally((function(){a.confirmLoading=!1,a.close()}))}))},handleCancel:function(){this.close()}}},c=n,m=t("cba8"),u=Object(m["a"])(c,l,i,!1,null,"1c960cda",null);a["default"]=u.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c9207"],{"588f":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{display:"none"}},[n("iframe",{attrs:{id:e.id,src:e.url,frameborder:"0",width:"100%",height:"550px",scrolling:"auto"}})])},i=[],d=n("a593"),s=n("9fb0"),r={name:"PdfPreviewModal",data:function(){return{url:window._CONFIG["pdfDomainURL"],id:"pdfPreviewIframe",headers:{}}},created:function(){var e=d["default"].ls.get(s["a"]);this.headers={"X-Access-Token":e}},computed:{},mounted:function(){window.addEventListener("message",this.handleScanFileMessage)},methods:{handleScanFileMessage:function(e){e.data},previewFiles:function(e,t){var n=document.getElementById("pdfPreviewIframe"),a={title:e,token:t};n.contentWindow.postMessage(a,"*")}}},o=r,c=n("5d22"),l=Object(c["a"])(o,a,i,!1,null,"5088ac45",null);t["default"]=l.exports}}]);
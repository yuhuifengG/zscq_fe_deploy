(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ab60048a"],{"0974":function(e,t,r){"use strict";r.d(t,"r",(function(){return l})),r.d(t,"e",(function(){return i})),r.d(t,"d",(function(){return c})),r.d(t,"x",(function(){return s})),r.d(t,"f",(function(){return u})),r.d(t,"g",(function(){return p})),r.d(t,"h",(function(){return d})),r.d(t,"o",(function(){return m})),r.d(t,"n",(function(){return f})),r.d(t,"m",(function(){return y})),r.d(t,"q",(function(){return b})),r.d(t,"p",(function(){return h})),r.d(t,"t",(function(){return g})),r.d(t,"z",(function(){return v})),r.d(t,"j",(function(){return P})),r.d(t,"a",(function(){return w})),r.d(t,"k",(function(){return q})),r.d(t,"i",(function(){return I})),r.d(t,"l",(function(){return C})),r.d(t,"E",(function(){return R})),r.d(t,"b",(function(){return k})),r.d(t,"w",(function(){return x})),r.d(t,"D",(function(){return S})),r.d(t,"B",(function(){return N})),r.d(t,"C",(function(){return _})),r.d(t,"u",(function(){return O})),r.d(t,"v",(function(){return j})),r.d(t,"y",(function(){return $})),r.d(t,"s",(function(){return L})),r.d(t,"c",(function(){return T})),r.d(t,"A",(function(){return A}));r("5530");var a=r("b775"),n="",o={property:{queryPageList:n+"intellectualProperty/queryPageList",queryContractUnit:n+"intellectualProperty/queryContractUnit",queryContractInfo:n+"intellectualProperty/queryContractInfo",queryIntellectualProperty:n+"intellectualProperty/queryIntellectualProperty",queryContractResearch:n+"intellectualProperty/queryContractResearch",queryApplicantInfoPage:n+"intellectualProperty/queryApplicantInfoPage",queryInventorInfoPage:n+"intellectualProperty/queryInventorInfoPage",queryIntellectualView:"intellectualProperty/queryIntellectualView",queryTemplateList:"intellectualProperty/config/queryTemplateList",saveTemplateInfo:"intellectualProperty/config/saveTemplateInfo",queryAppendixInfo:"intellectualProperty/config/queryAppendixInfo",changeWorkState:"intellectualProperty/config/changeWorkState",queryAppendixInfoValue:"intellectualProperty/queryAppendixInfo",insert:"document/insert",queryAppendixValueInfo:"intellectualProperty/queryAppendixValueInfo",updateIntellectualPropertySubmit:"intellectualProperty/updateIntellectualPropertySubmit",updateIntellectualPropertyReport:"intellectualProperty/updateIntellectualPropertyReport",updateIntellectualPropertyAudit:"intellectualProperty/updateIntellectualPropertyAudit",updateIntellectualPropertyConfirm:"intellectualProperty/updateIntellectualPropertyConfirm",queryIntellectualByRegisterNumber:"intellectualProperty/queryIntellectualByRegisterNumber",queryUserRole:"intellectualProperty/queryUserRole",queryrewardPageList:"intellectualPropertyReward/queryPageList",saveRewardInfo:"intellectualPropertyReward/saveRewardInfo",queryRewardInfo:"intellectualPropertyReward/queryRewardInfo",generateProposalNumber:"intellectualProperty/generateProposalNumber",queryAppendixValueInfoFile:"intellectualProperty/queryAppendixValueInfoFile",queryContractNoTree:"intellectualProperWrite/queryContractNoTree",stateReset:"intellectual/examine/stateReset",queryContractByNo:"intellectualProperWrite/queryContractByNo"}};function l(e){return Object(a["b"])({method:"post",url:o.property.queryPageList,params:e})}function i(){return Object(a["b"])({method:"get",url:"contract/getContractList"})}function c(e){return Object(a["b"])({method:"get",url:"contract/getContractBasiccontractInfo",params:{contractId:e}})}function s(e){return Object(a["b"])({method:"post",url:"intellectualProperty/saveIntellectualProperty",params:e})}function u(e){return Object(a["b"])({method:"post",url:"intellectualParticipationUnit/getFromUnitList",params:{declareId:e}})}function p(e){return Object(a["b"])({method:"post",url:"intellectualCertificateFile/getIntellectualCertificateFilePage",params:e})}function d(e){return Object(a["b"])({method:"post",url:"intellectualPropertyInventorInfo/getIntellectualPropertyInventorInfoList",params:e})}function m(e){return Object(a["b"])({url:o.property.queryContractUnit,method:"get",params:e})}function f(e){return Object(a["b"])({url:o.property.queryContractResearch,method:"get",params:e})}function y(e){return Object(a["b"])({url:o.property.queryApplicantInfoPage,method:"get",params:e})}function b(e){return Object(a["b"])({url:o.property.queryInventorInfoPage,method:"get",params:e})}function h(e){return Object(a["b"])({url:o.property.queryIntellectualView,method:"get",params:e})}function g(e,t,r){return Object(a["b"])({url:o.property.queryTemplateList+"?pageNum="+t+"&pageSize="+r,method:"post",data:e})}function v(e){return Object(a["b"])({url:o.property.saveTemplateInfo,method:"post",data:e})}function P(e){return Object(a["b"])({url:o.property.queryAppendixInfo,method:"get",params:e})}function w(e){return Object(a["b"])({url:o.property.changeWorkState,method:"get",params:e})}function q(e){return Object(a["b"])({url:o.property.queryAppendixInfoValue,method:"get",params:e})}function I(e){return Object(a["b"])({url:o.property.insert,method:"post",data:e})}function C(e){return Object(a["b"])({url:o.property.queryAppendixValueInfo,method:"get",params:e})}function R(e){return Object(a["b"])({url:"intellectualProperty/updateIntellectualPropertySubmit",method:"post",data:e})}function k(e){return Object(a["b"])({url:"intellectualProperty/deleteIntellectualProperty",method:"post",params:{id:e}})}function x(e){return Object(a["b"])({url:"acceptance/reviewIntellectual",method:"post",params:e})}function S(e){return Object(a["b"])({url:o.property.updateIntellectualPropertyReport,method:"get",params:e})}function N(e){return Object(a["b"])({url:o.property.updateIntellectualPropertyAudit,method:"post",data:e})}function _(e,t){return Object(a["b"])({url:o.property.updateIntellectualPropertyConfirm+"?confirmType="+t,method:"post",data:e})}function O(){return Object(a["b"])({url:o.property.queryUserRole,method:"post"})}function j(e){return Object(a["b"])({url:o.property.queryrewardPageList,method:"post",data:e})}function $(e){return Object(a["b"])({url:o.property.saveRewardInfo,method:"post",data:e})}function L(e){return Object(a["b"])({url:o.property.queryRewardInfo,method:"get",params:e})}function T(e){return Object(a["b"])({url:"intellectualProperty/generateProposalNumber",method:"post",data:e})}function A(e){return Object(a["b"])({url:o.property.stateReset,method:"post",data:e})}},"1af8":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-modal",{attrs:{title:e.title,width:"880px",footer:null},on:{cancel:e.handleCancel},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[r("div",{staticClass:"mb20"},[r("span",{staticClass:"origination-title",staticStyle:{display:"inline-block",width:"50%"}},[e._v("未下发合同(任务书)列表：")]),r("div",{staticClass:"titleTopRight"},[e.dataList.msg?r("span",[e._v(e._s(e.dataList.msg))]):e._e()])]),r("s-table",{ref:"table",attrs:{size:"default",columns:e.columns,data:e.loadData,rowKey:"id",rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange,type:"radio"}},scopedSlots:e._u([{key:"contractName",fn:function(t,a){return[r("div",[[r("a",{on:{click:function(t){return e.nameClick(a)}}},[e._v(e._s(t))])]],2)]}}])}),r("div",{staticClass:"btn-box"},[r("a-button",{directives:[{name:"debounce",rawName:"v-debounce",value:e.handleCancel,expression:"handleCancel"}],staticClass:"w120",attrs:{type:"primary"}},[e._v("确认")])],1)],1)},n=[],o=(r("fb6a"),r("d3b7"),r("ab09")),l={name:"SubmitReport",components:{sTable:o["a"]},props:{dataList:Object,failList:Array,title:String},data:function(){var e=this;return{visible:!1,keyword:"",selectList:[],columns:[{title:"序号",width:"80px",customRender:function(t,r,a){return(e.parameter.pageNo-1)*e.parameter.pageSize+a+1}},{title:"提案名称",dataIndex:"registerName",width:200,scopedSlots:{customRender:"registerName"}},{title:"牵头申报单位",width:160,dataIndex:"undertakeUnitName"},{title:"负责人",width:140,dataIndex:"declarerName"}],loadData:function(t){return e.parameter=t,new Promise((function(r,a){r(e.failList.slice((t.pageNo-1)*t.pageSize,t.pageNo*t.pageSize))})).then((function(r){return{pageSize:t.pageSize,pageNo:t.pageNo,totalCount:e.failList.length,data:r}}))},selectedRowKeys:[],selectedRows:[],parameter:{},records:[],allRecords:[]}},watch:{dataList:{deep:!0,handler:function(e,t){void 0!==this.$refs.table&&this.$refs.table.refresh(!0)}},failList:{deep:!0,handler:function(e,t){void 0!==this.$refs.table&&this.$refs.table.refresh(!0)}}},methods:{nameClick:function(e){this.visible=!1,this.$emit("checkOrganization",e)},show:function(){this.visible=!0},handleCancel:function(){this.visible=!1},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectedRows=t},handleSearch:function(){this.$refs.table.refresh(!0)}}},i=l,c=(r("de84"),r("2877")),s=Object(c["a"])(i,a,n,!1,null,"2896f204",null);t["a"]=s.exports},"1e54":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("a-modal",{attrs:{title:"新建提案",width:"500px",footer:null},on:{cancel:e.handleCancel},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[r("a-form-model-item",{attrs:{label:"申报类型",prop:"contractNo"}},[r("a-select",{staticStyle:{width:"400px"},attrs:{allowClear:""},model:{value:e.tagSel,callback:function(t){e.tagSel=t},expression:"tagSel"}},[r("a-select-option",{attrs:{value:"1"}},[e._v("专利")]),r("a-select-option",{attrs:{value:"2"}},[e._v("软件著作")])],1)],1),r("a-form-model-item",{attrs:{label:"来源",prop:"contractNo"}},[r("a-select",{staticStyle:{width:"400px"},attrs:{allowClear:""},model:{value:e.source,callback:function(t){e.source=t},expression:"source"}},[r("a-select-option",{attrs:{value:"0"}},[e._v("课题")]),r("a-select-option",{attrs:{value:"1"}},[e._v("其他")])],1)],1),r("div",{staticClass:"tagsBtn"},[r("a-button",{directives:[{name:"debounce",rawName:"v-debounce",value:e.submit,expression:"submit"}],attrs:{type:"primary"}},[e._v("确认")]),r("a-button",{on:{click:e.handleCancel}},[e._v("取消")])],1)],1)],1)},n=[],o=r("0974"),l={props:{statusprop:{type:String}},data:function(){return{visible:!1,tagSel:"1",source:"0"}},methods:{show:function(){this.visible=!0},handleCancel:function(){this.visible=!1},submit:function(){var e=this,t="";"declaration"==this.statusprop?t="apply":"change"==this.statusprop&&(t="change"),Object(o["c"])({applyType:t}).then((function(t){t.success?Object(o["k"])({intellectualId:"",intellectualProperType:e.tagSel}).then((function(r){if(r.success){var a={type:e.tagSel,source:e.source,status:e.statusprop,applytype:"apply",number:t.data.proposalNumber};e.$emit("btnRepir",a,"添加")}else e.$message.warning(r.msg)})):e.$message.error(t.msg)})),this.visible=!1}}},i=l,c=(r("6176"),r("2877")),s=Object(c["a"])(i,a,n,!1,null,"4291fb40",null);t["a"]=s.exports},6155:function(e,t,r){},6176:function(e,t,r){"use strict";var a=r("74a3"),n=r.n(a);n.a},6941:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r("2373");function n(){return{components:{progressCheck:a["a"]}}}},7319:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-card",{staticClass:"content",attrs:{bordered:!1}},[r("div",{staticClass:"table-page-search-wrapper"},[r("a-form",{attrs:{layout:"inline"}},[r("a-row",{attrs:{gutter:24}},[r("a-col",{attrs:{md:8,sm:10,lg:6}},[r("a-form-item",{attrs:{label:"起止时间:"}},[r("a-range-picker",{on:{change:e.onChange}})],1)],1),r("a-col",{attrs:{md:8,sm:10,lg:6}},[r("a-form-item",{attrs:{label:"产生来源:"}},[r("a-select",{attrs:{allowClear:"",placeholder:"产生来源"},on:{change:e.piciHandleChange},model:{value:e.queryParam.source,callback:function(t){e.$set(e.queryParam,"source",t)},expression:"queryParam.source"}},e._l(e.subjectTypeAll,(function(t){return r("a-select-option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.name))])})),1)],1)],1),r("a-col",{attrs:{md:8,sm:10,lg:6}},[r("a-form-item",{attrs:{label:"成果类型:"}},[r("a-select",{attrs:{allowClear:"",placeholder:"成果类型"},on:{change:e.piciHandleChange},model:{value:e.queryParam.proposalType,callback:function(t){e.$set(e.queryParam,"proposalType",t)},expression:"queryParam.proposalType"}},e._l(e.popType,(function(t){return r("a-select-option",{key:t.id,attrs:{value:t.id}},[e._v(" "+e._s(t.name)+" ")])})),1)],1)],1),r("a-col",{attrs:{md:8,sm:10,lg:6}},[r("a-form-item",{attrs:{label:"专利名称:"}},[r("a-input",{attrs:{placeholder:"专利名称"},model:{value:e.queryParam.registerName,callback:function(t){e.$set(e.queryParam,"registerName",t)},expression:"queryParam.registerName"}})],1)],1),r("a-col",{attrs:{md:8,sm:10,lg:6}},[r("a-form-item",{attrs:{label:"合同(任务书)编号："}},[r("a-input",{attrs:{placeholder:"合同(任务书)编号"},model:{value:e.queryParam.contractNo,callback:function(t){e.$set(e.queryParam,"contractNo",t)},expression:"queryParam.contractNo"}})],1)],1),r("a-col",{attrs:{md:8,sm:10,lg:6}},[r("a-form-item",{attrs:{label:"合同(任务书)名称："}},[r("a-input",{attrs:{placeholder:"合同(任务书)名称"},model:{value:e.queryParam.contractName,callback:function(t){e.$set(e.queryParam,"contractName",t)},expression:"queryParam.contractName"}})],1)],1),r("a-col",{attrs:{md:8,sm:10,lg:6}},[r("a-form-item",{attrs:{label:"案件状态:"}},[r("a-select",{attrs:{allowClear:"",placeholder:"案件状态"},on:{change:e.piciHandleChange},model:{value:e.queryParam.proposalState,callback:function(t){e.$set(e.queryParam,"proposalState",t)},expression:"queryParam.proposalState"}},e._l(e.proState,(function(t){return r("a-select-option",{key:t.id,attrs:{value:t.id}},[e._v(" "+e._s(t.name)+" ")])})),1)],1)],1),r("a-col",{attrs:{md:8,sm:10,lg:6}},[r("a-form-item",{attrs:{label:"签头申报单位："}},[r("a-input",{attrs:{placeholder:"签头申报单位"},model:{value:e.queryParam.leadDeclarerUnitName,callback:function(t){e.$set(e.queryParam,"leadDeclarerUnitName",t)},expression:"queryParam.leadDeclarerUnitName"}})],1)],1)],1)],1)],1),r("div",{staticClass:"tabRight"},[r("a-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary"},on:{click:function(t){return e.$refs.table.refresh(!0)}}},[e._v("查询")]),r("a-button",{on:{click:function(t){e.queryParam={applyType:"change"},e.$refs.table.refresh(!0)}}},[e._v("重置")])],1),r("div",{staticClass:"table-operator"},[r("div",{staticClass:"tabLeft"},[r("a-button",{directives:[{name:"action",rawName:"v-action:property_change_add",arg:"property_change_add"}],attrs:{type:"primary",icon:"plus"},on:{click:e.add}},[e._v("新建")]),r("a-button",{directives:[{name:"action",rawName:"v-action:property_change_data",arg:"property_change_data"}],attrs:{type:"primary"},on:{click:e.submitData}},[e._v("提交")]),r("a-button",{directives:[{name:"action",rawName:"v-action:property_change_submit",arg:"property_change_submit"}],attrs:{type:"primary"},on:{click:e.submitReport}},[e._v("上报")])],1)]),r("report",{ref:"submitReportRef",attrs:{dataList:e.dataReport,failList:e.failListReport,title:e.title},on:{checkOrganization:e.checkOrganization}}),r("s-table",{ref:"table",attrs:{tabindex:"-1",order:"true",rowKey:"id",showPagination:"auto",columns:e.columns,data:e.loadData,scroll:{x:1400},rowSelection:e.rowSelection},scopedSlots:e._u([{key:"proposalState",fn:function(t,a){return[[r("a",{on:{click:function(t){return e.stateClick(a)}}},[e._v(e._s("0"===t?"待课题组提交":"1"===t?"待科管形审":"2"===t?"待管理员形审":"3"===t?"待课题组向管理员提交申请材料纸件":"4"===t?"待管理员盖章":"5"===t?"待课题组领取盖章材料":"6"===t?"待回填专利信息及上传官方文件":"7"===t?"待科管二次上报":"8"===t?"待管理员官方文件审核":"9"===t?"已完成":"10"===t?"课题已拒绝":""))])]]}},{key:"proposalNumber",fn:function(t,a){return[r("div",[[r("a",{on:{click:function(t){return e.btnRepir(a)}}},[e._v(e._s(t))])]],2)]}},{key:"proposalStage",fn:function(t,a){return[[r("a",{on:{click:function(t){return e.stateClick(a)}}},[e._v(e._s("0"===t?"新建":"1"===t?"审批中":"办结"))])]]}}])}),r("Addtags",{ref:"Addtags",attrs:{statusprop:e.status}}),r("progressCheck",{ref:"progressCheck",attrs:{module:"property"}})],1)},n=[],o=(r("a15b"),r("d3b7"),r("25f0"),r("96cf"),r("1da1")),l=r("5530"),i=r("2af9"),c=r("0974"),s=r("c1df"),u=r.n(s),p=r("1e54"),d=r("1af8"),m=r("6941"),f=r("2f62"),y={name:"PlatformList",mixins:[Object(m["a"])()],components:{STable:i["c"],Addtags:p["a"],report:d["a"]},data:function(){return{isOpen:!1,total:0,fillProps:{},dataReport:{},failListReport:[],selectedRows:[],data:"",title:"上报选择",status:"change",btntext:"audit",queryParam:{beginDate:"",endDate:"",source:"",proposalType:"",proposalName:"",contractNo:"",contractName:"",proposalState:"",leadDeclarerUnitName:"",applyType:"change"},selectedRowKeys:[],subjectTypeAll:[{name:"课题",id:"0"},{name:"其他",id:"1"}],popType:[{name:"专利",id:"1"},{name:"软件著作",id:"2"}],proState:[{name:"待课题组提交",id:"0"},{name:"待科管形审",id:"1"},{name:"待管理员形审",id:"2"},{name:"待课题组向管理员提交申请材料纸件",id:"3"},{name:"待管理员盖章",id:"4"},{name:"待课题组领取盖章材料",id:"5"},{name:"待回填专利信息及上传官方文件",id:"6"},{name:"待科管二次上报",id:"7"},{name:"待管理员官方文件审核",id:"8"},{name:"已完成",id:"9"}],columns:[{title:"提案编号",width:"160px",align:"center",dataIndex:"proposalNumber",scopedSlots:{customRender:"proposalNumber"}},{title:"专利名称",dataIndex:"registerName",key:"registerName",width:"180px"},{title:"提案状态",dataIndex:"proposalState",width:"160px",scopedSlots:{customRender:"proposalState"}},{title:"案件状态",dataIndex:"proposalStage",width:"160px",scopedSlots:{customRender:"proposalStage"}},{title:"依托课题编号",dataIndex:"contractNo",key:"contractNo",width:"160px"},{title:"牵头申报单位",dataIndex:"leadDeclarerUnitName",key:"leadDeclarerUnitName",width:"200px"},{title:"产生来源",dataIndex:"source",key:"source",width:"160px",customRender:function(e){return"0"===e?"课题":"1"===e?"其他":""}},{title:"操作",width:"160px",scopedSlots:{customRender:"action"}}]}},computed:{rowSelection:function(){var e=this;return{selectedRowKeys:this.selectedRowKeys,onChange:function(t,r){e.selectedRowKeys=t}}}},mounted:function(){this.ChangeCollapsed(!1)},methods:Object(l["a"])({},Object(f["b"])(["CloseCollapsed","ChangeCollapsed"]),{submitReport:function(){var e=this,t=[],r={};if(e.selectedRowKeys.length<1)e.$message.warning("请至少选择一条数据");else{for(var a=0;a<e.selectedRowKeys.length;a++)t.push(e.selectedRowKeys[a]);r={intellectualIds:t.join(",")},Object(c["D"])(r).then((function(t){t.success?(e.dataReport=t,e.failListReport=t.data.failedList,e.$refs.table.refresh(!0),e.$refs.submitReportRef.show()):(e.$refs.table.refresh(!0),e.$message.warning(t.msg))})).catch((function(e){}))}},loadData:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var a,n,o,l;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a={params:{pageSize:e.pageSize,pageNum:e.pageNo},data:t.queryParam},r.next=3,Object(c["r"])(a);case 3:return n=r.sent,o={data:[],totalCount:0,pageNo:1},n&&n.data&&(l=n.data,o.data=l.records,o.totalCount=l.total,o.pageNo=l.current),r.abrupt("return",o);case 7:case"end":return r.stop()}}),r)})))()},add:function(){this.$refs.Addtags.show()},stateClick:function(e){this.$refs.progressCheck.show(e.id,e.formalCheckState||0)},onOpenChange:function(e){this.isOpen=e},changeYear:function(e,t){this.queryParam.applyYear=e},panelChange:function(e,t){this.queryParam.applyYear=u()(e).format("YYYY"),this.isOpen=!1},piciHandleChange:function(e){this.queryParam.batch=e},onChange:function(e){this.queryParam.beginDate=e[0]?u()(e[0]).format("YYYY-MM-DD"):null,this.queryParam.endDate=e[1]?u()(e[1]).format("YYYY-MM-DD"):null},checkOrganization:function(e){this.btnRepir(e)},btnRepir:function(e){var t=this;Object(c["k"])({intellectualId:e.id,intellectualProperType:e.intellectualPropertyType}).then((function(r){if(r.success){var a="";a="6"===e.proposalState||"7"===e.proposalState||"8"===e.proposalState,t.$router.push({path:"/property/property-repirjust",query:{id:e.id,type:e.intellectualPropertyType,source:e.source,status:"change",applytype:"change",back:a}}),t.$store.commit("GET_TEMPLATELIST",r.data)}else t.$message.warning(r.msg)}))},submitData:function(){var e=this;0===this.selectedRowKeys.length?this.$message.warning("至少选择一条数据"):Object(c["E"])({intellectualIds:this.selectedRowKeys.toString()}).then((function(t){t.success?(e.$message.success(t.msg),e.$refs.table.refresh(!0)):e.$message.error(t.msg)}))}})},b=y,h=(r("c8f7"),r("2877")),g=Object(h["a"])(b,a,n,!1,null,"38d81e8c",null);t["default"]=g.exports},"74a3":function(e,t,r){},c8f7:function(e,t,r){"use strict";var a=r("6155"),n=r.n(a);n.a},de84:function(e,t,r){"use strict";var a=r("e1fd"),n=r.n(a);n.a},e1fd:function(e,t,r){}}]);
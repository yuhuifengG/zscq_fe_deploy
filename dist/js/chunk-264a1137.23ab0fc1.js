(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-264a1137"],{2068:function(t,e,a){},"37f9":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("module-switch",{attrs:{comps:t.items}})},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"workplace clearfix"},[n("div",{staticClass:"main clearfix"},[n("a-alert",{staticClass:"alertWp",attrs:{type:"warning","show-icon":"",message:"本系统已适配国产数据库，如有问题，请拨打010-51871297。"}}),n("div",{staticClass:"main-content",class:{"menu-fold":t.collapsed}},[n("a-card",{staticClass:"common-card",attrs:{loading:t.commonLoading},scopedSlots:t._u([{key:"title",fn:function(){return[n("div",{staticClass:"layout-header"},[n("div",{staticClass:"headSculpture"},[n("a-avatar",{class:{scale:"1"!=t.userInfo.gender},attrs:{src:"0"==t.userInfo.gender?a("8350"):a("5d8b")}})],1),n("div",{staticClass:"headCont"},[n("div",[n("span",{staticClass:"title"},[t._v(t._s(t.userInfo.realName)+"，欢迎使用科研管理系统")]),n("span",{staticStyle:{float:"right","font-weight":"500"}},[t._v(t._s(t.nowDate+" "+t.nowTime+" "+t.nowWeek))])]),n("div",[n("span",{staticClass:"deptName"},[t._v("所属单位："+t._s(t.userInfo.deptName))]),n("a-icon",{staticClass:"trigger",attrs:{type:t.collapsed?"menu-fold":"menu-unfold"},on:{click:t.toggle}})],1)])]),n("div",[n("a-avatar",{attrs:{src:a("fc1b")}}),n("span",[t._v("常用功能")])],1)]},proxy:!0}])},[n("a-list",{staticClass:"menuList",attrs:{"data-source":t.commonMenulist},scopedSlots:t._u([{key:"renderItem",fn:function(e){return n("a-list-item",{staticClass:"menuItem",on:{click:function(a){return t.toMenu(e)}}},["addMenu"!=e.name?n("a-card",[n("a-icon",{attrs:{type:e.icon}}),n("p",{staticClass:"menuName"},[t._v(t._s(e.name))])],1):t._e(),"addMenu"==e.name?n("a-card",{staticClass:"addMenu"},[n("a-icon",{attrs:{type:e.icon}})],1):t._e()],1)}}])})],1),n("a-card",{staticClass:"todo-card",scopedSlots:t._u([{key:"title",fn:function(){return[n("a-avatar",{attrs:{src:a("e86c")}}),n("span",[t._v("待办")])]},proxy:!0}])},[n("a-tabs",{attrs:{"default-active-key":"1",size:"large"},on:{change:t.callback}},["0"===t.userInfo.type?n("a-tab-pane",{key:"charts",staticClass:"clearfix",attrs:{tab:"课题统计"}},[n("div",{staticStyle:{float:"left",width:"50%"}},[n("div",{staticStyle:{width:"100%",height:"240px"},attrs:{id:"pieChart"}}),t.thisYearData.length>0?n("div",{staticClass:"project-list"},[n("a-list",t._l(t.thisYearData,(function(e,a){return n("a-list-item",{key:a,attrs:{loading:t.loading}},[n("a-tag",{attrs:{color:"#108ee9"}},[t._v(t._s("0"===e.bear?"参研":"主持"))]),n("span",{staticClass:"projectContent",attrs:{title:e.projectName}},[t._v(t._s(e.projectName))]),n("span",{staticClass:"projectDate"},[t._v(t._s(e.beginDate)+"—"+t._s(e.endDate))])],1)})),1)],1):t._e()]),n("div",{staticStyle:{overflow:"hidden"}},[n("div",{attrs:{id:"barChart"}}),t.projectsList.length>0?n("div",{staticClass:"project-list"},[n("a-list",t._l(t.projectsList,(function(e,a){return n("a-list-item",{key:a,attrs:{loading:t.loading}},[n("a-tag",{attrs:{color:"#108ee9"}},[t._v(t._s("0"===e.bear?"参研":"主持"))]),n("span",{staticClass:"projectContent",attrs:{title:e.projectName}},[t._v(t._s(e.projectName))]),n("span",{staticClass:"projectDate"},[t._v(t._s(e.beginDate)+"—"+t._s(e.endDate))])],1)})),1)],1):t._e()])]):t._e(),t._l(t.tabsData,(function(e,a){return n("a-tab-pane",{key:a},[n("template",{slot:"tab"},[n("a-badge",{attrs:{count:e.count}},[n("span",{staticClass:"tab-name"},[t._v(t._s(e.name))])])],1),n("a-table",{ref:"table",refInFor:!0,attrs:{showPagination:!0,"data-source":e.data,columns:t.columns[a],scroll:{x:1500}},scopedSlots:t._u([{key:"action",fn:function(e,a){return[n("a-button",{attrs:{type:"link"},on:{click:function(e){return t.edit(a)}}},[t._v(t._s(t.actionName(a)))])]}},{key:"name",fn:function(e,a){return[n("a",{staticClass:"statusName ellipsis",attrs:{title:e},on:{click:function(e){return t.edit(a,!0)}}},[t._v(t._s(e))])]}},{key:"stateName",fn:function(e,a){return[n("a",{attrs:{title:a.stateName},on:{click:function(e){return t.showProgress(a)}}},[t._v(t._s(a.stateName))])]}}],null,!0)})],2)}))],2)],1)],1),n("div",{staticClass:"main-aside",class:{"menu-fold":t.collapsed}},[n("a-card",{staticClass:"notice-card",scopedSlots:t._u([{key:"title",fn:function(){return[n("a-avatar",{attrs:{src:a("94e2")}}),n("span",[t._v("公告栏")])]},proxy:!0}])},[n("div",{staticStyle:{"max-height":"180px","overflow-y":"auto","min-height":"150px"}},[t._l(t.noticeList,(function(e,i){return n("p",{key:i,staticClass:"data-list clearfix"},[1==e.showTop?n("a-icon",{staticStyle:{color:"red",width:"20px"},attrs:{type:"vertical-align-top"}}):n("span",{staticClass:"dot-icon"},[t._v("▪")]),n("a",{on:{click:function(a){return t.getNoticeDetails(e)}}},[n("a-badge",[1==e.showNew?n("img",{attrs:{slot:"count",src:a("653b")},slot:"count"}):t._e(),n("a",{staticClass:"noticeTit"},[t._v(t._s(t._f("ellipsis")(e.title,"notice")))])])],1),n("span",{staticClass:"notice-date"},[t._v(" "+t._s(null==e.startTime?"":t.moment(e.startTime).format("MM.DD HH:mm"))+" ")])],1)})),0===t.noticeList.length?n("a-empty",{attrs:{image:t.simpleImage}}):t._e()],2),0!==t.noticeList.length?n("a-pagination",{attrs:{pageSize:t.noticePageInfo.pageSize,total:t.noticeTotal,"show-less-items":""},on:{change:t.noticePageChange},model:{value:t.noticePageInfo.pageNum,callback:function(e){t.$set(t.noticePageInfo,"pageNum",e)},expression:"noticePageInfo.pageNum"}}):t._e()],1),n("a-card",{staticClass:"mail-card",scopedSlots:t._u([{key:"title",fn:function(){return[n("a-avatar",{attrs:{src:a("f5d5")}}),n("span",[t._v("邮件")])]},proxy:!0}])},[n("div",{staticStyle:{"max-height":"180px","overflow-y":"auto","min-height":"150px"}},[t._l(t.mailList,(function(e){return n("p",{key:e.id,staticClass:"data-list clearfix"},[n("span",{staticClass:"mail-mark",style:"0"===e.readStatus?"color:#F51C1C":"color:#05B525"},[t._v("▪ "+t._s("0"===e.readStatus?"未读":"已读"))]),n("a-icon",{staticStyle:{display:"inline-block","margin-right":"10px"},attrs:{type:"mail",theme:"twoTone","two-tone-color":"#377FFC"}}),n("a",{on:{click:function(a){return t.getMailDetail(e)}}},[t._v(t._s(t._f("ellipsis")(e.title,"mail")))]),n("span",{staticClass:"details"},[n("a-icon",{attrs:{type:"user"}}),n("span",[t._v(t._s(e.sendBy))]),n("span",[t._v(t._s(t.moment(e.sendTime).format("MM.DD HH:mm")))])],1)],1)})),0===t.mailList.length?n("a-empty",{staticStyle:{margin:"0"},attrs:{image:t.simpleImage}}):t._e()],2),0!==t.mailList.length?n("a-pagination",{attrs:{pageSize:t.mailsPageInfo.pageSize,total:t.mailsTotal,"show-less-items":""},on:{change:t.mailsPageChange},model:{value:t.mailsPageInfo.pageNum,callback:function(e){t.$set(t.mailsPageInfo,"pageNum",e)},expression:"mailsPageInfo.pageNum"}}):t._e()],1),n("a-card",{scopedSlots:t._u([{key:"title",fn:function(){return[n("a-avatar",{attrs:{src:a("7124")}}),n("span",[t._v("服务")])]},proxy:!0}])},[n("div",{staticClass:"members"},[n("a-row",[n("a-col",{attrs:{md:12,lg:8,xl:8,xxl:8}},[n("a",{on:{click:t.viewVideo}},[n("a-avatar",{attrs:{src:a("8ca3")}}),n("a",{staticClass:"member"},[t._v("视频教程")])],1)]),n("a-col",{attrs:{md:12,lg:8,xl:8,xxl:8}},[n("router-link",{attrs:{target:"_blank",to:{path:"/visualization/visualization-index"}}},[n("a-avatar",{attrs:{src:a("70ed")}}),n("a",{staticClass:"member"},[t._v("数据大屏")])],1)],1),n("a-col",{attrs:{md:12,lg:8,xl:8,xxl:8}},[n("a",{on:{click:function(e){return t.handleDialog("")}}},[n("a-avatar",{attrs:{src:a("e378")}}),n("a",{staticClass:"member"},[t._v("问题查询")])],1)]),n("a-col",{attrs:{md:12,lg:8,xl:8,xxl:8}},[n("a-popover",{model:{value:t.visiblePopover,callback:function(e){t.visiblePopover=e},expression:"visiblePopover"}},[n("template",{slot:"content"},[n("div",{staticClass:"instrction"},[n("div",[n("a-spin",{attrs:{size:"small",spinning:t.viewInstrctionLoading}},[n("span",{staticClass:"instrctionConten",on:{click:t.viewInstrction}},[t._v("预览使用说明")])])],1),n("div",{staticStyle:{"text-align":"center"}},[n("a-spin",{attrs:{size:"small",spinning:t.downloadInstrctionLoading}},[n("a",{on:{click:t.downloadInstrction}},[t._v("下载")])])],1)])]),n("a",[n("a-avatar",{attrs:{src:a("1c18")}}),n("a",{staticClass:"member"},[t._v("使用说明")])],1)],2)],1),n("a-col",{directives:[{name:"action",rawName:"v-action:homepage_uploadDescription",arg:"homepage_uploadDescription"}],attrs:{md:12,lg:8,xl:8,xxl:8}},[n("a",{on:{click:t.uploadDescription}},[n("a-avatar",{attrs:{src:a("7d16")}}),n("a",{staticClass:"member"},[t._v("上传使用说明")])],1)])],1)],1)])],1)],1)]),n("a-modal",{attrs:{title:"上传使用说明",width:"600px","confirm-loading":t.confirmLoading,visible:t.uploadVisible,destroyOnClose:"",maskClosable:!1},on:{ok:t.handleModalSubmit,cancel:t.handleModalCancel}},[n("a-spin",{attrs:{spinning:t.confirmLoading}},[n("a-form-model",{ref:"uploadForm",attrs:{model:t.docData,"label-col":{span:6},"wrapper-col":{span:18}}},[n("a-row",{attrs:{gutter:12}},[n("a-col",{attrs:{span:24}},[n("a-form-model-item",{attrs:{label:"文档上传:",prop:"annexName","label-col":{span:4},"wrapper-col":{span:20},rules:[{required:!0,message:"请上传文件",trigger:"blur"}]}},[n("a-upload",{attrs:{accept:t.updateAccept,showUploadList:!1,multiple:!1,"before-upload":t.onBeforeUpload}},[t.docData.annexName?n("div",{staticClass:"update-list"},[n("a",{staticStyle:{cursor:"pointer"}},[t._v(t._s(t.docData.annexName))]),n("a-icon",{staticClass:"update-list-delete",attrs:{type:"delete"},on:{click:t.deleteUpload}})],1):n("div",[n("a-button",{attrs:{icon:"upload"}},[t._v("上传文档")]),n("span",{staticStyle:{"margin-left":"10px",color:"#1890FF"},on:{click:function(t){t.stopPropagation()}}},[t._v(t._s(t.uploadTips))])],1)])],1)],1)],1)],1)],1)],1),n("mail-details",{ref:"mailDetail"}),n("notice-details",{ref:"noticeDetail"}),n("dialogModel",{ref:"dialog"}),n("document-modal",{ref:"document"}),n("addMenu",{ref:"addMenu",attrs:{commonMenulist:t.commonMenulist,flattenMenulist:t.flattenMenulist},on:{addMenuOk:t.addMenuOk}}),n("progressCheck",{ref:"progressCheckRef",attrs:{dataList:[],module:t.module,stage:t.stage,transformStage:t.transformStage,hideworkflow:!0}})],1)},o=[],r=(a("99af"),a("4de4"),a("4160"),a("c975"),a("fb6a"),a("45fc"),a("b0c0"),a("d3b7"),a("4d63"),a("ac1f"),a("25f0"),a("3ca3"),a("5319"),a("159b"),a("ddb0"),a("2b3d"),a("06f4"),a("fc25")),l=a("5530"),c=(a("96cf"),a("1da1")),d=a("2b0e"),u=a("2af9"),p=a("8593"),m=a("0644"),f=a.n(m),h=a("c1df"),g=a.n(h),x=a("f7b2"),y=a("6797"),b=a("6c3b"),I=a("ca00"),w=a("de1b"),v=a("1fd5"),S=a("4b90"),k=a("e9cb"),C=a("4594"),_=a("2ef0"),N=a("2f62"),O=a("75bd"),M=a("2373"),D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"scroll-container"},[a("div",{ref:"scrollContainer",staticClass:"scroll-text",class:{paused:t.isPaused},style:{animationDuration:t.duration},on:{click:t.toggleScroll}},[a("a-alert",{staticClass:"alertWp",attrs:{type:"warning","show-icon":"",message:t.text}})],1)])},T=[],P={name:"Roll",data:function(){return{text:"迁移达梦数据库，可能会引起部分功能异常，很抱歉给您带来不便。如发现异常，请拨打010-51871297",duration:"0s",isPaused:!1}},mounted:function(){var t=this;this.$nextTick((function(){var e=t.$refs.scrollContainer.scrollWidth,a=e/30;a<1.5&&(a=1.5),t.duration=a+"s"}))},methods:{toggleScroll:function(){this.isPaused=!this.isPaused}}},j=P,$=(a("7677"),a("2877")),L=Object($["a"])(j,D,T,!1,null,"d046e320",null),R=L.exports,A=a("63e3"),E="rsd.china-railway.com.cn",F={components:{STable:u["c"],noticeDetails:y["a"],mailDetails:x["a"],APagination:w["a"],ASkeleton:v["a"],dialogModel:b["a"],addMenu:k["a"],DocumentModal:C["a"],progressCheck:M["a"],roll:R},data:function(){return{loading:!0,userInfo:{},nowWeek:"",nowDate:"2020.6.24",nowTime:"",nowTimeSeconds:0,noticeList:[],mailList:[],rollList:[],columns:[[{title:"待办类型",width:140,fixed:"left",align:"left",dataIndex:"module"},{title:"操作",width:120,fixed:"left",align:"left",scopedSlots:{customRender:"action"}},{title:"课题名称",width:230,fixed:"left",align:"left",dataIndex:"projectName",scopedSlots:{customRender:"name"},sorter:!0},{title:"状态",width:140,align:"left",dataIndex:"stateName",scopedSlots:{customRender:"stateName"},sorter:!0,ellipsis:!0},{title:"计划类型",width:180,align:"left",dataIndex:"planTypeName",sorter:!0,ellipsis:!0},{title:"课题类别",width:180,align:"left",dataIndex:"itemTypeName",sorter:!0,ellipsis:!0},{title:"合同(任务书)编号",width:140,align:"left",dataIndex:"itemNo",sorter:!0},{title:"承担单位",width:180,align:"left",dataIndex:"undertakeUnitName",sorter:!0,ellipsis:!0},{title:"负责人",width:120,align:"left",dataIndex:"applyUserName",sorter:!0}],[{title:"待办类型",width:140,fixed:"left",align:"left",dataIndex:"module"},{title:"操作",width:120,fixed:"left",align:"left",scopedSlots:{customRender:"action"}},{title:"课题名称",width:230,fixed:"left",align:"left",dataIndex:"projectName",scopedSlots:{customRender:"name"},sorter:!0},{title:"状态",width:140,align:"left",dataIndex:"stateName",scopedSlots:{customRender:"stateName"},sorter:!0,ellipsis:!0},{title:"计划类型",width:180,align:"left",dataIndex:"planTypeName",sorter:!0,ellipsis:!0},{title:"课题类别",width:180,align:"left",dataIndex:"itemTypeName",sorter:!0,ellipsis:!0},{title:"课题编号",width:140,align:"left",dataIndex:"itemNo",sorter:!0},{title:"申报单位",width:180,align:"left",dataIndex:"undertakeUnitName",sorter:!0,ellipsis:!0},{title:"负责人",width:120,align:"left",dataIndex:"applyUserName",sorter:!0,ellipsis:!0},{title:"总经费",width:120,align:"left",dataIndex:"approveFunds",sorter:!0},{title:"申报经费",width:120,align:"left",dataIndex:"applicationFunds",sorter:!0}],[{title:"待办类型",width:140,fixed:"left",align:"left",dataIndex:"module"},{title:"操作",width:120,fixed:"left",align:"left",scopedSlots:{customRender:"action"}},{title:"课题名称",width:230,fixed:"left",align:"left",dataIndex:"projectName",scopedSlots:{customRender:"name"},sorter:!0},{title:"状态",width:140,align:"left",dataIndex:"stateName",scopedSlots:{customRender:"stateName"},sorter:!0,ellipsis:!0},{title:"计划类型",width:180,align:"left",dataIndex:"planTypeName",sorter:!0,ellipsis:!0},{title:"课题类别",width:180,align:"left",dataIndex:"itemTypeName",sorter:!0,ellipsis:!0},{title:"合同(任务书)编号",width:140,align:"left",dataIndex:"itemNo",sorter:!0},{title:"承担单位",width:180,align:"left",dataIndex:"undertakeUnitName",sorter:!0,ellipsis:!0},{title:"负责人",width:120,align:"left",dataIndex:"applyUserName",sorter:!0},{title:"批准经费",width:120,align:"left",dataIndex:"approveFunds",sorter:!0}],[{title:"待办类型",width:140,fixed:"left",align:"left",dataIndex:"module"},{title:"操作",width:120,fixed:"left",align:"left",scopedSlots:{customRender:"action"}},{title:"课题名称",width:230,fixed:"left",align:"left",dataIndex:"projectName",scopedSlots:{customRender:"name"},sorter:!0},{title:"状态",width:140,align:"left",dataIndex:"stateName",scopedSlots:{customRender:"stateName"},sorter:!0,ellipsis:!0},{title:"计划类型",width:180,align:"left",dataIndex:"planTypeName",sorter:!0,ellipsis:!0},{title:"课题类别",width:180,align:"left",dataIndex:"itemTypeName",sorter:!0,ellipsis:!0},{title:"合同(任务书)编号",width:140,align:"left",dataIndex:"itemNo",sorter:!0},{title:"承担单位",width:180,align:"left",dataIndex:"undertakeUnitName",sorter:!0,ellipsis:!0},{title:"负责人",width:120,align:"left",dataIndex:"applyUserName",sorter:!0},{title:"变更类型",width:120,align:"left",dataIndex:"alterType",sorter:!0,customRender:function(t,e){var a="";return e.alterType&&e.alterType.length&&(a=e.alterType.replace(RegExp(",","g"),"、").replace("researcher","科研人员变更").replace("target","调整目标").replace("additionalPeriod","延长期限").replace("unitAndFund","参研单位及经费").replace("others","其他").replace("endContract","终止合同(任务书)")),a}}],[{title:"待办类型",width:140,fixed:"left",align:"left",dataIndex:"module"},{title:"操作",width:120,fixed:"left",align:"left",scopedSlots:{customRender:"action"}},{title:"课题名称",width:230,fixed:"left",align:"left",dataIndex:"projectName",scopedSlots:{customRender:"name"},sorter:!0},{title:"状态",width:140,align:"left",dataIndex:"stateName",scopedSlots:{customRender:"stateName"},sorter:!0,ellipsis:!0},{title:"计划类型",width:180,align:"left",dataIndex:"planTypeName",sorter:!0,ellipsis:!0},{title:"课题类别",width:180,align:"left",dataIndex:"itemTypeName",sorter:!0,ellipsis:!0},{title:"合同(任务书)编号",width:140,align:"left",dataIndex:"itemNo",sorter:!0},{title:"执行区段",width:160,align:"left",dataIndex:"processSector",sorter:!0},{title:"承担单位",width:180,align:"left",dataIndex:"undertakeUnitName",sorter:!0,ellipsis:!0},{title:"负责人",width:120,align:"left",dataIndex:"applyUserName",sorter:!0}],[{title:"待办类型",width:140,fixed:"left",align:"left",dataIndex:"module"},{title:"操作",width:120,fixed:"left",align:"left",scopedSlots:{customRender:"action"}},{title:"课题名称",width:230,fixed:"left",align:"left",dataIndex:"projectName",scopedSlots:{customRender:"name"},sorter:!0},{title:"状态",width:140,align:"left",dataIndex:"stateName",scopedSlots:{customRender:"stateName"},sorter:!0,ellipsis:!0},{title:"计划类型",width:180,align:"left",dataIndex:"planTypeName",sorter:!0,ellipsis:!0},{title:"课题类别",width:180,align:"left",dataIndex:"itemTypeName",sorter:!0,ellipsis:!0},{title:"合同(任务书)编号",width:140,align:"left",dataIndex:"itemNo",sorter:!0},{title:"承担单位",width:180,align:"left",dataIndex:"undertakeUnitName",sorter:!0,ellipsis:!0},{title:"负责人",width:120,align:"left",dataIndex:"applyUserName",sorter:!0}]],noticePageInfo:{pageNum:1,pageSize:5},noticeTotal:0,mailsPageInfo:{pageNum:1,pageSize:3},mailsTotal:0,tabsData:[],projectsList:[],barSourceData:[],thisYearData:[],modlueWriteArr:["立项填写","合同(任务书)填写","合同填写","变更填写","执行填写","验收填写"],moduleParse:{"课题":"apply","立项":"apply","合同":"contract","变更":"alter","实施":"process","执行":"process","验收":"acceptance"},questions:["申报课题常见问题","立项审核问题查询","合同(任务书)填写、提报规范","审核流程查询规范"],hostType:"",commonMenulist:[],flattenMenulist:[],notShowMenulist:["首页","系统菜单a","大屏展示","科研管理审核","其他","投票管理","科技人员通讯录","通讯录"],setIntervalTime:null,commonLoading:!1,collapsed:!1,confirmLoading:!1,uploadVisible:!1,docData:{},updateAccept:".pdf",pdfFile:null,uploadTips:"",viewInstrctionLoading:!1,downloadInstrctionLoading:!1,visiblePopover:!1,transformStage:"",stage:"",module:"",confirmArr:["立项","签订","归档","确认"]}},destroyed:function(){clearInterval(this.setIntervalTime)},methods:{moment:g.a,callback:function(t){},getNotice:function(){var t=this,e={pageNum:this.noticePageInfo.pageNum,pageSize:this.noticePageInfo.pageSize,domain:d["a"].ls.get("USER_INFO").subSystemId};Object(p["K"])(e).then((function(e){if(e&&e.success){var a=f()(e.data);t.noticeList=a.records,t.noticeTotal=a.total}else t.$notification.error({message:e.msg,duration:4})}))},getMails:function(){var t=this,e=this.mailsPageInfo;Object(p["J"])(e).then((function(e){if(e&&e.success){var a=f()(e.data);t.mailList=a.records,t.mailsTotal=a.total}else t.$notification.error({message:e.msg,duration:4})}))},getTodoData:function(){var t=this,e=this;Object(p["I"])(E).then((function(a){if(a&&a.success){t.nowTimeSeconds=a.data.date,t.getDateTime();var n=f()(a.data),i=(new Date).getFullYear();t.barSourceData=n.projectMap,t.projectsList=n.projectMap.projects,t.thisYearData=t.projectsList.filter((function(t){return t.year===i})),"0"===t.userInfo.type&&t.drawChart(),e.tabsData.push({name:"待办",data:n.toDoTaskMap.toDoList,count:n.toDoTaskMap.toDoCount}),e.tabsData.push({name:"立项",data:n.applyMap.applyTotalResult,count:n.applyMap.applyTotalCount}),e.tabsData.push({name:"合同(任务书)",data:n.contractMap.contractTotalResult,count:n.contractMap.contractTotalCount}),e.tabsData.push({name:"变更",data:n.alterMap.alterTotalResult,count:n.alterMap.alterTotalCount}),e.tabsData.push({name:"执行",data:n.processMap.processTotalResult,count:n.processMap.processTotalCount}),e.tabsData.push({name:"验收",data:n.acceptanceMap.acceptanceTotalResult,count:n.acceptanceMap.acceptanceTotalCount})}else t.$notification.error({message:a.msg,duration:4})}))},getData:function(){this.userInfo=d["a"].ls.get("USER_INFO"),this.getNotice(),this.getMails(),this.getTodoData()},moreNotice:function(){this.$router.push("/base/noticelist")},getMailDetail:function(t){this.$refs.mailDetail.show(t.id)},getNoticeDetails:function(t){this.$refs.noticeDetail.show(t.id)},noticePageChange:function(t,e){this.noticePageInfo.pageNum=t,this.getNotice()},mailsPageChange:function(t,e){this.mailsPageInfo.pageNum=t,this.getMails()},drawChart:function(){var t=this,e=this,a=new Promise((function(t){t()}));a.then((function(){var a=A.init(document.getElementById("barChart")),n=A.init(document.getElementById("pieChart")),i=t.thisYearData.length,s=t.thisYearData.filter((function(t){return"0"===t.bear})).length,o=t.thisYearData.filter((function(t){return"1"===t.bear})).length,r={legend:{data:["主持课题","参研课题"],left:"70%",top:12,itemGap:2},tooltip:{trigger:"item"},title:{text:"历史课题统计",left:"center",top:4,textStyle:{fontSize:14}},color:["#3c90f7","#ff9b85"],xAxis:{type:"category",data:e.barSourceData.years,axisLine:{lineStyle:{color:"#A4A4A4"}},axisLabel:{textStyle:{color:"#000000"}}},yAxis:{type:"value",minInterval:1,splitLine:{lineStyle:{type:"dashed"}}},series:[{name:"主持课题",type:"bar",barGap:0,barWidth:"30%",data:e.barSourceData.hosts},{name:"参研课题",type:"bar",barWidth:"30%",data:e.barSourceData.joins}]},l={color:["#3c90f7","#55bfc0"],tooltip:{trigger:"item",formatter:" {b}: {c} ({d}%)"},graphic:[{type:"text",top:"50%",left:"center",style:{text:i,fontSize:12,textAlign:"center",fill:"#13a7d1"}},{type:"text",top:"44%",left:"center",style:{text:"本年度课题总数",fill:"#999",fontSize:12}}],series:[{name:"",type:"pie",radius:["40%","60%"],label:{rich:{b:{fontSize:"0.22rem cursive",color:"#676767"},c:{fontSize:"0.22rem cursive",color:"#30B6A2"}}},data:[{value:s,name:"参研课题"},{value:o,name:"主持课题"}]}]};a.setOption(r),n.setOption(l)}))},actionName:function(t){var e="审核";if("立项确认"==t.module||"变更确认"==t.module||"验收确认"==t.module||t.module.indexOf("签订")>-1||this.stateNameIsConfirm(t))return e="确认",e;var a=this.modlueWriteArr.some((function(e){return e===t.module}));return a&&(e="编辑"),e},stateNameIsConfirm:function(t){var e=this.confirmArr.some((function(e){return t.stateName.indexOf(e)>-1}));return e},edit:function(t,e){switch(t.module){case"立项填写":this.$router.push({path:"/apply/applicant",query:{configId:t.configId,applyId:t.id,type:e?"check":"edit",subSystemId:t.subSystemId}});break;case"立项上报":this.$router.push({path:"/apply/manager",query:{index:1,applyId:t.id,type:e?"check":"edit",subSystemId:t.subSystemId}});break;case"立项形审":this.$router.push({path:"/apply/formal-review",query:{index:1,applyId:t.id,subSystemId:t.subSystemId}});break;case"立项审核":if(this.isWorkflow.applyState)this.stateNameIsConfirm(t)?this.$router.push({path:"/apply/pro-manager"}):this.$router.push({path:"/apply/pro-manager",query:{index:1,applyId:t.id,duplicateId:t.duplicateId,type:e?"check":"edit",subSystemId:t.subSystemId}});else{var a=!0;this.isWorkflow&&!this.isWorkflow.applyState&&t.allowEdit&&"true"===t.allowEdit&&(a=!1),this.$router.push({path:"/apply/formal-review",query:{index:1,applyId:t.id,subSystemId:t.subSystemId,readOnly:a}})}break;case"立项确认":this.$router.push({path:"/apply/pro-manager"});break;case"合同(任务书)填写":this.handleContract("/contract/contract-template",t,{formStatus:"write",auditStatus:!1,readOnly:e});break;case"合同(任务书)上报":this.handleContract("/contract/contract-template",t,{formStatus:"report",auditStatus:!1,readOnly:e});break;case"合同(任务书)形审":this.handleContract("/contract/contract-template",t,{formStatus:"shape",auditStatus:!0,readOnly:e});break;case"合同(任务书)审核":this.isWorkflow.contractState?this.stateNameIsConfirm(t)?this.$router.push({path:"contract/contract-check"}):this.handleContract("/contract/contract-template",t,{formStatus:"check",auditStatus:!1,readOnly:e}):this.handleContract("/contract/contract-template",t,{formStatus:"shape",auditStatus:!0,readOnly:e});break;case"合同(任务书)签订":this.$router.push({path:"contract/contract-check"});break;case"变更填写":this.handleAlter(t,"",e);break;case"变更上报":this.handleAlter(t,"appear",e);break;case"变更形审":this.handleAlter(t,"check",e);break;case"变更审核":this.stateNameIsConfirm(t)?this.$router.push({path:"alteration/alteration-audit"}):this.handleAlter(t,"audit",e);break;case"变更确认":this.$router.push({path:"alteration/alteration-audit"});break;case"执行填写":this.handleImplement(t,{formStatus:"fill",modelStatus:"false",type:e});break;case"执行上报":this.handleImplement(t,{formStatus:"report",modelStatus:"false",type:e});break;case"执行形审":this.handleImplement(t,{formStatus:"shape",modelStatus:"true",type:e});break;case"执行审核":this.handleImplement(t,{formStatus:"audit",modelStatus:"true",type:e});break;case"执行汇总":this.handleImplement(t,{formStatus:"audit",modelStatus:"true",type:e},"执行汇总");break;case"验收填写":this.$router.push({path:"/acceptance/applicant",query:{configId:t.configId,acceptanceId:t.id,type:e?"check":"edit",subSystemId:t.subSystemId,formStatus:"write"}});break;case"验收上报":this.$router.push({path:"/acceptance/manager",query:{index:1,acceptanceId:t.id,configId:t.configId,type:e?"check":"edit",subSystemId:t.subSystemId,formStatus:"report"}});break;case"验收形审":this.$router.push({path:"/acceptance/formal",query:{index:1,acceptanceId:t.id,configId:t.configId,subSystemId:t.subSystemId,formStatus:"formal"}});break;case"验收审核":if(this.isWorkflow.acceptanceState)this.stateNameIsConfirm(t)?this.$router.push({path:"acceptance/pro-manager"}):this.$router.push({path:"/acceptance/pro-manager",query:{index:1,acceptanceId:t.id,configId:t.configId,type:e?"check":"edit",subSystemId:t.subSystemId,formStatus:"approval"}});else{var n=!0;this.isWorkflow&&!this.isWorkflow.acceptanceState&&t.allowEdit&&"true"===t.allowEdit&&(n=!1),this.$router.push({path:"/acceptance/formal",query:{index:1,acceptanceId:t.id,configId:t.configId,subSystemId:t.subSystemId,readOnly:n,formStatus:"formal"}})}break;case"验收确认":this.$router.push({path:"acceptance/pro-manager"});break}},handleContract:function(t,e,a){var n={contractId:e.id,send:a.readOnly?"send":"",formStatus:a.formStatus,auditStatus:a.auditStatus,subSystemId:e.subSystemId},i={};this.isWorkflow.contractState||"shape"!==a.formStatus||(i.formStatus=e.allowEdit&&"true"===e.allowEdit?"check":"shape"),"shape"===a.formStatus?i.from="contract-shape":"check"===a.formStatus&&(i.from="contract-check"),Object.assign(n,i),this.$router.push({path:t,query:n})},handleAlter:function(t,e,a,n){if(this.isWorkflow.alterState)window.open("alteration-write?id="+t.id+(e?"&auditStage="+e:"")+(a?"&type=check":"")+(t.subSystemId?"&subSystemId="+t.subSystemId:""),"_blank");else{n||"audit"!==e||(e="check");var i="";this.isWorkflow&&!this.isWorkflow.alterState&&"check"===e&&(i=t.allowEdit&&"true"===t.allowEdit?"":"check"),window.open("alteration-write?id="+t.id+(e?"&auditStage="+e:"")+(a?"&type=check":"")+(t.subSystemId?"&subSystemId="+t.subSystemId:"")+(i?"&type="+i:""),"_blank")}},handleImplement:function(t,e,a){if(this.isWorkflow.processState)this.$router.push({path:"implement/implement-template",query:{id:t.id,formStatus:e.formStatus,modelStatus:e.modelStatus,type:e.type?"info":"edit",subSystemId:t.subSystemId}});else{a||"audit"!==e.formStatus||(e.formStatus="shape");var n={id:t.id,formStatus:e.formStatus,modelStatus:e.modelStatus,type:e.type?"info":"edit",subSystemId:t.subSystemId},i={};this.isWorkflow.processState||"shape"!==e.formStatus||(i.modelStatus=t.allowEdit&&"true"===t.allowEdit?"false":"true"),"shape"===e.formStatus&&(i.from="shape"),Object.assign(n,i),this.$router.push({path:"implement/implement-template",query:n})}},handleAcceptance:function(){},nameClick:function(t){},showProgress:function(t){var e=this,a="1"===t.formalCheckState?1:0;this.stage=t.stage,this.transformStage=t.status;var n=t.module.slice(0,2);this.module=this.moduleParse[n]||"",this.$nextTick((function(){e.$refs.progressCheckRef.show(t.id,a)}))},handleDialog:function(t){this.$refs.dialog.show(t)},viewInstrction:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.viewInstrctionLoading=!0,e.next=4,Object(p["L"])();case 4:a=e.sent,a.success?(window.open(Object(O["a"])({id:a.data.id,name:a.data.annexName,size:a.data.annexSize})),t.visiblePopover=!1):t.$notification.warn({message:"提示",description:a.msg}),t.viewInstrctionLoading=!1,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),t.viewInstrctionLoading=!1;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},downloadInstrction:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.downloadInstrctionLoading=!0,e.next=4,Object(p["Ab"])();case 4:a=e.sent,Object.prototype.hasOwnProperty.call(a,"success")||(n=a.filename,Object(I["b"])(a,n)),t.downloadInstrctionLoading=!1,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),t.downloadInstrctionLoading=!1;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},handleIntroduction:function(){return Object(c["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(p["Ab"])();case 3:e=t.sent,a=new Blob([e],{type:"application/pdf;charser=utf-8"}),Object.prototype.hasOwnProperty.call(e,"success")||open(URL.createObjectURL(a),"_blank"),t.next=10;break;case 8:t.prev=8,t.t0=t["catch"](0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})))()},viewVideo:function(){this.$emit("change-comp",{index:1,type:"video"})},myexplorer:function(){var t=window.navigator.userAgent,e="";if(t.indexOf("QQBrowser")>=0||t.indexOf("QQ")>=0)e="腾讯QQ";else if(t.indexOf("Safari")>=0&&t.indexOf("MetaSr")>=0)e="搜狗";else if(window.ActiveXObject||"ActiveXObject"in window)if(window.XMLHttpRequest)if(window.XMLHttpRequest&&!document.documentMode)e="IE7";else if(-[1]||!document.documentMode||"msDoNotTrack"in window.navigator){var a=function(){return void 0===this}();e=a?window.attachEvent?"IE10":"IE11":"IE9"}else e="IE8";else e="IE6";else e=t.indexOf("LBBROWSER")>=0?"猎豹":t.indexOf("Firefox")>=0?"火狐":t.indexOf("Maxthon")>=0?"遨游":t.indexOf("Chrome")>=0?"谷歌":t.indexOf("Opera")>=0?"欧朋":t.indexOf("TheWorld")>=0?"世界之窗":t.indexOf("Safari")>=0?"苹果":"其他";return e},getHomeList:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.commonLoading=!0,e.next=4,Object(p["G"])();case 4:a=e.sent,a&&a.success?(t.flattenMenulist=a.data.homeMenuMap.availableMenu,n=Object(_["cloneDeep"])(a.data.homeMenuMap.homeMenu),n.forEach((function(t){t.url=t.menuUrl,t.icon=t.menuIcon,t.name=t.menuName,delete t.menuUrl,delete t.menuIcon,delete t.menuName})),t.commonMenulist=n,t.commonMenulist.push({icon:"plus",isShow:"1",name:"addMenu",id:"",url:"11"})):(t.$notification.warning({message:"提示",description:"暂无访问权限"}),t.$router.push({path:"/403"})),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$notification["error"]({message:"错误",description:((e.t0.response||{}).data||{}).message||"渲染失败",duration:4});case 11:return e.prev=11,t.commonLoading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))()},flattenMenulistFn:function(t){for(var e=[],a=0;a<t.length;a++)this.notShowMenulist.indexOf(t[a].name)>-1||"0"==t[a].isShow||(Array.isArray(t[a].subMenus)&&t[a].subMenus.length>0?e=e.concat(this.flattenMenulistFn(t[a].subMenus)):e.push(t[a]));return e},toMenu:function(t){"addMenu"==t.name?this.$refs.addMenu.show():this.$router.push({path:t.url})},initTime:function(){var t=new Date(this.nowTimeSeconds),e=t.getDay(this.nowTimeSeconds),a="星期"+"日一二三四五六".charAt(e);this.nowWeek=a,this.nowDate=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()},clock:function(){var t=new Date(this.nowTimeSeconds),e=t.getMinutes();e<10&&(e="0"+e);var a=t.getSeconds();a<10&&(a="0"+a);var n=t.getHours()+":"+e+":"+a;this.nowTime=n},getDateTime:function(){var t=this;this.initTime(),this.clock(),this.setIntervalTime=setInterval((function(){t.nowTimeSeconds=t.nowTimeSeconds+1e3,t.initTime(),t.clock()}),1e3)},addMenuOk:function(){this.getHomeList()},toggle:function(){this.collapsed=!this.collapsed},toFolder:function(){var t=this.userInfo.realName;window.open("".concat(S["d"][S["c"]],"?filePath=").concat(S["b"],"&fileTYpe=0&userName=").concat(t,"&permission=read"),"_blank")},uploadDescription:function(){this.uploadTips="只能上传".concat(this.updateAccept,"格式文件"),this.uploadVisible=!0},handleModalSubmit:function(){var t=this;this.$refs.uploadForm.validate(function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(a){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a){e.next=19;break}return n=new FormData,t.pdfFile&&n.append("multipartFile",t.pdfFile),e.prev=3,t.confirmLoading=!0,e.next=7,Object(p["zb"])(n);case 7:i=e.sent,i&&i.success?(t.$notification.success({message:"保存成功",description:i.msg}),t.handleModalCancel()):t.$notification.error({message:"保存失败",description:i.msg}),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](3),t.$notification.error({message:"保存失败",description:e.t0.message});case 14:return e.prev=14,t.confirmLoading=!1,e.finish(14);case 17:e.next=21;break;case 19:t.$message.warning("页面验证失败，请检查填写是否正确"),t.confirmLoading=!1;case 21:case"end":return e.stop()}}),e,null,[[3,11,14,17]])})));return function(t){return e.apply(this,arguments)}}())},handleModalCancel:function(){this.uploadVisible=!1,this.deleteUpload()},onBeforeUpload:function(t){return!!Object(I["a"])(t,this.updateAccept)&&(this.pdfFile=t,this.docData=Object.assign({},this.docData,{annexName:t.name}),!1)},deleteUpload:function(){window.event.stopPropagation(),this.pdfFile={},this.confirmLoading=!1,this.$set(this.docData,"annexName",null)}},computed:Object(l["a"])({},Object(N["c"])(["isWorkflow"]),{timeFix:I["g"]}),filters:{ellipsis:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"mail";if(!t)return"";var a=13;return"notice"===e&&(a=20),t.length>a?t.slice(0,a)+"...":t}},created:function(){this.getHomeList()},mounted:function(){this.getData();var t=this.myexplorer();"谷歌"!==t&&this.$notification.warning({message:"提示",description:"为了获得最佳用户体验，建议使用Google Chrome浏览器。",duration:4})},beforeCreate:function(){this.simpleImage=r["a"].PRESENTED_IMAGE_SIMPLE}},W=F,U=(a("c4301"),Object($["a"])(W,s,o,!1,null,"11ef48f9",null)),z=U.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("div",{staticClass:"player"},[a("video",{staticStyle:{width:"900px",height:"600px"},attrs:{src:t.sourceUrl,controls:"controls",preload:"preload"}})]),a("div",{staticClass:"menu"},[a("a-menu",{attrs:{mode:"inline","default-selected-keys":["ouline"],"open-keys":t.openKeys},on:{openChange:t.onOpenChange}},t._l(t.menu,(function(e){return a("a-sub-menu",{key:e.module},[a("span",{attrs:{slot:"title"},slot:"title"},[a("span",[t._v(t._s(e.name))])]),t._l(e.submenu,(function(e){return a("a-menu-item",{key:e.dataIndex,on:{click:function(a){return t.menuClick(e.dataIndex)}}},[a("a-icon",{attrs:{type:"play-circle"}}),t._v(t._s(e.name)+" ")],1)}))],2)})),1)],1)])},B=[],H=(a("7db0"),window.location.origin),Y={name:"VideoPage",data:function(){return{menu:[{module:"ouline",name:"概述",submenu:[{dataIndex:"ouline",name:"系统概述"}]},{module:"base",name:"基础模块",submenu:[{dataIndex:"baseOutline",name:"基础配置模块概述"},{dataIndex:"baseDept",name:"组织机构管理"},{dataIndex:"baseUser",name:"用户管理"},{dataIndex:"baseDictionary",name:"字典管理"},{dataIndex:"basePlan",name:"科研计划配置"},{dataIndex:"baseRole",name:"角色配置"},{dataIndex:"baseOther",name:"其他"}]},{module:"apply",name:"立项模块",submenu:[{dataIndex:"applyOutline",name:"立项模块概述"},{dataIndex:"applyConfig",name:"立项配置"},{dataIndex:"applyList",name:"课题列表"},{dataIndex:"applyManager",name:"课题审核"},{dataIndex:"applyFormal",name:"立项形审"},{dataIndex:"applyPromanager",name:"立项审核"}]},{module:"contract",name:"合同(任务书)模块",submenu:[{dataIndex:"contractOutline",name:"合同(任务书)模块概述"},{dataIndex:"contractConfig",name:"合同(任务书)配置"},{dataIndex:"contractGenerate",name:"合同(任务书)生成"},{dataIndex:"contractWrite",name:"合同(任务书)填写"},{dataIndex:"contractReport",name:"合同(任务书)上报"},{dataIndex:"contractFormal",name:"合同(任务书)形审"},{dataIndex:"contractDistribute",name:"合同(任务书)分发指派"},{dataIndex:"contractPromanager",name:"合同(任务书)审核"}]},{module:"alter",name:"变更模块",submenu:[{dataIndex:"alterOutline",name:"变更模块概述"},{dataIndex:"alterConfig",name:"变更配置"},{dataIndex:"alterWrite",name:"变更填写"},{dataIndex:"alterReport",name:"变更上报"},{dataIndex:"alterFormal",name:"变更形审"},{dataIndex:"alterPromanager",name:"变更审核"}]},{module:"implement",name:"实施模块",submenu:[{dataIndex:"implementOutline",name:"实施模块概述"},{dataIndex:"implementConfig",name:"实施配置"},{dataIndex:"implementWrite",name:"实施填报"},{dataIndex:"implementReport",name:"实施上报"},{dataIndex:"implementFormal",name:"实施形审"},{dataIndex:"implementPromanager",name:"实施审核"}]},{module:"accept",name:"验收模块",submenu:[{dataIndex:"acceptOutline",name:"验收模块概述"},{dataIndex:"acceptConfig",name:"验收配置"},{dataIndex:"acceptGenerate",name:"验收生成"},{dataIndex:"acceptList",name:"验收列表"},{dataIndex:"acceptManager",name:"验收上报"},{dataIndex:"acceptFormal",name:"验收形审"},{dataIndex:"acceptPromanager",name:"验收审核"}]},{module:"lzTraining",name:"兰州局科技管理培训",submenu:[{dataIndex:"科技政策",name:"科技政策解读"},{dataIndex:"专利管理",name:"科技创新专利管理"},{dataIndex:"共享平台介绍",name:"共享平台介绍"},{dataIndex:"网络会议会场流程",name:"网络会议会场流程介绍"},{dataIndex:"专家系统",name:"专家系统介绍"}]}],openKeys:["ouline"],rootSubmenuKeys:["ouline","base","apply","contract","alter","implement","accept"],sourceUrl:H+"/video/ouline.mp4"}},mounted:function(){},methods:{onOpenChange:function(t){var e=this,a=t.find((function(t){return-1===e.openKeys.indexOf(t)}));-1===this.rootSubmenuKeys.indexOf(a)?this.openKeys=t:this.openKeys=a?[a]:[]},menuClick:function(t){this.sourceUrl=H+"/video/"+t+".mp4"}}},K=Y,V=(a("805b"),Object($["a"])(K,q,B,!1,null,"abdfd9f8",null)),G=V.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(t.inst.name,t._b({tag:"component",attrs:{"is-audit":t.isAudit},on:{"change-comp":t.handleChangeComp,changeProps:t.changeProps}},"component",t.inst.props,!1))},X=[],J=(a("1276"),{name:"AEmpty",props:{description:"没有找到对应页面"}}),Z={name:"ModuleSwitch",props:{comps:{type:Array,required:!0,default:function(){return[]}}},created:function(){this.reConfigCurrentComp()},data:function(){return{inst:J,activeProps:{readOnly:!0}}},computed:{isAudit:function(){return this.$route.path.split("/")[this.$route.path.split("/").length-1]}},methods:{reConfigCurrentComp:function(){var t=this.$route.query,e=0;t&&Object.hasOwnProperty.call(t,"index")&&(e=parseInt(t.index),isNaN(e)&&(e=0)),t&&Object.hasOwnProperty.call(t,"readOnly")&&(this.activeProps.readOnly=t.readOnly);var a=this.comps[e];this.inst=a?{name:a,props:this.activeProps}:J},handleChangeComp:function(t,e){this.activeProps.readOnly=!0,this.activeProps.nameReadOnly=!1,t&&Object.hasOwnProperty.call(t,"props")&&(this.activeProps=Object(l["a"])({},this.activeProps,{},t.props)),delete t.props;var a=e?"replace":"push";this.$router[a]({query:t})},changeProps:function(t){this.inst.props[t.key]=t.val}},watch:{$route:function(){this.reConfigCurrentComp()}}},tt=Z,et=Object($["a"])(tt,Q,X,!1,null,"46ffc926",null),at=et.exports,nt={name:"Index",components:{ModuleSwitch:at,HomePage:z,VideoPage:G},computed:{items:function(){return[z,G]}}},it=nt,st=Object($["a"])(it,n,i,!1,null,null,null);e["default"]=st.exports},"5d8b":function(t,e,a){t.exports=a.p+"img/man1.b87827bc.png"},7677:function(t,e,a){"use strict";var n=a("2068"),i=a.n(n);i.a},"805b":function(t,e,a){"use strict";var n=a("9808"),i=a.n(n);i.a},8350:function(t,e,a){t.exports=a.p+"img/woman1.6d022538.png"},9808:function(t,e,a){},c4301:function(t,e,a){"use strict";var n=a("f30a"),i=a.n(n);i.a},f30a:function(t,e,a){}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-743a0b4e"],{"0974":function(t,e,r){"use strict";r.d(e,"r",(function(){return l})),r.d(e,"e",(function(){return a})),r.d(e,"d",(function(){return c})),r.d(e,"x",(function(){return p})),r.d(e,"f",(function(){return i})),r.d(e,"g",(function(){return y})),r.d(e,"h",(function(){return d})),r.d(e,"o",(function(){return f})),r.d(e,"n",(function(){return s})),r.d(e,"m",(function(){return b})),r.d(e,"q",(function(){return m})),r.d(e,"p",(function(){return P})),r.d(e,"t",(function(){return I})),r.d(e,"z",(function(){return q})),r.d(e,"j",(function(){return g})),r.d(e,"a",(function(){return h})),r.d(e,"k",(function(){return j})),r.d(e,"i",(function(){return O})),r.d(e,"l",(function(){return w})),r.d(e,"E",(function(){return R})),r.d(e,"b",(function(){return C})),r.d(e,"w",(function(){return A})),r.d(e,"D",(function(){return v})),r.d(e,"B",(function(){return x})),r.d(e,"C",(function(){return L})),r.d(e,"u",(function(){return N})),r.d(e,"v",(function(){return V})),r.d(e,"y",(function(){return T})),r.d(e,"s",(function(){return U})),r.d(e,"c",(function(){return k})),r.d(e,"A",(function(){return S}));r("5530");var n=r("b775"),u="",o={property:{queryPageList:u+"intellectualProperty/queryPageList",queryContractUnit:u+"intellectualProperty/queryContractUnit",queryContractInfo:u+"intellectualProperty/queryContractInfo",queryIntellectualProperty:u+"intellectualProperty/queryIntellectualProperty",queryContractResearch:u+"intellectualProperty/queryContractResearch",queryApplicantInfoPage:u+"intellectualProperty/queryApplicantInfoPage",queryInventorInfoPage:u+"intellectualProperty/queryInventorInfoPage",queryIntellectualView:"intellectualProperty/queryIntellectualView",queryTemplateList:"intellectualProperty/config/queryTemplateList",saveTemplateInfo:"intellectualProperty/config/saveTemplateInfo",queryAppendixInfo:"intellectualProperty/config/queryAppendixInfo",changeWorkState:"intellectualProperty/config/changeWorkState",queryAppendixInfoValue:"intellectualProperty/queryAppendixInfo",insert:"document/insert",queryAppendixValueInfo:"intellectualProperty/queryAppendixValueInfo",updateIntellectualPropertySubmit:"intellectualProperty/updateIntellectualPropertySubmit",updateIntellectualPropertyReport:"intellectualProperty/updateIntellectualPropertyReport",updateIntellectualPropertyAudit:"intellectualProperty/updateIntellectualPropertyAudit",updateIntellectualPropertyConfirm:"intellectualProperty/updateIntellectualPropertyConfirm",queryIntellectualByRegisterNumber:"intellectualProperty/queryIntellectualByRegisterNumber",queryUserRole:"intellectualProperty/queryUserRole",queryrewardPageList:"intellectualPropertyReward/queryPageList",saveRewardInfo:"intellectualPropertyReward/saveRewardInfo",queryRewardInfo:"intellectualPropertyReward/queryRewardInfo",generateProposalNumber:"intellectualProperty/generateProposalNumber",queryAppendixValueInfoFile:"intellectualProperty/queryAppendixValueInfoFile",queryContractNoTree:"intellectualProperWrite/queryContractNoTree",stateReset:"intellectual/examine/stateReset",queryContractByNo:"intellectualProperWrite/queryContractByNo"}};function l(t){return Object(n["b"])({method:"post",url:o.property.queryPageList,params:t})}function a(){return Object(n["b"])({method:"get",url:"contract/getContractList"})}function c(t){return Object(n["b"])({method:"get",url:"contract/getContractBasiccontractInfo",params:{contractId:t}})}function p(t){return Object(n["b"])({method:"post",url:"intellectualProperty/saveIntellectualProperty",params:t})}function i(t){return Object(n["b"])({method:"post",url:"intellectualParticipationUnit/getFromUnitList",params:{declareId:t}})}function y(t){return Object(n["b"])({method:"post",url:"intellectualCertificateFile/getIntellectualCertificateFilePage",params:t})}function d(t){return Object(n["b"])({method:"post",url:"intellectualPropertyInventorInfo/getIntellectualPropertyInventorInfoList",params:t})}function f(t){return Object(n["b"])({url:o.property.queryContractUnit,method:"get",params:t})}function s(t){return Object(n["b"])({url:o.property.queryContractResearch,method:"get",params:t})}function b(t){return Object(n["b"])({url:o.property.queryApplicantInfoPage,method:"get",params:t})}function m(t){return Object(n["b"])({url:o.property.queryInventorInfoPage,method:"get",params:t})}function P(t){return Object(n["b"])({url:o.property.queryIntellectualView,method:"get",params:t})}function I(t,e,r){return Object(n["b"])({url:o.property.queryTemplateList+"?pageNum="+e+"&pageSize="+r,method:"post",data:t})}function q(t){return Object(n["b"])({url:o.property.saveTemplateInfo,method:"post",data:t})}function g(t){return Object(n["b"])({url:o.property.queryAppendixInfo,method:"get",params:t})}function h(t){return Object(n["b"])({url:o.property.changeWorkState,method:"get",params:t})}function j(t){return Object(n["b"])({url:o.property.queryAppendixInfoValue,method:"get",params:t})}function O(t){return Object(n["b"])({url:o.property.insert,method:"post",data:t})}function w(t){return Object(n["b"])({url:o.property.queryAppendixValueInfo,method:"get",params:t})}function R(t){return Object(n["b"])({url:"intellectualProperty/updateIntellectualPropertySubmit",method:"post",data:t})}function C(t){return Object(n["b"])({url:"intellectualProperty/deleteIntellectualProperty",method:"post",params:{id:t}})}function A(t){return Object(n["b"])({url:"acceptance/reviewIntellectual",method:"post",params:t})}function v(t){return Object(n["b"])({url:o.property.updateIntellectualPropertyReport,method:"get",params:t})}function x(t){return Object(n["b"])({url:o.property.updateIntellectualPropertyAudit,method:"post",data:t})}function L(t,e){return Object(n["b"])({url:o.property.updateIntellectualPropertyConfirm+"?confirmType="+e,method:"post",data:t})}function N(){return Object(n["b"])({url:o.property.queryUserRole,method:"post"})}function V(t){return Object(n["b"])({url:o.property.queryrewardPageList,method:"post",data:t})}function T(t){return Object(n["b"])({url:o.property.saveRewardInfo,method:"post",data:t})}function U(t){return Object(n["b"])({url:o.property.queryRewardInfo,method:"get",params:t})}function k(t){return Object(n["b"])({url:"intellectualProperty/generateProposalNumber",method:"post",data:t})}function S(t){return Object(n["b"])({url:o.property.stateReset,method:"post",data:t})}},"0f88":function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r("99af"),r("4160"),r("a15b"),r("b64b"),r("159b"),r("b775"),r("83b9"),r("4328");function n(t){window.open("".concat("/api","/document/download/").concat(t))}}}]);
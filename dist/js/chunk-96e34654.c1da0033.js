(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-96e34654"],{1276:function(e,t,a){"use strict";var l=a("d784"),n=a("44e7"),o=a("825a"),r=a("1d80"),s=a("4840"),i=a("8aa5"),c=a("50c4"),m=a("14c3"),u=a("9263"),p=a("d039"),f=[].push,d=Math.min,v=4294967295,b=!p((function(){return!RegExp(v,"y")}));l("split",2,(function(e,t,a){var l;return l="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,a){var l=String(r(this)),o=void 0===a?v:a>>>0;if(0===o)return[];if(void 0===e)return[l];if(!n(e))return t.call(l,e,o);var s,i,c,m=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),d=0,b=new RegExp(e.source,p+"g");while(s=u.call(b,l)){if(i=b.lastIndex,i>d&&(m.push(l.slice(d,s.index)),s.length>1&&s.index<l.length&&f.apply(m,s.slice(1)),c=s[0].length,d=i,m.length>=o))break;b.lastIndex===s.index&&b.lastIndex++}return d===l.length?!c&&b.test("")||m.push(""):m.push(l.slice(d)),m.length>o?m.slice(0,o):m}:"0".split(void 0,0).length?function(e,a){return void 0===e&&0===a?[]:t.call(this,e,a)}:t,[function(t,a){var n=r(this),o=void 0==t?void 0:t[e];return void 0!==o?o.call(t,n,a):l.call(String(n),t,a)},function(e,n){var r=a(l,e,this,n,l!==t);if(r.done)return r.value;var u=o(e),p=String(this),f=s(u,RegExp),h=u.unicode,g=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(b?"y":"g"),w=new f(b?u:"^(?:"+u.source+")",g),N=void 0===n?v:n>>>0;if(0===N)return[];if(0===p.length)return null===m(w,p)?[p]:[];var x=0,_=0,L=[];while(_<p.length){w.lastIndex=b?_:0;var y,O=m(w,b?p:p.slice(_));if(null===O||(y=d(c(w.lastIndex+(b?0:_)),p.length))===x)_=i(p,_,h);else{if(L.push(p.slice(x,_)),L.length===N)return L;for(var T=1;T<=O.length-1;T++)if(L.push(O[T]),L.length===N)return L;_=x=y}}return L.push(p.slice(x)),L}]}),!b)},2532:function(e,t,a){"use strict";var l=a("23e7"),n=a("5a34"),o=a("1d80"),r=a("ab13");l({target:"String",proto:!0,forced:!r("includes")},{includes:function(e){return!!~String(o(this)).indexOf(n(e),arguments.length>1?arguments[1]:void 0)}})},"415d":function(e,t,a){"use strict";a("b5ac")},"44e7":function(e,t,a){var l=a("861d"),n=a("c6b6"),o=a("b622"),r=o("match");e.exports=function(e){var t;return l(e)&&(void 0!==(t=e[r])?!!t:"RegExp"==n(e))}},"5a34":function(e,t,a){var l=a("44e7");e.exports=function(e){if(l(e))throw TypeError("The method doesn't accept regular expressions");return e}},ab13:function(e,t,a){var l=a("b622"),n=l("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[n]=!1,"/./"[e](t)}catch(l){}}return!1}},b5ac:function(e,t,a){},caad:function(e,t,a){"use strict";var l=a("23e7"),n=a("4d64").includes,o=a("44d2");l({target:"Array",proto:!0},{includes:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),o("includes")},e9b4:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a("caad"),a("b64b"),a("d3b7"),a("25f0"),a("2532");var l=a("5c96");function n(e){try{var t=Object.keys(e.response.data);console.log(e.response),t.includes("code")?l["Message"].error(e.response.data["msg"]):1===t.length?l["Message"].error(e.response.data[t][0].toString()):l["Message"].error(e.response.data[t[0]][0].toString())}catch(e){}}},edfc:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-card",{staticClass:"box-card name-setting"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("取名配置")])]),a("el-form",{ref:"form",staticClass:"form",attrs:{model:e.form,rules:e.rules}},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{prop:"firstName"}},[a("el-row",[a("el-col",{attrs:{span:7}},[e._v("宝宝姓氏:")]),a("el-col",{attrs:{span:15}},[a("el-input",{attrs:{placeholder:"请输入宝宝姓氏",clearable:"",autosize:"",autocomplete:"off"},model:{value:e.form.firstName,callback:function(t){e.$set(e.form,"firstName",t)},expression:"form.firstName"}})],1)],1)],1),a("el-form-item",{attrs:{prop:"source"}},[a("el-row",[a("el-col",{attrs:{span:7}},[e._v("名字来源:")]),a("el-col",{attrs:{span:15}},[a("el-select",{attrs:{placeholder:"请选择名字来源"},model:{value:e.form.source,callback:function(t){e.$set(e.form,"source",t)},expression:"form.source"}},e._l(e.source,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1),a("el-form-item",{attrs:{prop:"LastNameOne"}},[a("el-row",[a("el-col",{attrs:{span:7}},[e._v("第一个字:")]),a("el-col",{attrs:{span:15}},[a("el-input",{attrs:{placeholder:"请输入第一个字",clearable:"",autosize:"",autocomplete:"off"},model:{value:e.form.LastNameOne,callback:function(t){e.$set(e.form,"LastNameOne",t)},expression:"form.LastNameOne"}})],1)],1)],1),a("el-form-item",{attrs:{prop:"LastNameOnePinyin"}},[a("el-row",[a("el-col",{attrs:{span:7}},[e._v("第一个字拼音:")]),a("el-col",{attrs:{span:15}},[a("el-input",{attrs:{placeholder:"请输入第一个字拼音",clearable:"",autosize:"",autocomplete:"off"},model:{value:e.form.LastNameOnePinyin,callback:function(t){e.$set(e.form,"LastNameOnePinyin",t)},expression:"form.LastNameOnePinyin"}})],1)],1)],1),a("el-form-item",{attrs:{prop:"LastNameOneElement"}},[a("el-row",[a("el-col",{attrs:{span:7}},[e._v("第一个字五行属性:")]),a("el-col",{attrs:{span:17}},[a("el-checkbox-group",{attrs:{min:0,max:5},model:{value:e.form.LastNameOneElement,callback:function(t){e.$set(e.form,"LastNameOneElement",t)},expression:"form.LastNameOneElement"}},e._l(e.elements,(function(t){return a("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])})),1)],1)],1)],1),a("el-form-item",{attrs:{prop:"LastNameOneInitials"}},[a("el-row",[a("el-col",{attrs:{span:7}},[e._v("第一个字声母:")]),a("el-col",{attrs:{span:15}},[a("el-select",{attrs:{placeholder:"请选择第一个字声母"},model:{value:e.form.LastNameOneInitials,callback:function(t){e.$set(e.form,"LastNameOneInitials",t)},expression:"form.LastNameOneInitials"}},e._l(e.LastNameOneInitials,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1),a("el-form-item",{attrs:{prop:"LastNameOneTone"}},[a("el-row",[a("el-col",{attrs:{span:7}},[e._v("第一个字声调:")]),a("el-col",{attrs:{span:15}},[a("el-checkbox-group",{attrs:{min:0,max:2},model:{value:e.form.LastNameOneTone,callback:function(t){e.$set(e.form,"LastNameOneTone",t)},expression:"form.LastNameOneTone"}},e._l(e.tones,(function(t){return a("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])})),1)],1)],1)],1),a("el-form-item",{attrs:{prop:"LastNameOneForbidden"}},[a("el-row",[a("el-col",{attrs:{span:7}},[e._v("第一个字禁用字:")]),a("el-col",{attrs:{span:15}},[a("el-input",{attrs:{placeholder:"不希望用到的字，多个用逗号好分割",clearable:"",autosize:"",autocomplete:"off"},model:{value:e.form.LastNameOneForbidden,callback:function(t){e.$set(e.form,"LastNameOneForbidden",t)},expression:"form.LastNameOneForbidden"}})],1)],1)],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{prop:"sex"}},[a("el-row",[a("el-col",{attrs:{span:7}},[e._v("宝宝性别:")]),a("el-col",{attrs:{span:15}},[a("el-select",{attrs:{placeholder:"请选择性别"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},e._l(e.sex,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1),a("el-form-item",{attrs:{prop:"num"}},[a("el-row",[a("el-col",{attrs:{span:7}},[e._v("名字字数:")]),a("el-col",{attrs:{span:15}},[a("el-select",{attrs:{placeholder:"请选择姓名字数"},model:{value:e.form.num,callback:function(t){e.$set(e.form,"num",t)},expression:"form.num"}},e._l(e.num,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1),a("el-form-item",{attrs:{prop:"LastNameTwo"}},[a("el-row",[a("el-col",{attrs:{span:7}},[e._v("第二个字:")]),a("el-col",{attrs:{span:15}},[a("el-input",{attrs:{placeholder:"请输入第二个字",clearable:"",autosize:"",autocomplete:"off"},model:{value:e.form.LastNameTwo,callback:function(t){e.$set(e.form,"LastNameTwo",t)},expression:"form.LastNameTwo"}})],1)],1)],1),a("el-form-item",{attrs:{prop:"LastNameTwoPinyin"}},[a("el-row",[a("el-col",{attrs:{span:7}},[e._v("第二个字拼音:")]),a("el-col",{attrs:{span:15}},[a("el-input",{attrs:{placeholder:"请输入第二个字拼音",clearable:"",autosize:"",autocomplete:"off"},model:{value:e.form.LastNameTwoPinyin,callback:function(t){e.$set(e.form,"LastNameTwoPinyin",t)},expression:"form.LastNameTwoPinyin"}})],1)],1)],1),a("el-form-item",{attrs:{prop:"LastNameTwoElement"}},[a("el-row",[a("el-col",{attrs:{span:7}},[e._v("第二个字五行属性:")]),a("el-col",{attrs:{span:17}},[a("el-checkbox-group",{attrs:{min:0,max:5},model:{value:e.form.LastNameTwoElement,callback:function(t){e.$set(e.form,"LastNameTwoElement",t)},expression:"form.LastNameTwoElement"}},e._l(e.elements,(function(t){return a("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])})),1)],1)],1)],1),a("el-form-item",{attrs:{prop:"LastNameTwoInitials"}},[a("el-row",[a("el-col",{attrs:{span:7}},[e._v("第二个字声母:")]),a("el-col",{attrs:{span:15}},[a("el-select",{attrs:{placeholder:"请选择第二个字声母"},model:{value:e.form.LastNameTwoInitials,callback:function(t){e.$set(e.form,"LastNameTwoInitials",t)},expression:"form.LastNameTwoInitials"}},e._l(e.LastNameOneInitials,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1),a("el-form-item",{attrs:{prop:"LastNameTwoTone"}},[a("el-row",[a("el-col",{attrs:{span:7}},[e._v("第二个字声调:")]),a("el-col",{attrs:{span:15}},[a("el-checkbox-group",{attrs:{min:0,max:2},model:{value:e.form.LastNameTwoTone,callback:function(t){e.$set(e.form,"LastNameTwoTone",t)},expression:"form.LastNameTwoTone"}},e._l(e.tones,(function(t){return a("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])})),1)],1)],1)],1),a("el-form-item",{attrs:{prop:"LastNameTwoForbidden"}},[a("el-row",[a("el-col",{attrs:{span:7}},[e._v("第二个字禁用字:")]),a("el-col",{attrs:{span:15}},[a("el-input",{attrs:{placeholder:"不希望用到的字，多个用逗号好分割",clearable:"",autosize:"",autocomplete:"off"},model:{value:e.form.LastNameTwoForbidden,callback:function(t){e.$set(e.form,"LastNameTwoForbidden",t)},expression:"form.LastNameTwoForbidden"}})],1)],1)],1)],1)],1),a("el-form-item",[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-button",{attrs:{loading:e.loading,type:"danger"},nativeOn:{click:function(t){return t.preventDefault(),e.emptyForm()}}},[e._v("清 空")]),a("el-button",{attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.submitName("form")}}},[e._v("提 交")])],1)],1)],1)],1),a("el-dialog",{staticClass:"name-result-dialog",attrs:{title:"起名结果",visible:e.dialogVisible,width:"50%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-row",{attrs:{gutter:10}},e._l(e.nameResults,(function(t,l){return a("el-col",{key:l,attrs:{span:12}},[a("el-card",{staticClass:"name-result-card"},[a("div",{staticClass:"clearfix name-header",attrs:{slot:"header"},slot:"header"},[a("span",{staticClass:"title-name"},[e._v(e._s(t.name))])]),a("div",{staticClass:"explain"},[a("span",{staticClass:"headline"},[e._v("拼音: ")]),e._v(" "+e._s(t.pinyin))]),a("div",{staticClass:"explain"},[a("span",{staticClass:"headline"},[e._v("五行: ")]),e._v(" "+e._s(t.element))]),a("div",{staticClass:"explain"},[a("span",{staticClass:"headline"},[e._v("字义: ")]),a("div",{staticClass:"retract"},[e._v(e._s(t.meaningOne))]),"two"===e.form.num?a("div",{staticClass:"retract"},[e._v(e._s(t.meaningTwo))]):e._e()]),a("div",{staticClass:"explain"},[a("span",{staticClass:"headline"},[e._v("出处: ")]),a("div",{staticClass:"retract"},[e._v(e._s(t.provenanceOne))]),"two"===e.form.num?a("div",{staticClass:"retract"},[e._v(e._s(t.provenanceTwo))]):e._e()]),a("el-row",{attrs:{type:"flex",justify:"end"}},[a("el-col",{attrs:{span:3}},[a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:JSON.stringify(t),expression:"JSON.stringify(name)",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.copyCode,expression:"copyCode",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.copyCodeError,expression:"copyCodeError",arg:"error"}],attrs:{type:"text"}},[e._v("复制")])],1)],1)],1)],1)})),1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.changeOne()}}},[e._v("换一批")])],1)],1)],1)},n=[],o=(a("ac1f"),a("1276"),a("8e1d"));function r(e){return Object(o["a"])({url:"api/v1/data/named/",method:"post",data:e})}var s=a("e9b4"),i={name:"index",data:function(){var e=function(e,t,a){""===t?a(new Error("姓不能为空")):t.length>2?a(new Error("姓最多为两个个字")):a()};return{sex:[{value:"男",label:"男"},{value:"女",label:"女"}],LastNameOneInitials:[{value:"zh",label:"zh"},{value:"ch",label:"ch"},{value:"sh",label:"sh"},{value:"z",label:"z"},{value:"c",label:"c"},{value:"s",label:"s"},{value:"r",label:"r"},{value:"b",label:"b"},{value:"p",label:"p"},{value:"m",label:"m"},{value:"f",label:"f"},{value:"d",label:"d"},{value:"n",label:"n"},{value:"l",label:"l"},{value:"g",label:"g"},{value:"k",label:"k"},{value:"h",label:"h"},{value:"j",label:"j"},{value:"q",label:"q"},{value:"x",label:"x"},{value:"y",label:"y"},{value:"w",label:"w"}],source:[{value:"word",label:"已有字库"},{value:"name",label:"已有名库"}],num:[{value:"one",label:"单名字(不带姓)"},{value:"two",label:"双名字(不带姓)"}],tones:["一","二","三","四"],elements:["金","木","水","火","土"],form:{firstName:"",sex:"",source:"",num:"",LastNameOne:"",LastNameTwo:"",LastNameOnePinyin:"",LastNameTwoPinyin:"",LastNameOneElement:[],LastNameTwoElement:[],LastNameOneInitials:"",LastNameTwoInitials:"",LastNameOneTone:[],LastNameTwoTone:[],LastNameOneForbidden:"",LastNameTwoForbidden:""},rules:{firstName:[{validator:e,trigger:"blur"}]},loading:!1,dialogVisible:!1,nameResults:[]}},methods:{emptyForm:function(){this.form={}},getNames:function(){var e=this;r(this.form).then((function(t){var a=t["results"];for(var l in console.log(a),console.log(a["first_name"]),e.nameResults=[],a["one"])if(a.hasOwnProperty("two")){if(a["two"].length>=l-1){var n={name:a["first_name"][0]["word"]+" "+a["one"][l]["word"]+" "+a["two"][l]["word"],pinyin:a["first_name"][0]["pinyin"]+" "+a["one"][l]["pinyin"]+" "+a["two"][l]["pinyin"],element:a["first_name"][0]["element"]+" "+a["one"][l]["element"]+" "+a["two"][l]["element"],meaningOne:a["one"][l]["word"]+": "+a["one"][l]["meaning"],meaningTwo:a["two"][l]["word"]+": "+a["two"][l]["meaning"],provenanceOne:a["one"][l]["word"]+": "+a["one"][l]["provenance"],provenanceTwo:a["two"][l]["word"]+": "+a["two"][l]["provenance"]};e.nameResults.push(n)}}else{var o={name:a["first_name"][0]["word"]+" "+a["one"][l]["word"],pinyin:a["first_name"][0]["pinyin"]+" "+a["one"][l]["pinyin"],element:a["first_name"][0]["element"]+" "+a["one"][l]["element"],meaningOne:a["one"][l]["word"]+": "+a["one"][l]["meaning"],provenanceTwo:a["one"][l]["word"]+": "+a["one"][l]["provenance"]};e.nameResults.push(o)}e.dialogVisible=!0,e.loading=!1})).catch((function(t){console.log(t),e.loading=!1,Object(s["a"])(t)}))},submitName:function(e){var t=this;this.loading=!0,this.$refs[e].validate((function(e){if(!e)return t.loading=!1,t.$message.error("信息输入格式错误，请检查"),!1;""===t.form.num&&(t.form.num="one"),""===t.form.source&&(t.form.source="word"),t.form.LastNameOneForbidden.length>1&&(t.form.LastNameOneForbidden=t.form.LastNameOneForbidden.split(",")),t.getNames()}))},copyCode:function(){this.$message.success("复制成功")},copyCodeError:function(){this.$message.error("复制失败")},changeOne:function(){this.getNames()}}},c=i,m=(a("415d"),a("2877")),u=Object(m["a"])(c,l,n,!1,null,"a2ac1ecc",null);t["default"]=u.exports}}]);
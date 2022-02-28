(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f3048188"],{"7d8b":function(e,a,t){"use strict";t.r(a);var l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"options-wrapper"},[t("div",{staticClass:"preferences-wrapper",class:{active:e.show_options}},[t("div",{staticClass:"show_options"},[e._v(" PREFERENCES "),t("span",{staticClass:"pref-icon",on:{click:function(a){e.show_options=!e.show_options}}},[t("svg",{staticClass:"feather feather-sliders",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[t("line",{attrs:{x1:"4",y1:"21",x2:"4",y2:"14"}}),t("line",{attrs:{x1:"4",y1:"10",x2:"4",y2:"3"}}),t("line",{attrs:{x1:"12",y1:"21",x2:"12",y2:"12"}}),t("line",{attrs:{x1:"12",y1:"8",x2:"12",y2:"3"}}),t("line",{attrs:{x1:"20",y1:"21",x2:"20",y2:"16"}}),t("line",{attrs:{x1:"20",y1:"12",x2:"20",y2:"3"}}),t("line",{attrs:{x1:"1",y1:"14",x2:"7",y2:"14"}}),t("line",{attrs:{x1:"9",y1:"8",x2:"15",y2:"8"}}),t("line",{attrs:{x1:"17",y1:"16",x2:"23",y2:"16"}})])]),t("a",{staticClass:"json-icon",attrs:{href:"#getting-started"}},[t("svg",{staticClass:"feather feather-book",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[t("path",{attrs:{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}}),t("path",{attrs:{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"}})])])]),t("div",{staticClass:"pref-slot"},[t("label",[e._v("Style "),t("el-select",{attrs:{placeholder:"Style",size:"small"},model:{value:e.calendar_settings.style,callback:function(a){e.$set(e.calendar_settings,"style",a)},expression:"calendar_settings.style"}},[t("el-option",{attrs:{value:"material_design",label:"Material Design"}}),t("el-option",{attrs:{value:"flat_design",label:"Flat Design"}})],1)],1),t("label",[e._v("View Type "),t("el-select",{attrs:{placeholder:"View Type",size:"small"},model:{value:e.calendar_settings.view_type,callback:function(a){e.$set(e.calendar_settings,"view_type",a)},expression:"calendar_settings.view_type"}},[t("el-option",{attrs:{value:"day",label:"Day view"}}),t("el-option",{attrs:{value:"week",label:"Week view"}})],1)],1),t("label",[e._v("Cell Height "),t("el-input",{attrs:{size:"small",type:"number",name:"cell-height"},model:{value:e.calendar_settings.cell_height,callback:function(a){e.$set(e.calendar_settings,"cell_height",e._n(a))},expression:"calendar_settings.cell_height"}})],1),t("label",[e._v("Day "),t("el-date-picker",{attrs:{size:"small",type:"date",placeholder:"Pick a day","value-format":"yyyy-MM-dd",format:"yyyy-MM-dd"},model:{value:e.calendar_settings.start_day,callback:function(a){e.$set(e.calendar_settings,"start_day",a)},expression:"calendar_settings.start_day"}})],1),t("label",[e._v("Day starts at "),t("el-input",{attrs:{size:"small",type:"number",name:"cell-height"},model:{value:e.calendar_settings.day_starts_at,callback:function(a){e.$set(e.calendar_settings,"day_starts_at",e._n(a))},expression:"calendar_settings.day_starts_at"}})],1),t("label",[e._v("Day ends at "),t("el-input",{attrs:{size:"small",type:"number",name:"cell-height"},model:{value:e.calendar_settings.day_ends_at,callback:function(a){e.$set(e.calendar_settings,"day_ends_at",e._n(a))},expression:"calendar_settings.day_ends_at"}})],1),t("label",[e._v("Hidden days "),t("el-select",{attrs:{placeholder:"Select one or more",multiple:"",size:"small"},model:{value:e.calendar_settings.hide_days,callback:function(a){e.$set(e.calendar_settings,"hide_days",a)},expression:"calendar_settings.hide_days"}},e._l(e.days,(function(e){return t("el-option",{key:e.value,attrs:{value:e.value,label:e.label}})})),1)],1),t("label",[e._v("Hidden dates "),t("el-select",{attrs:{placeholder:"Select one or more",multiple:"",size:"small"},model:{value:e.calendar_settings.hide_dates,callback:function(a){e.$set(e.calendar_settings,"hide_dates",a)},expression:"calendar_settings.hide_dates"}},e._l(e.dates,(function(e){return t("el-option",{key:e.value,attrs:{value:e.value,label:e.label}})})),1)],1),t("label",[e._v("Scroll to now "),t("el-checkbox",{attrs:{size:"small"},model:{value:e.calendar_settings.scrollToNow,callback:function(a){e.$set(e.calendar_settings,"scrollToNow",a)},expression:"calendar_settings.scrollToNow"}})],1),t("label",[e._v("Read only "),t("el-checkbox",{attrs:{size:"small"},model:{value:e.calendar_settings.read_only,callback:function(a){e.$set(e.calendar_settings,"read_only",a)},expression:"calendar_settings.read_only"}})],1),t("label",[e._v("Overlap events "),t("el-checkbox",{attrs:{size:"small"},model:{value:e.calendar_settings.overlap,callback:function(a){e.$set(e.calendar_settings,"overlap",a)},expression:"calendar_settings.overlap"}})],1),t("label",[e._v("Past event creation "),t("el-checkbox",{attrs:{size:"small"},model:{value:e.calendar_settings.past_event_creation,callback:function(a){e.$set(e.calendar_settings,"past_event_creation",a)},expression:"calendar_settings.past_event_creation"}})],1)])])])},s=[],n={props:["data"],computed:{calendar_settings:{get:function(){return this.data},set:function(e){console.log("New se=====t:",e),this.$emit("update:data",e)}}},data:function(){return{show_options:!1,dates:[{label:"Valentine's Day",value:"2020-02-14"},{label:"4th of July",value:"2019-07-04"},{label:"Halloween",value:"2019-10-31"},{label:"New years eve",value:"2019-12-31"},{label:"My birthday",value:"2019-08-09"}],days:[{label:"Monday",value:0},{label:"Tuesday",value:1},{label:"Wednesday",value:2},{label:"Thursday",value:3},{label:"Friday",value:4},{label:"Saturday",value:5},{label:"Sunday",value:6}]}}},i=n,r=(t("b1ea"),t("2877")),o=Object(r["a"])(i,l,s,!1,null,null,null);a["default"]=o.exports},b1ea:function(e,a,t){"use strict";var l=t("b6de"),s=t.n(l);s.a},b6de:function(e,a,t){}}]);
//# sourceMappingURL=chunk-f3048188.56af44eb.js.map
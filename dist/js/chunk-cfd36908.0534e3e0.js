(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cfd36908"],{"81ff":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"kalendarEventRef-"+t.event.id,staticClass:"event-card",class:{"is-past":t.isPast,overlaps:t.overlaps>0,"two-in-one":t.total>1,inspecting:!!t.inspecting,"event-card__mini":t.event.distance<=10,"event-card__small":t.event.distance>10&&t.event.distance<40||t.overlaps>1},style:"\n  height: "+t.distance+"; \n  width: calc("+t.width_value+"); \n  left: calc("+t.left_offset+");\n  top: "+t.top_offset+";\n",on:{click:function(e){t.inspecting=!0},mouseleave:function(e){t.inspecting=!1}}},["creating"===t.status||"popup-initiated"===t.status?n("portal-target",{attrs:{"slot-props":t.information,name:"event-creation",slim:""}}):n("portal-target",{attrs:{name:"event-details","slot-props":t.information,slim:""}}),"popup-initiated"===t.status?n("div",{staticClass:"popup-wrapper"},[n("portal-target",{attrs:{name:"event-popup-form",slim:"","slot-props":t.information}})],1):t._e()],1)},a=[],s=n("3ea1"),o={props:["event","total","index","overlaps"],created:function(){},inject:["kalendar_options"],data:function(){return{inspecting:!1,editing:!1}},computed:{isPast:function(){var t=Object(s["h"])((new Date).toISOString());return Object(s["j"])(this.event.start.value,t)},width_value:function(){return"".concat(100/this.total,"% - ").concat(50*this.overlaps/this.total,"px")},left_offset:function(){return"(".concat(this.index," * (").concat(this.width_value,")) + ").concat(50*this.overlaps,"px")},top_offset:function(){return this.event.start.round_offset?"".concat(this.event.start.round_offset,"px"):"0px"},distance:function(){if(this.event){var t=this.kalendar_options.cell_height/10;return"".concat(this.event.distance*t-.2*t,"px")}},status:function(){return this.event&&this.event.status||this.editing},information:function(){var t=this.event,e=t.start,n=t.end,i=t.data,a=t.id,o=t.key,c={start_time:Object(s["b"])(e.value),end_time:Object(s["b"])(n.value),kalendar_id:a,key:o,data:i};return c},editEvent:function(){this.$kalendar.closePopups(),this.editing=!0},closeEventPopup:function(){this.editing=!1}}},c=o,r=(n("efac"),n("2877")),p=Object(r["a"])(c,i,a,!1,null,null,null);e["default"]=p.exports},add0:function(t,e,n){},efac:function(t,e,n){"use strict";var i=n("add0"),a=n.n(i);a.a}}]);
//# sourceMappingURL=chunk-cfd36908.0534e3e0.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d95896f"],{"35f3":function(e,t,n){},"464c":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"calendar-wrap",style:"--space-between-cols: "+e.colsSpace},[n("div",{staticClass:"sticky-top"},[n("ul",{staticClass:"days"},e._l(e.days||[],(function(t,a){var i=t.value;return n("li",{key:a,staticClass:"day-indicator",class:{today:e._isToday(i),"is-before":e.isDayBefore(i)}},[n("div",[n("span",{staticClass:"letters-date"},[e._v(e._s(e.kalendar_options.formatDayTitle(i)[0]))]),n("span",{staticClass:"number-date"},[e._v(e._s(e.kalendar_options.formatDayTitle(i)[1]))])])])})),0),n("ul",{staticClass:"all-day"},[n("span",[e._v("All Day")]),e._l(e.days||[],(function(t,a){return n("li",{key:a,class:{"all-today":e._isToday(t.value),"is-all-day":!1},style:"height:"+(e.kalendar_options.cell_height+5)+"px"})}))],2)]),e._e(),e.hours?n("div",{staticClass:"blocks"},[n("div",{staticClass:"calendar-blocks"},[n("ul",{staticClass:"hours",staticStyle:{"padding-top":"70px"}},e._l(e.hoursVisible,(function(t,a){return n("li",{key:a,staticClass:"hour-row-identifier",class:"row-"+a,style:"height:"+e.hourHeight+"px"},[n("span",[e._v(e._s(e.kalendar_options.formatLeftHours(t.value)))])])})),0),n("div",{directives:[{name:"show",rawName:"v-show",value:"material_design"!==e.kalendar_options.style,expression:"kalendar_options.style !== 'material_design'"}],staticClass:"hour-indicator-line",style:"top:"+e.passedTime.distance+"px"},[n("span",{staticClass:"time-value"},[e._v(e._s(e.passedTime.value))]),n("span",{staticClass:"line"})]),e._l(e.days,(function(t,a){return n("div",{staticClass:"building-blocks-1"},e._l(e.activityOfWeek[a].activities,(function(i,r){return n("kalendar-days",{key:t.value.slice(0,10)+Math.random().toString(36).substring(2,7),ref:t.value.slice(0,10),refInFor:!0,staticClass:"building-blocks",class:"day-"+(a+1)+" "+e.activityOfWeek[a].activities[r].activity_id,attrs:{day:t,key:"day.value.slice(0, 10) + activityOfWeek[index].activities[index1].activity_id ","passed-time":e.passedTime.distance,activity:e.activityOfWeek[a].activities[r],position:r,available_activities:e.available_activities}})})),1)}))],2)]):e._e()])},i=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{ref:e.day.value+"-reference",staticClass:"kalendar-day",class:{"is-weekend":e.isWeekend,"is-today":e.isToday,creating:e.creator.creating||"popup-initiated"===e.creator.status},staticStyle:{position:"relative"}},[n("div",{staticClass:"building-blocks-activity"},[e._v(e._s(e.activity.activity_name))]),e._l(e.day_cells,(function(t,a){return n("kalendar-cell",{key:"cell-"+a+"  "+e.activity.activity_id+" ",attrs:{"constructed-events":e.day_events,creator:e.creator,"cell-data":t,day:e.day,index:a,activity:e.activity,available_activities:e.available_activities,position:e.position,"temporary-event":e.temporary_event},on:{select:e.updateCreator,reset:function(t){return e.resetEvents()},initiatePopup:function(t){return e.initiatePopup()}}})}))],2)},s=[],l=n("3ea1"),o=function(e){var t=0,n={};e.addEventListener("message",(function(e){return a(e)}));var a=function(e){var t=e.data;if(Array.isArray(t)&&!(t.length<2)){var a=t[0],i=t[1],r=t[2],s=n[a];s&&(delete n[a],s(i,r))}};return{initiateWorker:function(e){},postMessage:function(i){var r=t++,s=[r,i];return new Promise((function(t,i){if(n[r]=function(e,n){if(e)return i(new Error(e.message));t(n)},"undefined"!==typeof e.controller){var l=new MessageChannel;l.port1.onmessage=function(e){a(e)},e.controller.postMessage(s,[l.port2])}else e.postMessage(s)}))}}},c=n("f081"),u=n.n(c),d=new u.a,v=o(d),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"message",t=arguments.length>1?arguments[1]:void 0;return v.postMessage({type:e,data:t})},p={send:f};function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g={props:["day","passedTime","activity","position","available_activities"],created:function(){this.renderDay()},components:{kalendarCell:function(){return n.e("chunk-42fae274").then(n.bind(null,"d3f0"))}},provide:function(){return{kalendarAddEvent:this.addEvent,kalendarClearPopups:this.clearCreatingLeftovers}},inject:["kalendar_options"],mounted:function(){this.kalendar_options.scrollToNow&&this.isToday&&this.scrollView()},computed:{isWeekend:function(){return Object(l["l"])(this.day.value)},isToday:function(){return Object(l["k"])(this.day.value)}},data:function(){return{creator:{creating:!1,starting_cell:null,original_starting_cell:null,current_cell:null,ending_cell:null,status:null},temporary_event:null,day_cells:[],day_events:null}},methods:{renderDay:function(){var e=this;p.send("getDayCells",{day:this.day.value,hourOptions:{start_hour:this.kalendar_options.day_starts_at,end_hour:this.kalendar_options.day_ends_at}}).then((function(t){return e.day_cells=t,e.getDayEvents(e.$kalendar.getEvents())}))},addEvent:function(e){var t=this,n=this.checkEventValidity(e);if(null!==n)return Promise.reject(n);var a=e.from,i=e.to;return a=Object(l["h"])(a),i=Object(l["h"])(i),p.send("constructNewEvent",{event:y(y({},e),{},{from:a,to:i})}).then((function(n){var a=n.key;console.log(t.day_events),t.$set(t.day_events,a,[n]);var i=t.$kalendar.getEvents();i.push(y(y({},e),{},{id:n.id})),t.$kalendar.updateEvents(i)}))},removeEvent:function(e){var t=this.$kalendar.getEvents(),n=t.findIndex((function(t){return t.id===e.id}));if(!(n<0)){t.splice(n,1);var a=this.day_events[e.key].findIndex((function(t){return t.id===e.id}));return this.day_events[e.key].splice(a,1),this.$kalendar.updateEvents(t),Promise.resolve()}},checkEventValidity:function(e){var t=e.from,n=e.to;return t&&n?null:"No dates were provided in the payload"},getDayEvents:function(e){var t=this,n=e.filter((function(e){return e.activity_id==t.activity.activity_id}));return p.send("constructDayEvents",{events:n,day:this.day.value}).then((function(e){t.day_events=e}))},clearCreatingLeftovers:function(){for(var e in this.day_events){var t=this.day_events[e].some((function(e){return"popup-initiated"===e.status||"creating"===e.status}));if(t){var n=this.day_events[e].filter((function(e){return"completed"===e.status}));this.$set(this.day_events,e,n),0===n.length&&delete this.day_events[e]}}this.resetEvents()},resetEvents:function(){(this.creator.creating||null!==this.creator.status)&&(this.creator={creating:!1,starting_cell:null,original_starting_cell:null,current_cell:null,ending_cell:null,status:null,temporary_id:null},this.temporary_event=null)},updateCreator:function(e){if(this.creator=y(y({},this.validateSelection(e)),{},{status:"creating"}),!1===this.kalendar_options.overlap&&Object.keys(this.day_events).length>0){var t=this.overlapPolice(e);if(t)return this.creator=this.validateSelection(t),this.selectCell(),void this.initiatePopup()}this.selectCell()},validateSelection:function(e){var t=e.original_starting_cell,n=(e.starting_cell,e.current_cell);return"reverse"===e.direction&&t.index>n.index?y(y({},e),{},{starting_cell:n,ending_cell:t}):e},selectCell:function(){if(this.creator.creating){var e=this.creator,t=(e.creating,e.ending_cell),n=(e.current_cell,e.starting_cell),a=(e.original_starting_cell,t.index+1);t=this.day_cells[a];var i=new Date(t.value)-new Date(n.value),r=Math.floor(i%864e5/36e5),s=Math.round(i%864e5%36e5/6e4),l=new Date(n.value),o=new Date(t.value),c=s+60*r;this.temporary_event={start:{masked_value:l.toISOString(),value:l.toISOString(),rounded:!1,round_offset:null},end:{masked_value:o.toISOString(),value:o.toISOString(),rounded:!1,round_offset:null},distance:c,status:"creating"}}},initiatePopup:function(){if(!this.creating||"creating"===this.creator.status){this.creator=y(y({},this.creator),{},{status:"popup-initiated",creating:!1});var e=this.creator,t=e.ending_cell,n=(e.current_cell,e.starting_cell),a=(e.original_starting_cell,t.index+1);t=this.day_cells[a];var i=new Date(t.value)-new Date(n.value),r=Math.floor(i%864e5/36e5),s=Math.round(i%864e5%36e5/6e4),l=new Date(n.value),o=new Date(t.value),c={start:{masked_value:l.toISOString(),value:l.toISOString(),rounded:!1,round_offset:null},end:{masked_value:o.toISOString(),value:o.toISOString(),rounded:!1,round_offset:null},distance:s+60*r,status:"popup-initiated"},u=this.day_events[n.value];u||(u=[]),u.push(c),this.$set(this.day_events,n.value,u),this.temporary_event=null}},overlapPolice:function(e){var t=this;if(e.current_cell){var n=Object.keys(this.day_events).map((function(e){return t.day_events[e]})).flat().filter((function(t){var n=new Date(e.starting_cell.value),a=new Date(e.ending_cell.value),i=new Date(t.start.value),r=new Date(t.end.value);return a>i&&a<r||n<i&&a>i}));if(n&&0!==n.length){var a=e;if("reverse"===e.direction){var i=n[0].end,r=this.day_cells.find((function(e){return e.value===i.masked_value})),s=this.day_cells[r.index];a.starting_cell={value:s.value,index:s.index},a.current_cell={value:s.value,index:s.index}}else{var l=n[0].start,o=this.day_cells.find((function(e){return e.value===l.masked_value})),c=this.day_cells[o.index-1];a.ending_cell={value:c.value,index:c.index}}return a}}},scrollView:function(){var e=this.$refs.nowIndicator.offsetTop;console.log("Scrolling to :",e),setTimeout((function(){window.scroll({top:e,left:0,behavior:"smooth"})}),500)}}},m=g,k=(n("af90"),n("2877")),b=Object(k["a"])(m,r,s,!1,null,null,null),w=b.exports,O=n("bc3a"),D=n.n(O),j={props:{current_day:{required:!0,type:String,validator:function(e){return!isNaN(Date.parse(e))}},activityOfWeek:{required:!0,type:Array,validator:function(e){return Array.isArray(e)}},available_activities:{required:!0,type:Array,validator:function(e){return Array.isArray(e)}},pos:{type:Number,default:0,required:!0}},components:{KalendarDays:w},created:function(){var e=this;this.addHelperMethods(),setInterval((function(){return e.kalendar_options.now=new Date}),6e4),this.constructWeek()},inject:["kalendar_options","kalendar_events"],data:function(){return{hours:null,days:[]}},computed:{hoursVisible:function(){return this.hours?this.hours.filter((function(e){return!!e.visible})):[]},colsSpace:function(){return"flat_design"===this.kalendar_options.style?"5px":"0px"},hourHeight:function(){return 6*this.kalendar_options.cell_height},passedTime:function(){var e=this.kalendar_options,t=e.day_starts_at,n=e.day_ends_at,a=e.now,i=Object(l["h"])(a),r="".concat(i.split("T")[0],"T").concat((t+"").padStart(2,"0"),":00:00.000Z"),s="".concat(i.split("T")[0],"T").concat((n+"").padStart(2,"0"),":00:00.000Z"),o=new Date(i);if(new Date(s)<o||o<new Date(r))return null;var c=(o-new Date(r))/1e3/60;return{distance:c,time:i}}},methods:{_isToday:function(e){return Object(l["k"])(e)},updateAppointments:function(e){var t=e.id,n=e.data;this.$emit("update",{id:t,data:n})},deleteAppointment:function(e){this.$emit("delete",{id:e})},clearAppointments:function(){this.$emit("clear")},isDayBefore:function(e){var t=new Date(this.kalendar_options.now),n=Object(l["h"])(t.toISOString());return Object(l["j"])(e,Object(l["g"])(n))},constructWeek:function(){var e=this,t=this.current_day.slice(0,10),n=this.kalendar_options,a=n.hide_dates,i=n.hide_days,r=n.view_type;return Promise.all([p.send("getDays",{day:t,options:{hide_dates:a,hide_days:i,view_type:r}}).then((function(t){e.days=t})),p.send("getHours",{hourOptions:{start_hour:this.kalendar_options.day_starts_at,end_hour:this.kalendar_options.day_ends_at}}).then((function(t){e.hours=t}))])},addHelperMethods:function(){var e=this;this.$kalendar.buildWeek=function(){e.constructWeek()},this.$kalendar.updatePayload=function(t){e.pos=t},this.$kalendar.addNewEvent=function(t){if(!t)return Promise.reject("No payload");var n=t.from,a=t.to;"000Z"===n.slice(-4)&&(t.from=Object(l["b"])(n)),"000Z"===a.slice(-4)&&(t.to=Object(l["b"])(a));var i=t.from.slice(0,10),r=e.$refs[i],s=e.pos,o=parseInt(r[e.pos].$el.classList[r[e.pos].$el.classList.length-1]);D.a.post("http://www.learningbali.com/strapi/api/activity/book",{activity_id:o,datetime_start:t.from,datetime_end:t.to,num_of_participants:parseInt(t.data.num_of_participants),age_min:parseInt(t.data.age_min),age_max:parseInt(t.data.age_max)}).then((function(e){r[s].addEvent(t)})).catch((function(e){console.log(e)}))},this.$kalendar.removeEvent=function(t){var n=t.day,a=t.key,i=t.id;if(n.length>10&&(n=n.slice(0,10)),!n)return Promise.reject("Day wasn't provided");if(!i)return Promise.reject("No ID was provided");if(!a)return Promise.reject("No key was provided in the object");var r=n;e.$refs[r][e.pos].removeEvent({id:i,key:a})},this.$kalendar.closePopups=function(){var t=e.days.map((function(e){return e.value.slice(0,10)}));t.forEach((function(t){e.$refs[t].map((function(e){return e.clearCreatingLeftovers()}))}))}}}},S=j,C=(n("c62a"),Object(k["a"])(S,a,i,!1,null,null,null));t["default"]=C.exports},8001:function(e,t,n){},af90:function(e,t,n){"use strict";var a=n("35f3"),i=n.n(a);i.a},c62a:function(e,t,n){"use strict";var a=n("8001"),i=n.n(a);i.a},f081:function(e,t,n){e.exports=function(){return new Worker(n.p+"13a62894b123ef52636d.worker.js")}}}]);
//# sourceMappingURL=chunk-5d95896f.708d56c4.js.map
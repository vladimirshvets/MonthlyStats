"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[912],{257:function(e,t,a){a.r(t),a.d(t,{default:function(){return Y}});var o=a(3396),m=a(7139);const l={class:"nav-wrap"},r={class:"nav-content"},n={class:"nav-content"},s={class:"nav-content"},i={class:"summary-wrap"},d={class:"form-wrap"},u={class:"grid-wrap"},c={class:"actions-wrap"};function f(e,t,a,f,h,p){const v=(0,o.up)("v-icon"),g=(0,o.up)("v-btn"),w=(0,o.up)("v-col"),y=(0,o.up)("v-card-text"),W=(0,o.up)("v-card"),_=(0,o.up)("v-row"),D=(0,o.up)("v-container"),k=(0,o.up)("work-results-form"),T=(0,o.up)("work-results-grid");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(D,null,{default:(0,o.w5)((()=>[(0,o.Wm)(_,null,{default:(0,o.w5)((()=>[(0,o.Wm)(w,{cols:"12",sm:"7"},{default:(0,o.w5)((()=>[(0,o._)("div",l,[(0,o._)("div",r,[(0,o.Wm)(g,{class:"ma-2",color:"orange-darken-2",to:{name:"MonthStats",params:{id:p.prevMonth}}},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{start:"",icon:"mdi-arrow-left"}),(0,o.Uk)(" "+(0,m.zw)(p.prevMonth),1)])),_:1},8,["to"])]),(0,o._)("div",n,[(0,o._)("h2",null,(0,m.zw)(this.$route.params.id),1)]),(0,o._)("div",s,[(0,o.Wm)(g,{class:"ma-2",color:"orange-darken-2",to:{name:"MonthStats",params:{id:p.nextMonth}}},{default:(0,o.w5)((()=>[(0,o.Uk)((0,m.zw)(p.nextMonth)+" ",1),(0,o.Wm)(v,{end:"",icon:"mdi-arrow-right"})])),_:1},8,["to"])])])])),_:1}),(0,o.Wm)(w,{cols:"12",sm:"5"},{default:(0,o.w5)((()=>[(0,o._)("div",i,[(0,o.Wm)(W,{color:"#385F73",theme:"dark","max-width":"300px",class:"nav-today"},{default:(0,o.w5)((()=>[(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[(0,o._)("p",null,"Days: "+(0,m.zw)(p.totalDays),1),(0,o._)("p",null,"Average Percentage: "+(0,m.zw)(p.averagePercentage),1)])),_:1})])),_:1})])])),_:1})])),_:1})])),_:1}),(0,o._)("div",d,[(0,o.Wm)(k,{showForm:h.showForm,data:h.formData,onSetData:p.setFormData,onTriggerForm:p.triggerForm,onSave:p.save,onUpdate:p.update,onRemove:p.remove},null,8,["showForm","data","onSetData","onTriggerForm","onSave","onUpdate","onRemove"])]),(0,o._)("div",u,[(0,o.Wm)(T,{items:h.items,onEditItem:p.editItem},null,8,["items","onEditItem"])]),(0,o._)("div",c,[(0,o.Wm)(g,{class:"button-add",icon:"mdi-plus",size:"large",color:"orange-darken-2",onClick:t[0]||(t[0]=e=>p.triggerForm(!0))})])],64)}var h=a(6797),p=a.n(h),v=a(4161),g=a(9242);const w=e=>((0,o.dD)("data-v-05633e61"),e=e(),(0,o.Cn)(),e),y=w((()=>(0,o._)("span",{class:"text-h5"},"Daily Info",-1))),W=w((()=>(0,o._)("small",null,"* required fields",-1))),_=w((()=>(0,o._)("span",null,"Delete",-1))),D=w((()=>(0,o._)("span",null,"Cancel",-1))),k={key:0},T={key:1};function q(e,t,a,m,l,r){const n=(0,o.up)("v-card-title"),s=(0,o.up)("v-text-field"),i=(0,o.up)("v-col"),d=(0,o.up)("v-row"),u=(0,o.up)("v-container"),c=(0,o.up)("v-card-text"),f=(0,o.up)("v-icon"),h=(0,o.up)("v-btn"),p=(0,o.up)("v-spacer"),v=(0,o.up)("v-card-actions"),w=(0,o.up)("v-card"),q=(0,o.up)("v-form"),V=(0,o.up)("delete-confirmation-modal"),O=(0,o.up)("v-dialog");return(0,o.wg)(),(0,o.j4)(O,{modelValue:r.form,"onUpdate:modelValue":t[12]||(t[12]=e=>r.form=e),"onClick:outside":r.closeForm,width:"1024",scrollable:""},{default:(0,o.w5)((()=>[(0,o.Wm)(q,{onSubmit:t[11]||(t[11]=(0,g.iM)((e=>r.submit(r.formData.id)),["prevent"])),class:"form"},{default:(0,o.w5)((()=>[(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[(0,o.Wm)(n,null,{default:(0,o.w5)((()=>[y])),_:1}),(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[W,(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o.Wm)(i,{cols:"12",xs:"6",sm:"6",md:"6"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{name:"date",label:"Date*",modelValue:r.formData.date,"onUpdate:modelValue":t[0]||(t[0]=e=>r.formData.date=e),required:""},null,8,["modelValue"])])),_:1}),(0,o.Wm)(i,{cols:"12",xs:"6",sm:"6",md:"6"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{name:"dailyTime",label:"Working Time, hours",modelValue:r.formData.dailyTime,"onUpdate:modelValue":t[1]||(t[1]=e=>r.formData.dailyTime=e),required:""},null,8,["modelValue"])])),_:1}),(0,o.Wm)(i,{cols:"12",xs:"3",sm:"3",md:"3"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{name:"qty0",label:"Qty 1",modelValue:r.qty0,"onUpdate:modelValue":t[2]||(t[2]=e=>r.qty0=e),required:""},null,8,["modelValue"])])),_:1}),(0,o.Wm)(i,{cols:"12",xs:"3",sm:"3",md:"3"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{name:"qty1",label:"Qty 2",modelValue:r.qty1,"onUpdate:modelValue":t[3]||(t[3]=e=>r.qty1=e)},null,8,["modelValue"])])),_:1}),(0,o.Wm)(i,{cols:"12",xs:"3",sm:"3",md:"3"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{name:"qty2",label:"Qty 3",modelValue:r.qty2,"onUpdate:modelValue":t[4]||(t[4]=e=>r.qty2=e)},null,8,["modelValue"])])),_:1}),(0,o.Wm)(i,{cols:"12",xs:"3",sm:"3",md:"3"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{name:"qty3",label:"Qty 4",modelValue:r.qty3,"onUpdate:modelValue":t[5]||(t[5]=e=>r.qty3=e)},null,8,["modelValue"])])),_:1}),(0,o.Wm)(i,{cols:"12",xs:"3",sm:"3",md:"3"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{name:"normOfTime0",label:"Norm of time 1",modelValue:r.normOfTime0,"onUpdate:modelValue":t[6]||(t[6]=e=>r.normOfTime0=e),required:""},null,8,["modelValue"])])),_:1}),(0,o.Wm)(i,{cols:"12",xs:"3",sm:"3",md:"3"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{name:"normOfTime1",label:"Norm of time 2",modelValue:r.normOfTime1,"onUpdate:modelValue":t[7]||(t[7]=e=>r.normOfTime1=e)},null,8,["modelValue"])])),_:1}),(0,o.Wm)(i,{cols:"12",xs:"3",sm:"3",md:"3"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{name:"normOfTime2",label:"Norm of time 3",modelValue:r.normOfTime2,"onUpdate:modelValue":t[8]||(t[8]=e=>r.normOfTime2=e)},null,8,["modelValue"])])),_:1}),(0,o.Wm)(i,{cols:"12",xs:"3",sm:"3",md:"3"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{name:"normOfTime3",label:"Norm of time 4",modelValue:r.normOfTime3,"onUpdate:modelValue":t[9]||(t[9]=e=>r.normOfTime3=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1}),(0,o.Wm)(v,null,{default:(0,o.w5)((()=>[r.formData.id?((0,o.wg)(),(0,o.j4)(h,{key:0,color:"red",variant:"outlined",onClick:t[10]||(t[10]=e=>l.removalModal=!0)},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{start:"",icon:"mdi-alert"}),_])),_:1})):(0,o.kq)("",!0),(0,o.Wm)(p),(0,o.Wm)(h,{color:"blue-darken-1",variant:"text",onClick:r.closeForm},{default:(0,o.w5)((()=>[D])),_:1},8,["onClick"]),(0,o.Wm)(h,{type:"submit",color:"success",variant:"outlined"},{default:(0,o.w5)((()=>[r.formData.id?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("span",k,"Save")),r.formData.id?((0,o.wg)(),(0,o.iD)("span",T,"Update")):(0,o.kq)("",!0),(0,o.Wm)(f,{end:"",icon:"mdi-checkbox-marked-circle"})])),_:1})])),_:1})])),_:1})])),_:1}),(0,o.Wm)(V,{showModal:l.removalModal,onTriggerModal:r.triggerRemovalModal,onRemove:r.remove,title:"Delete Refueling",text:"Are you sure you want to delete this record?"},null,8,["showModal","onTriggerModal","onRemove"])])),_:1},8,["modelValue","onClick:outside"])}const V=(0,o._)("span",null,"Cancel",-1);function O(e,t,a,l,r,n){const s=(0,o.up)("v-card-title"),i=(0,o.up)("v-card-text"),d=(0,o.up)("v-spacer"),u=(0,o.up)("v-btn"),c=(0,o.up)("v-icon"),f=(0,o.up)("v-card-actions"),h=(0,o.up)("v-card"),p=(0,o.up)("v-dialog");return(0,o.wg)(),(0,o.j4)(p,{modelValue:n.modal,"onUpdate:modelValue":t[1]||(t[1]=e=>n.modal=e),width:"auto"},{default:(0,o.w5)((()=>[(0,o.Wm)(h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(s,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,m.zw)(a.title),1)])),_:1}),(0,o.Wm)(i,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,m.zw)(a.text),1)])),_:1}),(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[(0,o.Wm)(d),(0,o.Wm)(u,{color:"blue-darken-1",variant:"text",onClick:t[0]||(t[0]=e=>n.modal=!1)},{default:(0,o.w5)((()=>[V])),_:1}),(0,o.Wm)(u,{color:"red",variant:"outlined",onClick:n.submit},{default:(0,o.w5)((()=>[(0,o.Uk)(" Delete "),(0,o.Wm)(c,{end:"",icon:"mdi-checkbox-marked-circle"})])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])}var b={name:"RemovalModal",props:{showModal:Boolean,title:String,text:String},computed:{modal:{get(){return this.showModal},set(e){this.$emit("triggerModal",e)}}},methods:{submit(){this.$emit("remove")}}},M=a(89);const x=(0,M.Z)(b,[["render",O]]);var F=x,U={name:"WorkResultsForm",components:{DeleteConfirmationModal:F},props:{data:Object,showForm:Boolean,suggestedNorm:Array},computed:{form:{get(){return this.showForm},set(e){this.$emit("triggerForm",e)}},formData:{get(){return this.data},set(e){this.$emit("setData",e)}},qty0:{get(){return this.formData.qtys[0]},set(e){this.formData.qtys[0]=e}},qty1:{get(){return this.formData.qtys[1]},set(e){this.formData.qtys[1]=e}},qty2:{get(){return this.formData.qtys?.[2]},set(e){this.formData.qtys[2]=e}},qty3:{get(){return this.formData.qtys[3]},set(e){this.formData.qtys[3]=e}},normOfTime0:{get(){return this.formData.normOfTime?.[0]??0},set(e){this.formData.normOfTime[0]=e}},normOfTime1:{get(){return this.formData.normOfTime?.[1]??0},set(e){this.formData.normOfTime[1]=e}},normOfTime2:{get(){return this.formData.normOfTime?.[2]??0},set(e){this.formData.normOfTime[2]=e}},normOfTime3:{get(){return this.formData.normOfTime?.[3]??0},set(e){this.formData.normOfTime[3]=e}}},data(){return{useExistingMileage:!1,removalModal:!1}},methods:{async submit(){const e={id:this.formData.date,date:this.formData.date,dailyTime:this.formData.dailyTime,qtys:[this.qty0,this.qty1,this.qty2,this.qty3],normOfTime:[this.normOfTime0,this.normOfTime1,this.normOfTime2,this.normOfTime3]};this.formData.id?this.$emit("update",this.formData.id,e):this.$emit("save",e)},remove(){this.$emit("remove",this.formData.id)},closeForm(){this.form=!1},triggerRemovalModal(e){this.removalModal=e}}};const $=(0,M.Z)(U,[["render",q],["__scopeId","data-v-05633e61"]]);var C=$,I=a(3197),R={name:"MonthStats",components:{WorkResultsForm:C,WorkResultsGrid:I.Z},data(){return{items:[],formData:{qtys:[],normOfTime:[]},showForm:!1}},computed:{prevMonth(){const e=p()(this.$route.params.id+"-01");return e.subtract(1,"month").format("YYYY-MM")},nextMonth(){const e=p()(this.$route.params.id+"-01");return e.add(1,"month").format("YYYY-MM")},totalDays(){return this.items.length},averagePercentage(){return 0}},mounted(){this.getItems(this.$route.params.id)},beforeRouteUpdate(e,t,a){this.getItems(e.params.id),a()},methods:{getItems(e){v.Z.get(`/api/work-results/${e}`).then((e=>{this.items=e.data}))},async save(e){await v.Z.post("/api/daily-info",e).then((()=>{this.getItems(this.$route.params.id),this.triggerForm(!1)})).catch((e=>{console.log(e)})).finally((()=>{}))},async update(e,t){await v.Z.put(`/api/daily-info/${e}`,t).then((()=>{this.getItems(this.$route.params.id),this.triggerForm(!1)})).catch((e=>{console.log(e)})).finally((()=>{}))},async remove(e){await v.Z["delete"](`/api/daily-info/${e}`).then((()=>{this.getItems(this.$route.params.id),this.triggerForm(!1)})).catch((e=>{console.log(e.response.data)})).finally((()=>{}))},editItem(e){this.setFormData(e),this.triggerForm(!0)},setFormData(e){this.formData=e},triggerForm(e){this.showForm=e,e||this.setFormData({qtys:[],normOfTime:[]})}}};const S=(0,M.Z)(R,[["render",f],["__scopeId","data-v-07d9b360"]]);var Y=S}}]);
//# sourceMappingURL=912.ddfc6044.js.map
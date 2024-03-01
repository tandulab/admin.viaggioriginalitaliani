import{a1 as C,a3 as N,a4 as U,o as B,E as I,y,f as D,G as A,a5 as k,a as K,J as L,g as z,a6 as H,_ as P,r as p,M as E,h as u,P as j,w as l,l as h,j as s,X as S,t as g,i as m,O as V,N as T,S as G,k as x}from"../index11580.js";const J={name:"OrdersTable",methods:{formatPrettyDate:C,formatDataFromPrettyDate:N,formatDataAndHourFromUnixTimestamps:U},setup(){B(()=>{n.value={first:0,rows:t.value.rows,sortField:null,sortOrder:null,filters:_.value},I.register("myfilter",(r,M)=>r===M),v()});const c=y(!0),o=D(()=>d.allOrders),O=D(()=>d.getTotalOrders),t=y(),_=y({global:{value:null,matchMode:"like"},users_email:{value:"",matchMode:"like"},created_at:{value:"",matchMode:"like"},order_items_valid_until:{value:[],matchMode:"range_date"}}),n=y();y([{label:"My Filter",value:"myfilter"}]);const f=A(),d=k(),w=K();function v(){c.value=!0;let r=new Map;r=L(_,r),r.set("page",n.value.page+1),r.set("per_page",n.value.rows),setTimeout(()=>{b(r)},Math.random()*1e3+250)}const F=function(r){return H(r)},b=async function(r){await d.fetchAllOrders(r).then(()=>{c.value=!1}).catch(M=>{z(w,M)})};return{isLoading:c,filters:_,dt:t,getOrderName:F,showSidebar:function(r){f.setDetailType("orders",!1,"Dettaglio ordine",r.id,!1,!1),f.updateSidebar(!0)},onPage:r=>{n.value=r,v()},onFilter:()=>{n.value.page=0,n.value.filters=_.value,v()},orders:o,totalOrders:O}}};const R=x("i",{class:"pi audio-icon"},null,-1);function X(c,o,O,t,_,n){const f=p("InputText"),d=p("Column"),w=p("Calendar"),v=p("Button"),F=p("DataTable"),b=E("tooltip");return u(),j(F,{value:t.orders,"total-records":t.totalOrders,rows:30,lazy:!0,paginator:!0,loading:t.isLoading,filters:t.filters,"onUpdate:filters":o[1]||(o[1]=e=>t.filters=e),onPage:o[2]||(o[2]=e=>t.onPage(e)),onFilter:o[3]||(o[3]=e=>t.onFilter()),filterDisplay:"row",stripedRows:"",ref:"dt"},{empty:l(()=>[h(" Nessun ordine trovato. ")]),default:l(()=>[s(d,{header:"Email utente",field:"users_email",filterMatchMode:"contains",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{filter:l(({filterModel:e,filterCallback:a})=>[s(f,{modelValue:e.value,"onUpdate:modelValue":i=>e.value=i,onKeydown:S(i=>a(),["enter"]),type:"text",placeholder:"Filtra per email"},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),body:l(({data:e})=>[h(g(e.user.email),1)]),_:1}),s(d,{header:"Data",field:"created_at",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{filter:l(({filterModel:e,filterCallback:a})=>[s(w,{inputId:"dateformat",modelValue:e.value,"onUpdate:modelValue":i=>e.value=i,dateFormat:"dd/mm/yy",onKeydown:S(i=>a(),["enter"]),manualInput:!1,placeholder:"Filtra per data",onDateSelect:i=>a()},null,8,["modelValue","onUpdate:modelValue","onKeydown","onDateSelect"])]),body:l(({data:e})=>[h(g(n.formatDataAndHourFromUnixTimestamps(e.created_at)),1)]),_:1}),s(d,{id:"my-id",header:"Prodotti",field:"Prodotti"},{body:l(({data:e})=>[(u(!0),m(T,null,V(e.order_items,a=>(u(),m("div",{key:a,class:"truncate-text"},[R,h(" "+g(t.getOrderName(a)),1)]))),128))]),_:1}),s(d,{header:"Data di scadenza",field:"order_items_valid_until",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{filter:l(({filterModel:e,filterCallback:a})=>[s(w,{selectionMode:"range",inputId:"dateformat",modelValue:t.filters.order_items_valid_until.value,"onUpdate:modelValue":o[0]||(o[0]=i=>t.filters.order_items_valid_until.value=i),dateFormat:"dd/mm/yy",placeholder:"Filtra per data","hide-on-range-selection":!0,"manual-input":!1,onHide:()=>{t.filters.order_items_valid_until.value&&t.filters.order_items_valid_until.value[0]&&t.filters.order_items_valid_until.value[1]&&a()}},null,8,["modelValue","onHide"])]),body:l(({data:e})=>[(u(!0),m(T,null,V(e.order_items,a=>(u(),m("div",{key:a},g(a.valid_until?n.formatPrettyDate(a.valid_until):"-"),1))),128))]),default:l(()=>[h("> ")]),_:1}),s(d,{header:""},{body:l(({data:e})=>[G(s(v,{type:"button",onClick:a=>t.showSidebar(e),"aria-haspopup":"true","aria-controls":"overlay_menu",class:"mr-3",icon:"pi pi-arrow-right",text:"",rounded:""},null,8,["onClick"]),[[b,"Modifica",void 0,{top:!0}]])]),_:1})]),_:1},8,["value","total-records","loading","filters"])}const q=P(J,[["render",X]]),Q={components:{OrdersTable:q},setup(){const c=k();return{totalOrders:D(()=>c.getTotalOrders)}}},W={class:"flex justify-content-between align-items-center"},Y={key:0},Z={key:1};function $(c,o,O,t,_,n){const f=p("OrdersTable");return u(),m(T,null,[x("div",W,[x("h1",null,[t.totalOrders==1?(u(),m("span",Y,"1 Ordine")):(u(),m("span",Z,g(t.totalOrders)+" Ordini",1))])]),s(f)],64)}const te=P(Q,[["render",$]]);export{te as default};

import{o as q,E as H,T as N,G as P,f as L,A as Q,B as $,z as J,H as X,a as R,y as x,g as B,K as Y,L as Z,_ as V,r as y,M as ee,h as a,i as l,j as i,w as c,k as u,l as M,t as h,N as k,O as T,Q as te,q as z,P as se,R as oe,S as ae,b as ne,p as le}from"../index93692.js";const re={setup(){q(()=>{d.value=!0,e.value={first:0,rows:S.value.rows,sortField:null,sortOrder:null,filters:b.value},H.register("myfilter",(t,_)=>t===_),v(),E(),O(),K(),W()});const g=N(),n=P(),w=L(()=>g.status),o=Q(),p=$(),C=J(),m=X(),r=L(()=>g.responseBundle),f=R(),S=x(),F=x(),b=x({global:{value:null,matchMode:"like"}}),d=x(!0),e=x(),s=x(0);function v(){var _;d.value=!0;let t=new Map;(_=b.value.global)!=null&&_.value&&t.set("it_title_like",b.value.global.value),t.set("page",e.value.page+1),t.set("per_page",e.value.rows),setTimeout(()=>{A(t)},Math.random()*1e3+250)}const A=async function(t){await g.fetchAllBundles(t).then(()=>{d.value=!1}).catch(_=>{d.value=!1,B(f,_)})},D=t=>{e.value=t,v()},G=t=>{e.value=t,v()},j=()=>{e.value.page=0,e.value.filters=b.value,v()},I=function(t){n.setDetailType("bundle",!1,"Dettaglio pacchetto",t.id,!0,!0),n.updateSidebar(!0)},U=function(t){return t!=null&&t.cluster?t.cluster:""},E=async function(){let t=new Map;await o.fetchAllCategories(t).then(()=>{d.value=!1}).catch(_=>{d.value=!1,B(f,_)})},K=async function(){let t=new Map;await p.fetchAllGuides(t).then(()=>{d.value=!1}).catch(_=>{d.value=!1,B(f,_)})},O=async function(){await C.fetchAllTags().then(()=>{d.value=!1}).catch(t=>{d.value=!1,B(f,t)})},W=async function(){await m.fetchAllLanguages().catch(t=>{B(f,t)})};return{dt:S,responseBundles:r,filters:b,loading:d,totalRecords:s,lazyParams:e,currentBundle:F,status:w,onPage:D,onSort:G,onFilter:j,showSidebar:I,loadLazyData:v,getRowClass:U,prettyStatus:Y,formatDataFromUnixTimestamps:Z}},components:{}};const ie={class:"bundle-table"},ce={class:"flex justify-content-between align-items-center"},ue={class:"p-input-icon-left w-full mr-3 py-2"},de=u("i",{class:"pi pi-search"},null,-1),fe={class:"flex flex-column line-height-3"},_e={class:"flex flex-column line-height-3"},he={class:"flex align-items-center line-height-3"},pe=["alt"],ge=u("div",{class:"text-right w-full"},"Prezzo",-1),me={key:0,class:"text-right"},ve={key:0},ye={key:1,class:"flex flex-column"},be={class:"line-through"},we={key:1,class:"text-right"},Se={class:"flex align-items-center mb-1"};function xe(g,n,w,o,p,C){const m=y("InputText"),r=y("Column"),f=y("Avatar"),S=y("Badge"),F=y("Button"),b=y("DataTable"),d=ee("tooltip");return a(),l("div",ie,[i(b,{value:o.responseBundles.bundles,totalRecords:o.responseBundles.total,lazy:!0,paginator:!0,rows:30,filters:o.filters,"onUpdate:filters":n[1]||(n[1]=e=>o.filters=e),ref:"dt",dataKey:"id",loading:o.loading,onPage:n[2]||(n[2]=e=>o.onPage(e)),onSort:n[3]||(n[3]=e=>o.onSort(e)),onFilter:n[4]||(n[4]=e=>o.onFilter()),removableSort:"",stripedRows:"",rowClass:o.getRowClass},{header:c(()=>[u("div",ce,[u("span",ue,[de,i(m,{modelValue:o.filters.global.value,"onUpdate:modelValue":n[0]||(n[0]=e=>o.filters.global.value=e),placeholder:"Ricerca per nome",class:"border-none w-full",onChange:o.loadLazyData},null,8,["modelValue","onChange"])])])]),empty:c(()=>[M(" Nessun pacchetto trovato. ")]),default:c(()=>[i(r,{field:"name",header:"Nome"},{body:c(({data:e})=>{var s;return[M(h((s=e==null?void 0:e.flat_translations.it)==null?void 0:s.title),1)]}),_:1}),i(r,{header:"Location",filterMatchMode:"contains",ref:"location",field:"location"},{body:c(({data:e})=>[M(h(e.location||"-"),1)]),_:1},512),i(r,{header:"Audio itinerari"},{body:c(({data:e})=>[u("div",null,[(a(!0),l(k,null,T(e.audio_guides,s=>{var v,A;return a(),l("div",{key:s.id,class:"truncate"},h((A=(v=s.flat_translations)==null?void 0:v.it)==null?void 0:A.title),1)}),128))])]),_:1}),i(r,{header:"Categoria",ref:"category",field:"category"},{body:c(({data:e})=>[u("div",fe,[(a(!0),l(k,null,T(e.categories,s=>(a(),l("span",{key:s.id},h(s.flat_translations.it),1))),128))])]),_:1},512),i(r,{header:"Tag",ref:"tag",field:"tag"},{body:c(({data:e})=>[u("div",_e,[(a(!0),l(k,null,T(e.tags,s=>(a(),l("span",{key:s.id},h(s.flat_translations.it),1))),128))])]),_:1},512),i(r,{header:"Lingue",filterMatchMode:"contains",ref:"location",field:"location"},{body:c(({data:e})=>[u("div",he,[(a(!0),l(k,null,T(e.languages,s=>(a(),l("span",{key:s.id},[u("img",{alt:s.code,src:te,class:z(`mr-2 flag flag-${s.code}`),style:{width:"18px"}},null,10,pe)]))),128))])]),_:1},512),i(r,{ref:"price",field:"price",style:{"min-width":"90px"}},{header:c(()=>[ge]),body:c(({data:e})=>[e.price&&e.price!="0"?(a(),l("div",me,[e.discounted_price?(a(),l("div",ye,[u("span",be,"€ "+h((e.price/100).toFixed(2)),1),u("b",null,"€ "+h((+e.discounted_price/100).toFixed(2)),1)])):(a(),l("span",ve,"€ "+h((+e.price/100).toFixed(2)),1))])):(a(),l("div",we,"€ 0"))]),_:1},512),i(r,{header:"Guida",ref:"guide",field:"guide"},{body:c(({data:e})=>[(a(!0),l(k,null,T(e.guides,s=>(a(),l("div",{key:s.id},[u("div",Se,[s&&s.image_url?(a(),se(f,{key:0,image:s.image_url.url,class:"mr-2",shape:"circle"},null,8,["image"])):oe("",!0),M(" "+h((s==null?void 0:s.full_name)||"-"),1)])]))),128))]),_:1},512),i(r,{header:"Stato",filterMatchMode:"contains",ref:"enabled",field:"enabled"},{body:c(({data:e})=>[i(S,{value:o.prettyStatus(e.status),class:z(["px-4 border-round-lg h-auto font-medium line-height-4",e.status])},null,8,["value","class"])]),_:1},512),i(r,{header:"",style:{width:"4rem"}},{body:c(({data:e})=>[ae(i(F,{type:"button",onClick:s=>o.showSidebar(e),"aria-haspopup":"true","aria-controls":"overlay_menu",class:"mr-3",icon:"pi pi-arrow-right",text:"",rounded:""},null,8,["onClick"]),[[d,"Modifica",void 0,{top:!0}]])]),_:1})]),_:1},8,["value","totalRecords","filters","loading","rowClass"])])}const Be=V(re,[["render",xe]]),Ce={setup(){const g=N(),{showLoader:n,hideLoader:w}=ne(),o=R(),p=P(),C=L(()=>g.getTotalBundles),m=L(()=>p.syncBtn),r=function(){p.setDetailType("bundle",!0,"Nuovo pacchetto",null),p.updateSidebar(!0),p.setShowDetail(!0)},f=async function(){n(),await g.syncWordpress(p.typeId+"").then(()=>{w()}).catch(S=>{w(),B(o,S)})};return le(m,()=>{m.value&&f()}),{totalBundles:C,showSidebar:r}},components:{BundlesTable:Be}},ke={class:"flex justify-content-between align-items-center"},Te={class:""},Ae={key:0},Me={key:1};function Le(g,n,w,o,p,C){const m=y("Button"),r=y("BundlesTable");return a(),l("div",null,[u("div",ke,[u("h1",Te,[o.totalBundles==1?(a(),l("span",Ae," 1 Pacchetto")):(a(),l("span",Me,h(o.totalBundles)+" Pacchetti",1))]),i(m,{label:"Aggiungi",onClick:n[0]||(n[0]=f=>o.showSidebar()),class:"mb-3",rounded:"",outlined:"",icon:"pi pi-plus"})]),i(r)])}const ze=V(Ce,[["render",Le]]);export{ze as default};

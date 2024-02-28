import{o as P,y as b,z as q,A as $,B as U,C as z,f as S,D as I,_ as O,r as v,h as i,i as d,k as l,j as n,w as m,t as x,E as ie,G as E,H as re,a as K,J as de,g as T,K as ce,L as ue,M as fe,N as B,O as R,P as j,l as D,Q as _e,q as N,R as me,S as ge,b as pe,p as ve}from"../index93692.js";const he={props:["filters"],setup(h,s){P(()=>{h.filters&&(f.value=Object.assign({},h.filters))});const f=b({}),t=q(),A=$(),w=U(),g=z(),p=S(()=>A.responseCategories),r=S(()=>t.allTags),G=S(()=>w.allGuides),_=S(()=>g.status);return{form:f,categories:p,tags:r,guides:G,statuses:_,prettyCategoryGroup:I,saveData:function(){},toggleCancel:function(){},resetFilter:function(){f.value=null,s.emit("onSaveFilter",f.value)}}}},ye={class:"filter-component"},be={class:"col-12 flex m-0 p-0 align-items-center justify-content-between filter-header"},xe=l("h2",{class:"m-0"},"Filtri",-1),Se={class:"formgrid grid mt-4 flex flex-column px-2"},Ae={class:"field"},we=l("label",{for:"category"},"Categoria",-1),Ce={class:"flex align-items-center"},Ge={class:"field flex flex-column"},ke=l("label",{for:"tag"},"Tag",-1),Te={class:"field flex flex-column"},Me=l("label",{for:"guide"},"Guida",-1),Fe={class:"field flex flex-column"},Ve=l("label",{for:"status"},"Stato",-1);function Le(h,s,f,t,A,w){const g=v("Button"),p=v("Dropdown");return i(),d("div",ye,[l("div",be,[xe,l("div",null,[n(g,{label:"Annulla",text:"",rounded:"",class:"mr-3",size:"small",onClick:s[0]||(s[0]=r=>t.resetFilter())}),n(g,{label:"Applica",outlined:"",rounded:"",size:"small",onClick:s[1]||(s[1]=r=>h.$emit("onSaveFilter",t.form))})])]),l("div",Se,[l("div",Ae,[we,n(p,{id:"category",modelValue:t.form.category_id,"onUpdate:modelValue":s[2]||(s[2]=r=>t.form.category_id=r),options:t.categories,optionLabel:"flat_translations.it",optionGroupLabel:"group",optionGroupChildren:"items",placeholder:"",class:"w-full"},{optiongroup:m(r=>[l("div",Ce,[l("div",null,x(t.prettyCategoryGroup(r.option.group)),1)])]),_:1},8,["modelValue","options"])]),l("div",Ge,[ke,n(p,{id:"tag",modelValue:t.form.tag,"onUpdate:modelValue":s[3]||(s[3]=r=>t.form.tag=r),options:t.tags,optionLabel:"flat_translations.it",placeholder:""},null,8,["modelValue","options"])]),l("div",Te,[Me,n(p,{id:"guide",modelValue:t.form.guide,"onUpdate:modelValue":s[4]||(s[4]=r=>t.form.guide=r),options:t.guides,optionLabel:"full_name",placeholder:""},null,8,["modelValue","options"])]),l("div",Fe,[Ve,n(p,{id:"status",modelValue:t.form.status,"onUpdate:modelValue":s[5]||(s[5]=r=>t.form.status=r),options:t.statuses,optionLabel:"name",optionValue:"value",placeholder:""},null,8,["modelValue","options"])])])])}const Be=O(he,[["render",Le]]),Re={setup(){P(()=>{u.value=!0,y.value={first:0,rows:M.value.rows,sortField:null,sortOrder:null,filters:a.value},ie.register("myfilter",(o,c)=>o===c),k(),Q(),Y(),X(),ne()});const h=z(),s=E(),f=$(),t=U(),A=q(),w=re(),g=S(()=>h.status),p=S(()=>h.responseAudioGuide),r=S(()=>f.responseCategories),G=S(()=>t.allGuides),_=S(()=>A.allTags),C=K(),M=b(),L=b(),F=b(),V=b(),e=b(),a=b({global:{value:null,matchMode:"like"},name:{value:"",matchMode:"like"},category_id:{value:"",matchMode:"eq"},created_at:{value:"",matchMode:"like"},tag:{value:"",matchMode:"eq"},location:{value:"",matchMode:"eq"},guide:{value:"",matchMode:"eq"},status:{value:"",matchMode:"eq"}}),u=b(!0),y=b(),W=b(0),H=b([{label:"My Filter",value:"myfilter"}]);function k(){var c;u.value=!0;let o=new Map;(c=a.value.global)!=null&&c.value&&o.set("it_title_like",a.value.global.value),o=de(a,o),o.delete("location_eq"),o.delete("global"),o.set("page",y.value.page+1),o.set("per_page",y.value.rows),y.value.sortField&&(y.value.sortOrder==1?o.set("sorted_by",y.value.sortField+"_asc"):o.set("sorted_by",y.value.sortField+"_desc")),setTimeout(()=>{J(o)},Math.random()*1e3+250)}const J=async function(o){await h.fetchAllAudioGuides(o).then(()=>{u.value=!1}).catch(c=>{u.value=!1,T(C,c)})},Q=async function(){let o=new Map;await f.fetchAllCategories(o).then(()=>{u.value=!1}).catch(c=>{u.value=!1,T(C,c)})},X=async function(){let o=new Map;await t.fetchAllGuides(o).then(()=>{u.value=!1}).catch(c=>{u.value=!1,T(C,c)})},Y=async function(){await A.fetchAllTags().then(()=>{u.value=!1}).catch(o=>{u.value=!1,T(C,o)})},Z=o=>{y.value=o,k()},ee=o=>{y.value=o,k()},te=function(o){s.setDetailType("audio_tour",!1,"Dettaglio audio itinerario",o.id,!0,!0),s.updateSidebar(!0)},oe=function(o){return o!=null&&o.cluster?o.cluster:""},se=o=>{F.value.toggle(o)},le=o=>{if(e.value=0,V.value=Object.assign({},o),o)for(const[c,dt]of Object.entries(o))c=="category_id"||c=="tag"||c=="guide"?a.value[c].value=o[c].id:a.value[c].value=o[c],e.value+=1;k(),F.value.hide()},ae=o=>{delete V.value[o],k(),e.value-=1},ne=async function(){await w.fetchAllLanguages().catch(o=>{T(C,o)})};return{dt:M,responseAudioGuides:p,filters:a,loading:u,totalRecords:W,lazyParams:y,matchModes:H,currentAudioGuide:L,status:g,categories:r,guides:G,tags:_,op:F,form_filter:V,num_filter:e,onPage:Z,onSort:ee,showSidebar:te,loadLazyData:k,getRowClass:oe,prettyCategoryGroup:I,toggleFilters:se,prettyStatus:ce,onSaveFilter:le,onRemove:ae,formatDataFromUnixTimestamps:ue}},components:{AudioGuideFilters:Be}};const De={class:"user-table"},ze={class:"w-full mb-3 chip-filters"},je={class:"flex justify-content-between align-items-center"},Oe={class:"p-input-icon-left w-full mr-3"},Ne={class:"flex align-items-center py-2"},Pe=l("i",{class:"pi pi-search"},null,-1),qe={class:"flex flex-column line-height-3"},$e={class:"flex flex-column line-height-3"},Ue={class:"flex align-items-center line-height-3"},Ie=["alt"],Ee={key:0,class:"text-right"},Ke={key:0},We={key:1,class:"flex flex-column"},He={class:"line-through"},Je={key:1,class:"text-right"},Qe=l("div",{class:"flex justify-content-center w-full"},"Durata",-1),Xe={class:"flex justify-content-center"},Ye={key:0},Ze={key:1},et={class:"flex align-items-center"};function tt(h,s,f,t,A,w){const g=v("Chip"),p=v("InputText"),r=v("AudioGuideFilters"),G=v("OverlayPanel"),_=v("Column"),C=v("Avatar"),M=v("Badge"),L=v("Button"),F=v("DataTable"),V=fe("tooltip");return i(),d("div",De,[l("div",ze,[(i(!0),d(B,null,R(t.form_filter,(e,a)=>{var u;return i(),d("span",{key:a},[e.full_name?(i(),j(g,{key:0,label:e.full_name,removable:"",class:"capitalize mr-2",onRemove:y=>t.onRemove(a)},null,8,["label","onRemove"])):(i(),j(g,{key:1,label:e.flat_translations?(u=e.flat_translations)==null?void 0:u.it:e,removable:"",class:"capitalize mr-2",onRemove:y=>t.onRemove(a)},null,8,["label","onRemove"]))])}),128))]),n(F,{value:t.responseAudioGuides.audio_guides,totalRecords:t.responseAudioGuides.total,lazy:!0,paginator:!0,rows:30,ref:"dt",dataKey:"id",loading:t.loading,onPage:s[2]||(s[2]=e=>t.onPage(e)),onSort:s[3]||(s[3]=e=>t.onSort(e)),removableSort:"",stripedRows:"",rowClass:t.getRowClass},{header:m(()=>[l("div",je,[l("div",Oe,[l("span",Ne,[Pe,n(p,{modelValue:t.filters.global.value,"onUpdate:modelValue":s[0]||(s[0]=e=>t.filters.global.value=e),placeholder:"Ricerca per nome",class:"border-none w-full pl-2",onChange:t.loadLazyData},null,8,["modelValue","onChange"])])])]),n(G,{ref:"op",class:"p-2",style:{"min-width":"24rem"},dismissable:!1},{default:m(()=>[n(r,{onOnSaveFilter:s[1]||(s[1]=e=>t.onSaveFilter(e)),filters:t.form_filter},null,8,["filters"])]),_:1},512)]),empty:m(()=>[D(" Nessun audio itinerario trovato. ")]),default:m(()=>[n(_,{field:"name",header:"Nome",ref:"name",sortable:!1},{body:m(({data:e})=>{var a,u;return[D(x(((u=(a=e==null?void 0:e.translations.it)==null?void 0:a.title)==null?void 0:u.text)||"-"),1)]}),_:1},512),n(_,{header:"Luogo",filterMatchMode:"contains",ref:"location",field:"location"},{body:m(({data:e})=>[D(x(e.location||"-"),1)]),_:1},512),n(_,{header:"Categoria",ref:"category",field:"category"},{body:m(({data:e})=>[l("div",qe,[(i(!0),d(B,null,R(e.categories,a=>(i(),d("span",{key:a.id},x(a.flat_translations.it),1))),128))])]),_:1},512),n(_,{header:"Tag",ref:"tag",field:"tag"},{body:m(({data:e})=>[l("div",$e,[(i(!0),d(B,null,R(e.tags,a=>(i(),d("span",{key:a.id},x(a.flat_translations.it),1))),128))])]),_:1},512),n(_,{header:"Lingue",filterMatchMode:"contains",ref:"location",field:"location"},{body:m(({data:e})=>[l("div",Ue,[(i(!0),d(B,null,R(e.languages,a=>(i(),d("span",{key:a.id},[l("img",{alt:a.code,src:_e,class:N(`mr-2 flag flag-${a.code}`),style:{width:"18px"}},null,10,Ie)]))),128))])]),_:1},512),n(_,{header:"Prezzo",ref:"price",field:"price",style:{"min-width":"90px"}},{body:m(({data:e})=>[e.price&&e.price!="0"?(i(),d("div",Ee,[e.discounted_price?(i(),d("div",We,[l("span",He,"€ "+x((e.price/100).toFixed(2)),1),l("b",null,"€ "+x((+e.discounted_price/100).toFixed(2)),1)])):(i(),d("span",Ke,"€ "+x((+e.price/100).toFixed(2)),1))])):(i(),d("div",Je,"€ 0"))]),_:1},512),n(_,{header:"",filterMatchMode:"contains",ref:"location",field:"location"},{header:m(()=>[Qe]),body:m(({data:e})=>[l("div",Xe,[e.duration?(i(),d("span",Ye,x(e.duration)+" min",1)):(i(),d("span",Ze,"-"))])]),_:1},512),n(_,{header:"Guida",ref:"guide",field:"guide"},{body:m(({data:e})=>{var a;return[l("div",et,[e.guide&&e.guide.image_url?(i(),j(C,{key:0,image:e.guide.image_url.url,class:"mr-2",shape:"circle"},null,8,["image"])):me("",!0),D(" "+x(((a=e.guide)==null?void 0:a.full_name)||"-"),1)])]}),_:1},512),n(_,{header:"Stato",filterMatchMode:"contains",ref:"enabled",field:"enabled"},{body:m(({data:e})=>[n(M,{value:t.prettyStatus(e.status),class:N(["px-4 border-round-lg h-auto font-medium line-height-4",e.status])},null,8,["value","class"])]),_:1},512),n(_,{header:"",style:{width:"4rem"}},{body:m(({data:e})=>[ge(n(L,{type:"button",onClick:a=>t.showSidebar(e),"aria-haspopup":"true","aria-controls":"overlay_menu",class:"mr-3",icon:"pi pi-arrow-right",text:"",rounded:""},null,8,["onClick"]),[[V,"Modifica",void 0,{top:!0}]])]),_:1})]),_:1},8,["value","totalRecords","loading","rowClass"])])}const ot=O(Re,[["render",tt]]),st={setup(){const h=z(),s=S(()=>h.getTotalAudioGuide),f=E(),t=S(()=>f.syncBtn),A=z(),{showLoader:w,hideLoader:g}=pe(),p=K(),r=function(){f.setDetailType("audio_tour",!0,"Nuovo audio itinerario",null),f.updateSidebar(!0),f.setShowDetail(!0)},G=async function(){w(),await A.syncWordpress(f.typeId+"").then(()=>{g()}).catch(_=>{g(),T(p,_)})};return ve(t,()=>{t.value&&G()}),{totalAudioGuide:s,showSidebar:r}},components:{AudioGuideTable:ot}},lt={class:"flex justify-content-between align-items-center"},at={class:""},nt={key:0},it={key:1};function rt(h,s,f,t,A,w){const g=v("Button"),p=v("AudioGuideTable");return i(),d("div",null,[l("div",lt,[l("h1",at,[t.totalAudioGuide==1?(i(),d("span",nt," 1 Audio itinerario")):(i(),d("span",it,x(t.totalAudioGuide)+" Audio itinerari",1))]),n(g,{label:"Aggiungi",onClick:s[0]||(s[0]=r=>t.showSidebar()),class:"mb-3",rounded:"",outlined:"",icon:"pi pi-plus"})]),n(p)])}const ut=O(st,[["render",rt]]);export{ut as default};

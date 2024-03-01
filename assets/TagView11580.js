import{o as Q,z as j,G as W,f as S,V as tt,a as et,y as i,b as at,g as C,p as nt,L as ot,s as V,Y as st,Z as lt,_ as K,r as T,M as it,h as p,i as _,j as r,w as u,R as B,N as rt,k as R,l as ct,X as I,t as U,S as dt,P as ut}from"../index11580.js";const mt={setup(){Q(()=>{h.value=!0,x()});const c=j(),d=W(),v=S(()=>c.status),n=tt(),m=S(()=>c.responseTags),b=S(()=>n.submitDialog),o=et(),f=i(),k=i(),w=i([]),E=i(),e=i([]),a=i(),{showLoader:g,hideLoader:y}=at(),$=i({global:{value:null,matchMode:"like"},name:{value:"",matchMode:"like"}}),h=i(!0),z=i(),L=i(0),A=i([{label:"My Filter",value:"myfilter"}]),x=async function(){h.value=!0,await c.fetchAllTags().then(()=>{h.value=!1,O()}).catch(t=>{h.value=!1,C(o,t)})},O=function(){e.value=m.value.tags,F()},P=function(t){d.setDetailType("tag",!1,"Dettaglio tag",t.id),d.updateSidebar(!0)},G=async function(t){g();const s={formData:H(t)};await c.createTag(s).then(()=>{V(o,{message:"Il tag è stato creato correttamente",error:!1}),x(),y()}).catch(l=>{y(),C(o,l)})},H=function(t){const s=new FormData,l=Object.assign({},t);return l.translations.it.name=t.translations.it.name.text,l.translations.en.name=t.translations.en.name.text,lt(s,l,"tag"),s},X=t=>{if(t.data.translations.it.name.text==""||t.data.translations.en.name.text==""){V(o,{message:"Inserisci entrambe le traduzioni",error:!0});return}t.data.id=="-1"?(F(),G(t.data)):Y(t.data)},Y=function(t){st(t,t).then(()=>{V(o,{message:"Tag aggiornato correttamente",error:!1})})},Z=t=>{var s;if(t.data.id=="-1")t.data.translations.it.name.text="",t.data.translations.en.name.text="";else if((s=m==null?void 0:m.value)!=null&&s.tags){const l=m.value.tags.find(D=>D.id===t.data.id);l&&(t.data.translations.it.name.text=l.translations.it.name.text,t.data.translations.en.name.text=l.translations.en.name.text)}},F=function(){if(e.value){let t={id:"-1",translations:{it:{name:{text:""}},en:{name:{text:""}}}};e.value.unshift(t),w.value.push(t)}},q=function(t,s){var D,M,N;a.value=s.data.id;let l="Sei sicuro di voler eliminare il tag";(N=(M=(D=s==null?void 0:s.data)==null?void 0:D.translations.it)==null?void 0:M.name)!=null&&N.text&&(l+="<b> "+s.data.translations.it.name.text+"</b>"),l+=" ?",n.setDialog("Elimina tag","Elimina tag","Annulla",l),n.setDynamicDialogVisibility(!0)},J=function(){g(),a.value&&c.deleteTag(a.value).then(()=>{y(),V(o,{message:"Il tag è stato eliminato",error:!1}),x()}).catch(t=>{y(),C(o,t)})};return nt(b,t=>{b.value&&J()}),{dt:f,responseTags:m,filters:$,loading:h,totalRecords:L,lazyParams:z,matchModes:A,currentTag:k,status:v,editingRows:w,tmp_val:E,tmp_tags:e,showSidebar:P,fetchAllTags:x,onRowEditSave:X,onRowEditCancel:Z,confirmDeleteTag:q,formatDataFromUnixTimestamps:ot}},components:{}};const gt=R("div",{class:"flex w-full"},null,-1),pt={key:0,class:"tag-table col-8"},_t={key:0},ft={key:1},ht={key:0},Tt={key:1};function vt(c,d,v,n,m,b){const o=T("InputText"),f=T("Column"),k=T("Button"),w=T("DataTable"),E=it("tooltip");return p(),_(rt,null,[gt,n.tmp_tags?(p(),_("div",pt,[r(w,{value:n.tmp_tags,lazy:!0,ref:"dt",loading:n.loading,stripedRows:"",editingRows:n.editingRows,"onUpdate:editingRows":d[0]||(d[0]=e=>n.editingRows=e),editMode:"row",onRowEditSave:n.onRowEditSave,onRowEditCancel:n.onRowEditCancel},{empty:u(()=>[ct(" Nessun tag trovato. ")]),default:u(()=>[r(f,{field:"name",header:"Nome IT",filterMatchMode:"contains",ref:"name_it",sortable:!0},{filter:u(({filterModel:e,filterCallback:a})=>[r(o,{type:"text",modelValue:e.value,"onUpdate:modelValue":g=>e.value=g,onKeydown:I(g=>a(),["enter"]),class:"p-column-filter",placeholder:"Filtra per nome"},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),body:u(({data:e})=>{var a;return[e.translations.it?(p(),_("span",_t,U((a=e==null?void 0:e.translations.it.name)==null?void 0:a.text),1)):(p(),_("span",ft,"-"))]}),editor:u(({data:e})=>[r(o,{modelValue:e.translations.it.name.text,"onUpdate:modelValue":a=>e.translations.it.name.text=a},null,8,["modelValue","onUpdate:modelValue"])]),_:1},512),r(f,{field:"name_en",header:"Nome EN",filterMatchMode:"contains",ref:"name_en"},{filter:u(({filterModel:e,filterCallback:a})=>[r(o,{type:"text",modelValue:e.value,"onUpdate:modelValue":g=>e.value=g,onKeydown:I(g=>a(),["enter"]),class:"p-column-filter",placeholder:"Filtra per nome"},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),body:u(({data:e})=>{var a;return[e.translations.en?(p(),_("span",ht,U((a=e==null?void 0:e.translations.en.name)==null?void 0:a.text),1)):(p(),_("span",Tt,"-"))]}),editor:u(({data:e})=>[r(o,{modelValue:e.translations.en.name.text,"onUpdate:modelValue":a=>e.translations.en.name.text=a},null,8,["modelValue","onUpdate:modelValue"])]),_:1},512),r(f,{rowEditor:!0,style:{width:"10%","min-width":"8rem"},bodyStyle:"text-align:center"}),r(f,null,{body:u(e=>[e.index!=0?dt((p(),ut(k,{key:0,type:"button",onClick:a=>n.confirmDeleteTag(a,e),"aria-haspopup":"true","aria-controls":"overlay_menu",class:"p-button-text p-button-rounded text-400",icon:"pi pi-trash"},null,8,["onClick"])),[[E,"Elimina",void 0,{top:!0}]]):B("",!0)]),_:1})]),_:1},8,["value","loading","editingRows","onRowEditSave","onRowEditCancel"])])):B("",!0)],64)}const bt=K(mt,[["render",vt]]),wt={setup(){const c=j(),d=i();return{totalTags:S(()=>c.getTotalTags),tagsTable:d,showSidebar:function(){d.value.addTag()}}},components:{TagsTable:bt}},yt={class:"flex justify-content-between align-items-center"},xt={class:""};function Dt(c,d,v,n,m,b){const o=T("TagsTable");return p(),_("div",null,[R("div",yt,[R("h1",xt,[R("span",null,U(n.totalTags)+" Tag",1)])]),r(o,{ref:"tagsTable"},null,512)])}const St=K(wt,[["render",Dt]]);export{St as default};

import{o as A,E as B,a2 as M,G as k,A as V,B as z,z as N,f as m,a as P,y as i,g as R,D as j,L as U,_ as x,r as _,M as E,h,i as w,j as s,w as g,k as p,l as I,S as O,C as $,t as K}from"../index93692.js";const q={setup(){A(()=>{f.value=!0,l.value={first:0,rows:b.value.rows,sortField:null,sortOrder:null,filters:d.value},B.register("myfilter",(o,u)=>o===u),S()});const c=M(),t=k(),r=V(),e=z(),L=N(),T=m(()=>c.responseLocalStory),v=m(()=>r.responseCategories),n=m(()=>e.allGuides),y=m(()=>L.allTags),C=P(),b=i(),a=i(),d=i({global:{value:null,matchMode:"like"}}),f=i(!0),l=i(),D=i(0),F=i([{label:"My Filter",value:"myfilter"}]);function S(){var u;f.value=!0;let o=new Map;(u=d.value.global)!=null&&u.value&&o.set("title_like",d.value.global.value),o.delete("global"),o.set("page",l.value.page+1),o.set("per_page",l.value.rows),l.value.sortField&&(l.value.sortOrder==1?o.set("sorted_by",l.value.sortField+"_asc"):o.set("sorted_by",l.value.sortField+"_desc")),setTimeout(()=>{G(o)},Math.random()*1e3+250)}const G=async function(o){await c.fetchAllLocalStories(o).then(()=>{f.value=!1}).catch(u=>{f.value=!1,R(C,u)})};return{dt:b,responseLocalStories:T,filters:d,loading:f,totalRecords:D,lazyParams:l,matchModes:F,currentLocalStory:a,status,categories:v,guides:n,tags:y,onPage:o=>{l.value=o,S()},onSort:o=>{l.value=o,S()},onFilter:()=>{l.value.page=0,l.value.filters=d.value,S()},showSidebar:function(o){t.setDetailType("local_story",!1,"Dettaglio storia locale",o.id,!0,!0),t.updateSidebar(!0)},loadLazyData:S,prettyCategoryGroup:j,formatDataFromUnixTimestamps:U}},components:{}};const H={class:"user-table"},J={class:"flex justify-content-between align-items-center"},Q={class:"p-input-icon-left w-full mr-3 py-2"},W=p("i",{class:"pi pi-search"},null,-1),X=["href"];function Y(c,t,r,e,L,T){const v=_("InputText"),n=_("Column"),y=_("Button"),C=_("DataTable"),b=E("tooltip");return h(),w("div",H,[s(C,{value:e.responseLocalStories.local_stories,totalRecords:e.responseLocalStories.total,lazy:!0,paginator:!0,rows:30,filters:e.filters,"onUpdate:filters":t[1]||(t[1]=a=>e.filters=a),ref:"dt",dataKey:"id",loading:e.loading,onPage:t[2]||(t[2]=a=>e.onPage(a)),onSort:t[3]||(t[3]=a=>e.onSort(a)),onFilter:t[4]||(t[4]=a=>e.onFilter()),removableSort:"",stripedRows:""},{header:g(()=>[p("div",J,[p("span",Q,[W,s(v,{modelValue:e.filters.global.value,"onUpdate:modelValue":t[0]||(t[0]=a=>e.filters.global.value=a),placeholder:"Ricerca per titolo",class:"border-none w-full",onChange:e.loadLazyData},null,8,["modelValue","onChange"])])])]),empty:g(()=>[I(" Nessuna storia locale trovata. ")]),default:g(()=>[s(n,{field:"title",header:"Titolo",ref:"title"},null,512),s(n,{field:"video_url",header:"Video",ref:"video_url"},{body:g(({data:a})=>[p("a",{href:"https://vimeo.com/"+a.video_url,target:"_blank"},"Link video",8,X)]),_:1},512),s(n,{header:"",style:{width:"4rem"}},{body:g(({data:a})=>[O(s(y,{type:"button",onClick:d=>e.showSidebar(a),"aria-haspopup":"true","aria-controls":"overlay_menu",class:"mr-3",icon:"pi pi-arrow-right",text:"",rounded:""},null,8,["onClick"]),[[b,"Modifica",void 0,{top:!0}]])]),_:1})]),_:1},8,["value","totalRecords","filters","loading"])])}const Z=x(q,[["render",Y]]),ee={setup(){const c=$(),t=m(()=>c.getTotalAudioGuide),r=k();return{totalAudioGuide:t,showSidebar:function(){r.setDetailType("local_story",!0,"Nuova storia locale",null),r.updateSidebar(!0),r.setShowDetail(!0)}}},components:{LocalStoryTable:Z}},te={class:"flex justify-content-between align-items-center"},oe={class:""},ae={key:0},le={key:1};function se(c,t,r,e,L,T){const v=_("Button"),n=_("LocalStoryTable");return h(),w("div",null,[p("div",te,[p("h1",oe,[e.totalAudioGuide==1?(h(),w("span",ae," 1 Storia Locale")):(h(),w("span",le,K(e.totalAudioGuide)+" Storie locali",1))]),s(v,{label:"Aggiungi",onClick:t[0]||(t[0]=y=>e.showSidebar()),class:"mb-3",rounded:"",outlined:""})]),s(n)])}const ue=x(ee,[["render",se]]);export{ue as default};

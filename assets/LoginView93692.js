import{d as b,o as x,u as g,a as y,b as V,c as L,e as h,f as v,I as P,F as S,g as k,_ as B,r as t,h as C,i as W,j as e,w as l,k as a,l as $}from"../index93692.js";import{L as F}from"./Logo93692.js";import{P as I}from"./PasswordWithValidation93692.js";const T=b({name:"LoginView",setup(){x(()=>{o.clearUser()});const o=g(),m=y(),{showLoader:d,hideLoader:n}=V(),u=L({email:h().required().email().label("Email obbligatoria"),password:h().required().label("Password obbligatoria")}),_=v(()=>o.user);return{schema:u,currentUser:_,onSubmit:async function(s,r){const c={email:s.email,password:s.password};d(),await o.login(c).then(async()=>{n(),r.resetForm()}).catch(i=>{n(),k(m,i)})}}},components:{Logo:F,InputTextWithValidation:P,PasswordWithValidation:I,Form:S}});const E={class:"flex justify-content-center align-items-center mt-4 sm:h-screen sm:mt-0 login"},U={class:"m-2 text-center"},j=a("h1",{class:"mb-3 mt-0 text-center"},"Accedi al profilo",-1),N=a("h2",{class:"text-center font-normal mb-3"}," Benvenuto! Inserisci la tua email e la password ",-1),q={class:"w-full flex justify-content-start cursor-pointer text-color-secondary m-0"};function A(o,m,d,n,u,_){const p=t("Logo"),s=t("InputTextWithValidation"),r=t("PasswordWithValidation"),c=t("router-link"),i=t("Button"),f=t("Form"),w=t("Card");return C(),W("div",E,[e(w,{class:"py-4 px-3"},{content:l(()=>[a("div",U,[e(p)]),j,N,e(f,{"validation-schema":o.schema,onSubmit:o.onSubmit,class:"flex flex-column"},{default:l(()=>[e(s,{name:"email",label:"Email",type:"text"}),e(r,{name:"password",label:"Password",type:"password"}),a("div",q,[e(c,{to:"/password-dimenticata",class:"text-color-secondary"},{default:l(()=>[$("Password dimenticata?")]),_:1})]),e(i,{label:"Entra",type:"submit",class:"mt-5 mb-3"})]),_:1},8,["validation-schema","onSubmit"])]),_:1})])}const G=B(T,[["render",A]]);export{G as default};

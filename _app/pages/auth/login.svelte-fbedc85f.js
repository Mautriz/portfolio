import{S as U,i as q,n as B,D as G,e as h,j as D,t as I,c as b,a as E,m as N,g as T,d as o,b as L,f as S,H as m,K as M,L as O,M as H,E as K,F as P,G as R,s as w,x as z,u as A,N as J}from"../../chunks/vendor-91f90b4a.js";import{g as Q}from"../../chunks/navigation-51f4a605.js";import{u as W}from"../../chunks/userStore-cca7217f.js";import"../../chunks/singletons-12a22614.js";function X(l){let r,n,i,_,u,p,c,d,t,k,v=l[0].username+"",$,f,g,V;const y=l[3].default,s=G(y,l,l[2],null);return{c(){r=h("div"),n=h("form"),i=h("input"),_=D(),u=h("button"),p=I("Submit"),c=D(),s&&s.c(),d=D(),t=h("div"),k=I("Current username: "),$=I(v),this.h()},l(e){r=b(e,"DIV",{});var a=E(r);n=b(a,"FORM",{});var j=E(n);i=b(j,"INPUT",{type:!0}),_=N(j),u=b(j,"BUTTON",{class:!0});var F=E(u);p=T(F,"Submit"),F.forEach(o),j.forEach(o),a.forEach(o),c=N(e),s&&s.l(e),d=N(e),t=b(e,"DIV",{});var C=E(t);k=T(C,"Current username: "),$=T(C,v),C.forEach(o),this.h()},h(){L(i,"type","text"),L(u,"class","btn btn-primary")},m(e,a){S(e,r,a),m(r,n),m(n,i),M(i,l[0].username),m(n,_),m(n,u),m(u,p),S(e,c,a),s&&s.m(e,a),S(e,d,a),S(e,t,a),m(t,k),m(t,$),f=!0,g||(V=[O(i,"input",l[4]),O(n,"submit",H(l[5]))],g=!0)},p(e,[a]){a&1&&i.value!==e[0].username&&M(i,e[0].username),s&&s.p&&(!f||a&4)&&K(s,y,e,e[2],f?R(y,e[2],a,null):P(e[2]),null),(!f||a&1)&&v!==(v=e[0].username+"")&&w($,v)},i(e){f||(z(s,e),f=!0)},o(e){A(s,e),f=!1},d(e){e&&o(r),e&&o(c),s&&s.d(e),e&&o(d),e&&o(t),g=!1,J(V)}}}const se=!0;function Y(l,r,n){let{$$slots:i={},$$scope:_}=r,u={username:""};const p=t=>{W.set({username:t,id:t}),Q("/app")};function c(){u.username=this.value,n(0,u)}const d=()=>p(u.username);return l.$$set=t=>{"$$scope"in t&&n(2,_=t.$$scope)},[u,p,_,i,c,d]}class ae extends U{constructor(r){super();q(this,r,Y,X,B,{})}}export{ae as default,se as prerender};
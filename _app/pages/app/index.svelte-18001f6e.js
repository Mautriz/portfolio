import{S as E,i as j,n as k,e as v,j as d,t as h,c as $,m as b,a as y,g as I,d as m,b as N,f as c,K as O,H as S,L as w,s as P,I as V,D as A,h as C,l as F,o as G,E as H,F as K,G as L,x as J,u as q,v as T,O as U,P as z}from"../../chunks/vendor-e2d1cc57.js";import{u as B}from"../../chunks/userStore-ce74356b.js";const M={frate:"assurdo"};function Q(n){let s,l,i,r,a,u,_=M.frate+"",f,o,t;return{c(){s=v("input"),l=d(),i=v("div"),r=h(n[0]),a=d(),u=v("div"),f=h(_),this.h()},l(e){s=$(e,"INPUT",{type:!0,name:!0}),l=b(e),i=$(e,"DIV",{});var p=y(i);r=I(p,n[0]),p.forEach(m),a=b(e),u=$(e,"DIV",{});var D=y(u);f=I(D,_),D.forEach(m),this.h()},h(){N(s,"type","text"),N(s,"name","name-input")},m(e,p){c(e,s,p),O(s,n[0]),c(e,l,p),c(e,i,p),S(i,r),c(e,a,p),c(e,u,p),S(u,f),o||(t=w(s,"input",n[1]),o=!0)},p(e,[p]){p&1&&s.value!==e[0]&&O(s,e[0]),p&1&&P(r,e[0])},i:V,o:V,d(e){e&&m(s),e&&m(l),e&&m(i),e&&m(a),e&&m(u),o=!1,t()}}}function R(n,s,l){let{ciao:i="prova"}=s;function r(){i=this.value,l(0,i)}return n.$$set=a=>{"ciao"in a&&l(0,i=a.ciao)},[i,r]}class W extends E{constructor(s){super();j(this,s,R,Q,k,{ciao:0})}}function X(n){let s,l=JSON.stringify(n[1])+"",i,r,a,u,_;a=new W({props:{ciao:"ciao sono io"}});const f=n[3].default,o=A(f,n,n[2],null);return{c(){s=v("div"),i=h(l),r=d(),C(a.$$.fragment),u=d(),o&&o.c()},l(t){s=$(t,"DIV",{});var e=y(s);i=I(e,l),e.forEach(m),r=b(t),F(a.$$.fragment,t),u=b(t),o&&o.l(t)},m(t,e){c(t,s,e),S(s,i),n[4](s),c(t,r,e),G(a,t,e),c(t,u,e),o&&o.m(t,e),_=!0},p(t,[e]){(!_||e&2)&&l!==(l=JSON.stringify(t[1])+"")&&P(i,l),o&&o.p&&(!_||e&4)&&H(o,f,t,t[2],_?L(f,t[2],e,null):K(t[2]),null)},i(t){_||(J(a.$$.fragment,t),J(o,t),_=!0)},o(t){q(a.$$.fragment,t),q(o,t),_=!1},d(t){t&&m(s),n[4](null),t&&m(r),T(a,t),t&&m(u),o&&o.d(t)}}}function Y(n,s,l){let i;U(n,B,f=>l(1,i=f));let{$$slots:r={},$$scope:a}=s,u;function _(f){z[f?"unshift":"push"](()=>{u=f,l(0,u)})}return n.$$set=f=>{"$$scope"in f&&l(2,a=f.$$scope)},[u,i,a,r,_]}class x extends E{constructor(s){super();j(this,s,Y,X,k,{})}}export{x as default};

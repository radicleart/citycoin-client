function S(){}function cn(n,t){for(const e in t)n[e]=t[e];return n}function B(n){return n()}function q(){return Object.create(null)}function p(n){n.forEach(B)}function I(n){return typeof n=="function"}function on(n,t){return n!=n?t==t:n!==t||n&&typeof n=="object"||typeof n=="function"}let g;function un(n,t){return g||(g=document.createElement("a")),g.href=t,n===g.href}function z(n){return Object.keys(n).length===0}function F(n,...t){if(n==null)return S;const e=n.subscribe(...t);return e.unsubscribe?()=>e.unsubscribe():e}function ln(n,t,e){n.$$.on_destroy.push(F(t,e))}let v=!1;function H(){v=!0}function G(){v=!1}function J(n,t,e,r){for(;n<t;){const o=n+(t-n>>1);e(o)<=r?n=o+1:t=o}return n}function K(n){if(n.hydrate_init)return;n.hydrate_init=!0;let t=n.childNodes;if(n.nodeName==="HEAD"){const i=[];for(let u=0;u<t.length;u++){const f=t[u];f.claim_order!==void 0&&i.push(f)}t=i}const e=new Int32Array(t.length+1),r=new Int32Array(t.length);e[0]=-1;let o=0;for(let i=0;i<t.length;i++){const u=t[i].claim_order,f=(o>0&&t[e[o]].claim_order<=u?o+1:J(1,o,y=>t[e[y]].claim_order,u))-1;r[i]=e[f]+1;const a=f+1;e[a]=i,o=Math.max(a,o)}const s=[],c=[];let l=t.length-1;for(let i=e[o]+1;i!=0;i=r[i-1]){for(s.push(t[i-1]);l>=i;l--)c.push(t[l]);l--}for(;l>=0;l--)c.push(t[l]);s.reverse(),c.sort((i,u)=>i.claim_order-u.claim_order);for(let i=0,u=0;i<c.length;i++){for(;u<s.length&&c[i].claim_order>=s[u].claim_order;)u++;const f=u<s.length?s[u]:null;n.insertBefore(c[i],f)}}function Q(n,t){if(v){for(K(n),(n.actual_end_child===void 0||n.actual_end_child!==null&&n.actual_end_child.parentNode!==n)&&(n.actual_end_child=n.firstChild);n.actual_end_child!==null&&n.actual_end_child.claim_order===void 0;)n.actual_end_child=n.actual_end_child.nextSibling;t!==n.actual_end_child?(t.claim_order!==void 0||t.parentNode!==n)&&n.insertBefore(t,n.actual_end_child):n.actual_end_child=t.nextSibling}else(t.parentNode!==n||t.nextSibling!==null)&&n.appendChild(t)}function sn(n,t,e){v&&!e?Q(n,t):(t.parentNode!==n||t.nextSibling!=e)&&n.insertBefore(t,e||null)}function R(n){n.parentNode.removeChild(n)}function W(n){return document.createElement(n)}function k(n){return document.createTextNode(n)}function an(){return k(" ")}function fn(){return k("")}function _n(n,t,e,r){return n.addEventListener(t,e,r),()=>n.removeEventListener(t,e,r)}function dn(n){return function(t){return t.preventDefault(),n.call(this,t)}}function hn(n,t,e){e==null?n.removeAttribute(t):n.getAttribute(t)!==e&&n.setAttribute(t,e)}function U(n){return Array.from(n.childNodes)}function V(n){n.claim_info===void 0&&(n.claim_info={last_index:0,total_claimed:0})}function L(n,t,e,r,o=!1){V(n);const s=(()=>{for(let c=n.claim_info.last_index;c<n.length;c++){const l=n[c];if(t(l)){const i=e(l);return i===void 0?n.splice(c,1):n[c]=i,o||(n.claim_info.last_index=c),l}}for(let c=n.claim_info.last_index-1;c>=0;c--){const l=n[c];if(t(l)){const i=e(l);return i===void 0?n.splice(c,1):n[c]=i,o?i===void 0&&n.claim_info.last_index--:n.claim_info.last_index=c,l}}return r()})();return s.claim_order=n.claim_info.total_claimed,n.claim_info.total_claimed+=1,s}function X(n,t,e,r){return L(n,o=>o.nodeName===t,o=>{const s=[];for(let c=0;c<o.attributes.length;c++){const l=o.attributes[c];e[l.name]||s.push(l.name)}s.forEach(c=>o.removeAttribute(c))},()=>r(t))}function mn(n,t,e){return X(n,t,e,W)}function Y(n,t){return L(n,e=>e.nodeType===3,e=>{const r=""+t;if(e.data.startsWith(r)){if(e.data.length!==r.length)return e.splitText(r.length)}else e.data=r},()=>k(t),!0)}function pn(n){return Y(n," ")}function yn(n,t){t=""+t,n.wholeText!==t&&(n.data=t)}function gn(n,t){n.value=t==null?"":t}function $n(n,t,e,r){e===null?n.style.removeProperty(t):n.style.setProperty(t,e,r?"important":"")}function bn(n,t){for(let e=0;e<n.options.length;e+=1){const r=n.options[e];if(r.__value===t){r.selected=!0;return}}n.selectedIndex=-1}function xn(n){const t=n.querySelector(":checked")||n.options[0];return t&&t.__value}function vn(n,t=document.body){return Array.from(t.querySelectorAll(n))}let m;function h(n){m=n}function w(){if(!m)throw new Error("Function called outside component initialization");return m}function wn(n){w().$$.on_mount.push(n)}function En(n){w().$$.after_update.push(n)}function An(n,t){return w().$$.context.set(n,t),t}function Nn(n){return w().$$.context.get(n)}const d=[],M=[],b=[],T=[],O=Promise.resolve();let A=!1;function P(){A||(A=!0,O.then(D))}function Sn(){return P(),O}function N(n){b.push(n)}const E=new Set;let $=0;function D(){const n=m;do{for(;$<d.length;){const t=d[$];$++,h(t),Z(t.$$)}for(h(null),d.length=0,$=0;M.length;)M.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];E.has(e)||(E.add(e),e())}b.length=0}while(d.length);for(;T.length;)T.pop()();A=!1,E.clear(),h(n)}function Z(n){if(n.fragment!==null){n.update(),p(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(N)}}const x=new Set;let _;function kn(){_={r:0,c:[],p:_}}function jn(){_.r||p(_.c),_=_.p}function nn(n,t){n&&n.i&&(x.delete(n),n.i(t))}function Cn(n,t,e,r){if(n&&n.o){if(x.has(n))return;x.add(n),_.c.push(()=>{x.delete(n),r&&(e&&n.d(1),r())}),n.o(t)}else r&&r()}function qn(n,t){const e={},r={},o={$$scope:1};let s=n.length;for(;s--;){const c=n[s],l=t[s];if(l){for(const i in c)i in l||(r[i]=1);for(const i in l)o[i]||(e[i]=l[i],o[i]=1);n[s]=l}else for(const i in c)o[i]=1}for(const c in r)c in e||(e[c]=void 0);return e}function Mn(n){return typeof n=="object"&&n!==null?n:{}}function Tn(n){n&&n.c()}function Bn(n,t){n&&n.l(t)}function tn(n,t,e,r){const{fragment:o,on_mount:s,on_destroy:c,after_update:l}=n.$$;o&&o.m(t,e),r||N(()=>{const i=s.map(B).filter(I);c?c.push(...i):p(i),n.$$.on_mount=[]}),l.forEach(N)}function en(n,t){const e=n.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function rn(n,t){n.$$.dirty[0]===-1&&(d.push(n),P(),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function Ln(n,t,e,r,o,s,c,l=[-1]){const i=m;h(n);const u=n.$$={fragment:null,ctx:null,props:s,update:S,not_equal:o,bound:q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(i?i.$$.context:[])),callbacks:q(),dirty:l,skip_bound:!1,root:t.target||i.$$.root};c&&c(u.root);let f=!1;if(u.ctx=e?e(n,t.props||{},(a,y,...j)=>{const C=j.length?j[0]:y;return u.ctx&&o(u.ctx[a],u.ctx[a]=C)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](C),f&&rn(n,a)),y}):[],u.update(),f=!0,p(u.before_update),u.fragment=r?r(u.ctx):!1,t.target){if(t.hydrate){H();const a=U(t.target);u.fragment&&u.fragment.l(a),a.forEach(R)}else u.fragment&&u.fragment.c();t.intro&&nn(n.$$.fragment),tn(n,t.target,t.anchor,t.customElement),G(),D()}h(i)}class On{$destroy(){en(this,1),this.$destroy=S}$on(t,e){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(e),()=>{const o=r.indexOf(e);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!z(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}export{Mn as A,en as B,cn as C,Sn as D,S as E,F,p as G,I as H,ln as I,un as J,Q as K,_n as L,dn as M,vn as N,Nn as O,gn as P,xn as Q,N as R,On as S,bn as T,an as a,sn as b,pn as c,jn as d,fn as e,nn as f,kn as g,R as h,Ln as i,An as j,En as k,W as l,mn as m,U as n,wn as o,hn as p,$n as q,k as r,on as s,Cn as t,Y as u,yn as v,Tn as w,Bn as x,tn as y,qn as z};
import{c as g,r as n,j as p,a as I}from"./index-f6AKZqSw.js";import{P as S}from"./index-C7GxcLW-.js";import{M as O,u as w,P as L,b as T,c as D,L as U}from"./proxy-ctWCwzDP.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],re=g("bell",q);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],se=g("chart-column",H);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],ie=g("dollar-sign",V);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],ae=g("navigation",B);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],ce=g("users",F);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],le=g("zap",K);var Z="Separator",z="horizontal",G=["horizontal","vertical"],j=n.forwardRef((o,r)=>{const{decorative:e,orientation:t=z,...f}=o,l=W(t)?t:z,s=e?{role:"none"}:{"aria-orientation":l==="vertical"?l:void 0,role:"separator"};return p.jsx(S.div,{"data-orientation":l,...s,...f,ref:r})});j.displayName=Z;function W(o){return G.includes(o)}var J=j;function de({className:o,orientation:r="horizontal",decorative:e=!0,...t}){return p.jsx(J,{"data-slot":"separator-root",decorative:e,orientation:r,className:I("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",o),...t})}class Q extends n.Component{getSnapshotBeforeUpdate(r){const e=this.props.childRef.current;if(e&&r.isPresent&&!this.props.isPresent){const t=this.props.sizeRef.current;t.height=e.offsetHeight||0,t.width=e.offsetWidth||0,t.top=e.offsetTop,t.left=e.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function X({children:o,isPresent:r}){const e=n.useId(),t=n.useRef(null),f=n.useRef({width:0,height:0,top:0,left:0}),{nonce:l}=n.useContext(O);return n.useInsertionEffect(()=>{const{width:d,height:s,top:m,left:i}=f.current;if(r||!t.current||!d||!s)return;t.current.dataset.motionPopId=e;const c=document.createElement("style");return l&&(c.nonce=l),document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${e}"] {
            position: absolute !important;
            width: ${d}px !important;
            height: ${s}px !important;
            top: ${m}px !important;
            left: ${i}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[r]),p.jsx(Q,{isPresent:r,childRef:t,sizeRef:f,children:n.cloneElement(o,{ref:t})})}const Y=({children:o,initial:r,isPresent:e,onExitComplete:t,custom:f,presenceAffectsLayout:l,mode:d})=>{const s=w(ee),m=n.useId(),i=n.useCallback(h=>{s.set(h,!0);for(const x of s.values())if(!x)return;t&&t()},[s,t]),c=n.useMemo(()=>({id:m,initial:r,isPresent:e,custom:f,onExitComplete:i,register:h=>(s.set(h,!1),()=>s.delete(h))}),l?[Math.random(),i]:[e,i]);return n.useMemo(()=>{s.forEach((h,x)=>s.set(x,!1))},[e]),n.useEffect(()=>{!e&&!s.size&&t&&t()},[e]),d==="popLayout"&&(o=p.jsx(X,{isPresent:e,children:o})),p.jsx(L.Provider,{value:c,children:o})};function ee(){return new Map}const k=o=>o.key||"";function _(o){const r=[];return n.Children.forEach(o,e=>{n.isValidElement(e)&&r.push(e)}),r}const ue=({children:o,custom:r,initial:e=!0,onExitComplete:t,presenceAffectsLayout:f=!0,mode:l="sync",propagate:d=!1})=>{const[s,m]=T(d),i=n.useMemo(()=>_(o),[o]),c=d&&!s?[]:i.map(k),h=n.useRef(!0),x=n.useRef(i),C=w(()=>new Map),[$,b]=n.useState(i),[v,N]=n.useState(i);D(()=>{h.current=!1,x.current=i;for(let u=0;u<v.length;u++){const a=k(v[u]);c.includes(a)?C.delete(a):C.get(a)!==!0&&C.set(a,!1)}},[v,c.length,c.join("-")]);const M=[];if(i!==$){let u=[...i];for(let a=0;a<v.length;a++){const y=v[a],E=k(y);c.includes(E)||(u.splice(a,0,y),M.push(y))}l==="wait"&&M.length&&(u=M),N(_(u)),b(i);return}const{forceRender:R}=n.useContext(U);return p.jsx(p.Fragment,{children:v.map(u=>{const a=k(u),y=d&&!s?!1:i===v||c.includes(a),E=()=>{if(C.has(a))C.set(a,!0);else return;let P=!0;C.forEach(A=>{A||(P=!1)}),P&&(R==null||R(),N(x.current),d&&(m==null||m()),t&&t())};return p.jsx(Y,{isPresent:y,initial:!h.current||e?void 0:!1,custom:y?void 0:r,presenceAffectsLayout:f,mode:l,onExitComplete:y?void 0:E,children:u},a)})})};export{ue as A,re as B,se as C,ie as D,ae as N,de as S,ce as U,le as Z};

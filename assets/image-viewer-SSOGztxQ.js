import{g as B,b as me,h as F,m as pe,i as ue,j as Ie,k as _e,a as ge,E as O,l as ze,c as Le,d as Se,z as Ce,n as Ee,r as Ne,o as xe,_ as we,p as V,w as ye,q as Oe,t as Te}from"./base-JcAzoHhP.js";import{z as ne,S as ve,r as h,U as $e,s as Ae,m as g,q as ce,V as be,i as he,o as b,j as de,d as f,w as S,b as y,n as v,u as e,G as fe,B as Re,D as C,c as x,F as ae,P as Be,H as Ve,A as Me,C as Ye,E as te,T as De,W as Pe,X as Xe,I as He,Y as Fe,x as je}from"./index-aK1Kfd9B.js";import{u as ke,a as We,E as R,g as Ke}from"./index-P9tSkw_b.js";import{k as qe}from"./objects-GcUgjAe2.js";import{t as ie}from"./throttle-we6QHUgP.js";import{u as Ge}from"./index-bBUfWIUi.js";const Ze=(c,k)=>{if(!B||!c||!k)return!1;const l=c.getBoundingClientRect();let w;return k instanceof Element?w=k.getBoundingClientRect():w={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},l.top<w.bottom&&l.bottom>w.top&&l.right>w.left&&l.left<w.right},Ue=me({urlList:{type:F(Array),default:()=>pe([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:F(String)}}),Je={close:()=>!0,switch:c=>ue(c),rotate:c=>ue(c)},Qe=["src","crossorigin"],et=ne({name:"ElImageViewer"}),tt=ne({...et,props:Ue,emits:Je,setup(c,{expose:k,emit:l}){var w;const d=c,p={CONTAIN:{name:"contain",icon:ve(Ie)},ORIGINAL:{name:"original",icon:ve(_e)}},{t:se}=ke(),r=ge("image-viewer"),{nextZIndex:M}=We(),E=h(),N=h([]),T=$e(),I=h(!0),i=h(d.initialIndex),$=Ae(p.CONTAIN),s=h({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),Y=h((w=d.zIndex)!=null?w:M()),oe=g(()=>{const{urlList:a}=d;return a.length<=1}),j=g(()=>i.value===0),W=g(()=>i.value===d.urlList.length-1),D=g(()=>d.urlList[i.value]),le=g(()=>[r.e("btn"),r.e("prev"),r.is("disabled",!d.infinite&&j.value)]),K=g(()=>[r.e("btn"),r.e("next"),r.is("disabled",!d.infinite&&W.value)]),P=g(()=>{const{scale:a,deg:n,offsetX:o,offsetY:_,enableTransition:L}=s.value;let m=o/a,z=_/a;switch(n%360){case 90:case-270:[m,z]=[z,-m];break;case 180:case-180:[m,z]=[-m,-z];break;case 270:case-90:[m,z]=[-z,m];break}const A={transform:`scale(${a}) rotate(${n}deg) translate(${m}px, ${z}px)`,transition:L?"transform .3s":""};return $.value.name===p.CONTAIN.name&&(A.maxWidth=A.maxHeight="100%"),A});function X(){q(),l("close")}function re(){const a=ie(o=>{switch(o.code){case R.esc:d.closeOnPressEscape&&X();break;case R.space:Q();break;case R.left:ee();break;case R.up:u("zoomIn");break;case R.right:t();break;case R.down:u("zoomOut");break}}),n=ie(o=>{const _=o.deltaY||o.deltaX;u(_<0?"zoomIn":"zoomOut",{zoomRate:d.zoomRate,enableTransition:!1})});T.run(()=>{V(document,"keydown",a),V(document,"wheel",n)})}function q(){T.stop()}function G(){I.value=!1}function Z(a){I.value=!1,a.target.alt=se("el.image.error")}function U(a){if(I.value||a.button!==0||!E.value)return;s.value.enableTransition=!1;const{offsetX:n,offsetY:o}=s.value,_=a.pageX,L=a.pageY,m=ie(A=>{s.value={...s.value,offsetX:n+A.pageX-_,offsetY:o+A.pageY-L}}),z=V(document,"mousemove",m);V(document,"mouseup",()=>{z()}),a.preventDefault()}function J(){s.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function Q(){if(I.value)return;const a=qe(p),n=Object.values(p),o=$.value.name,L=(n.findIndex(m=>m.name===o)+1)%a.length;$.value=p[a[L]],J()}function H(a){const n=d.urlList.length;i.value=(a+n)%n}function ee(){j.value&&!d.infinite||H(i.value-1)}function t(){W.value&&!d.infinite||H(i.value+1)}function u(a,n={}){if(I.value)return;const{minScale:o,maxScale:_}=d,{zoomRate:L,rotateDeg:m,enableTransition:z}={zoomRate:d.zoomRate,rotateDeg:90,enableTransition:!0,...n};switch(a){case"zoomOut":s.value.scale>o&&(s.value.scale=Number.parseFloat((s.value.scale/L).toFixed(3)));break;case"zoomIn":s.value.scale<_&&(s.value.scale=Number.parseFloat((s.value.scale*L).toFixed(3)));break;case"clockwise":s.value.deg+=m,l("rotate",s.value.deg);break;case"anticlockwise":s.value.deg-=m,l("rotate",s.value.deg);break}s.value.enableTransition=z}return ce(D,()=>{be(()=>{const a=N.value[0];a!=null&&a.complete||(I.value=!0)})}),ce(i,a=>{J(),l("switch",a)}),he(()=>{var a,n;re(),(n=(a=E.value)==null?void 0:a.focus)==null||n.call(a)}),k({setActiveItem:H}),(a,n)=>(b(),de(Pe,{to:"body",disabled:!a.teleported},[f(De,{name:"viewer-fade",appear:""},{default:S(()=>[y("div",{ref_key:"wrapper",ref:E,tabindex:-1,class:v(e(r).e("wrapper")),style:fe({zIndex:Y.value})},[y("div",{class:v(e(r).e("mask")),onClick:n[0]||(n[0]=Re(o=>a.hideOnClickModal&&X(),["self"]))},null,2),C(" CLOSE "),y("span",{class:v([e(r).e("btn"),e(r).e("close")]),onClick:X},[f(e(O),null,{default:S(()=>[f(e(ze))]),_:1})],2),C(" ARROW "),e(oe)?C("v-if",!0):(b(),x(ae,{key:0},[y("span",{class:v(e(le)),onClick:ee},[f(e(O),null,{default:S(()=>[f(e(Le))]),_:1})],2),y("span",{class:v(e(K)),onClick:t},[f(e(O),null,{default:S(()=>[f(e(Se))]),_:1})],2)],64)),C(" ACTIONS "),y("div",{class:v([e(r).e("btn"),e(r).e("actions")])},[y("div",{class:v(e(r).e("actions__inner"))},[f(e(O),{onClick:n[1]||(n[1]=o=>u("zoomOut"))},{default:S(()=>[f(e(Ce))]),_:1}),f(e(O),{onClick:n[2]||(n[2]=o=>u("zoomIn"))},{default:S(()=>[f(e(Ee))]),_:1}),y("i",{class:v(e(r).e("actions__divider"))},null,2),f(e(O),{onClick:Q},{default:S(()=>[(b(),de(Be(e($).icon)))]),_:1}),y("i",{class:v(e(r).e("actions__divider"))},null,2),f(e(O),{onClick:n[3]||(n[3]=o=>u("anticlockwise"))},{default:S(()=>[f(e(Ne))]),_:1}),f(e(O),{onClick:n[4]||(n[4]=o=>u("clockwise"))},{default:S(()=>[f(e(xe))]),_:1})],2)],2),C(" CANVAS "),y("div",{class:v(e(r).e("canvas"))},[(b(!0),x(ae,null,Ve(a.urlList,(o,_)=>Me((b(),x("img",{ref_for:!0,ref:L=>N.value[_]=L,key:o,src:o,style:fe(e(P)),class:v(e(r).e("img")),crossorigin:a.crossorigin,onLoad:G,onError:Z,onMousedown:U},null,46,Qe)),[[Ye,_===i.value]])),128))],2),te(a.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var at=we(tt,[["__file","image-viewer.vue"]]);const nt=ye(at),st=me({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:F([String,Object])},previewSrcList:{type:F(Array),default:()=>pe([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:F(String)}}),ot={load:c=>c instanceof Event,error:c=>c instanceof Event,switch:c=>ue(c),close:()=>!0,show:()=>!0},lt=["src","loading","crossorigin"],rt={key:0},it=ne({name:"ElImage",inheritAttrs:!1}),ut=ne({...it,props:st,emits:ot,setup(c,{emit:k}){const l=c;let w="";const{t:d}=ke(),p=ge("image"),se=Xe(),r=Ge(),M=h(),E=h(!1),N=h(!0),T=h(!1),I=h(),i=h(),$=B&&"loading"in HTMLImageElement.prototype;let s,Y;const oe=g(()=>[p.e("inner"),D.value&&p.e("preview"),N.value&&p.is("loading")]),j=g(()=>se.style),W=g(()=>{const{fit:t}=l;return B&&t?{objectFit:t}:{}}),D=g(()=>{const{previewSrcList:t}=l;return Array.isArray(t)&&t.length>0}),le=g(()=>{const{previewSrcList:t,initialIndex:u}=l;let a=u;return u>t.length-1&&(a=0),a}),K=g(()=>l.loading==="eager"?!1:!$&&l.loading==="lazy"||l.lazy),P=()=>{B&&(N.value=!0,E.value=!1,M.value=l.src)};function X(t){N.value=!1,E.value=!1,k("load",t)}function re(t){N.value=!1,E.value=!0,k("error",t)}function q(){Ze(I.value,i.value)&&(P(),U())}const G=Te(q,200,!0);async function Z(){var t;if(!B)return;await be();const{scrollContainer:u}=l;Oe(u)?i.value=u:je(u)&&u!==""?i.value=(t=document.querySelector(u))!=null?t:void 0:I.value&&(i.value=Ke(I.value)),i.value&&(s=V(i,"scroll",G),setTimeout(()=>q(),100))}function U(){!B||!i.value||!G||(s==null||s(),i.value=void 0)}function J(t){if(t.ctrlKey){if(t.deltaY<0)return t.preventDefault(),!1;if(t.deltaY>0)return t.preventDefault(),!1}}function Q(){D.value&&(Y=V("wheel",J,{passive:!1}),w=document.body.style.overflow,document.body.style.overflow="hidden",T.value=!0,k("show"))}function H(){Y==null||Y(),document.body.style.overflow=w,T.value=!1,k("close")}function ee(t){k("switch",t)}return ce(()=>l.src,()=>{K.value?(N.value=!0,E.value=!1,U(),Z()):P()}),he(()=>{K.value?Z():P()}),(t,u)=>(b(),x("div",{ref_key:"container",ref:I,class:v([e(p).b(),t.$attrs.class]),style:fe(e(j))},[E.value?te(t.$slots,"error",{key:0},()=>[y("div",{class:v(e(p).e("error"))},He(e(d)("el.image.error")),3)]):(b(),x(ae,{key:1},[M.value!==void 0?(b(),x("img",Fe({key:0},e(r),{src:M.value,loading:t.loading,style:e(W),class:e(oe),crossorigin:t.crossorigin,onClick:Q,onLoad:X,onError:re}),null,16,lt)):C("v-if",!0),N.value?(b(),x("div",{key:1,class:v(e(p).e("wrapper"))},[te(t.$slots,"placeholder",{},()=>[y("div",{class:v(e(p).e("placeholder"))},null,2)])],2)):C("v-if",!0)],64)),e(D)?(b(),x(ae,{key:2},[T.value?(b(),de(e(nt),{key:0,"z-index":t.zIndex,"initial-index":e(le),infinite:t.infinite,"zoom-rate":t.zoomRate,"min-scale":t.minScale,"max-scale":t.maxScale,"url-list":t.previewSrcList,"hide-on-click-modal":t.hideOnClickModal,teleported:t.previewTeleported,"close-on-press-escape":t.closeOnPressEscape,onClose:H,onSwitch:ee},{default:S(()=>[t.$slots.viewer?(b(),x("div",rt,[te(t.$slots,"viewer")])):C("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","min-scale","max-scale","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):C("v-if",!0)],64)):C("v-if",!0)],6))}});var ct=we(ut,[["__file","image.vue"]]);const wt=ye(ct);export{wt as E};

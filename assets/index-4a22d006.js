(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qa="158",on={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ni={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Bf=0,Cs=1,kf=2,iu=1,zf=2,gn=3,Bn=0,Rt=1,yn=2,Mn=0,Ai=1,Rs=2,Ps=3,Ls=4,Hf=5,$n=100,Gf=101,Vf=102,Ds=103,Os=104,Wf=200,jf=201,Xf=202,qf=203,xa=204,ba=205,$f=206,Yf=207,Kf=208,Zf=209,Jf=210,Qf=211,eh=212,th=213,nh=214,ih=0,rh=1,oh=2,Jr=3,ah=4,sh=5,ch=6,lh=7,$a=0,uh=1,fh=2,Nn=0,hh=1,dh=2,ph=3,mh=4,gh=5,ru=300,Ri=301,Pi=302,Ma=303,Sa=304,fo=306,Ea=1e3,Kt=1001,wa=1002,At=1003,Is=1004,Co=1005,Ht=1006,vh=1007,cr=1008,Fn=1009,_h=1010,yh=1011,Ya=1012,ou=1013,In=1014,Un=1015,Li=1016,au=1017,su=1018,Kn=1020,xh=1021,Zt=1023,bh=1024,Mh=1025,Zn=1026,Di=1027,Sh=1028,cu=1029,Eh=1030,lu=1031,uu=1033,Ro=33776,Po=33777,Lo=33778,Do=33779,Us=35840,Ns=35841,Fs=35842,Bs=35843,wh=36196,ks=37492,zs=37496,Hs=37808,Gs=37809,Vs=37810,Ws=37811,js=37812,Xs=37813,qs=37814,$s=37815,Ys=37816,Ks=37817,Zs=37818,Js=37819,Qs=37820,ec=37821,Oo=36492,tc=36494,nc=36495,Th=36283,ic=36284,rc=36285,oc=36286,fu=3e3,Jn=3001,Ah=3200,Ch=3201,hu=0,Rh=1,Vt="",mt="srgb",En="srgb-linear",Ka="display-p3",ho="display-p3-linear",Qr="linear",Je="srgb",eo="rec709",to="p3",ii=7680,ac=519,Ph=512,Lh=513,Dh=514,Oh=515,Ih=516,Uh=517,Nh=518,Fh=519,sc=35044,cc="300 es",Ta=1035,xn=2e3,no=2001;class nn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lc=1234567;const ir=Math.PI/180,lr=180/Math.PI;function Ui(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[i&255]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]).toLowerCase()}function gt(n,e,t){return Math.max(e,Math.min(t,n))}function Za(n,e){return(n%e+e)%e}function Bh(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function kh(n,e,t){return n!==e?(t-n)/(e-n):0}function rr(n,e,t){return(1-t)*n+t*e}function zh(n,e,t,i){return rr(n,e,1-Math.exp(-t*i))}function Hh(n,e=1){return e-Math.abs(Za(n,e*2)-e)}function Gh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Vh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Wh(n,e){return n+Math.floor(Math.random()*(e-n+1))}function jh(n,e){return n+Math.random()*(e-n)}function Xh(n){return n*(.5-Math.random())}function qh(n){n!==void 0&&(lc=n);let e=lc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $h(n){return n*ir}function Yh(n){return n*lr}function Aa(n){return(n&n-1)===0&&n!==0}function Kh(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function io(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Zh(n,e,t,i,r){const o=Math.cos,s=Math.sin,a=o(t/2),c=s(t/2),l=o((e+i)/2),u=s((e+i)/2),f=o((e-i)/2),d=s((e-i)/2),p=o((i-e)/2),g=s((i-e)/2);switch(r){case"XYX":n.set(a*u,c*f,c*d,a*l);break;case"YZY":n.set(c*d,a*u,c*f,a*l);break;case"ZXZ":n.set(c*f,c*d,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*p,a*l);break;case"YXY":n.set(c*p,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Mi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ca={DEG2RAD:ir,RAD2DEG:lr,generateUUID:Ui,clamp:gt,euclideanModulo:Za,mapLinear:Bh,inverseLerp:kh,lerp:rr,damp:zh,pingpong:Hh,smoothstep:Gh,smootherstep:Vh,randInt:Wh,randFloat:jh,randFloatSpread:Xh,seededRandom:qh,degToRad:$h,radToDeg:Yh,isPowerOfTwo:Aa,ceilPowerOfTwo:Kh,floorPowerOfTwo:io,setQuaternionFromProperEuler:Zh,normalize:wt,denormalize:Mi};class me{constructor(e=0,t=0){me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,i,r,o,s,a,c,l){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,s,a,c,l)}set(e,t,i,r,o,s,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=o,u[5]=c,u[6]=i,u[7]=s,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,s=i[0],a=i[3],c=i[6],l=i[1],u=i[4],f=i[7],d=i[2],p=i[5],g=i[8],v=r[0],m=r[3],h=r[6],b=r[1],_=r[4],y=r[7],x=r[2],S=r[5],E=r[8];return o[0]=s*v+a*b+c*x,o[3]=s*m+a*_+c*S,o[6]=s*h+a*y+c*E,o[1]=l*v+u*b+f*x,o[4]=l*m+u*_+f*S,o[7]=l*h+u*y+f*E,o[2]=d*v+p*b+g*x,o[5]=d*m+p*_+g*S,o[8]=d*h+p*y+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*s*u-t*a*l-i*o*u+i*a*c+r*o*l-r*s*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*s-a*l,d=a*c-u*o,p=l*o-s*c,g=t*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(r*l-u*i)*v,e[2]=(a*i-r*s)*v,e[3]=d*v,e[4]=(u*t-r*c)*v,e[5]=(r*o-a*t)*v,e[6]=p*v,e[7]=(i*c-l*t)*v,e[8]=(s*t-i*o)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,o,s,a){const c=Math.cos(o),l=Math.sin(o);return this.set(i*c,i*l,-i*(c*s+l*a)+s+e,-r*l,r*c,-r*(-l*s+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Io.makeScale(e,t)),this}rotate(e){return this.premultiply(Io.makeRotation(-e)),this}translate(e,t){return this.premultiply(Io.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Io=new He;function du(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ur(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Jh(){const n=ur("canvas");return n.style.display="block",n}const uc={};function or(n){n in uc||(uc[n]=!0,console.warn(n))}const fc=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),hc=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),_r={[En]:{transfer:Qr,primaries:eo,toReference:n=>n,fromReference:n=>n},[mt]:{transfer:Je,primaries:eo,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ho]:{transfer:Qr,primaries:to,toReference:n=>n.applyMatrix3(hc),fromReference:n=>n.applyMatrix3(fc)},[Ka]:{transfer:Je,primaries:to,toReference:n=>n.convertSRGBToLinear().applyMatrix3(hc),fromReference:n=>n.applyMatrix3(fc).convertLinearToSRGB()}},Qh=new Set([En,ho]),Ye={enabled:!0,_workingColorSpace:En,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Qh.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=_r[e].toReference,r=_r[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return _r[n].primaries},getTransfer:function(n){return n===Vt?Qr:_r[n].transfer}};function Ci(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Uo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ri;class pu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ri===void 0&&(ri=ur("canvas")),ri.width=e.width,ri.height=e.height;const i=ri.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ri}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ur("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Ci(o[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ci(t[i]/255)*255):t[i]=Ci(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ed=0;class mu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=Ui(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(No(r[s].image)):o.push(No(r[s]))}else o=No(r);i.url=o}return t||(e.images[this.uuid]=i),i}}function No(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?pu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let td=0;class Lt extends nn{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,i=Kt,r=Kt,o=Ht,s=cr,a=Zt,c=Fn,l=Lt.DEFAULT_ANISOTROPY,u=Vt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=Ui(),this.name="",this.source=new mu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Jn?mt:Vt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ru)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ea:e.x=e.x-Math.floor(e.x);break;case Kt:e.x=e.x<0?0:1;break;case wa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ea:e.y=e.y-Math.floor(e.y);break;case Kt:e.y=e.y<0?0:1;break;case wa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===mt?Jn:fu}set encoding(e){or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Jn?mt:Vt}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=ru;Lt.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,i=0,r=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,o;const c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],p=c[5],g=c[9],v=c[2],m=c[6],h=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,y=(p+1)/2,x=(h+1)/2,S=(u+d)/4,E=(f+v)/4,L=(g+m)/4;return _>y&&_>x?_<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(_),r=S/i,o=E/i):y>x?y<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(y),i=S/r,o=L/r):x<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(x),i=E/o,r=L/o),this.set(i,r,o,t),this}let b=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(f-v)/b,this.z=(d-u)/b,this.w=Math.acos((l+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nd extends nn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(or("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Jn?mt:Vt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Lt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new mu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends nd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class gu extends Lt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class id extends Lt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,o,s,a){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3];const d=o[s+0],p=o[s+1],g=o[s+2],v=o[s+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(f!==v||c!==d||l!==p||u!==g){let m=1-a;const h=c*d+l*p+u*g+f*v,b=h>=0?1:-1,_=1-h*h;if(_>Number.EPSILON){const x=Math.sqrt(_),S=Math.atan2(x,h*b);m=Math.sin(m*S)/x,a=Math.sin(a*S)/x}const y=a*b;if(c=c*m+d*y,l=l*m+p*y,u=u*m+g*y,f=f*m+v*y,m===1-a){const x=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=x,l*=x,u*=x,f*=x}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,o,s){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=o[s],d=o[s+1],p=o[s+2],g=o[s+3];return e[t]=a*g+u*f+c*p-l*d,e[t+1]=c*g+u*d+l*f-a*p,e[t+2]=l*g+u*p+a*d-c*f,e[t+3]=u*g-a*f-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),f=a(o/2),d=c(i/2),p=c(r/2),g=c(o/2);switch(s){case"XYZ":this._x=d*u*f+l*p*g,this._y=l*p*f-d*u*g,this._z=l*u*g+d*p*f,this._w=l*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+l*p*g,this._y=l*p*f-d*u*g,this._z=l*u*g-d*p*f,this._w=l*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-l*p*g,this._y=l*p*f+d*u*g,this._z=l*u*g+d*p*f,this._w=l*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-l*p*g,this._y=l*p*f+d*u*g,this._z=l*u*g-d*p*f,this._w=l*u*f+d*p*g;break;case"YZX":this._x=d*u*f+l*p*g,this._y=l*p*f+d*u*g,this._z=l*u*g-d*p*f,this._w=l*u*f-d*p*g;break;case"XZY":this._x=d*u*f-l*p*g,this._y=l*p*f-d*u*g,this._z=l*u*g+d*p*f,this._w=l*u*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],o=t[8],s=t[1],a=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(o-l)*p,this._z=(s-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-c)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(o+l)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(o-l)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(s-r)/p,this._x=(o+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,o=e._z,s=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+s*a+r*l-o*c,this._y=r*u+s*c+o*a-i*l,this._z=o*u+s*l+i*c-r*a,this._w=s*u-i*a-r*c-o*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*s+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*o+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=s*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=o*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(o),i*Math.cos(o),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*r,this.y=o[1]*t+o[4]*i+o[7]*r,this.z=o[2]*t+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,c=e.w,l=2*(s*r-a*i),u=2*(a*t-o*r),f=2*(o*i-s*t);return this.x=t+c*l+s*f-a*u,this.y=i+c*u+a*l-o*f,this.z=r+c*f+o*u-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r,this.y=o[1]*t+o[5]*i+o[9]*r,this.z=o[2]*t+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,o=e.z,s=t.x,a=t.y,c=t.z;return this.x=r*c-o*a,this.y=o*s-i*c,this.z=i*a-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fo.copy(this).projectOnVector(e),this.sub(Fo)}reflect(e){return this.sub(Fo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fo=new O,dc=new tn;class ti{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Wt):Wt.fromBufferAttribute(o,s),Wt.applyMatrix4(e.matrixWorld),this.expandByPoint(Wt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yr.copy(i.boundingBox)),yr.applyMatrix4(e.matrixWorld),this.union(yr)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zi),xr.subVectors(this.max,zi),oi.subVectors(e.a,zi),ai.subVectors(e.b,zi),si.subVectors(e.c,zi),An.subVectors(ai,oi),Cn.subVectors(si,ai),Vn.subVectors(oi,si);let t=[0,-An.z,An.y,0,-Cn.z,Cn.y,0,-Vn.z,Vn.y,An.z,0,-An.x,Cn.z,0,-Cn.x,Vn.z,0,-Vn.x,-An.y,An.x,0,-Cn.y,Cn.x,0,-Vn.y,Vn.x,0];return!Bo(t,oi,ai,si,xr)||(t=[1,0,0,0,1,0,0,0,1],!Bo(t,oi,ai,si,xr))?!1:(br.crossVectors(An,Cn),t=[br.x,br.y,br.z],Bo(t,oi,ai,si,xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ln=[new O,new O,new O,new O,new O,new O,new O,new O],Wt=new O,yr=new ti,oi=new O,ai=new O,si=new O,An=new O,Cn=new O,Vn=new O,zi=new O,xr=new O,br=new O,Wn=new O;function Bo(n,e,t,i,r){for(let o=0,s=n.length-3;o<=s;o+=3){Wn.fromArray(n,o);const a=r.x*Math.abs(Wn.x)+r.y*Math.abs(Wn.y)+r.z*Math.abs(Wn.z),c=e.dot(Wn),l=t.dot(Wn),u=i.dot(Wn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const rd=new ti,Hi=new O,ko=new O;class po{constructor(e=new O,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):rd.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hi.subVectors(e,this.center);const t=Hi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Hi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ko.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hi.copy(e.center).add(ko)),this.expandByPoint(Hi.copy(e.center).sub(ko))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const un=new O,zo=new O,Mr=new O,Rn=new O,Ho=new O,Sr=new O,Go=new O;class mo{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(un.copy(this.origin).addScaledVector(this.direction,t),un.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){zo.copy(e).add(t).multiplyScalar(.5),Mr.copy(t).sub(e).normalize(),Rn.copy(this.origin).sub(zo);const o=e.distanceTo(t)*.5,s=-this.direction.dot(Mr),a=Rn.dot(this.direction),c=-Rn.dot(Mr),l=Rn.lengthSq(),u=Math.abs(1-s*s);let f,d,p,g;if(u>0)if(f=s*c-a,d=s*a-c,g=o*u,f>=0)if(d>=-g)if(d<=g){const v=1/u;f*=v,d*=v,p=f*(f+s*d+2*a)+d*(s*f+d+2*c)+l}else d=o,f=Math.max(0,-(s*d+a)),p=-f*f+d*(d+2*c)+l;else d=-o,f=Math.max(0,-(s*d+a)),p=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-s*o+a)),d=f>0?-o:Math.min(Math.max(-o,-c),o),p=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-o,-c),o),p=d*(d+2*c)+l):(f=Math.max(0,-(s*o+a)),d=f>0?o:Math.min(Math.max(-o,-c),o),p=-f*f+d*(d+2*c)+l);else d=s>0?-o:o,f=Math.max(0,-(s*d+a)),p=-f*f+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(zo).addScaledVector(Mr,d),p}intersectSphere(e,t){un.subVectors(e.center,this.origin);const i=un.dot(this.direction),r=un.dot(un)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,c=i+s;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,o,s,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(o=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(o=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),f>=0?(a=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,un)!==null}intersectTriangle(e,t,i,r,o){Ho.subVectors(t,e),Sr.subVectors(i,e),Go.crossVectors(Ho,Sr);let s=this.direction.dot(Go),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Rn.subVectors(this.origin,e);const c=a*this.direction.dot(Sr.crossVectors(Rn,Sr));if(c<0)return null;const l=a*this.direction.dot(Ho.cross(Rn));if(l<0||c+l>s)return null;const u=-a*Rn.dot(Go);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(e,t,i,r,o,s,a,c,l,u,f,d,p,g,v,m){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,s,a,c,l,u,f,d,p,g,v,m)}set(e,t,i,r,o,s,a,c,l,u,f,d,p,g,v,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=o,h[5]=s,h[9]=a,h[13]=c,h[2]=l,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ci.setFromMatrixColumn(e,0).length(),o=1/ci.setFromMatrixColumn(e,1).length(),s=1/ci.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){const d=s*u,p=s*f,g=a*u,v=a*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=p+g*l,t[5]=d-v*l,t[9]=-a*c,t[2]=v-d*l,t[6]=g+p*l,t[10]=s*c}else if(e.order==="YXZ"){const d=c*u,p=c*f,g=l*u,v=l*f;t[0]=d+v*a,t[4]=g*a-p,t[8]=s*l,t[1]=s*f,t[5]=s*u,t[9]=-a,t[2]=p*a-g,t[6]=v+d*a,t[10]=s*c}else if(e.order==="ZXY"){const d=c*u,p=c*f,g=l*u,v=l*f;t[0]=d-v*a,t[4]=-s*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=s*u,t[9]=v-d*a,t[2]=-s*l,t[6]=a,t[10]=s*c}else if(e.order==="ZYX"){const d=s*u,p=s*f,g=a*u,v=a*f;t[0]=c*u,t[4]=g*l-p,t[8]=d*l+v,t[1]=c*f,t[5]=v*l+d,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=s*c}else if(e.order==="YZX"){const d=s*c,p=s*l,g=a*c,v=a*l;t[0]=c*u,t[4]=v-d*f,t[8]=g*f+p,t[1]=f,t[5]=s*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*f+g,t[10]=d-v*f}else if(e.order==="XZY"){const d=s*c,p=s*l,g=a*c,v=a*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+v,t[5]=s*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(od,e,ad)}lookAt(e,t,i){const r=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),Pn.crossVectors(i,Ut),Pn.lengthSq()===0&&(Math.abs(i.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),Pn.crossVectors(i,Ut)),Pn.normalize(),Er.crossVectors(Ut,Pn),r[0]=Pn.x,r[4]=Er.x,r[8]=Ut.x,r[1]=Pn.y,r[5]=Er.y,r[9]=Ut.y,r[2]=Pn.z,r[6]=Er.z,r[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,s=i[0],a=i[4],c=i[8],l=i[12],u=i[1],f=i[5],d=i[9],p=i[13],g=i[2],v=i[6],m=i[10],h=i[14],b=i[3],_=i[7],y=i[11],x=i[15],S=r[0],E=r[4],L=r[8],M=r[12],T=r[1],z=r[5],G=r[9],Z=r[13],C=r[2],P=r[6],U=r[10],j=r[14],ne=r[3],ee=r[7],k=r[11],D=r[15];return o[0]=s*S+a*T+c*C+l*ne,o[4]=s*E+a*z+c*P+l*ee,o[8]=s*L+a*G+c*U+l*k,o[12]=s*M+a*Z+c*j+l*D,o[1]=u*S+f*T+d*C+p*ne,o[5]=u*E+f*z+d*P+p*ee,o[9]=u*L+f*G+d*U+p*k,o[13]=u*M+f*Z+d*j+p*D,o[2]=g*S+v*T+m*C+h*ne,o[6]=g*E+v*z+m*P+h*ee,o[10]=g*L+v*G+m*U+h*k,o[14]=g*M+v*Z+m*j+h*D,o[3]=b*S+_*T+y*C+x*ne,o[7]=b*E+_*z+y*P+x*ee,o[11]=b*L+_*G+y*U+x*k,o[15]=b*M+_*Z+y*j+x*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],h=e[15];return g*(+o*c*f-r*l*f-o*a*d+i*l*d+r*a*p-i*c*p)+v*(+t*c*p-t*l*d+o*s*d-r*s*p+r*l*u-o*c*u)+m*(+t*l*f-t*a*p-o*s*f+i*s*p+o*a*u-i*l*u)+h*(-r*a*u-t*c*f+t*a*d+r*s*f-i*s*d+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],h=e[15],b=f*m*l-v*d*l+v*c*p-a*m*p-f*c*h+a*d*h,_=g*d*l-u*m*l-g*c*p+s*m*p+u*c*h-s*d*h,y=u*v*l-g*f*l+g*a*p-s*v*p-u*a*h+s*f*h,x=g*f*c-u*v*c-g*a*d+s*v*d+u*a*m-s*f*m,S=t*b+i*_+r*y+o*x;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/S;return e[0]=b*E,e[1]=(v*d*o-f*m*o-v*r*p+i*m*p+f*r*h-i*d*h)*E,e[2]=(a*m*o-v*c*o+v*r*l-i*m*l-a*r*h+i*c*h)*E,e[3]=(f*c*o-a*d*o-f*r*l+i*d*l+a*r*p-i*c*p)*E,e[4]=_*E,e[5]=(u*m*o-g*d*o+g*r*p-t*m*p-u*r*h+t*d*h)*E,e[6]=(g*c*o-s*m*o-g*r*l+t*m*l+s*r*h-t*c*h)*E,e[7]=(s*d*o-u*c*o+u*r*l-t*d*l-s*r*p+t*c*p)*E,e[8]=y*E,e[9]=(g*f*o-u*v*o-g*i*p+t*v*p+u*i*h-t*f*h)*E,e[10]=(s*v*o-g*a*o+g*i*l-t*v*l-s*i*h+t*a*h)*E,e[11]=(u*a*o-s*f*o-u*i*l+t*f*l+s*i*p-t*a*p)*E,e[12]=x*E,e[13]=(u*v*r-g*f*r+g*i*d-t*v*d-u*i*m+t*f*m)*E,e[14]=(g*a*r-s*v*r-g*i*c+t*v*c+s*i*m-t*a*m)*E,e[15]=(s*f*r-u*a*r+u*i*c-t*f*c-s*i*d+t*a*d)*E,this}scale(e){const t=this.elements,i=e.x,r=e.y,o=e.z;return t[0]*=i,t[4]*=r,t[8]*=o,t[1]*=i,t[5]*=r,t[9]*=o,t[2]*=i,t[6]*=r,t[10]*=o,t[3]*=i,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),o=1-i,s=e.x,a=e.y,c=e.z,l=o*s,u=o*a;return this.set(l*s+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*s,0,l*c-r*a,u*c+r*s,o*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,o=t._x,s=t._y,a=t._z,c=t._w,l=o+o,u=s+s,f=a+a,d=o*l,p=o*u,g=o*f,v=s*u,m=s*f,h=a*f,b=c*l,_=c*u,y=c*f,x=i.x,S=i.y,E=i.z;return r[0]=(1-(v+h))*x,r[1]=(p+y)*x,r[2]=(g-_)*x,r[3]=0,r[4]=(p-y)*S,r[5]=(1-(d+h))*S,r[6]=(m+b)*S,r[7]=0,r[8]=(g+_)*E,r[9]=(m-b)*E,r[10]=(1-(d+v))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let o=ci.set(r[0],r[1],r[2]).length();const s=ci.set(r[4],r[5],r[6]).length(),a=ci.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],jt.copy(this);const l=1/o,u=1/s,f=1/a;return jt.elements[0]*=l,jt.elements[1]*=l,jt.elements[2]*=l,jt.elements[4]*=u,jt.elements[5]*=u,jt.elements[6]*=u,jt.elements[8]*=f,jt.elements[9]*=f,jt.elements[10]*=f,t.setFromRotationMatrix(jt),i.x=o,i.y=s,i.z=a,this}makePerspective(e,t,i,r,o,s,a=xn){const c=this.elements,l=2*o/(t-e),u=2*o/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let p,g;if(a===xn)p=-(s+o)/(s-o),g=-2*s*o/(s-o);else if(a===no)p=-s/(s-o),g=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,o,s,a=xn){const c=this.elements,l=1/(t-e),u=1/(i-r),f=1/(s-o),d=(t+e)*l,p=(i+r)*u;let g,v;if(a===xn)g=(s+o)*f,v=-2*f;else if(a===no)g=o*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ci=new O,jt=new Qe,od=new O(0,0,0),ad=new O(1,1,1),Pn=new O,Er=new O,Ut=new O,pc=new Qe,mc=new tn;class go{constructor(e=0,t=0,i=0,r=go.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],c=r[1],l=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-gt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return pc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mc.setFromEuler(this),this.setFromQuaternion(mc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}go.DEFAULT_ORDER="XYZ";class Ja{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sd=0;const gc=new O,li=new tn,fn=new Qe,wr=new O,Gi=new O,cd=new O,ld=new tn,vc=new O(1,0,0),_c=new O(0,1,0),yc=new O(0,0,1),ud={type:"added"},fd={type:"removed"};class _t extends nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new O,t=new go,i=new tn,r=new O(1,1,1);function o(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qe},normalMatrix:{value:new He}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.multiply(li),this}rotateOnWorldAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.premultiply(li),this}rotateX(e){return this.rotateOnAxis(vc,e)}rotateY(e){return this.rotateOnAxis(_c,e)}rotateZ(e){return this.rotateOnAxis(yc,e)}translateOnAxis(e,t){return gc.copy(e).applyQuaternion(this.quaternion),this.position.add(gc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vc,e)}translateY(e){return this.translateOnAxis(_c,e)}translateZ(e){return this.translateOnAxis(yc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?wr.copy(e):wr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(Gi,wr,this.up):fn.lookAt(wr,Gi,this.up),this.quaternion.setFromRotationMatrix(fn),r&&(fn.extractRotation(r.matrixWorld),li.setFromRotationMatrix(fn),this.quaternion.premultiply(li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ud)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fd)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,o=this.children.length;r<o;r++){const s=this.children[r].getObjectsByProperty(e,t);s.length>0&&(i=i.concat(s))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,e,cd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,ld,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const o=t[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];o(e.shapes,f)}else o(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(e.materials,this.material[c]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(o(e.animations,c))}}if(t){const a=s(e.geometries),c=s(e.materials),l=s(e.textures),u=s(e.images),f=s(e.shapes),d=s(e.skeletons),p=s(e.animations),g=s(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function s(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}_t.DEFAULT_UP=new O(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xt=new O,hn=new O,Vo=new O,dn=new O,ui=new O,fi=new O,xc=new O,Wo=new O,jo=new O,Xo=new O;let Tr=!1;class Yt{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Xt.subVectors(e,t),r.cross(Xt);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,i,r,o){Xt.subVectors(r,t),hn.subVectors(i,t),Vo.subVectors(e,t);const s=Xt.dot(Xt),a=Xt.dot(hn),c=Xt.dot(Vo),l=hn.dot(hn),u=hn.dot(Vo),f=s*l-a*a;if(f===0)return o.set(-2,-1,-1);const d=1/f,p=(l*c-a*u)*d,g=(s*u-a*c)*d;return o.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,dn),dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getUV(e,t,i,r,o,s,a,c){return Tr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Tr=!0),this.getInterpolation(e,t,i,r,o,s,a,c)}static getInterpolation(e,t,i,r,o,s,a,c){return this.getBarycoord(e,t,i,r,dn),c.setScalar(0),c.addScaledVector(o,dn.x),c.addScaledVector(s,dn.y),c.addScaledVector(a,dn.z),c}static isFrontFacing(e,t,i,r){return Xt.subVectors(i,t),hn.subVectors(e,t),Xt.cross(hn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xt.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Xt.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,o){return Tr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Tr=!0),Yt.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}getInterpolation(e,t,i,r,o){return Yt.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}containsPoint(e){return Yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,o=this.c;let s,a;ui.subVectors(r,i),fi.subVectors(o,i),Wo.subVectors(e,i);const c=ui.dot(Wo),l=fi.dot(Wo);if(c<=0&&l<=0)return t.copy(i);jo.subVectors(e,r);const u=ui.dot(jo),f=fi.dot(jo);if(u>=0&&f<=u)return t.copy(r);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return s=c/(c-u),t.copy(i).addScaledVector(ui,s);Xo.subVectors(e,o);const p=ui.dot(Xo),g=fi.dot(Xo);if(g>=0&&p<=g)return t.copy(o);const v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(fi,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return xc.subVectors(o,r),a=(f-u)/(f-u+(p-g)),t.copy(r).addScaledVector(xc,a);const h=1/(m+v+d);return s=v*h,a=d*h,t.copy(i).addScaledVector(ui,s).addScaledVector(fi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function qo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ye.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ye.workingColorSpace){if(e=Za(e,1),t=gt(t,0,1),i=gt(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,s=2*i-o;this.r=qo(s,o,e+1/3),this.g=qo(s,o,e),this.b=qo(s,o,e-1/3)}return Ye.toWorkingColorSpace(this,r),this}setStyle(e,t=mt){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mt){const i=vu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=Uo(e.r),this.g=Uo(e.g),this.b=Uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mt){return Ye.fromWorkingColorSpace(xt.copy(this),e),Math.round(gt(xt.r*255,0,255))*65536+Math.round(gt(xt.g*255,0,255))*256+Math.round(gt(xt.b*255,0,255))}getHexString(e=mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(xt.copy(this),t);const i=xt.r,r=xt.g,o=xt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let c,l;const u=(a+s)/2;if(a===s)c=0,l=0;else{const f=s-a;switch(l=u<=.5?f/(s+a):f/(2-s-a),s){case i:c=(r-o)/f+(r<o?6:0);break;case r:c=(o-i)/f+2;break;case o:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(xt.copy(this),t),e.r=xt.r,e.g=xt.g,e.b=xt.b,e}getStyle(e=mt){Ye.fromWorkingColorSpace(xt.copy(this),e);const t=xt.r,i=xt.g,r=xt.b;return e!==mt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ln),this.setHSL(Ln.h+e,Ln.s+t,Ln.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ln),e.getHSL(Ar);const i=rr(Ln.h,Ar.h,t),r=rr(Ln.s,Ar.s,t),o=rr(Ln.l,Ar.l,t);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*r,this.g=o[1]*t+o[4]*i+o[7]*r,this.b=o[2]*t+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xt=new je;je.NAMES=vu;let hd=0;class Ni extends nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=Ai,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xa,this.blendDst=ba,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ii,this.stencilZFail=ii,this.stencilZPass=ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(i.blending=this.blending),this.side!==Bn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==xa&&(i.blendSrc=this.blendSrc),this.blendDst!==ba&&(i.blendDst=this.blendDst),this.blendEquation!==$n&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Jr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ac&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ii&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ii&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ii&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const c=o[a];delete c.metadata,s.push(c)}return s}if(t){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Qa extends Ni{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new O,Cr=new me;class en{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=sc,this.updateRange={offset:0,count:-1},this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Cr.fromBufferAttribute(this,t),Cr.applyMatrix3(e),this.setXY(t,Cr.x,Cr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Mi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array),o=wt(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class _u extends en{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class yu extends en{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class lt extends en{constructor(e,t,i){super(new Float32Array(e),t,i)}}let dd=0;const zt=new Qe,$o=new _t,hi=new O,Nt=new ti,Vi=new ti,pt=new O;class Bt extends nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(du(e)?yu:_u)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new He().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,i){return zt.makeTranslation(e,t,i),this.applyMatrix4(zt),this}scale(e,t,i){return zt.makeScale(e,t,i),this.applyMatrix4(zt),this}lookAt(e){return $o.lookAt(e),$o.updateMatrix(),this.applyMatrix4($o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hi).negate(),this.translate(hi.x,hi.y,hi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new lt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const o=t[i];Nt.setFromBufferAttribute(o),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new po);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const a=t[o];Vi.setFromBufferAttribute(a),this.morphTargetsRelative?(pt.addVectors(Nt.min,Vi.min),Nt.expandByPoint(pt),pt.addVectors(Nt.max,Vi.max),Nt.expandByPoint(pt)):(Nt.expandByPoint(Vi.min),Nt.expandByPoint(Vi.max))}Nt.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)pt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(pt));if(t)for(let o=0,s=t.length;o<s;o++){const a=t[o],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)pt.fromBufferAttribute(a,l),c&&(hi.fromBufferAttribute(e,l),pt.add(hi)),r=Math.max(r,i.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,o=t.normal.array,s=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let T=0;T<a;T++)l[T]=new O,u[T]=new O;const f=new O,d=new O,p=new O,g=new me,v=new me,m=new me,h=new O,b=new O;function _(T,z,G){f.fromArray(r,T*3),d.fromArray(r,z*3),p.fromArray(r,G*3),g.fromArray(s,T*2),v.fromArray(s,z*2),m.fromArray(s,G*2),d.sub(f),p.sub(f),v.sub(g),m.sub(g);const Z=1/(v.x*m.y-m.x*v.y);isFinite(Z)&&(h.copy(d).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(Z),b.copy(p).multiplyScalar(v.x).addScaledVector(d,-m.x).multiplyScalar(Z),l[T].add(h),l[z].add(h),l[G].add(h),u[T].add(b),u[z].add(b),u[G].add(b))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let T=0,z=y.length;T<z;++T){const G=y[T],Z=G.start,C=G.count;for(let P=Z,U=Z+C;P<U;P+=3)_(i[P+0],i[P+1],i[P+2])}const x=new O,S=new O,E=new O,L=new O;function M(T){E.fromArray(o,T*3),L.copy(E);const z=l[T];x.copy(z),x.sub(E.multiplyScalar(E.dot(z))).normalize(),S.crossVectors(L,z);const Z=S.dot(u[T])<0?-1:1;c[T*4]=x.x,c[T*4+1]=x.y,c[T*4+2]=x.z,c[T*4+3]=Z}for(let T=0,z=y.length;T<z;++T){const G=y[T],Z=G.start,C=G.count;for(let P=Z,U=Z+C;P<U;P+=3)M(i[P+0]),M(i[P+1]),M(i[P+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new O,o=new O,s=new O,a=new O,c=new O,l=new O,u=new O,f=new O;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,v),s.fromBufferAttribute(t,m),u.subVectors(s,o),f.subVectors(r,o),u.cross(f),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),o.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,o),f.subVectors(r,o),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,f=a.normalized,d=new l.constructor(c.length*u);let p=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*u;for(let h=0;h<u;h++)d[g++]=l[p++]}return new en(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bt,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let u=0,f=l.length;u<f;u++){const d=l[u],p=e(d,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,c=s.length;a<c;a++){const l=s[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const p=l[f];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const o=e.morphAttributes;for(const l in o){const u=[],f=o[l];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,u=s.length;l<u;l++){const f=s[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bc=new Qe,jn=new mo,Rr=new po,Mc=new O,di=new O,pi=new O,mi=new O,Yo=new O,Pr=new O,Lr=new me,Dr=new me,Or=new me,Sc=new O,Ec=new O,wc=new O,Ir=new O,Ur=new O;class Jt extends _t{constructor(e=new Bt,t=new Qa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){Pr.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const u=a[c],f=o[c];u!==0&&(Yo.fromBufferAttribute(f,e),s?Pr.addScaledVector(Yo,u):Pr.addScaledVector(Yo.sub(t),u))}t.add(Pr)}return t}raycast(e,t){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Rr.copy(i.boundingSphere),Rr.applyMatrix4(o),jn.copy(e.ray).recast(e.near),!(Rr.containsPoint(jn.origin)===!1&&(jn.intersectSphere(Rr,Mc)===null||jn.origin.distanceToSquared(Mc)>(e.far-e.near)**2))&&(bc.copy(o).invert(),jn.copy(e.ray).applyMatrix4(bc),!(i.boundingBox!==null&&jn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,jn)))}_computeIntersections(e,t,i){let r;const o=this.geometry,s=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,u=o.attributes.uv1,f=o.attributes.normal,d=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,v=d.length;g<v;g++){const m=d[g],h=s[m.materialIndex],b=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=b,x=_;y<x;y+=3){const S=a.getX(y),E=a.getX(y+1),L=a.getX(y+2);r=Nr(this,h,e,i,l,u,f,S,E,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const b=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);r=Nr(this,s,e,i,l,u,f,b,_,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(s))for(let g=0,v=d.length;g<v;g++){const m=d[g],h=s[m.materialIndex],b=Math.max(m.start,p.start),_=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=b,x=_;y<x;y+=3){const S=y,E=y+1,L=y+2;r=Nr(this,h,e,i,l,u,f,S,E,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const b=m,_=m+1,y=m+2;r=Nr(this,s,e,i,l,u,f,b,_,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function pd(n,e,t,i,r,o,s,a){let c;if(e.side===Rt?c=i.intersectTriangle(s,o,r,!0,a):c=i.intersectTriangle(r,o,s,e.side===Bn,a),c===null)return null;Ur.copy(a),Ur.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ur);return l<t.near||l>t.far?null:{distance:l,point:Ur.clone(),object:n}}function Nr(n,e,t,i,r,o,s,a,c,l){n.getVertexPosition(a,di),n.getVertexPosition(c,pi),n.getVertexPosition(l,mi);const u=pd(n,e,t,i,di,pi,mi,Ir);if(u){r&&(Lr.fromBufferAttribute(r,a),Dr.fromBufferAttribute(r,c),Or.fromBufferAttribute(r,l),u.uv=Yt.getInterpolation(Ir,di,pi,mi,Lr,Dr,Or,new me)),o&&(Lr.fromBufferAttribute(o,a),Dr.fromBufferAttribute(o,c),Or.fromBufferAttribute(o,l),u.uv1=Yt.getInterpolation(Ir,di,pi,mi,Lr,Dr,Or,new me),u.uv2=u.uv1),s&&(Sc.fromBufferAttribute(s,a),Ec.fromBufferAttribute(s,c),wc.fromBufferAttribute(s,l),u.normal=Yt.getInterpolation(Ir,di,pi,mi,Sc,Ec,wc,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new O,materialIndex:0};Yt.getNormal(di,pi,mi,f.normal),u.face=f}return u}class dr extends Bt{constructor(e=1,t=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const c=[],l=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,s,o,0),g("z","y","x",1,-1,i,t,-e,s,o,1),g("x","z","y",1,1,e,i,t,r,s,2),g("x","z","y",1,-1,e,i,-t,r,s,3),g("x","y","z",1,-1,e,t,i,r,o,4),g("x","y","z",-1,-1,e,t,-i,r,o,5),this.setIndex(c),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(u,3)),this.setAttribute("uv",new lt(f,2));function g(v,m,h,b,_,y,x,S,E,L,M){const T=y/E,z=x/L,G=y/2,Z=x/2,C=S/2,P=E+1,U=L+1;let j=0,ne=0;const ee=new O;for(let k=0;k<U;k++){const D=k*z-Z;for(let B=0;B<P;B++){const re=B*T-G;ee[v]=re*b,ee[m]=D*_,ee[h]=C,l.push(ee.x,ee.y,ee.z),ee[v]=0,ee[m]=0,ee[h]=S>0?1:-1,u.push(ee.x,ee.y,ee.z),f.push(B/E),f.push(1-k/L),j+=1}}for(let k=0;k<L;k++)for(let D=0;D<E;D++){const B=d+D+P*k,re=d+D+P*(k+1),J=d+(D+1)+P*(k+1),W=d+(D+1)+P*k;c.push(B,re,W),c.push(re,J,W),ne+=6}a.addGroup(p,ne,M),p+=ne,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Oi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Tt(n){const e={};for(let t=0;t<n.length;t++){const i=Oi(n[t]);for(const r in i)e[r]=i[r]}return e}function md(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function xu(n){return n.getRenderTarget()===null?n.outputColorSpace:Ye.workingColorSpace}const bu={clone:Oi,merge:Tt};var gd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wn extends Ni{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gd,this.fragmentShader=vd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oi(e.uniforms),this.uniformsGroups=md(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Mu extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=xn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Gt extends Mu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=lr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lr*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ir*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,l=s.fullHeight;o+=s.offsetX*r/c,t-=s.offsetY*i/l,r*=s.width/c,i*=s.height/l}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const gi=-90,vi=1;class _d extends _t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gt(gi,vi,e,t);r.layers=this.layers,this.add(r);const o=new Gt(gi,vi,e,t);o.layers=this.layers,this.add(o);const s=new Gt(gi,vi,e,t);s.layers=this.layers,this.add(s);const a=new Gt(gi,vi,e,t);a.layers=this.layers,this.add(a);const c=new Gt(gi,vi,e,t);c.layers=this.layers,this.add(c);const l=new Gt(gi,vi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,o,s,a,c]=t;for(const l of t)this.remove(l);if(e===xn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===no)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,c,l,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,o),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Su extends Lt{constructor(e,t,i,r,o,s,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Ri,super(e,t,i,r,o,s,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yd extends kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(or("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Jn?mt:Vt),this.texture=new Su(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new dr(5,5,5),o=new wn({name:"CubemapFromEquirect",uniforms:Oi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rt,blending:Mn});o.uniforms.tEquirect.value=t;const s=new Jt(r,o),a=t.minFilter;return t.minFilter===cr&&(t.minFilter=Ht),new _d(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(o)}}const Ko=new O,xd=new O,bd=new He;class vn{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ko.subVectors(i,t).cross(xd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ko),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||bd.getNormalMatrix(e),r=this.coplanarPoint(Ko).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xn=new po,Fr=new O;class es{constructor(e=new vn,t=new vn,i=new vn,r=new vn,o=new vn,s=new vn){this.planes=[e,t,i,r,o,s]}set(e,t,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=xn){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],c=r[3],l=r[4],u=r[5],f=r[6],d=r[7],p=r[8],g=r[9],v=r[10],m=r[11],h=r[12],b=r[13],_=r[14],y=r[15];if(i[0].setComponents(c-o,d-l,m-p,y-h).normalize(),i[1].setComponents(c+o,d+l,m+p,y+h).normalize(),i[2].setComponents(c+s,d+u,m+g,y+b).normalize(),i[3].setComponents(c-s,d-u,m-g,y-b).normalize(),i[4].setComponents(c-a,d-f,m-v,y-_).normalize(),t===xn)i[5].setComponents(c+a,d+f,m+v,y+_).normalize();else if(t===no)i[5].setComponents(a,f,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(e){return Xn.center.set(0,0,0),Xn.radius=.7071067811865476,Xn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Fr.x=r.normal.x>0?e.max.x:e.min.x,Fr.y=r.normal.y>0?e.max.y:e.min.y,Fr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Eu(){let n=null,e=!1,t=null,i=null;function r(o,s){t(o,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function Md(n,e){const t=e.isWebGL2,i=new WeakMap;function r(l,u){const f=l.array,d=l.usage,p=n.createBuffer();n.bindBuffer(u,p),n.bufferData(u,f,d),l.onUploadCallback();let g;if(f instanceof Float32Array)g=n.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=n.SHORT;else if(f instanceof Uint32Array)g=n.UNSIGNED_INT;else if(f instanceof Int32Array)g=n.INT;else if(f instanceof Int8Array)g=n.BYTE;else if(f instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function o(l,u,f){const d=u.array,p=u.updateRange;n.bindBuffer(f,l),p.count===-1?n.bufferSubData(f,0,d):(t?n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=i.get(l);f===void 0?i.set(l,r(l,u)):f.version<l.version&&(o(f.buffer,l,u),f.version=l.version)}return{get:s,remove:a,update:c}}class ts extends Bt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const o=e/2,s=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,f=e/a,d=t/c,p=[],g=[],v=[],m=[];for(let h=0;h<u;h++){const b=h*d-s;for(let _=0;_<l;_++){const y=_*f-o;g.push(y,-b,0),v.push(0,0,1),m.push(_/a),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let b=0;b<a;b++){const _=b+l*h,y=b+l*(h+1),x=b+1+l*(h+1),S=b+1+l*h;p.push(_,y,S),p.push(y,x,S)}this.setIndex(p),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(v,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ts(e.width,e.height,e.widthSegments,e.heightSegments)}}var Sd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ed=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Td=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ad=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Cd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ld=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Od=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Id=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ud=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Vd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Wd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Xd=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$d=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Qd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ep=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,np=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ip=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,op=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ap=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,up=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_p=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,xp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ep=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ap=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Cp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Op=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ip=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Up=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Np=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Fp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Bp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$p=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Kp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,em=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,im=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,om=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,am=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,cm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,um=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ym=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Am=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Cm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Rm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Om=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Im=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Um=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,km=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Hm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$m=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ym=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Km=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:Sd,alphahash_pars_fragment:Ed,alphamap_fragment:wd,alphamap_pars_fragment:Td,alphatest_fragment:Ad,alphatest_pars_fragment:Cd,aomap_fragment:Rd,aomap_pars_fragment:Pd,begin_vertex:Ld,beginnormal_vertex:Dd,bsdfs:Od,iridescence_fragment:Id,bumpmap_pars_fragment:Ud,clipping_planes_fragment:Nd,clipping_planes_pars_fragment:Fd,clipping_planes_pars_vertex:Bd,clipping_planes_vertex:kd,color_fragment:zd,color_pars_fragment:Hd,color_pars_vertex:Gd,color_vertex:Vd,common:Wd,cube_uv_reflection_fragment:jd,defaultnormal_vertex:Xd,displacementmap_pars_vertex:qd,displacementmap_vertex:$d,emissivemap_fragment:Yd,emissivemap_pars_fragment:Kd,colorspace_fragment:Zd,colorspace_pars_fragment:Jd,envmap_fragment:Qd,envmap_common_pars_fragment:ep,envmap_pars_fragment:tp,envmap_pars_vertex:np,envmap_physical_pars_fragment:pp,envmap_vertex:ip,fog_vertex:rp,fog_pars_vertex:op,fog_fragment:ap,fog_pars_fragment:sp,gradientmap_pars_fragment:cp,lightmap_fragment:lp,lightmap_pars_fragment:up,lights_lambert_fragment:fp,lights_lambert_pars_fragment:hp,lights_pars_begin:dp,lights_toon_fragment:mp,lights_toon_pars_fragment:gp,lights_phong_fragment:vp,lights_phong_pars_fragment:_p,lights_physical_fragment:yp,lights_physical_pars_fragment:xp,lights_fragment_begin:bp,lights_fragment_maps:Mp,lights_fragment_end:Sp,logdepthbuf_fragment:Ep,logdepthbuf_pars_fragment:wp,logdepthbuf_pars_vertex:Tp,logdepthbuf_vertex:Ap,map_fragment:Cp,map_pars_fragment:Rp,map_particle_fragment:Pp,map_particle_pars_fragment:Lp,metalnessmap_fragment:Dp,metalnessmap_pars_fragment:Op,morphcolor_vertex:Ip,morphnormal_vertex:Up,morphtarget_pars_vertex:Np,morphtarget_vertex:Fp,normal_fragment_begin:Bp,normal_fragment_maps:kp,normal_pars_fragment:zp,normal_pars_vertex:Hp,normal_vertex:Gp,normalmap_pars_fragment:Vp,clearcoat_normal_fragment_begin:Wp,clearcoat_normal_fragment_maps:jp,clearcoat_pars_fragment:Xp,iridescence_pars_fragment:qp,opaque_fragment:$p,packing:Yp,premultiplied_alpha_fragment:Kp,project_vertex:Zp,dithering_fragment:Jp,dithering_pars_fragment:Qp,roughnessmap_fragment:em,roughnessmap_pars_fragment:tm,shadowmap_pars_fragment:nm,shadowmap_pars_vertex:im,shadowmap_vertex:rm,shadowmask_pars_fragment:om,skinbase_vertex:am,skinning_pars_vertex:sm,skinning_vertex:cm,skinnormal_vertex:lm,specularmap_fragment:um,specularmap_pars_fragment:fm,tonemapping_fragment:hm,tonemapping_pars_fragment:dm,transmission_fragment:pm,transmission_pars_fragment:mm,uv_pars_fragment:gm,uv_pars_vertex:vm,uv_vertex:_m,worldpos_vertex:ym,background_vert:xm,background_frag:bm,backgroundCube_vert:Mm,backgroundCube_frag:Sm,cube_vert:Em,cube_frag:wm,depth_vert:Tm,depth_frag:Am,distanceRGBA_vert:Cm,distanceRGBA_frag:Rm,equirect_vert:Pm,equirect_frag:Lm,linedashed_vert:Dm,linedashed_frag:Om,meshbasic_vert:Im,meshbasic_frag:Um,meshlambert_vert:Nm,meshlambert_frag:Fm,meshmatcap_vert:Bm,meshmatcap_frag:km,meshnormal_vert:zm,meshnormal_frag:Hm,meshphong_vert:Gm,meshphong_frag:Vm,meshphysical_vert:Wm,meshphysical_frag:jm,meshtoon_vert:Xm,meshtoon_frag:qm,points_vert:$m,points_frag:Ym,shadow_vert:Km,shadow_frag:Zm,sprite_vert:Jm,sprite_frag:Qm},pe={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},an={basic:{uniforms:Tt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Tt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new je(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Tt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Tt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Tt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new je(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Tt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Tt([pe.points,pe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Tt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Tt([pe.common,pe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Tt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Tt([pe.sprite,pe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Tt([pe.common,pe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Tt([pe.lights,pe.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};an.physical={uniforms:Tt([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Br={r:0,b:0,g:0};function eg(n,e,t,i,r,o,s){const a=new je(0);let c=o===!0?0:1,l,u,f=null,d=0,p=null;function g(m,h){let b=!1,_=h.isScene===!0?h.background:null;_&&_.isTexture&&(_=(h.backgroundBlurriness>0?t:e).get(_)),_===null?v(a,c):_&&_.isColor&&(v(_,1),b=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,s):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===fo)?(u===void 0&&(u=new Jt(new dr(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:Oi(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(x,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=Ye.getTransfer(_.colorSpace)!==Je,(f!==_||d!==_.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=_,d=_.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Jt(new ts(2,2),new wn({name:"BackgroundMaterial",uniforms:Oi(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(_.colorSpace)!==Je,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||d!==_.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,f=_,d=_.version,p=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function v(m,h){m.getRGB(Br,xu(n)),i.buffers.color.setClear(Br.r,Br.g,Br.b,h,s)}return{getClearColor:function(){return a},setClearColor:function(m,h=1){a.set(m),c=h,v(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,v(a,c)},render:g}}function tg(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,a={},c=m(null);let l=c,u=!1;function f(C,P,U,j,ne){let ee=!1;if(s){const k=v(j,U,P);l!==k&&(l=k,p(l.object)),ee=h(C,j,U,ne),ee&&b(C,j,U,ne)}else{const k=P.wireframe===!0;(l.geometry!==j.id||l.program!==U.id||l.wireframe!==k)&&(l.geometry=j.id,l.program=U.id,l.wireframe=k,ee=!0)}ne!==null&&t.update(ne,n.ELEMENT_ARRAY_BUFFER),(ee||u)&&(u=!1,L(C,P,U,j),ne!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(ne).buffer))}function d(){return i.isWebGL2?n.createVertexArray():o.createVertexArrayOES()}function p(C){return i.isWebGL2?n.bindVertexArray(C):o.bindVertexArrayOES(C)}function g(C){return i.isWebGL2?n.deleteVertexArray(C):o.deleteVertexArrayOES(C)}function v(C,P,U){const j=U.wireframe===!0;let ne=a[C.id];ne===void 0&&(ne={},a[C.id]=ne);let ee=ne[P.id];ee===void 0&&(ee={},ne[P.id]=ee);let k=ee[j];return k===void 0&&(k=m(d()),ee[j]=k),k}function m(C){const P=[],U=[],j=[];for(let ne=0;ne<r;ne++)P[ne]=0,U[ne]=0,j[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:j,object:C,attributes:{},index:null}}function h(C,P,U,j){const ne=l.attributes,ee=P.attributes;let k=0;const D=U.getAttributes();for(const B in D)if(D[B].location>=0){const J=ne[B];let W=ee[B];if(W===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&(W=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&(W=C.instanceColor)),J===void 0||J.attribute!==W||W&&J.data!==W.data)return!0;k++}return l.attributesNum!==k||l.index!==j}function b(C,P,U,j){const ne={},ee=P.attributes;let k=0;const D=U.getAttributes();for(const B in D)if(D[B].location>=0){let J=ee[B];J===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&(J=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&(J=C.instanceColor));const W={};W.attribute=J,J&&J.data&&(W.data=J.data),ne[B]=W,k++}l.attributes=ne,l.attributesNum=k,l.index=j}function _(){const C=l.newAttributes;for(let P=0,U=C.length;P<U;P++)C[P]=0}function y(C){x(C,0)}function x(C,P){const U=l.newAttributes,j=l.enabledAttributes,ne=l.attributeDivisors;U[C]=1,j[C]===0&&(n.enableVertexAttribArray(C),j[C]=1),ne[C]!==P&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,P),ne[C]=P)}function S(){const C=l.newAttributes,P=l.enabledAttributes;for(let U=0,j=P.length;U<j;U++)P[U]!==C[U]&&(n.disableVertexAttribArray(U),P[U]=0)}function E(C,P,U,j,ne,ee,k){k===!0?n.vertexAttribIPointer(C,P,U,ne,ee):n.vertexAttribPointer(C,P,U,j,ne,ee)}function L(C,P,U,j){if(i.isWebGL2===!1&&(C.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const ne=j.attributes,ee=U.getAttributes(),k=P.defaultAttributeValues;for(const D in ee){const B=ee[D];if(B.location>=0){let re=ne[D];if(re===void 0&&(D==="instanceMatrix"&&C.instanceMatrix&&(re=C.instanceMatrix),D==="instanceColor"&&C.instanceColor&&(re=C.instanceColor)),re!==void 0){const J=re.normalized,W=re.itemSize,ie=t.get(re);if(ie===void 0)continue;const F=ie.buffer,K=ie.type,fe=ie.bytesPerElement,be=i.isWebGL2===!0&&(K===n.INT||K===n.UNSIGNED_INT||re.gpuType===ou);if(re.isInterleavedBufferAttribute){const ge=re.data,H=ge.stride,nt=re.offset;if(ge.isInstancedInterleavedBuffer){for(let _e=0;_e<B.locationSize;_e++)x(B.location+_e,ge.meshPerAttribute);C.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let _e=0;_e<B.locationSize;_e++)y(B.location+_e);n.bindBuffer(n.ARRAY_BUFFER,F);for(let _e=0;_e<B.locationSize;_e++)E(B.location+_e,W/B.locationSize,K,J,H*fe,(nt+W/B.locationSize*_e)*fe,be)}else{if(re.isInstancedBufferAttribute){for(let ge=0;ge<B.locationSize;ge++)x(B.location+ge,re.meshPerAttribute);C.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ge=0;ge<B.locationSize;ge++)y(B.location+ge);n.bindBuffer(n.ARRAY_BUFFER,F);for(let ge=0;ge<B.locationSize;ge++)E(B.location+ge,W/B.locationSize,K,J,W*fe,W/B.locationSize*ge*fe,be)}}else if(k!==void 0){const J=k[D];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(B.location,J);break;case 3:n.vertexAttrib3fv(B.location,J);break;case 4:n.vertexAttrib4fv(B.location,J);break;default:n.vertexAttrib1fv(B.location,J)}}}}S()}function M(){G();for(const C in a){const P=a[C];for(const U in P){const j=P[U];for(const ne in j)g(j[ne].object),delete j[ne];delete P[U]}delete a[C]}}function T(C){if(a[C.id]===void 0)return;const P=a[C.id];for(const U in P){const j=P[U];for(const ne in j)g(j[ne].object),delete j[ne];delete P[U]}delete a[C.id]}function z(C){for(const P in a){const U=a[P];if(U[C.id]===void 0)continue;const j=U[C.id];for(const ne in j)g(j[ne].object),delete j[ne];delete U[C.id]}}function G(){Z(),u=!0,l!==c&&(l=c,p(l.object))}function Z(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:G,resetDefaultState:Z,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:z,initAttributes:_,enableAttribute:y,disableUnusedAttributes:S}}function ng(n,e,t,i){const r=i.isWebGL2;let o;function s(l){o=l}function a(l,u){n.drawArrays(o,l,u),t.update(u,o,1)}function c(l,u,f){if(f===0)return;let d,p;if(r)d=n,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](o,l,u,f),t.update(u,o,f)}this.setMode=s,this.render=a,this.renderInstances=c}function ig(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=o(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,y=s||e.has("OES_texture_float"),x=_&&y,S=s?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:b,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:x,maxSamples:S}}function rg(n){const e=this;let t=null,i=0,r=!1,o=!1;const s=new vn,a=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||g===null||g.length===0||o&&!m)o?u(null):l();else{const b=o?0:i,_=b*4;let y=h.clippingState||null;c.value=y,y=u(g,d,_,p);for(let x=0;x!==_;++x)y[x]=t[x];h.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const h=p+v*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<h)&&(m=new Float32Array(h));for(let _=0,y=p;_!==v;++_,y+=4)s.copy(f[_]).applyMatrix4(b,a),s.normal.toArray(m,y),m[y+3]=s.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function og(n){let e=new WeakMap;function t(s,a){return a===Ma?s.mapping=Ri:a===Sa&&(s.mapping=Pi),s}function i(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===Ma||a===Sa)if(e.has(s)){const c=e.get(s).texture;return t(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const l=new yd(c.height/2);return l.fromEquirectangularTexture(n,s),e.set(s,l),s.addEventListener("dispose",r),t(l.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class ns extends Mu{constructor(e=-1,t=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,s=o+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Si=4,Tc=[.125,.215,.35,.446,.526,.582],Yn=20,Zo=new ns,Ac=new je;let Jo=null,Qo=0,ea=0;const qn=(1+Math.sqrt(5))/2,_i=1/qn,Cc=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,qn,_i),new O(0,qn,-_i),new O(_i,0,qn),new O(-_i,0,qn),new O(qn,_i,0),new O(-qn,_i,0)];class Rc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Jo=this._renderer.getRenderTarget(),Qo=this._renderer.getActiveCubeFace(),ea=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jo,Qo,ea),e.scissorTest=!1,kr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ri||e.mapping===Pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jo=this._renderer.getRenderTarget(),Qo=this._renderer.getActiveCubeFace(),ea=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:Li,format:Zt,colorSpace:En,depthBuffer:!1},r=Pc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pc(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ag(o)),this._blurMaterial=sg(o,e,t)}return r}_compileMaterial(e){const t=new Jt(this._lodPlanes[0],e);this._renderer.compile(t,Zo)}_sceneToCubeUV(e,t,i,r){const a=new Gt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Ac),u.toneMapping=Nn,u.autoClear=!1;const p=new Qa({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),g=new Jt(new dr,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Ac),v=!0);for(let h=0;h<6;h++){const b=h%3;b===0?(a.up.set(0,c[h],0),a.lookAt(l[h],0,0)):b===1?(a.up.set(0,0,c[h]),a.lookAt(0,l[h],0)):(a.up.set(0,c[h],0),a.lookAt(0,0,l[h]));const _=this._cubeSize;kr(r,b*_,h>2?_:0,_,_),u.setRenderTarget(r),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ri||e.mapping===Pi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lc());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new Jt(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const c=this._cubeSize;kr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(s,Zo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=Cc[(r-1)%Cc.length];this._blur(e,r-1,r,o,s)}t.autoClear=i}_blur(e,t,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,t,i,r,o,s,a){const c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Jt(this._lodPlanes[r],l),d=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Yn-1),v=o/g,m=isFinite(o)?1+Math.floor(u*v):Yn;m>Yn&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yn}`);const h=[];let b=0;for(let E=0;E<Yn;++E){const L=E/v,M=Math.exp(-L*L/2);h.push(M),E===0?b+=M:E<m&&(b+=2*M)}for(let E=0;E<h.length;E++)h[E]=h[E]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;const y=this._sizeLods[r],x=3*y*(r>_-Si?r-_+Si:0),S=4*(this._cubeSize-y);kr(t,x,S,3*y,2*y),c.setRenderTarget(t),c.render(f,Zo)}}function ag(n){const e=[],t=[],i=[];let r=n;const o=n-Si+1+Tc.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);t.push(a);let c=1/a;s>n-Si?c=Tc[s-n+Si-1]:s===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,v=3,m=2,h=1,b=new Float32Array(v*g*p),_=new Float32Array(m*g*p),y=new Float32Array(h*g*p);for(let S=0;S<p;S++){const E=S%3*2/3-1,L=S>2?0:-1,M=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];b.set(M,v*g*S),_.set(d,m*g*S);const T=[S,S,S,S,S,S];y.set(T,h*g*S)}const x=new Bt;x.setAttribute("position",new en(b,v)),x.setAttribute("uv",new en(_,m)),x.setAttribute("faceIndex",new en(y,h)),e.push(x),r>Si&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Pc(n,e,t){const i=new kn(n,e,t);return i.texture.mapping=fo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function kr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function sg(n,e,t){const i=new Float32Array(Yn),r=new O(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:is(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Lc(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:is(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Dc(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:is(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function is(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function cg(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ma||c===Sa,u=c===Ri||c===Pi;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Rc(n)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(l&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Rc(n));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",o),d.texture}else return null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function lg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ug(n,e,t,i){const r={},o=new WeakMap;function s(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,h=v.length;m<h;m++)e.remove(v[m])}d.removeEventListener("dispose",s),delete r[d.id];const p=o.get(d);p&&(e.remove(p),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const v=p[g];for(let m=0,h=v.length;m<h;m++)e.update(v[m],n.ARRAY_BUFFER)}}function l(f){const d=[],p=f.index,g=f.attributes.position;let v=0;if(p!==null){const b=p.array;v=p.version;for(let _=0,y=b.length;_<y;_+=3){const x=b[_+0],S=b[_+1],E=b[_+2];d.push(x,S,S,E,E,x)}}else if(g!==void 0){const b=g.array;v=g.version;for(let _=0,y=b.length/3-1;_<y;_+=3){const x=_+0,S=_+1,E=_+2;d.push(x,S,S,E,E,x)}}else return;const m=new(du(d)?yu:_u)(d,1);m.version=v;const h=o.get(f);h&&e.remove(h),o.set(f,m)}function u(f){const d=o.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&l(f)}else l(f);return o.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function fg(n,e,t,i){const r=i.isWebGL2;let o;function s(d){o=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function u(d,p){n.drawElements(o,p,a,d*c),t.update(p,o,1)}function f(d,p,g){if(g===0)return;let v,m;if(r)v=n,m="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](o,p,a,d*c,g),t.update(p,o,g)}this.setMode=s,this.setIndex=l,this.render=u,this.renderInstances=f}function hg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=a*(o/3);break;case n.LINES:t.lines+=a*(o/2);break;case n.LINE_STRIP:t.lines+=a*(o-1);break;case n.LINE_LOOP:t.lines+=a*o;break;case n.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function dg(n,e){return n[0]-e[0]}function pg(n,e){return Math.abs(e[1])-Math.abs(n[1])}function mg(n,e,t){const i={},r=new Float32Array(8),o=new WeakMap,s=new vt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,f){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=g!==void 0?g.length:0;let m=o.get(u);if(m===void 0||m.count!==v){let P=function(){Z.dispose(),o.delete(u),u.removeEventListener("dispose",P)};var p=P;m!==void 0&&m.texture.dispose();const _=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let M=0;_===!0&&(M=1),y===!0&&(M=2),x===!0&&(M=3);let T=u.attributes.position.count*M,z=1;T>e.maxTextureSize&&(z=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const G=new Float32Array(T*z*4*v),Z=new gu(G,T,z,v);Z.type=Un,Z.needsUpdate=!0;const C=M*4;for(let U=0;U<v;U++){const j=S[U],ne=E[U],ee=L[U],k=T*z*4*U;for(let D=0;D<j.count;D++){const B=D*C;_===!0&&(s.fromBufferAttribute(j,D),G[k+B+0]=s.x,G[k+B+1]=s.y,G[k+B+2]=s.z,G[k+B+3]=0),y===!0&&(s.fromBufferAttribute(ne,D),G[k+B+4]=s.x,G[k+B+5]=s.y,G[k+B+6]=s.z,G[k+B+7]=0),x===!0&&(s.fromBufferAttribute(ee,D),G[k+B+8]=s.x,G[k+B+9]=s.y,G[k+B+10]=s.z,G[k+B+11]=ee.itemSize===4?s.w:1)}}m={count:v,texture:Z,size:new me(T,z)},o.set(u,m),u.addEventListener("dispose",P)}let h=0;for(let _=0;_<d.length;_++)h+=d[_];const b=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",b),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let v=i[u.id];if(v===void 0||v.length!==g){v=[];for(let y=0;y<g;y++)v[y]=[y,0];i[u.id]=v}for(let y=0;y<g;y++){const x=v[y];x[0]=y,x[1]=d[y]}v.sort(pg);for(let y=0;y<8;y++)y<g&&v[y][1]?(a[y][0]=v[y][0],a[y][1]=v[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(dg);const m=u.morphAttributes.position,h=u.morphAttributes.normal;let b=0;for(let y=0;y<8;y++){const x=a[y],S=x[0],E=x[1];S!==Number.MAX_SAFE_INTEGER&&E?(m&&u.getAttribute("morphTarget"+y)!==m[S]&&u.setAttribute("morphTarget"+y,m[S]),h&&u.getAttribute("morphNormal"+y)!==h[S]&&u.setAttribute("morphNormal"+y,h[S]),r[y]=E,b+=E):(m&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),h&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const _=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(n,"morphTargetBaseInfluence",_),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function gg(n,e,t,i){let r=new WeakMap;function o(c){const l=i.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return f}function s(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:o,dispose:s}}const wu=new Lt,Tu=new gu,Au=new id,Cu=new Su,Oc=[],Ic=[],Uc=new Float32Array(16),Nc=new Float32Array(9),Fc=new Float32Array(4);function Fi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let o=Oc[r];if(o===void 0&&(o=new Float32Array(r),Oc[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,n[s].toArray(o,a)}return o}function ut(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ft(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function vo(n,e){let t=Ic[e];t===void 0&&(t=new Int32Array(e),Ic[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function vg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function _g(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;n.uniform2fv(this.addr,e),ft(t,e)}}function yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ut(t,e))return;n.uniform3fv(this.addr,e),ft(t,e)}}function xg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;n.uniform4fv(this.addr,e),ft(t,e)}}function bg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(ut(t,i))return;Fc.set(i),n.uniformMatrix2fv(this.addr,!1,Fc),ft(t,i)}}function Mg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(ut(t,i))return;Nc.set(i),n.uniformMatrix3fv(this.addr,!1,Nc),ft(t,i)}}function Sg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(ut(t,i))return;Uc.set(i),n.uniformMatrix4fv(this.addr,!1,Uc),ft(t,i)}}function Eg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function wg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;n.uniform2iv(this.addr,e),ft(t,e)}}function Tg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;n.uniform3iv(this.addr,e),ft(t,e)}}function Ag(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;n.uniform4iv(this.addr,e),ft(t,e)}}function Cg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Rg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;n.uniform2uiv(this.addr,e),ft(t,e)}}function Pg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;n.uniform3uiv(this.addr,e),ft(t,e)}}function Lg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;n.uniform4uiv(this.addr,e),ft(t,e)}}function Dg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||wu,r)}function Og(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Au,r)}function Ig(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Cu,r)}function Ug(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Tu,r)}function Ng(n){switch(n){case 5126:return vg;case 35664:return _g;case 35665:return yg;case 35666:return xg;case 35674:return bg;case 35675:return Mg;case 35676:return Sg;case 5124:case 35670:return Eg;case 35667:case 35671:return wg;case 35668:case 35672:return Tg;case 35669:case 35673:return Ag;case 5125:return Cg;case 36294:return Rg;case 36295:return Pg;case 36296:return Lg;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Og;case 35680:case 36300:case 36308:case 36293:return Ig;case 36289:case 36303:case 36311:case 36292:return Ug}}function Fg(n,e){n.uniform1fv(this.addr,e)}function Bg(n,e){const t=Fi(e,this.size,2);n.uniform2fv(this.addr,t)}function kg(n,e){const t=Fi(e,this.size,3);n.uniform3fv(this.addr,t)}function zg(n,e){const t=Fi(e,this.size,4);n.uniform4fv(this.addr,t)}function Hg(n,e){const t=Fi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Gg(n,e){const t=Fi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Vg(n,e){const t=Fi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Wg(n,e){n.uniform1iv(this.addr,e)}function jg(n,e){n.uniform2iv(this.addr,e)}function Xg(n,e){n.uniform3iv(this.addr,e)}function qg(n,e){n.uniform4iv(this.addr,e)}function $g(n,e){n.uniform1uiv(this.addr,e)}function Yg(n,e){n.uniform2uiv(this.addr,e)}function Kg(n,e){n.uniform3uiv(this.addr,e)}function Zg(n,e){n.uniform4uiv(this.addr,e)}function Jg(n,e,t){const i=this.cache,r=e.length,o=vo(t,r);ut(i,o)||(n.uniform1iv(this.addr,o),ft(i,o));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||wu,o[s])}function Qg(n,e,t){const i=this.cache,r=e.length,o=vo(t,r);ut(i,o)||(n.uniform1iv(this.addr,o),ft(i,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Au,o[s])}function ev(n,e,t){const i=this.cache,r=e.length,o=vo(t,r);ut(i,o)||(n.uniform1iv(this.addr,o),ft(i,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Cu,o[s])}function tv(n,e,t){const i=this.cache,r=e.length,o=vo(t,r);ut(i,o)||(n.uniform1iv(this.addr,o),ft(i,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Tu,o[s])}function nv(n){switch(n){case 5126:return Fg;case 35664:return Bg;case 35665:return kg;case 35666:return zg;case 35674:return Hg;case 35675:return Gg;case 35676:return Vg;case 5124:case 35670:return Wg;case 35667:case 35671:return jg;case 35668:case 35672:return Xg;case 35669:case 35673:return qg;case 5125:return $g;case 36294:return Yg;case 36295:return Kg;case 36296:return Zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Jg;case 35679:case 36299:case 36307:return Qg;case 35680:case 36300:case 36308:case 36293:return ev;case 36289:case 36303:case 36311:case 36292:return tv}}class iv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Ng(t.type)}}class rv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=nv(t.type)}}class ov{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,t[a.id],i)}}}const ta=/(\w+)(\])?(\[|\.)?/g;function Bc(n,e){n.seq.push(e),n.map[e.id]=e}function av(n,e,t){const i=n.name,r=i.length;for(ta.lastIndex=0;;){const o=ta.exec(i),s=ta.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&s+2===r){Bc(t,l===void 0?new iv(a,n,e):new rv(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new ov(a),Bc(t,f)),t=f}}}class qr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(t,r),s=e.getUniformLocation(t,o.name);av(o,s,this)}}setValue(e,t,i,r){const o=this.map[t];o!==void 0&&o.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let o=0,s=t.length;o!==s;++o){const a=t[o],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function kc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const sv=37297;let cv=0;function lv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return i.join(`
`)}function uv(n){const e=Ye.getPrimaries(Ye.workingColorSpace),t=Ye.getPrimaries(n);let i;switch(e===t?i="":e===to&&t===eo?i="LinearDisplayP3ToLinearSRGB":e===eo&&t===to&&(i="LinearSRGBToLinearDisplayP3"),n){case En:case ho:return[i,"LinearTransferOETF"];case mt:case Ka:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function zc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+lv(n.getShaderSource(e),s)}else return r}function fv(n,e){const t=uv(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function hv(n,e){let t;switch(e){case hh:t="Linear";break;case dh:t="Reinhard";break;case ph:t="OptimizedCineon";break;case mh:t="ACESFilmic";break;case gh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function dv(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Zi).join(`
`)}function pv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function mv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=n.getActiveAttrib(e,r),s=o.name;let a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:n.getAttribLocation(e,s),locationSize:a}}return t}function Zi(n){return n!==""}function Hc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ra(n){return n.replace(gv,_v)}const vv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function _v(n,e){let t=ke[e];if(t===void 0){const i=vv.get(e);if(i!==void 0)t=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ra(t)}const yv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vc(n){return n.replace(yv,xv)}function xv(n,e,t,i){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Wc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===iu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===zf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===gn&&(e="SHADOWMAP_TYPE_VSM"),e}function Mv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ri:case Pi:e="ENVMAP_TYPE_CUBE";break;case fo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Sv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Pi:e="ENVMAP_MODE_REFRACTION";break}return e}function Ev(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case $a:e="ENVMAP_BLENDING_MULTIPLY";break;case uh:e="ENVMAP_BLENDING_MIX";break;case fh:e="ENVMAP_BLENDING_ADD";break}return e}function wv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Tv(n,e,t,i){const r=n.getContext(),o=t.defines;let s=t.vertexShader,a=t.fragmentShader;const c=bv(t),l=Mv(t),u=Sv(t),f=Ev(t),d=wv(t),p=t.isWebGL2?"":dv(t),g=pv(o),v=r.createProgram();let m,h,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zi).join(`
`),m.length>0&&(m+=`
`),h=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zi).join(`
`),h.length>0&&(h+=`
`)):(m=[Wc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zi).join(`
`),h=[p,Wc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?ke.tonemapping_pars_fragment:"",t.toneMapping!==Nn?hv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,fv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zi).join(`
`)),s=Ra(s),s=Hc(s,t),s=Gc(s,t),a=Ra(a),a=Hc(a,t),a=Gc(a,t),s=Vc(s),a=Vc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const _=b+m+s,y=b+h+a,x=kc(r,r.VERTEX_SHADER,_),S=kc(r,r.FRAGMENT_SHADER,y);r.attachShader(v,x),r.attachShader(v,S),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function E(z){if(n.debug.checkShaderErrors){const G=r.getProgramInfoLog(v).trim(),Z=r.getShaderInfoLog(x).trim(),C=r.getShaderInfoLog(S).trim();let P=!0,U=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(P=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,x,S);else{const j=zc(r,x,"vertex"),ne=zc(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+G+`
`+j+`
`+ne)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(Z===""||C==="")&&(U=!1);U&&(z.diagnostics={runnable:P,programLog:G,vertexShader:{log:Z,prefix:m},fragmentShader:{log:C,prefix:h}})}r.deleteShader(x),r.deleteShader(S),L=new qr(r,v),M=mv(r,v)}let L;this.getUniforms=function(){return L===void 0&&E(this),L};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(v,sv)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=x,this.fragmentShader=S,this}let Av=0;class Cv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Rv(e),t.set(e,i)),i}}class Rv{constructor(e){this.id=Av++,this.code=e,this.usedTimes=0}}function Pv(n,e,t,i,r,o,s){const a=new Ja,c=new Cv,l=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return M===0?"uv":`uv${M}`}function m(M,T,z,G,Z){const C=G.fog,P=Z.geometry,U=M.isMeshStandardMaterial?G.environment:null,j=(M.isMeshStandardMaterial?t:e).get(M.envMap||U),ne=j&&j.mapping===fo?j.image.height:null,ee=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const k=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,D=k!==void 0?k.length:0;let B=0;P.morphAttributes.position!==void 0&&(B=1),P.morphAttributes.normal!==void 0&&(B=2),P.morphAttributes.color!==void 0&&(B=3);let re,J,W,ie;if(ee){const at=an[ee];re=at.vertexShader,J=at.fragmentShader}else re=M.vertexShader,J=M.fragmentShader,c.update(M),W=c.getVertexShaderID(M),ie=c.getFragmentShaderID(M);const F=n.getRenderTarget(),K=Z.isInstancedMesh===!0,fe=!!M.map,be=!!M.matcap,ge=!!j,H=!!M.aoMap,nt=!!M.lightMap,_e=!!M.bumpMap,Ce=!!M.normalMap,Te=!!M.displacementMap,Xe=!!M.emissiveMap,Ie=!!M.metalnessMap,Ne=!!M.roughnessMap,qe=M.anisotropy>0,ot=M.clearcoat>0,ht=M.iridescence>0,R=M.sheen>0,w=M.transmission>0,X=qe&&!!M.anisotropyMap,se=ot&&!!M.clearcoatMap,oe=ot&&!!M.clearcoatNormalMap,ce=ot&&!!M.clearcoatRoughnessMap,Ee=ht&&!!M.iridescenceMap,he=ht&&!!M.iridescenceThicknessMap,ve=R&&!!M.sheenColorMap,I=R&&!!M.sheenRoughnessMap,ue=!!M.specularMap,te=!!M.specularColorMap,De=!!M.specularIntensityMap,we=w&&!!M.transmissionMap,Pe=w&&!!M.thicknessMap,Me=!!M.gradientMap,xe=!!M.alphaMap,Ge=M.alphaTest>0,N=!!M.alphaHash,de=!!M.extensions,ae=!!P.attributes.uv1,Q=!!P.attributes.uv2,le=!!P.attributes.uv3;let Re=Nn;return M.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Re=n.toneMapping),{isWebGL2:u,shaderID:ee,shaderType:M.type,shaderName:M.name,vertexShader:re,fragmentShader:J,defines:M.defines,customVertexShaderID:W,customFragmentShaderID:ie,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:K,instancingColor:K&&Z.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:F===null?n.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:En,map:fe,matcap:be,envMap:ge,envMapMode:ge&&j.mapping,envMapCubeUVHeight:ne,aoMap:H,lightMap:nt,bumpMap:_e,normalMap:Ce,displacementMap:d&&Te,emissiveMap:Xe,normalMapObjectSpace:Ce&&M.normalMapType===Rh,normalMapTangentSpace:Ce&&M.normalMapType===hu,metalnessMap:Ie,roughnessMap:Ne,anisotropy:qe,anisotropyMap:X,clearcoat:ot,clearcoatMap:se,clearcoatNormalMap:oe,clearcoatRoughnessMap:ce,iridescence:ht,iridescenceMap:Ee,iridescenceThicknessMap:he,sheen:R,sheenColorMap:ve,sheenRoughnessMap:I,specularMap:ue,specularColorMap:te,specularIntensityMap:De,transmission:w,transmissionMap:we,thicknessMap:Pe,gradientMap:Me,opaque:M.transparent===!1&&M.blending===Ai,alphaMap:xe,alphaTest:Ge,alphaHash:N,combine:M.combine,mapUv:fe&&v(M.map.channel),aoMapUv:H&&v(M.aoMap.channel),lightMapUv:nt&&v(M.lightMap.channel),bumpMapUv:_e&&v(M.bumpMap.channel),normalMapUv:Ce&&v(M.normalMap.channel),displacementMapUv:Te&&v(M.displacementMap.channel),emissiveMapUv:Xe&&v(M.emissiveMap.channel),metalnessMapUv:Ie&&v(M.metalnessMap.channel),roughnessMapUv:Ne&&v(M.roughnessMap.channel),anisotropyMapUv:X&&v(M.anisotropyMap.channel),clearcoatMapUv:se&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:oe&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:he&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:I&&v(M.sheenRoughnessMap.channel),specularMapUv:ue&&v(M.specularMap.channel),specularColorMapUv:te&&v(M.specularColorMap.channel),specularIntensityMapUv:De&&v(M.specularIntensityMap.channel),transmissionMapUv:we&&v(M.transmissionMap.channel),thicknessMapUv:Pe&&v(M.thicknessMap.channel),alphaMapUv:xe&&v(M.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Ce||qe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUv1s:ae,vertexUv2s:Q,vertexUv3s:le,pointsUvs:Z.isPoints===!0&&!!P.attributes.uv&&(fe||xe),fog:!!C,useFog:M.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:Z.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:B,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:Re,useLegacyLights:n._useLegacyLights,decodeVideoTexture:fe&&M.map.isVideoTexture===!0&&Ye.getTransfer(M.map.colorSpace)===Je,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===yn,flipSided:M.side===Rt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:de&&M.extensions.derivatives===!0,extensionFragDepth:de&&M.extensions.fragDepth===!0,extensionDrawBuffers:de&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:de&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const z in M.defines)T.push(z),T.push(M.defines[z]);return M.isRawShaderMaterial===!1&&(b(T,M),_(T,M),T.push(n.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function b(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function _(M,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function y(M){const T=g[M.type];let z;if(T){const G=an[T];z=bu.clone(G.uniforms)}else z=M.uniforms;return z}function x(M,T){let z;for(let G=0,Z=l.length;G<Z;G++){const C=l[G];if(C.cacheKey===T){z=C,++z.usedTimes;break}}return z===void 0&&(z=new Tv(n,T,M,o),l.push(z)),z}function S(M){if(--M.usedTimes===0){const T=l.indexOf(M);l[T]=l[l.length-1],l.pop(),M.destroy()}}function E(M){c.remove(M)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:x,releaseProgram:S,releaseShaderCache:E,programs:l,dispose:L}}function Lv(){let n=new WeakMap;function e(o){let s=n.get(o);return s===void 0&&(s={},n.set(o,s)),s}function t(o){n.delete(o)}function i(o,s,a){n.get(o)[s]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Dv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function jc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Xc(){const n=[];let e=0;const t=[],i=[],r=[];function o(){e=0,t.length=0,i.length=0,r.length=0}function s(f,d,p,g,v,m){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=v,h.group=m),e++,h}function a(f,d,p,g,v,m){const h=s(f,d,p,g,v,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function c(f,d,p,g,v,m){const h=s(f,d,p,g,v,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function l(f,d){t.length>1&&t.sort(f||Dv),i.length>1&&i.sort(d||jc),r.length>1&&r.sort(d||jc)}function u(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:a,unshift:c,finish:u,sort:l}}function Ov(){let n=new WeakMap;function e(i,r){const o=n.get(i);let s;return o===void 0?(s=new Xc,n.set(i,[s])):r>=o.length?(s=new Xc,o.push(s)):s=o[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function Iv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new je};break;case"SpotLight":t={position:new O,direction:new O,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function Uv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Nv=0;function Fv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Bv(n,e){const t=new Iv,i=Uv(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new O);const o=new O,s=new Qe,a=new Qe;function c(u,f){let d=0,p=0,g=0;for(let G=0;G<9;G++)r.probe[G].set(0,0,0);let v=0,m=0,h=0,b=0,_=0,y=0,x=0,S=0,E=0,L=0,M=0;u.sort(Fv);const T=f===!0?Math.PI:1;for(let G=0,Z=u.length;G<Z;G++){const C=u[G],P=C.color,U=C.intensity,j=C.distance,ne=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=P.r*U*T,p+=P.g*U*T,g+=P.b*U*T;else if(C.isLightProbe){for(let ee=0;ee<9;ee++)r.probe[ee].addScaledVector(C.sh.coefficients[ee],U);M++}else if(C.isDirectionalLight){const ee=t.get(C);if(ee.color.copy(C.color).multiplyScalar(C.intensity*T),C.castShadow){const k=C.shadow,D=i.get(C);D.shadowBias=k.bias,D.shadowNormalBias=k.normalBias,D.shadowRadius=k.radius,D.shadowMapSize=k.mapSize,r.directionalShadow[v]=D,r.directionalShadowMap[v]=ne,r.directionalShadowMatrix[v]=C.shadow.matrix,y++}r.directional[v]=ee,v++}else if(C.isSpotLight){const ee=t.get(C);ee.position.setFromMatrixPosition(C.matrixWorld),ee.color.copy(P).multiplyScalar(U*T),ee.distance=j,ee.coneCos=Math.cos(C.angle),ee.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),ee.decay=C.decay,r.spot[h]=ee;const k=C.shadow;if(C.map&&(r.spotLightMap[E]=C.map,E++,k.updateMatrices(C),C.castShadow&&L++),r.spotLightMatrix[h]=k.matrix,C.castShadow){const D=i.get(C);D.shadowBias=k.bias,D.shadowNormalBias=k.normalBias,D.shadowRadius=k.radius,D.shadowMapSize=k.mapSize,r.spotShadow[h]=D,r.spotShadowMap[h]=ne,S++}h++}else if(C.isRectAreaLight){const ee=t.get(C);ee.color.copy(P).multiplyScalar(U),ee.halfWidth.set(C.width*.5,0,0),ee.halfHeight.set(0,C.height*.5,0),r.rectArea[b]=ee,b++}else if(C.isPointLight){const ee=t.get(C);if(ee.color.copy(C.color).multiplyScalar(C.intensity*T),ee.distance=C.distance,ee.decay=C.decay,C.castShadow){const k=C.shadow,D=i.get(C);D.shadowBias=k.bias,D.shadowNormalBias=k.normalBias,D.shadowRadius=k.radius,D.shadowMapSize=k.mapSize,D.shadowCameraNear=k.camera.near,D.shadowCameraFar=k.camera.far,r.pointShadow[m]=D,r.pointShadowMap[m]=ne,r.pointShadowMatrix[m]=C.shadow.matrix,x++}r.point[m]=ee,m++}else if(C.isHemisphereLight){const ee=t.get(C);ee.skyColor.copy(C.color).multiplyScalar(U*T),ee.groundColor.copy(C.groundColor).multiplyScalar(U*T),r.hemi[_]=ee,_++}}b>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=g;const z=r.hash;(z.directionalLength!==v||z.pointLength!==m||z.spotLength!==h||z.rectAreaLength!==b||z.hemiLength!==_||z.numDirectionalShadows!==y||z.numPointShadows!==x||z.numSpotShadows!==S||z.numSpotMaps!==E||z.numLightProbes!==M)&&(r.directional.length=v,r.spot.length=h,r.rectArea.length=b,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=x,r.pointShadowMap.length=x,r.spotShadow.length=S,r.spotShadowMap.length=S,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=x,r.spotLightMatrix.length=S+E-L,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=M,z.directionalLength=v,z.pointLength=m,z.spotLength=h,z.rectAreaLength=b,z.hemiLength=_,z.numDirectionalShadows=y,z.numPointShadows=x,z.numSpotShadows=S,z.numSpotMaps=E,z.numLightProbes=M,r.version=Nv++)}function l(u,f){let d=0,p=0,g=0,v=0,m=0;const h=f.matrixWorldInverse;for(let b=0,_=u.length;b<_;b++){const y=u[b];if(y.isDirectionalLight){const x=r.directional[d];x.direction.setFromMatrixPosition(y.matrixWorld),o.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(o),x.direction.transformDirection(h),d++}else if(y.isSpotLight){const x=r.spot[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(h),x.direction.setFromMatrixPosition(y.matrixWorld),o.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(o),x.direction.transformDirection(h),g++}else if(y.isRectAreaLight){const x=r.rectArea[v];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(h),a.identity(),s.copy(y.matrixWorld),s.premultiply(h),a.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const x=r.point[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(h),p++}else if(y.isHemisphereLight){const x=r.hemi[m];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(h),m++}}}return{setup:c,setupView:l,state:r}}function qc(n,e){const t=new Bv(n,e),i=[],r=[];function o(){i.length=0,r.length=0}function s(f){i.push(f)}function a(f){r.push(f)}function c(f){t.setup(i,f)}function l(f){t.setupView(i,f)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:s,pushShadow:a}}function kv(n,e){let t=new WeakMap;function i(o,s=0){const a=t.get(o);let c;return a===void 0?(c=new qc(n,e),t.set(o,[c])):s>=a.length?(c=new qc(n,e),a.push(c)):c=a[s],c}function r(){t=new WeakMap}return{get:i,dispose:r}}class zv extends Ni{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hv extends Ni{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Gv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Wv(n,e,t){let i=new es;const r=new me,o=new me,s=new vt,a=new zv({depthPacking:Ch}),c=new Hv,l={},u=t.maxTextureSize,f={[Bn]:Rt,[Rt]:Bn,[yn]:yn},d=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:Gv,fragmentShader:Vv}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Bt;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Jt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=iu;let h=this.type;this.render=function(x,S,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;const L=n.getRenderTarget(),M=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Mn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const G=h!==gn&&this.type===gn,Z=h===gn&&this.type!==gn;for(let C=0,P=x.length;C<P;C++){const U=x[C],j=U.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const ne=j.getFrameExtents();if(r.multiply(ne),o.copy(j.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/ne.x),r.x=o.x*ne.x,j.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/ne.y),r.y=o.y*ne.y,j.mapSize.y=o.y)),j.map===null||G===!0||Z===!0){const k=this.type!==gn?{minFilter:At,magFilter:At}:{};j.map!==null&&j.map.dispose(),j.map=new kn(r.x,r.y,k),j.map.texture.name=U.name+".shadowMap",j.camera.updateProjectionMatrix()}n.setRenderTarget(j.map),n.clear();const ee=j.getViewportCount();for(let k=0;k<ee;k++){const D=j.getViewport(k);s.set(o.x*D.x,o.y*D.y,o.x*D.z,o.y*D.w),z.viewport(s),j.updateMatrices(U,k),i=j.getFrustum(),y(S,E,j.camera,U,this.type)}j.isPointLightShadow!==!0&&this.type===gn&&b(j,E),j.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(L,M,T)};function b(x,S){const E=e.update(v);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,p.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new kn(r.x,r.y)),d.uniforms.shadow_pass.value=x.map.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,n.setRenderTarget(x.mapPass),n.clear(),n.renderBufferDirect(S,null,E,d,v,null),p.uniforms.shadow_pass.value=x.mapPass.texture,p.uniforms.resolution.value=x.mapSize,p.uniforms.radius.value=x.radius,n.setRenderTarget(x.map),n.clear(),n.renderBufferDirect(S,null,E,p,v,null)}function _(x,S,E,L){let M=null;const T=E.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(T!==void 0)M=T;else if(M=E.isPointLight===!0?c:a,n.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const z=M.uuid,G=S.uuid;let Z=l[z];Z===void 0&&(Z={},l[z]=Z);let C=Z[G];C===void 0&&(C=M.clone(),Z[G]=C),M=C}if(M.visible=S.visible,M.wireframe=S.wireframe,L===gn?M.side=S.shadowSide!==null?S.shadowSide:S.side:M.side=S.shadowSide!==null?S.shadowSide:f[S.side],M.alphaMap=S.alphaMap,M.alphaTest=S.alphaTest,M.map=S.map,M.clipShadows=S.clipShadows,M.clippingPlanes=S.clippingPlanes,M.clipIntersection=S.clipIntersection,M.displacementMap=S.displacementMap,M.displacementScale=S.displacementScale,M.displacementBias=S.displacementBias,M.wireframeLinewidth=S.wireframeLinewidth,M.linewidth=S.linewidth,E.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=n.properties.get(M);z.light=E}return M}function y(x,S,E,L,M){if(x.visible===!1)return;if(x.layers.test(S.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&M===gn)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,x.matrixWorld);const G=e.update(x),Z=x.material;if(Array.isArray(Z)){const C=G.groups;for(let P=0,U=C.length;P<U;P++){const j=C[P],ne=Z[j.materialIndex];if(ne&&ne.visible){const ee=_(x,ne,L,M);n.renderBufferDirect(E,null,G,ee,x,j)}}}else if(Z.visible){const C=_(x,Z,L,M);n.renderBufferDirect(E,null,G,C,x,null)}}const z=x.children;for(let G=0,Z=z.length;G<Z;G++)y(z[G],S,E,L,M)}}function jv(n,e,t){const i=t.isWebGL2;function r(){let N=!1;const de=new vt;let ae=null;const Q=new vt(0,0,0,0);return{setMask:function(le){ae!==le&&!N&&(n.colorMask(le,le,le,le),ae=le)},setLocked:function(le){N=le},setClear:function(le,Re,Ve,at,kt){kt===!0&&(le*=at,Re*=at,Ve*=at),de.set(le,Re,Ve,at),Q.equals(de)===!1&&(n.clearColor(le,Re,Ve,at),Q.copy(de))},reset:function(){N=!1,ae=null,Q.set(-1,0,0,0)}}}function o(){let N=!1,de=null,ae=null,Q=null;return{setTest:function(le){le?fe(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(le){de!==le&&!N&&(n.depthMask(le),de=le)},setFunc:function(le){if(ae!==le){switch(le){case ih:n.depthFunc(n.NEVER);break;case rh:n.depthFunc(n.ALWAYS);break;case oh:n.depthFunc(n.LESS);break;case Jr:n.depthFunc(n.LEQUAL);break;case ah:n.depthFunc(n.EQUAL);break;case sh:n.depthFunc(n.GEQUAL);break;case ch:n.depthFunc(n.GREATER);break;case lh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ae=le}},setLocked:function(le){N=le},setClear:function(le){Q!==le&&(n.clearDepth(le),Q=le)},reset:function(){N=!1,de=null,ae=null,Q=null}}}function s(){let N=!1,de=null,ae=null,Q=null,le=null,Re=null,Ve=null,at=null,kt=null;return{setTest:function(Ze){N||(Ze?fe(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(Ze){de!==Ze&&!N&&(n.stencilMask(Ze),de=Ze)},setFunc:function(Ze,St,rn){(ae!==Ze||Q!==St||le!==rn)&&(n.stencilFunc(Ze,St,rn),ae=Ze,Q=St,le=rn)},setOp:function(Ze,St,rn){(Re!==Ze||Ve!==St||at!==rn)&&(n.stencilOp(Ze,St,rn),Re=Ze,Ve=St,at=rn)},setLocked:function(Ze){N=Ze},setClear:function(Ze){kt!==Ze&&(n.clearStencil(Ze),kt=Ze)},reset:function(){N=!1,de=null,ae=null,Q=null,le=null,Re=null,Ve=null,at=null,kt=null}}}const a=new r,c=new o,l=new s,u=new WeakMap,f=new WeakMap;let d={},p={},g=new WeakMap,v=[],m=null,h=!1,b=null,_=null,y=null,x=null,S=null,E=null,L=null,M=new je(0,0,0),T=0,z=!1,G=null,Z=null,C=null,P=null,U=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,ee=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(k)[1]),ne=ee>=1):k.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),ne=ee>=2);let D=null,B={};const re=n.getParameter(n.SCISSOR_BOX),J=n.getParameter(n.VIEWPORT),W=new vt().fromArray(re),ie=new vt().fromArray(J);function F(N,de,ae,Q){const le=new Uint8Array(4),Re=n.createTexture();n.bindTexture(N,Re),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ve=0;Ve<ae;Ve++)i&&(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)?n.texImage3D(de,0,n.RGBA,1,1,Q,0,n.RGBA,n.UNSIGNED_BYTE,le):n.texImage2D(de+Ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,le);return Re}const K={};K[n.TEXTURE_2D]=F(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=F(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(K[n.TEXTURE_2D_ARRAY]=F(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=F(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),fe(n.DEPTH_TEST),c.setFunc(Jr),Ie(!1),Ne(Cs),fe(n.CULL_FACE),Te(Mn);function fe(N){d[N]!==!0&&(n.enable(N),d[N]=!0)}function be(N){d[N]!==!1&&(n.disable(N),d[N]=!1)}function ge(N,de){return p[N]!==de?(n.bindFramebuffer(N,de),p[N]=de,i&&(N===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=de),N===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=de)),!0):!1}function H(N,de){let ae=v,Q=!1;if(N)if(ae=g.get(de),ae===void 0&&(ae=[],g.set(de,ae)),N.isWebGLMultipleRenderTargets){const le=N.texture;if(ae.length!==le.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let Re=0,Ve=le.length;Re<Ve;Re++)ae[Re]=n.COLOR_ATTACHMENT0+Re;ae.length=le.length,Q=!0}}else ae[0]!==n.COLOR_ATTACHMENT0&&(ae[0]=n.COLOR_ATTACHMENT0,Q=!0);else ae[0]!==n.BACK&&(ae[0]=n.BACK,Q=!0);Q&&(t.isWebGL2?n.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function nt(N){return m!==N?(n.useProgram(N),m=N,!0):!1}const _e={[$n]:n.FUNC_ADD,[Gf]:n.FUNC_SUBTRACT,[Vf]:n.FUNC_REVERSE_SUBTRACT};if(i)_e[Ds]=n.MIN,_e[Os]=n.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(_e[Ds]=N.MIN_EXT,_e[Os]=N.MAX_EXT)}const Ce={[Wf]:n.ZERO,[jf]:n.ONE,[Xf]:n.SRC_COLOR,[xa]:n.SRC_ALPHA,[Jf]:n.SRC_ALPHA_SATURATE,[Kf]:n.DST_COLOR,[$f]:n.DST_ALPHA,[qf]:n.ONE_MINUS_SRC_COLOR,[ba]:n.ONE_MINUS_SRC_ALPHA,[Zf]:n.ONE_MINUS_DST_COLOR,[Yf]:n.ONE_MINUS_DST_ALPHA,[Qf]:n.CONSTANT_COLOR,[eh]:n.ONE_MINUS_CONSTANT_COLOR,[th]:n.CONSTANT_ALPHA,[nh]:n.ONE_MINUS_CONSTANT_ALPHA};function Te(N,de,ae,Q,le,Re,Ve,at,kt,Ze){if(N===Mn){h===!0&&(be(n.BLEND),h=!1);return}if(h===!1&&(fe(n.BLEND),h=!0),N!==Hf){if(N!==b||Ze!==z){if((_!==$n||S!==$n)&&(n.blendEquation(n.FUNC_ADD),_=$n,S=$n),Ze)switch(N){case Ai:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rs:n.blendFunc(n.ONE,n.ONE);break;case Ps:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ls:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ai:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rs:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ps:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ls:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,x=null,E=null,L=null,M.set(0,0,0),T=0,b=N,z=Ze}return}le=le||de,Re=Re||ae,Ve=Ve||Q,(de!==_||le!==S)&&(n.blendEquationSeparate(_e[de],_e[le]),_=de,S=le),(ae!==y||Q!==x||Re!==E||Ve!==L)&&(n.blendFuncSeparate(Ce[ae],Ce[Q],Ce[Re],Ce[Ve]),y=ae,x=Q,E=Re,L=Ve),(at.equals(M)===!1||kt!==T)&&(n.blendColor(at.r,at.g,at.b,kt),M.copy(at),T=kt),b=N,z=!1}function Xe(N,de){N.side===yn?be(n.CULL_FACE):fe(n.CULL_FACE);let ae=N.side===Rt;de&&(ae=!ae),Ie(ae),N.blending===Ai&&N.transparent===!1?Te(Mn):Te(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),c.setFunc(N.depthFunc),c.setTest(N.depthTest),c.setMask(N.depthWrite),a.setMask(N.colorWrite);const Q=N.stencilWrite;l.setTest(Q),Q&&(l.setMask(N.stencilWriteMask),l.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),l.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ot(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(N){G!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),G=N)}function Ne(N){N!==Bf?(fe(n.CULL_FACE),N!==Z&&(N===Cs?n.cullFace(n.BACK):N===kf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),Z=N}function qe(N){N!==C&&(ne&&n.lineWidth(N),C=N)}function ot(N,de,ae){N?(fe(n.POLYGON_OFFSET_FILL),(P!==de||U!==ae)&&(n.polygonOffset(de,ae),P=de,U=ae)):be(n.POLYGON_OFFSET_FILL)}function ht(N){N?fe(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function R(N){N===void 0&&(N=n.TEXTURE0+j-1),D!==N&&(n.activeTexture(N),D=N)}function w(N,de,ae){ae===void 0&&(D===null?ae=n.TEXTURE0+j-1:ae=D);let Q=B[ae];Q===void 0&&(Q={type:void 0,texture:void 0},B[ae]=Q),(Q.type!==N||Q.texture!==de)&&(D!==ae&&(n.activeTexture(ae),D=ae),n.bindTexture(N,de||K[N]),Q.type=N,Q.texture=de)}function X(){const N=B[D];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function se(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ce(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function he(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function I(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function De(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function we(N){W.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),W.copy(N))}function Pe(N){ie.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),ie.copy(N))}function Me(N,de){let ae=f.get(de);ae===void 0&&(ae=new WeakMap,f.set(de,ae));let Q=ae.get(N);Q===void 0&&(Q=n.getUniformBlockIndex(de,N.name),ae.set(N,Q))}function xe(N,de){const Q=f.get(de).get(N);u.get(de)!==Q&&(n.uniformBlockBinding(de,Q,N.__bindingPointIndex),u.set(de,Q))}function Ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},D=null,B={},p={},g=new WeakMap,v=[],m=null,h=!1,b=null,_=null,y=null,x=null,S=null,E=null,L=null,M=new je(0,0,0),T=0,z=!1,G=null,Z=null,C=null,P=null,U=null,W.set(0,0,n.canvas.width,n.canvas.height),ie.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:fe,disable:be,bindFramebuffer:ge,drawBuffers:H,useProgram:nt,setBlending:Te,setMaterial:Xe,setFlipSided:Ie,setCullFace:Ne,setLineWidth:qe,setPolygonOffset:ot,setScissorTest:ht,activeTexture:R,bindTexture:w,unbindTexture:X,compressedTexImage2D:se,compressedTexImage3D:oe,texImage2D:te,texImage3D:De,updateUBOMapping:Me,uniformBlockBinding:xe,texStorage2D:I,texStorage3D:ue,texSubImage2D:ce,texSubImage3D:Ee,compressedTexSubImage2D:he,compressedTexSubImage3D:ve,scissor:we,viewport:Pe,reset:Ge}}function Xv(n,e,t,i,r,o,s){const a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let v;const m=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(R,w){return h?new OffscreenCanvas(R,w):ur("canvas")}function _(R,w,X,se){let oe=1;if((R.width>se||R.height>se)&&(oe=se/Math.max(R.width,R.height)),oe<1||w===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ce=w?io:Math.floor,Ee=ce(oe*R.width),he=ce(oe*R.height);v===void 0&&(v=b(Ee,he));const ve=X?b(Ee,he):v;return ve.width=Ee,ve.height=he,ve.getContext("2d").drawImage(R,0,0,Ee,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Ee+"x"+he+")."),ve}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function y(R){return Aa(R.width)&&Aa(R.height)}function x(R){return a?!1:R.wrapS!==Kt||R.wrapT!==Kt||R.minFilter!==At&&R.minFilter!==Ht}function S(R,w){return R.generateMipmaps&&w&&R.minFilter!==At&&R.minFilter!==Ht}function E(R){n.generateMipmap(R)}function L(R,w,X,se,oe=!1){if(a===!1)return w;if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ce=w;if(w===n.RED&&(X===n.FLOAT&&(ce=n.R32F),X===n.HALF_FLOAT&&(ce=n.R16F),X===n.UNSIGNED_BYTE&&(ce=n.R8)),w===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(ce=n.R8UI),X===n.UNSIGNED_SHORT&&(ce=n.R16UI),X===n.UNSIGNED_INT&&(ce=n.R32UI),X===n.BYTE&&(ce=n.R8I),X===n.SHORT&&(ce=n.R16I),X===n.INT&&(ce=n.R32I)),w===n.RG&&(X===n.FLOAT&&(ce=n.RG32F),X===n.HALF_FLOAT&&(ce=n.RG16F),X===n.UNSIGNED_BYTE&&(ce=n.RG8)),w===n.RGBA){const Ee=oe?Qr:Ye.getTransfer(se);X===n.FLOAT&&(ce=n.RGBA32F),X===n.HALF_FLOAT&&(ce=n.RGBA16F),X===n.UNSIGNED_BYTE&&(ce=Ee===Je?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(ce=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(ce=n.RGB5_A1)}return(ce===n.R16F||ce===n.R32F||ce===n.RG16F||ce===n.RG32F||ce===n.RGBA16F||ce===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function M(R,w,X){return S(R,X)===!0||R.isFramebufferTexture&&R.minFilter!==At&&R.minFilter!==Ht?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function T(R){return R===At||R===Is||R===Co?n.NEAREST:n.LINEAR}function z(R){const w=R.target;w.removeEventListener("dispose",z),Z(w),w.isVideoTexture&&g.delete(w)}function G(R){const w=R.target;w.removeEventListener("dispose",G),P(w)}function Z(R){const w=i.get(R);if(w.__webglInit===void 0)return;const X=R.source,se=m.get(X);if(se){const oe=se[w.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&C(R),Object.keys(se).length===0&&m.delete(X)}i.remove(R)}function C(R){const w=i.get(R);n.deleteTexture(w.__webglTexture);const X=R.source,se=m.get(X);delete se[w.__cacheKey],s.memory.textures--}function P(R){const w=R.texture,X=i.get(R),se=i.get(w);if(se.__webglTexture!==void 0&&(n.deleteTexture(se.__webglTexture),s.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(X.__webglFramebuffer[oe]))for(let ce=0;ce<X.__webglFramebuffer[oe].length;ce++)n.deleteFramebuffer(X.__webglFramebuffer[oe][ce]);else n.deleteFramebuffer(X.__webglFramebuffer[oe]);X.__webglDepthbuffer&&n.deleteRenderbuffer(X.__webglDepthbuffer[oe])}else{if(Array.isArray(X.__webglFramebuffer))for(let oe=0;oe<X.__webglFramebuffer.length;oe++)n.deleteFramebuffer(X.__webglFramebuffer[oe]);else n.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&n.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&n.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let oe=0;oe<X.__webglColorRenderbuffer.length;oe++)X.__webglColorRenderbuffer[oe]&&n.deleteRenderbuffer(X.__webglColorRenderbuffer[oe]);X.__webglDepthRenderbuffer&&n.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let oe=0,ce=w.length;oe<ce;oe++){const Ee=i.get(w[oe]);Ee.__webglTexture&&(n.deleteTexture(Ee.__webglTexture),s.memory.textures--),i.remove(w[oe])}i.remove(w),i.remove(R)}let U=0;function j(){U=0}function ne(){const R=U;return R>=c&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+c),U+=1,R}function ee(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function k(R,w){const X=i.get(R);if(R.isVideoTexture&&ot(R),R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){const se=R.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(X,R,w);return}}t.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+w)}function D(R,w){const X=i.get(R);if(R.version>0&&X.__version!==R.version){fe(X,R,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+w)}function B(R,w){const X=i.get(R);if(R.version>0&&X.__version!==R.version){fe(X,R,w);return}t.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+w)}function re(R,w){const X=i.get(R);if(R.version>0&&X.__version!==R.version){be(X,R,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+w)}const J={[Ea]:n.REPEAT,[Kt]:n.CLAMP_TO_EDGE,[wa]:n.MIRRORED_REPEAT},W={[At]:n.NEAREST,[Is]:n.NEAREST_MIPMAP_NEAREST,[Co]:n.NEAREST_MIPMAP_LINEAR,[Ht]:n.LINEAR,[vh]:n.LINEAR_MIPMAP_NEAREST,[cr]:n.LINEAR_MIPMAP_LINEAR},ie={[Ph]:n.NEVER,[Fh]:n.ALWAYS,[Lh]:n.LESS,[Oh]:n.LEQUAL,[Dh]:n.EQUAL,[Nh]:n.GEQUAL,[Ih]:n.GREATER,[Uh]:n.NOTEQUAL};function F(R,w,X){if(X?(n.texParameteri(R,n.TEXTURE_WRAP_S,J[w.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,J[w.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,J[w.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,W[w.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,W[w.minFilter])):(n.texParameteri(R,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(R,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(w.wrapS!==Kt||w.wrapT!==Kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(R,n.TEXTURE_MAG_FILTER,T(w.magFilter)),n.texParameteri(R,n.TEXTURE_MIN_FILTER,T(w.minFilter)),w.minFilter!==At&&w.minFilter!==Ht&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ie[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===At||w.minFilter!==Co&&w.minFilter!==cr||w.type===Un&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===Li&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(n.texParameterf(R,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function K(R,w){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",z));const se=w.source;let oe=m.get(se);oe===void 0&&(oe={},m.set(se,oe));const ce=ee(w);if(ce!==R.__cacheKey){oe[ce]===void 0&&(oe[ce]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,X=!0),oe[ce].usedTimes++;const Ee=oe[R.__cacheKey];Ee!==void 0&&(oe[R.__cacheKey].usedTimes--,Ee.usedTimes===0&&C(w)),R.__cacheKey=ce,R.__webglTexture=oe[ce].texture}return X}function fe(R,w,X){let se=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(se=n.TEXTURE_3D);const oe=K(R,w),ce=w.source;t.bindTexture(se,R.__webglTexture,n.TEXTURE0+X);const Ee=i.get(ce);if(ce.version!==Ee.__version||oe===!0){t.activeTexture(n.TEXTURE0+X);const he=Ye.getPrimaries(Ye.workingColorSpace),ve=w.colorSpace===Vt?null:Ye.getPrimaries(w.colorSpace),I=w.colorSpace===Vt||he===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,I);const ue=x(w)&&y(w.image)===!1;let te=_(w.image,ue,!1,u);te=ht(w,te);const De=y(te)||a,we=o.convert(w.format,w.colorSpace);let Pe=o.convert(w.type),Me=L(w.internalFormat,we,Pe,w.colorSpace,w.isVideoTexture);F(se,w,De);let xe;const Ge=w.mipmaps,N=a&&w.isVideoTexture!==!0,de=Ee.__version===void 0||oe===!0,ae=M(w,te,De);if(w.isDepthTexture)Me=n.DEPTH_COMPONENT,a?w.type===Un?Me=n.DEPTH_COMPONENT32F:w.type===In?Me=n.DEPTH_COMPONENT24:w.type===Kn?Me=n.DEPTH24_STENCIL8:Me=n.DEPTH_COMPONENT16:w.type===Un&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Zn&&Me===n.DEPTH_COMPONENT&&w.type!==Ya&&w.type!==In&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=In,Pe=o.convert(w.type)),w.format===Di&&Me===n.DEPTH_COMPONENT&&(Me=n.DEPTH_STENCIL,w.type!==Kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Kn,Pe=o.convert(w.type))),de&&(N?t.texStorage2D(n.TEXTURE_2D,1,Me,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,Me,te.width,te.height,0,we,Pe,null));else if(w.isDataTexture)if(Ge.length>0&&De){N&&de&&t.texStorage2D(n.TEXTURE_2D,ae,Me,Ge[0].width,Ge[0].height);for(let Q=0,le=Ge.length;Q<le;Q++)xe=Ge[Q],N?t.texSubImage2D(n.TEXTURE_2D,Q,0,0,xe.width,xe.height,we,Pe,xe.data):t.texImage2D(n.TEXTURE_2D,Q,Me,xe.width,xe.height,0,we,Pe,xe.data);w.generateMipmaps=!1}else N?(de&&t.texStorage2D(n.TEXTURE_2D,ae,Me,te.width,te.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,te.width,te.height,we,Pe,te.data)):t.texImage2D(n.TEXTURE_2D,0,Me,te.width,te.height,0,we,Pe,te.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){N&&de&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,Me,Ge[0].width,Ge[0].height,te.depth);for(let Q=0,le=Ge.length;Q<le;Q++)xe=Ge[Q],w.format!==Zt?we!==null?N?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,xe.width,xe.height,te.depth,we,xe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Me,xe.width,xe.height,te.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,xe.width,xe.height,te.depth,we,Pe,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,Me,xe.width,xe.height,te.depth,0,we,Pe,xe.data)}else{N&&de&&t.texStorage2D(n.TEXTURE_2D,ae,Me,Ge[0].width,Ge[0].height);for(let Q=0,le=Ge.length;Q<le;Q++)xe=Ge[Q],w.format!==Zt?we!==null?N?t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,xe.width,xe.height,we,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,Me,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?t.texSubImage2D(n.TEXTURE_2D,Q,0,0,xe.width,xe.height,we,Pe,xe.data):t.texImage2D(n.TEXTURE_2D,Q,Me,xe.width,xe.height,0,we,Pe,xe.data)}else if(w.isDataArrayTexture)N?(de&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,Me,te.width,te.height,te.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,we,Pe,te.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,te.width,te.height,te.depth,0,we,Pe,te.data);else if(w.isData3DTexture)N?(de&&t.texStorage3D(n.TEXTURE_3D,ae,Me,te.width,te.height,te.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,we,Pe,te.data)):t.texImage3D(n.TEXTURE_3D,0,Me,te.width,te.height,te.depth,0,we,Pe,te.data);else if(w.isFramebufferTexture){if(de)if(N)t.texStorage2D(n.TEXTURE_2D,ae,Me,te.width,te.height);else{let Q=te.width,le=te.height;for(let Re=0;Re<ae;Re++)t.texImage2D(n.TEXTURE_2D,Re,Me,Q,le,0,we,Pe,null),Q>>=1,le>>=1}}else if(Ge.length>0&&De){N&&de&&t.texStorage2D(n.TEXTURE_2D,ae,Me,Ge[0].width,Ge[0].height);for(let Q=0,le=Ge.length;Q<le;Q++)xe=Ge[Q],N?t.texSubImage2D(n.TEXTURE_2D,Q,0,0,we,Pe,xe):t.texImage2D(n.TEXTURE_2D,Q,Me,we,Pe,xe);w.generateMipmaps=!1}else N?(de&&t.texStorage2D(n.TEXTURE_2D,ae,Me,te.width,te.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,we,Pe,te)):t.texImage2D(n.TEXTURE_2D,0,Me,we,Pe,te);S(w,De)&&E(se),Ee.__version=ce.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function be(R,w,X){if(w.image.length!==6)return;const se=K(R,w),oe=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+X);const ce=i.get(oe);if(oe.version!==ce.__version||se===!0){t.activeTexture(n.TEXTURE0+X);const Ee=Ye.getPrimaries(Ye.workingColorSpace),he=w.colorSpace===Vt?null:Ye.getPrimaries(w.colorSpace),ve=w.colorSpace===Vt||Ee===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const I=w.isCompressedTexture||w.image[0].isCompressedTexture,ue=w.image[0]&&w.image[0].isDataTexture,te=[];for(let Q=0;Q<6;Q++)!I&&!ue?te[Q]=_(w.image[Q],!1,!0,l):te[Q]=ue?w.image[Q].image:w.image[Q],te[Q]=ht(w,te[Q]);const De=te[0],we=y(De)||a,Pe=o.convert(w.format,w.colorSpace),Me=o.convert(w.type),xe=L(w.internalFormat,Pe,Me,w.colorSpace),Ge=a&&w.isVideoTexture!==!0,N=ce.__version===void 0||se===!0;let de=M(w,De,we);F(n.TEXTURE_CUBE_MAP,w,we);let ae;if(I){Ge&&N&&t.texStorage2D(n.TEXTURE_CUBE_MAP,de,xe,De.width,De.height);for(let Q=0;Q<6;Q++){ae=te[Q].mipmaps;for(let le=0;le<ae.length;le++){const Re=ae[le];w.format!==Zt?Pe!==null?Ge?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le,0,0,Re.width,Re.height,Pe,Re.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le,xe,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le,0,0,Re.width,Re.height,Pe,Me,Re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le,xe,Re.width,Re.height,0,Pe,Me,Re.data)}}}else{ae=w.mipmaps,Ge&&N&&(ae.length>0&&de++,t.texStorage2D(n.TEXTURE_CUBE_MAP,de,xe,te[0].width,te[0].height));for(let Q=0;Q<6;Q++)if(ue){Ge?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,te[Q].width,te[Q].height,Pe,Me,te[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,xe,te[Q].width,te[Q].height,0,Pe,Me,te[Q].data);for(let le=0;le<ae.length;le++){const Ve=ae[le].image[Q].image;Ge?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le+1,0,0,Ve.width,Ve.height,Pe,Me,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le+1,xe,Ve.width,Ve.height,0,Pe,Me,Ve.data)}}else{Ge?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Pe,Me,te[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,xe,Pe,Me,te[Q]);for(let le=0;le<ae.length;le++){const Re=ae[le];Ge?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le+1,0,0,Pe,Me,Re.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le+1,xe,Pe,Me,Re.image[Q])}}}S(w,we)&&E(n.TEXTURE_CUBE_MAP),ce.__version=oe.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function ge(R,w,X,se,oe,ce){const Ee=o.convert(X.format,X.colorSpace),he=o.convert(X.type),ve=L(X.internalFormat,Ee,he,X.colorSpace);if(!i.get(w).__hasExternalTextures){const ue=Math.max(1,w.width>>ce),te=Math.max(1,w.height>>ce);oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,ce,ve,ue,te,w.depth,0,Ee,he,null):t.texImage2D(oe,ce,ve,ue,te,0,Ee,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),qe(w)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,oe,i.get(X).__webglTexture,0,Ne(w)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,oe,i.get(X).__webglTexture,ce),t.bindFramebuffer(n.FRAMEBUFFER,null)}function H(R,w,X){if(n.bindRenderbuffer(n.RENDERBUFFER,R),w.depthBuffer&&!w.stencilBuffer){let se=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(X||qe(w)){const oe=w.depthTexture;oe&&oe.isDepthTexture&&(oe.type===Un?se=n.DEPTH_COMPONENT32F:oe.type===In&&(se=n.DEPTH_COMPONENT24));const ce=Ne(w);qe(w)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,se,w.width,w.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,se,w.width,w.height)}else n.renderbufferStorage(n.RENDERBUFFER,se,w.width,w.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,R)}else if(w.depthBuffer&&w.stencilBuffer){const se=Ne(w);X&&qe(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,se,n.DEPTH24_STENCIL8,w.width,w.height):qe(w)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,n.DEPTH24_STENCIL8,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,R)}else{const se=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let oe=0;oe<se.length;oe++){const ce=se[oe],Ee=o.convert(ce.format,ce.colorSpace),he=o.convert(ce.type),ve=L(ce.internalFormat,Ee,he,ce.colorSpace),I=Ne(w);X&&qe(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,I,ve,w.width,w.height):qe(w)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,I,ve,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,ve,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function nt(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),k(w.depthTexture,0);const se=i.get(w.depthTexture).__webglTexture,oe=Ne(w);if(w.depthTexture.format===Zn)qe(w)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0);else if(w.depthTexture.format===Di)qe(w)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function _e(R){const w=i.get(R),X=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");nt(w.__webglFramebuffer,R)}else if(X){w.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[se]),w.__webglDepthbuffer[se]=n.createRenderbuffer(),H(w.__webglDepthbuffer[se],R,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),H(w.__webglDepthbuffer,R,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(R,w,X){const se=i.get(R);w!==void 0&&ge(se.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&_e(R)}function Te(R){const w=R.texture,X=i.get(R),se=i.get(w);R.addEventListener("dispose",G),R.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=w.version,s.memory.textures++);const oe=R.isWebGLCubeRenderTarget===!0,ce=R.isWebGLMultipleRenderTargets===!0,Ee=y(R)||a;if(oe){X.__webglFramebuffer=[];for(let he=0;he<6;he++)if(a&&w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[he]=[];for(let ve=0;ve<w.mipmaps.length;ve++)X.__webglFramebuffer[he][ve]=n.createFramebuffer()}else X.__webglFramebuffer[he]=n.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let he=0;he<w.mipmaps.length;he++)X.__webglFramebuffer[he]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(ce)if(r.drawBuffers){const he=R.texture;for(let ve=0,I=he.length;ve<I;ve++){const ue=i.get(he[ve]);ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&qe(R)===!1){const he=ce?w:[w];X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ve=0;ve<he.length;ve++){const I=he[ve];X.__webglColorRenderbuffer[ve]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[ve]);const ue=o.convert(I.format,I.colorSpace),te=o.convert(I.type),De=L(I.internalFormat,ue,te,I.colorSpace,R.isXRRenderTarget===!0),we=Ne(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,we,De,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,X.__webglColorRenderbuffer[ve])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),H(X.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),F(n.TEXTURE_CUBE_MAP,w,Ee);for(let he=0;he<6;he++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let ve=0;ve<w.mipmaps.length;ve++)ge(X.__webglFramebuffer[he][ve],R,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ve);else ge(X.__webglFramebuffer[he],R,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);S(w,Ee)&&E(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){const he=R.texture;for(let ve=0,I=he.length;ve<I;ve++){const ue=he[ve],te=i.get(ue);t.bindTexture(n.TEXTURE_2D,te.__webglTexture),F(n.TEXTURE_2D,ue,Ee),ge(X.__webglFramebuffer,R,ue,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,0),S(ue,Ee)&&E(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?he=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,se.__webglTexture),F(he,w,Ee),a&&w.mipmaps&&w.mipmaps.length>0)for(let ve=0;ve<w.mipmaps.length;ve++)ge(X.__webglFramebuffer[ve],R,w,n.COLOR_ATTACHMENT0,he,ve);else ge(X.__webglFramebuffer,R,w,n.COLOR_ATTACHMENT0,he,0);S(w,Ee)&&E(he),t.unbindTexture()}R.depthBuffer&&_e(R)}function Xe(R){const w=y(R)||a,X=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let se=0,oe=X.length;se<oe;se++){const ce=X[se];if(S(ce,w)){const Ee=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,he=i.get(ce).__webglTexture;t.bindTexture(Ee,he),E(Ee),t.unbindTexture()}}}function Ie(R){if(a&&R.samples>0&&qe(R)===!1){const w=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],X=R.width,se=R.height;let oe=n.COLOR_BUFFER_BIT;const ce=[],Ee=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(R),ve=R.isWebGLMultipleRenderTargets===!0;if(ve)for(let I=0;I<w.length;I++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+I,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+I,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let I=0;I<w.length;I++){ce.push(n.COLOR_ATTACHMENT0+I),R.depthBuffer&&ce.push(Ee);const ue=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(ue===!1&&(R.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),ve&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[I]),ue===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ee]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ee])),ve){const te=i.get(w[I]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,te,0)}n.blitFramebuffer(0,0,X,se,0,0,X,se,oe,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ve)for(let I=0;I<w.length;I++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+I,n.RENDERBUFFER,he.__webglColorRenderbuffer[I]);const ue=i.get(w[I]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+I,n.TEXTURE_2D,ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function Ne(R){return Math.min(f,R.samples)}function qe(R){const w=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ot(R){const w=s.render.frame;g.get(R)!==w&&(g.set(R,w),R.update())}function ht(R,w){const X=R.colorSpace,se=R.format,oe=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Ta||X!==En&&X!==Vt&&(Ye.getTransfer(X)===Je?a===!1?e.has("EXT_sRGB")===!0&&se===Zt?(R.format=Ta,R.minFilter=Ht,R.generateMipmaps=!1):w=pu.sRGBToLinear(w):(se!==Zt||oe!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),w}this.allocateTextureUnit=ne,this.resetTextureUnits=j,this.setTexture2D=k,this.setTexture2DArray=D,this.setTexture3D=B,this.setTextureCube=re,this.rebindTextures=Ce,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=qe}function qv(n,e,t){const i=t.isWebGL2;function r(o,s=Vt){let a;const c=Ye.getTransfer(s);if(o===Fn)return n.UNSIGNED_BYTE;if(o===au)return n.UNSIGNED_SHORT_4_4_4_4;if(o===su)return n.UNSIGNED_SHORT_5_5_5_1;if(o===_h)return n.BYTE;if(o===yh)return n.SHORT;if(o===Ya)return n.UNSIGNED_SHORT;if(o===ou)return n.INT;if(o===In)return n.UNSIGNED_INT;if(o===Un)return n.FLOAT;if(o===Li)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===xh)return n.ALPHA;if(o===Zt)return n.RGBA;if(o===bh)return n.LUMINANCE;if(o===Mh)return n.LUMINANCE_ALPHA;if(o===Zn)return n.DEPTH_COMPONENT;if(o===Di)return n.DEPTH_STENCIL;if(o===Ta)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===Sh)return n.RED;if(o===cu)return n.RED_INTEGER;if(o===Eh)return n.RG;if(o===lu)return n.RG_INTEGER;if(o===uu)return n.RGBA_INTEGER;if(o===Ro||o===Po||o===Lo||o===Do)if(c===Je)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===Ro)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Po)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Lo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Do)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===Ro)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Po)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Lo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Do)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Us||o===Ns||o===Fs||o===Bs)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===Us)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Ns)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Fs)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Bs)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===wh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===ks||o===zs)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===ks)return c===Je?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===zs)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Hs||o===Gs||o===Vs||o===Ws||o===js||o===Xs||o===qs||o===$s||o===Ys||o===Ks||o===Zs||o===Js||o===Qs||o===ec)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===Hs)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Gs)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Vs)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Ws)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===js)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Xs)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===qs)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===$s)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Ys)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Ks)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Zs)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Js)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Qs)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===ec)return c===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Oo||o===tc||o===nc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===Oo)return c===Je?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===tc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===nc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===Th||o===ic||o===rc||o===oc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===Oo)return a.COMPRESSED_RED_RGTC1_EXT;if(o===ic)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===rc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===oc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Kn?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[o]!==void 0?n[o]:null}return{convert:r}}class $v extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let Ei=class extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}};const Yv={type:"move"};class na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,o=null,s=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),h=this._getHandJoint(l,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yv)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ei;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Kv extends Lt{constructor(e,t,i,r,o,s,a,c,l,u){if(u=u!==void 0?u:Zn,u!==Zn&&u!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Zn&&(i=In),i===void 0&&u===Di&&(i=Kn),super(null,r,o,s,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:At,this.minFilter=c!==void 0?c:At,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Zv extends nn{constructor(e,t){super();const i=this;let r=null,o=1,s=null,a="local-floor",c=1,l=null,u=null,f=null,d=null,p=null,g=null;const v=t.getContextAttributes();let m=null,h=null;const b=[],_=[],y=new Gt;y.layers.enable(1),y.viewport=new vt;const x=new Gt;x.layers.enable(2),x.viewport=new vt;const S=[y,x],E=new $v;E.layers.enable(1),E.layers.enable(2);let L=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let B=b[D];return B===void 0&&(B=new na,b[D]=B),B.getTargetRaySpace()},this.getControllerGrip=function(D){let B=b[D];return B===void 0&&(B=new na,b[D]=B),B.getGripSpace()},this.getHand=function(D){let B=b[D];return B===void 0&&(B=new na,b[D]=B),B.getHandSpace()};function T(D){const B=_.indexOf(D.inputSource);if(B===-1)return;const re=b[B];re!==void 0&&(re.update(D.inputSource,D.frame,l||s),re.dispatchEvent({type:D.type,data:D.inputSource}))}function z(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",G);for(let D=0;D<b.length;D++){const B=_[D];B!==null&&(_[D]=null,b[D].disconnect(B))}L=null,M=null,e.setRenderTarget(m),p=null,d=null,f=null,r=null,h=null,k.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){o=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(D){l=D},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(D){if(r=D,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",z),r.addEventListener("inputsourceschange",G),v.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const B={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,t,B),r.updateRenderState({baseLayer:p}),h=new kn(p.framebufferWidth,p.framebufferHeight,{format:Zt,type:Fn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let B=null,re=null,J=null;v.depth&&(J=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,B=v.stencil?Di:Zn,re=v.stencil?Kn:In);const W={colorFormat:t.RGBA8,depthFormat:J,scaleFactor:o};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(W),r.updateRenderState({layers:[d]}),h=new kn(d.textureWidth,d.textureHeight,{format:Zt,type:Fn,depthTexture:new Kv(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const ie=e.properties.get(h);ie.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await r.requestReferenceSpace(a),k.setContext(r),k.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function G(D){for(let B=0;B<D.removed.length;B++){const re=D.removed[B],J=_.indexOf(re);J>=0&&(_[J]=null,b[J].disconnect(re))}for(let B=0;B<D.added.length;B++){const re=D.added[B];let J=_.indexOf(re);if(J===-1){for(let ie=0;ie<b.length;ie++)if(ie>=_.length){_.push(re),J=ie;break}else if(_[ie]===null){_[ie]=re,J=ie;break}if(J===-1)break}const W=b[J];W&&W.connect(re)}}const Z=new O,C=new O;function P(D,B,re){Z.setFromMatrixPosition(B.matrixWorld),C.setFromMatrixPosition(re.matrixWorld);const J=Z.distanceTo(C),W=B.projectionMatrix.elements,ie=re.projectionMatrix.elements,F=W[14]/(W[10]-1),K=W[14]/(W[10]+1),fe=(W[9]+1)/W[5],be=(W[9]-1)/W[5],ge=(W[8]-1)/W[0],H=(ie[8]+1)/ie[0],nt=F*ge,_e=F*H,Ce=J/(-ge+H),Te=Ce*-ge;B.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Te),D.translateZ(Ce),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const Xe=F+Ce,Ie=K+Ce,Ne=nt-Te,qe=_e+(J-Te),ot=fe*K/Ie*Xe,ht=be*K/Ie*Xe;D.projectionMatrix.makePerspective(Ne,qe,ot,ht,Xe,Ie),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}function U(D,B){B===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(B.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(r===null)return;E.near=x.near=y.near=D.near,E.far=x.far=y.far=D.far,(L!==E.near||M!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),L=E.near,M=E.far);const B=D.parent,re=E.cameras;U(E,B);for(let J=0;J<re.length;J++)U(re[J],B);re.length===2?P(E,y,x):E.projectionMatrix.copy(y.projectionMatrix),j(D,E,B)};function j(D,B,re){re===null?D.matrix.copy(B.matrixWorld):(D.matrix.copy(re.matrixWorld),D.matrix.invert(),D.matrix.multiply(B.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(B.projectionMatrix),D.projectionMatrixInverse.copy(B.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=lr*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(D){c=D,d!==null&&(d.fixedFoveation=D),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=D)};let ne=null;function ee(D,B){if(u=B.getViewerPose(l||s),g=B,u!==null){const re=u.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let J=!1;re.length!==E.cameras.length&&(E.cameras.length=0,J=!0);for(let W=0;W<re.length;W++){const ie=re[W];let F=null;if(p!==null)F=p.getViewport(ie);else{const fe=f.getViewSubImage(d,ie);F=fe.viewport,W===0&&(e.setRenderTargetTextures(h,fe.colorTexture,d.ignoreDepthValues?void 0:fe.depthStencilTexture),e.setRenderTarget(h))}let K=S[W];K===void 0&&(K=new Gt,K.layers.enable(W),K.viewport=new vt,S[W]=K),K.matrix.fromArray(ie.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(ie.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(F.x,F.y,F.width,F.height),W===0&&(E.matrix.copy(K.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),J===!0&&E.cameras.push(K)}}for(let re=0;re<b.length;re++){const J=_[re],W=b[re];J!==null&&W!==void 0&&W.update(J,B,l||s)}ne&&ne(D,B),B.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:B}),g=null}const k=new Eu;k.setAnimationLoop(ee),this.setAnimationLoop=function(D){ne=D},this.dispose=function(){}}}function Jv(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,xu(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,b,_,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?o(m,h):h.isMeshToonMaterial?(o(m,h),f(m,h)):h.isMeshPhongMaterial?(o(m,h),u(m,h)):h.isMeshStandardMaterial?(o(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(o(m,h),g(m,h)):h.isMeshDepthMaterial?o(m,h):h.isMeshDistanceMaterial?(o(m,h),v(m,h)):h.isMeshNormalMaterial?o(m,h):h.isLineBasicMaterial?(s(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?c(m,h,b,_):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function o(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Rt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Rt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const b=e.get(h).envMap;if(b&&(m.envMap.value=b,m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const _=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*_,t(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function s(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,b,_){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*b,m.scale.value=_*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,b){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Rt&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const b=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Qv(n,e,t,i){let r={},o={},s=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(b,_){const y=_.program;i.uniformBlockBinding(b,y)}function l(b,_){let y=r[b.id];y===void 0&&(g(b),y=u(b),r[b.id]=y,b.addEventListener("dispose",m));const x=_.program;i.updateUBOMapping(b,x);const S=e.render.frame;o[b.id]!==S&&(d(b),o[b.id]=S)}function u(b){const _=f();b.__bindingPointIndex=_;const y=n.createBuffer(),x=b.__size,S=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,x,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,y),y}function f(){for(let b=0;b<a;b++)if(s.indexOf(b)===-1)return s.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const _=r[b.id],y=b.uniforms,x=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let S=0,E=y.length;S<E;S++){const L=y[S];if(p(L,S,x)===!0){const M=L.__offset,T=Array.isArray(L.value)?L.value:[L.value];let z=0;for(let G=0;G<T.length;G++){const Z=T[G],C=v(Z);typeof Z=="number"?(L.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,M+z,L.__data)):Z.isMatrix3?(L.__data[0]=Z.elements[0],L.__data[1]=Z.elements[1],L.__data[2]=Z.elements[2],L.__data[3]=Z.elements[0],L.__data[4]=Z.elements[3],L.__data[5]=Z.elements[4],L.__data[6]=Z.elements[5],L.__data[7]=Z.elements[0],L.__data[8]=Z.elements[6],L.__data[9]=Z.elements[7],L.__data[10]=Z.elements[8],L.__data[11]=Z.elements[0]):(Z.toArray(L.__data,z),z+=C.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,M,L.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(b,_,y){const x=b.value;if(y[_]===void 0){if(typeof x=="number")y[_]=x;else{const S=Array.isArray(x)?x:[x],E=[];for(let L=0;L<S.length;L++)E.push(S[L].clone());y[_]=E}return!0}else if(typeof x=="number"){if(y[_]!==x)return y[_]=x,!0}else{const S=Array.isArray(y[_])?y[_]:[y[_]],E=Array.isArray(x)?x:[x];for(let L=0;L<S.length;L++){const M=S[L];if(M.equals(E[L])===!1)return M.copy(E[L]),!0}}return!1}function g(b){const _=b.uniforms;let y=0;const x=16;let S=0;for(let E=0,L=_.length;E<L;E++){const M=_[E],T={boundary:0,storage:0},z=Array.isArray(M.value)?M.value:[M.value];for(let G=0,Z=z.length;G<Z;G++){const C=z[G],P=v(C);T.boundary+=P.boundary,T.storage+=P.storage}if(M.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=y,E>0){S=y%x;const G=x-S;S!==0&&G-T.boundary<0&&(y+=x-S,M.__offset=y)}y+=T.storage}return S=y%x,S>0&&(y+=x-S),b.__size=y,b.__cache={},this}function v(b){const _={boundary:0,storage:0};return typeof b=="number"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function m(b){const _=b.target;_.removeEventListener("dispose",m);const y=s.indexOf(_.__bindingPointIndex);s.splice(y,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete o[_.id]}function h(){for(const b in r)n.deleteBuffer(r[b]);s=[],r={},o={}}return{bind:c,update:l,dispose:h}}class Ru{constructor(e={}){const{canvas:t=Jh(),context:i=null,depth:r=!0,stencil:o=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=s;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const h=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mt,this._useLegacyLights=!1,this.toneMapping=Nn,this.toneMappingExposure=1;const _=this;let y=!1,x=0,S=0,E=null,L=-1,M=null;const T=new vt,z=new vt;let G=null;const Z=new je(0);let C=0,P=t.width,U=t.height,j=1,ne=null,ee=null;const k=new vt(0,0,P,U),D=new vt(0,0,P,U);let B=!1;const re=new es;let J=!1,W=!1,ie=null;const F=new Qe,K=new me,fe=new O,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ge(){return E===null?j:1}let H=i;function nt(A,V){for(let q=0;q<A.length;q++){const $=A[q],Y=t.getContext($,V);if(Y!==null)return Y}return null}try{const A={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qa}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",de,!1),H===null){const V=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&V.shift(),H=nt(V,A),H===null)throw nt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let _e,Ce,Te,Xe,Ie,Ne,qe,ot,ht,R,w,X,se,oe,ce,Ee,he,ve,I,ue,te,De,we,Pe;function Me(){_e=new lg(H),Ce=new ig(H,_e,e),_e.init(Ce),De=new qv(H,_e,Ce),Te=new jv(H,_e,Ce),Xe=new hg(H),Ie=new Lv,Ne=new Xv(H,_e,Te,Ie,Ce,De,Xe),qe=new og(_),ot=new cg(_),ht=new Md(H,Ce),we=new tg(H,_e,ht,Ce),R=new ug(H,ht,Xe,we),w=new gg(H,R,ht,Xe),I=new mg(H,Ce,Ne),Ee=new rg(Ie),X=new Pv(_,qe,ot,_e,Ce,we,Ee),se=new Jv(_,Ie),oe=new Ov,ce=new kv(_e,Ce),ve=new eg(_,qe,ot,Te,w,d,c),he=new Wv(_,w,Ce),Pe=new Qv(H,Xe,Ce,Te),ue=new ng(H,_e,Xe,Ce),te=new fg(H,_e,Xe,Ce),Xe.programs=X.programs,_.capabilities=Ce,_.extensions=_e,_.properties=Ie,_.renderLists=oe,_.shadowMap=he,_.state=Te,_.info=Xe}Me();const xe=new Zv(_,H);this.xr=xe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=_e.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=_e.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize(P,U,!1))},this.getSize=function(A){return A.set(P,U)},this.setSize=function(A,V,q=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=A,U=V,t.width=Math.floor(A*j),t.height=Math.floor(V*j),q===!0&&(t.style.width=A+"px",t.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(P*j,U*j).floor()},this.setDrawingBufferSize=function(A,V,q){P=A,U=V,j=q,t.width=Math.floor(A*q),t.height=Math.floor(V*q),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(k)},this.setViewport=function(A,V,q,$){A.isVector4?k.set(A.x,A.y,A.z,A.w):k.set(A,V,q,$),Te.viewport(T.copy(k).multiplyScalar(j).floor())},this.getScissor=function(A){return A.copy(D)},this.setScissor=function(A,V,q,$){A.isVector4?D.set(A.x,A.y,A.z,A.w):D.set(A,V,q,$),Te.scissor(z.copy(D).multiplyScalar(j).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(A){Te.setScissorTest(B=A)},this.setOpaqueSort=function(A){ne=A},this.setTransparentSort=function(A){ee=A},this.getClearColor=function(A){return A.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(A=!0,V=!0,q=!0){let $=0;if(A){let Y=!1;if(E!==null){const ye=E.texture.format;Y=ye===uu||ye===lu||ye===cu}if(Y){const ye=E.texture.type,Ae=ye===Fn||ye===In||ye===Ya||ye===Kn||ye===au||ye===su,Oe=ve.getClearColor(),Ue=ve.getClearAlpha(),ze=Oe.r,Fe=Oe.g,Be=Oe.b;Ae?(p[0]=ze,p[1]=Fe,p[2]=Be,p[3]=Ue,H.clearBufferuiv(H.COLOR,0,p)):(g[0]=ze,g[1]=Fe,g[2]=Be,g[3]=Ue,H.clearBufferiv(H.COLOR,0,g))}else $|=H.COLOR_BUFFER_BIT}V&&($|=H.DEPTH_BUFFER_BIT),q&&($|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",de,!1),oe.dispose(),ce.dispose(),Ie.dispose(),qe.dispose(),ot.dispose(),w.dispose(),we.dispose(),Pe.dispose(),X.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",kt),xe.removeEventListener("sessionend",Ze),ie&&(ie.dispose(),ie=null),St.stop()};function Ge(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=Xe.autoReset,V=he.enabled,q=he.autoUpdate,$=he.needsUpdate,Y=he.type;Me(),Xe.autoReset=A,he.enabled=V,he.autoUpdate=q,he.needsUpdate=$,he.type=Y}function de(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ae(A){const V=A.target;V.removeEventListener("dispose",ae),Q(V)}function Q(A){le(A),Ie.remove(A)}function le(A){const V=Ie.get(A).programs;V!==void 0&&(V.forEach(function(q){X.releaseProgram(q)}),A.isShaderMaterial&&X.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,q,$,Y,ye){V===null&&(V=be);const Ae=Y.isMesh&&Y.matrixWorld.determinant()<0,Oe=If(A,V,q,$,Y);Te.setMaterial($,Ae);let Ue=q.index,ze=1;if($.wireframe===!0){if(Ue=R.getWireframeAttribute(q),Ue===void 0)return;ze=2}const Fe=q.drawRange,Be=q.attributes.position;let rt=Fe.start*ze,Ot=(Fe.start+Fe.count)*ze;ye!==null&&(rt=Math.max(rt,ye.start*ze),Ot=Math.min(Ot,(ye.start+ye.count)*ze)),Ue!==null?(rt=Math.max(rt,0),Ot=Math.min(Ot,Ue.count)):Be!=null&&(rt=Math.max(rt,0),Ot=Math.min(Ot,Be.count));const dt=Ot-rt;if(dt<0||dt===1/0)return;we.setup(Y,$,Oe,q,Ue);let cn,it=ue;if(Ue!==null&&(cn=ht.get(Ue),it=te,it.setIndex(cn)),Y.isMesh)$.wireframe===!0?(Te.setLineWidth($.wireframeLinewidth*ge()),it.setMode(H.LINES)):it.setMode(H.TRIANGLES);else if(Y.isLine){let We=$.linewidth;We===void 0&&(We=1),Te.setLineWidth(We*ge()),Y.isLineSegments?it.setMode(H.LINES):Y.isLineLoop?it.setMode(H.LINE_LOOP):it.setMode(H.LINE_STRIP)}else Y.isPoints?it.setMode(H.POINTS):Y.isSprite&&it.setMode(H.TRIANGLES);if(Y.isInstancedMesh)it.renderInstances(rt,dt,Y.count);else if(q.isInstancedBufferGeometry){const We=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Eo=Math.min(q.instanceCount,We);it.renderInstances(rt,dt,Eo)}else it.render(rt,dt)};function Re(A,V,q){A.transparent===!0&&A.side===yn&&A.forceSinglePass===!1?(A.side=Rt,A.needsUpdate=!0,vr(A,V,q),A.side=Bn,A.needsUpdate=!0,vr(A,V,q),A.side=yn):vr(A,V,q)}this.compile=function(A,V,q=null){q===null&&(q=A),m=ce.get(q),m.init(),b.push(m),q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),A!==q&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),m.setupLights(_._useLegacyLights);const $=new Set;return A.traverse(function(Y){const ye=Y.material;if(ye)if(Array.isArray(ye))for(let Ae=0;Ae<ye.length;Ae++){const Oe=ye[Ae];Re(Oe,q,Y),$.add(Oe)}else Re(ye,q,Y),$.add(ye)}),b.pop(),m=null,$},this.compileAsync=function(A,V,q=null){const $=this.compile(A,V,q);return new Promise(Y=>{function ye(){if($.forEach(function(Ae){Ie.get(Ae).currentProgram.isReady()&&$.delete(Ae)}),$.size===0){Y(A);return}setTimeout(ye,10)}_e.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Ve=null;function at(A){Ve&&Ve(A)}function kt(){St.stop()}function Ze(){St.start()}const St=new Eu;St.setAnimationLoop(at),typeof self<"u"&&St.setContext(self),this.setAnimationLoop=function(A){Ve=A,xe.setAnimationLoop(A),A===null?St.stop():St.start()},xe.addEventListener("sessionstart",kt),xe.addEventListener("sessionend",Ze),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(V),V=xe.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,V,E),m=ce.get(A,b.length),m.init(),b.push(m),F.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),re.setFromProjectionMatrix(F),W=this.localClippingEnabled,J=Ee.init(this.clippingPlanes,W),v=oe.get(A,h.length),v.init(),h.push(v),rn(A,V,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(ne,ee),this.info.render.frame++,J===!0&&Ee.beginShadows();const q=m.state.shadowsArray;if(he.render(q,A,V),J===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),ve.render(v,A),m.setupLights(_._useLegacyLights),V.isArrayCamera){const $=V.cameras;for(let Y=0,ye=$.length;Y<ye;Y++){const Ae=$[Y];Ms(v,A,Ae,Ae.viewport)}}else Ms(v,A,V);E!==null&&(Ne.updateMultisampleRenderTarget(E),Ne.updateRenderTargetMipmap(E)),A.isScene===!0&&A.onAfterRender(_,A,V),we.resetDefaultState(),L=-1,M=null,b.pop(),b.length>0?m=b[b.length-1]:m=null,h.pop(),h.length>0?v=h[h.length-1]:v=null};function rn(A,V,q,$){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||re.intersectsSprite(A)){$&&fe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(F);const Ae=w.update(A),Oe=A.material;Oe.visible&&v.push(A,Ae,Oe,q,fe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||re.intersectsObject(A))){const Ae=w.update(A),Oe=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),fe.copy(A.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),fe.copy(Ae.boundingSphere.center)),fe.applyMatrix4(A.matrixWorld).applyMatrix4(F)),Array.isArray(Oe)){const Ue=Ae.groups;for(let ze=0,Fe=Ue.length;ze<Fe;ze++){const Be=Ue[ze],rt=Oe[Be.materialIndex];rt&&rt.visible&&v.push(A,Ae,rt,q,fe.z,Be)}}else Oe.visible&&v.push(A,Ae,Oe,q,fe.z,null)}}const ye=A.children;for(let Ae=0,Oe=ye.length;Ae<Oe;Ae++)rn(ye[Ae],V,q,$)}function Ms(A,V,q,$){const Y=A.opaque,ye=A.transmissive,Ae=A.transparent;m.setupLightsView(q),J===!0&&Ee.setGlobalState(_.clippingPlanes,q),ye.length>0&&Of(Y,ye,V,q),$&&Te.viewport(T.copy($)),Y.length>0&&gr(Y,V,q),ye.length>0&&gr(ye,V,q),Ae.length>0&&gr(Ae,V,q),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Of(A,V,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const ye=Ce.isWebGL2;ie===null&&(ie=new kn(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?Li:Fn,minFilter:cr,samples:ye?4:0})),_.getDrawingBufferSize(K),ye?ie.setSize(K.x,K.y):ie.setSize(io(K.x),io(K.y));const Ae=_.getRenderTarget();_.setRenderTarget(ie),_.getClearColor(Z),C=_.getClearAlpha(),C<1&&_.setClearColor(16777215,.5),_.clear();const Oe=_.toneMapping;_.toneMapping=Nn,gr(A,q,$),Ne.updateMultisampleRenderTarget(ie),Ne.updateRenderTargetMipmap(ie);let Ue=!1;for(let ze=0,Fe=V.length;ze<Fe;ze++){const Be=V[ze],rt=Be.object,Ot=Be.geometry,dt=Be.material,cn=Be.group;if(dt.side===yn&&rt.layers.test($.layers)){const it=dt.side;dt.side=Rt,dt.needsUpdate=!0,Ss(rt,q,$,Ot,dt,cn),dt.side=it,dt.needsUpdate=!0,Ue=!0}}Ue===!0&&(Ne.updateMultisampleRenderTarget(ie),Ne.updateRenderTargetMipmap(ie)),_.setRenderTarget(Ae),_.setClearColor(Z,C),_.toneMapping=Oe}function gr(A,V,q){const $=V.isScene===!0?V.overrideMaterial:null;for(let Y=0,ye=A.length;Y<ye;Y++){const Ae=A[Y],Oe=Ae.object,Ue=Ae.geometry,ze=$===null?Ae.material:$,Fe=Ae.group;Oe.layers.test(q.layers)&&Ss(Oe,V,q,Ue,ze,Fe)}}function Ss(A,V,q,$,Y,ye){A.onBeforeRender(_,V,q,$,Y,ye),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(_,V,q,$,A,ye),Y.transparent===!0&&Y.side===yn&&Y.forceSinglePass===!1?(Y.side=Rt,Y.needsUpdate=!0,_.renderBufferDirect(q,V,$,Y,A,ye),Y.side=Bn,Y.needsUpdate=!0,_.renderBufferDirect(q,V,$,Y,A,ye),Y.side=yn):_.renderBufferDirect(q,V,$,Y,A,ye),A.onAfterRender(_,V,q,$,Y,ye)}function vr(A,V,q){V.isScene!==!0&&(V=be);const $=Ie.get(A),Y=m.state.lights,ye=m.state.shadowsArray,Ae=Y.state.version,Oe=X.getParameters(A,Y.state,ye,V,q),Ue=X.getProgramCacheKey(Oe);let ze=$.programs;$.environment=A.isMeshStandardMaterial?V.environment:null,$.fog=V.fog,$.envMap=(A.isMeshStandardMaterial?ot:qe).get(A.envMap||$.environment),ze===void 0&&(A.addEventListener("dispose",ae),ze=new Map,$.programs=ze);let Fe=ze.get(Ue);if(Fe!==void 0){if($.currentProgram===Fe&&$.lightsStateVersion===Ae)return ws(A,Oe),Fe}else Oe.uniforms=X.getUniforms(A),A.onBuild(q,Oe,_),A.onBeforeCompile(Oe,_),Fe=X.acquireProgram(Oe,Ue),ze.set(Ue,Fe),$.uniforms=Oe.uniforms;const Be=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Be.clippingPlanes=Ee.uniform),ws(A,Oe),$.needsLights=Nf(A),$.lightsStateVersion=Ae,$.needsLights&&(Be.ambientLightColor.value=Y.state.ambient,Be.lightProbe.value=Y.state.probe,Be.directionalLights.value=Y.state.directional,Be.directionalLightShadows.value=Y.state.directionalShadow,Be.spotLights.value=Y.state.spot,Be.spotLightShadows.value=Y.state.spotShadow,Be.rectAreaLights.value=Y.state.rectArea,Be.ltc_1.value=Y.state.rectAreaLTC1,Be.ltc_2.value=Y.state.rectAreaLTC2,Be.pointLights.value=Y.state.point,Be.pointLightShadows.value=Y.state.pointShadow,Be.hemisphereLights.value=Y.state.hemi,Be.directionalShadowMap.value=Y.state.directionalShadowMap,Be.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Be.spotShadowMap.value=Y.state.spotShadowMap,Be.spotLightMatrix.value=Y.state.spotLightMatrix,Be.spotLightMap.value=Y.state.spotLightMap,Be.pointShadowMap.value=Y.state.pointShadowMap,Be.pointShadowMatrix.value=Y.state.pointShadowMatrix),$.currentProgram=Fe,$.uniformsList=null,Fe}function Es(A){if(A.uniformsList===null){const V=A.currentProgram.getUniforms();A.uniformsList=qr.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function ws(A,V){const q=Ie.get(A);q.outputColorSpace=V.outputColorSpace,q.instancing=V.instancing,q.instancingColor=V.instancingColor,q.skinning=V.skinning,q.morphTargets=V.morphTargets,q.morphNormals=V.morphNormals,q.morphColors=V.morphColors,q.morphTargetsCount=V.morphTargetsCount,q.numClippingPlanes=V.numClippingPlanes,q.numIntersection=V.numClipIntersection,q.vertexAlphas=V.vertexAlphas,q.vertexTangents=V.vertexTangents,q.toneMapping=V.toneMapping}function If(A,V,q,$,Y){V.isScene!==!0&&(V=be),Ne.resetTextureUnits();const ye=V.fog,Ae=$.isMeshStandardMaterial?V.environment:null,Oe=E===null?_.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:En,Ue=($.isMeshStandardMaterial?ot:qe).get($.envMap||Ae),ze=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Fe=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Be=!!q.morphAttributes.position,rt=!!q.morphAttributes.normal,Ot=!!q.morphAttributes.color;let dt=Nn;$.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(dt=_.toneMapping);const cn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,it=cn!==void 0?cn.length:0,We=Ie.get($),Eo=m.state.lights;if(J===!0&&(W===!0||A!==M)){const It=A===M&&$.id===L;Ee.setState($,A,It)}let st=!1;$.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Eo.state.version||We.outputColorSpace!==Oe||Y.isInstancedMesh&&We.instancing===!1||!Y.isInstancedMesh&&We.instancing===!0||Y.isSkinnedMesh&&We.skinning===!1||!Y.isSkinnedMesh&&We.skinning===!0||Y.isInstancedMesh&&We.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&We.instancingColor===!1&&Y.instanceColor!==null||We.envMap!==Ue||$.fog===!0&&We.fog!==ye||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Ee.numPlanes||We.numIntersection!==Ee.numIntersection)||We.vertexAlphas!==ze||We.vertexTangents!==Fe||We.morphTargets!==Be||We.morphNormals!==rt||We.morphColors!==Ot||We.toneMapping!==dt||Ce.isWebGL2===!0&&We.morphTargetsCount!==it)&&(st=!0):(st=!0,We.__version=$.version);let Hn=We.currentProgram;st===!0&&(Hn=vr($,V,Y));let Ts=!1,ki=!1,wo=!1;const Et=Hn.getUniforms(),Gn=We.uniforms;if(Te.useProgram(Hn.program)&&(Ts=!0,ki=!0,wo=!0),$.id!==L&&(L=$.id,ki=!0),Ts||M!==A){Et.setValue(H,"projectionMatrix",A.projectionMatrix),Et.setValue(H,"viewMatrix",A.matrixWorldInverse);const It=Et.map.cameraPosition;It!==void 0&&It.setValue(H,fe.setFromMatrixPosition(A.matrixWorld)),Ce.logarithmicDepthBuffer&&Et.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Et.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,ki=!0,wo=!0)}if(Y.isSkinnedMesh){Et.setOptional(H,Y,"bindMatrix"),Et.setOptional(H,Y,"bindMatrixInverse");const It=Y.skeleton;It&&(Ce.floatVertexTextures?(It.boneTexture===null&&It.computeBoneTexture(),Et.setValue(H,"boneTexture",It.boneTexture,Ne),Et.setValue(H,"boneTextureSize",It.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const To=q.morphAttributes;if((To.position!==void 0||To.normal!==void 0||To.color!==void 0&&Ce.isWebGL2===!0)&&I.update(Y,q,Hn),(ki||We.receiveShadow!==Y.receiveShadow)&&(We.receiveShadow=Y.receiveShadow,Et.setValue(H,"receiveShadow",Y.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Gn.envMap.value=Ue,Gn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),ki&&(Et.setValue(H,"toneMappingExposure",_.toneMappingExposure),We.needsLights&&Uf(Gn,wo),ye&&$.fog===!0&&se.refreshFogUniforms(Gn,ye),se.refreshMaterialUniforms(Gn,$,j,U,ie),qr.upload(H,Es(We),Gn,Ne)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(qr.upload(H,Es(We),Gn,Ne),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Et.setValue(H,"center",Y.center),Et.setValue(H,"modelViewMatrix",Y.modelViewMatrix),Et.setValue(H,"normalMatrix",Y.normalMatrix),Et.setValue(H,"modelMatrix",Y.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const It=$.uniformsGroups;for(let Ao=0,Ff=It.length;Ao<Ff;Ao++)if(Ce.isWebGL2){const As=It[Ao];Pe.update(As,Hn),Pe.bind(As,Hn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Hn}function Uf(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function Nf(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(A,V,q){Ie.get(A.texture).__webglTexture=V,Ie.get(A.depthTexture).__webglTexture=q;const $=Ie.get(A);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=q===void 0,$.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,V){const q=Ie.get(A);q.__webglFramebuffer=V,q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,q=0){E=A,x=V,S=q;let $=!0,Y=null,ye=!1,Ae=!1;if(A){const Ue=Ie.get(A);Ue.__useDefaultFramebuffer!==void 0?(Te.bindFramebuffer(H.FRAMEBUFFER,null),$=!1):Ue.__webglFramebuffer===void 0?Ne.setupRenderTarget(A):Ue.__hasExternalTextures&&Ne.rebindTextures(A,Ie.get(A.texture).__webglTexture,Ie.get(A.depthTexture).__webglTexture);const ze=A.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ae=!0);const Fe=Ie.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Fe[V])?Y=Fe[V][q]:Y=Fe[V],ye=!0):Ce.isWebGL2&&A.samples>0&&Ne.useMultisampledRTT(A)===!1?Y=Ie.get(A).__webglMultisampledFramebuffer:Array.isArray(Fe)?Y=Fe[q]:Y=Fe,T.copy(A.viewport),z.copy(A.scissor),G=A.scissorTest}else T.copy(k).multiplyScalar(j).floor(),z.copy(D).multiplyScalar(j).floor(),G=B;if(Te.bindFramebuffer(H.FRAMEBUFFER,Y)&&Ce.drawBuffers&&$&&Te.drawBuffers(A,Y),Te.viewport(T),Te.scissor(z),Te.setScissorTest(G),ye){const Ue=Ie.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ue.__webglTexture,q)}else if(Ae){const Ue=Ie.get(A.texture),ze=V||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ue.__webglTexture,q||0,ze)}L=-1},this.readRenderTargetPixels=function(A,V,q,$,Y,ye,Ae){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Ie.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(Oe=Oe[Ae]),Oe){Te.bindFramebuffer(H.FRAMEBUFFER,Oe);try{const Ue=A.texture,ze=Ue.format,Fe=Ue.type;if(ze!==Zt&&De.convert(ze)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Fe===Li&&(_e.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Fe!==Fn&&De.convert(Fe)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===Un&&(Ce.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-$&&q>=0&&q<=A.height-Y&&H.readPixels(V,q,$,Y,De.convert(ze),De.convert(Fe),ye)}finally{const Ue=E!==null?Ie.get(E).__webglFramebuffer:null;Te.bindFramebuffer(H.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(A,V,q=0){const $=Math.pow(2,-q),Y=Math.floor(V.image.width*$),ye=Math.floor(V.image.height*$);Ne.setTexture2D(V,0),H.copyTexSubImage2D(H.TEXTURE_2D,q,0,0,A.x,A.y,Y,ye),Te.unbindTexture()},this.copyTextureToTexture=function(A,V,q,$=0){const Y=V.image.width,ye=V.image.height,Ae=De.convert(q.format),Oe=De.convert(q.type);Ne.setTexture2D(q,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment),V.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,$,A.x,A.y,Y,ye,Ae,Oe,V.image.data):V.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,$,A.x,A.y,V.mipmaps[0].width,V.mipmaps[0].height,Ae,V.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,$,A.x,A.y,Ae,Oe,V.image),$===0&&q.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(A,V,q,$,Y=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=A.max.x-A.min.x+1,Ae=A.max.y-A.min.y+1,Oe=A.max.z-A.min.z+1,Ue=De.convert($.format),ze=De.convert($.type);let Fe;if($.isData3DTexture)Ne.setTexture3D($,0),Fe=H.TEXTURE_3D;else if($.isDataArrayTexture)Ne.setTexture2DArray($,0),Fe=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,$.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,$.unpackAlignment);const Be=H.getParameter(H.UNPACK_ROW_LENGTH),rt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Ot=H.getParameter(H.UNPACK_SKIP_PIXELS),dt=H.getParameter(H.UNPACK_SKIP_ROWS),cn=H.getParameter(H.UNPACK_SKIP_IMAGES),it=q.isCompressedTexture?q.mipmaps[0]:q.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,it.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,it.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,A.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,A.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,A.min.z),q.isDataTexture||q.isData3DTexture?H.texSubImage3D(Fe,Y,V.x,V.y,V.z,ye,Ae,Oe,Ue,ze,it.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Fe,Y,V.x,V.y,V.z,ye,Ae,Oe,Ue,it.data)):H.texSubImage3D(Fe,Y,V.x,V.y,V.z,ye,Ae,Oe,Ue,ze,it),H.pixelStorei(H.UNPACK_ROW_LENGTH,Be),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,rt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ot),H.pixelStorei(H.UNPACK_SKIP_ROWS,dt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,cn),Y===0&&$.generateMipmaps&&H.generateMipmap(Fe),Te.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Ne.setTextureCube(A,0):A.isData3DTexture?Ne.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ne.setTexture2DArray(A,0):Ne.setTexture2D(A,0),Te.unbindTexture()},this.resetState=function(){x=0,S=0,E=null,Te.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ka?"display-p3":"srgb",t.unpackColorSpace=Ye.workingColorSpace===ho?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===mt?Jn:fu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Jn?mt:En}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class e_ extends Ru{}e_.prototype.isWebGL1Renderer=!0;class t_ extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Pu extends Ni{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $c=new O,Yc=new O,Kc=new Qe,ia=new mo,zr=new po;class n_ extends _t{constructor(e=new Bt,t=new Pu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,o=t.count;r<o;r++)$c.fromBufferAttribute(t,r-1),Yc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=$c.distanceTo(Yc);e.setAttribute("lineDistance",new lt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zr.copy(i.boundingSphere),zr.applyMatrix4(r),zr.radius+=o,e.ray.intersectsSphere(zr)===!1)return;Kc.copy(r).invert(),ia.copy(e.ray).applyMatrix4(Kc);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new O,u=new O,f=new O,d=new O,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const h=Math.max(0,s.start),b=Math.min(g.count,s.start+s.count);for(let _=h,y=b-1;_<y;_+=p){const x=g.getX(_),S=g.getX(_+1);if(l.fromBufferAttribute(m,x),u.fromBufferAttribute(m,S),ia.distanceSqToSegment(l,u,d,f)>c)continue;d.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(d);L<e.near||L>e.far||t.push({distance:L,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,s.start),b=Math.min(m.count,s.start+s.count);for(let _=h,y=b-1;_<y;_+=p){if(l.fromBufferAttribute(m,_),u.fromBufferAttribute(m,_+1),ia.distanceSqToSegment(l,u,d,f)>c)continue;d.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(d);S<e.near||S>e.far||t.push({distance:S,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}class Tn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),o=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),o+=i.distanceTo(r),t.push(o),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const o=i.length;let s;t?s=t:s=e*i[o-1];let a=0,c=o-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-s,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===s)return r/(o-1);const u=i[r],d=i[r+1]-u,p=(s-u)/d;return(r+p)/(o-1)}getTangent(e,t){let r=e-1e-4,o=e+1e-4;r<0&&(r=0),o>1&&(o=1);const s=this.getPoint(r),a=this.getPoint(o),c=t||(s.isVector2?new me:new O);return c.copy(a).sub(s).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new O,r=[],o=[],s=[],a=new O,c=new Qe;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new O)}o[0]=new O,s[0]=new O;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),o[0].crossVectors(r[0],a),s[0].crossVectors(r[0],o[0]);for(let p=1;p<=e;p++){if(o[p]=o[p-1].clone(),s[p]=s[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(gt(r[p-1].dot(r[p]),-1,1));o[p].applyMatrix4(c.makeRotationAxis(a,g))}s[p].crossVectors(r[p],o[p])}if(t===!0){let p=Math.acos(gt(o[0].dot(o[e]),-1,1));p/=e,r[0].dot(a.crossVectors(o[0],o[e]))>0&&(p=-p);for(let g=1;g<=e;g++)o[g].applyMatrix4(c.makeRotationAxis(r[g],p*g)),s[g].crossVectors(r[g],o[g])}return{tangents:r,normals:o,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Lu extends Tn{constructor(e=0,t=0,i=1,r=1,o=0,s=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=o,this.aEndAngle=s,this.aClockwise=a,this.aRotation=c}getPoint(e,t){const i=t||new me,r=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const s=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=r;for(;o>r;)o-=r;o<Number.EPSILON&&(s?o=0:o=r),this.aClockwise===!0&&!s&&(o===r?o=-r:o=o-r);const a=this.aStartAngle+e*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*u-p*f+this.aX,l=d*f+p*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class i_ extends Lu{constructor(e,t,i,r,o,s){super(e,t,i,i,r,o,s),this.isArcCurve=!0,this.type="ArcCurve"}}function rs(){let n=0,e=0,t=0,i=0;function r(o,s,a,c){n=o,e=a,t=-3*o+3*s-2*a-c,i=2*o-2*s+a+c}return{initCatmullRom:function(o,s,a,c,l){r(s,a,l*(a-o),l*(c-s))},initNonuniformCatmullRom:function(o,s,a,c,l,u,f){let d=(s-o)/l-(a-o)/(l+u)+(a-s)/u,p=(a-s)/u-(c-s)/(u+f)+(c-a)/f;d*=u,p*=u,r(s,a,d,p)},calc:function(o){const s=o*o,a=s*o;return n+e*o+t*s+i*a}}}const Hr=new O,ra=new rs,oa=new rs,aa=new rs;class r_ extends Tn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new O){const i=t,r=this.points,o=r.length,s=(o-(this.closed?0:1))*e;let a=Math.floor(s),c=s-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%o]:(Hr.subVectors(r[0],r[1]).add(r[0]),l=Hr);const f=r[a%o],d=r[(a+1)%o];if(this.closed||a+2<o?u=r[(a+2)%o]:(Hr.subVectors(r[o-1],r[o-2]).add(r[o-1]),u=Hr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),ra.initNonuniformCatmullRom(l.x,f.x,d.x,u.x,g,v,m),oa.initNonuniformCatmullRom(l.y,f.y,d.y,u.y,g,v,m),aa.initNonuniformCatmullRom(l.z,f.z,d.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(ra.initCatmullRom(l.x,f.x,d.x,u.x,this.tension),oa.initCatmullRom(l.y,f.y,d.y,u.y,this.tension),aa.initCatmullRom(l.z,f.z,d.z,u.z,this.tension));return i.set(ra.calc(c),oa.calc(c),aa.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new O().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Zc(n,e,t,i,r){const o=(i-e)*.5,s=(r-t)*.5,a=n*n,c=n*a;return(2*t-2*i+o+s)*c+(-3*t+3*i-2*o-s)*a+o*n+t}function o_(n,e){const t=1-n;return t*t*e}function a_(n,e){return 2*(1-n)*n*e}function s_(n,e){return n*n*e}function ar(n,e,t,i){return o_(n,e)+a_(n,t)+s_(n,i)}function c_(n,e){const t=1-n;return t*t*t*e}function l_(n,e){const t=1-n;return 3*t*t*n*e}function u_(n,e){return 3*(1-n)*n*n*e}function f_(n,e){return n*n*n*e}function sr(n,e,t,i,r){return c_(n,e)+l_(n,t)+u_(n,i)+f_(n,r)}class h_ extends Tn{constructor(e=new me,t=new me,i=new me,r=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new me){const i=t,r=this.v0,o=this.v1,s=this.v2,a=this.v3;return i.set(sr(e,r.x,o.x,s.x,a.x),sr(e,r.y,o.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Du extends Tn{constructor(e=new O,t=new O,i=new O,r=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new O){const i=t,r=this.v0,o=this.v1,s=this.v2,a=this.v3;return i.set(sr(e,r.x,o.x,s.x,a.x),sr(e,r.y,o.y,s.y,a.y),sr(e,r.z,o.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class d_ extends Tn{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class p_ extends Tn{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class m_ extends Tn{constructor(e=new me,t=new me,i=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new me){const i=t,r=this.v0,o=this.v1,s=this.v2;return i.set(ar(e,r.x,o.x,s.x),ar(e,r.y,o.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class os extends Tn{constructor(e=new O,t=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new O){const i=t,r=this.v0,o=this.v1,s=this.v2;return i.set(ar(e,r.x,o.x,s.x),ar(e,r.y,o.y,s.y),ar(e,r.z,o.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class g_ extends Tn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){const i=t,r=this.points,o=(r.length-1)*e,s=Math.floor(o),a=o-s,c=r[s===0?s:s-1],l=r[s],u=r[s>r.length-2?r.length-1:s+1],f=r[s>r.length-3?r.length-1:s+2];return i.set(Zc(a,c.x,l.x,u.x,f.x),Zc(a,c.y,l.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new me().fromArray(r))}return this}}var v_=Object.freeze({__proto__:null,ArcCurve:i_,CatmullRomCurve3:r_,CubicBezierCurve:h_,CubicBezierCurve3:Du,EllipseCurve:Lu,LineCurve:d_,LineCurve3:p_,QuadraticBezierCurve:m_,QuadraticBezierCurve3:os,SplineCurve:g_});class _o extends Bt{constructor(e=1,t=1,i=1,r=32,o=1,s=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:o,openEnded:s,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),o=Math.floor(o);const u=[],f=[],d=[],p=[];let g=0;const v=[],m=i/2;let h=0;b(),s===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new lt(f,3)),this.setAttribute("normal",new lt(d,3)),this.setAttribute("uv",new lt(p,2));function b(){const y=new O,x=new O;let S=0;const E=(t-e)/i;for(let L=0;L<=o;L++){const M=[],T=L/o,z=T*(t-e)+e;for(let G=0;G<=r;G++){const Z=G/r,C=Z*c+a,P=Math.sin(C),U=Math.cos(C);x.x=z*P,x.y=-T*i+m,x.z=z*U,f.push(x.x,x.y,x.z),y.set(P,E,U).normalize(),d.push(y.x,y.y,y.z),p.push(Z,1-T),M.push(g++)}v.push(M)}for(let L=0;L<r;L++)for(let M=0;M<o;M++){const T=v[M][L],z=v[M+1][L],G=v[M+1][L+1],Z=v[M][L+1];u.push(T,z,Z),u.push(z,G,Z),S+=6}l.addGroup(h,S,0),h+=S}function _(y){const x=g,S=new me,E=new O;let L=0;const M=y===!0?e:t,T=y===!0?1:-1;for(let G=1;G<=r;G++)f.push(0,m*T,0),d.push(0,T,0),p.push(.5,.5),g++;const z=g;for(let G=0;G<=r;G++){const C=G/r*c+a,P=Math.cos(C),U=Math.sin(C);E.x=M*U,E.y=m*T,E.z=M*P,f.push(E.x,E.y,E.z),d.push(0,T,0),S.x=P*.5+.5,S.y=U*.5*T+.5,p.push(S.x,S.y),g++}for(let G=0;G<r;G++){const Z=x+G,C=z+G;y===!0?u.push(C,C+1,Z):u.push(C+1,C,Z),L+=3}l.addGroup(h,L,y===!0?1:2),h+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class as extends _o{constructor(e=1,t=1,i=32,r=1,o=!1,s=0,a=Math.PI*2){super(0,e,t,i,r,o,s,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:s,thetaLength:a}}static fromJSON(e){return new as(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yo extends Bt{constructor(e=1,t=32,i=16,r=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:o,thetaStart:s,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(s+a,Math.PI);let l=0;const u=[],f=new O,d=new O,p=[],g=[],v=[],m=[];for(let h=0;h<=i;h++){const b=[],_=h/i;let y=0;h===0&&s===0?y=.5/t:h===i&&c===Math.PI&&(y=-.5/t);for(let x=0;x<=t;x++){const S=x/t;f.x=-e*Math.cos(r+S*o)*Math.sin(s+_*a),f.y=e*Math.cos(s+_*a),f.z=e*Math.sin(r+S*o)*Math.sin(s+_*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),m.push(S+y,1-_),b.push(l++)}u.push(b)}for(let h=0;h<i;h++)for(let b=0;b<t;b++){const _=u[h][b+1],y=u[h][b],x=u[h+1][b],S=u[h+1][b+1];(h!==0||s>0)&&p.push(_,y,S),(h!==i-1||c<Math.PI)&&p.push(y,x,S)}this.setIndex(p),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(v,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ss extends Bt{constructor(e=new os(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),t=64,i=1,r=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:o};const s=e.computeFrenetFrames(t,o);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;const a=new O,c=new O,l=new me;let u=new O;const f=[],d=[],p=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new lt(f,3)),this.setAttribute("normal",new lt(d,3)),this.setAttribute("uv",new lt(p,2));function v(){for(let _=0;_<t;_++)m(_);m(o===!1?t:0),b(),h()}function m(_){u=e.getPointAt(_/t,u);const y=s.normals[_],x=s.binormals[_];for(let S=0;S<=r;S++){const E=S/r*Math.PI*2,L=Math.sin(E),M=-Math.cos(E);c.x=M*y.x+L*x.x,c.y=M*y.y+L*x.y,c.z=M*y.z+L*x.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=u.x+i*c.x,a.y=u.y+i*c.y,a.z=u.z+i*c.z,f.push(a.x,a.y,a.z)}}function h(){for(let _=1;_<=t;_++)for(let y=1;y<=r;y++){const x=(r+1)*(_-1)+(y-1),S=(r+1)*_+(y-1),E=(r+1)*_+y,L=(r+1)*(_-1)+y;g.push(x,S,L),g.push(S,E,L)}}function b(){for(let _=0;_<=t;_++)for(let y=0;y<=r;y++)l.x=_/t,l.y=y/r,p.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ss(new v_[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class __ extends Ni{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hu,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Jc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class y_{constructor(e,t,i){const r=this;let o=!1,s=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,o===!1&&r.onStart!==void 0&&r.onStart(u,s,a),o=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=l.length;f<d;f+=2){const p=l[f],g=l[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const x_=new y_;class cs{constructor(e){this.manager=e!==void 0?e:x_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,o){i.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}cs.DEFAULT_MATERIAL_NAME="__DEFAULT";class b_ extends cs{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=Jc.get(e);if(s!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0),s;const a=ur("img");function c(){u(),Jc.add(e,this),t&&t(this),o.manager.itemEnd(e)}function l(f){u(),r&&r(f),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class M_ extends cs{constructor(e){super(e)}load(e,t,i,r){const o=new Lt,s=new b_(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},i,r),o}}class Ou extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const sa=new Qe,Qc=new O,el=new O;class S_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new es,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Qc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qc),el.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(el),t.updateMatrixWorld(),sa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(sa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class E_ extends S_{constructor(){super(new ns(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class w_ extends Ou{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new E_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class T_ extends Ou{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Iu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=tl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=tl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function tl(){return(typeof performance>"u"?Date:performance).now()}class Uu{constructor(e,t,i=0,r=1/0){this.ray=new mo(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Ja,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Pa(e,this,i,t),i.sort(nl),i}intersectObjects(e,t=!0,i=[]){for(let r=0,o=e.length;r<o;r++)Pa(e[r],this,i,t);return i.sort(nl),i}}function nl(n,e){return n.distance-e.distance}function Pa(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let o=0,s=r.length;o<s;o++)Pa(r[o],e,t,!0)}}class La{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qa);const yi=new vn,Dn=new Uu,Wi=new me,il=new O,Gr=new O,ca=new O,rl=new Qe;class A_ extends nn{constructor(e,t,i){super(),i.style.touchAction="none";let r=null,o=null;const s=[],a=this;function c(){i.addEventListener("pointermove",p),i.addEventListener("pointerdown",g),i.addEventListener("pointerup",v),i.addEventListener("pointerleave",v)}function l(){i.removeEventListener("pointermove",p),i.removeEventListener("pointerdown",g),i.removeEventListener("pointerup",v),i.removeEventListener("pointerleave",v),i.style.cursor=""}function u(){l()}function f(){return e}function d(){return Dn}function p(h){if(a.enabled!==!1){if(m(h),Dn.setFromCamera(Wi,t),r){Dn.ray.intersectPlane(yi,Gr)&&r.position.copy(Gr.sub(il).applyMatrix4(rl)),a.dispatchEvent({type:"drag",object:r});return}if(h.pointerType==="mouse"||h.pointerType==="pen")if(s.length=0,Dn.setFromCamera(Wi,t),Dn.intersectObjects(e,a.recursive,s),s.length>0){const b=s[0].object;yi.setFromNormalAndCoplanarPoint(t.getWorldDirection(yi.normal),ca.setFromMatrixPosition(b.matrixWorld)),o!==b&&o!==null&&(a.dispatchEvent({type:"hoveroff",object:o}),i.style.cursor="auto",o=null),o!==b&&(a.dispatchEvent({type:"hoveron",object:b}),i.style.cursor="pointer",o=b)}else o!==null&&(a.dispatchEvent({type:"hoveroff",object:o}),i.style.cursor="auto",o=null)}}function g(h){a.enabled!==!1&&(m(h),s.length=0,Dn.setFromCamera(Wi,t),Dn.intersectObjects(e,a.recursive,s),s.length>0&&(r=a.transformGroup===!0?e[0]:s[0].object,yi.setFromNormalAndCoplanarPoint(t.getWorldDirection(yi.normal),ca.setFromMatrixPosition(r.matrixWorld)),Dn.ray.intersectPlane(yi,Gr)&&(rl.copy(r.parent.matrixWorld).invert(),il.copy(Gr).sub(ca.setFromMatrixPosition(r.matrixWorld))),i.style.cursor="move",a.dispatchEvent({type:"dragstart",object:r})))}function v(){a.enabled!==!1&&(r&&(a.dispatchEvent({type:"dragend",object:r}),r=null),i.style.cursor=o?"pointer":"auto")}function m(h){const b=i.getBoundingClientRect();Wi.x=(h.clientX-b.left)/b.width*2-1,Wi.y=-(h.clientY-b.top)/b.height*2+1}c(),this.enabled=!0,this.recursive=!0,this.transformGroup=!1,this.activate=c,this.deactivate=l,this.dispose=u,this.getObjects=f,this.getRaycaster=d}}function C_(n,e,t){var i,r=1;n==null&&(n=0),e==null&&(e=0),t==null&&(t=0);function o(){var s,a=i.length,c,l=0,u=0,f=0;for(s=0;s<a;++s)c=i[s],l+=c.x||0,u+=c.y||0,f+=c.z||0;for(l=(l/a-n)*r,u=(u/a-e)*r,f=(f/a-t)*r,s=0;s<a;++s)c=i[s],l&&(c.x-=l),u&&(c.y-=u),f&&(c.z-=f)}return o.initialize=function(s){i=s},o.x=function(s){return arguments.length?(n=+s,o):n},o.y=function(s){return arguments.length?(e=+s,o):e},o.z=function(s){return arguments.length?(t=+s,o):t},o.strength=function(s){return arguments.length?(r=+s,o):r},o}function R_(n){const e=+this._x.call(null,n);return Nu(this.cover(e),e,n)}function Nu(n,e,t){if(isNaN(e))return n;var i,r=n._root,o={data:t},s=n._x0,a=n._x1,c,l,u,f,d;if(!r)return n._root=o,n;for(;r.length;)if((u=e>=(c=(s+a)/2))?s=c:a=c,i=r,!(r=r[f=+u]))return i[f]=o,n;if(l=+n._x.call(null,r.data),e===l)return o.next=r,i?i[f]=o:n._root=o,n;do i=i?i[f]=new Array(2):n._root=new Array(2),(u=e>=(c=(s+a)/2))?s=c:a=c;while((f=+u)==(d=+(l>=c)));return i[d]=r,i[f]=o,n}function P_(n){Array.isArray(n)||(n=Array.from(n));const e=n.length,t=new Float64Array(e);let i=1/0,r=-1/0;for(let o=0,s;o<e;++o)isNaN(s=+this._x.call(null,n[o]))||(t[o]=s,s<i&&(i=s),s>r&&(r=s));if(i>r)return this;this.cover(i).cover(r);for(let o=0;o<e;++o)Nu(this,t[o],n[o]);return this}function L_(n){if(isNaN(n=+n))return this;var e=this._x0,t=this._x1;if(isNaN(e))t=(e=Math.floor(n))+1;else{for(var i=t-e||1,r=this._root,o,s;e>n||n>=t;)switch(s=+(n<e),o=new Array(2),o[s]=r,r=o,i*=2,s){case 0:t=e+i;break;case 1:e=t-i;break}this._root&&this._root.length&&(this._root=r)}return this._x0=e,this._x1=t,this}function D_(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function O_(n){return arguments.length?this.cover(+n[0][0]).cover(+n[1][0]):isNaN(this._x0)?void 0:[[this._x0],[this._x1]]}function Sn(n,e,t){this.node=n,this.x0=e,this.x1=t}function I_(n,e){var t,i=this._x0,r,o,s=this._x1,a=[],c=this._root,l,u;for(c&&a.push(new Sn(c,i,s)),e==null?e=1/0:(i=n-e,s=n+e);l=a.pop();)if(!(!(c=l.node)||(r=l.x0)>s||(o=l.x1)<i))if(c.length){var f=(r+o)/2;a.push(new Sn(c[1],f,o),new Sn(c[0],r,f)),(u=+(n>=f))&&(l=a[a.length-1],a[a.length-1]=a[a.length-1-u],a[a.length-1-u]=l)}else{var d=Math.abs(n-+this._x.call(null,c.data));d<e&&(e=d,i=n-d,s=n+d,t=c.data)}return t}function U_(n){if(isNaN(c=+this._x.call(null,n)))return this;var e,t=this._root,i,r,o,s=this._x0,a=this._x1,c,l,u,f,d;if(!t)return this;if(t.length)for(;;){if((u=c>=(l=(s+a)/2))?s=l:a=l,e=t,!(t=t[f=+u]))return this;if(!t.length)break;e[f+1&1]&&(i=e,d=f)}for(;t.data!==n;)if(r=t,!(t=t.next))return this;return(o=t.next)&&delete t.next,r?(o?r.next=o:delete r.next,this):e?(o?e[f]=o:delete e[f],(t=e[0]||e[1])&&t===(e[1]||e[0])&&!t.length&&(i?i[d]=t:this._root=t),this):(this._root=o,this)}function N_(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function F_(){return this._root}function B_(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function k_(n){var e=[],t,i=this._root,r,o,s;for(i&&e.push(new Sn(i,this._x0,this._x1));t=e.pop();)if(!n(i=t.node,o=t.x0,s=t.x1)&&i.length){var a=(o+s)/2;(r=i[1])&&e.push(new Sn(r,a,s)),(r=i[0])&&e.push(new Sn(r,o,a))}return this}function z_(n){var e=[],t=[],i;for(this._root&&e.push(new Sn(this._root,this._x0,this._x1));i=e.pop();){var r=i.node;if(r.length){var o,s=i.x0,a=i.x1,c=(s+a)/2;(o=r[0])&&e.push(new Sn(o,s,c)),(o=r[1])&&e.push(new Sn(o,c,a))}t.push(i)}for(;i=t.pop();)n(i.node,i.x0,i.x1);return this}function H_(n){return n[0]}function G_(n){return arguments.length?(this._x=n,this):this._x}function Fu(n,e){var t=new ls(e??H_,NaN,NaN);return n==null?t:t.addAll(n)}function ls(n,e,t){this._x=n,this._x0=e,this._x1=t,this._root=void 0}function ol(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var Dt=Fu.prototype=ls.prototype;Dt.copy=function(){var n=new ls(this._x,this._x0,this._x1),e=this._root,t,i;if(!e)return n;if(!e.length)return n._root=ol(e),n;for(t=[{source:e,target:n._root=new Array(2)}];e=t.pop();)for(var r=0;r<2;++r)(i=e.source[r])&&(i.length?t.push({source:i,target:e.target[r]=new Array(2)}):e.target[r]=ol(i));return n};Dt.add=R_;Dt.addAll=P_;Dt.cover=L_;Dt.data=D_;Dt.extent=O_;Dt.find=I_;Dt.remove=U_;Dt.removeAll=N_;Dt.root=F_;Dt.size=B_;Dt.visit=k_;Dt.visitAfter=z_;Dt.x=G_;function V_(n){const e=+this._x.call(null,n),t=+this._y.call(null,n);return Bu(this.cover(e,t),e,t,n)}function Bu(n,e,t,i){if(isNaN(e)||isNaN(t))return n;var r,o=n._root,s={data:i},a=n._x0,c=n._y0,l=n._x1,u=n._y1,f,d,p,g,v,m,h,b;if(!o)return n._root=s,n;for(;o.length;)if((v=e>=(f=(a+l)/2))?a=f:l=f,(m=t>=(d=(c+u)/2))?c=d:u=d,r=o,!(o=o[h=m<<1|v]))return r[h]=s,n;if(p=+n._x.call(null,o.data),g=+n._y.call(null,o.data),e===p&&t===g)return s.next=o,r?r[h]=s:n._root=s,n;do r=r?r[h]=new Array(4):n._root=new Array(4),(v=e>=(f=(a+l)/2))?a=f:l=f,(m=t>=(d=(c+u)/2))?c=d:u=d;while((h=m<<1|v)===(b=(g>=d)<<1|p>=f));return r[b]=o,r[h]=s,n}function W_(n){var e,t,i=n.length,r,o,s=new Array(i),a=new Array(i),c=1/0,l=1/0,u=-1/0,f=-1/0;for(t=0;t<i;++t)isNaN(r=+this._x.call(null,e=n[t]))||isNaN(o=+this._y.call(null,e))||(s[t]=r,a[t]=o,r<c&&(c=r),r>u&&(u=r),o<l&&(l=o),o>f&&(f=o));if(c>u||l>f)return this;for(this.cover(c,l).cover(u,f),t=0;t<i;++t)Bu(this,s[t],a[t],n[t]);return this}function j_(n,e){if(isNaN(n=+n)||isNaN(e=+e))return this;var t=this._x0,i=this._y0,r=this._x1,o=this._y1;if(isNaN(t))r=(t=Math.floor(n))+1,o=(i=Math.floor(e))+1;else{for(var s=r-t||1,a=this._root,c,l;t>n||n>=r||i>e||e>=o;)switch(l=(e<i)<<1|n<t,c=new Array(4),c[l]=a,a=c,s*=2,l){case 0:r=t+s,o=i+s;break;case 1:t=r-s,o=i+s;break;case 2:r=t+s,i=o-s;break;case 3:t=r-s,i=o-s;break}this._root&&this._root.length&&(this._root=a)}return this._x0=t,this._y0=i,this._x1=r,this._y1=o,this}function X_(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function q_(n){return arguments.length?this.cover(+n[0][0],+n[0][1]).cover(+n[1][0],+n[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function Ct(n,e,t,i,r){this.node=n,this.x0=e,this.y0=t,this.x1=i,this.y1=r}function $_(n,e,t){var i,r=this._x0,o=this._y0,s,a,c,l,u=this._x1,f=this._y1,d=[],p=this._root,g,v;for(p&&d.push(new Ct(p,r,o,u,f)),t==null?t=1/0:(r=n-t,o=e-t,u=n+t,f=e+t,t*=t);g=d.pop();)if(!(!(p=g.node)||(s=g.x0)>u||(a=g.y0)>f||(c=g.x1)<r||(l=g.y1)<o))if(p.length){var m=(s+c)/2,h=(a+l)/2;d.push(new Ct(p[3],m,h,c,l),new Ct(p[2],s,h,m,l),new Ct(p[1],m,a,c,h),new Ct(p[0],s,a,m,h)),(v=(e>=h)<<1|n>=m)&&(g=d[d.length-1],d[d.length-1]=d[d.length-1-v],d[d.length-1-v]=g)}else{var b=n-+this._x.call(null,p.data),_=e-+this._y.call(null,p.data),y=b*b+_*_;if(y<t){var x=Math.sqrt(t=y);r=n-x,o=e-x,u=n+x,f=e+x,i=p.data}}return i}function Y_(n){if(isNaN(u=+this._x.call(null,n))||isNaN(f=+this._y.call(null,n)))return this;var e,t=this._root,i,r,o,s=this._x0,a=this._y0,c=this._x1,l=this._y1,u,f,d,p,g,v,m,h;if(!t)return this;if(t.length)for(;;){if((g=u>=(d=(s+c)/2))?s=d:c=d,(v=f>=(p=(a+l)/2))?a=p:l=p,e=t,!(t=t[m=v<<1|g]))return this;if(!t.length)break;(e[m+1&3]||e[m+2&3]||e[m+3&3])&&(i=e,h=m)}for(;t.data!==n;)if(r=t,!(t=t.next))return this;return(o=t.next)&&delete t.next,r?(o?r.next=o:delete r.next,this):e?(o?e[m]=o:delete e[m],(t=e[0]||e[1]||e[2]||e[3])&&t===(e[3]||e[2]||e[1]||e[0])&&!t.length&&(i?i[h]=t:this._root=t),this):(this._root=o,this)}function K_(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function Z_(){return this._root}function J_(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function Q_(n){var e=[],t,i=this._root,r,o,s,a,c;for(i&&e.push(new Ct(i,this._x0,this._y0,this._x1,this._y1));t=e.pop();)if(!n(i=t.node,o=t.x0,s=t.y0,a=t.x1,c=t.y1)&&i.length){var l=(o+a)/2,u=(s+c)/2;(r=i[3])&&e.push(new Ct(r,l,u,a,c)),(r=i[2])&&e.push(new Ct(r,o,u,l,c)),(r=i[1])&&e.push(new Ct(r,l,s,a,u)),(r=i[0])&&e.push(new Ct(r,o,s,l,u))}return this}function e0(n){var e=[],t=[],i;for(this._root&&e.push(new Ct(this._root,this._x0,this._y0,this._x1,this._y1));i=e.pop();){var r=i.node;if(r.length){var o,s=i.x0,a=i.y0,c=i.x1,l=i.y1,u=(s+c)/2,f=(a+l)/2;(o=r[0])&&e.push(new Ct(o,s,a,u,f)),(o=r[1])&&e.push(new Ct(o,u,a,c,f)),(o=r[2])&&e.push(new Ct(o,s,f,u,l)),(o=r[3])&&e.push(new Ct(o,u,f,c,l))}t.push(i)}for(;i=t.pop();)n(i.node,i.x0,i.y0,i.x1,i.y1);return this}function t0(n){return n[0]}function n0(n){return arguments.length?(this._x=n,this):this._x}function i0(n){return n[1]}function r0(n){return arguments.length?(this._y=n,this):this._y}function ku(n,e,t){var i=new us(e??t0,t??i0,NaN,NaN,NaN,NaN);return n==null?i:i.addAll(n)}function us(n,e,t,i,r,o){this._x=n,this._y=e,this._x0=t,this._y0=i,this._x1=r,this._y1=o,this._root=void 0}function al(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var Pt=ku.prototype=us.prototype;Pt.copy=function(){var n=new us(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,t,i;if(!e)return n;if(!e.length)return n._root=al(e),n;for(t=[{source:e,target:n._root=new Array(4)}];e=t.pop();)for(var r=0;r<4;++r)(i=e.source[r])&&(i.length?t.push({source:i,target:e.target[r]=new Array(4)}):e.target[r]=al(i));return n};Pt.add=V_;Pt.addAll=W_;Pt.cover=j_;Pt.data=X_;Pt.extent=q_;Pt.find=$_;Pt.remove=Y_;Pt.removeAll=K_;Pt.root=Z_;Pt.size=J_;Pt.visit=Q_;Pt.visitAfter=e0;Pt.x=n0;Pt.y=r0;function o0(n){const e=+this._x.call(null,n),t=+this._y.call(null,n),i=+this._z.call(null,n);return zu(this.cover(e,t,i),e,t,i,n)}function zu(n,e,t,i,r){if(isNaN(e)||isNaN(t)||isNaN(i))return n;var o,s=n._root,a={data:r},c=n._x0,l=n._y0,u=n._z0,f=n._x1,d=n._y1,p=n._z1,g,v,m,h,b,_,y,x,S,E,L;if(!s)return n._root=a,n;for(;s.length;)if((y=e>=(g=(c+f)/2))?c=g:f=g,(x=t>=(v=(l+d)/2))?l=v:d=v,(S=i>=(m=(u+p)/2))?u=m:p=m,o=s,!(s=s[E=S<<2|x<<1|y]))return o[E]=a,n;if(h=+n._x.call(null,s.data),b=+n._y.call(null,s.data),_=+n._z.call(null,s.data),e===h&&t===b&&i===_)return a.next=s,o?o[E]=a:n._root=a,n;do o=o?o[E]=new Array(8):n._root=new Array(8),(y=e>=(g=(c+f)/2))?c=g:f=g,(x=t>=(v=(l+d)/2))?l=v:d=v,(S=i>=(m=(u+p)/2))?u=m:p=m;while((E=S<<2|x<<1|y)===(L=(_>=m)<<2|(b>=v)<<1|h>=g));return o[L]=s,o[E]=a,n}function a0(n){Array.isArray(n)||(n=Array.from(n));const e=n.length,t=new Float64Array(e),i=new Float64Array(e),r=new Float64Array(e);let o=1/0,s=1/0,a=1/0,c=-1/0,l=-1/0,u=-1/0;for(let f=0,d,p,g,v;f<e;++f)isNaN(p=+this._x.call(null,d=n[f]))||isNaN(g=+this._y.call(null,d))||isNaN(v=+this._z.call(null,d))||(t[f]=p,i[f]=g,r[f]=v,p<o&&(o=p),p>c&&(c=p),g<s&&(s=g),g>l&&(l=g),v<a&&(a=v),v>u&&(u=v));if(o>c||s>l||a>u)return this;this.cover(o,s,a).cover(c,l,u);for(let f=0;f<e;++f)zu(this,t[f],i[f],r[f],n[f]);return this}function s0(n,e,t){if(isNaN(n=+n)||isNaN(e=+e)||isNaN(t=+t))return this;var i=this._x0,r=this._y0,o=this._z0,s=this._x1,a=this._y1,c=this._z1;if(isNaN(i))s=(i=Math.floor(n))+1,a=(r=Math.floor(e))+1,c=(o=Math.floor(t))+1;else{for(var l=s-i||1,u=this._root,f,d;i>n||n>=s||r>e||e>=a||o>t||t>=c;)switch(d=(t<o)<<2|(e<r)<<1|n<i,f=new Array(8),f[d]=u,u=f,l*=2,d){case 0:s=i+l,a=r+l,c=o+l;break;case 1:i=s-l,a=r+l,c=o+l;break;case 2:s=i+l,r=a-l,c=o+l;break;case 3:i=s-l,r=a-l,c=o+l;break;case 4:s=i+l,a=r+l,o=c-l;break;case 5:i=s-l,a=r+l,o=c-l;break;case 6:s=i+l,r=a-l,o=c-l;break;case 7:i=s-l,r=a-l,o=c-l;break}this._root&&this._root.length&&(this._root=u)}return this._x0=i,this._y0=r,this._z0=o,this._x1=s,this._y1=a,this._z1=c,this}function c0(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function l0(n){return arguments.length?this.cover(+n[0][0],+n[0][1],+n[0][2]).cover(+n[1][0],+n[1][1],+n[1][2]):isNaN(this._x0)?void 0:[[this._x0,this._y0,this._z0],[this._x1,this._y1,this._z1]]}function Ke(n,e,t,i,r,o,s){this.node=n,this.x0=e,this.y0=t,this.z0=i,this.x1=r,this.y1=o,this.z1=s}function u0(n,e,t,i){var r,o=this._x0,s=this._y0,a=this._z0,c,l,u,f,d,p,g=this._x1,v=this._y1,m=this._z1,h=[],b=this._root,_,y;for(b&&h.push(new Ke(b,o,s,a,g,v,m)),i==null?i=1/0:(o=n-i,s=e-i,a=t-i,g=n+i,v=e+i,m=t+i,i*=i);_=h.pop();)if(!(!(b=_.node)||(c=_.x0)>g||(l=_.y0)>v||(u=_.z0)>m||(f=_.x1)<o||(d=_.y1)<s||(p=_.z1)<a))if(b.length){var x=(c+f)/2,S=(l+d)/2,E=(u+p)/2;h.push(new Ke(b[7],x,S,E,f,d,p),new Ke(b[6],c,S,E,x,d,p),new Ke(b[5],x,l,E,f,S,p),new Ke(b[4],c,l,E,x,S,p),new Ke(b[3],x,S,u,f,d,E),new Ke(b[2],c,S,u,x,d,E),new Ke(b[1],x,l,u,f,S,E),new Ke(b[0],c,l,u,x,S,E)),(y=(t>=E)<<2|(e>=S)<<1|n>=x)&&(_=h[h.length-1],h[h.length-1]=h[h.length-1-y],h[h.length-1-y]=_)}else{var L=n-+this._x.call(null,b.data),M=e-+this._y.call(null,b.data),T=t-+this._z.call(null,b.data),z=L*L+M*M+T*T;if(z<i){var G=Math.sqrt(i=z);o=n-G,s=e-G,a=t-G,g=n+G,v=e+G,m=t+G,r=b.data}}return r}function f0(n){if(isNaN(d=+this._x.call(null,n))||isNaN(p=+this._y.call(null,n))||isNaN(g=+this._z.call(null,n)))return this;var e,t=this._root,i,r,o,s=this._x0,a=this._y0,c=this._z0,l=this._x1,u=this._y1,f=this._z1,d,p,g,v,m,h,b,_,y,x,S;if(!t)return this;if(t.length)for(;;){if((b=d>=(v=(s+l)/2))?s=v:l=v,(_=p>=(m=(a+u)/2))?a=m:u=m,(y=g>=(h=(c+f)/2))?c=h:f=h,e=t,!(t=t[x=y<<2|_<<1|b]))return this;if(!t.length)break;(e[x+1&7]||e[x+2&7]||e[x+3&7]||e[x+4&7]||e[x+5&7]||e[x+6&7]||e[x+7&7])&&(i=e,S=x)}for(;t.data!==n;)if(r=t,!(t=t.next))return this;return(o=t.next)&&delete t.next,r?(o?r.next=o:delete r.next,this):e?(o?e[x]=o:delete e[x],(t=e[0]||e[1]||e[2]||e[3]||e[4]||e[5]||e[6]||e[7])&&t===(e[7]||e[6]||e[5]||e[4]||e[3]||e[2]||e[1]||e[0])&&!t.length&&(i?i[S]=t:this._root=t),this):(this._root=o,this)}function h0(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function d0(){return this._root}function p0(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function m0(n){var e=[],t,i=this._root,r,o,s,a,c,l,u;for(i&&e.push(new Ke(i,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));t=e.pop();)if(!n(i=t.node,o=t.x0,s=t.y0,a=t.z0,c=t.x1,l=t.y1,u=t.z1)&&i.length){var f=(o+c)/2,d=(s+l)/2,p=(a+u)/2;(r=i[7])&&e.push(new Ke(r,f,d,p,c,l,u)),(r=i[6])&&e.push(new Ke(r,o,d,p,f,l,u)),(r=i[5])&&e.push(new Ke(r,f,s,p,c,d,u)),(r=i[4])&&e.push(new Ke(r,o,s,p,f,d,u)),(r=i[3])&&e.push(new Ke(r,f,d,a,c,l,p)),(r=i[2])&&e.push(new Ke(r,o,d,a,f,l,p)),(r=i[1])&&e.push(new Ke(r,f,s,a,c,d,p)),(r=i[0])&&e.push(new Ke(r,o,s,a,f,d,p))}return this}function g0(n){var e=[],t=[],i;for(this._root&&e.push(new Ke(this._root,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));i=e.pop();){var r=i.node;if(r.length){var o,s=i.x0,a=i.y0,c=i.z0,l=i.x1,u=i.y1,f=i.z1,d=(s+l)/2,p=(a+u)/2,g=(c+f)/2;(o=r[0])&&e.push(new Ke(o,s,a,c,d,p,g)),(o=r[1])&&e.push(new Ke(o,d,a,c,l,p,g)),(o=r[2])&&e.push(new Ke(o,s,p,c,d,u,g)),(o=r[3])&&e.push(new Ke(o,d,p,c,l,u,g)),(o=r[4])&&e.push(new Ke(o,s,a,g,d,p,f)),(o=r[5])&&e.push(new Ke(o,d,a,g,l,p,f)),(o=r[6])&&e.push(new Ke(o,s,p,g,d,u,f)),(o=r[7])&&e.push(new Ke(o,d,p,g,l,u,f))}t.push(i)}for(;i=t.pop();)n(i.node,i.x0,i.y0,i.z0,i.x1,i.y1,i.z1);return this}function v0(n){return n[0]}function _0(n){return arguments.length?(this._x=n,this):this._x}function y0(n){return n[1]}function x0(n){return arguments.length?(this._y=n,this):this._y}function b0(n){return n[2]}function M0(n){return arguments.length?(this._z=n,this):this._z}function Hu(n,e,t,i){var r=new fs(e??v0,t??y0,i??b0,NaN,NaN,NaN,NaN,NaN,NaN);return n==null?r:r.addAll(n)}function fs(n,e,t,i,r,o,s,a,c){this._x=n,this._y=e,this._z=t,this._x0=i,this._y0=r,this._z0=o,this._x1=s,this._y1=a,this._z1=c,this._root=void 0}function sl(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var Mt=Hu.prototype=fs.prototype;Mt.copy=function(){var n=new fs(this._x,this._y,this._z,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1),e=this._root,t,i;if(!e)return n;if(!e.length)return n._root=sl(e),n;for(t=[{source:e,target:n._root=new Array(8)}];e=t.pop();)for(var r=0;r<8;++r)(i=e.source[r])&&(i.length?t.push({source:i,target:e.target[r]=new Array(8)}):e.target[r]=sl(i));return n};Mt.add=o0;Mt.addAll=a0;Mt.cover=s0;Mt.data=c0;Mt.extent=l0;Mt.find=u0;Mt.remove=f0;Mt.removeAll=h0;Mt.root=d0;Mt.size=p0;Mt.visit=m0;Mt.visitAfter=g0;Mt.x=_0;Mt.y=x0;Mt.z=M0;function bn(n){return function(){return n}}function _n(n){return(n()-.5)*1e-6}function S0(n){return n.index}function cl(n,e){var t=n.get(e);if(!t)throw new Error("node not found: "+e);return t}function E0(n){var e=S0,t=d,i,r=bn(30),o,s,a,c,l,u,f=1;n==null&&(n=[]);function d(h){return 1/Math.min(c[h.source.index],c[h.target.index])}function p(h){for(var b=0,_=n.length;b<f;++b)for(var y=0,x,S,E,L=0,M=0,T=0,z,G;y<_;++y)x=n[y],S=x.source,E=x.target,L=E.x+E.vx-S.x-S.vx||_n(u),a>1&&(M=E.y+E.vy-S.y-S.vy||_n(u)),a>2&&(T=E.z+E.vz-S.z-S.vz||_n(u)),z=Math.sqrt(L*L+M*M+T*T),z=(z-o[y])/z*h*i[y],L*=z,M*=z,T*=z,E.vx-=L*(G=l[y]),a>1&&(E.vy-=M*G),a>2&&(E.vz-=T*G),S.vx+=L*(G=1-G),a>1&&(S.vy+=M*G),a>2&&(S.vz+=T*G)}function g(){if(s){var h,b=s.length,_=n.length,y=new Map(s.map((S,E)=>[e(S,E,s),S])),x;for(h=0,c=new Array(b);h<_;++h)x=n[h],x.index=h,typeof x.source!="object"&&(x.source=cl(y,x.source)),typeof x.target!="object"&&(x.target=cl(y,x.target)),c[x.source.index]=(c[x.source.index]||0)+1,c[x.target.index]=(c[x.target.index]||0)+1;for(h=0,l=new Array(_);h<_;++h)x=n[h],l[h]=c[x.source.index]/(c[x.source.index]+c[x.target.index]);i=new Array(_),v(),o=new Array(_),m()}}function v(){if(s)for(var h=0,b=n.length;h<b;++h)i[h]=+t(n[h],h,n)}function m(){if(s)for(var h=0,b=n.length;h<b;++h)o[h]=+r(n[h],h,n)}return p.initialize=function(h,...b){s=h,u=b.find(_=>typeof _=="function")||Math.random,a=b.find(_=>[1,2,3].includes(_))||2,g()},p.links=function(h){return arguments.length?(n=h,g(),p):n},p.id=function(h){return arguments.length?(e=h,p):e},p.iterations=function(h){return arguments.length?(f=+h,p):f},p.strength=function(h){return arguments.length?(t=typeof h=="function"?h:bn(+h),v(),p):t},p.distance=function(h){return arguments.length?(r=typeof h=="function"?h:bn(+h),m(),p):r},p}var w0={value:()=>{}};function Gu(){for(var n=0,e=arguments.length,t={},i;n<e;++n){if(!(i=arguments[n]+"")||i in t||/[\s.]/.test(i))throw new Error("illegal type: "+i);t[i]=[]}return new $r(t)}function $r(n){this._=n}function T0(n,e){return n.trim().split(/^|\s+/).map(function(t){var i="",r=t.indexOf(".");if(r>=0&&(i=t.slice(r+1),t=t.slice(0,r)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:i}})}$r.prototype=Gu.prototype={constructor:$r,on:function(n,e){var t=this._,i=T0(n+"",t),r,o=-1,s=i.length;if(arguments.length<2){for(;++o<s;)if((r=(n=i[o]).type)&&(r=A0(t[r],n.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++o<s;)if(r=(n=i[o]).type)t[r]=ll(t[r],n.name,e);else if(e==null)for(r in t)t[r]=ll(t[r],n.name,null);return this},copy:function(){var n={},e=this._;for(var t in e)n[t]=e[t].slice();return new $r(n)},call:function(n,e){if((r=arguments.length-2)>0)for(var t=new Array(r),i=0,r,o;i<r;++i)t[i]=arguments[i+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(o=this._[n],i=0,r=o.length;i<r;++i)o[i].value.apply(e,t)},apply:function(n,e,t){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var i=this._[n],r=0,o=i.length;r<o;++r)i[r].value.apply(e,t)}};function A0(n,e){for(var t=0,i=n.length,r;t<i;++t)if((r=n[t]).name===e)return r.value}function ll(n,e,t){for(var i=0,r=n.length;i<r;++i)if(n[i].name===e){n[i]=w0,n=n.slice(0,i).concat(n.slice(i+1));break}return t!=null&&n.push({name:e,value:t}),n}var Ii=0,Ji=0,ji=0,Vu=1e3,ro,Qi,oo=0,ei=0,xo=0,fr=typeof performance=="object"&&performance.now?performance:Date,Wu=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function ju(){return ei||(Wu(C0),ei=fr.now()+xo)}function C0(){ei=0}function Da(){this._call=this._time=this._next=null}Da.prototype=Xu.prototype={constructor:Da,restart:function(n,e,t){if(typeof n!="function")throw new TypeError("callback is not a function");t=(t==null?ju():+t)+(e==null?0:+e),!this._next&&Qi!==this&&(Qi?Qi._next=this:ro=this,Qi=this),this._call=n,this._time=t,Oa()},stop:function(){this._call&&(this._call=null,this._time=1/0,Oa())}};function Xu(n,e,t){var i=new Da;return i.restart(n,e,t),i}function R0(){ju(),++Ii;for(var n=ro,e;n;)(e=ei-n._time)>=0&&n._call.call(void 0,e),n=n._next;--Ii}function ul(){ei=(oo=fr.now())+xo,Ii=Ji=0;try{R0()}finally{Ii=0,L0(),ei=0}}function P0(){var n=fr.now(),e=n-oo;e>Vu&&(xo-=e,oo=n)}function L0(){for(var n,e=ro,t,i=1/0;e;)e._call?(i>e._time&&(i=e._time),n=e,e=e._next):(t=e._next,e._next=null,e=n?n._next=t:ro=t);Qi=n,Oa(i)}function Oa(n){if(!Ii){Ji&&(Ji=clearTimeout(Ji));var e=n-ei;e>24?(n<1/0&&(Ji=setTimeout(ul,n-fr.now()-xo)),ji&&(ji=clearInterval(ji))):(ji||(oo=fr.now(),ji=setInterval(P0,Vu)),Ii=1,Wu(ul))}}const D0=1664525,O0=1013904223,fl=4294967296;function I0(){let n=1;return()=>(n=(D0*n+O0)%fl)/fl}var hl=3;function la(n){return n.x}function dl(n){return n.y}function U0(n){return n.z}var N0=10,F0=Math.PI*(3-Math.sqrt(5)),B0=Math.PI*20/(9+Math.sqrt(221));function k0(n,e){e=e||2;var t=Math.min(hl,Math.max(1,Math.round(e))),i,r=1,o=.001,s=1-Math.pow(o,1/300),a=0,c=.6,l=new Map,u=Xu(p),f=Gu("tick","end"),d=I0();n==null&&(n=[]);function p(){g(),f.call("tick",i),r<o&&(u.stop(),f.call("end",i))}function g(h){var b,_=n.length,y;h===void 0&&(h=1);for(var x=0;x<h;++x)for(r+=(a-r)*s,l.forEach(function(S){S(r)}),b=0;b<_;++b)y=n[b],y.fx==null?y.x+=y.vx*=c:(y.x=y.fx,y.vx=0),t>1&&(y.fy==null?y.y+=y.vy*=c:(y.y=y.fy,y.vy=0)),t>2&&(y.fz==null?y.z+=y.vz*=c:(y.z=y.fz,y.vz=0));return i}function v(){for(var h=0,b=n.length,_;h<b;++h){if(_=n[h],_.index=h,_.fx!=null&&(_.x=_.fx),_.fy!=null&&(_.y=_.fy),_.fz!=null&&(_.z=_.fz),isNaN(_.x)||t>1&&isNaN(_.y)||t>2&&isNaN(_.z)){var y=N0*(t>2?Math.cbrt(.5+h):t>1?Math.sqrt(.5+h):h),x=h*F0,S=h*B0;t===1?_.x=y:t===2?(_.x=y*Math.cos(x),_.y=y*Math.sin(x)):(_.x=y*Math.sin(x)*Math.cos(S),_.y=y*Math.cos(x),_.z=y*Math.sin(x)*Math.sin(S))}(isNaN(_.vx)||t>1&&isNaN(_.vy)||t>2&&isNaN(_.vz))&&(_.vx=0,t>1&&(_.vy=0),t>2&&(_.vz=0))}}function m(h){return h.initialize&&h.initialize(n,d,t),h}return v(),i={tick:g,restart:function(){return u.restart(p),i},stop:function(){return u.stop(),i},numDimensions:function(h){return arguments.length?(t=Math.min(hl,Math.max(1,Math.round(h))),l.forEach(m),i):t},nodes:function(h){return arguments.length?(n=h,v(),l.forEach(m),i):n},alpha:function(h){return arguments.length?(r=+h,i):r},alphaMin:function(h){return arguments.length?(o=+h,i):o},alphaDecay:function(h){return arguments.length?(s=+h,i):+s},alphaTarget:function(h){return arguments.length?(a=+h,i):a},velocityDecay:function(h){return arguments.length?(c=1-h,i):1-c},randomSource:function(h){return arguments.length?(d=h,l.forEach(m),i):d},force:function(h,b){return arguments.length>1?(b==null?l.delete(h):l.set(h,m(b)),i):l.get(h)},find:function(){var h=Array.prototype.slice.call(arguments),b=h.shift()||0,_=(t>1?h.shift():null)||0,y=(t>2?h.shift():null)||0,x=h.shift()||1/0,S=0,E=n.length,L,M,T,z,G,Z;for(x*=x,S=0;S<E;++S)G=n[S],L=b-G.x,M=_-(G.y||0),T=y-(G.z||0),z=L*L+M*M+T*T,z<x&&(Z=G,x=z);return Z},on:function(h,b){return arguments.length>1?(f.on(h,b),i):f.on(h)}}}function z0(){var n,e,t,i,r,o=bn(-30),s,a=1,c=1/0,l=.81;function u(g){var v,m=n.length,h=(e===1?Fu(n,la):e===2?ku(n,la,dl):e===3?Hu(n,la,dl,U0):null).visitAfter(d);for(r=g,v=0;v<m;++v)t=n[v],h.visit(p)}function f(){if(n){var g,v=n.length,m;for(s=new Array(v),g=0;g<v;++g)m=n[g],s[m.index]=+o(m,g,n)}}function d(g){var v=0,m,h,b=0,_,y,x,S,E=g.length;if(E){for(_=y=x=S=0;S<E;++S)(m=g[S])&&(h=Math.abs(m.value))&&(v+=m.value,b+=h,_+=h*(m.x||0),y+=h*(m.y||0),x+=h*(m.z||0));v*=Math.sqrt(4/E),g.x=_/b,e>1&&(g.y=y/b),e>2&&(g.z=x/b)}else{m=g,m.x=m.data.x,e>1&&(m.y=m.data.y),e>2&&(m.z=m.data.z);do v+=s[m.data.index];while(m=m.next)}g.value=v}function p(g,v,m,h,b){if(!g.value)return!0;var _=[m,h,b][e-1],y=g.x-t.x,x=e>1?g.y-t.y:0,S=e>2?g.z-t.z:0,E=_-v,L=y*y+x*x+S*S;if(E*E/l<L)return L<c&&(y===0&&(y=_n(i),L+=y*y),e>1&&x===0&&(x=_n(i),L+=x*x),e>2&&S===0&&(S=_n(i),L+=S*S),L<a&&(L=Math.sqrt(a*L)),t.vx+=y*g.value*r/L,e>1&&(t.vy+=x*g.value*r/L),e>2&&(t.vz+=S*g.value*r/L)),!0;if(g.length||L>=c)return;(g.data!==t||g.next)&&(y===0&&(y=_n(i),L+=y*y),e>1&&x===0&&(x=_n(i),L+=x*x),e>2&&S===0&&(S=_n(i),L+=S*S),L<a&&(L=Math.sqrt(a*L)));do g.data!==t&&(E=s[g.data.index]*r/L,t.vx+=y*E,e>1&&(t.vy+=x*E),e>2&&(t.vz+=S*E));while(g=g.next)}return u.initialize=function(g,...v){n=g,i=v.find(m=>typeof m=="function")||Math.random,e=v.find(m=>[1,2,3].includes(m))||2,f()},u.strength=function(g){return arguments.length?(o=typeof g=="function"?g:bn(+g),f(),u):o},u.distanceMin=function(g){return arguments.length?(a=g*g,u):Math.sqrt(a)},u.distanceMax=function(g){return arguments.length?(c=g*g,u):Math.sqrt(c)},u.theta=function(g){return arguments.length?(l=g*g,u):Math.sqrt(l)},u}function H0(n,e,t,i){var r,o,s=bn(.1),a,c;typeof n!="function"&&(n=bn(+n)),e==null&&(e=0),t==null&&(t=0),i==null&&(i=0);function l(f){for(var d=0,p=r.length;d<p;++d){var g=r[d],v=g.x-e||1e-6,m=(g.y||0)-t||1e-6,h=(g.z||0)-i||1e-6,b=Math.sqrt(v*v+m*m+h*h),_=(c[d]-b)*a[d]*f/b;g.vx+=v*_,o>1&&(g.vy+=m*_),o>2&&(g.vz+=h*_)}}function u(){if(r){var f,d=r.length;for(a=new Array(d),c=new Array(d),f=0;f<d;++f)c[f]=+n(r[f],f,r),a[f]=isNaN(c[f])?0:+s(r[f],f,r)}}return l.initialize=function(f,...d){r=f,o=d.find(p=>[1,2,3].includes(p))||2,u()},l.strength=function(f){return arguments.length?(s=typeof f=="function"?f:bn(+f),u(),l):s},l.radius=function(f){return arguments.length?(n=typeof f=="function"?f:bn(+f),u(),l):n},l.x=function(f){return arguments.length?(e=+f,l):e},l.y=function(f){return arguments.length?(t=+f,l):t},l.z=function(f){return arguments.length?(i=+f,l):i},l}function qu(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var hs=function(e){V0(e);var t=G0(e);return e.on=t.on,e.off=t.off,e.fire=t.fire,e};function G0(n){var e=Object.create(null);return{on:function(t,i,r){if(typeof i!="function")throw new Error("callback is expected to be a function");var o=e[t];return o||(o=e[t]=[]),o.push({callback:i,ctx:r}),n},off:function(t,i){var r=typeof t>"u";if(r)return e=Object.create(null),n;if(e[t]){var o=typeof i!="function";if(o)delete e[t];else for(var s=e[t],a=0;a<s.length;++a)s[a].callback===i&&s.splice(a,1)}return n},fire:function(t){var i=e[t];if(!i)return n;var r;arguments.length>1&&(r=Array.prototype.splice.call(arguments,1));for(var o=0;o<i.length;++o){var s=i[o];s.callback.apply(s.ctx,r)}return n}}}function V0(n){if(!n)throw new Error("Eventify cannot use falsy object as events subject");for(var e=["on","fire","off"],t=0;t<e.length;++t)if(n.hasOwnProperty(e[t]))throw new Error("Subject cannot be eventified, since it already has property '"+e[t]+"'")}var W0=X0,j0=hs;function X0(n){if(n=n||{},"uniqueLinkId"in n&&(console.warn("ngraph.graph: Starting from version 0.14 `uniqueLinkId` is deprecated.\nUse `multigraph` option instead\n",`
`,`Note: there is also change in default behavior: From now on each graph
is considered to be not a multigraph by default (each edge is unique).`),n.multigraph=n.uniqueLinkId),n.multigraph===void 0&&(n.multigraph=!1),typeof Map!="function")throw new Error("ngraph.graph requires `Map` to be defined. Please polyfill it before using ngraph");var e=new Map,t=new Map,i={},r=0,o=n.multigraph?y:_,s=[],a=U,c=U,l=U,u=U,f={version:20,addNode:v,addLink:b,removeLink:L,removeNode:h,getNode:m,getNodeCount:x,getLinkCount:S,getEdgeCount:S,getLinksCount:S,getNodesCount:x,getLinks:E,forEachNode:ee,forEachLinkedNode:Z,forEachLink:G,beginUpdate:l,endUpdate:u,clear:z,hasLink:T,hasNode:m,getLink:T};return j0(f),d(),f;function d(){var k=f.on;f.on=D;function D(){return f.beginUpdate=l=j,f.endUpdate=u=ne,a=p,c=g,f.on=k,k.apply(f,arguments)}}function p(k,D){s.push({link:k,changeType:D})}function g(k,D){s.push({node:k,changeType:D})}function v(k,D){if(k===void 0)throw new Error("Invalid node identifier");l();var B=m(k);return B?(B.data=D,c(B,"update")):(B=new q0(k,D),c(B,"add")),e.set(k,B),u(),B}function m(k){return e.get(k)}function h(k){var D=m(k);if(!D)return!1;l();var B=D.links;return B&&(B.forEach(M),D.links=null),e.delete(k),c(D,"remove"),u(),!0}function b(k,D,B){l();var re=m(k)||v(k),J=m(D)||v(D),W=o(k,D,B),ie=t.has(W.id);return t.set(W.id,W),pl(re,W),k!==D&&pl(J,W),a(W,ie?"update":"add"),u(),W}function _(k,D,B){var re=Vr(k,D),J=t.get(re);return J?(J.data=B,J):new ml(k,D,B,re)}function y(k,D,B){var re=Vr(k,D),J=i.hasOwnProperty(re);if(J||T(k,D)){J||(i[re]=0);var W="@"+ ++i[re];re=Vr(k+W,D+W)}return new ml(k,D,B,re)}function x(){return e.size}function S(){return t.size}function E(k){var D=m(k);return D?D.links:null}function L(k,D){return D!==void 0&&(k=T(k,D)),M(k)}function M(k){if(!k||!t.get(k.id))return!1;l(),t.delete(k.id);var D=m(k.fromId),B=m(k.toId);return D&&D.links.delete(k),B&&B.links.delete(k),a(k,"remove"),u(),!0}function T(k,D){if(!(k===void 0||D===void 0))return t.get(Vr(k,D))}function z(){l(),ee(function(k){h(k.id)}),u()}function G(k){if(typeof k=="function")for(var D=t.values(),B=D.next();!B.done;){if(k(B.value))return!0;B=D.next()}}function Z(k,D,B){var re=m(k);if(re&&re.links&&typeof D=="function")return B?P(re.links,k,D):C(re.links,k,D)}function C(k,D,B){for(var re,J=k.values(),W=J.next();!W.done;){var ie=W.value,F=ie.fromId===D?ie.toId:ie.fromId;if(re=B(e.get(F),ie),re)return!0;W=J.next()}}function P(k,D,B){for(var re,J=k.values(),W=J.next();!W.done;){var ie=W.value;if(ie.fromId===D&&(re=B(e.get(ie.toId),ie),re))return!0;W=J.next()}}function U(){}function j(){r+=1}function ne(){r-=1,r===0&&s.length>0&&(f.fire("changed",s),s.length=0)}function ee(k){if(typeof k!="function")throw new Error("Function is expected to iterate over graph nodes. You passed "+k);for(var D=e.values(),B=D.next();!B.done;){if(k(B.value))return!0;B=D.next()}}}function q0(n,e){this.id=n,this.links=null,this.data=e}function pl(n,e){n.links?n.links.add(e):n.links=new Set([e])}function ml(n,e,t,i){this.fromId=n,this.toId=e,this.data=t,this.id=i}function Vr(n,e){return n.toString()+"👉 "+e.toString()}const $0=qu(W0);var ds={exports:{}},pr={exports:{}},$u=function(e){return e===0?"x":e===1?"y":e===2?"z":"c"+(e+1)};const Y0=$u;var Bi=function(e){return t;function t(i,r){let o=r&&r.indent||0,s=r&&r.join!==void 0?r.join:`
`,a=Array(o+1).join(" "),c=[];for(let l=0;l<e;++l){let u=Y0(l),f=l===0?"":a;c.push(f+i.replace(/{var}/g,u))}return c.join(s)}};const Yu=Bi;pr.exports=K0;pr.exports.generateCreateBodyFunctionBody=Ku;pr.exports.getVectorCode=Ju;pr.exports.getBodyCode=Zu;function K0(n,e){let t=Ku(n,e),{Body:i}=new Function(t)();return i}function Ku(n,e){return`
${Ju(n,e)}
${Zu(n)}
return {Body: Body, Vector: Vector};
`}function Zu(n){let e=Yu(n),t=e("{var}",{join:", "});return`
function Body(${t}) {
  this.isPinned = false;
  this.pos = new Vector(${t});
  this.force = new Vector();
  this.velocity = new Vector();
  this.mass = 1;

  this.springCount = 0;
  this.springLength = 0;
}

Body.prototype.reset = function() {
  this.force.reset();
  this.springCount = 0;
  this.springLength = 0;
}

Body.prototype.setPosition = function (${t}) {
  ${e("this.pos.{var} = {var} || 0;",{indent:2})}
};`}function Ju(n,e){let t=Yu(n),i="";return e&&(i=`${t(`
   var v{var};
Object.defineProperty(this, '{var}', {
  set: function(v) { 
    if (!Number.isFinite(v)) throw new Error('Cannot set non-numbers to {var}');
    v{var} = v; 
  },
  get: function() { return v{var}; }
});`)}`),`function Vector(${t("{var}",{join:", "})}) {
  ${i}
    if (typeof arguments[0] === 'object') {
      // could be another vector
      let v = arguments[0];
      ${t('if (!Number.isFinite(v.{var})) throw new Error("Expected value is not a finite number at Vector constructor ({var})");',{indent:4})}
      ${t("this.{var} = v.{var};",{indent:4})}
    } else {
      ${t('this.{var} = typeof {var} === "number" ? {var} : 0;',{indent:4})}
    }
  }
  
  Vector.prototype.reset = function () {
    ${t("this.{var} = ",{join:""})}0;
  };`}var Z0=pr.exports,zn={exports:{}};const ps=Bi,On=$u;zn.exports=J0;zn.exports.generateQuadTreeFunctionBody=Qu;zn.exports.getInsertStackCode=of;zn.exports.getQuadNodeCode=rf;zn.exports.isSamePosition=ef;zn.exports.getChildBodyCode=nf;zn.exports.setChildBodyCode=tf;function J0(n){let e=Qu(n);return new Function(e)()}function Qu(n){let e=ps(n),t=Math.pow(2,n);return`
${of()}
${rf(n)}
${ef(n)}
${nf(n)}
${tf(n)}

function createQuadTree(options, random) {
  options = options || {};
  options.gravity = typeof options.gravity === 'number' ? options.gravity : -1;
  options.theta = typeof options.theta === 'number' ? options.theta : 0.8;

  var gravity = options.gravity;
  var updateQueue = [];
  var insertStack = new InsertStack();
  var theta = options.theta;

  var nodesCache = [];
  var currentInCache = 0;
  var root = newNode();

  return {
    insertBodies: insertBodies,

    /**
     * Gets root node if it is present
     */
    getRoot: function() {
      return root;
    },

    updateBodyForce: update,

    options: function(newOptions) {
      if (newOptions) {
        if (typeof newOptions.gravity === 'number') {
          gravity = newOptions.gravity;
        }
        if (typeof newOptions.theta === 'number') {
          theta = newOptions.theta;
        }

        return this;
      }

      return {
        gravity: gravity,
        theta: theta
      };
    }
  };

  function newNode() {
    // To avoid pressure on GC we reuse nodes.
    var node = nodesCache[currentInCache];
    if (node) {
${s("      node.")}
      node.body = null;
      node.mass = ${e("node.mass_{var} = ",{join:""})}0;
      ${e("node.min_{var} = node.max_{var} = ",{join:""})}0;
    } else {
      node = new QuadNode();
      nodesCache[currentInCache] = node;
    }

    ++currentInCache;
    return node;
  }

  function update(sourceBody) {
    var queue = updateQueue;
    var v;
    ${e("var d{var};",{indent:4})}
    var r; 
    ${e("var f{var} = 0;",{indent:4})}
    var queueLength = 1;
    var shiftIdx = 0;
    var pushIdx = 1;

    queue[0] = root;

    while (queueLength) {
      var node = queue[shiftIdx];
      var body = node.body;

      queueLength -= 1;
      shiftIdx += 1;
      var differentBody = (body !== sourceBody);
      if (body && differentBody) {
        // If the current node is a leaf node (and it is not source body),
        // calculate the force exerted by the current node on body, and add this
        // amount to body's net force.
        ${e("d{var} = body.pos.{var} - sourceBody.pos.{var};",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

        if (r === 0) {
          // Poor man's protection against zero distance.
          ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:10})}
          r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
        }

        // This is standard gravitation force calculation but we divide
        // by r^3 to save two operations when normalizing force vector.
        v = gravity * body.mass * sourceBody.mass / (r * r * r);
        ${e("f{var} += v * d{var};",{indent:8})}
      } else if (differentBody) {
        // Otherwise, calculate the ratio s / r,  where s is the width of the region
        // represented by the internal node, and r is the distance between the body
        // and the node's center-of-mass
        ${e("d{var} = node.mass_{var} / node.mass - sourceBody.pos.{var};",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

        if (r === 0) {
          // Sorry about code duplication. I don't want to create many functions
          // right away. Just want to see performance first.
          ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:10})}
          r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
        }
        // If s / r < θ, treat this internal node as a single body, and calculate the
        // force it exerts on sourceBody, and add this amount to sourceBody's net force.
        if ((node.max_${On(0)} - node.min_${On(0)}) / r < theta) {
          // in the if statement above we consider node's width only
          // because the region was made into square during tree creation.
          // Thus there is no difference between using width or height.
          v = gravity * node.mass * sourceBody.mass / (r * r * r);
          ${e("f{var} += v * d{var};",{indent:10})}
        } else {
          // Otherwise, run the procedure recursively on each of the current node's children.

          // I intentionally unfolded this loop, to save several CPU cycles.
${o()}
        }
      }
    }

    ${e("sourceBody.force.{var} += f{var};",{indent:4})}
  }

  function insertBodies(bodies) {
    ${e("var {var}min = Number.MAX_VALUE;",{indent:4})}
    ${e("var {var}max = Number.MIN_VALUE;",{indent:4})}
    var i = bodies.length;

    // To reduce quad tree depth we are looking for exact bounding box of all particles.
    while (i--) {
      var pos = bodies[i].pos;
      ${e("if (pos.{var} < {var}min) {var}min = pos.{var};",{indent:6})}
      ${e("if (pos.{var} > {var}max) {var}max = pos.{var};",{indent:6})}
    }

    // Makes the bounds square.
    var maxSideLength = -Infinity;
    ${e("if ({var}max - {var}min > maxSideLength) maxSideLength = {var}max - {var}min ;",{indent:4})}

    currentInCache = 0;
    root = newNode();
    ${e("root.min_{var} = {var}min;",{indent:4})}
    ${e("root.max_{var} = {var}min + maxSideLength;",{indent:4})}

    i = bodies.length - 1;
    if (i >= 0) {
      root.body = bodies[i];
    }
    while (i--) {
      insert(bodies[i], root);
    }
  }

  function insert(newBody) {
    insertStack.reset();
    insertStack.push(root, newBody);

    while (!insertStack.isEmpty()) {
      var stackItem = insertStack.pop();
      var node = stackItem.node;
      var body = stackItem.body;

      if (!node.body) {
        // This is internal node. Update the total mass of the node and center-of-mass.
        ${e("var {var} = body.pos.{var};",{indent:8})}
        node.mass += body.mass;
        ${e("node.mass_{var} += body.mass * {var};",{indent:8})}

        // Recursively insert the body in the appropriate quadrant.
        // But first find the appropriate quadrant.
        var quadIdx = 0; // Assume we are in the 0's quad.
        ${e("var min_{var} = node.min_{var};",{indent:8})}
        ${e("var max_{var} = (min_{var} + node.max_{var}) / 2;",{indent:8})}

${r(8)}

        var child = getChild(node, quadIdx);

        if (!child) {
          // The node is internal but this quadrant is not taken. Add
          // subnode to it.
          child = newNode();
          ${e("child.min_{var} = min_{var};",{indent:10})}
          ${e("child.max_{var} = max_{var};",{indent:10})}
          child.body = body;

          setChild(node, quadIdx, child);
        } else {
          // continue searching in this quadrant.
          insertStack.push(child, body);
        }
      } else {
        // We are trying to add to the leaf node.
        // We have to convert current leaf into internal node
        // and continue adding two nodes.
        var oldBody = node.body;
        node.body = null; // internal nodes do not cary bodies

        if (isSamePosition(oldBody.pos, body.pos)) {
          // Prevent infinite subdivision by bumping one node
          // anywhere in this quadrant
          var retriesCount = 3;
          do {
            var offset = random.nextDouble();
            ${e("var d{var} = (node.max_{var} - node.min_{var}) * offset;",{indent:12})}

            ${e("oldBody.pos.{var} = node.min_{var} + d{var};",{indent:12})}
            retriesCount -= 1;
            // Make sure we don't bump it out of the box. If we do, next iteration should fix it
          } while (retriesCount > 0 && isSamePosition(oldBody.pos, body.pos));

          if (retriesCount === 0 && isSamePosition(oldBody.pos, body.pos)) {
            // This is very bad, we ran out of precision.
            // if we do not return from the method we'll get into
            // infinite loop here. So we sacrifice correctness of layout, and keep the app running
            // Next layout iteration should get larger bounding box in the first step and fix this
            return;
          }
        }
        // Next iteration should subdivide node further.
        insertStack.push(node, oldBody);
        insertStack.push(node, body);
      }
    }
  }
}
return createQuadTree;

`;function r(a){let c=[],l=Array(a+1).join(" ");for(let u=0;u<n;++u)c.push(l+`if (${On(u)} > max_${On(u)}) {`),c.push(l+`  quadIdx = quadIdx + ${Math.pow(2,u)};`),c.push(l+`  min_${On(u)} = max_${On(u)};`),c.push(l+`  max_${On(u)} = node.max_${On(u)};`),c.push(l+"}");return c.join(`
`)}function o(){let a=Array(11).join(" "),c=[];for(let l=0;l<t;++l)c.push(a+`if (node.quad${l}) {`),c.push(a+`  queue[pushIdx] = node.quad${l};`),c.push(a+"  queueLength += 1;"),c.push(a+"  pushIdx += 1;"),c.push(a+"}");return c.join(`
`)}function s(a){let c=[];for(let l=0;l<t;++l)c.push(`${a}quad${l} = null;`);return c.join(`
`)}}function ef(n){let e=ps(n);return`
  function isSamePosition(point1, point2) {
    ${e("var d{var} = Math.abs(point1.{var} - point2.{var});",{indent:2})}
  
    return ${e("d{var} < 1e-8",{join:" && "})};
  }  
`}function tf(n){var e=Math.pow(2,n);return`
function setChild(node, idx, child) {
  ${t()}
}`;function t(){let i=[];for(let r=0;r<e;++r){let o=r===0?"  ":"  else ";i.push(`${o}if (idx === ${r}) node.quad${r} = child;`)}return i.join(`
`)}}function nf(n){return`function getChild(node, idx) {
${e()}
  return null;
}`;function e(){let t=[],i=Math.pow(2,n);for(let r=0;r<i;++r)t.push(`  if (idx === ${r}) return node.quad${r};`);return t.join(`
`)}}function rf(n){let e=ps(n),t=Math.pow(2,n);var i=`
function QuadNode() {
  // body stored inside this node. In quad tree only leaf nodes (by construction)
  // contain bodies:
  this.body = null;

  // Child nodes are stored in quads. Each quad is presented by number:
  // 0 | 1
  // -----
  // 2 | 3
${r("  this.")}

  // Total mass of current node
  this.mass = 0;

  // Center of mass coordinates
  ${e("this.mass_{var} = 0;",{indent:2})}

  // bounding box coordinates
  ${e("this.min_{var} = 0;",{indent:2})}
  ${e("this.max_{var} = 0;",{indent:2})}
}
`;return i;function r(o){let s=[];for(let a=0;a<t;++a)s.push(`${o}quad${a} = null;`);return s.join(`
`)}}function of(){return`
/**
 * Our implementation of QuadTree is non-recursive to avoid GC hit
 * This data structure represent stack of elements
 * which we are trying to insert into quad tree.
 */
function InsertStack () {
    this.stack = [];
    this.popIdx = 0;
}

InsertStack.prototype = {
    isEmpty: function() {
        return this.popIdx === 0;
    },
    push: function (node, body) {
        var item = this.stack[this.popIdx];
        if (!item) {
            // we are trying to avoid memory pressure: create new element
            // only when absolutely necessary
            this.stack[this.popIdx] = new InsertStackElement(node, body);
        } else {
            item.node = node;
            item.body = body;
        }
        ++this.popIdx;
    },
    pop: function () {
        if (this.popIdx > 0) {
            return this.stack[--this.popIdx];
        }
    },
    reset: function () {
        this.popIdx = 0;
    }
};

function InsertStackElement(node, body) {
    this.node = node; // QuadTree node
    this.body = body; // physical body which needs to be inserted to node
}
`}var Q0=zn.exports,ms={exports:{}};ms.exports=ty;ms.exports.generateFunctionBody=af;const ey=Bi;function ty(n){let e=af(n);return new Function("bodies","settings","random",e)}function af(n){let e=ey(n);return`
  var boundingBox = {
    ${e("min_{var}: 0, max_{var}: 0,",{indent:4})}
  };

  return {
    box: boundingBox,

    update: updateBoundingBox,

    reset: resetBoundingBox,

    getBestNewPosition: function (neighbors) {
      var ${e("base_{var} = 0",{join:", "})};

      if (neighbors.length) {
        for (var i = 0; i < neighbors.length; ++i) {
          let neighborPos = neighbors[i].pos;
          ${e("base_{var} += neighborPos.{var};",{indent:10})}
        }

        ${e("base_{var} /= neighbors.length;",{indent:8})}
      } else {
        ${e("base_{var} = (boundingBox.min_{var} + boundingBox.max_{var}) / 2;",{indent:8})}
      }

      var springLength = settings.springLength;
      return {
        ${e("{var}: base_{var} + (random.nextDouble() - 0.5) * springLength,",{indent:8})}
      };
    }
  };

  function updateBoundingBox() {
    var i = bodies.length;
    if (i === 0) return; // No bodies - no borders.

    ${e("var max_{var} = -Infinity;",{indent:4})}
    ${e("var min_{var} = Infinity;",{indent:4})}

    while(i--) {
      // this is O(n), it could be done faster with quadtree, if we check the root node bounds
      var bodyPos = bodies[i].pos;
      ${e("if (bodyPos.{var} < min_{var}) min_{var} = bodyPos.{var};",{indent:6})}
      ${e("if (bodyPos.{var} > max_{var}) max_{var} = bodyPos.{var};",{indent:6})}
    }

    ${e("boundingBox.min_{var} = min_{var};",{indent:4})}
    ${e("boundingBox.max_{var} = max_{var};",{indent:4})}
  }

  function resetBoundingBox() {
    ${e("boundingBox.min_{var} = boundingBox.max_{var} = 0;",{indent:4})}
  }
`}var ny=ms.exports,gs={exports:{}};const iy=Bi;gs.exports=ry;gs.exports.generateCreateDragForceFunctionBody=sf;function ry(n){let e=sf(n);return new Function("options",e)}function sf(n){return`
  if (!Number.isFinite(options.dragCoefficient)) throw new Error('dragCoefficient is not a finite number');

  return {
    update: function(body) {
      ${iy(n)("body.force.{var} -= options.dragCoefficient * body.velocity.{var};",{indent:6})}
    }
  };
`}var oy=gs.exports,vs={exports:{}};const ay=Bi;vs.exports=sy;vs.exports.generateCreateSpringForceFunctionBody=cf;function sy(n){let e=cf(n);return new Function("options","random",e)}function cf(n){let e=ay(n);return`
  if (!Number.isFinite(options.springCoefficient)) throw new Error('Spring coefficient is not a number');
  if (!Number.isFinite(options.springLength)) throw new Error('Spring length is not a number');

  return {
    /**
     * Updates forces acting on a spring
     */
    update: function (spring) {
      var body1 = spring.from;
      var body2 = spring.to;
      var length = spring.length < 0 ? options.springLength : spring.length;
      ${e("var d{var} = body2.pos.{var} - body1.pos.{var};",{indent:6})}
      var r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

      if (r === 0) {
        ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
      }

      var d = r - length;
      var coefficient = ((spring.coefficient > 0) ? spring.coefficient : options.springCoefficient) * d / r;

      ${e("body1.force.{var} += coefficient * d{var}",{indent:6})};
      body1.springCount += 1;
      body1.springLength += r;

      ${e("body2.force.{var} -= coefficient * d{var}",{indent:6})};
      body2.springCount += 1;
      body2.springLength += r;
    }
  };
`}var cy=vs.exports,_s={exports:{}};const ly=Bi;_s.exports=uy;_s.exports.generateIntegratorFunctionBody=lf;function uy(n){let e=lf(n);return new Function("bodies","timeStep","adaptiveTimeStepWeight",e)}function lf(n){let e=ly(n);return`
  var length = bodies.length;
  if (length === 0) return 0;

  ${e("var d{var} = 0, t{var} = 0;",{indent:2})}

  for (var i = 0; i < length; ++i) {
    var body = bodies[i];
    if (body.isPinned) continue;

    if (adaptiveTimeStepWeight && body.springCount) {
      timeStep = (adaptiveTimeStepWeight * body.springLength/body.springCount);
    }

    var coeff = timeStep / body.mass;

    ${e("body.velocity.{var} += coeff * body.force.{var};",{indent:4})}
    ${e("var v{var} = body.velocity.{var};",{indent:4})}
    var v = Math.sqrt(${e("v{var} * v{var}",{join:" + "})});

    if (v > 1) {
      // We normalize it so that we move within timeStep range. 
      // for the case when v <= 1 - we let velocity to fade out.
      ${e("body.velocity.{var} = v{var} / v;",{indent:6})}
    }

    ${e("d{var} = timeStep * body.velocity.{var};",{indent:4})}

    ${e("body.pos.{var} += d{var};",{indent:4})}

    ${e("t{var} += Math.abs(d{var});",{indent:4})}
  }

  return (${e("t{var} * t{var}",{join:" + "})})/length;
`}var fy=_s.exports,ua,gl;function hy(){if(gl)return ua;gl=1,ua=n;function n(e,t,i,r){this.from=e,this.to=t,this.length=i,this.coefficient=r}return ua}var fa,vl;function dy(){if(vl)return fa;vl=1,fa=n;function n(e,t){var i;if(e||(e={}),t){for(i in t)if(t.hasOwnProperty(i)){var r=e.hasOwnProperty(i),o=typeof t[i],s=!r||typeof e[i]!==o;s?e[i]=t[i]:o==="object"&&(e[i]=n(e[i],t[i]))}}return e}return fa}var Xi={exports:{}},_l;function py(){if(_l)return Xi.exports;_l=1,Xi.exports=n,Xi.exports.random=n,Xi.exports.randomIterator=a;function n(c){var l=typeof c=="number"?c:+new Date;return new e(l)}function e(c){this.seed=c}e.prototype.next=s,e.prototype.nextDouble=o,e.prototype.uniform=o,e.prototype.gaussian=t;function t(){var c,l,u;do l=this.nextDouble()*2-1,u=this.nextDouble()*2-1,c=l*l+u*u;while(c>=1||c===0);return l*Math.sqrt(-2*Math.log(c)/c)}e.prototype.levy=i;function i(){var c=1.5,l=Math.pow(r(1+c)*Math.sin(Math.PI*c/2)/(r((1+c)/2)*c*Math.pow(2,(c-1)/2)),1/c);return this.gaussian()*l/Math.pow(Math.abs(this.gaussian()),1/c)}function r(c){return Math.sqrt(2*Math.PI/c)*Math.pow(1/Math.E*(c+1/(12*c-1/(10*c))),c)}function o(){var c=this.seed;return c=c+2127912214+(c<<12)&4294967295,c=(c^3345072700^c>>>19)&4294967295,c=c+374761393+(c<<5)&4294967295,c=(c+3550635116^c<<9)&4294967295,c=c+4251993797+(c<<3)&4294967295,c=(c^3042594569^c>>>16)&4294967295,this.seed=c,(c&268435455)/268435456}function s(c){return Math.floor(this.nextDouble()*c)}function a(c,l){var u=l||n();if(typeof u.next!="function")throw new Error("customRandom does not match expected API: next() function is missing");return{forEach:d,shuffle:f};function f(){var p,g,v;for(p=c.length-1;p>0;--p)g=u.next(p+1),v=c[g],c[g]=c[p],c[p]=v;return c}function d(p){var g,v,m;for(g=c.length-1;g>0;--g)v=u.next(g+1),m=c[v],c[v]=c[g],c[g]=m,p(m);c.length&&p(c[0])}}return Xi.exports}var uf=by,my=Z0,gy=Q0,vy=ny,_y=oy,yy=cy,xy=fy,yl={};function by(n){var e=hy(),t=dy(),i=hs;if(n){if(n.springCoeff!==void 0)throw new Error("springCoeff was renamed to springCoefficient");if(n.dragCoeff!==void 0)throw new Error("dragCoeff was renamed to dragCoefficient")}n=t(n,{springLength:10,springCoefficient:.8,gravity:-12,theta:.8,dragCoefficient:.9,timeStep:.5,adaptiveTimeStepWeight:0,dimensions:2,debug:!1});var r=yl[n.dimensions];if(!r){var o=n.dimensions;r={Body:my(o,n.debug),createQuadTree:gy(o),createBounds:vy(o),createDragForce:_y(o),createSpringForce:yy(o),integrate:xy(o)},yl[o]=r}var s=r.Body,a=r.createQuadTree,c=r.createBounds,l=r.createDragForce,u=r.createSpringForce,f=r.integrate,d=P=>new s(P),p=py().random(42),g=[],v=[],m=a(n,p),h=c(g,n,p),b=u(n,p),_=l(n),y=0,x=[],S=new Map,E=0;T("nbody",Z),T("spring",C);var L={bodies:g,quadTree:m,springs:v,settings:n,addForce:T,removeForce:z,getForces:G,step:function(){for(var P=0;P<x.length;++P)x[P](E);var U=f(g,n.timeStep,n.adaptiveTimeStepWeight);return E+=1,U},addBody:function(P){if(!P)throw new Error("Body is required");return g.push(P),P},addBodyAt:function(P){if(!P)throw new Error("Body position is required");var U=d(P);return g.push(U),U},removeBody:function(P){if(P){var U=g.indexOf(P);if(!(U<0))return g.splice(U,1),g.length===0&&h.reset(),!0}},addSpring:function(P,U,j,ne){if(!P||!U)throw new Error("Cannot add null spring to force simulator");typeof j!="number"&&(j=-1);var ee=new e(P,U,j,ne>=0?ne:-1);return v.push(ee),ee},getTotalMovement:function(){return y},removeSpring:function(P){if(P){var U=v.indexOf(P);if(U>-1)return v.splice(U,1),!0}},getBestNewBodyPosition:function(P){return h.getBestNewPosition(P)},getBBox:M,getBoundingBox:M,invalidateBBox:function(){console.warn("invalidateBBox() is deprecated, bounds always recomputed on `getBBox()` call")},gravity:function(P){return P!==void 0?(n.gravity=P,m.options({gravity:P}),this):n.gravity},theta:function(P){return P!==void 0?(n.theta=P,m.options({theta:P}),this):n.theta},random:p};return My(n,L),i(L),L;function M(){return h.update(),h.box}function T(P,U){if(S.has(P))throw new Error("Force "+P+" is already added");S.set(P,U),x.push(U)}function z(P){var U=x.indexOf(S.get(P));U<0||(x.splice(U,1),S.delete(P))}function G(){return S}function Z(){if(g.length!==0){m.insertBodies(g);for(var P=g.length;P--;){var U=g[P];U.isPinned||(U.reset(),m.updateBodyForce(U),_.update(U))}}}function C(){for(var P=v.length;P--;)b.update(v[P])}}function My(n,e){for(var t in n)Sy(n,e,t)}function Sy(n,e,t){if(n.hasOwnProperty(t)&&typeof e[t]!="function"){var i=Number.isFinite(n[t]);i?e[t]=function(r){if(r!==void 0){if(!Number.isFinite(r))throw new Error("Value of "+t+" should be a valid number.");return n[t]=r,e}return n[t]}:e[t]=function(r){return r!==void 0?(n[t]=r,e):n[t]}}}ds.exports=wy;ds.exports.simulator=uf;var Ey=hs;function wy(n,e){if(!n)throw new Error("Graph structure cannot be undefined");var t=e&&e.createSimulator||uf,i=t(e);if(Array.isArray(e))throw new Error("Physics settings is expected to be an object");var r=n.version>19?Z:G;e&&typeof e.nodeMass=="function"&&(r=e.nodeMass);var o=new Map,s={},a=0,c=i.settings.springTransform||Ty;_(),m();var l=!1,u={step:function(){if(a===0)return f(!0),!0;var C=i.step();u.lastMove=C,u.fire("step");var P=C/a,U=P<=.01;return f(U),U},getNodePosition:function(C){return z(C).pos},setNodePosition:function(C){var P=z(C);P.setPosition.apply(P,Array.prototype.slice.call(arguments,1))},getLinkPosition:function(C){var P=s[C];if(P)return{from:P.from.pos,to:P.to.pos}},getGraphRect:function(){return i.getBBox()},forEachBody:d,pinNode:function(C,P){var U=z(C.id);U.isPinned=!!P},isNodePinned:function(C){return z(C.id).isPinned},dispose:function(){n.off("changed",b),u.fire("disposed")},getBody:v,getSpring:g,getForceVectorLength:p,simulator:i,graph:n,lastMove:0};return Ey(u),u;function f(C){l!==C&&(l=C,h(C))}function d(C){o.forEach(C)}function p(){var C=0,P=0;return d(function(U){C+=Math.abs(U.force.x),P+=Math.abs(U.force.y)}),Math.sqrt(C*C+P*P)}function g(C,P){var U;if(P===void 0)typeof C!="object"?U=C:U=C.id;else{var j=n.hasLink(C,P);if(!j)return;U=j.id}return s[U]}function v(C){return o.get(C)}function m(){n.on("changed",b)}function h(C){u.fire("stable",C)}function b(C){for(var P=0;P<C.length;++P){var U=C[P];U.changeType==="add"?(U.node&&y(U.node.id),U.link&&S(U.link)):U.changeType==="remove"&&(U.node&&x(U.node),U.link&&E(U.link))}a=n.getNodesCount()}function _(){a=0,n.forEachNode(function(C){y(C.id),a+=1}),n.forEachLink(S)}function y(C){var P=o.get(C);if(!P){var U=n.getNode(C);if(!U)throw new Error("initBody() was called with unknown node id");var j=U.position;if(!j){var ne=L(U);j=i.getBestNewBodyPosition(ne)}P=i.addBodyAt(j),P.id=C,o.set(C,P),M(C),T(U)&&(P.isPinned=!0)}}function x(C){var P=C.id,U=o.get(P);U&&(o.delete(P),i.removeBody(U))}function S(C){M(C.fromId),M(C.toId);var P=o.get(C.fromId),U=o.get(C.toId),j=i.addSpring(P,U,C.length);c(C,j),s[C.id]=j}function E(C){var P=s[C.id];if(P){var U=n.getNode(C.fromId),j=n.getNode(C.toId);U&&M(U.id),j&&M(j.id),delete s[C.id],i.removeSpring(P)}}function L(C){var P=[];if(!C.links)return P;for(var U=Math.min(C.links.length,2),j=0;j<U;++j){var ne=C.links[j],ee=ne.fromId!==C.id?o.get(ne.fromId):o.get(ne.toId);ee&&ee.pos&&P.push(ee)}return P}function M(C){var P=o.get(C);if(P.mass=r(C),Number.isNaN(P.mass))throw new Error("Node mass should be a number")}function T(C){return C&&(C.isPinned||C.data&&C.data.isPinned)}function z(C){var P=o.get(C);return P||(y(C),P=o.get(C)),P}function G(C){var P=n.getLinks(C);return P?1+P.length/3:1}function Z(C){var P=n.getLinks(C);return P?1+P.size/3:1}}function Ty(){}var Ay=ds.exports;const Cy=qu(Ay);function Ia(n){var e=typeof n;return n!=null&&(e=="object"||e=="function")}var Ry=typeof global=="object"&&global&&global.Object===Object&&global;const Py=Ry;var Ly=typeof self=="object"&&self&&self.Object===Object&&self,Dy=Py||Ly||Function("return this")();const ff=Dy;var Oy=function(){return ff.Date.now()};const ha=Oy;var Iy=/\s/;function Uy(n){for(var e=n.length;e--&&Iy.test(n.charAt(e)););return e}var Ny=/^\s+/;function Fy(n){return n&&n.slice(0,Uy(n)+1).replace(Ny,"")}var By=ff.Symbol;const ao=By;var hf=Object.prototype,ky=hf.hasOwnProperty,zy=hf.toString,qi=ao?ao.toStringTag:void 0;function Hy(n){var e=ky.call(n,qi),t=n[qi];try{n[qi]=void 0;var i=!0}catch{}var r=zy.call(n);return i&&(e?n[qi]=t:delete n[qi]),r}var Gy=Object.prototype,Vy=Gy.toString;function Wy(n){return Vy.call(n)}var jy="[object Null]",Xy="[object Undefined]",xl=ao?ao.toStringTag:void 0;function qy(n){return n==null?n===void 0?Xy:jy:xl&&xl in Object(n)?Hy(n):Wy(n)}function $y(n){return n!=null&&typeof n=="object"}var Yy="[object Symbol]";function Ky(n){return typeof n=="symbol"||$y(n)&&qy(n)==Yy}var bl=0/0,Zy=/^[-+]0x[0-9a-f]+$/i,Jy=/^0b[01]+$/i,Qy=/^0o[0-7]+$/i,ex=parseInt;function Ml(n){if(typeof n=="number")return n;if(Ky(n))return bl;if(Ia(n)){var e=typeof n.valueOf=="function"?n.valueOf():n;n=Ia(e)?e+"":e}if(typeof n!="string")return n===0?n:+n;n=Fy(n);var t=Jy.test(n);return t||Qy.test(n)?ex(n.slice(2),t?2:8):Zy.test(n)?bl:+n}var tx="Expected a function",nx=Math.max,ix=Math.min;function rx(n,e,t){var i,r,o,s,a,c,l=0,u=!1,f=!1,d=!0;if(typeof n!="function")throw new TypeError(tx);e=Ml(e)||0,Ia(t)&&(u=!!t.leading,f="maxWait"in t,o=f?nx(Ml(t.maxWait)||0,e):o,d="trailing"in t?!!t.trailing:d);function p(S){var E=i,L=r;return i=r=void 0,l=S,s=n.apply(L,E),s}function g(S){return l=S,a=setTimeout(h,e),u?p(S):s}function v(S){var E=S-c,L=S-l,M=e-E;return f?ix(M,o-L):M}function m(S){var E=S-c,L=S-l;return c===void 0||E>=e||E<0||f&&L>=o}function h(){var S=ha();if(m(S))return b(S);a=setTimeout(h,v(S))}function b(S){return a=void 0,d&&i?p(S):(i=r=void 0,s)}function _(){a!==void 0&&clearTimeout(a),l=0,i=c=r=a=void 0}function y(){return a===void 0?s:b(ha())}function x(){var S=ha(),E=m(S);if(i=arguments,r=this,c=S,E){if(a===void 0)return g(c);if(f)return clearTimeout(a),a=setTimeout(h,e),p(c)}return a===void 0&&(a=setTimeout(h,e)),s}return x.cancel=_,x.flush=y,x}function ox(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,o,s,a=[],c=!0,l=!1;try{if(o=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(i=o.call(t)).done)&&(a.push(i.value),a.length!==e);c=!0);}catch(u){l=!0,r=u}finally{try{if(!c&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(l)throw r}}return a}}function ax(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Sl(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,dx(i.key),i)}}function sx(n,e,t){return e&&Sl(n.prototype,e),t&&Sl(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function cx(n,e){return lx(n)||ox(n,e)||ux(n,e)||fx()}function lx(n){if(Array.isArray(n))return n}function ux(n,e){if(n){if(typeof n=="string")return El(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return El(n,e)}}function El(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function fx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hx(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function dx(n){var e=hx(n,"string");return typeof e=="symbol"?e:String(e)}var px=sx(function n(e,t){var i=t.default,r=i===void 0?null:i,o=t.triggerUpdate,s=o===void 0?!0:o,a=t.onChange,c=a===void 0?function(l,u){}:a;ax(this,n),this.name=e,this.defaultVal=r,this.triggerUpdate=s,this.onChange=c});function ys(n){var e=n.stateInit,t=e===void 0?function(){return{}}:e,i=n.props,r=i===void 0?{}:i,o=n.methods,s=o===void 0?{}:o,a=n.aliases,c=a===void 0?{}:a,l=n.init,u=l===void 0?function(){}:l,f=n.update,d=f===void 0?function(){}:f,p=Object.keys(r).map(function(g){return new px(g,r[g])});return function(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},v=Object.assign({},t instanceof Function?t(g):t,{initialised:!1}),m={};function h(y){return b(y,g),_(),h}var b=function(x,S){u.call(h,x,v,S),v.initialised=!0},_=rx(function(){v.initialised&&(d.call(h,v,m),m={})},1);return p.forEach(function(y){h[y.name]=x(y);function x(S){var E=S.name,L=S.triggerUpdate,M=L===void 0?!1:L,T=S.onChange,z=T===void 0?function(C,P){}:T,G=S.defaultVal,Z=G===void 0?null:G;return function(C){var P=v[E];if(!arguments.length)return P;var U=C===void 0?Z:C;return v[E]=U,z.call(h,U,v,P),!m.hasOwnProperty(E)&&(m[E]=P),M&&_(),h}}}),Object.keys(s).forEach(function(y){h[y]=function(){for(var x,S=arguments.length,E=new Array(S),L=0;L<S;L++)E[L]=arguments[L];return(x=s[y]).call.apply(x,[h,v].concat(E))}}),Object.entries(c).forEach(function(y){var x=cx(y,2),S=x[0],E=x[1];return h[S]=h[E]}),h.resetProps=function(){return p.forEach(function(y){h[y.name](y.defaultVal)}),h},h.resetProps(),v._rerender=_,h}}var $e=function(n){return typeof n=="function"?n:typeof n=="string"?function(e){return e[n]}:function(e){return n}};class wl extends Map{constructor(e,t=vx){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),e!=null)for(const[i,r]of e)this.set(i,r)}get(e){return super.get(Tl(this,e))}has(e){return super.has(Tl(this,e))}set(e,t){return super.set(mx(this,e),t)}delete(e){return super.delete(gx(this,e))}}function Tl({_intern:n,_key:e},t){const i=e(t);return n.has(i)?n.get(i):t}function mx({_intern:n,_key:e},t){const i=e(t);return n.has(i)?n.get(i):(n.set(i,t),t)}function gx({_intern:n,_key:e},t){const i=e(t);return n.has(i)&&(t=n.get(i),n.delete(i)),t}function vx(n){return n!==null&&typeof n=="object"?n.valueOf():n}function _x(n,e){let t;if(e===void 0)for(const i of n)i!=null&&(t<i||t===void 0&&i>=i)&&(t=i);else{let i=-1;for(let r of n)(r=e(r,++i,n))!=null&&(t<r||t===void 0&&r>=r)&&(t=r)}return t}function yx(n,e){let t;if(e===void 0)for(const i of n)i!=null&&(t>i||t===void 0&&i>=i)&&(t=i);else{let i=-1;for(let r of n)(r=e(r,++i,n))!=null&&(t>r||t===void 0&&r>=r)&&(t=r)}return t}function xx(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,o,s,a=[],c=!0,l=!1;try{if(o=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(i=o.call(t)).done)&&(a.push(i.value),a.length!==e);c=!0);}catch(u){l=!0,r=u}finally{try{if(!c&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(l)throw r}}return a}}function bx(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function Mx(n,e){if(n==null)return{};var t=bx(n,e),i,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)i=o[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function Sx(n,e){return Tx(n)||xx(n,e)||df(n,e)||Rx()}function Ex(n){return wx(n)||Ax(n)||df(n)||Cx()}function wx(n){if(Array.isArray(n))return Ua(n)}function Tx(n){if(Array.isArray(n))return n}function Ax(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function df(n,e){if(n){if(typeof n=="string")return Ua(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ua(n,e)}}function Ua(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function Cx(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Px(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Lx(n){var e=Px(n,"string");return typeof e=="symbol"?e:String(e)}var Al=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,r=(e instanceof Array?e.length?e:[void 0]:[e]).map(function(a){return{keyAccessor:a,isProp:!(a instanceof Function)}}),o=n.reduce(function(a,c){var l=a,u=c;return r.forEach(function(f,d){var p=f.keyAccessor,g=f.isProp,v;if(g){var m=u,h=m[p],b=Mx(m,[p].map(Lx));v=h,u=b}else v=p(u,d);d+1<r.length?(l.hasOwnProperty(v)||(l[v]={}),l=l[v]):t?(l.hasOwnProperty(v)||(l[v]=[]),l[v].push(u)):l[v]=u}),a},{});t instanceof Function&&function a(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;l===r.length?Object.keys(c).forEach(function(u){return c[u]=t(c[u])}):Object.values(c).forEach(function(u){return a(u,l+1)})}(o);var s=o;return i&&(s=[],function a(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];l.length===r.length?s.push({keys:l,vals:c}):Object.entries(c).forEach(function(u){var f=Sx(u,2),d=f[0],p=f[1];return a(p,[].concat(Ex(l),[d]))})}(o),e instanceof Array&&e.length===0&&s.length===1&&(s[0].keys=[])),s};function Dx(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,o,s,a=[],c=!0,l=!1;try{if(o=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(i=o.call(t)).done)&&(a.push(i.value),a.length!==e);c=!0);}catch(u){l=!0,r=u}finally{try{if(!c&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(l)throw r}}return a}}function Cl(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Ox(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Cl(Object(t),!0).forEach(function(i){pf(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Cl(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function pf(n,e,t){return e=Gx(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Ix(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function Ux(n,e){if(n==null)return{};var t=Ix(n,e),i,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)i=o[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function mf(n,e){return Fx(n)||Dx(n,e)||gf(n,e)||zx()}function so(n){return Nx(n)||Bx(n)||gf(n)||kx()}function Nx(n){if(Array.isArray(n))return Na(n)}function Fx(n){if(Array.isArray(n))return n}function Bx(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function gf(n,e){if(n){if(typeof n=="string")return Na(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Na(n,e)}}function Na(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function kx(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Hx(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Gx(n){var e=Hx(n,"string");return typeof e=="symbol"?e:String(e)}var Vx=["createObj","updateObj","exitObj","objBindAttr","dataBindAttr"];function Wx(n,e,t){var i={enter:[],update:[],exit:[]};if(t){var s=Al(n,t,!1),a=Al(e,t,!1),c=Object.assign({},s,a);Object.entries(c).forEach(function(l){var u=mf(l,2),f=u[0],d=u[1],p=s.hasOwnProperty(f)?a.hasOwnProperty(f)?"update":"exit":"enter";i[p].push(p==="update"?[s[f],a[f]]:d)})}else{var r=new Set(n),o=new Set(e);new Set([].concat(so(r),so(o))).forEach(function(l){var u=r.has(l)?o.has(l)?"update":"exit":"enter";i[u].push(u==="update"?[l,l]:l)})}return i}function jx(n,e,t){var i=t.objBindAttr,r=i===void 0?"__obj":i,o=t.dataBindAttr,s=o===void 0?"__data":o,a=t.idAccessor,c=t.purge,l=c===void 0?!1:c,u=function(m){return m.hasOwnProperty(s)},f=e.filter(function(v){return!u(v)}),d=e.filter(u).map(function(v){return v[s]}),p=n,g=l?{enter:p,exit:d,update:[]}:Wx(d,p,a);return g.update=g.update.map(function(v){var m=mf(v,2),h=m[0],b=m[1];return h!==b&&(b[r]=h[r],b[r][s]=b),b}),g.exit=g.exit.concat(f.map(function(v){return pf({},r,v)})),g}function Xx(n,e,t,i,r){var o=r.createObj,s=o===void 0?function(L){return{}}:o,a=r.updateObj,c=a===void 0?function(L,M){}:a,l=r.exitObj,u=l===void 0?function(L){}:l,f=r.objBindAttr,d=f===void 0?"__obj":f,p=r.dataBindAttr,g=p===void 0?"__data":p,v=Ux(r,Vx),m=jx(n,e,Ox({objBindAttr:d,dataBindAttr:g},v)),h=m.enter,b=m.update,_=m.exit;_.forEach(function(L){var M=L[d];delete L[d],u(M),i(M)});var y=S(h),x=[].concat(so(h),so(b));E(x),y.forEach(t);function S(L){var M=[];return L.forEach(function(T){var z=s(T);z&&(z[g]=T,T[d]=z,M.push(z))}),M}function E(L){L.forEach(function(M){var T=M[d];T&&(T[g]=M,c(T,M))})}}function qx(n,e){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(e).domain(n);break}return this}const Rl=Symbol("implicit");function vf(){var n=new wl,e=[],t=[],i=Rl;function r(o){let s=n.get(o);if(s===void 0){if(i!==Rl)return i;n.set(o,s=e.push(o)-1)}return t[s%t.length]}return r.domain=function(o){if(!arguments.length)return e.slice();e=[],n=new wl;for(const s of o)n.has(s)||n.set(s,e.push(s)-1);return r},r.range=function(o){return arguments.length?(t=Array.from(o),r):t.slice()},r.unknown=function(o){return arguments.length?(i=o,r):i},r.copy=function(){return vf(e,t).unknown(i)},qx.apply(r,arguments),r}function $x(n){for(var e=n.length/6|0,t=new Array(e),i=0;i<e;)t[i]="#"+n.slice(i*6,++i*6);return t}const Yx=$x("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");function co(n){"@babel/helpers - typeof";return co=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},co(n)}var Kx=/^\s+/,Zx=/\s+$/;function Se(n,e){if(n=n||"",e=e||{},n instanceof Se)return n;if(!(this instanceof Se))return new Se(n,e);var t=Jx(n);this._originalInput=n,this._r=t.r,this._g=t.g,this._b=t.b,this._a=t.a,this._roundA=Math.round(100*this._a)/100,this._format=e.format||t.format,this._gradientType=e.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=t.ok}Se.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},getLuminance:function(){var e=this.toRgb(),t,i,r,o,s,a;return t=e.r/255,i=e.g/255,r=e.b/255,t<=.03928?o=t/12.92:o=Math.pow((t+.055)/1.055,2.4),i<=.03928?s=i/12.92:s=Math.pow((i+.055)/1.055,2.4),r<=.03928?a=r/12.92:a=Math.pow((r+.055)/1.055,2.4),.2126*o+.7152*s+.0722*a},setAlpha:function(e){return this._a=_f(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=Ll(this._r,this._g,this._b);return{h:e.h*360,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=Ll(this._r,this._g,this._b),t=Math.round(e.h*360),i=Math.round(e.s*100),r=Math.round(e.v*100);return this._a==1?"hsv("+t+", "+i+"%, "+r+"%)":"hsva("+t+", "+i+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=Pl(this._r,this._g,this._b);return{h:e.h*360,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=Pl(this._r,this._g,this._b),t=Math.round(e.h*360),i=Math.round(e.s*100),r=Math.round(e.l*100);return this._a==1?"hsl("+t+", "+i+"%, "+r+"%)":"hsla("+t+", "+i+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return Dl(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return nb(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(tt(this._r,255)*100)+"%",g:Math.round(tt(this._g,255)*100)+"%",b:Math.round(tt(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(tt(this._r,255)*100)+"%, "+Math.round(tt(this._g,255)*100)+"%, "+Math.round(tt(this._b,255)*100)+"%)":"rgba("+Math.round(tt(this._r,255)*100)+"%, "+Math.round(tt(this._g,255)*100)+"%, "+Math.round(tt(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:pb[Dl(this._r,this._g,this._b,!0)]||!1},toFilter:function(e){var t="#"+Ol(this._r,this._g,this._b,this._a),i=t,r=this._gradientType?"GradientType = 1, ":"";if(e){var o=Se(e);i="#"+Ol(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+t+",endColorstr="+i+")"},toString:function(e){var t=!!e;e=e||this._format;var i=!1,r=this._a<1&&this._a>=0,o=!t&&r&&(e==="hex"||e==="hex6"||e==="hex3"||e==="hex4"||e==="hex8"||e==="name");return o?e==="name"&&this._a===0?this.toName():this.toRgbString():(e==="rgb"&&(i=this.toRgbString()),e==="prgb"&&(i=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(i=this.toHexString()),e==="hex3"&&(i=this.toHexString(!0)),e==="hex4"&&(i=this.toHex8String(!0)),e==="hex8"&&(i=this.toHex8String()),e==="name"&&(i=this.toName()),e==="hsl"&&(i=this.toHslString()),e==="hsv"&&(i=this.toHsvString()),i||this.toHexString())},clone:function(){return Se(this.toString())},_applyModification:function(e,t){var i=e.apply(null,[this].concat([].slice.call(t)));return this._r=i._r,this._g=i._g,this._b=i._b,this.setAlpha(i._a),this},lighten:function(){return this._applyModification(ab,arguments)},brighten:function(){return this._applyModification(sb,arguments)},darken:function(){return this._applyModification(cb,arguments)},desaturate:function(){return this._applyModification(ib,arguments)},saturate:function(){return this._applyModification(rb,arguments)},greyscale:function(){return this._applyModification(ob,arguments)},spin:function(){return this._applyModification(lb,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(hb,arguments)},complement:function(){return this._applyCombination(ub,arguments)},monochromatic:function(){return this._applyCombination(db,arguments)},splitcomplement:function(){return this._applyCombination(fb,arguments)},triad:function(){return this._applyCombination(Il,[3])},tetrad:function(){return this._applyCombination(Il,[4])}};Se.fromRatio=function(n,e){if(co(n)=="object"){var t={};for(var i in n)n.hasOwnProperty(i)&&(i==="a"?t[i]=n[i]:t[i]=er(n[i]));n=t}return Se(n,e)};function Jx(n){var e={r:0,g:0,b:0},t=1,i=null,r=null,o=null,s=!1,a=!1;return typeof n=="string"&&(n=_b(n)),co(n)=="object"&&(pn(n.r)&&pn(n.g)&&pn(n.b)?(e=Qx(n.r,n.g,n.b),s=!0,a=String(n.r).substr(-1)==="%"?"prgb":"rgb"):pn(n.h)&&pn(n.s)&&pn(n.v)?(i=er(n.s),r=er(n.v),e=tb(n.h,i,r),s=!0,a="hsv"):pn(n.h)&&pn(n.s)&&pn(n.l)&&(i=er(n.s),o=er(n.l),e=eb(n.h,i,o),s=!0,a="hsl"),n.hasOwnProperty("a")&&(t=n.a)),t=_f(t),{ok:s,format:n.format||a,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:t}}function Qx(n,e,t){return{r:tt(n,255)*255,g:tt(e,255)*255,b:tt(t,255)*255}}function Pl(n,e,t){n=tt(n,255),e=tt(e,255),t=tt(t,255);var i=Math.max(n,e,t),r=Math.min(n,e,t),o,s,a=(i+r)/2;if(i==r)o=s=0;else{var c=i-r;switch(s=a>.5?c/(2-i-r):c/(i+r),i){case n:o=(e-t)/c+(e<t?6:0);break;case e:o=(t-n)/c+2;break;case t:o=(n-e)/c+4;break}o/=6}return{h:o,s,l:a}}function eb(n,e,t){var i,r,o;n=tt(n,360),e=tt(e,100),t=tt(t,100);function s(l,u,f){return f<0&&(f+=1),f>1&&(f-=1),f<1/6?l+(u-l)*6*f:f<1/2?u:f<2/3?l+(u-l)*(2/3-f)*6:l}if(e===0)i=r=o=t;else{var a=t<.5?t*(1+e):t+e-t*e,c=2*t-a;i=s(c,a,n+1/3),r=s(c,a,n),o=s(c,a,n-1/3)}return{r:i*255,g:r*255,b:o*255}}function Ll(n,e,t){n=tt(n,255),e=tt(e,255),t=tt(t,255);var i=Math.max(n,e,t),r=Math.min(n,e,t),o,s,a=i,c=i-r;if(s=i===0?0:c/i,i==r)o=0;else{switch(i){case n:o=(e-t)/c+(e<t?6:0);break;case e:o=(t-n)/c+2;break;case t:o=(n-e)/c+4;break}o/=6}return{h:o,s,v:a}}function tb(n,e,t){n=tt(n,360)*6,e=tt(e,100),t=tt(t,100);var i=Math.floor(n),r=n-i,o=t*(1-e),s=t*(1-r*e),a=t*(1-(1-r)*e),c=i%6,l=[t,s,o,o,a,t][c],u=[a,t,t,s,o,o][c],f=[o,o,a,t,t,s][c];return{r:l*255,g:u*255,b:f*255}}function Dl(n,e,t,i){var r=[Qt(Math.round(n).toString(16)),Qt(Math.round(e).toString(16)),Qt(Math.round(t).toString(16))];return i&&r[0].charAt(0)==r[0].charAt(1)&&r[1].charAt(0)==r[1].charAt(1)&&r[2].charAt(0)==r[2].charAt(1)?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function nb(n,e,t,i,r){var o=[Qt(Math.round(n).toString(16)),Qt(Math.round(e).toString(16)),Qt(Math.round(t).toString(16)),Qt(yf(i))];return r&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)&&o[3].charAt(0)==o[3].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}function Ol(n,e,t,i){var r=[Qt(yf(i)),Qt(Math.round(n).toString(16)),Qt(Math.round(e).toString(16)),Qt(Math.round(t).toString(16))];return r.join("")}Se.equals=function(n,e){return!n||!e?!1:Se(n).toRgbString()==Se(e).toRgbString()};Se.random=function(){return Se.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})};function ib(n,e){e=e===0?0:e||10;var t=Se(n).toHsl();return t.s-=e/100,t.s=bo(t.s),Se(t)}function rb(n,e){e=e===0?0:e||10;var t=Se(n).toHsl();return t.s+=e/100,t.s=bo(t.s),Se(t)}function ob(n){return Se(n).desaturate(100)}function ab(n,e){e=e===0?0:e||10;var t=Se(n).toHsl();return t.l+=e/100,t.l=bo(t.l),Se(t)}function sb(n,e){e=e===0?0:e||10;var t=Se(n).toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(255*-(e/100)))),t.g=Math.max(0,Math.min(255,t.g-Math.round(255*-(e/100)))),t.b=Math.max(0,Math.min(255,t.b-Math.round(255*-(e/100)))),Se(t)}function cb(n,e){e=e===0?0:e||10;var t=Se(n).toHsl();return t.l-=e/100,t.l=bo(t.l),Se(t)}function lb(n,e){var t=Se(n).toHsl(),i=(t.h+e)%360;return t.h=i<0?360+i:i,Se(t)}function ub(n){var e=Se(n).toHsl();return e.h=(e.h+180)%360,Se(e)}function Il(n,e){if(isNaN(e)||e<=0)throw new Error("Argument to polyad must be a positive number");for(var t=Se(n).toHsl(),i=[Se(n)],r=360/e,o=1;o<e;o++)i.push(Se({h:(t.h+o*r)%360,s:t.s,l:t.l}));return i}function fb(n){var e=Se(n).toHsl(),t=e.h;return[Se(n),Se({h:(t+72)%360,s:e.s,l:e.l}),Se({h:(t+216)%360,s:e.s,l:e.l})]}function hb(n,e,t){e=e||6,t=t||30;var i=Se(n).toHsl(),r=360/t,o=[Se(n)];for(i.h=(i.h-(r*e>>1)+720)%360;--e;)i.h=(i.h+r)%360,o.push(Se(i));return o}function db(n,e){e=e||6;for(var t=Se(n).toHsv(),i=t.h,r=t.s,o=t.v,s=[],a=1/e;e--;)s.push(Se({h:i,s:r,v:o})),o=(o+a)%1;return s}Se.mix=function(n,e,t){t=t===0?0:t||50;var i=Se(n).toRgb(),r=Se(e).toRgb(),o=t/100,s={r:(r.r-i.r)*o+i.r,g:(r.g-i.g)*o+i.g,b:(r.b-i.b)*o+i.b,a:(r.a-i.a)*o+i.a};return Se(s)};Se.readability=function(n,e){var t=Se(n),i=Se(e);return(Math.max(t.getLuminance(),i.getLuminance())+.05)/(Math.min(t.getLuminance(),i.getLuminance())+.05)};Se.isReadable=function(n,e,t){var i=Se.readability(n,e),r,o;switch(o=!1,r=yb(t),r.level+r.size){case"AAsmall":case"AAAlarge":o=i>=4.5;break;case"AAlarge":o=i>=3;break;case"AAAsmall":o=i>=7;break}return o};Se.mostReadable=function(n,e,t){var i=null,r=0,o,s,a,c;t=t||{},s=t.includeFallbackColors,a=t.level,c=t.size;for(var l=0;l<e.length;l++)o=Se.readability(n,e[l]),o>r&&(r=o,i=Se(e[l]));return Se.isReadable(n,i,{level:a,size:c})||!s?i:(t.includeFallbackColors=!1,Se.mostReadable(n,["#fff","#000"],t))};var Fa=Se.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},pb=Se.hexNames=mb(Fa);function mb(n){var e={};for(var t in n)n.hasOwnProperty(t)&&(e[n[t]]=t);return e}function _f(n){return n=parseFloat(n),(isNaN(n)||n<0||n>1)&&(n=1),n}function tt(n,e){gb(n)&&(n="100%");var t=vb(n);return n=Math.min(e,Math.max(0,parseFloat(n))),t&&(n=parseInt(n*e,10)/100),Math.abs(n-e)<1e-6?1:n%e/parseFloat(e)}function bo(n){return Math.min(1,Math.max(0,n))}function Ft(n){return parseInt(n,16)}function gb(n){return typeof n=="string"&&n.indexOf(".")!=-1&&parseFloat(n)===1}function vb(n){return typeof n=="string"&&n.indexOf("%")!=-1}function Qt(n){return n.length==1?"0"+n:""+n}function er(n){return n<=1&&(n=n*100+"%"),n}function yf(n){return Math.round(parseFloat(n)*255).toString(16)}function Ul(n){return Ft(n)/255}var qt=function(){var n="[-\\+]?\\d+%?",e="[-\\+]?\\d*\\.\\d+%?",t="(?:"+e+")|(?:"+n+")",i="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?",r="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?";return{CSS_UNIT:new RegExp(t),rgb:new RegExp("rgb"+i),rgba:new RegExp("rgba"+r),hsl:new RegExp("hsl"+i),hsla:new RegExp("hsla"+r),hsv:new RegExp("hsv"+i),hsva:new RegExp("hsva"+r),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function pn(n){return!!qt.CSS_UNIT.exec(n)}function _b(n){n=n.replace(Kx,"").replace(Zx,"").toLowerCase();var e=!1;if(Fa[n])n=Fa[n],e=!0;else if(n=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var t;return(t=qt.rgb.exec(n))?{r:t[1],g:t[2],b:t[3]}:(t=qt.rgba.exec(n))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=qt.hsl.exec(n))?{h:t[1],s:t[2],l:t[3]}:(t=qt.hsla.exec(n))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=qt.hsv.exec(n))?{h:t[1],s:t[2],v:t[3]}:(t=qt.hsva.exec(n))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=qt.hex8.exec(n))?{r:Ft(t[1]),g:Ft(t[2]),b:Ft(t[3]),a:Ul(t[4]),format:e?"name":"hex8"}:(t=qt.hex6.exec(n))?{r:Ft(t[1]),g:Ft(t[2]),b:Ft(t[3]),format:e?"name":"hex"}:(t=qt.hex4.exec(n))?{r:Ft(t[1]+""+t[1]),g:Ft(t[2]+""+t[2]),b:Ft(t[3]+""+t[3]),a:Ul(t[4]+""+t[4]),format:e?"name":"hex8"}:(t=qt.hex3.exec(n))?{r:Ft(t[1]+""+t[1]),g:Ft(t[2]+""+t[2]),b:Ft(t[3]+""+t[3]),format:e?"name":"hex"}:!1}function yb(n){var e,t;return n=n||{level:"AA",size:"small"},e=(n.level||"AA").toUpperCase(),t=(n.size||"small").toLowerCase(),e!=="AA"&&e!=="AAA"&&(e="AA"),t!=="small"&&t!=="large"&&(t="small"),{level:e,size:t}}function xb(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,o,s,a=[],c=!0,l=!1;try{if(o=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(i=o.call(t)).done)&&(a.push(i.value),a.length!==e);c=!0);}catch(u){l=!0,r=u}finally{try{if(!c&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(l)throw r}}return a}}function Nl(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function xf(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Nl(Object(t),!0).forEach(function(i){xs(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Nl(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Ba(n){"@babel/helpers - typeof";return Ba=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ba(n)}function bb(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Fl(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,Ef(i.key),i)}}function Mb(n,e,t){return e&&Fl(n.prototype,e),t&&Fl(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function xs(n,e,t){return e=Ef(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Sb(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&uo(n,e)}function lo(n){return lo=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},lo(n)}function uo(n,e){return uo=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},uo(n,e)}function bf(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Yr(n,e,t){return bf()?Yr=Reflect.construct.bind():Yr=function(r,o,s){var a=[null];a.push.apply(a,o);var c=Function.bind.apply(r,a),l=new c;return s&&uo(l,s.prototype),l},Yr.apply(null,arguments)}function Eb(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function wb(n,e){if(n==null)return{};var t=Eb(n,e),i,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)i=o[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function Mf(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Tb(n,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Mf(n)}function Ab(n){var e=bf();return function(){var i=lo(n),r;if(e){var o=lo(this).constructor;r=Reflect.construct(i,arguments,o)}else r=i.apply(this,arguments);return Tb(this,r)}}function Bl(n,e){return Rb(n)||xb(n,e)||Sf(n,e)||Db()}function $t(n){return Cb(n)||Pb(n)||Sf(n)||Lb()}function Cb(n){if(Array.isArray(n))return ka(n)}function Rb(n){if(Array.isArray(n))return n}function Pb(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Sf(n,e){if(n){if(typeof n=="string")return ka(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ka(n,e)}}function ka(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function Lb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Db(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ob(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Ef(n){var e=Ob(n,"string");return typeof e=="symbol"?e:String(e)}var Ib=function n(e){e instanceof Array?e.forEach(n):(e.map&&e.map.dispose(),e.dispose())},Ub=function n(e){e.geometry&&e.geometry.dispose(),e.material&&Ib(e.material),e.texture&&e.texture.dispose(),e.children&&e.children.forEach(n)},za=function(e){for(;e.children.length;){var t=e.children[0];e.remove(t),Ub(t)}},Nb=["objFilter"];function $i(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=t.objFilter,r=i===void 0?function(){return!0}:i,o=wb(t,Nb);return Xx(n,e.children.filter(r),function(s){return e.add(s)},function(s){e.remove(s),za(s)},xf({objBindAttr:"__threeObj"},o))}var Yi=function(e){return isNaN(e)?parseInt(Se(e).toHex(),16):e},da=function(e){return isNaN(e)?Se(e).getAlpha():1},Fb=vf(Yx);function kl(n,e,t){!e||typeof t!="string"||n.filter(function(i){return!i[t]}).forEach(function(i){i[t]=Fb(e(i))})}function Bb(n,e){var t=n.nodes,i=n.links,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=r.nodeFilter,s=o===void 0?function(){return!0}:o,a=r.onLoopError,c=a===void 0?function(p){throw"Invalid DAG structure! Found cycle in node path: ".concat(p.join(" -> "),".")}:a,l={};t.forEach(function(p){return l[e(p)]={data:p,out:[],depth:-1,skip:!s(p)}}),i.forEach(function(p){var g=p.source,v=p.target,m=y(g),h=y(v);if(!l.hasOwnProperty(m))throw"Missing source node with id: ".concat(m);if(!l.hasOwnProperty(h))throw"Missing target node with id: ".concat(h);var b=l[m],_=l[h];b.out.push(_);function y(x){return Ba(x)==="object"?e(x):x}});var u=[];d(Object.values(l));var f=Object.assign.apply(Object,[{}].concat($t(Object.entries(l).filter(function(p){var g=Bl(p,2),v=g[1];return!v.skip}).map(function(p){var g=Bl(p,2),v=g[0],m=g[1];return xs({},v,m.depth)}))));return f;function d(p){for(var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,m=function(){var x=p[h];if(g.indexOf(x)!==-1){var S=[].concat($t(g.slice(g.indexOf(x))),[x]).map(function(E){return e(E.data)});return u.some(function(E){return E.length===S.length&&E.every(function(L,M){return L===S[M]})})||(u.push(S),c(S)),"continue"}v>x.depth&&(x.depth=v,d(x.out,[].concat($t(g),[x]),v+(x.skip?0:1)))},h=0,b=p.length;h<b;h++)var _=m()}}var Le=window.THREE?window.THREE:{Group:Ei,Mesh:Jt,MeshLambertMaterial:__,Color:je,BufferGeometry:Bt,BufferAttribute:en,Matrix4:Qe,Vector3:O,SphereGeometry:yo,CylinderGeometry:_o,TubeGeometry:ss,ConeGeometry:as,Line:n_,LineBasicMaterial:Pu,QuadraticBezierCurve3:os,CubicBezierCurve3:Du,Box3:ti},zl={graph:$0,forcelayout:Cy},kb=2,Hl=new Le.BufferGeometry().setAttribute?"setAttribute":"addAttribute",Wr=new Le.BufferGeometry().applyMatrix4?"applyMatrix4":"applyMatrix",zb=ys({props:{jsonUrl:{onChange:function(e,t){var i=this;e&&!t.fetchingJson&&(t.fetchingJson=!0,t.onLoading(),fetch(e).then(function(r){return r.json()}).then(function(r){t.fetchingJson=!1,t.onFinishLoading(r),i.graphData(r)}))},triggerUpdate:!1},graphData:{default:{nodes:[],links:[]},onChange:function(e,t){t.engineRunning=!1}},numDimensions:{default:3,onChange:function(e,t){var i=t.d3ForceLayout.force("charge");i&&i.strength(e>2?-60:-30),e<3&&r(t.graphData.nodes,"z"),e<2&&r(t.graphData.nodes,"y");function r(o,s){o.forEach(function(a){delete a[s],delete a["v".concat(s)]})}}},dagMode:{onChange:function(e,t){!e&&t.forceEngine==="d3"&&(t.graphData.nodes||[]).forEach(function(i){return i.fx=i.fy=i.fz=void 0})}},dagLevelDistance:{},dagNodeFilter:{default:function(e){return!0}},onDagError:{triggerUpdate:!1},nodeRelSize:{default:4},nodeId:{default:"id"},nodeVal:{default:"val"},nodeResolution:{default:8},nodeColor:{default:"color"},nodeAutoColorBy:{},nodeOpacity:{default:.75},nodeVisibility:{default:!0},nodeThreeObject:{},nodeThreeObjectExtend:{default:!1},nodePositionUpdate:{triggerUpdate:!1},linkSource:{default:"source"},linkTarget:{default:"target"},linkVisibility:{default:!0},linkColor:{default:"color"},linkAutoColorBy:{},linkOpacity:{default:.2},linkWidth:{},linkResolution:{default:6},linkCurvature:{default:0,triggerUpdate:!1},linkCurveRotation:{default:0,triggerUpdate:!1},linkMaterial:{},linkThreeObject:{},linkThreeObjectExtend:{default:!1},linkPositionUpdate:{triggerUpdate:!1},linkDirectionalArrowLength:{default:0},linkDirectionalArrowColor:{},linkDirectionalArrowRelPos:{default:.5,triggerUpdate:!1},linkDirectionalArrowResolution:{default:8},linkDirectionalParticles:{default:0},linkDirectionalParticleSpeed:{default:.01,triggerUpdate:!1},linkDirectionalParticleWidth:{default:.5},linkDirectionalParticleColor:{},linkDirectionalParticleResolution:{default:4},forceEngine:{default:"d3"},d3AlphaMin:{default:0},d3AlphaDecay:{default:.0228,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.alphaDecay(e)}},d3AlphaTarget:{default:0,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.alphaTarget(e)}},d3VelocityDecay:{default:.4,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.velocityDecay(e)}},ngraphPhysics:{default:{timeStep:20,gravity:-1.2,theta:.8,springLength:30,springCoefficient:8e-4,dragCoefficient:.02}},warmupTicks:{default:0,triggerUpdate:!1},cooldownTicks:{default:1/0,triggerUpdate:!1},cooldownTime:{default:15e3,triggerUpdate:!1},onLoading:{default:function(){},triggerUpdate:!1},onFinishLoading:{default:function(){},triggerUpdate:!1},onUpdate:{default:function(){},triggerUpdate:!1},onFinishUpdate:{default:function(){},triggerUpdate:!1},onEngineTick:{default:function(){},triggerUpdate:!1},onEngineStop:{default:function(){},triggerUpdate:!1}},methods:{refresh:function(e){return e._flushObjects=!0,e._rerender(),this},d3Force:function(e,t,i){return i===void 0?e.d3ForceLayout.force(t):(e.d3ForceLayout.force(t,i),this)},d3ReheatSimulation:function(e){return e.d3ForceLayout.alpha(1),this.resetCountdown(),this},resetCountdown:function(e){return e.cntTicks=0,e.startTickTime=new Date,e.engineRunning=!0,this},tickFrame:function(e){var t=e.forceEngine!=="ngraph";return e.engineRunning&&i(),r(),o(),this;function i(){++e.cntTicks>e.cooldownTicks||new Date-e.startTickTime>e.cooldownTime||t&&e.d3AlphaMin>0&&e.d3ForceLayout.alpha()<e.d3AlphaMin?(e.engineRunning=!1,e.onEngineStop()):(e.layout[t?"tick":"step"](),e.onEngineTick());var s=$e(e.nodeThreeObjectExtend);e.graphData.nodes.forEach(function(d){var p=d.__threeObj;if(p){var g=t?d:e.layout.getNodePosition(d[e.nodeId]),v=s(d);(!e.nodePositionUpdate||!e.nodePositionUpdate(v?p.children[0]:p,{x:g.x,y:g.y,z:g.z},d)||v)&&(p.position.x=g.x,p.position.y=g.y||0,p.position.z=g.z||0)}});var a=$e(e.linkWidth),c=$e(e.linkCurvature),l=$e(e.linkCurveRotation),u=$e(e.linkThreeObjectExtend);e.graphData.links.forEach(function(d){var p=d.__lineObj;if(p){var g=t?d:e.layout.getLinkPosition(e.layout.graph.getLink(d.source,d.target).id),v=g[t?"source":"from"],m=g[t?"target":"to"];if(!(!v||!m||!v.hasOwnProperty("x")||!m.hasOwnProperty("x"))){f(d);var h=u(d);if(!(e.linkPositionUpdate&&e.linkPositionUpdate(h?p.children[1]:p,{start:{x:v.x,y:v.y,z:v.z},end:{x:m.x,y:m.y,z:m.z}},d)&&!h)){var b=30,_=d.__curve,y=p.children.length?p.children[0]:p;if(y.type==="Line"){if(_)y.geometry.setFromPoints(_.getPoints(b));else{var x=y.geometry.getAttribute("position");(!x||!x.array||x.array.length!==6)&&y.geometry[Hl]("position",x=new Le.BufferAttribute(new Float32Array(2*3),3)),x.array[0]=v.x,x.array[1]=v.y||0,x.array[2]=v.z||0,x.array[3]=m.x,x.array[4]=m.y||0,x.array[5]=m.z||0,x.needsUpdate=!0}y.geometry.computeBoundingSphere()}else if(y.type==="Mesh")if(_){y.geometry.type.match(/^Tube(Buffer)?Geometry$/)||(y.position.set(0,0,0),y.rotation.set(0,0,0),y.scale.set(1,1,1));var G=Math.ceil(a(d)*10)/10,Z=G/2,C=new Le.TubeGeometry(_,b,Z,e.linkResolution,!1);y.geometry.dispose(),y.geometry=C}else{if(!y.geometry.type.match(/^Cylinder(Buffer)?Geometry$/)){var S=Math.ceil(a(d)*10)/10,E=S/2,L=new Le.CylinderGeometry(E,E,1,e.linkResolution,1,!1);L[Wr](new Le.Matrix4().makeTranslation(0,1/2,0)),L[Wr](new Le.Matrix4().makeRotationX(Math.PI/2)),y.geometry.dispose(),y.geometry=L}var M=new Le.Vector3(v.x,v.y||0,v.z||0),T=new Le.Vector3(m.x,m.y||0,m.z||0),z=M.distanceTo(T);y.position.x=M.x,y.position.y=M.y,y.position.z=M.z,y.scale.z=z,y.parent.localToWorld(T),y.lookAt(T)}}}}});function f(d){var p=t?d:e.layout.getLinkPosition(e.layout.graph.getLink(d.source,d.target).id),g=p[t?"source":"from"],v=p[t?"target":"to"];if(!(!g||!v||!g.hasOwnProperty("x")||!v.hasOwnProperty("x"))){var m=c(d);if(!m)d.__curve=null;else{var h=new Le.Vector3(g.x,g.y||0,g.z||0),b=new Le.Vector3(v.x,v.y||0,v.z||0),_=h.distanceTo(b),y,x=l(d);if(_>0){var S=v.x-g.x,E=v.y-g.y||0,L=new Le.Vector3().subVectors(b,h),M=L.clone().multiplyScalar(m).cross(S!==0||E!==0?new Le.Vector3(0,0,1):new Le.Vector3(0,1,0)).applyAxisAngle(L.normalize(),x).add(new Le.Vector3().addVectors(h,b).divideScalar(2));y=new Le.QuadraticBezierCurve3(h,M,b)}else{var T=m*70,z=-x,G=z+Math.PI/2;y=new Le.CubicBezierCurve3(h,new Le.Vector3(T*Math.cos(G),T*Math.sin(G),0).add(h),new Le.Vector3(T*Math.cos(z),T*Math.sin(z),0).add(h),b)}d.__curve=y}}}}function r(){var s=$e(e.linkDirectionalArrowRelPos),a=$e(e.linkDirectionalArrowLength),c=$e(e.nodeVal);e.graphData.links.forEach(function(l){var u=l.__arrowObj;if(u){var f=t?l:e.layout.getLinkPosition(e.layout.graph.getLink(l.source,l.target).id),d=f[t?"source":"from"],p=f[t?"target":"to"];if(!(!d||!p||!d.hasOwnProperty("x")||!p.hasOwnProperty("x"))){var g=Math.cbrt(Math.max(0,c(d)||1))*e.nodeRelSize,v=Math.cbrt(Math.max(0,c(p)||1))*e.nodeRelSize,m=a(l),h=s(l),b=l.__curve?function(L){return l.__curve.getPoint(L)}:function(L){var M=function(z,G,Z,C){return G[z]+(Z[z]-G[z])*C||0};return{x:M("x",d,p,L),y:M("y",d,p,L),z:M("z",d,p,L)}},_=l.__curve?l.__curve.getLength():Math.sqrt(["x","y","z"].map(function(L){return Math.pow((p[L]||0)-(d[L]||0),2)}).reduce(function(L,M){return L+M},0)),y=g+m+(_-g-v-m)*h,x=b(y/_),S=b((y-m)/_);["x","y","z"].forEach(function(L){return u.position[L]=S[L]});var E=Yr(Le.Vector3,$t(["x","y","z"].map(function(L){return x[L]})));u.parent.localToWorld(E),u.lookAt(E)}}})}function o(){var s=$e(e.linkDirectionalParticleSpeed);e.graphData.links.forEach(function(a){var c=a.__photonsObj&&a.__photonsObj.children,l=a.__singleHopPhotonsObj&&a.__singleHopPhotonsObj.children;if(!((!l||!l.length)&&(!c||!c.length))){var u=t?a:e.layout.getLinkPosition(e.layout.graph.getLink(a.source,a.target).id),f=u[t?"source":"from"],d=u[t?"target":"to"];if(!(!f||!d||!f.hasOwnProperty("x")||!d.hasOwnProperty("x"))){var p=s(a),g=a.__curve?function(m){return a.__curve.getPoint(m)}:function(m){var h=function(_,y,x,S){return y[_]+(x[_]-y[_])*S||0};return{x:h("x",f,d,m),y:h("y",f,d,m),z:h("z",f,d,m)}},v=[].concat($t(c||[]),$t(l||[]));v.forEach(function(m,h){var b=m.parent.__linkThreeObjType==="singleHopPhotons";if(m.hasOwnProperty("__progressRatio")||(m.__progressRatio=b?0:h/c.length),m.__progressRatio+=p,m.__progressRatio>=1)if(!b)m.__progressRatio=m.__progressRatio%1;else{m.parent.remove(m),za(m);return}var _=m.__progressRatio,y=g(_);["x","y","z"].forEach(function(x){return m.position[x]=y[x]})})}}})}},emitParticle:function(e,t){if(t&&e.graphData.links.includes(t)){if(!t.__singleHopPhotonsObj){var i=new Le.Group;i.__linkThreeObjType="singleHopPhotons",t.__singleHopPhotonsObj=i,e.graphScene.add(i)}var r=$e(e.linkDirectionalParticleWidth),o=Math.ceil(r(t)*10)/10/2,s=e.linkDirectionalParticleResolution,a=new Le.SphereGeometry(o,s,s),c=$e(e.linkColor),l=$e(e.linkDirectionalParticleColor),u=l(t)||c(t)||"#f0f0f0",f=new Le.Color(Yi(u)),d=e.linkOpacity*3,p=new Le.MeshLambertMaterial({color:f,transparent:!0,opacity:d});t.__singleHopPhotonsObj.add(new Le.Mesh(a,p))}return this},getGraphBbox:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return!0};if(!e.initialised)return null;var i=function r(o){var s=[];if(o.geometry){o.geometry.computeBoundingBox();var a=new Le.Box3;a.copy(o.geometry.boundingBox).applyMatrix4(o.matrixWorld),s.push(a)}return s.concat.apply(s,$t((o.children||[]).filter(function(c){return!c.hasOwnProperty("__graphObjType")||c.__graphObjType==="node"&&t(c.__data)}).map(r)))}(e.graphScene);return i.length?Object.assign.apply(Object,$t(["x","y","z"].map(function(r){return xs({},r,[yx(i,function(o){return o.min[r]}),_x(i,function(o){return o.max[r]})])}))):null}},stateInit:function(){return{d3ForceLayout:k0().force("link",E0()).force("charge",z0()).force("center",C_()).force("dagRadial",null).stop(),engineRunning:!1}},init:function(e,t){t.graphScene=e},update:function(e,t){var i=function(W){return W.some(function(ie){return t.hasOwnProperty(ie)})};if(e.engineRunning=!1,e.onUpdate(),e.nodeAutoColorBy!==null&&i(["nodeAutoColorBy","graphData","nodeColor"])&&kl(e.graphData.nodes,$e(e.nodeAutoColorBy),e.nodeColor),e.linkAutoColorBy!==null&&i(["linkAutoColorBy","graphData","linkColor"])&&kl(e.graphData.links,$e(e.linkAutoColorBy),e.linkColor),e._flushObjects||i(["graphData","nodeThreeObject","nodeThreeObjectExtend","nodeVal","nodeColor","nodeVisibility","nodeRelSize","nodeResolution","nodeOpacity"])){var r=$e(e.nodeThreeObject),o=$e(e.nodeThreeObjectExtend),s=$e(e.nodeVal),a=$e(e.nodeColor),c=$e(e.nodeVisibility),l={},u={};$i(e.graphData.nodes.filter(c),e.graphScene,{purge:e._flushObjects||i(["nodeThreeObject","nodeThreeObjectExtend"]),objFilter:function(W){return W.__graphObjType==="node"},createObj:function(W){var ie=r(W),F=o(W);ie&&e.nodeThreeObject===ie&&(ie=ie.clone());var K;return ie&&!F?K=ie:(K=new Le.Mesh,K.__graphDefaultObj=!0,ie&&F&&K.add(ie)),K.__graphObjType="node",K},updateObj:function(W,ie){if(W.__graphDefaultObj){var F=s(ie)||1,K=Math.cbrt(F)*e.nodeRelSize,fe=e.nodeResolution;(!W.geometry.type.match(/^Sphere(Buffer)?Geometry$/)||W.geometry.parameters.radius!==K||W.geometry.parameters.widthSegments!==fe)&&(l.hasOwnProperty(F)||(l[F]=new Le.SphereGeometry(K,fe,fe)),W.geometry.dispose(),W.geometry=l[F]);var be=a(ie),ge=new Le.Color(Yi(be||"#ffffaa")),H=e.nodeOpacity*da(be);(W.material.type!=="MeshLambertMaterial"||!W.material.color.equals(ge)||W.material.opacity!==H)&&(u.hasOwnProperty(be)||(u[be]=new Le.MeshLambertMaterial({color:ge,transparent:!0,opacity:H})),W.material.dispose(),W.material=u[be])}}})}if(e._flushObjects||i(["graphData","linkThreeObject","linkThreeObjectExtend","linkMaterial","linkColor","linkWidth","linkVisibility","linkResolution","linkOpacity","linkDirectionalArrowLength","linkDirectionalArrowColor","linkDirectionalArrowResolution","linkDirectionalParticles","linkDirectionalParticleWidth","linkDirectionalParticleColor","linkDirectionalParticleResolution"])){var f=$e(e.linkThreeObject),d=$e(e.linkThreeObjectExtend),p=$e(e.linkMaterial),g=$e(e.linkVisibility),v=$e(e.linkColor),m=$e(e.linkWidth),h={},b={},_={},y=e.graphData.links.filter(g);if($i(y,e.graphScene,{objBindAttr:"__lineObj",purge:e._flushObjects||i(["linkThreeObject","linkThreeObjectExtend","linkWidth"]),objFilter:function(W){return W.__graphObjType==="link"},exitObj:function(W){var ie=W.__data&&W.__data.__singleHopPhotonsObj;ie&&(ie.parent.remove(ie),za(ie),delete W.__data.__singleHopPhotonsObj)},createObj:function(W){var ie=f(W),F=d(W);ie&&e.linkThreeObject===ie&&(ie=ie.clone());var K;if(!ie||F){var fe=!!m(W);if(fe)K=new Le.Mesh;else{var be=new Le.BufferGeometry;be[Hl]("position",new Le.BufferAttribute(new Float32Array(2*3),3)),K=new Le.Line(be)}}var ge;return ie?F?(ge=new Le.Group,ge.__graphDefaultObj=!0,ge.add(K),ge.add(ie)):ge=ie:(ge=K,ge.__graphDefaultObj=!0),ge.renderOrder=10,ge.__graphObjType="link",ge},updateObj:function(W,ie){if(W.__graphDefaultObj){var F=W.children.length?W.children[0]:W,K=Math.ceil(m(ie)*10)/10,fe=!!K;if(fe){var be=K/2,ge=e.linkResolution;if(!F.geometry.type.match(/^Cylinder(Buffer)?Geometry$/)||F.geometry.parameters.radiusTop!==be||F.geometry.parameters.radialSegments!==ge){if(!h.hasOwnProperty(K)){var H=new Le.CylinderGeometry(be,be,1,ge,1,!1);H[Wr](new Le.Matrix4().makeTranslation(0,1/2,0)),H[Wr](new Le.Matrix4().makeRotationX(Math.PI/2)),h[K]=H}F.geometry.dispose(),F.geometry=h[K]}}var nt=p(ie);if(nt)F.material=nt;else{var _e=v(ie),Ce=new Le.Color(Yi(_e||"#f0f0f0")),Te=e.linkOpacity*da(_e),Xe=fe?"MeshLambertMaterial":"LineBasicMaterial";if(F.material.type!==Xe||!F.material.color.equals(Ce)||F.material.opacity!==Te){var Ie=fe?b:_;Ie.hasOwnProperty(_e)||(Ie[_e]=new Le[Xe]({color:Ce,transparent:Te<1,opacity:Te,depthWrite:Te>=1})),F.material.dispose(),F.material=Ie[_e]}}}}}),e.linkDirectionalArrowLength||t.hasOwnProperty("linkDirectionalArrowLength")){var x=$e(e.linkDirectionalArrowLength),S=$e(e.linkDirectionalArrowColor);$i(y.filter(x),e.graphScene,{objBindAttr:"__arrowObj",objFilter:function(W){return W.__linkThreeObjType==="arrow"},createObj:function(){var W=new Le.Mesh(void 0,new Le.MeshLambertMaterial({transparent:!0}));return W.__linkThreeObjType="arrow",W},updateObj:function(W,ie){var F=x(ie),K=e.linkDirectionalArrowResolution;if(!W.geometry.type.match(/^Cone(Buffer)?Geometry$/)||W.geometry.parameters.height!==F||W.geometry.parameters.radialSegments!==K){var fe=new Le.ConeGeometry(F*.25,F,K);fe.translate(0,F/2,0),fe.rotateX(Math.PI/2),W.geometry.dispose(),W.geometry=fe}var be=S(ie)||v(ie)||"#f0f0f0";W.material.color=new Le.Color(Yi(be)),W.material.opacity=e.linkOpacity*3*da(be)}})}if(e.linkDirectionalParticles||t.hasOwnProperty("linkDirectionalParticles")){var E=$e(e.linkDirectionalParticles),L=$e(e.linkDirectionalParticleWidth),M=$e(e.linkDirectionalParticleColor),T={},z={};$i(y.filter(E),e.graphScene,{objBindAttr:"__photonsObj",objFilter:function(W){return W.__linkThreeObjType==="photons"},createObj:function(){var W=new Le.Group;return W.__linkThreeObjType="photons",W},updateObj:function(W,ie){var F=Math.round(Math.abs(E(ie))),K=!!W.children.length&&W.children[0],fe=Math.ceil(L(ie)*10)/10/2,be=e.linkDirectionalParticleResolution,ge;K&&K.geometry.parameters.radius===fe&&K.geometry.parameters.widthSegments===be?ge=K.geometry:(z.hasOwnProperty(fe)||(z[fe]=new Le.SphereGeometry(fe,be,be)),ge=z[fe],K&&K.geometry.dispose());var H=M(ie)||v(ie)||"#f0f0f0",nt=new Le.Color(Yi(H)),_e=e.linkOpacity*3,Ce;K&&K.material.color.equals(nt)&&K.material.opacity===_e?Ce=K.material:(T.hasOwnProperty(H)||(T[H]=new Le.MeshLambertMaterial({color:nt,transparent:!0,opacity:_e})),Ce=T[H],K&&K.material.dispose()),$i($t(new Array(F)).map(function(Te,Xe){return{idx:Xe}}),W,{idAccessor:function(Xe){return Xe.idx},createObj:function(){return new Le.Mesh(ge,Ce)},updateObj:function(Xe){Xe.geometry=ge,Xe.material=Ce}})}})}}if(e._flushObjects=!1,i(["graphData","nodeId","linkSource","linkTarget","numDimensions","forceEngine","dagMode","dagNodeFilter","dagLevelDistance"])){e.engineRunning=!1,e.graphData.links.forEach(function(J){J.source=J[e.linkSource],J.target=J[e.linkTarget]});var G=e.forceEngine!=="ngraph",Z;if(G){(Z=e.d3ForceLayout).stop().alpha(1).numDimensions(e.numDimensions).nodes(e.graphData.nodes);var C=e.d3ForceLayout.force("link");C&&C.id(function(J){return J[e.nodeId]}).links(e.graphData.links);var P=e.dagMode&&Bb(e.graphData,function(J){return J[e.nodeId]},{nodeFilter:e.dagNodeFilter,onLoopError:e.onDagError||void 0}),U=Math.max.apply(Math,$t(Object.values(P||[]))),j=e.dagLevelDistance||e.graphData.nodes.length/(U||1)*kb*(["radialin","radialout"].indexOf(e.dagMode)!==-1?.7:1);if(e.dagMode){var ne=function(W,ie){return function(F){return W?(P[F[e.nodeId]]-U/2)*j*(ie?-1:1):void 0}},ee=ne(["lr","rl"].indexOf(e.dagMode)!==-1,e.dagMode==="rl"),k=ne(["td","bu"].indexOf(e.dagMode)!==-1,e.dagMode==="td"),D=ne(["zin","zout"].indexOf(e.dagMode)!==-1,e.dagMode==="zout");e.graphData.nodes.filter(e.dagNodeFilter).forEach(function(J){J.fx=ee(J),J.fy=k(J),J.fz=D(J)})}e.d3ForceLayout.force("dagRadial",["radialin","radialout"].indexOf(e.dagMode)!==-1?H0(function(J){var W=P[J[e.nodeId]]||-1;return(e.dagMode==="radialin"?U-W:W)*j}).strength(function(J){return e.dagNodeFilter(J)?1:0}):null)}else{var B=zl.graph();e.graphData.nodes.forEach(function(J){B.addNode(J[e.nodeId])}),e.graphData.links.forEach(function(J){B.addLink(J.source,J.target)}),Z=zl.forcelayout(B,xf({dimensions:e.numDimensions},e.ngraphPhysics)),Z.graph=B}for(var re=0;re<e.warmupTicks&&!(G&&e.d3AlphaMin>0&&e.d3ForceLayout.alpha()<e.d3AlphaMin);re++)Z[G?"tick":"step"]();e.layout=Z,this.resetCountdown()}e.engineRunning=!0,e.onFinishUpdate()}});function Hb(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Object,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,i=function(r){Sb(s,r);var o=Ab(s);function s(){var a;bb(this,s);for(var c=arguments.length,l=new Array(c),u=0;u<c;u++)l[u]=arguments[u];return a=o.call.apply(o,[this].concat(l)),a.__kapsuleInstance=n().apply(void 0,[].concat($t(t?[Mf(a)]:[]),l)),a}return Mb(s)}(e);return Object.keys(n()).forEach(function(r){return i.prototype[r]=function(){var o,s=(o=this.__kapsuleInstance)[r].apply(o,arguments);return s===this.__kapsuleInstance?this:s}}),i}var Gb=window.THREE?window.THREE:{Group:Ei},wf=Hb(zb,Gb.Group,!0);const pa={type:"change"},ma={type:"start"},ga={type:"end"};class Vb extends nn{constructor(e,t){super();const i=this,r={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:on.ROTATE,MIDDLE:on.DOLLY,RIGHT:on.PAN},this.target=new O;const o=1e-6,s=new O;let a=1,c=r.NONE,l=r.NONE,u=0,f=0,d=0;const p=new O,g=new me,v=new me,m=new O,h=new me,b=new me,_=new me,y=new me,x=[],S={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const F=i.domElement.getBoundingClientRect(),K=i.domElement.ownerDocument.documentElement;i.screen.left=F.left+window.pageXOffset-K.clientLeft,i.screen.top=F.top+window.pageYOffset-K.clientTop,i.screen.width=F.width,i.screen.height=F.height};const E=function(){const F=new me;return function(fe,be){return F.set((fe-i.screen.left)/i.screen.width,(be-i.screen.top)/i.screen.height),F}}(),L=function(){const F=new me;return function(fe,be){return F.set((fe-i.screen.width*.5-i.screen.left)/(i.screen.width*.5),(i.screen.height+2*(i.screen.top-be))/i.screen.width),F}}();this.rotateCamera=function(){const F=new O,K=new tn,fe=new O,be=new O,ge=new O,H=new O;return function(){H.set(v.x-g.x,v.y-g.y,0);let _e=H.length();_e?(p.copy(i.object.position).sub(i.target),fe.copy(p).normalize(),be.copy(i.object.up).normalize(),ge.crossVectors(be,fe).normalize(),be.setLength(v.y-g.y),ge.setLength(v.x-g.x),H.copy(be.add(ge)),F.crossVectors(H,p).normalize(),_e*=i.rotateSpeed,K.setFromAxisAngle(F,_e),p.applyQuaternion(K),i.object.up.applyQuaternion(K),m.copy(F),d=_e):!i.staticMoving&&d&&(d*=Math.sqrt(1-i.dynamicDampingFactor),p.copy(i.object.position).sub(i.target),K.setFromAxisAngle(m,d),p.applyQuaternion(K),i.object.up.applyQuaternion(K)),g.copy(v)}}(),this.zoomCamera=function(){let F;c===r.TOUCH_ZOOM_PAN?(F=u/f,u=f,i.object.isPerspectiveCamera?p.multiplyScalar(F):i.object.isOrthographicCamera?(i.object.zoom=Ca.clamp(i.object.zoom/F,i.minZoom,i.maxZoom),a!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(F=1+(b.y-h.y)*i.zoomSpeed,F!==1&&F>0&&(i.object.isPerspectiveCamera?p.multiplyScalar(F):i.object.isOrthographicCamera?(i.object.zoom=Ca.clamp(i.object.zoom/F,i.minZoom,i.maxZoom),a!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),i.staticMoving?h.copy(b):h.y+=(b.y-h.y)*this.dynamicDampingFactor)},this.panCamera=function(){const F=new me,K=new O,fe=new O;return function(){if(F.copy(y).sub(_),F.lengthSq()){if(i.object.isOrthographicCamera){const ge=(i.object.right-i.object.left)/i.object.zoom/i.domElement.clientWidth,H=(i.object.top-i.object.bottom)/i.object.zoom/i.domElement.clientWidth;F.x*=ge,F.y*=H}F.multiplyScalar(p.length()*i.panSpeed),fe.copy(p).cross(i.object.up).setLength(F.x),fe.add(K.copy(i.object.up).setLength(F.y)),i.object.position.add(fe),i.target.add(fe),i.staticMoving?_.copy(y):_.add(F.subVectors(y,_).multiplyScalar(i.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!i.noZoom||!i.noPan)&&(p.lengthSq()>i.maxDistance*i.maxDistance&&(i.object.position.addVectors(i.target,p.setLength(i.maxDistance)),h.copy(b)),p.lengthSq()<i.minDistance*i.minDistance&&(i.object.position.addVectors(i.target,p.setLength(i.minDistance)),h.copy(b)))},this.update=function(){p.subVectors(i.object.position,i.target),i.noRotate||i.rotateCamera(),i.noZoom||i.zoomCamera(),i.noPan||i.panCamera(),i.object.position.addVectors(i.target,p),i.object.isPerspectiveCamera?(i.checkDistances(),i.object.lookAt(i.target),s.distanceToSquared(i.object.position)>o&&(i.dispatchEvent(pa),s.copy(i.object.position))):i.object.isOrthographicCamera?(i.object.lookAt(i.target),(s.distanceToSquared(i.object.position)>o||a!==i.object.zoom)&&(i.dispatchEvent(pa),s.copy(i.object.position),a=i.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){c=r.NONE,l=r.NONE,i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.up.copy(i.up0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),p.subVectors(i.object.position,i.target),i.object.lookAt(i.target),i.dispatchEvent(pa),s.copy(i.object.position),a=i.object.zoom};function M(F){i.enabled!==!1&&(x.length===0&&(i.domElement.setPointerCapture(F.pointerId),i.domElement.addEventListener("pointermove",T),i.domElement.addEventListener("pointerup",z)),re(F),F.pointerType==="touch"?ee(F):P(F))}function T(F){i.enabled!==!1&&(F.pointerType==="touch"?k(F):U(F))}function z(F){i.enabled!==!1&&(F.pointerType==="touch"?D(F):j(),J(F),x.length===0&&(i.domElement.releasePointerCapture(F.pointerId),i.domElement.removeEventListener("pointermove",T),i.domElement.removeEventListener("pointerup",z)))}function G(F){J(F)}function Z(F){i.enabled!==!1&&(window.removeEventListener("keydown",Z),l===r.NONE&&(F.code===i.keys[r.ROTATE]&&!i.noRotate?l=r.ROTATE:F.code===i.keys[r.ZOOM]&&!i.noZoom?l=r.ZOOM:F.code===i.keys[r.PAN]&&!i.noPan&&(l=r.PAN)))}function C(){i.enabled!==!1&&(l=r.NONE,window.addEventListener("keydown",Z))}function P(F){if(c===r.NONE)switch(F.button){case i.mouseButtons.LEFT:c=r.ROTATE;break;case i.mouseButtons.MIDDLE:c=r.ZOOM;break;case i.mouseButtons.RIGHT:c=r.PAN;break}const K=l!==r.NONE?l:c;K===r.ROTATE&&!i.noRotate?(v.copy(L(F.pageX,F.pageY)),g.copy(v)):K===r.ZOOM&&!i.noZoom?(h.copy(E(F.pageX,F.pageY)),b.copy(h)):K===r.PAN&&!i.noPan&&(_.copy(E(F.pageX,F.pageY)),y.copy(_)),i.dispatchEvent(ma)}function U(F){const K=l!==r.NONE?l:c;K===r.ROTATE&&!i.noRotate?(g.copy(v),v.copy(L(F.pageX,F.pageY))):K===r.ZOOM&&!i.noZoom?b.copy(E(F.pageX,F.pageY)):K===r.PAN&&!i.noPan&&y.copy(E(F.pageX,F.pageY))}function j(){c=r.NONE,i.dispatchEvent(ga)}function ne(F){if(i.enabled!==!1&&i.noZoom!==!0){switch(F.preventDefault(),F.deltaMode){case 2:h.y-=F.deltaY*.025;break;case 1:h.y-=F.deltaY*.01;break;default:h.y-=F.deltaY*25e-5;break}i.dispatchEvent(ma),i.dispatchEvent(ga)}}function ee(F){switch(W(F),x.length){case 1:c=r.TOUCH_ROTATE,v.copy(L(x[0].pageX,x[0].pageY)),g.copy(v);break;default:c=r.TOUCH_ZOOM_PAN;const K=x[0].pageX-x[1].pageX,fe=x[0].pageY-x[1].pageY;f=u=Math.sqrt(K*K+fe*fe);const be=(x[0].pageX+x[1].pageX)/2,ge=(x[0].pageY+x[1].pageY)/2;_.copy(E(be,ge)),y.copy(_);break}i.dispatchEvent(ma)}function k(F){switch(W(F),x.length){case 1:g.copy(v),v.copy(L(F.pageX,F.pageY));break;default:const K=ie(F),fe=F.pageX-K.x,be=F.pageY-K.y;f=Math.sqrt(fe*fe+be*be);const ge=(F.pageX+K.x)/2,H=(F.pageY+K.y)/2;y.copy(E(ge,H));break}}function D(F){switch(x.length){case 0:c=r.NONE;break;case 1:c=r.TOUCH_ROTATE,v.copy(L(F.pageX,F.pageY)),g.copy(v);break;case 2:c=r.TOUCH_ZOOM_PAN;for(let K=0;K<x.length;K++)if(x[K].pointerId!==F.pointerId){const fe=S[x[K].pointerId];v.copy(L(fe.x,fe.y)),g.copy(v);break}break}i.dispatchEvent(ga)}function B(F){i.enabled!==!1&&F.preventDefault()}function re(F){x.push(F)}function J(F){delete S[F.pointerId];for(let K=0;K<x.length;K++)if(x[K].pointerId==F.pointerId){x.splice(K,1);return}}function W(F){let K=S[F.pointerId];K===void 0&&(K=new me,S[F.pointerId]=K),K.set(F.pageX,F.pageY)}function ie(F){const K=F.pointerId===x[0].pointerId?x[1]:x[0];return S[K.pointerId]}this.dispose=function(){i.domElement.removeEventListener("contextmenu",B),i.domElement.removeEventListener("pointerdown",M),i.domElement.removeEventListener("pointercancel",G),i.domElement.removeEventListener("wheel",ne),i.domElement.removeEventListener("pointermove",T),i.domElement.removeEventListener("pointerup",z),window.removeEventListener("keydown",Z),window.removeEventListener("keyup",C)},this.domElement.addEventListener("contextmenu",B),this.domElement.addEventListener("pointerdown",M),this.domElement.addEventListener("pointercancel",G),this.domElement.addEventListener("wheel",ne,{passive:!1}),window.addEventListener("keydown",Z),window.addEventListener("keyup",C),this.handleResize(),this.update()}}const Gl={type:"change"},va={type:"start"},Vl={type:"end"},jr=new mo,Wl=new vn,Wb=Math.cos(70*Ca.DEG2RAD);class jb extends nn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:on.ROTATE,MIDDLE:on.DOLLY,RIGHT:on.PAN},this.touches={ONE:ni.ROTATE,TWO:ni.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(I){I.addEventListener("keydown",w),this._domElementKeyEvents=I},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",w),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Gl),i.update(),o=r.NONE},this.update=function(){const I=new O,ue=new tn().setFromUnitVectors(e.up,new O(0,1,0)),te=ue.clone().invert(),De=new O,we=new tn,Pe=new O,Me=2*Math.PI;return function(Ge=null){const N=i.object.position;I.copy(N).sub(i.target),I.applyQuaternion(ue),a.setFromVector3(I),i.autoRotate&&o===r.NONE&&z(M(Ge)),i.enableDamping?(a.theta+=c.theta*i.dampingFactor,a.phi+=c.phi*i.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let de=i.minAzimuthAngle,ae=i.maxAzimuthAngle;isFinite(de)&&isFinite(ae)&&(de<-Math.PI?de+=Me:de>Math.PI&&(de-=Me),ae<-Math.PI?ae+=Me:ae>Math.PI&&(ae-=Me),de<=ae?a.theta=Math.max(de,Math.min(ae,a.theta)):a.theta=a.theta>(de+ae)/2?Math.max(de,a.theta):Math.min(ae,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&S||i.object.isOrthographicCamera?a.radius=ee(a.radius):a.radius=ee(a.radius*l),I.setFromSpherical(a),I.applyQuaternion(te),N.copy(i.target).add(I),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let Q=!1;if(i.zoomToCursor&&S){let le=null;if(i.object.isPerspectiveCamera){const Re=I.length();le=ee(Re*l);const Ve=Re-le;i.object.position.addScaledVector(y,Ve),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Re=new O(x.x,x.y,0);Re.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),Q=!0;const Ve=new O(x.x,x.y,0);Ve.unproject(i.object),i.object.position.sub(Ve).add(Re),i.object.updateMatrixWorld(),le=I.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;le!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(le).add(i.object.position):(jr.origin.copy(i.object.position),jr.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(jr.direction))<Wb?e.lookAt(i.target):(Wl.setFromNormalAndCoplanarPoint(i.object.up,i.target),jr.intersectPlane(Wl,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),Q=!0);return l=1,S=!1,Q||De.distanceToSquared(i.object.position)>s||8*(1-we.dot(i.object.quaternion))>s||Pe.distanceToSquared(i.target)>0?(i.dispatchEvent(Gl),De.copy(i.object.position),we.copy(i.object.quaternion),Pe.copy(i.target),Q=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",oe),i.domElement.removeEventListener("pointerdown",Ie),i.domElement.removeEventListener("pointercancel",qe),i.domElement.removeEventListener("wheel",R),i.domElement.removeEventListener("pointermove",Ne),i.domElement.removeEventListener("pointerup",qe),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",w),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const s=1e-6,a=new La,c=new La;let l=1;const u=new O,f=new me,d=new me,p=new me,g=new me,v=new me,m=new me,h=new me,b=new me,_=new me,y=new O,x=new me;let S=!1;const E=[],L={};function M(I){return I!==null?2*Math.PI/60*i.autoRotateSpeed*I:2*Math.PI/60/60*i.autoRotateSpeed}function T(){return Math.pow(.95,i.zoomSpeed)}function z(I){c.theta-=I}function G(I){c.phi-=I}const Z=function(){const I=new O;return function(te,De){I.setFromMatrixColumn(De,0),I.multiplyScalar(-te),u.add(I)}}(),C=function(){const I=new O;return function(te,De){i.screenSpacePanning===!0?I.setFromMatrixColumn(De,1):(I.setFromMatrixColumn(De,0),I.crossVectors(i.object.up,I)),I.multiplyScalar(te),u.add(I)}}(),P=function(){const I=new O;return function(te,De){const we=i.domElement;if(i.object.isPerspectiveCamera){const Pe=i.object.position;I.copy(Pe).sub(i.target);let Me=I.length();Me*=Math.tan(i.object.fov/2*Math.PI/180),Z(2*te*Me/we.clientHeight,i.object.matrix),C(2*De*Me/we.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Z(te*(i.object.right-i.object.left)/i.object.zoom/we.clientWidth,i.object.matrix),C(De*(i.object.top-i.object.bottom)/i.object.zoom/we.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function U(I){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l/=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function j(I){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l*=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ne(I){if(!i.zoomToCursor)return;S=!0;const ue=i.domElement.getBoundingClientRect(),te=I.clientX-ue.left,De=I.clientY-ue.top,we=ue.width,Pe=ue.height;x.x=te/we*2-1,x.y=-(De/Pe)*2+1,y.set(x.x,x.y,1).unproject(i.object).sub(i.object.position).normalize()}function ee(I){return Math.max(i.minDistance,Math.min(i.maxDistance,I))}function k(I){f.set(I.clientX,I.clientY)}function D(I){ne(I),h.set(I.clientX,I.clientY)}function B(I){g.set(I.clientX,I.clientY)}function re(I){d.set(I.clientX,I.clientY),p.subVectors(d,f).multiplyScalar(i.rotateSpeed);const ue=i.domElement;z(2*Math.PI*p.x/ue.clientHeight),G(2*Math.PI*p.y/ue.clientHeight),f.copy(d),i.update()}function J(I){b.set(I.clientX,I.clientY),_.subVectors(b,h),_.y>0?U(T()):_.y<0&&j(T()),h.copy(b),i.update()}function W(I){v.set(I.clientX,I.clientY),m.subVectors(v,g).multiplyScalar(i.panSpeed),P(m.x,m.y),g.copy(v),i.update()}function ie(I){ne(I),I.deltaY<0?j(T()):I.deltaY>0&&U(T()),i.update()}function F(I){let ue=!1;switch(I.code){case i.keys.UP:I.ctrlKey||I.metaKey||I.shiftKey?G(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):P(0,i.keyPanSpeed),ue=!0;break;case i.keys.BOTTOM:I.ctrlKey||I.metaKey||I.shiftKey?G(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):P(0,-i.keyPanSpeed),ue=!0;break;case i.keys.LEFT:I.ctrlKey||I.metaKey||I.shiftKey?z(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):P(i.keyPanSpeed,0),ue=!0;break;case i.keys.RIGHT:I.ctrlKey||I.metaKey||I.shiftKey?z(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):P(-i.keyPanSpeed,0),ue=!0;break}ue&&(I.preventDefault(),i.update())}function K(){if(E.length===1)f.set(E[0].pageX,E[0].pageY);else{const I=.5*(E[0].pageX+E[1].pageX),ue=.5*(E[0].pageY+E[1].pageY);f.set(I,ue)}}function fe(){if(E.length===1)g.set(E[0].pageX,E[0].pageY);else{const I=.5*(E[0].pageX+E[1].pageX),ue=.5*(E[0].pageY+E[1].pageY);g.set(I,ue)}}function be(){const I=E[0].pageX-E[1].pageX,ue=E[0].pageY-E[1].pageY,te=Math.sqrt(I*I+ue*ue);h.set(0,te)}function ge(){i.enableZoom&&be(),i.enablePan&&fe()}function H(){i.enableZoom&&be(),i.enableRotate&&K()}function nt(I){if(E.length==1)d.set(I.pageX,I.pageY);else{const te=ve(I),De=.5*(I.pageX+te.x),we=.5*(I.pageY+te.y);d.set(De,we)}p.subVectors(d,f).multiplyScalar(i.rotateSpeed);const ue=i.domElement;z(2*Math.PI*p.x/ue.clientHeight),G(2*Math.PI*p.y/ue.clientHeight),f.copy(d)}function _e(I){if(E.length===1)v.set(I.pageX,I.pageY);else{const ue=ve(I),te=.5*(I.pageX+ue.x),De=.5*(I.pageY+ue.y);v.set(te,De)}m.subVectors(v,g).multiplyScalar(i.panSpeed),P(m.x,m.y),g.copy(v)}function Ce(I){const ue=ve(I),te=I.pageX-ue.x,De=I.pageY-ue.y,we=Math.sqrt(te*te+De*De);b.set(0,we),_.set(0,Math.pow(b.y/h.y,i.zoomSpeed)),U(_.y),h.copy(b)}function Te(I){i.enableZoom&&Ce(I),i.enablePan&&_e(I)}function Xe(I){i.enableZoom&&Ce(I),i.enableRotate&&nt(I)}function Ie(I){i.enabled!==!1&&(E.length===0&&(i.domElement.setPointerCapture(I.pointerId),i.domElement.addEventListener("pointermove",Ne),i.domElement.addEventListener("pointerup",qe)),ce(I),I.pointerType==="touch"?X(I):ot(I))}function Ne(I){i.enabled!==!1&&(I.pointerType==="touch"?se(I):ht(I))}function qe(I){Ee(I),E.length===0&&(i.domElement.releasePointerCapture(I.pointerId),i.domElement.removeEventListener("pointermove",Ne),i.domElement.removeEventListener("pointerup",qe)),i.dispatchEvent(Vl),o=r.NONE}function ot(I){let ue;switch(I.button){case 0:ue=i.mouseButtons.LEFT;break;case 1:ue=i.mouseButtons.MIDDLE;break;case 2:ue=i.mouseButtons.RIGHT;break;default:ue=-1}switch(ue){case on.DOLLY:if(i.enableZoom===!1)return;D(I),o=r.DOLLY;break;case on.ROTATE:if(I.ctrlKey||I.metaKey||I.shiftKey){if(i.enablePan===!1)return;B(I),o=r.PAN}else{if(i.enableRotate===!1)return;k(I),o=r.ROTATE}break;case on.PAN:if(I.ctrlKey||I.metaKey||I.shiftKey){if(i.enableRotate===!1)return;k(I),o=r.ROTATE}else{if(i.enablePan===!1)return;B(I),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(va)}function ht(I){switch(o){case r.ROTATE:if(i.enableRotate===!1)return;re(I);break;case r.DOLLY:if(i.enableZoom===!1)return;J(I);break;case r.PAN:if(i.enablePan===!1)return;W(I);break}}function R(I){i.enabled===!1||i.enableZoom===!1||o!==r.NONE||(I.preventDefault(),i.dispatchEvent(va),ie(I),i.dispatchEvent(Vl))}function w(I){i.enabled===!1||i.enablePan===!1||F(I)}function X(I){switch(he(I),E.length){case 1:switch(i.touches.ONE){case ni.ROTATE:if(i.enableRotate===!1)return;K(),o=r.TOUCH_ROTATE;break;case ni.PAN:if(i.enablePan===!1)return;fe(),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(i.touches.TWO){case ni.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ge(),o=r.TOUCH_DOLLY_PAN;break;case ni.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;H(),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(va)}function se(I){switch(he(I),o){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;nt(I),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;_e(I),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Te(I),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Xe(I),i.update();break;default:o=r.NONE}}function oe(I){i.enabled!==!1&&I.preventDefault()}function ce(I){E.push(I)}function Ee(I){delete L[I.pointerId];for(let ue=0;ue<E.length;ue++)if(E[ue].pointerId==I.pointerId){E.splice(ue,1);return}}function he(I){let ue=L[I.pointerId];ue===void 0&&(ue=new me,L[I.pointerId]=ue),ue.set(I.pageX,I.pageY)}function ve(I){const ue=I.pointerId===E[0].pointerId?E[1]:E[0];return L[ue.pointerId]}i.domElement.addEventListener("contextmenu",oe),i.domElement.addEventListener("pointerdown",Ie),i.domElement.addEventListener("pointercancel",qe),i.domElement.addEventListener("wheel",R,{passive:!1}),this.update()}}const Xb={type:"change"};class qb extends nn{constructor(e,t){super(),this.object=e,this.domElement=t,this.enabled=!0,this.movementSpeed=1,this.rollSpeed=.005,this.dragToLook=!1,this.autoForward=!1;const i=this,r=1e-6,o=new tn,s=new O;this.tmpQuaternion=new tn,this.status=0,this.moveState={up:0,down:0,left:0,right:0,forward:0,back:0,pitchUp:0,pitchDown:0,yawLeft:0,yawRight:0,rollLeft:0,rollRight:0},this.moveVector=new O(0,0,0),this.rotationVector=new O(0,0,0),this.keydown=function(g){if(!(g.altKey||this.enabled===!1)){switch(g.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=.1;break;case"KeyW":this.moveState.forward=1;break;case"KeyS":this.moveState.back=1;break;case"KeyA":this.moveState.left=1;break;case"KeyD":this.moveState.right=1;break;case"KeyR":this.moveState.up=1;break;case"KeyF":this.moveState.down=1;break;case"ArrowUp":this.moveState.pitchUp=1;break;case"ArrowDown":this.moveState.pitchDown=1;break;case"ArrowLeft":this.moveState.yawLeft=1;break;case"ArrowRight":this.moveState.yawRight=1;break;case"KeyQ":this.moveState.rollLeft=1;break;case"KeyE":this.moveState.rollRight=1;break}this.updateMovementVector(),this.updateRotationVector()}},this.keyup=function(g){if(this.enabled!==!1){switch(g.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=1;break;case"KeyW":this.moveState.forward=0;break;case"KeyS":this.moveState.back=0;break;case"KeyA":this.moveState.left=0;break;case"KeyD":this.moveState.right=0;break;case"KeyR":this.moveState.up=0;break;case"KeyF":this.moveState.down=0;break;case"ArrowUp":this.moveState.pitchUp=0;break;case"ArrowDown":this.moveState.pitchDown=0;break;case"ArrowLeft":this.moveState.yawLeft=0;break;case"ArrowRight":this.moveState.yawRight=0;break;case"KeyQ":this.moveState.rollLeft=0;break;case"KeyE":this.moveState.rollRight=0;break}this.updateMovementVector(),this.updateRotationVector()}},this.pointerdown=function(g){if(this.enabled!==!1)if(this.dragToLook)this.status++;else{switch(g.button){case 0:this.moveState.forward=1;break;case 2:this.moveState.back=1;break}this.updateMovementVector()}},this.pointermove=function(g){if(this.enabled!==!1&&(!this.dragToLook||this.status>0)){const v=this.getContainerDimensions(),m=v.size[0]/2,h=v.size[1]/2;this.moveState.yawLeft=-(g.pageX-v.offset[0]-m)/m,this.moveState.pitchDown=(g.pageY-v.offset[1]-h)/h,this.updateRotationVector()}},this.pointerup=function(g){if(this.enabled!==!1){if(this.dragToLook)this.status--,this.moveState.yawLeft=this.moveState.pitchDown=0;else{switch(g.button){case 0:this.moveState.forward=0;break;case 2:this.moveState.back=0;break}this.updateMovementVector()}this.updateRotationVector()}},this.pointercancel=function(){this.enabled!==!1&&(this.dragToLook?(this.status=0,this.moveState.yawLeft=this.moveState.pitchDown=0):(this.moveState.forward=0,this.moveState.back=0,this.updateMovementVector()),this.updateRotationVector())},this.contextMenu=function(g){this.enabled!==!1&&g.preventDefault()},this.update=function(g){if(this.enabled===!1)return;const v=g*i.movementSpeed,m=g*i.rollSpeed;i.object.translateX(i.moveVector.x*v),i.object.translateY(i.moveVector.y*v),i.object.translateZ(i.moveVector.z*v),i.tmpQuaternion.set(i.rotationVector.x*m,i.rotationVector.y*m,i.rotationVector.z*m,1).normalize(),i.object.quaternion.multiply(i.tmpQuaternion),(s.distanceToSquared(i.object.position)>r||8*(1-o.dot(i.object.quaternion))>r)&&(i.dispatchEvent(Xb),o.copy(i.object.quaternion),s.copy(i.object.position))},this.updateMovementVector=function(){const g=this.moveState.forward||this.autoForward&&!this.moveState.back?1:0;this.moveVector.x=-this.moveState.left+this.moveState.right,this.moveVector.y=-this.moveState.down+this.moveState.up,this.moveVector.z=-g+this.moveState.back},this.updateRotationVector=function(){this.rotationVector.x=-this.moveState.pitchDown+this.moveState.pitchUp,this.rotationVector.y=-this.moveState.yawRight+this.moveState.yawLeft,this.rotationVector.z=-this.moveState.rollRight+this.moveState.rollLeft},this.getContainerDimensions=function(){return this.domElement!=document?{size:[this.domElement.offsetWidth,this.domElement.offsetHeight],offset:[this.domElement.offsetLeft,this.domElement.offsetTop]}:{size:[window.innerWidth,window.innerHeight],offset:[0,0]}},this.dispose=function(){this.domElement.removeEventListener("contextmenu",a),this.domElement.removeEventListener("pointerdown",l),this.domElement.removeEventListener("pointermove",c),this.domElement.removeEventListener("pointerup",u),this.domElement.removeEventListener("pointercancel",f),window.removeEventListener("keydown",d),window.removeEventListener("keyup",p)};const a=this.contextMenu.bind(this),c=this.pointermove.bind(this),l=this.pointerdown.bind(this),u=this.pointerup.bind(this),f=this.pointercancel.bind(this),d=this.keydown.bind(this),p=this.keyup.bind(this);this.domElement.addEventListener("contextmenu",a),this.domElement.addEventListener("pointerdown",l),this.domElement.addEventListener("pointermove",c),this.domElement.addEventListener("pointerup",u),this.domElement.addEventListener("pointercancel",f),window.addEventListener("keydown",d),window.addEventListener("keyup",p),this.updateMovementVector(),this.updateRotationVector()}}const $b={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Mo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Yb=new ns(-1,1,1,-1,0,1);class Kb extends Bt{constructor(){super(),this.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new lt([0,2,0,0,2,0],2))}}const Zb=new Kb;class Jb{constructor(e){this._mesh=new Jt(Zb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Yb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Qb extends Mo{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof wn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=bu.clone(e.uniforms),this.material=new wn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Jb(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class jl extends Mo{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let s,a;this.inverse?(s=0,a=1):(s=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),o.buffers.stencil.setFunc(r.ALWAYS,s,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(r.EQUAL,1,4294967295),o.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),o.buffers.stencil.setLocked(!0)}}class eM extends Mo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class tM{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new me);this._width=i.width,this._height=i.height,t=new kn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Li}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Qb($b),this.copyPass.material.blending=Mn,this.clock=new Iu}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,o=this.passes.length;r<o;r++){const s=this.passes[r];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}jl!==void 0&&(s instanceof jl?i=!0:s instanceof eM&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class nM extends Mo{constructor(e,t,i=null,r=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new je}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let o,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=r}}function Ha(){return Ha=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Ha.apply(this,arguments)}function iM(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function hr(n,e){return hr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},hr(n,e)}function rM(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,hr(n,e)}function Ga(n){return Ga=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Ga(n)}function oM(n){try{return Function.toString.call(n).indexOf("[native code]")!==-1}catch{return typeof n=="function"}}function aM(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Kr(n,e,t){return aM()?Kr=Reflect.construct.bind():Kr=function(r,o,s){var a=[null];a.push.apply(a,o);var c=Function.bind.apply(r,a),l=new c;return s&&hr(l,s.prototype),l},Kr.apply(null,arguments)}function Va(n){var e=typeof Map=="function"?new Map:void 0;return Va=function(i){if(i===null||!oM(i))return i;if(typeof i!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(i))return e.get(i);e.set(i,r)}function r(){return Kr(i,arguments,Ga(this).constructor)}return r.prototype=Object.create(i.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),hr(r,i)},Va(n)}var wi=function(n){rM(e,n);function e(t){var i;return i=n.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+t+" for more information.")||this,iM(i)}return e}(Va(Error));function _a(n){return Math.round(n*255)}function sM(n,e,t){return _a(n)+","+_a(e)+","+_a(t)}function Xl(n,e,t,i){if(i===void 0&&(i=sM),e===0)return i(t,t,t);var r=(n%360+360)%360/60,o=(1-Math.abs(2*t-1))*e,s=o*(1-Math.abs(r%2-1)),a=0,c=0,l=0;r>=0&&r<1?(a=o,c=s):r>=1&&r<2?(a=s,c=o):r>=2&&r<3?(c=o,l=s):r>=3&&r<4?(c=s,l=o):r>=4&&r<5?(a=s,l=o):r>=5&&r<6&&(a=o,l=s);var u=t-o/2,f=a+u,d=c+u,p=l+u;return i(f,d,p)}var ql={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function cM(n){if(typeof n!="string")return n;var e=n.toLowerCase();return ql[e]?"#"+ql[e]:n}var lM=/^#[a-fA-F0-9]{6}$/,uM=/^#[a-fA-F0-9]{8}$/,fM=/^#[a-fA-F0-9]{3}$/,hM=/^#[a-fA-F0-9]{4}$/,ya=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,dM=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,pM=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,mM=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function bs(n){if(typeof n!="string")throw new wi(3);var e=cM(n);if(e.match(lM))return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16)};if(e.match(uM)){var t=parseFloat((parseInt(""+e[7]+e[8],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16),alpha:t}}if(e.match(fM))return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16)};if(e.match(hM)){var i=parseFloat((parseInt(""+e[4]+e[4],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16),alpha:i}}var r=ya.exec(e);if(r)return{red:parseInt(""+r[1],10),green:parseInt(""+r[2],10),blue:parseInt(""+r[3],10)};var o=dM.exec(e.substring(0,50));if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10),alpha:parseFloat(""+o[4])>1?parseFloat(""+o[4])/100:parseFloat(""+o[4])};var s=pM.exec(e);if(s){var a=parseInt(""+s[1],10),c=parseInt(""+s[2],10)/100,l=parseInt(""+s[3],10)/100,u="rgb("+Xl(a,c,l)+")",f=ya.exec(u);if(!f)throw new wi(4,e,u);return{red:parseInt(""+f[1],10),green:parseInt(""+f[2],10),blue:parseInt(""+f[3],10)}}var d=mM.exec(e.substring(0,50));if(d){var p=parseInt(""+d[1],10),g=parseInt(""+d[2],10)/100,v=parseInt(""+d[3],10)/100,m="rgb("+Xl(p,g,v)+")",h=ya.exec(m);if(!h)throw new wi(4,e,m);return{red:parseInt(""+h[1],10),green:parseInt(""+h[2],10),blue:parseInt(""+h[3],10),alpha:parseFloat(""+d[4])>1?parseFloat(""+d[4])/100:parseFloat(""+d[4])}}throw new wi(5)}var gM=function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},$l=gM;function xi(n){var e=n.toString(16);return e.length===1?"0"+e:e}function Yl(n,e,t){if(typeof n=="number"&&typeof e=="number"&&typeof t=="number")return $l("#"+xi(n)+xi(e)+xi(t));if(typeof n=="object"&&e===void 0&&t===void 0)return $l("#"+xi(n.red)+xi(n.green)+xi(n.blue));throw new wi(6)}function vM(n,e,t,i){if(typeof n=="string"&&typeof e=="number"){var r=bs(n);return"rgba("+r.red+","+r.green+","+r.blue+","+e+")"}else{if(typeof n=="number"&&typeof e=="number"&&typeof t=="number"&&typeof i=="number")return i>=1?Yl(n,e,t):"rgba("+n+","+e+","+t+","+i+")";if(typeof n=="object"&&e===void 0&&t===void 0&&i===void 0)return n.alpha>=1?Yl(n.red,n.green,n.blue):"rgba("+n.red+","+n.green+","+n.blue+","+n.alpha+")"}throw new wi(7)}function Tf(n,e,t){return function(){var r=t.concat(Array.prototype.slice.call(arguments));return r.length>=e?n.apply(this,r):Tf(n,e,r)}}function _M(n){return Tf(n,n.length,[])}function yM(n,e,t){return Math.max(n,Math.min(e,t))}function xM(n,e){if(e==="transparent")return e;var t=bs(e),i=typeof t.alpha=="number"?t.alpha:1,r=Ha({},t,{alpha:yM(0,1,(i*100+parseFloat(n)*100)/100)});return vM(r)}var bM=_M(xM),MM=bM,Qn=Object.freeze({Linear:Object.freeze({None:function(n){return n},In:function(n){return this.None(n)},Out:function(n){return this.None(n)},InOut:function(n){return this.None(n)}}),Quadratic:Object.freeze({In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}}),Cubic:Object.freeze({In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}}),Quartic:Object.freeze({In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}}),Quintic:Object.freeze({In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}}),Sinusoidal:Object.freeze({In:function(n){return 1-Math.sin((1-n)*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return .5*(1-Math.sin(Math.PI*(.5-n)))}}),Exponential:Object.freeze({In:function(n){return n===0?0:Math.pow(1024,n-1)},Out:function(n){return n===1?1:1-Math.pow(2,-10*n)},InOut:function(n){return n===0?0:n===1?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)}}),Circular:Object.freeze({In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}}),Elastic:Object.freeze({In:function(n){return n===0?0:n===1?1:-Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI)},Out:function(n){return n===0?0:n===1?1:Math.pow(2,-10*n)*Math.sin((n-.1)*5*Math.PI)+1},InOut:function(n){return n===0?0:n===1?1:(n*=2,n<1?-.5*Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI):.5*Math.pow(2,-10*(n-1))*Math.sin((n-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(n){var e=1.70158;return n===1?1:n*n*((e+1)*n-e)},Out:function(n){var e=1.70158;return n===0?0:--n*n*((e+1)*n+e)+1},InOut:function(n){var e=2.5949095;return(n*=2)<1?.5*(n*n*((e+1)*n-e)):.5*((n-=2)*n*((e+1)*n+e)+2)}}),Bounce:Object.freeze({In:function(n){return 1-Qn.Bounce.Out(1-n)},Out:function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return n<.5?Qn.Bounce.In(n*2)*.5:Qn.Bounce.Out(n*2-1)*.5+.5}}),generatePow:function(n){return n===void 0&&(n=4),n=n<Number.EPSILON?Number.EPSILON:n,n=n>1e4?1e4:n,{In:function(e){return Math.pow(e,n)},Out:function(e){return 1-Math.pow(1-e,n)},InOut:function(e){return e<.5?Math.pow(e*2,n)/2:(1-Math.pow(2-e*2,n))/2+.5}}}}),tr=function(){return performance.now()},SM=function(){function n(){this._tweens={},this._tweensAddedDuringUpdate={}}return n.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},n.prototype.removeAll=function(){this._tweens={}},n.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},n.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},n.prototype.update=function(e,t){e===void 0&&(e=tr()),t===void 0&&(t=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<i.length;r++){var o=this._tweens[i[r]],s=!t;o&&o.update(e,s)===!1&&!t&&delete this._tweens[i[r]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},n}(),Ti={Linear:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),o=Ti.Utils.Linear;return e<0?o(n[0],n[1],i):e>1?o(n[t],n[t-1],t-i):o(n[r],n[r+1>t?t:r+1],i-r)},Bezier:function(n,e){for(var t=0,i=n.length-1,r=Math.pow,o=Ti.Utils.Bernstein,s=0;s<=i;s++)t+=r(1-e,i-s)*r(e,s)*n[s]*o(i,s);return t},CatmullRom:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),o=Ti.Utils.CatmullRom;return n[0]===n[t]?(e<0&&(r=Math.floor(i=t*(1+e))),o(n[(r-1+t)%t],n[r],n[(r+1)%t],n[(r+2)%t],i-r)):e<0?n[0]-(o(n[0],n[0],n[1],n[1],-i)-n[0]):e>1?n[t]-(o(n[t],n[t],n[t-1],n[t-1],i-t)-n[t]):o(n[r?r-1:0],n[r],n[t<r+1?t:r+1],n[t<r+2?t:r+2],i-r)},Utils:{Linear:function(n,e,t){return(e-n)*t+n},Bernstein:function(n,e){var t=Ti.Utils.Factorial;return t(n)/t(e)/t(n-e)},Factorial:function(){var n=[1];return function(e){var t=1;if(n[e])return n[e];for(var i=e;i>1;i--)t*=i;return n[e]=t,t}}(),CatmullRom:function(n,e,t,i,r){var o=(t-n)*.5,s=(i-e)*.5,a=r*r,c=r*a;return(2*e-2*t+o+s)*c+(-3*e+3*t-2*o-s)*a+o*r+e}}},EM=function(){function n(){}return n.nextId=function(){return n._nextId++},n._nextId=0,n}(),Wa=new SM,Kl=function(){function n(e,t){t===void 0&&(t=Wa),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Qn.Linear.None,this._interpolationFunction=Ti.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=EM.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return n.prototype.getId=function(){return this._id},n.prototype.isPlaying=function(){return this._isPlaying},n.prototype.isPaused=function(){return this._isPaused},n.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t,this},n.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e,this},n.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},n.prototype.start=function(e,t){if(e===void 0&&(e=tr()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var r={};for(var o in this._valuesEnd)r[o]=this._valuesEnd[o];this._valuesEnd=r}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},n.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},n.prototype._setupProperties=function(e,t,i,r,o){for(var s in i){var a=e[s],c=Array.isArray(a),l=c?"array":typeof a,u=!c&&Array.isArray(i[s]);if(!(l==="undefined"||l==="function")){if(u){var f=i[s];if(f.length===0)continue;for(var d=[a],p=0,g=f.length;p<g;p+=1){var v=this._handleRelativeValue(a,f[p]);if(isNaN(v)){u=!1,console.warn("Found invalid interpolation list. Skipping.");break}d.push(v)}u&&(i[s]=d)}if((l==="object"||c)&&a&&!u){t[s]=c?[]:{};var m=a;for(var h in m)t[s][h]=m[h];r[s]=c?[]:{};var f=i[s];if(!this._isDynamic){var b={};for(var h in f)b[h]=f[h];i[s]=f=b}this._setupProperties(m,t[s],f,r[s],o)}else(typeof t[s]>"u"||o)&&(t[s]=a),c||(t[s]*=1),u?r[s]=i[s].slice().reverse():r[s]=t[s]||0}}},n.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},n.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},n.prototype.pause=function(e){return e===void 0&&(e=tr()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},n.prototype.resume=function(e){return e===void 0&&(e=tr()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},n.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},n.prototype.group=function(e){return e===void 0&&(e=Wa),this._group=e,this},n.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},n.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},n.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},n.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},n.prototype.easing=function(e){return e===void 0&&(e=Qn.Linear.None),this._easingFunction=e,this},n.prototype.interpolation=function(e){return e===void 0&&(e=Ti.Linear),this._interpolationFunction=e,this},n.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},n.prototype.onStart=function(e){return this._onStartCallback=e,this},n.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},n.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},n.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},n.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},n.prototype.onStop=function(e){return this._onStopCallback=e,this},n.prototype.update=function(e,t){if(e===void 0&&(e=tr()),t===void 0&&(t=!0),this._isPaused)return!0;var i,r,o=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>o)return!1;t&&this.start(e,!0)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0),r=(e-this._startTime)/this._duration,r=this._duration===0||r>1?1:r;var s=this._easingFunction(r);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,s),this._onUpdateCallback&&this._onUpdateCallback(this._object,r),r===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(i in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[i]=="string"&&(this._valuesStartRepeat[i]=this._valuesStartRepeat[i]+parseFloat(this._valuesEnd[i])),this._yoyo&&this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var a=0,c=this._chainedTweens.length;a<c;a++)this._chainedTweens[a].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},n.prototype._updateProperties=function(e,t,i,r){for(var o in i)if(t[o]!==void 0){var s=t[o]||0,a=i[o],c=Array.isArray(e[o]),l=Array.isArray(a),u=!c&&l;u?e[o]=this._interpolationFunction(a,r):typeof a=="object"&&a?this._updateProperties(e[o],s,a,r):(a=this._handleRelativeValue(s,a),typeof a=="number"&&(e[o]=s+(a-s)*r))}},n.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},n.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],i=this._valuesEnd[e];typeof i=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(i):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},n}(),sn=Wa;sn.getAll.bind(sn);sn.removeAll.bind(sn);sn.add.bind(sn);sn.remove.bind(sn);var wM=sn.update.bind(sn);function TM(n,e){e===void 0&&(e={});var t=e.insertAt;if(!(!n||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n))}}var AM=`.scene-nav-info {
  bottom: 5px;
  width: 100%;
  text-align: center;
  color: slategrey;
  opacity: 0.7;
  font-size: 10px;
}

.scene-tooltip {
  top: 0;
  color: lavender;
  font-size: 15px;
}

.scene-nav-info, .scene-tooltip {
  position: absolute;
  font-family: sans-serif;
  pointer-events: none;
  user-select: none;
}

.scene-container canvas:focus {
  outline: none;
}`;TM(AM);function CM(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,o,s,a=[],c=!0,l=!1;try{if(o=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(i=o.call(t)).done)&&(a.push(i.value),a.length!==e);c=!0);}catch(u){l=!0,r=u}finally{try{if(!c&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(l)throw r}}return a}}function RM(n,e,t){return e=FM(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function PM(n,e){return DM(n)||CM(n,e)||Af(n,e)||UM()}function Ki(n){return LM(n)||OM(n)||Af(n)||IM()}function LM(n){if(Array.isArray(n))return ja(n)}function DM(n){if(Array.isArray(n))return n}function OM(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Af(n,e){if(n){if(typeof n=="string")return ja(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ja(n,e)}}function ja(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function IM(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function UM(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function NM(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function FM(n){var e=NM(n,"string");return typeof e=="symbol"?e:String(e)}var et=window.THREE?window.THREE:{WebGLRenderer:Ru,Scene:t_,PerspectiveCamera:Gt,Raycaster:Uu,SRGBColorSpace:mt,TextureLoader:M_,Vector2:me,Vector3:O,Box3:ti,Color:je,Mesh:Jt,SphereGeometry:yo,MeshBasicMaterial:Qa,BackSide:Rt,EventDispatcher:nn,MOUSE:on,Quaternion:tn,Spherical:La,Clock:Iu},Cf=ys({props:{width:{default:window.innerWidth,onChange:function(e,t,i){isNaN(e)&&(t.width=i)}},height:{default:window.innerHeight,onChange:function(e,t,i){isNaN(e)&&(t.height=i)}},backgroundColor:{default:"#000011"},backgroundImageUrl:{},onBackgroundImageLoaded:{},showNavInfo:{default:!0},skyRadius:{default:5e4},objects:{default:[]},lights:{default:[]},enablePointerInteraction:{default:!0,onChange:function(e,t){t.hoverObj=null,t.toolTipElem&&(t.toolTipElem.innerHTML="")},triggerUpdate:!1},lineHoverPrecision:{default:1,triggerUpdate:!1},hoverOrderComparator:{default:function(){return-1},triggerUpdate:!1},hoverFilter:{default:function(){return!0},triggerUpdate:!1},tooltipContent:{triggerUpdate:!1},hoverDuringDrag:{default:!1,triggerUpdate:!1},clickAfterDrag:{default:!1,triggerUpdate:!1},onHover:{default:function(){},triggerUpdate:!1},onClick:{default:function(){},triggerUpdate:!1},onRightClick:{triggerUpdate:!1}},methods:{tick:function(e){if(e.initialised){if(e.controls.update&&e.controls.update(e.clock.getDelta()),e.postProcessingComposer?e.postProcessingComposer.render():e.renderer.render(e.scene,e.camera),e.extraRenderers.forEach(function(o){return o.render(e.scene,e.camera)}),e.enablePointerInteraction){var t=null;if(e.hoverDuringDrag||!e.isPointerDragging){var i=this.intersectingObjects(e.pointerPos.x,e.pointerPos.y).filter(function(o){return e.hoverFilter(o.object)}).sort(function(o,s){return e.hoverOrderComparator(o.object,s.object)}),r=i.length?i[0]:null;t=r?r.object:null,e.intersectionPoint=r?r.point:null}t!==e.hoverObj&&(e.onHover(t,e.hoverObj),e.toolTipElem.innerHTML=t&&$e(e.tooltipContent)(t)||"",e.hoverObj=t)}wM()}return this},getPointerPos:function(e){var t=e.pointerPos,i=t.x,r=t.y;return{x:i,y:r}},cameraPosition:function(e,t,i,r){var o=e.camera;if(t&&e.initialised){var s=t,a=i||{x:0,y:0,z:0};if(!r)u(s),f(a);else{var c=Object.assign({},o.position),l=d();new Kl(c).to(s,r).easing(Qn.Quadratic.Out).onUpdate(u).start(),new Kl(l).to(a,r/3).easing(Qn.Quadratic.Out).onUpdate(f).start()}return this}return Object.assign({},o.position,{lookAt:d()});function u(p){var g=p.x,v=p.y,m=p.z;g!==void 0&&(o.position.x=g),v!==void 0&&(o.position.y=v),m!==void 0&&(o.position.z=m)}function f(p){var g=new et.Vector3(p.x,p.y,p.z);e.controls.target?e.controls.target=g:o.lookAt(g)}function d(){return Object.assign(new et.Vector3(0,0,-1e3).applyQuaternion(o.quaternion).add(o.position))}},zoomToFit:function(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:10,r=arguments.length,o=new Array(r>3?r-3:0),s=3;s<r;s++)o[s-3]=arguments[s];return this.fitToBbox(this.getBbox.apply(this,o),t,i)},fitToBbox:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:10,o=e.camera;if(t){var s=new et.Vector3(0,0,0),a=Math.max.apply(Math,Ki(Object.entries(t).map(function(p){var g=PM(p,2),v=g[0],m=g[1];return Math.max.apply(Math,Ki(m.map(function(h){return Math.abs(s[v]-h)})))})))*2,c=(1-r*2/e.height)*o.fov,l=a/Math.atan(c*Math.PI/180),u=l/o.aspect,f=Math.max(l,u);if(f>0){var d=s.clone().sub(o.position).normalize().multiplyScalar(-f);this.cameraPosition(d,s,i)}}return this},getBbox:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return!0},i=new et.Box3(new et.Vector3(0,0,0),new et.Vector3(0,0,0)),r=e.objects.filter(t);return r.length?(r.forEach(function(o){return i.expandByObject(o)}),Object.assign.apply(Object,Ki(["x","y","z"].map(function(o){return RM({},o,[i.min[o],i.max[o]])})))):null},getScreenCoords:function(e,t,i,r){var o=new et.Vector3(t,i,r);return o.project(this.camera()),{x:(o.x+1)*e.width/2,y:-(o.y-1)*e.height/2}},getSceneCoords:function(e,t,i){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,o=new et.Vector2(t/e.width*2-1,-(i/e.height)*2+1),s=new et.Raycaster;return s.setFromCamera(o,e.camera),Object.assign({},s.ray.at(r,new et.Vector3))},intersectingObjects:function(e,t,i){var r=new et.Vector2(t/e.width*2-1,-(i/e.height)*2+1),o=new et.Raycaster;return o.params.Line.threshold=e.lineHoverPrecision,o.setFromCamera(r,e.camera),o.intersectObjects(e.objects,!0)},renderer:function(e){return e.renderer},scene:function(e){return e.scene},camera:function(e){return e.camera},postProcessingComposer:function(e){return e.postProcessingComposer},controls:function(e){return e.controls},tbControls:function(e){return e.controls}},stateInit:function(){return{scene:new et.Scene,camera:new et.PerspectiveCamera,clock:new et.Clock}},init:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=i.controlType,o=r===void 0?"trackball":r,s=i.rendererConfig,a=s===void 0?{}:s,c=i.extraRenderers,l=c===void 0?[]:c,u=i.waitForLoadComplete,f=u===void 0?!0:u;e.innerHTML="",e.appendChild(t.container=document.createElement("div")),t.container.className="scene-container",t.container.style.position="relative",t.container.appendChild(t.navInfo=document.createElement("div")),t.navInfo.className="scene-nav-info",t.navInfo.textContent={orbit:"Left-click: rotate, Mouse-wheel/middle-click: zoom, Right-click: pan",trackball:"Left-click: rotate, Mouse-wheel/middle-click: zoom, Right-click: pan",fly:"WASD: move, R|F: up | down, Q|E: roll, up|down: pitch, left|right: yaw"}[o]||"",t.navInfo.style.display=t.showNavInfo?null:"none",t.toolTipElem=document.createElement("div"),t.toolTipElem.classList.add("scene-tooltip"),t.container.appendChild(t.toolTipElem),t.pointerPos=new et.Vector2,t.pointerPos.x=-2,t.pointerPos.y=-2,["pointermove","pointerdown"].forEach(function(d){return t.container.addEventListener(d,function(p){if(d==="pointerdown"&&(t.isPointerPressed=!0),!t.isPointerDragging&&p.type==="pointermove"&&(p.pressure>0||t.isPointerPressed)&&(p.pointerType!=="touch"||p.movementX===void 0||[p.movementX,p.movementY].some(function(m){return Math.abs(m)>1}))&&(t.isPointerDragging=!0),t.enablePointerInteraction){var g=v(t.container);t.pointerPos.x=p.pageX-g.left,t.pointerPos.y=p.pageY-g.top,t.toolTipElem.style.top="".concat(t.pointerPos.y,"px"),t.toolTipElem.style.left="".concat(t.pointerPos.x,"px"),t.toolTipElem.style.transform="translate(-".concat(t.pointerPos.x/t.width*100,"%, ").concat(t.height-t.pointerPos.y<100?"calc(-100% - 8px)":"21px",")")}function v(m){var h=m.getBoundingClientRect(),b=window.pageXOffset||document.documentElement.scrollLeft,_=window.pageYOffset||document.documentElement.scrollTop;return{top:h.top+_,left:h.left+b}}},{passive:!0})}),t.container.addEventListener("pointerup",function(d){t.isPointerPressed=!1,!(t.isPointerDragging&&(t.isPointerDragging=!1,!t.clickAfterDrag))&&requestAnimationFrame(function(){d.button===0&&t.onClick(t.hoverObj||null,d,t.intersectionPoint),d.button===2&&t.onRightClick&&t.onRightClick(t.hoverObj||null,d,t.intersectionPoint)})},{passive:!0,capture:!0}),t.container.addEventListener("contextmenu",function(d){t.onRightClick&&d.preventDefault()}),t.renderer=new et.WebGLRenderer(Object.assign({antialias:!0,alpha:!0},a)),t.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio)),t.container.appendChild(t.renderer.domElement),t.extraRenderers=l,t.extraRenderers.forEach(function(d){d.domElement.style.position="absolute",d.domElement.style.top="0px",d.domElement.style.pointerEvents="none",t.container.appendChild(d.domElement)}),t.postProcessingComposer=new tM(t.renderer),t.postProcessingComposer.addPass(new nM(t.scene,t.camera)),t.controls=new{trackball:Vb,orbit:jb,fly:qb}[o](t.camera,t.renderer.domElement),o==="fly"&&(t.controls.movementSpeed=300,t.controls.rollSpeed=Math.PI/6,t.controls.dragToLook=!0),(o==="trackball"||o==="orbit")&&(t.controls.minDistance=.1,t.controls.maxDistance=t.skyRadius,t.controls.addEventListener("start",function(){t.controlsEngaged=!0}),t.controls.addEventListener("change",function(){t.controlsEngaged&&(t.controlsDragging=!0)}),t.controls.addEventListener("end",function(){t.controlsEngaged=!1,t.controlsDragging=!1})),[t.renderer,t.postProcessingComposer].concat(Ki(t.extraRenderers)).forEach(function(d){return d.setSize(t.width,t.height)}),t.camera.aspect=t.width/t.height,t.camera.updateProjectionMatrix(),t.camera.position.z=1e3,t.scene.add(t.skysphere=new et.Mesh),t.skysphere.visible=!1,t.loadComplete=t.scene.visible=!f,window.scene=t.scene},update:function(e,t){if(e.width&&e.height&&(t.hasOwnProperty("width")||t.hasOwnProperty("height"))&&(e.container.style.width="".concat(e.width,"px"),e.container.style.height="".concat(e.height,"px"),[e.renderer,e.postProcessingComposer].concat(Ki(e.extraRenderers)).forEach(function(o){return o.setSize(e.width,e.height)}),e.camera.aspect=e.width/e.height,e.camera.updateProjectionMatrix()),t.hasOwnProperty("skyRadius")&&e.skyRadius&&(e.controls.hasOwnProperty("maxDistance")&&t.skyRadius&&(e.controls.maxDistance=Math.min(e.controls.maxDistance,e.skyRadius)),e.camera.far=e.skyRadius*2.5,e.camera.updateProjectionMatrix(),e.skysphere.geometry=new et.SphereGeometry(e.skyRadius)),t.hasOwnProperty("backgroundColor")){var i=bs(e.backgroundColor).alpha;i===void 0&&(i=1),e.renderer.setClearColor(new et.Color(MM(1,e.backgroundColor)),i)}t.hasOwnProperty("backgroundImageUrl")&&(e.backgroundImageUrl?new et.TextureLoader().load(e.backgroundImageUrl,function(o){o.colorSpace=et.SRGBColorSpace,e.skysphere.material=new et.MeshBasicMaterial({map:o,side:et.BackSide}),e.skysphere.visible=!0,e.onBackgroundImageLoaded&&setTimeout(e.onBackgroundImageLoaded),!e.loadComplete&&r()}):(e.skysphere.visible=!1,e.skysphere.material.map=null,!e.loadComplete&&r())),t.hasOwnProperty("showNavInfo")&&(e.navInfo.style.display=e.showNavInfo?null:"none"),t.hasOwnProperty("lights")&&((t.lights||[]).forEach(function(o){return e.scene.remove(o)}),e.lights.forEach(function(o){return e.scene.add(o)})),t.hasOwnProperty("objects")&&((t.objects||[]).forEach(function(o){return e.scene.remove(o)}),e.objects.forEach(function(o){return e.scene.add(o)}));function r(){e.loadComplete=e.scene.visible=!0}}});function BM(n,e){e===void 0&&(e={});var t=e.insertAt;if(!(!n||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n))}}var kM=`.graph-info-msg {
  top: 50%;
  width: 100%;
  text-align: center;
  color: lavender;
  opacity: 0.7;
  font-size: 22px;
  position: absolute;
  font-family: Sans-serif;
}

.scene-container .clickable {
  cursor: pointer;
}

.scene-container .grabbable {
  cursor: move;
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
}

.scene-container .grabbable:active {
  cursor: grabbing;
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
}`;BM(kM);function Zl(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Xr(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Zl(Object(t),!0).forEach(function(i){mr(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Zl(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function mr(n,e,t){return e=jM(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function So(n){return zM(n)||HM(n)||GM(n)||VM()}function zM(n){if(Array.isArray(n))return Xa(n)}function HM(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function GM(n,e){if(n){if(typeof n=="string")return Xa(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Xa(n,e)}}function Xa(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function VM(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function WM(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function jM(n){var e=WM(n,"string");return typeof e=="symbol"?e:String(e)}function Rf(n,e){var t=new e;return t._destructor&&t._destructor(),{linkProp:function(r){return{default:t[r](),onChange:function(s,a){a[n][r](s)},triggerUpdate:!1}},linkMethod:function(r){return function(o){for(var s=o[n],a=arguments.length,c=new Array(a>1?a-1:0),l=1;l<a;l++)c[l-1]=arguments[l];var u=s[r].apply(s,c);return u===s?this:u}}}}var Jl=window.THREE?window.THREE:{AmbientLight:T_,DirectionalLight:w_,Vector3:O},XM=170,Pf=Rf("forceGraph",wf),qM=Object.assign.apply(Object,So(["jsonUrl","graphData","numDimensions","dagMode","dagLevelDistance","dagNodeFilter","onDagError","nodeRelSize","nodeId","nodeVal","nodeResolution","nodeColor","nodeAutoColorBy","nodeOpacity","nodeVisibility","nodeThreeObject","nodeThreeObjectExtend","linkSource","linkTarget","linkVisibility","linkColor","linkAutoColorBy","linkOpacity","linkWidth","linkResolution","linkCurvature","linkCurveRotation","linkMaterial","linkThreeObject","linkThreeObjectExtend","linkPositionUpdate","linkDirectionalArrowLength","linkDirectionalArrowColor","linkDirectionalArrowRelPos","linkDirectionalArrowResolution","linkDirectionalParticles","linkDirectionalParticleSpeed","linkDirectionalParticleWidth","linkDirectionalParticleColor","linkDirectionalParticleResolution","forceEngine","d3AlphaDecay","d3VelocityDecay","d3AlphaMin","ngraphPhysics","warmupTicks","cooldownTicks","cooldownTime","onEngineTick","onEngineStop"].map(function(n){return mr({},n,Pf.linkProp(n))}))),$M=Object.assign.apply(Object,So(["refresh","getGraphBbox","d3Force","d3ReheatSimulation","emitParticle"].map(function(n){return mr({},n,Pf.linkMethod(n))}))),Zr=Rf("renderObjs",Cf),YM=Object.assign.apply(Object,So(["width","height","backgroundColor","showNavInfo","enablePointerInteraction"].map(function(n){return mr({},n,Zr.linkProp(n))}))),KM=Object.assign.apply(Object,So(["lights","cameraPosition","postProcessingComposer"].map(function(n){return mr({},n,Zr.linkMethod(n))})).concat([{graph2ScreenCoords:Zr.linkMethod("getScreenCoords"),screen2GraphCoords:Zr.linkMethod("getSceneCoords")}])),ZM=ys({props:Xr(Xr({nodeLabel:{default:"name",triggerUpdate:!1},linkLabel:{default:"name",triggerUpdate:!1},linkHoverPrecision:{default:1,onChange:function(e,t){return t.renderObjs.lineHoverPrecision(e)},triggerUpdate:!1},enableNavigationControls:{default:!0,onChange:function(e,t){var i=t.renderObjs.controls();i&&(i.enabled=e,e&&i.domElement&&i.domElement.dispatchEvent(new PointerEvent("pointerup")))},triggerUpdate:!1},enableNodeDrag:{default:!0,triggerUpdate:!1},onNodeDrag:{default:function(){},triggerUpdate:!1},onNodeDragEnd:{default:function(){},triggerUpdate:!1},onNodeClick:{triggerUpdate:!1},onNodeRightClick:{triggerUpdate:!1},onNodeHover:{triggerUpdate:!1},onLinkClick:{triggerUpdate:!1},onLinkRightClick:{triggerUpdate:!1},onLinkHover:{triggerUpdate:!1},onBackgroundClick:{triggerUpdate:!1},onBackgroundRightClick:{triggerUpdate:!1}},qM),YM),methods:Xr(Xr({zoomToFit:function(e,t,i){for(var r,o=arguments.length,s=new Array(o>3?o-3:0),a=3;a<o;a++)s[a-3]=arguments[a];return e.renderObjs.fitToBbox((r=e.forceGraph).getGraphBbox.apply(r,s),t,i),this},pauseAnimation:function(e){return e.animationFrameRequestId!==null&&(cancelAnimationFrame(e.animationFrameRequestId),e.animationFrameRequestId=null),this},resumeAnimation:function(e){return e.animationFrameRequestId===null&&this._animationCycle(),this},_animationCycle:function(e){e.enablePointerInteraction&&(this.renderer().domElement.style.cursor=null),e.forceGraph.tickFrame(),e.renderObjs.tick(),e.animationFrameRequestId=requestAnimationFrame(this._animationCycle)},scene:function(e){return e.renderObjs.scene()},camera:function(e){return e.renderObjs.camera()},renderer:function(e){return e.renderObjs.renderer()},controls:function(e){return e.renderObjs.controls()},tbControls:function(e){return e.renderObjs.tbControls()},_destructor:function(){this.pauseAnimation(),this.graphData({nodes:[],links:[]})}},$M),KM),stateInit:function(e){var t=e.controlType,i=e.rendererConfig,r=e.extraRenderers,o=new wf;return{forceGraph:o,renderObjs:Cf({controlType:t,rendererConfig:i,extraRenderers:r}).objects([o]).lights([new Jl.AmbientLight(13421772,Math.PI),new Jl.DirectionalLight(16777215,.6*Math.PI)])}},init:function(e,t){e.innerHTML="",e.appendChild(t.container=document.createElement("div")),t.container.style.position="relative";var i=document.createElement("div");t.container.appendChild(i),t.renderObjs(i);var r=t.renderObjs.camera(),o=t.renderObjs.renderer(),s=t.renderObjs.controls();s.enabled=!!t.enableNavigationControls,t.lastSetCameraZ=r.position.z;var a;t.container.appendChild(a=document.createElement("div")),a.className="graph-info-msg",a.textContent="",t.forceGraph.onLoading(function(){a.textContent="Loading..."}).onFinishLoading(function(){a.textContent=""}).onUpdate(function(){t.graphData=t.forceGraph.graphData(),r.position.x===0&&r.position.y===0&&r.position.z===t.lastSetCameraZ&&t.graphData.nodes.length&&(r.lookAt(t.forceGraph.position),t.lastSetCameraZ=r.position.z=Math.cbrt(t.graphData.nodes.length)*XM)}).onFinishUpdate(function(){if(t._dragControls){var c=t.graphData.nodes.find(function(u){return u.__initialFixedPos&&!u.__disposeControlsAfterDrag});c?c.__disposeControlsAfterDrag=!0:t._dragControls.dispose(),t._dragControls=void 0}if(t.enableNodeDrag&&t.enablePointerInteraction&&t.forceEngine==="d3"){var l=t._dragControls=new A_(t.graphData.nodes.map(function(u){return u.__threeObj}).filter(function(u){return u}),r,o.domElement);l.addEventListener("dragstart",function(u){s.enabled=!1,u.object.__initialPos=u.object.position.clone(),u.object.__prevPos=u.object.position.clone();var f=mn(u.object).__data;!f.__initialFixedPos&&(f.__initialFixedPos={fx:f.fx,fy:f.fy,fz:f.fz}),!f.__initialPos&&(f.__initialPos={x:f.x,y:f.y,z:f.z}),["x","y","z"].forEach(function(d){return f["f".concat(d)]=f[d]}),o.domElement.classList.add("grabbable")}),l.addEventListener("drag",function(u){var f=mn(u.object);if(!u.object.hasOwnProperty("__graphObjType")){var d=u.object.__initialPos,p=u.object.__prevPos,g=u.object.position;f.position.add(g.clone().sub(p)),p.copy(g),g.copy(d)}var v=f.__data,m=f.position,h={x:m.x-v.x,y:m.y-v.y,z:m.z-v.z};["x","y","z"].forEach(function(b){return v["f".concat(b)]=v[b]=m[b]}),t.forceGraph.d3AlphaTarget(.3).resetCountdown(),v.__dragged=!0,t.onNodeDrag(v,h)}),l.addEventListener("dragend",function(u){delete u.object.__initialPos,delete u.object.__prevPos;var f=mn(u.object).__data;f.__disposeControlsAfterDrag&&(l.dispose(),delete f.__disposeControlsAfterDrag);var d=f.__initialFixedPos,p=f.__initialPos,g={x:p.x-f.x,y:p.y-f.y,z:p.z-f.z};d&&(["x","y","z"].forEach(function(v){var m="f".concat(v);d[m]===void 0&&delete f[m]}),delete f.__initialFixedPos,delete f.__initialPos,f.__dragged&&(delete f.__dragged,t.onNodeDragEnd(f,g))),t.forceGraph.d3AlphaTarget(0).resetCountdown(),t.enableNavigationControls&&(s.enabled=!0,s.domElement&&s.domElement.ownerDocument&&s.domElement.ownerDocument.dispatchEvent(new PointerEvent("pointerup",{pointerType:"touch"}))),o.domElement.classList.remove("grabbable")})}}),t.renderObjs.renderer().useLegacyLights=!1,t.renderObjs.hoverOrderComparator(function(c,l){var u=mn(c);if(!u)return 1;var f=mn(l);if(!f)return-1;var d=function(g){return g.__graphObjType==="node"};return d(f)-d(u)}).tooltipContent(function(c){var l=mn(c);return l&&$e(t["".concat(l.__graphObjType,"Label")])(l.__data)||""}).hoverDuringDrag(!1).onHover(function(c){var l=mn(c);if(l!==t.hoverObj){var u=t.hoverObj?t.hoverObj.__graphObjType:null,f=t.hoverObj?t.hoverObj.__data:null,d=l?l.__graphObjType:null,p=l?l.__data:null;if(u&&u!==d){var g=t["on".concat(u==="node"?"Node":"Link","Hover")];g&&g(null,f)}if(d){var v=t["on".concat(d==="node"?"Node":"Link","Hover")];v&&v(p,u===d?f:null)}o.domElement.classList[l&&t["on".concat(d==="node"?"Node":"Link","Click")]||!l&&t.onBackgroundClick?"add":"remove"]("clickable"),t.hoverObj=l}}).clickAfterDrag(!1).onClick(function(c,l){var u=mn(c);if(u){var f=t["on".concat(u.__graphObjType==="node"?"Node":"Link","Click")];f&&f(u.__data,l)}else t.onBackgroundClick&&t.onBackgroundClick(l)}).onRightClick(function(c,l){var u=mn(c);if(u){var f=t["on".concat(u.__graphObjType==="node"?"Node":"Link","RightClick")];f&&f(u.__data,l)}else t.onBackgroundRightClick&&t.onBackgroundRightClick(l)}),this._animationCycle()}});function mn(n){for(var e=n;e&&!e.hasOwnProperty("__graphObjType");)e=e.parent;return e}class Lf extends _t{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new me(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const bi=new O,Ql=new Qe,eu=new Qe,tu=new O,nu=new O;class Df{constructor(e={}){const t=this;let i,r,o,s;const a={objects:new WeakMap},c=e.element!==void 0?e.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c,this.getSize=function(){return{width:i,height:r}},this.render=function(p,g){p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),Ql.copy(g.matrixWorldInverse),eu.multiplyMatrices(g.projectionMatrix,Ql),l(p,p,g),d(p)},this.setSize=function(p,g){i=p,r=g,o=i/2,s=r/2,c.style.width=p+"px",c.style.height=g+"px"};function l(p,g,v){if(p.isCSS2DObject){bi.setFromMatrixPosition(p.matrixWorld),bi.applyMatrix4(eu);const m=p.visible===!0&&bi.z>=-1&&bi.z<=1&&p.layers.test(v.layers)===!0;if(p.element.style.display=m===!0?"":"none",m===!0){p.onBeforeRender(t,g,v);const b=p.element;b.style.transform="translate("+-100*p.center.x+"%,"+-100*p.center.y+"%)translate("+(bi.x*o+o)+"px,"+(-bi.y*s+s)+"px)",b.parentNode!==c&&c.appendChild(b),p.onAfterRender(t,g,v)}const h={distanceToCameraSquared:u(v,p)};a.objects.set(p,h)}for(let m=0,h=p.children.length;m<h;m++)l(p.children[m],g,v)}function u(p,g){return tu.setFromMatrixPosition(p.matrixWorld),nu.setFromMatrixPosition(g.matrixWorld),tu.distanceToSquared(nu)}function f(p){const g=[];return p.traverse(function(v){v.isCSS2DObject&&g.push(v)}),g}function d(p){const g=f(p).sort(function(m,h){if(m.renderOrder!==h.renderOrder)return h.renderOrder-m.renderOrder;const b=a.objects.get(m).distanceToCameraSquared,_=a.objects.get(h).distanceToCameraSquared;return b-_}),v=g.length;for(let m=0,h=g.length;m<h;m++)g[m].element.style.zIndex=v-m}}}const JM="#00274C",QM="#FFCB05",eS="#000000",tS="#b0b0b0",nS="#ffffff",nr={blue:JM,yellow:QM,black:eS,grey:tS,white:nS};console.log("CSS2DRenderer: ",Df);console.log("CSS2DObject: ",Lf);const iS=nr.blue,bt=document.createElement("button");bt.innerText="start";bt.style.position="absolute";bt.style.top="50%";bt.style.left="50%";bt.style.border="3px solid white";bt.style.color="white";bt.style.background="black";bt.style.opacity="50%";bt.style.borderRadius="30px";bt.style.height="50px";bt.style.width="100px";bt.style.fontSize="1.5em";bt.style.transform="translate(-50%,-50%)";document.body.appendChild(bt);document.body.style.backgroundColor=iS;bt.addEventListener("click",()=>{rS(),bt.remove()});function rS(){ZM({extraRenderers:[new Df]})(document.getElementById("app")).jsonUrl("./database.json").backgroundColor(nr.blue).linkOpacity(.2).linkCurvature(.1).numDimensions(3).nodeThreeObject(n=>{n.color=nr.yellow,n.x=n.fx*500,n.y=n.fy*500,n.z=n.fz*500;const e=document.createElement("div");return e.textContent=n.name,e.className="node-label",e.style.color=nr.white,e.style.opacity="100%",e.style.borderRadius="30px",e.style.height="auto",e.style.width="auto",e.style.fontSize="1.2em",e.style.marginTop="20px",e.style.opacity="80%",n.name=null,new Lf(e)}).linkThreeObject(n=>{n.color=nr.yellow}).nodeThreeObjectExtend(!0)}

"use strict";(self.webpackChunkforeign_reader=self.webpackChunkforeign_reader||[]).push([[52],{9213:(Z,H,l)=>{l.d(H,{An:()=>R,m_:()=>G});var i=l(4438),L=l(6600),y=l(177),m=l(7673),O=l(8810),b=l(7468),$=l(8359),M=l(8141),p=l(6354),z=l(9437),w=l(980),U=l(7647),V=l(6697),P=l(1626),A=l(345);const x=["*"];let I;function v(c){return function N(){if(void 0===I&&(I=null,typeof window<"u")){const c=window;void 0!==c.trustedTypes&&(I=c.trustedTypes.createPolicy("angular#components",{createHTML:_=>_}))}return I}()?.createHTML(c)||c}function B(c){return Error(`Unable to find icon with the name "${c}"`)}function T(c){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${c}".`)}function F(c){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${c}".`)}class d{constructor(_,t,e){this.url=_,this.svgText=t,this.options=e}}let E=(()=>{class c{constructor(t,e,n,o){this._httpClient=t,this._sanitizer=e,this._errorHandler=o,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._resolvers=[],this._defaultFontSetClass=["material-icons","mat-ligature-font"],this._document=n}addSvgIcon(t,e,n){return this.addSvgIconInNamespace("",t,e,n)}addSvgIconLiteral(t,e,n){return this.addSvgIconLiteralInNamespace("",t,e,n)}addSvgIconInNamespace(t,e,n,o){return this._addSvgIconConfig(t,e,new d(n,null,o))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,n,o){const s=this._sanitizer.sanitize(i.WPN.HTML,n);if(!s)throw F(n);const u=v(s);return this._addSvgIconConfig(t,e,new d("",u,o))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,n){return this._addSvgIconSetConfig(t,new d(e,null,n))}addSvgIconSetLiteralInNamespace(t,e,n){const o=this._sanitizer.sanitize(i.WPN.HTML,e);if(!o)throw F(e);const s=v(o);return this._addSvgIconSetConfig(t,new d("",s,n))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){const e=this._sanitizer.sanitize(i.WPN.RESOURCE_URL,t);if(!e)throw T(t);const n=this._cachedIconsByUrl.get(e);return n?(0,m.of)(g(n)):this._loadSvgIconFromConfig(new d(t,null)).pipe((0,M.M)(o=>this._cachedIconsByUrl.set(e,o)),(0,p.T)(o=>g(o)))}getNamedSvgIcon(t,e=""){const n=j(e,t);let o=this._svgIconConfigs.get(n);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(e,t),o)return this._svgIconConfigs.set(n,o),this._getSvgFromConfig(o);const s=this._iconSetConfigs.get(e);return s?this._getSvgFromIconSetConfigs(t,s):(0,O.$)(B(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?(0,m.of)(g(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe((0,p.T)(e=>g(e)))}_getSvgFromIconSetConfigs(t,e){const n=this._extractIconWithNameFromAnySet(t,e);if(n)return(0,m.of)(n);const o=e.filter(s=>!s.svgText).map(s=>this._loadSvgIconSetFromConfig(s).pipe((0,z.W)(u=>{const D=`Loading icon set URL: ${this._sanitizer.sanitize(i.WPN.RESOURCE_URL,s.url)} failed: ${u.message}`;return this._errorHandler.handleError(new Error(D)),(0,m.of)(null)})));return(0,b.p)(o).pipe((0,p.T)(()=>{const s=this._extractIconWithNameFromAnySet(t,e);if(!s)throw B(t);return s}))}_extractIconWithNameFromAnySet(t,e){for(let n=e.length-1;n>=0;n--){const o=e[n];if(o.svgText&&o.svgText.toString().indexOf(t)>-1){const s=this._svgElementFromConfig(o),u=this._extractSvgIconFromSet(s,t,o.options);if(u)return u}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe((0,M.M)(e=>t.svgText=e),(0,p.T)(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?(0,m.of)(null):this._fetchIcon(t).pipe((0,M.M)(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,n){const o=t.querySelector(`[id="${e}"]`);if(!o)return null;const s=o.cloneNode(!0);if(s.removeAttribute("id"),"svg"===s.nodeName.toLowerCase())return this._setSvgAttributes(s,n);if("symbol"===s.nodeName.toLowerCase())return this._setSvgAttributes(this._toSvgElement(s),n);const u=this._svgElementFromString(v("<svg></svg>"));return u.appendChild(s),this._setSvgAttributes(u,n)}_svgElementFromString(t){const e=this._document.createElement("DIV");e.innerHTML=t;const n=e.querySelector("svg");if(!n)throw Error("<svg> tag not found");return n}_toSvgElement(t){const e=this._svgElementFromString(v("<svg></svg>")),n=t.attributes;for(let o=0;o<n.length;o++){const{name:s,value:u}=n[o];"id"!==s&&e.setAttribute(s,u)}for(let o=0;o<t.childNodes.length;o++)t.childNodes[o].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[o].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchIcon(t){const{url:e,options:n}=t,o=n?.withCredentials??!1;if(!this._httpClient)throw function k(){return Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.")}();if(null==e)throw Error(`Cannot fetch icon from URL "${e}".`);const s=this._sanitizer.sanitize(i.WPN.RESOURCE_URL,e);if(!s)throw T(e);const u=this._inProgressUrlFetches.get(s);if(u)return u;const S=this._httpClient.get(s,{responseType:"text",withCredentials:o}).pipe((0,p.T)(D=>v(D)),(0,w.j)(()=>this._inProgressUrlFetches.delete(s)),(0,U.u)());return this._inProgressUrlFetches.set(s,S),S}_addSvgIconConfig(t,e,n){return this._svgIconConfigs.set(j(t,e),n),this}_addSvgIconSetConfig(t,e){const n=this._iconSetConfigs.get(t);return n?n.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){const e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let n=0;n<this._resolvers.length;n++){const o=this._resolvers[n](e,t);if(o)return X(o)?new d(o.url,null,o.options):new d(o,null)}}static{this.\u0275fac=function(e){return new(e||c)(i.KVO(P.Qq,8),i.KVO(A.up),i.KVO(y.qQ,8),i.KVO(i.zcH))}}static{this.\u0275prov=i.jDH({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})();function g(c){return c.cloneNode(!0)}function j(c,_){return c+":"+_}function X(c){return!(!c.url||!c.options)}const Q=new i.nKC("MAT_ICON_DEFAULT_OPTIONS"),r=new i.nKC("mat-icon-location",{providedIn:"root",factory:function a(){const c=(0,i.WQX)(y.qQ),_=c?c.location:null;return{getPathname:()=>_?_.pathname+_.search:""}}}),h=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],f=h.map(c=>`[${c}]`).join(", "),C=/^url\(['"]?#(.*?)['"]?\)$/;let R=(()=>{class c{get color(){return this._color||this._defaultColor}set color(t){this._color=t}get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}get fontSet(){return this._fontSet}set fontSet(t){const e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}get fontIcon(){return this._fontIcon}set fontIcon(t){const e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}constructor(t,e,n,o,s,u){this._elementRef=t,this._iconRegistry=e,this._location=o,this._errorHandler=s,this.inline=!1,this._previousFontSetClass=[],this._currentIconFetch=$.yU.EMPTY,u&&(u.color&&(this.color=this._defaultColor=u.color),u.fontSet&&(this.fontSet=u.fontSet)),n||t.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(t){if(!t)return["",""];const e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){const t=this._elementsWithExternalReferences;if(t&&t.size){const e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();const e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){const t=this._elementRef.nativeElement;let e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){const n=t.childNodes[e];(1!==n.nodeType||"svg"===n.nodeName.toLowerCase())&&n.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;const t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(n=>n.length>0);this._previousFontSetClass.forEach(n=>t.classList.remove(n)),e.forEach(n=>t.classList.add(n)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return"string"==typeof t?t.trim().split(" ")[0]:t}_prependPathToReferences(t){const e=this._elementsWithExternalReferences;e&&e.forEach((n,o)=>{n.forEach(s=>{o.setAttribute(s.name,`url('${t}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(t){const e=t.querySelectorAll(f),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<e.length;o++)h.forEach(s=>{const u=e[o],S=u.getAttribute(s),D=S?S.match(C):null;if(D){let K=n.get(u);K||(K=[],n.set(u,K)),K.push({name:s,value:D[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){const[e,n]=this._splitIconName(t);e&&(this._svgNamespace=e),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,e).pipe((0,V.s)(1)).subscribe(o=>this._setSvgElement(o),o=>{this._errorHandler.handleError(new Error(`Error retrieving icon ${e}:${n}! ${o.message}`))})}}static{this.\u0275fac=function(e){return new(e||c)(i.rXU(i.aKT),i.rXU(E),i.kS0("aria-hidden"),i.rXU(r),i.rXU(i.zcH),i.rXU(Q,8))}}static{this.\u0275cmp=i.VBU({type:c,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(e,n){2&e&&(i.BMQ("data-mat-icon-type",n._usingFontIcon()?"font":"svg")("data-mat-icon-name",n._svgName||n.fontIcon)("data-mat-icon-namespace",n._svgNamespace||n.fontSet)("fontIcon",n._usingFontIcon()?n.fontIcon:null),i.HbH(n.color?"mat-"+n.color:""),i.AVh("mat-icon-inline",n.inline)("mat-icon-no-color","primary"!==n.color&&"accent"!==n.color&&"warn"!==n.color))},inputs:{color:"color",inline:[i.Mj6.HasDecoratorInputTransform,"inline","inline",i.L39],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],standalone:!0,features:[i.GFd,i.aNF],ngContentSelectors:x,decls:1,vars:0,template:function(e,n){1&e&&(i.NAR(),i.SdG(0))},styles:["mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],encapsulation:2,changeDetection:0})}}return c})(),G=(()=>{class c{static{this.\u0275fac=function(e){return new(e||c)}}static{this.\u0275mod=i.$C({type:c})}static{this.\u0275inj=i.G2t({imports:[L.yE,L.yE]})}}return c})()},5256:(Z,H,l)=>{l.d(H,{d:()=>k,s:()=>X});var i=l(1413),L=l(8359),y=l(6648),m=l(983),O=l(4438),b=l(1397),$=l(6977);const M=O.YHP,z=Symbol("__destroy"),w=Symbol("__decoratorApplied");function U(r){return"string"==typeof r?Symbol(`__destroy__${r}`):z}function P(r,a){r[a]||(r[a]=new i.B)}function A(r,a){r[a]&&(r[a].next(),r[a].complete(),r[a]=null)}function x(r){r instanceof L.yU&&r.unsubscribe()}function N(r,a){return function(){if(r&&r.call(this),A(this,U()),a.arrayName&&function I(r){Array.isArray(r)&&r.forEach(x)}(this[a.arrayName]),a.checkProperties)for(const h in this)a.blackList?.includes(h)||x(this[h])}}function k(r={}){return a=>{!function p(r){return!!r[M]}(a)?function v(r,a){r.prototype.ngOnDestroy=N(r.prototype.ngOnDestroy,a)}(a,r):function B(r,a){const h=r.\u0275pipe;h.onDestroy=N(h.onDestroy,a)}(a,r),function V(r){r.prototype[w]=!0}(a)}}const T=7,F=Symbol("CheckerHasBeenSet");function W(r){const a=O.JZv.Zone;return a&&"function"==typeof a.root?.run?a.root.run(r):r()}const g=!1;function X(r,a){return h=>{const f=U(a);"string"==typeof a?function j(r,a,h){const f=r[a];if(g&&"function"!=typeof f)throw new Error(`${r.constructor.name} is using untilDestroyed but doesn't implement ${a}`);P(r,h),r[a]=function(){f.apply(this,arguments),A(this,h),r[a]=f}}(r,a,f):(g&&function Q(r){const a=Object.getPrototypeOf(r);if(!(w in a))throw new Error("untilDestroyed operator cannot be used inside directives or components or providers that are not decorated with UntilDestroy decorator")}(r),P(r,f));const C=r[f];return g&&function d(r,a){r[F]||function E(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha||typeof process<"u"&&"[object process]"===Object.prototype.toString.call(process)}()||(W(()=>(0,y.H)(Promise.resolve()).pipe((0,b.Z)(()=>{let h;try{h=(0,O.xtB)(r)}catch{h=null}const f=h?.lView;if(null==f)return m.w;const C=f[T]||(f[T]=[]),R=new i.B;return C.push(function(){W(()=>{R.next(),R.complete()})}),R}),(0,b.Z)(()=>Promise.resolve())).subscribe(()=>{(a.observed??a.observers.length>0)&&console.warn(function Y(r){return`\n  The ${r.constructor.name} still has subscriptions that haven't been unsubscribed.\n  This may happen if the class extends another class decorated with @UntilDestroy().\n  The child class implements its own ngOnDestroy() method but doesn't call super.ngOnDestroy().\n  Let's look at the following example:\n  @UntilDestroy()\n  @Directive()\n  export abstract class BaseDirective {}\n  @Component({ template: '' })\n  export class ConcreteComponent extends BaseDirective implements OnDestroy {\n    constructor() {\n      super();\n      someObservable$.pipe(untilDestroyed(this)).subscribe();\n    }\n    ngOnDestroy(): void {\n      // Some logic here...\n    }\n  }\n  The BaseDirective.ngOnDestroy() will not be called since Angular will call ngOnDestroy()\n  on the ConcreteComponent, but not on the BaseDirective.\n  One of the solutions is to declare an empty ngOnDestroy method on the BaseDirective:\n  @UntilDestroy()\n  @Directive()\n  export abstract class BaseDirective {\n    ngOnDestroy(): void {}\n  }\n  @Component({ template: '' })\n  export class ConcreteComponent extends BaseDirective implements OnDestroy {\n    constructor() {\n      super();\n      someObservable$.pipe(untilDestroyed(this)).subscribe();\n    }\n    ngOnDestroy(): void {\n      // Some logic here...\n      super.ngOnDestroy();\n    }\n  }\n  `}(r))})),r[F]=!0)}(r,C),h.pipe((0,$.Q)(C))}}}}]);
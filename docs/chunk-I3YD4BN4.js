import{a as qe,c as tn,d as nn,e as an,f as on,g as rn,h as sn,i as cn}from"./chunk-YNK7TAJA.js";import{a as ln,b as Ee}from"./chunk-NVN25G2I.js";import{a as Ut,b as jt,c as Qt,d as Xt,f as Gt,h as qt,j as $t,k as Kt,m as Yt,n as Zt,o as Jt,p as en}from"./chunk-JT764RMD.js";import{a as dn,b as mn}from"./chunk-IPVUMDMB.js";import{b as _e}from"./chunk-VDUV7TVP.js";import{b as At,c as we,d as Pe,f as Bt,h as Vt,i as Ge,o as Oe}from"./chunk-QJUMDOC3.js";import{a as De}from"./chunk-R6CJOYBZ.js";import{a as $e}from"./chunk-Q44VOGOY.js";import{$ as _,$b as Xe,Ab as Tt,B as ut,Ba as kt,Bb as Ue,C as A,Cb as H,Da as E,Ea as V,Fa as F,Ga as J,Gb as g,Gc as le,Ha as Me,Hb as wt,Ia as Fe,Ib as je,J as _t,K as ve,Kc as W,L as pt,Lb as Qe,M as Y,Na as yt,Nc as de,O as Be,Oa as x,Pa as M,Pb as se,Pc as ue,Qa as I,Qb as y,Qc as Se,R as bt,Ra as Le,Rb as ce,Rc as Ft,S as ke,Sa as L,Sc as Re,T as B,Ta as N,Tc as Lt,U as X,Ua as b,Uc as Nt,Va as r,Vc as zt,Wa as c,X as s,Xa as T,Xc as Ht,Yc as Wt,_b as Pt,a as pe,aa as p,ab as R,ba as ye,bb as Ne,ca as gt,cb as u,da as ne,dc as Ot,e as K,eb as m,ec as Ie,f as be,fa as ie,fb as U,g as ge,ga as D,gb as j,ha as Z,hb as ee,i as st,ib as z,j as ct,ja as C,jb as f,ka as me,kb as v,l as lt,la as he,ma as Ce,mb as Ct,na as G,nb as xt,oa as ft,ob as oe,pb as re,qb as k,qc as St,rb as Q,s as dt,sb as h,sc as Rt,t as mt,ta as vt,tb as q,ua as l,ub as $,v as fe,vb as Mt,wa as ae,wb as ze,wc as Dt,x as ht,xa as xe,xb as He,yb as We,yc as Et,za as Ve,zb as It,zc as Te}from"./chunk-XB6BERNY.js";var w=(function(i){return i[i.GoHome=0]="GoHome",i[i.GoToNextItem=1]="GoToNextItem",i[i.MarkIt=2]="MarkIt",i[i.ShowMenu=3]="ShowMenu",i[i.Translate=4]="Translate",i[i.ShowTranslationAll=5]="ShowTranslationAll",i[i.Sync=6]="Sync",i})(w||{});var hn=[{command:w.GoHome,keys:["Home"]},{command:w.ShowMenu,keys:["0","Escape"]},{command:w.GoToNextItem,keys:["n"]},{command:w.ShowTranslationAll,keys:["t"]},{command:w.MarkIt,keys:["1"]},{command:w.Translate,keys:["2"]},{command:w.Sync,keys:["5"]}];function un(i){let o=i.key,e=hn.find(t=>t.keys.includes(o));return e?e.command:null}var et=["*"];function Vn(i,o){i&1&&j(0)}var Fn=["tabListContainer"],Ln=["tabList"],Nn=["tabListInner"],zn=["nextPaginator"],Hn=["previousPaginator"],Wn=["content"];function Un(i,o){}var jn=["tabBodyWrapper"],Qn=["tabHeader"];function Xn(i,o){}function Gn(i,o){if(i&1&&Me(0,Xn,0,0,"ng-template",12),i&2){let e=m().$implicit;b("cdkPortalOutlet",e.templateLabel)}}function qn(i,o){if(i&1&&h(0),i&2){let e=m().$implicit;q(e.textLabel)}}function $n(i,o){if(i&1){let e=R();r(0,"div",7,2),u("click",function(){let n=_(e),a=n.$implicit,d=n.$index,O=m(),S=oe(1);return p(O._handleClick(a,S,d))})("cdkFocusChange",function(n){let a=_(e).$index,d=m();return p(d._tabFocusChanged(n,a))}),T(2,"span",8)(3,"div",9),r(4,"span",10)(5,"span",11),M(6,Gn,1,1,null,12)(7,qn,1,1),c()()()}if(i&2){let e=o.$implicit,t=o.$index,n=oe(1),a=m();Q(e.labelClass),k("mdc-tab--active",a.selectedIndex===t),b("id",a._getTabLabelId(e,t))("disabled",e.disabled)("fitInkBarToContent",a.fitInkBarToContent),x("tabIndex",a._getTabIndex(t))("aria-posinset",t+1)("aria-setsize",a._tabs.length)("aria-controls",a._getTabContentId(t))("aria-selected",a.selectedIndex===t)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),l(3),b("matRippleTrigger",n)("matRippleDisabled",e.disabled||a.disableRipple),l(3),I(e.templateLabel?6:7)}}function Kn(i,o){i&1&&j(0)}function Yn(i,o){if(i&1){let e=R();r(0,"mat-tab-body",13),u("_onCentered",function(){_(e);let n=m();return p(n._removeTabBodyWrapperHeight())})("_onCentering",function(n){_(e);let a=m();return p(a._setTabBodyWrapperHeight(n))})("_beforeCentering",function(n){_(e);let a=m();return p(a._bodyCentered(n))}),c()}if(i&2){let e=o.$implicit,t=o.$index,n=m();Q(e.bodyClass),b("id",n._getTabContentId(t))("content",e.content)("position",e.position)("animationDuration",n.animationDuration)("preserveContent",n.preserveContent),x("tabindex",n.contentTabIndex!=null&&n.selectedIndex===t?n.contentTabIndex:null)("aria-labelledby",n._getTabLabelId(e,t))("aria-hidden",n.selectedIndex!==t)}}var Zn=new X("MatTabContent"),Jn=(()=>{class i{template=s(xe);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["","matTabContent",""]],features:[H([{provide:Zn,useExisting:i}])]})}return i})(),ei=new X("MatTabLabel"),gn=new X("MAT_TAB"),ti=(()=>{class i extends Vt{_closestTab=s(gn,{optional:!0});static \u0275fac=(()=>{let e;return function(n){return(e||(e=Ce(i)))(n||i)}})();static \u0275dir=F({type:i,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[H([{provide:ei,useExisting:i}]),J]})}return i})(),fn=new X("MAT_TAB_GROUP"),tt=(()=>{class i{_viewContainerRef=s(kt);_closestTabGroup=s(fn,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new ge;position=null;origin=null;isActive=!1;constructor(){s(Ie).load(Se)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Bt(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=E({type:i,selectors:[["mat-tab"]],contentQueries:function(t,n,a){if(t&1&&ee(a,ti,5)(a,Jn,7,xe),t&2){let d;f(d=v())&&(n.templateLabel=d.first),f(d=v())&&(n._explicitContent=d.first)}},viewQuery:function(t,n){if(t&1&&z(xe,7),t&2){let a;f(a=v())&&(n._implicitContent=a.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(t,n){t&2&&x("id",null)},inputs:{disabled:[2,"disabled","disabled",y],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[H([{provide:gn,useExisting:i}]),he],ngContentSelectors:et,decls:1,vars:0,template:function(t,n){t&1&&(U(),Fe(0,Vn,1,0,"ng-template"))},encapsulation:2})}return i})(),Ke="mdc-tab-indicator--active",_n="mdc-tab-indicator--no-transition",Ye=class{_items;_currentItem;constructor(o){this._items=o}hide(){this._items.forEach(o=>o.deactivateInkBar()),this._currentItem=void 0}alignToElement(o){let e=this._items.find(n=>n.elementRef.nativeElement===o),t=this._currentItem;if(e!==t&&(t?.deactivateInkBar(),e)){let n=t?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(n),this._currentItem=e}}},ni=(()=>{class i{_elementRef=s(G);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let t=this._elementRef.nativeElement;if(!e||!t.getBoundingClientRect||!this._inkBarContentElement){t.classList.add(Ke);return}let n=t.getBoundingClientRect(),a=e.width/n.width,d=e.left-n.left;t.classList.add(_n),this._inkBarContentElement.style.setProperty("transform",`translateX(${d}px) scaleX(${a})`),t.getBoundingClientRect(),t.classList.remove(_n),t.classList.add(Ke),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Ke)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,t=this._inkBarElement=e.createElement("span"),n=this._inkBarContentElement=e.createElement("span");t.className="mdc-tab-indicator",n.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",t.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",y]}})}return i})();var vn=(()=>{class i extends ni{elementRef=s(G);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(n){return(e||(e=Ce(i)))(n||i)}})();static \u0275dir=F({type:i,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(t,n){t&2&&(x("aria-disabled",!!n.disabled),k("mat-mdc-tab-disabled",n.disabled))},inputs:{disabled:[2,"disabled","disabled",y]},features:[J]})}return i})(),pn={passive:!0},ii=650,ai=100,oi=(()=>{class i{_elementRef=s(G);_changeDetectorRef=s(se);_viewportRuler=s(we);_dir=s(le,{optional:!0});_ngZone=s(Z);_platform=s(Xe);_sharedResizeObserver=s($t);_injector=s(ne);_renderer=s(Ve);_animationsDisabled=de();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new ge;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new ge;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let t=isNaN(e)?0:e;this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}_selectedIndex=0;selectFocusedIndex=new D;indexFocused=new D;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),pn),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),pn))}ngAfterContentInit(){let e=this._dir?this._dir.change:lt("ltr"),t=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(ut(32),Y(this._destroyed)),n=this._viewportRuler.change(150).pipe(Y(this._destroyed)),a=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Et(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),ae(a,{injector:this._injector}),fe(e,n,t,this._items.changes,this._itemsResized()).pipe(Y(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),a()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(d=>{this.indexFocused.emit(d),this._setTabFocus(d)})}_itemsResized(){return typeof ResizeObserver!="function"?st:this._items.changes.pipe(ve(this._items),pt(e=>new be(t=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(a=>t.next(a));return e.forEach(a=>n.observe(a.elementRef.nativeElement)),()=>{n.disconnect()}}))),_t(1),ht(e=>e.some(t=>t.contentRect.width>0&&t.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!Dt(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let t=this._items.get(this.focusIndex);t&&!t.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let t=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?t.scrollLeft=0:t.scrollLeft=t.scrollWidth-t.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,t=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(t)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let t=this._tabListContainer.nativeElement.offsetWidth,n=(e=="before"?-1:1)*t/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let t=this._items?this._items.toArray()[e]:null;if(!t)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:a,offsetWidth:d}=t.elementRef.nativeElement,O,S;this._getLayoutDirection()=="ltr"?(O=a,S=O+d):(S=this._tabListInner.nativeElement.offsetWidth-a,O=S-d);let Ae=this.scrollDistance,rt=this.scrollDistance+n;O<Ae?this.scrollDistance-=Ae-O:S>rt&&(this.scrollDistance+=Math.min(S-rt,O-Ae))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,t=this._elementRef.nativeElement.offsetWidth,n=e-t>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,t=this._tabListContainer.nativeElement.offsetWidth;return e-t||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,t=e?e.elementRef.nativeElement:null;t?this._inkBar.alignToElement(t):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,t){t&&t.button!=null&&t.button!==0||(this._stopInterval(),mt(ii,ai).pipe(Y(fe(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:a}=this._scrollHeader(e);(a===0||a>=n)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let t=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(t,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:t,distance:this._scrollDistance}}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,inputs:{disablePagination:[2,"disablePagination","disablePagination",y],selectedIndex:[2,"selectedIndex","selectedIndex",ce]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return i})(),ri=(()=>{class i extends oi{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Ye(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=Ce(i)))(n||i)}})();static \u0275cmp=E({type:i,selectors:[["mat-tab-header"]],contentQueries:function(t,n,a){if(t&1&&ee(a,vn,4),t&2){let d;f(d=v())&&(n._items=d)}},viewQuery:function(t,n){if(t&1&&z(Fn,7)(Ln,7)(Nn,7)(zn,5)(Hn,5),t&2){let a;f(a=v())&&(n._tabListContainer=a.first),f(a=v())&&(n._tabList=a.first),f(a=v())&&(n._tabListInner=a.first),f(a=v())&&(n._nextPaginator=a.first),f(a=v())&&(n._previousPaginator=a.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(t,n){t&2&&k("mat-mdc-tab-header-pagination-controls-enabled",n._showPaginationControls)("mat-mdc-tab-header-rtl",n._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",y]},features:[J],ngContentSelectors:et,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(t,n){t&1&&(U(),r(0,"div",5,0),u("click",function(){return n._handlePaginatorClick("before")})("mousedown",function(d){return n._handlePaginatorPress("before",d)})("touchend",function(){return n._stopInterval()}),T(2,"div",6),c(),r(3,"div",7,1),u("keydown",function(d){return n._handleKeydown(d)}),r(5,"div",8,2),u("cdkObserveContent",function(){return n._onContentChanges()}),r(7,"div",9,3),j(9),c()()(),r(10,"div",10,4),u("mousedown",function(d){return n._handlePaginatorPress("after",d)})("click",function(){return n._handlePaginatorClick("after")})("touchend",function(){return n._stopInterval()}),T(12,"div",6),c()),t&2&&(k("mat-mdc-tab-header-pagination-disabled",n._disableScrollBefore),b("matRippleDisabled",n._disableScrollBefore||n.disableRipple),l(3),k("_mat-animation-noopable",n._animationsDisabled),l(2),x("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby||null),l(5),k("mat-mdc-tab-header-pagination-disabled",n._disableScrollAfter),b("matRippleDisabled",n._disableScrollAfter||n.disableRipple))},dependencies:[ue,Rt],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--mat-tab-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--mat-tab-divider-height, 1px);
  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--mat-tab-divider-height, 1px);
  border-top-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2})}return i})(),si=new X("MAT_TABS_CONFIG"),bn=(()=>{class i extends Ge{_host=s(Ze);_ngZone=s(Z);_centeringSub=K.EMPTY;_leavingSub=K.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(ve(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=F({type:i,selectors:[["","matTabBodyHost",""]],features:[J]})}return i})(),Ze=(()=>{class i{_elementRef=s(G);_dir=s(le,{optional:!0});_ngZone=s(Z);_injector=s(ne);_renderer=s(Ve);_diAnimationsDisabled=de();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=K.EMPTY;_position;_previousPosition;_onCentering=new D;_beforeCentering=new D;_afterLeavingCenter=new D;_onCentered=new D(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=s(se);this._dirChangeSubscription=this._dir.change.subscribe(t=>{this._computePositionAnimationState(t),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),ae(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,t=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),n.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",t),this._renderer.listen(e,"transitioncancel",t)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),ae(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=E({type:i,selectors:[["mat-tab-body"]],viewQuery:function(t,n){if(t&1&&z(bn,5)(Wn,5),t&2){let a;f(a=v())&&(n._portalHost=a.first),f(a=v())&&(n._contentElement=a.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(t,n){t&2&&x("inert",n._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(t,n){t&1&&(r(0,"div",1,0),Me(2,Un,0,0,"ng-template",2),c()),t&2&&k("mat-tab-body-content-left",n._position==="left")("mat-tab-body-content-right",n._position==="right")("mat-tab-body-content-can-animate",n._position==="center"||n._previousPosition==="center")},dependencies:[bn,At],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--mat-tab-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2})}return i})(),kn=(()=>{class i{_elementRef=s(G);_changeDetectorRef=s(se);_ngZone=s(Z);_tabsSubscription=K.EMPTY;_tabLabelSubscription=K.EMPTY;_tabBodySubscription=K.EMPTY;_diAnimationsDisabled=de();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new ft;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let t=e+"";this._animationDuration=/^\d+$/.test(t)?e+"ms":t}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let t=this._elementRef.nativeElement.classList;t.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&t.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new D;focusChange=new D;animationDone=new D;selectedTabChange=new D(!0);_groupId;_isServer=!s(Xe).isBrowser;constructor(){let e=s(si,{optional:!0});this._groupId=s(Te).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let t=this._selectedIndex==null;if(!t){this.selectedTabChange.emit(this._createChangeEvent(e));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((n,a)=>n.isActive=a===e),t||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((t,n)=>{t.position=n-e,this._selectedIndex!=null&&t.position==0&&!t.origin&&(t.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let t=this._tabs.toArray(),n;for(let a=0;a<t.length;a++)if(t[a].isActive){this._indexToSelect=this._selectedIndex=a,this._lastFocusedTabIndex=null,n=t[a];break}!n&&t[e]&&Promise.resolve().then(()=>{t[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(ve(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(t=>t._closestTabGroup===this||!t._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let t=this._tabHeader;t&&(t.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let t=new Je;return t.index=e,this._tabs&&this._tabs.length&&(t.tab=this._tabs.toArray()[e]),t}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=fe(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,t){return e.id||`${this._groupId}-label-${t}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let t=this._tabBodyWrapper.nativeElement;t.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(t.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,t,n){t.focusIndex=n,e.disabled||(this.selectedIndex=n)}_getTabIndex(e){let t=this._lastFocusedTabIndex??this.selectedIndex;return e===t?0:-1}_tabFocusChanged(e,t){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=t)}_bodyCentered(e){e&&this._tabBodies?.forEach((t,n)=>t._setActiveClass(n===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=E({type:i,selectors:[["mat-tab-group"]],contentQueries:function(t,n,a){if(t&1&&ee(a,tt,5),t&2){let d;f(d=v())&&(n._allTabs=d)}},viewQuery:function(t,n){if(t&1&&z(jn,5)(Qn,5)(Ze,5),t&2){let a;f(a=v())&&(n._tabBodyWrapper=a.first),f(a=v())&&(n._tabHeader=a.first),f(a=v())&&(n._tabBodies=a)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(t,n){t&2&&(x("mat-align-tabs",n.alignTabs),Q("mat-"+(n.color||"primary")),re("--mat-tab-animation-duration",n.animationDuration),k("mat-mdc-tab-group-dynamic-height",n.dynamicHeight)("mat-mdc-tab-group-inverted-header",n.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",n.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",y],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",y],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",y],selectedIndex:[2,"selectedIndex","selectedIndex",ce],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",ce],disablePagination:[2,"disablePagination","disablePagination",y],disableRipple:[2,"disableRipple","disableRipple",y],preserveContent:[2,"preserveContent","preserveContent",y],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[H([{provide:fn,useExisting:i}])],ngContentSelectors:et,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(t,n){t&1&&(U(),r(0,"mat-tab-header",3,0),u("indexFocused",function(d){return n._focusChanged(d)})("selectFocusedIndex",function(d){return n.selectedIndex=d}),L(2,$n,8,17,"div",4,Le),c(),M(4,Kn,1,0),r(5,"div",5,1),L(7,Yn,1,10,"mat-tab-body",6,Le),c()),t&2&&(b("selectedIndex",n.selectedIndex||0)("disableRipple",n.disableRipple)("disablePagination",n.disablePagination),yt("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby),l(2),N(n._tabs),l(2),I(n._isServer?4:-1),l(),k("_mat-animation-noopable",n._animationsDisabled()),l(2),N(n._tabs))},dependencies:[ri,vn,Ot,ue,Ge,Ze],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--mat-tab-container-height, 48px);
  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));
  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));
  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));
  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-tab-active-indicator-height, 2px);
  border-radius: var(--mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label {
  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label {
  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2})}return i})(),Je=class{index;tab};var yn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=V({type:i});static \u0275inj=B({imports:[W]})}return i})();var Cn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=V({type:i});static \u0275inj=B({imports:[Oe,qe,W,Pe,Zt,qe]})}return i})();var xn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=V({type:i});static \u0275inj=B({imports:[Re,W]})}return i})();var Mn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=V({type:i});static \u0275inj=B({imports:[Re,Oe,W,Pe]})}return i})();var mi=["input"],hi=["label"],ui=["*"],nt={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},_i=new X("mat-checkbox-default-options",{providedIn:"root",factory:()=>nt}),P=(function(i){return i[i.Init=0]="Init",i[i.Checked=1]="Checked",i[i.Unchecked=2]="Unchecked",i[i.Indeterminate=3]="Indeterminate",i})(P||{}),it=class{source;checked},pi=(()=>{class i{_elementRef=s(G);_changeDetectorRef=s(se);_ngZone=s(Z);_animationsDisabled=de();_options=s(_i,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new it;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new D;indeterminateChange=new D;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=P.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){s(Ie).load(Se);let e=s(new je("tabindex"),{optional:!0});this._options=this._options||nt,this.color=this._options.color||nt.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=s(Te).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(P.Indeterminate):this._transitionCheckState(this.checked?P.Checked:P.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=C(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,n=this._getAnimationTargetElement();if(!(t===e||!n)&&(this._currentAnimationClass&&n.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){n.classList.add(this._currentAnimationClass);let a=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{n.classList.remove(a)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?P.Checked:P.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return"";switch(e){case P.Init:if(t===P.Checked)return this._animationClasses.uncheckedToChecked;if(t==P.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case P.Unchecked:return t===P.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case P.Checked:return t===P.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case P.Indeterminate:return t===P.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=E({type:i,selectors:[["mat-checkbox"]],viewQuery:function(t,n){if(t&1&&z(mi,5)(hi,5),t&2){let a;f(a=v())&&(n._inputElement=a.first),f(a=v())&&(n._labelElement=a.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(t,n){t&2&&(Ne("id",n.id),x("tabindex",null)("aria-label",null)("aria-labelledby",null),Q(n.color?"mat-"+n.color:"mat-accent"),k("_mat-animation-noopable",n._animationsDisabled)("mdc-checkbox--disabled",n.disabled)("mat-mdc-checkbox-disabled",n.disabled)("mat-mdc-checkbox-checked",n.checked)("mat-mdc-checkbox-disabled-interactive",n.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",y],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",y],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",y],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:ce(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",y],checked:[2,"checked","checked",y],disabled:[2,"disabled","disabled",y],indeterminate:[2,"indeterminate","indeterminate",y]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[H([{provide:Ut,useExisting:bt(()=>i),multi:!0},{provide:Qt,useExisting:i,multi:!0}]),he],ngContentSelectors:ui,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(t,n){if(t&1&&(U(),r(0,"div",3),u("click",function(d){return n._preventBubblingFromLabel(d)}),r(1,"div",4,0)(3,"div",5),u("click",function(){return n._onTouchTargetClick()}),c(),r(4,"input",6,1),u("blur",function(){return n._onBlur()})("click",function(){return n._onInputClick()})("change",function(d){return n._onInteractionEvent(d)}),c(),T(6,"div",7),r(7,"div",8),ye(),r(8,"svg",9),T(9,"path",10),c(),gt(),T(10,"div",11),c(),T(11,"div",12),c(),r(12,"label",13,2),j(14),c()()),t&2){let a=oe(2);b("labelPosition",n.labelPosition),l(4),k("mdc-checkbox--selected",n.checked),b("checked",n.checked)("indeterminate",n.indeterminate)("disabled",n.disabled&&!n.disabledInteractive)("id",n.inputId)("required",n.required)("tabIndex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex),x("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby)("aria-describedby",n.ariaDescribedby)("aria-checked",n.indeterminate?"mixed":null)("aria-controls",n.ariaControls)("aria-disabled",n.disabled&&n.disabledInteractive?!0:null)("aria-expanded",n.ariaExpanded)("aria-owns",n.ariaOwns)("name",n.name)("value",n.value),l(7),b("matRippleTrigger",a)("matRippleDisabled",n.disableRipple||n.disabled)("matRippleCentered",!0),l(),b("for",n.inputId)}},dependencies:[ue,rn],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
    color: GrayText;
  }
}
.mat-mdc-checkbox label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-checkbox-touch-target-size, 48px);
  width: var(--mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return i})(),In=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=V({type:i});static \u0275inj=B({imports:[pi,W]})}return i})();var bi="-";function Tn(i,o){return i+bi+o}function wn(i){i||(i=s(ie));let o=new be(e=>{if(i.destroyed){e.next();return}return i.onDestroy(e.next.bind(e))});return e=>e.pipe(Y(o))}function Pn(i,o){let t=!o?.manualCleanup?o?.injector?.get(ie)??s(ie):null,n=gi(o?.equal),a;o?.requireSync?a=C({kind:0},{equal:n}):a=C({kind:1,value:o?.initialValue},{equal:n});let d,O=i.subscribe({next:S=>a.set({kind:1,value:S}),error:S=>{a.set({kind:2,error:S}),d?.()},complete:()=>{d?.()}});if(o?.requireSync&&a().kind===0)throw new Be(601,!1);return d=t?.onDestroy(O.unsubscribe.bind(O)),g(()=>{let S=a();switch(S.kind){case 1:return S.value;case 2:throw S.error;case 0:throw new Be(601,!1)}},{equal:o?.equal})}function gi(i=Object.is){return(o,e)=>o.kind===1&&e.kind===1&&i(o.value,e.value)}function On(i,o,e){let t=[],n=[];return i.forEach(a=>t.push({id:a.id,type:"header",title:a.text})),o.forEach(a=>t.push({id:a,type:"mark",title:e[a].text[0]})),t.sort((a,d)=>a.id>d.id||a.id===d.id&&a.type==="header"?1:-1),t.forEach((a,d)=>{let O=t[d+1];!(a.type==="header"&&O?.type==="header")&&!(d===t.length-1&&a.type==="header")&&n.push(a)}),n}var Sn=(()=>{class i{constructor(){this.title=s(St)}set(e){this.title.setTitle(e)}reset(){this.title.setTitle("FR:reset")}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=ke({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var Rn=(()=>{class i{constructor(){this.bookId=g(()=>this.book()?.id||null),this.title=g(()=>this.book()?.title||""),this.translation=g(()=>this.book()?.translation||{}),this.headers=g(()=>this.book()?.headers||[]),this.markedItems=wt(()=>this.book()?.markedItems||[]),this.allContentLength=g(()=>this.allBookContent().length),this.headersMap=g(()=>{let e=new Map;return this.headers().forEach(t=>e.set(t.id,t)),e}),this.markedItemsSet=g(()=>{let e=new Set;return this.markedItems().forEach(t=>e.add(t)),e}),this.marksForMenu=g(()=>On(this.headers(),this.markedItems(),this.allBookContent())),this.nextHeader=g(()=>this.headers().find(e=>e.id>this.currentParagraphId())?.id||0),this.book=C(null),this.allBookContent=g(()=>this.book()?.content||[]),this.currentBookContentInner=C([]),this.currentBookContent=this.currentBookContentInner.asReadonly(),this.currentParagraphIdInner=C(0),this.currentParagraphId=this.currentParagraphIdInner.asReadonly(),this.rebuildParagraphIdInner=C(0),this.rebuildParagraphId=this.rebuildParagraphIdInner.asReadonly(),this.bookDBService=s($e),this.titleService=s(Sn),this.noticeService=s(_e),this.loader=s(De),this.syncPositionServiceUrlService=s(Ee),this.lengthOfNewContentChunk=20,me(()=>{let e=this.currentParagraphId(),t=this.allBookContent().length;!e||!t||this.loader.setProgressValue(Math.round(e*100/t))})}setBook(e){dt({title:this.bookDBService.getTitle$(e).pipe(A(1)),content:this.bookDBService.getContent$(e).pipe(A(1)),translation:this.bookDBService.getTranslation$(e).pipe(A(1)),headers:this.bookDBService.getHeaders$(e).pipe(A(1)),markedItems:this.bookDBService.getMarkedItems$(e).pipe(A(1))}).pipe(A(1)).subscribe({next:({title:t,content:n,translation:a,headers:d,markedItems:O})=>{this.book.set({id:e,title:t.title,content:n.content,translation:a.translation,headers:d.headers,markedItems:O.markedItems}),this.setCurrentParagraphIdAndRebuildCurrentContent(t.currentContentItemId),this.titleService.set(this.title()+" ("+this.allBookContent().length+")")},error:()=>{this.noticeService.error("setBook error"),console.error("setBook error"),this.resetBook()}})}destroy(){this.resetBook()}setCurrentParagraphIdWithoutRebuild(e){this.currentParagraphIdInner.set(e),this.saveCurrentPosition()}removeAllMarksExceptLastTwo(){let e=this.markedItems();if(!e.length)return;let t=e.pop(),n=e.pop(),a=[];n&&a.push(n),t&&a.push(t),this.markedItems.set(a),this.saveMarkedItems()}removeAllMarks(){this.markedItems.set([]),this.saveMarkedItems()}saveMarkedItems(){this.loader.topOn();let e=this.bookId();e&&this.bookDBService.saveMarkedItems$(e,this.markedItems()).pipe(A(1)).subscribe({next:()=>{this.loader.topOff()},error:t=>{this.loader.topOff(),console.error(t),this.noticeService.error("saveMarkedItems")}})}findAndGo(e){let t=this.allBookContent().findIndex(n=>n.id>this.currentParagraphId()&&n.text.join("").toLowerCase().includes(e.toLowerCase()));t>-1&&this.setCurrentParagraphIdAndRebuildCurrentContent(t)}rebuildCurrentContent(){this.setCurrentParagraphIdAndRebuildCurrentContent(this.currentParagraphId())}setCurrentParagraphIdAndRebuildCurrentContent(e){if(e>this.allBookContent().length-1)return;this.currentParagraphIdInner.set(e),this.rebuildParagraphIdInner.set(e);let t=40,n=e>t?e-t:0;this.currentBookContentInner.set(this.allBookContent().slice(n,e+t))}resetBook(){this.book.set(null),this.currentParagraphIdInner.set(0),this.titleService.reset()}markCurrentItem(){this.setItemMarked(this.currentParagraphId()),this.syncPositionServiceUrlService.isOn()&&this.syncBookPosition()}setItemMarked(e){if(this.markedItemsSet().has(e))this.markedItems.update(t=>t.filter(n=>n!==e));else{let t=this.markedItems();t.push(e),t.sort((n,a)=>n-a),this.markedItems.set([...t])}this.saveMarkedItems()}addItemAtStart(){let e=this.currentBookContent();if(e.length>=this.allBookContent().length||!e.length)return;let t=e[0].id,n=t>this.lengthOfNewContentChunk?t-this.lengthOfNewContentChunk:0;this.currentBookContentInner.set([...this.allBookContent().slice(n,t),...e])}addItemToEnd(){let e=this.currentBookContent();if(e.length>=this.allBookContent().length||!e.length)return;let t=e.at(-1)?.id;t&&this.currentBookContentInner.set([...e,...this.allBookContent().slice(t+1,t+this.lengthOfNewContentChunk)])}saveCurrentPosition(){let e=this.bookId();if(!e)return;let t={id:e,title:this.title(),currentContentItemId:this.currentParagraphId(),lastOpenedTime:Date.now()};this.bookDBService.updateTitle$(t).pipe(A(1)).subscribe({next:()=>{},error:n=>{console.error("Error saving current position:",n)}})}syncBookPosition(){let e=this.bookId();e&&this.syncPositionServiceUrlService.getBookPosition(e,this.currentParagraphId()).pipe(A(1)).subscribe({next:t=>{let n=+t.blockId;if(isNaN(+n)){console.error("Invalid position received:",n);return}this.noticeService.show("position: "+n),!(n<=this.currentParagraphId())&&this.setCurrentParagraphIdAndRebuildCurrentContent(n)},error:t=>{this.noticeService.error("get position is error"),console.error("Error getting book position:",t)}})}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=ke({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var fi=["componentContent"],vi=["goToInput"],at=(i,o)=>o.id,ki=(i,o)=>o+i,yi=(i,o)=>o.cssVariable;function Ci(i,o){if(i&1){let e=R();r(0,"button",5),u("click",function(){_(e);let n=m(2);return p(n.runCommand(n.CommandsEnum.Sync))}),r(1,"mat-icon"),h(2,"sync"),c()()}i&2&&b("matTooltip","Sync")}function xi(i,o){if(i&1&&(r(0,"div",22),h(1),c()),i&2){let e,t=m().$implicit,n=m(2);l(),$(" ",(e=n.headersMap2().get(t.id))==null?null:e.text," ")}}function Mi(i,o){i&1&&(r(0,"span",25),h(1," ' "),c())}function Ii(i,o){if(i&1&&(r(0,"span",27),h(1),c()),i&2){m();let e=Ue(0),t=m(3);l(),$(" ",t.translation()[e]," ")}}function Ti(i,o){if(i&1){let e=R();It(0),r(1,"span",26),u("click",function(){_(e);let n=Ue(0),a=m(3);return p(a.clickOnOriginalText(n))})("dblclick",function(){_(e);let n=m(3);return p(n.originalDbClick())}),h(2),c(),M(3,Ii,2,1,"span",27)}if(i&2){let e=o.$implicit,t=o.$index,n=m().$implicit,a=m(2),d=Tt(a.computeTranslationId(n.id,t));l(2),$(" ",e," "),l(),I(a.showTranslation()||a.translationIsOn()[d]?3:-1)}}function wi(i,o){if(i&1){let e=R();r(0,"div",21),u("focus",function(n){_(e);let a=m(2);return p(a.itemOnFocus(n))}),M(1,xi,2,1,"div",22),r(2,"div",23)(3,"div",24),M(4,Mi,2,0,"span",25),L(5,Ti,4,3,null,null,ki),c()()()}if(i&2){let e=o.$implicit,t=m(2);k("is-marked",t.markedItemsSet().has(e.id))("is-current",e.id===t.currentParagraphId()),x("id",e.id),l(),I(t.headersMap2().has(e.id)?1:-1),l(3),I(e.text.length?-1:4),l(),N(e.text)}}function Pi(i,o){i&1&&(r(0,"span"),h(1," ===== Header: "),c())}function Oi(i,o){i&1&&(r(0,"span"),h(1," ===== "),c())}function Si(i,o){if(i&1){let e=R();r(0,"button",51),u("click",function(){let n=_(e).$implicit,a=m(3);return p(a.bookViewService.setCurrentParagraphIdAndRebuildCurrentContent(n.id))}),r(1,"span",52),h(2),c(),M(3,Pi,2,0,"span"),h(4),M(5,Oi,2,0,"span"),c()}if(i&2){let e=o.$implicit,t=m(3);b("color",e.type==="header"?"accent":"primary"),l(2),$(" ",e.id," "),l(),I(e.type==="header"?3:-1),l(),$(" ",e.title.slice(0,t.lengthOfItemTitle)," "),l(),I((e==null?null:e.type)==="header"?5:-1)}}function Ri(i,o){if(i&1){let e=R();r(0,"div",45)(1,"div",52),h(2),c(),r(3,"button",53),u("click",function(){let n=_(e).$implicit,a=m(3);return p(a.bookViewService.setCurrentParagraphIdAndRebuildCurrentContent(n.id))}),r(4,"span"),h(5),c()()()}if(i&2){let e=o.$implicit;l(2),q(e.id),l(3),$(" ",e.text," ")}}function Di(i,o){if(i&1){let e=R();r(0,"div",50)(1,"div",28)(2,"button",54),u("click",function(){let n=_(e).$implicit,a=m(3);return p(a.customStylesService.setStyle(n.cssVariable,""))}),h(3," Clear "),c(),r(4,"button",55),u("click",function(){let n=_(e).$implicit,a=m(3);return p(a.customStylesService.setStyle(n.cssVariable,n.value))}),h(5," Save "),c()(),r(6,"mat-form-field")(7,"mat-label"),h(8),c(),r(9,"input",56),u("keyup",function(n){return n.stopPropagation()})("keydown",function(n){return n.stopPropagation()}),We("ngModelChange",function(n){let a=_(e).$implicit;return He(a.value,n)||(a.value=n),p(n)}),c()()()}if(i&2){let e=o.$implicit;l(2),b("disabled",!e.value),l(6),q(e.label),l(),ze("ngModel",e.value)}}function Ei(i,o){if(i&1){let e=R();r(0,"div",19)(1,"div",28)(2,"div",29)(3,"button",30),h(4,"Go home"),c(),r(5,"button",31),u("click",function(){_(e);let n=m(2);return p(n.showMenu.set(!1))}),h(6,"Close"),c()(),r(7,"div",32)(8,"div",33)(9,"mat-form-field",34)(10,"mat-label"),h(11,"Go To"),c(),r(12,"input",35,1),We("ngModelChange",function(n){_(e);let a=m(2);return He(a.idOrPattern,n)||(a.idOrPattern=n),p(n)}),u("keyup.enter",function(){_(e);let n=m(2);return p(n.goToFromInput())})("keyup",function(n){return n.stopPropagation()})("keydown",function(n){return n.stopPropagation()}),c()(),r(14,"button",36),u("click",function(){_(e);let n=m(2);return p(n.goToFromInput())}),h(15,"Go!"),c()()()(),r(16,"div",37)(17,"mat-tab-group",38)(18,"mat-tab",39)(19,"div",40)(20,"button",41),u("click",function(){_(e);let n=m(2);return p(n.bookViewService.removeAllMarks())}),h(21,"Remove All Marks"),c(),r(22,"button",41),u("click",function(){_(e);let n=m(2);return p(n.bookViewService.removeAllMarksExceptLastTwo())}),h(23," Remove All Marks Except Last Two "),c(),L(24,Si,6,5,"button",42,at),c()(),r(26,"mat-tab",39)(27,"div",43)(28,"div",44),L(29,Ri,6,2,"div",45,at),c()()(),r(31,"mat-tab",46)(32,"div",47)(33,"button",48),u("click",function(){_(e);let n=m(2);return p(n.customStylesService.resetAllStyles())}),h(34," Reset all styles "),c()(),r(35,"div",49),L(36,Di,10,3,"div",50,yi),c()()()()()}if(i&2){let e=m(2);l(12),ze("ngModel",e.idOrPattern),l(2),b("disabled",!e.idOrPattern()),l(4),b("label","Bookmarks ("+(e.currentMarkedItems().length||0)+")"),l(6),N(e.marksForMenu()),l(2),b("label","Headers ("+(e.currentHeaders().length||0)+")"),l(3),N(e.currentHeaders()),l(7),N(e.customStyles())}}function Ai(i,o){if(i&1){let e=R();r(0,"div",20)(1,"div",57)(2,"button",58),u("click",function(){_(e);let n=m(2);return p(n.showPopUpDictionary.set(!1))}),h(3," Close "),c()(),T(4,"app-dictionary-widget",18),r(5,"div",59)(6,"button",58),u("click",function(){_(e);let n=m(2);return p(n.showPopUpDictionary.set(!1))}),h(7," Close "),c()()()}if(i&2){let e=m(2);l(4),b("term",e.currentTerm())("hideSearchBar",!0)}}function Bi(i,o){if(i&1){let e=R();r(0,"div",3)(1,"button",4)(2,"mat-icon"),h(3,"home"),c()(),r(4,"button",5),u("click",function(){_(e);let n=m();return p(n.runCommand(n.CommandsEnum.MarkIt))}),r(5,"mat-icon"),h(6,"star"),c()(),r(7,"button",6),u("click",function(){_(e);let n=m();return p(n.showTranslation.set(!n.showTranslation()))}),r(8,"mat-icon"),h(9,"g_translate"),c()(),M(10,Ci,3,1,"button",7),r(11,"button",5),u("click",function(){_(e);let n=m();return p(n.runCommand(n.CommandsEnum.ShowMenu))}),r(12,"mat-icon"),h(13,"menu"),c()(),r(14,"div",8)(15,"span"),h(16),c(),r(17,"span",9),h(18),c()()(),r(19,"div",10),T(20,"div",11),r(21,"div",12)(22,"div",13)(23,"h1"),h(24),c()(),r(25,"div",14),L(26,wi,7,7,"div",15,at),c(),r(28,"div",16),h(29,"The End"),c()(),r(30,"div",17),T(31,"app-dictionary-widget",18),c()(),M(32,Ei,38,4,"div",19),M(33,Ai,8,2,"div",20)}if(i&2){let e=m();re("height",e.toolsBlockHeightPx,"px"),l(),b("matTooltip","Go Home (Home)"),l(3),k("accent-color",e.markedItemsSet().has(e.currentParagraphId())),b("matTooltip","Mark it (1)"),l(3),k("accent-color",e.showTranslation()),l(3),I(e.syncPositionServiceUrlService.isOn()?10:-1),l(),b("matTooltip","Show Menu (0 | Esc)"),l(5),$(" ",e.currentParagraphId()," "),l(2),Mt(" / ",e.nextHeader()," / ",e.bookViewService.allContentLength()-1," "),l(6),q(e.bookViewService.title()),l(2),N(e.bookContent()),l(4),re("top",e.toolsBlockHeightPx,"px"),l(),b("term",e.currentTerm())("hideSearchBar",!0),l(),I(e.showMenu()?32:-1),l(),I(e.showPopUpDictionary()?33:-1)}}function Vi(i,o){i&1&&h(0," NO CONTENT ! ")}var En=class ot{constructor(){this.bookId=g(()=>this.bookViewService.bookId()),this.translation=g(()=>this.bookViewService.translation()),this.currentHeaders=g(()=>this.bookViewService.headers()),this.currentMarkedItems=g(()=>this.bookViewService.markedItems()),this.bookContent=g(()=>this.bookViewService.currentBookContent()),this.headersMap2=g(()=>this.bookViewService.headersMap()),this.markedItemsSet=g(()=>this.bookViewService.markedItemsSet()),this.marksForMenu=g(()=>this.bookViewService.marksForMenu()),this.currentParagraphId=g(()=>this.bookViewService.currentParagraphId()),this.nextHeader=g(()=>this.bookViewService.nextHeader()),this.rebuildParagraphId=g(()=>this.bookViewService.rebuildParagraphId()),this.customStylesService=s(ln),this.customStyles=Pn(this.customStylesService.customStyles$),this.translationIsOn=C({}),this.showMenu=C(!1),this.idOrPattern=C(""),this.showTranslation=C(!1),this.currentTerm=C(""),this.showPopUpDictionary=C(!1),this.computeTranslationId=Tn,this.CommandsEnum=w,this.toolsBlockHeightPx=50,this.lengthOfItemTitle=50,this.bookViewService=s(Rn),this.syncPositionServiceUrlService=s(Ee),this.noticeService=s(_e),this.loaderService=s(De),this.delayToPreventScrollAutoFocusing=0,this.intersectionCheckerId=0,this.currentWindowWidth=window.innerWidth,this.router=s(Ht),this.activatedRoute=s(zt),this.componentContent=Qe.required("componentContent"),this.goToInputElementRef=Qe.required("goToInput"),this.goToNextItemTimeTimeoutMs=500,this.dictionaryMobileMediaWidthPx=1e3,this.destroyRef=s(ie),this.urlBookId="",this.rebuildTimestamp=0,this.injector=s(ne),me(()=>{let o=this.rebuildParagraphId();this.rebuildTimestamp=Date.now(),ae(()=>this.scrollTo(o),{injector:this.injector})})}ngOnInit(){this.activatedRoute.paramMap.pipe(wn(this.destroyRef)).subscribe({next:o=>{let e=o.get("id");!e||e===this.urlBookId||this.bookViewService.setBook(e)}})}ngAfterViewInit(){this.currentWindowWidth=window.innerWidth,this.subscribeToCustomStylesService(),this.subscribeToKeyBord(),this.intersectionCheckerId=window.setInterval(()=>{!this.rebuildTimestamp||Date.now()-this.rebuildTimestamp<500||(this.checkToAddBookContent(),this.setCurrentItemIdAfterScrolling())},100)}ngOnDestroy(){this.bookViewService.destroy(),document.onkeydown=null,clearInterval(this.intersectionCheckerId)}restoreCurrentPositionAfterWindowResizing(){let o=this.getCurrentWindowWidth();o!==this.currentWindowWidth&&(this.currentWindowWidth=o,this.bookViewService.rebuildCurrentContent())}clickOnOriginalText(o){this.setTranslationIsOn(o,!0),this.clickOnOriginalWord()}setTranslationIsOn(o,e){this.translationIsOn.update(t=>(t[o]=e,pe({},t)))}itemOnFocus(o){let t=+o.target?.id;Number.isNaN(t)||this.bookViewService.setCurrentParagraphIdWithoutRebuild(t)}clickOnOriginalWord(){this.wordToDictionary(sn())}goToFromInput(){let o=+this.idOrPattern();if(Number.isInteger(o)){this.idOrPattern.set(""),this.bookViewService.setCurrentParagraphIdAndRebuildCurrentContent(o);return}this.bookViewService.findAndGo(String(this.idOrPattern()))}scrollTo(o){let e=document.getElementById(String(o));e?.focus({preventScroll:!0}),e?.scrollIntoView({behavior:"smooth",block:"center"})}runCommand(o){if(o!==null)switch(o){case w.Sync:this.bookViewService.syncBookPosition();break;case w.GoHome:this.router.navigate(["/"]).then();break;case w.MarkIt:this.bookViewService.markCurrentItem();break;case w.GoToNextItem:this.goToNextItem();break;case w.ShowMenu:this.onShowMenu();break}}originalDbClick(){this.dictionaryMobileMediaWidthPx>window.innerWidth&&this.showPopUpDictionary.set(!0)}subscribeToCustomStylesService(){this.customStylesService.customStyles$.pipe(nn(this)).subscribe(o=>{o.forEach(e=>{this.componentContent().nativeElement.style.setProperty(e.cssVariable,e.value)})})}subscribeToKeyBord(){document.onkeydown=o=>{let e=un(o);this.runCommand(e)}}checkToAddBookContent(){let e=document.getElementById("start-block"),t=document.getElementById("end-block"),n=e?.getBoundingClientRect().bottom||0,a=t?.getBoundingClientRect().top||0,d=window.innerHeight;n+2e3>0&&this.bookViewService.addItemAtStart(),a-d-2e3<0&&this.bookViewService.addItemToEnd()}setCurrentItemIdAfterScrolling(){if(this.showMenu()||Date.now()-this.delayToPreventScrollAutoFocusing<this.goToNextItemTimeTimeoutMs)return;let o=(document.getElementById(String(this.currentParagraphId()))?.getBoundingClientRect().bottom||0)-50+10;if(innerHeight-(document.getElementById(String(this.currentParagraphId()))?.getBoundingClientRect().top||0)<0){this.bookViewService.setCurrentParagraphIdWithoutRebuild(this.currentParagraphId()-1),document.getElementById(String(this.currentParagraphId()))?.focus({preventScroll:!0});return}o<0&&(this.bookViewService.setCurrentParagraphIdWithoutRebuild(this.currentParagraphId()+1),document.getElementById(String(this.currentParagraphId()))?.focus({preventScroll:!0}))}onShowMenu(){this.showMenu.update(o=>!o),this.showMenu()&&setTimeout(()=>{this.goToInputElementRef().nativeElement.focus()},100)}goToNextItem(){this.scrollTo(this.currentParagraphId()+1)}wordToDictionary(o){this.currentTerm.set(o)}getCurrentWindowWidth(){return window.innerWidth}static{this.\u0275fac=function(e){return new(e||ot)}}static{this.\u0275cmp=E({type:ot,selectors:[["app-book"]],viewQuery:function(e,t){e&1&&Ct(t.componentContent,fi,5)(t.goToInputElementRef,vi,5),e&2&&xt(2)},hostBindings:function(e,t){e&1&&u("resize",function(){return t.restoreCurrentPositionAfterWindowResizing()},vt)},decls:4,vars:1,consts:[["componentContent",""],["goToInput",""],[1,"component-content"],[1,"tools-block"],["mat-icon-button","","routerLink","/",1,"primary-color",3,"matTooltip"],["mat-icon-button","",1,"primary-color",3,"click","matTooltip"],["mat-icon-button","",1,"primary-color",3,"click"],["mat-icon-button","",1,"primary-color",3,"matTooltip"],[1,"status"],[1,"hide-for-small-screen"],[1,"book-wrapper"],[1,"left-placeholder"],["id","book",1,"book"],["id","start-block"],[1,"items"],["tabindex","0",1,"item-block",3,"is-marked","is-current"],["id","end-block"],[1,"dictionary"],[3,"term","hideSearchBar"],[1,"popup-menu"],[1,"popup-menu","dictionary"],["tabindex","0",1,"item-block",3,"focus"],[1,"item-header"],[1,"item-content"],[1,"text"],[1,"empty-paragraph"],[1,"original",3,"click","dblclick"],[1,"translation"],[1,"buttons"],[1,"left"],["mat-button","","color","primary","routerLink","/"],["mat-button","","color","primary",3,"click"],[1,"right"],[1,"go-to"],["appearance","outline",1,"go-to-input"],["matInput","",3,"ngModelChange","keyup.enter","keyup","keydown","ngModel"],["mat-button","","color","primary",3,"click","disabled"],[1,"main"],["mat-stretch-tabs","false","mat-align-tabs","center","animationDuration","0ms"],[3,"label"],[1,"bookmarks"],["mat-button","",1,"warn-color",3,"click"],["mat-button","",3,"color"],[1,"headers-wrapper"],[1,"headers"],[1,"header"],["label","Styles"],[1,"reset-all"],["color","primary","mat-button","",3,"click"],[1,"custom-styles"],[1,"style-item"],["mat-button","",3,"click","color"],[1,"id-label"],["mat-button","",1,"button","primary-color",3,"click"],["color","primary","mat-button","",1,"clear-button",3,"click","disabled"],["color","primary","mat-button","",1,"save-button",3,"click"],["matInput","",3,"keyup","keydown","ngModelChange","ngModel"],[1,"top"],["mat-button","","color","primary",1,"button","close-button",3,"click"],[1,"bottom"]],template:function(e,t){e&1&&(r(0,"div",2,0),M(2,Bi,34,20)(3,Vi,1,0),c()),e&2&&(l(2),I(t.bookId()?2:3))},dependencies:[Pt,yn,tt,kn,Nt,Lt,Ft,mn,dn,on,an,en,Jt,Yt,Kt,qt,jt,Xt,Gt,Cn,xn,Mn,Wt,In,cn],styles:["[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:0;width:100vw;max-width:100vw;position:fixed;top:4px;left:0;height:calc(100vh - 4px);max-height:calc(100vh - 4px);box-sizing:border-box;background:var(--background-color-main);background-image:var(--book-background-image);background-repeat:repeat;font-family:var(--font-family);color:var(--font-color-main)}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], [_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{color:var(--font-color-main);border:1px solid var(--color-accent)}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]     .mdc-notched-outline__leading, [_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]     .mdc-notched-outline__notch, [_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]     .mdc-notched-outline__trailing, [_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]     mat-label{border-color:var(--color-accent);color:var(--font-color-main)}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .tools-block[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;box-shadow:0 1px gray}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .tools-block[_ngcontent-%COMP%]   .chosen[_ngcontent-%COMP%]{color:var(--color-accent)}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]{flex:1;max-width:var(--max-book-width);min-width:min(var(--max-book-width),95vw);overflow:auto;padding:var(--padding-main)}@media(max-width:600px){[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]{padding:var(--padding-small)}}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   #start-block[_ngcontent-%COMP%], [_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   #end-block[_ngcontent-%COMP%]{display:flex;align-items:center}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   #start-block[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], [_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   #end-block[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item-block[_ngcontent-%COMP%]{display:block;padding:0;margin:4px}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item-block.is-marked[_ngcontent-%COMP%]{border-left:2px solid var(--color-primary)}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item-block.is-current[_ngcontent-%COMP%]{outline:solid var(--color-accent) 2px;outline-offset:2px}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item-block.hide-menu[_ngcontent-%COMP%]{display:flex}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item-block.hide-menu[_ngcontent-%COMP%]   .extra[_ngcontent-%COMP%]{display:none!important}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item-block.hide-menu[_ngcontent-%COMP%]   .tools[_ngcontent-%COMP%]{display:block!important}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item-block.hide-menu[_ngcontent-%COMP%]   .tools[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(.extra){display:block!important}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item-block[_ngcontent-%COMP%]   .item-header[_ngcontent-%COMP%]{padding:var(--padding-small);font-size:var(--font-size-original-text);text-align:center;color:var(--font-color-accent);background:var(--background-color-accent)}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item-block[_ngcontent-%COMP%]   .item-header.header-is-marked[_ngcontent-%COMP%]{text-decoration:underline}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item-block[_ngcontent-%COMP%]   .item-header-editor[_ngcontent-%COMP%]{padding:var(--padding-small)}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item-block[_ngcontent-%COMP%]   .item-header-editor[_ngcontent-%COMP%]   .header-name-input[_ngcontent-%COMP%]{display:flex}@media(max-width:600px){[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item-block[_ngcontent-%COMP%]   .item-header-editor[_ngcontent-%COMP%]   .header-name-input[_ngcontent-%COMP%]{flex-direction:column}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item-block[_ngcontent-%COMP%]   .item-header-editor[_ngcontent-%COMP%]   .header-name-input[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{display:flex;justify-content:center}}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item-block[_ngcontent-%COMP%]   .item-header-editor[_ngcontent-%COMP%]   .header-name-input[_ngcontent-%COMP%]   .input-form[_ngcontent-%COMP%]{flex:1}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item-block[_ngcontent-%COMP%]   .item-header-editor[_ngcontent-%COMP%]   .header-level-input[_ngcontent-%COMP%]{margin-top:-16px}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item-block[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]{flex:1;display:block;padding:var(--padding-small)}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item-block[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%]{font-size:var(--font-size-original-text)}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item-block[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .translation[_ngcontent-%COMP%]{font-size:var(--font-size-translation-text);color:var(--font-color-translation)}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item-block[_ngcontent-%COMP%]   .id-label[_ngcontent-%COMP%]{color:var(--color-accent);font-weight:500}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]{position:fixed;z-index:10;width:calc(100% - 2 * var(--padding-main));height:100%;top:0;left:0;display:flex;flex-direction:column;align-items:center;background:#f2f2f2;padding:var(--padding-main);overflow:auto}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--padding-small)}@media(max-width:600px){[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{flex-direction:column;justify-content:center}}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], [_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{display:flex;align-items:center}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .go-to[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--padding-small);padding:var(--padding-small)}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .go-to[_ngcontent-%COMP%]   .go-to-input[_ngcontent-%COMP%]{margin-bottom:-16px}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{width:100%;min-height:100%;margin-left:var(--padding-main);margin-right:var(--padding-main)}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]     .mat-mdc-tab-body-content{overflow:hidden}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .bookmarks[_ngcontent-%COMP%], [_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .fragments[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;overflow:visible}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .headers-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .headers-wrapper[_ngcontent-%COMP%]   .headers[_ngcontent-%COMP%]{display:block}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .headers-wrapper[_ngcontent-%COMP%]   .headers[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{display:flex}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .headers-wrapper[_ngcontent-%COMP%]   .headers[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-is-marked[_ngcontent-%COMP%]{text-decoration:underline}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .headers-wrapper[_ngcontent-%COMP%]   .headers[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .id-label[_ngcontent-%COMP%]{display:flex;width:50px;justify-content:end;align-items:center;color:var(--color-accent);transform:translateY(-2px)}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .headers-wrapper[_ngcontent-%COMP%]   .headers[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{width:fit-content}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .audio-settings[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .audio-settings[_ngcontent-%COMP%]   .audio-setting-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;width:100%}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .audio-settings[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:400px}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .audio-settings[_ngcontent-%COMP%]   .mat-mdc-slider[_ngcontent-%COMP%]{width:400px}@media(max-width:420px){[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .audio-settings[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:90%}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .audio-settings[_ngcontent-%COMP%]   .mat-mdc-slider[_ngcontent-%COMP%]{width:90%}}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .custom-styles[_ngcontent-%COMP%]   .style-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--padding-mini)}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .custom-styles[_ngcontent-%COMP%]   .style-item[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{width:fit-content}@media(max-width:600px){[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .custom-styles[_ngcontent-%COMP%]   .style-item[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{flex-direction:column;padding-bottom:16px}}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .custom-styles[_ngcontent-%COMP%]   .style-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .original[_ngcontent-%COMP%], [_nghost-%COMP%]   .translation[_ngcontent-%COMP%]{white-space:pre-line;overflow-wrap:break-word}[_nghost-%COMP%]   #end-block[_ngcontent-%COMP%]{font-size:var(--font-size-original-text);font-weight:700;width:100%;justify-content:center;padding:var(--padding-main) 0}[_nghost-%COMP%]   .primary-color[_ngcontent-%COMP%]{color:var(--color-primary)}[_nghost-%COMP%]   .warn-color[_ngcontent-%COMP%]{color:var(--color-warn)}[_nghost-%COMP%]   .primary-color.accent-color[_ngcontent-%COMP%], [_nghost-%COMP%]   .accent-color[_ngcontent-%COMP%]{color:var(--color-accent)}.remove-all-header-marks-button[_ngcontent-%COMP%]{margin-bottom:30px}.book-wrapper[_ngcontent-%COMP%]{display:flex;overflow:auto;justify-content:center}.book-wrapper[_ngcontent-%COMP%]   .dictionary[_ngcontent-%COMP%]{overflow:auto;width:auto;max-width:500px}@media(max-width:1000px){.book-wrapper[_ngcontent-%COMP%]   .dictionary[_ngcontent-%COMP%]{display:none}}.translate-export-container[_ngcontent-%COMP%]{max-width:400px;margin:auto}.popup-menu.dictionary[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]{outline:1px solid green;width:100%;margin:24px 0}.popup-menu.dictionary[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%], .popup-menu.dictionary[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]{width:100%}.empty-paragraph[_ngcontent-%COMP%]{opacity:.25}.left-placeholder[_ngcontent-%COMP%]{height:200px}.left-placeholder[_ngcontent-%COMP%], .dictionary[_ngcontent-%COMP%]{flex:1}@media(max-width:1600px){.left-placeholder[_ngcontent-%COMP%]{display:none}}"],changeDetection:0})}};En=ct([tn()],En);export{En as BookComponent};

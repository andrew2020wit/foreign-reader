import{a as Qe,c as Zt,d as Jt,e as en,f as tn,g as nn,h as an,i as on}from"./chunk-56JZ4CQZ.js";import{a as rn,b as cn}from"./chunk-R4XSXRI6.js";import{a as Ht,b as zt,c as Wt,d as Ut,f as jt,h as Gt,j as Qt,k as Xt,m as qt,n as $t,o as Kt,p as Yt}from"./chunk-4SGPFLJU.js";import{a as ln,b as dn}from"./chunk-SNGSJHJ6.js";import{b as Nt,c as Xe}from"./chunk-ELY4YQEL.js";import{b as Rt,c as Me,d as Ie,f as Dt,h as Et,i as je,o as Te}from"./chunk-3FORO6VH.js";import{a as sn}from"./chunk-5RGETHFF.js";import{$ as p,Ab as Mt,B as mt,Ba as ft,Bb as He,C as _e,Cb as N,Da as D,Ea as A,Fa as B,Fc as ae,Ga as Y,Gb as q,Ha as ye,Hb as ze,Ia as Ae,J as ht,Jb as J,Jc as H,K as pe,Kb as We,L as ut,M as re,Mc as oe,Na as vt,O as Se,Oa as C,Ob as ne,Oc as ce,Pa as w,Pb as y,Pc as we,Qa as P,Qb as ie,Qc as At,R as _t,Ra as Be,Rc as Pe,Sa as F,Sc as Bt,T as E,Ta as L,Tc as Ft,U as j,Ua as _,Va as r,Wa as s,Wc as Lt,X as d,Xa as M,Xc as Vt,Zb as It,_b as Ue,a as me,aa as b,ab as S,ba as be,bb as Fe,bd as Ge,ca as pt,cb as h,cc as Tt,da as ge,dc as xe,e as $,eb as m,f as ot,fa as Re,fb as z,g as he,ga as O,gb as W,ha as K,hb as Z,i as rt,ib as V,j as st,ja as x,jb as g,ka as De,kb as f,l as ct,la as se,ma as fe,mb as kt,na as G,nb as yt,oa as bt,ob as ee,pb as te,pc as wt,qb as k,rb as U,rc as Pt,sb as u,t as lt,ta as gt,tb as Q,ua as c,ub as X,v as ue,vb as xt,vc as Ot,wa as ve,wb as Le,x as dt,xa as ke,xb as Ve,xc as St,yb as Ne,yc as Ce,za as Ee,zb as Ct}from"./chunk-X4ZIZC3B.js";var v=(function(i){return i[i.GoHome=0]="GoHome",i[i.GoToNextItem=1]="GoToNextItem",i[i.GoToNextMark=2]="GoToNextMark",i[i.GoToPrevMark=3]="GoToPrevMark",i[i.MarkIt=4]="MarkIt",i[i.ShowMenu=5]="ShowMenu",i[i.Translate=6]="Translate",i[i.ShowTranslationAll=7]="ShowTranslationAll",i[i.TranslateOne=8]="TranslateOne",i[i.Sync=9]="Sync",i})(v||{});var mn=[{command:v.GoHome,keys:["Home"]},{command:v.ShowMenu,keys:["0","Escape"]},{command:v.GoToNextItem,keys:["n"]},{command:v.TranslateOne,keys:["h"]},{command:v.GoToNextMark,keys:["m"]},{command:v.GoToPrevMark,keys:["k"]},{command:v.ShowTranslationAll,keys:["t"]},{command:v.MarkIt,keys:["1"]},{command:v.Translate,keys:["2"]},{command:v.Sync,keys:["5"]}];function hn(i){let a=i.key,e=mn.find(t=>t.keys.includes(a));return e?e.command:null}var Ze=["*"];function Rn(i,a){i&1&&W(0)}var Dn=["tabListContainer"],En=["tabList"],An=["tabListInner"],Bn=["nextPaginator"],Fn=["previousPaginator"],Ln=["content"];function Vn(i,a){}var Nn=["tabBodyWrapper"],Hn=["tabHeader"];function zn(i,a){}function Wn(i,a){if(i&1&&ye(0,zn,0,0,"ng-template",12),i&2){let e=m().$implicit;_("cdkPortalOutlet",e.templateLabel)}}function Un(i,a){if(i&1&&u(0),i&2){let e=m().$implicit;Q(e.textLabel)}}function jn(i,a){if(i&1){let e=S();r(0,"div",7,2),h("click",function(){let n=p(e),o=n.$implicit,l=n.$index,R=m(),T=ee(1);return b(R._handleClick(o,T,l))})("cdkFocusChange",function(n){let o=p(e).$index,l=m();return b(l._tabFocusChanged(n,o))}),M(2,"span",8)(3,"div",9),r(4,"span",10)(5,"span",11),w(6,Wn,1,1,null,12)(7,Un,1,1),s()()()}if(i&2){let e=a.$implicit,t=a.$index,n=ee(1),o=m();U(e.labelClass),k("mdc-tab--active",o.selectedIndex===t),_("id",o._getTabLabelId(e,t))("disabled",e.disabled)("fitInkBarToContent",o.fitInkBarToContent),C("tabIndex",o._getTabIndex(t))("aria-posinset",t+1)("aria-setsize",o._tabs.length)("aria-controls",o._getTabContentId(t))("aria-selected",o.selectedIndex===t)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),c(3),_("matRippleTrigger",n)("matRippleDisabled",e.disabled||o.disableRipple),c(3),P(e.templateLabel?6:7)}}function Gn(i,a){i&1&&W(0)}function Qn(i,a){if(i&1){let e=S();r(0,"mat-tab-body",13),h("_onCentered",function(){p(e);let n=m();return b(n._removeTabBodyWrapperHeight())})("_onCentering",function(n){p(e);let o=m();return b(o._setTabBodyWrapperHeight(n))})("_beforeCentering",function(n){p(e);let o=m();return b(o._bodyCentered(n))}),s()}if(i&2){let e=a.$implicit,t=a.$index,n=m();U(e.bodyClass),_("id",n._getTabContentId(t))("content",e.content)("position",e.position)("animationDuration",n.animationDuration)("preserveContent",n.preserveContent),C("tabindex",n.contentTabIndex!=null&&n.selectedIndex===t?n.contentTabIndex:null)("aria-labelledby",n._getTabLabelId(e,t))("aria-hidden",n.selectedIndex!==t)}}var Xn=new j("MatTabContent"),qn=(()=>{class i{template=d(ke);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=B({type:i,selectors:[["","matTabContent",""]],features:[N([{provide:Xn,useExisting:i}])]})}return i})(),$n=new j("MatTabLabel"),bn=new j("MAT_TAB"),Kn=(()=>{class i extends Et{_closestTab=d(bn,{optional:!0});static \u0275fac=(()=>{let e;return function(n){return(e||(e=fe(i)))(n||i)}})();static \u0275dir=B({type:i,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[N([{provide:$n,useExisting:i}]),Y]})}return i})(),gn=new j("MAT_TAB_GROUP"),Je=(()=>{class i{_viewContainerRef=d(ft);_closestTabGroup=d(gn,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new he;position=null;origin=null;isActive=!1;constructor(){d(xe).load(we)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Dt(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=D({type:i,selectors:[["mat-tab"]],contentQueries:function(t,n,o){if(t&1&&Z(o,Kn,5)(o,qn,7,ke),t&2){let l;g(l=f())&&(n.templateLabel=l.first),g(l=f())&&(n._explicitContent=l.first)}},viewQuery:function(t,n){if(t&1&&V(ke,7),t&2){let o;g(o=f())&&(n._implicitContent=o.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(t,n){t&2&&C("id",null)},inputs:{disabled:[2,"disabled","disabled",y],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[N([{provide:bn,useExisting:i}]),se],ngContentSelectors:Ze,decls:1,vars:0,template:function(t,n){t&1&&(z(),Ae(0,Rn,1,0,"ng-template"))},encapsulation:2})}return i})(),qe="mdc-tab-indicator--active",un="mdc-tab-indicator--no-transition",$e=class{_items;_currentItem;constructor(a){this._items=a}hide(){this._items.forEach(a=>a.deactivateInkBar()),this._currentItem=void 0}alignToElement(a){let e=this._items.find(n=>n.elementRef.nativeElement===a),t=this._currentItem;if(e!==t&&(t?.deactivateInkBar(),e)){let n=t?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(n),this._currentItem=e}}},Yn=(()=>{class i{_elementRef=d(G);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let t=this._elementRef.nativeElement;if(!e||!t.getBoundingClientRect||!this._inkBarContentElement){t.classList.add(qe);return}let n=t.getBoundingClientRect(),o=e.width/n.width,l=e.left-n.left;t.classList.add(un),this._inkBarContentElement.style.setProperty("transform",`translateX(${l}px) scaleX(${o})`),t.getBoundingClientRect(),t.classList.remove(un),t.classList.add(qe),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(qe)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,t=this._inkBarElement=e.createElement("span"),n=this._inkBarContentElement=e.createElement("span");t.className="mdc-tab-indicator",n.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",t.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=B({type:i,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",y]}})}return i})();var fn=(()=>{class i extends Yn{elementRef=d(G);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(n){return(e||(e=fe(i)))(n||i)}})();static \u0275dir=B({type:i,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(t,n){t&2&&(C("aria-disabled",!!n.disabled),k("mat-mdc-tab-disabled",n.disabled))},inputs:{disabled:[2,"disabled","disabled",y]},features:[Y]})}return i})(),_n={passive:!0},Zn=650,Jn=100,ei=(()=>{class i{_elementRef=d(G);_changeDetectorRef=d(ne);_viewportRuler=d(Me);_dir=d(ae,{optional:!0});_ngZone=d(K);_platform=d(Ue);_sharedResizeObserver=d(Qt);_injector=d(ge);_renderer=d(Ee);_animationsDisabled=oe();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new he;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new he;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let t=isNaN(e)?0:e;this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}_selectedIndex=0;selectFocusedIndex=new O;indexFocused=new O;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),_n),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),_n))}ngAfterContentInit(){let e=this._dir?this._dir.change:ct("ltr"),t=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(mt(32),re(this._destroyed)),n=this._viewportRuler.change(150).pipe(re(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new St(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),ve(o,{injector:this._injector}),ue(e,n,t,this._items.changes,this._itemsResized()).pipe(re(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(l=>{this.indexFocused.emit(l),this._setTabFocus(l)})}_itemsResized(){return typeof ResizeObserver!="function"?rt:this._items.changes.pipe(pe(this._items),ut(e=>new ot(t=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(o=>t.next(o));return e.forEach(o=>n.observe(o.elementRef.nativeElement)),()=>{n.disconnect()}}))),ht(1),dt(e=>e.some(t=>t.contentRect.width>0&&t.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!Ot(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let t=this._items.get(this.focusIndex);t&&!t.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let t=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?t.scrollLeft=0:t.scrollLeft=t.scrollWidth-t.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,t=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(t)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let t=this._tabListContainer.nativeElement.offsetWidth,n=(e=="before"?-1:1)*t/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let t=this._items?this._items.toArray()[e]:null;if(!t)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:l}=t.elementRef.nativeElement,R,T;this._getLayoutDirection()=="ltr"?(R=o,T=R+l):(T=this._tabListInner.nativeElement.offsetWidth-o,R=T-l);let Oe=this.scrollDistance,at=this.scrollDistance+n;R<Oe?this.scrollDistance-=Oe-R:T>at&&(this.scrollDistance+=Math.min(T-at,R-Oe))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,t=this._elementRef.nativeElement.offsetWidth,n=e-t>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,t=this._tabListContainer.nativeElement.offsetWidth;return e-t||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,t=e?e.elementRef.nativeElement:null;t?this._inkBar.alignToElement(t):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,t){t&&t.button!=null&&t.button!==0||(this._stopInterval(),lt(Zn,Jn).pipe(re(ue(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:o}=this._scrollHeader(e);(o===0||o>=n)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let t=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(t,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:t,distance:this._scrollDistance}}static \u0275fac=function(t){return new(t||i)};static \u0275dir=B({type:i,inputs:{disablePagination:[2,"disablePagination","disablePagination",y],selectedIndex:[2,"selectedIndex","selectedIndex",ie]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return i})(),ti=(()=>{class i extends ei{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new $e(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=fe(i)))(n||i)}})();static \u0275cmp=D({type:i,selectors:[["mat-tab-header"]],contentQueries:function(t,n,o){if(t&1&&Z(o,fn,4),t&2){let l;g(l=f())&&(n._items=l)}},viewQuery:function(t,n){if(t&1&&V(Dn,7)(En,7)(An,7)(Bn,5)(Fn,5),t&2){let o;g(o=f())&&(n._tabListContainer=o.first),g(o=f())&&(n._tabList=o.first),g(o=f())&&(n._tabListInner=o.first),g(o=f())&&(n._nextPaginator=o.first),g(o=f())&&(n._previousPaginator=o.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(t,n){t&2&&k("mat-mdc-tab-header-pagination-controls-enabled",n._showPaginationControls)("mat-mdc-tab-header-rtl",n._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",y]},features:[Y],ngContentSelectors:Ze,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(t,n){t&1&&(z(),r(0,"div",5,0),h("click",function(){return n._handlePaginatorClick("before")})("mousedown",function(l){return n._handlePaginatorPress("before",l)})("touchend",function(){return n._stopInterval()}),M(2,"div",6),s(),r(3,"div",7,1),h("keydown",function(l){return n._handleKeydown(l)}),r(5,"div",8,2),h("cdkObserveContent",function(){return n._onContentChanges()}),r(7,"div",9,3),W(9),s()()(),r(10,"div",10,4),h("mousedown",function(l){return n._handlePaginatorPress("after",l)})("click",function(){return n._handlePaginatorClick("after")})("touchend",function(){return n._stopInterval()}),M(12,"div",6),s()),t&2&&(k("mat-mdc-tab-header-pagination-disabled",n._disableScrollBefore),_("matRippleDisabled",n._disableScrollBefore||n.disableRipple),c(3),k("_mat-animation-noopable",n._animationsDisabled),c(2),C("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby||null),c(5),k("mat-mdc-tab-header-pagination-disabled",n._disableScrollAfter),_("matRippleDisabled",n._disableScrollAfter||n.disableRipple))},dependencies:[ce,Pt],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2})}return i})(),ni=new j("MAT_TABS_CONFIG"),pn=(()=>{class i extends je{_host=d(Ke);_ngZone=d(K);_centeringSub=$.EMPTY;_leavingSub=$.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(pe(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=B({type:i,selectors:[["","matTabBodyHost",""]],features:[Y]})}return i})(),Ke=(()=>{class i{_elementRef=d(G);_dir=d(ae,{optional:!0});_ngZone=d(K);_injector=d(ge);_renderer=d(Ee);_diAnimationsDisabled=oe();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=$.EMPTY;_position;_previousPosition;_onCentering=new O;_beforeCentering=new O;_afterLeavingCenter=new O;_onCentered=new O(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=d(ne);this._dirChangeSubscription=this._dir.change.subscribe(t=>{this._computePositionAnimationState(t),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),ve(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,t=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),n.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",t),this._renderer.listen(e,"transitioncancel",t)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),ve(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=D({type:i,selectors:[["mat-tab-body"]],viewQuery:function(t,n){if(t&1&&V(pn,5)(Ln,5),t&2){let o;g(o=f())&&(n._portalHost=o.first),g(o=f())&&(n._contentElement=o.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(t,n){t&2&&C("inert",n._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(t,n){t&1&&(r(0,"div",1,0),ye(2,Vn,0,0,"ng-template",2),s()),t&2&&k("mat-tab-body-content-left",n._position==="left")("mat-tab-body-content-right",n._position==="right")("mat-tab-body-content-can-animate",n._position==="center"||n._previousPosition==="center")},dependencies:[pn,Rt],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2})}return i})(),vn=(()=>{class i{_elementRef=d(G);_changeDetectorRef=d(ne);_ngZone=d(K);_tabsSubscription=$.EMPTY;_tabLabelSubscription=$.EMPTY;_tabBodySubscription=$.EMPTY;_diAnimationsDisabled=oe();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new bt;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let t=e+"";this._animationDuration=/^\d+$/.test(t)?e+"ms":t}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let t=this._elementRef.nativeElement.classList;t.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&t.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new O;focusChange=new O;animationDone=new O;selectedTabChange=new O(!0);_groupId;_isServer=!d(Ue).isBrowser;constructor(){let e=d(ni,{optional:!0});this._groupId=d(Ce).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let t=this._selectedIndex==null;if(!t){this.selectedTabChange.emit(this._createChangeEvent(e));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((n,o)=>n.isActive=o===e),t||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((t,n)=>{t.position=n-e,this._selectedIndex!=null&&t.position==0&&!t.origin&&(t.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let t=this._tabs.toArray(),n;for(let o=0;o<t.length;o++)if(t[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,n=t[o];break}!n&&t[e]&&Promise.resolve().then(()=>{t[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(pe(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(t=>t._closestTabGroup===this||!t._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let t=this._tabHeader;t&&(t.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let t=new Ye;return t.index=e,this._tabs&&this._tabs.length&&(t.tab=this._tabs.toArray()[e]),t}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=ue(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,t){return e.id||`${this._groupId}-label-${t}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let t=this._tabBodyWrapper.nativeElement;t.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(t.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,t,n){t.focusIndex=n,e.disabled||(this.selectedIndex=n)}_getTabIndex(e){let t=this._lastFocusedTabIndex??this.selectedIndex;return e===t?0:-1}_tabFocusChanged(e,t){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=t)}_bodyCentered(e){e&&this._tabBodies?.forEach((t,n)=>t._setActiveClass(n===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=D({type:i,selectors:[["mat-tab-group"]],contentQueries:function(t,n,o){if(t&1&&Z(o,Je,5),t&2){let l;g(l=f())&&(n._allTabs=l)}},viewQuery:function(t,n){if(t&1&&V(Nn,5)(Hn,5)(Ke,5),t&2){let o;g(o=f())&&(n._tabBodyWrapper=o.first),g(o=f())&&(n._tabHeader=o.first),g(o=f())&&(n._tabBodies=o)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(t,n){t&2&&(C("mat-align-tabs",n.alignTabs),U("mat-"+(n.color||"primary")),te("--mat-tab-animation-duration",n.animationDuration),k("mat-mdc-tab-group-dynamic-height",n.dynamicHeight)("mat-mdc-tab-group-inverted-header",n.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",n.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",y],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",y],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",y],selectedIndex:[2,"selectedIndex","selectedIndex",ie],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",ie],disablePagination:[2,"disablePagination","disablePagination",y],disableRipple:[2,"disableRipple","disableRipple",y],preserveContent:[2,"preserveContent","preserveContent",y],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[N([{provide:gn,useExisting:i}])],ngContentSelectors:Ze,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(t,n){t&1&&(z(),r(0,"mat-tab-header",3,0),h("indexFocused",function(l){return n._focusChanged(l)})("selectFocusedIndex",function(l){return n.selectedIndex=l}),F(2,jn,8,17,"div",4,Be),s(),w(4,Gn,1,0),r(5,"div",5,1),F(7,Qn,1,10,"mat-tab-body",6,Be),s()),t&2&&(_("selectedIndex",n.selectedIndex||0)("disableRipple",n.disableRipple)("disablePagination",n.disablePagination),vt("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby),c(2),L(n._tabs),c(2),P(n._isServer?4:-1),c(),k("_mat-animation-noopable",n._animationsDisabled()),c(2),L(n._tabs))},dependencies:[ti,fn,Tt,ce,je,Ke],styles:[`.mdc-tab {
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
`],encapsulation:2})}return i})(),Ye=class{index;tab};var kn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=A({type:i});static \u0275inj=E({imports:[H]})}return i})();var yn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=A({type:i});static \u0275inj=E({imports:[Te,Qe,H,Ie,$t,Qe]})}return i})();var xn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=A({type:i});static \u0275inj=E({imports:[Pe,H]})}return i})();var Cn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=A({type:i});static \u0275inj=E({imports:[Pe,Te,H,Ie]})}return i})();var ri=["input"],si=["label"],ci=["*"],et={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},li=new j("mat-checkbox-default-options",{providedIn:"root",factory:()=>et}),I=(function(i){return i[i.Init=0]="Init",i[i.Checked=1]="Checked",i[i.Unchecked=2]="Unchecked",i[i.Indeterminate=3]="Indeterminate",i})(I||{}),tt=class{source;checked},di=(()=>{class i{_elementRef=d(G);_changeDetectorRef=d(ne);_ngZone=d(K);_animationsDisabled=oe();_options=d(li,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new tt;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new O;indeterminateChange=new O;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=I.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){d(xe).load(we);let e=d(new ze("tabindex"),{optional:!0});this._options=this._options||et,this.color=this._options.color||et.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=d(Ce).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(I.Indeterminate):this._transitionCheckState(this.checked?I.Checked:I.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=x(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,n=this._getAnimationTargetElement();if(!(t===e||!n)&&(this._currentAnimationClass&&n.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){n.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{n.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?I.Checked:I.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return"";switch(e){case I.Init:if(t===I.Checked)return this._animationClasses.uncheckedToChecked;if(t==I.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case I.Unchecked:return t===I.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case I.Checked:return t===I.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case I.Indeterminate:return t===I.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=D({type:i,selectors:[["mat-checkbox"]],viewQuery:function(t,n){if(t&1&&V(ri,5)(si,5),t&2){let o;g(o=f())&&(n._inputElement=o.first),g(o=f())&&(n._labelElement=o.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(t,n){t&2&&(Fe("id",n.id),C("tabindex",null)("aria-label",null)("aria-labelledby",null),U(n.color?"mat-"+n.color:"mat-accent"),k("_mat-animation-noopable",n._animationsDisabled)("mdc-checkbox--disabled",n.disabled)("mat-mdc-checkbox-disabled",n.disabled)("mat-mdc-checkbox-checked",n.checked)("mat-mdc-checkbox-disabled-interactive",n.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",y],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",y],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",y],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:ie(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",y],checked:[2,"checked","checked",y],disabled:[2,"disabled","disabled",y],indeterminate:[2,"indeterminate","indeterminate",y]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[N([{provide:Ht,useExisting:_t(()=>i),multi:!0},{provide:Wt,useExisting:i,multi:!0}]),se],ngContentSelectors:ci,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(t,n){if(t&1&&(z(),r(0,"div",3),h("click",function(l){return n._preventBubblingFromLabel(l)}),r(1,"div",4,0)(3,"div",5),h("click",function(){return n._onTouchTargetClick()}),s(),r(4,"input",6,1),h("blur",function(){return n._onBlur()})("click",function(){return n._onInputClick()})("change",function(l){return n._onInteractionEvent(l)}),s(),M(6,"div",7),r(7,"div",8),be(),r(8,"svg",9),M(9,"path",10),s(),pt(),M(10,"div",11),s(),M(11,"div",12),s(),r(12,"label",13,2),W(14),s()()),t&2){let o=ee(2);_("labelPosition",n.labelPosition),c(4),k("mdc-checkbox--selected",n.checked),_("checked",n.checked)("indeterminate",n.indeterminate)("disabled",n.disabled&&!n.disabledInteractive)("id",n.inputId)("required",n.required)("tabIndex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex),C("aria-label",n.ariaLabel||null)("aria-labelledby",n.ariaLabelledby)("aria-describedby",n.ariaDescribedby)("aria-checked",n.indeterminate?"mixed":null)("aria-controls",n.ariaControls)("aria-disabled",n.disabled&&n.disabledInteractive?!0:null)("aria-expanded",n.ariaExpanded)("aria-owns",n.ariaOwns)("name",n.name)("value",n.value),c(7),_("matRippleTrigger",o)("matRippleDisabled",n.disableRipple||n.disabled)("matRippleCentered",!0),c(),_("for",n.inputId)}},dependencies:[ce,nn],styles:[`.mdc-checkbox {
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
`],encapsulation:2,changeDetection:0})}return i})(),Mn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=A({type:i});static \u0275inj=E({imports:[di,H]})}return i})();var mi="-";function de(i,a){return i+mi+a}function In(i,a){let t=!a?.manualCleanup?a?.injector?.get(Re)??d(Re):null,n=hi(a?.equal),o;a?.requireSync?o=x({kind:0},{equal:n}):o=x({kind:1,value:a?.initialValue},{equal:n});let l,R=i.subscribe({next:T=>o.set({kind:1,value:T}),error:T=>{o.set({kind:2,error:T}),l?.()},complete:()=>{l?.()}});if(a?.requireSync&&o().kind===0)throw new Se(601,!1);return l=t?.onDestroy(R.unsubscribe.bind(R)),q(()=>{let T=o();switch(T.kind){case 1:return T.value;case 2:throw T.error;case 0:throw new Se(601,!1)}},{equal:a?.equal})}function hi(i=Object.is){return(a,e)=>a.kind===1&&e.kind===1&&i(a.value,e.value)}function Tn(i,a,e){let t=[],n=[];return i.forEach(o=>t.push({id:o.id,type:"header",title:o.text})),a.forEach(o=>t.push({id:o,type:"mark",title:e[o].text[0]})),t.sort((o,l)=>o.id>l.id||o.id===l.id&&o.type==="header"?1:-1),t.forEach((o,l)=>{let R=t[l+1];!(o.type==="header"&&R?.type==="header")&&!(l===t.length-1&&o.type==="header")&&n.push(o)}),n}var ui=["componentContent"],_i=["goToInput"],nt=(i,a)=>a.id,pi=(i,a)=>a+i,bi=(i,a)=>a.cssVariable;function gi(i,a){if(i&1){let e=S();r(0,"button",5),h("click",function(){p(e);let n=m();return b(n.runCommand(n.CommandsEnum.Sync))}),r(1,"mat-icon"),u(2,"sync"),s()()}i&2&&_("matTooltip","Sync")}function fi(i,a){if(i&1&&(r(0,"div",22),u(1),s()),i&2){let e,t=m().$implicit,n=m();c(),X(" ",(e=n.headersMap2().get(t.id))==null?null:e.text," ")}}function vi(i,a){i&1&&(r(0,"span",25),u(1," ' "),s())}function ki(i,a){if(i&1&&(r(0,"span",27),u(1),s()),i&2){m();let e=He(0),t=m(2);c(),X(" ",t.translation()[e]," ")}}function yi(i,a){if(i&1){let e=S();Ct(0),r(1,"span",26),h("click",function(){p(e);let n=He(0),o=m(2);return b(o.clickOnOriginalText(n))})("dblclick",function(){p(e);let n=m(2);return b(n.originalDbClick())}),u(2),s(),w(3,ki,2,1,"span",27)}if(i&2){let e=a.$implicit,t=a.$index,n=m().$implicit,o=m(),l=Mt(o.computeTranslationId(n.id,t));c(2),X(" ",e," "),c(),P(o.showTranslation()||o.translationIsOn()[l]?3:-1)}}function xi(i,a){if(i&1){let e=S();r(0,"div",21),h("focus",function(n){p(e);let o=m();return b(o.itemOnFocus(n))}),w(1,fi,2,1,"div",22),r(2,"div",23)(3,"div",24),w(4,vi,2,0,"span",25),F(5,yi,4,3,null,null,pi),s()()()}if(i&2){let e=a.$implicit,t=m();k("is-marked",t.markedItemsSet().has(e.id))("is-current",e.id===t.currentItemId()),C("id",e.id),c(),P(t.headersMap2().has(e.id)?1:-1),c(3),P(e.text.length?-1:4),c(),L(e.text)}}function Ci(i,a){i&1&&(r(0,"span"),u(1," ===== Header: "),s())}function Mi(i,a){i&1&&(r(0,"span"),u(1," ===== "),s())}function Ii(i,a){if(i&1){let e=S();r(0,"button",51),h("click",function(){let n=p(e).$implicit,o=m(2);return b(o.rebuildAndGoToItem(n.id))}),r(1,"span",52),u(2),s(),w(3,Ci,2,0,"span"),u(4),w(5,Mi,2,0,"span"),s()}if(i&2){let e=a.$implicit,t=m(2);_("color",e.type==="header"?"accent":"primary"),c(2),X(" ",e.id," "),c(),P(e.type==="header"?3:-1),c(),X(" ",e.title.slice(0,t.lengthOfItemTitle)," "),c(),P((e==null?null:e.type)==="header"?5:-1)}}function Ti(i,a){if(i&1){let e=S();r(0,"div",45)(1,"div",52),u(2),s(),r(3,"button",53),h("click",function(){let n=p(e).$implicit,o=m(2);return b(o.rebuildAndGoToItem(n.id))}),r(4,"span"),u(5),s()()()}if(i&2){let e=a.$implicit;c(2),Q(e.id),c(3),X(" ",e.text," ")}}function wi(i,a){if(i&1){let e=S();r(0,"div",50)(1,"div",28)(2,"button",54),h("click",function(){let n=p(e).$implicit,o=m(2);return b(o.customStylesService.setStyle(n.cssVariable,""))}),u(3," Clear "),s(),r(4,"button",55),h("click",function(){let n=p(e).$implicit,o=m(2);return b(o.customStylesService.setStyle(n.cssVariable,n.value))}),u(5," Save "),s()(),r(6,"mat-form-field")(7,"mat-label"),u(8),s(),r(9,"input",56),h("keyup",function(n){return n.stopPropagation()})("keydown",function(n){return n.stopPropagation()}),Ne("ngModelChange",function(n){let o=p(e).$implicit;return Ve(o.value,n)||(o.value=n),b(n)}),s()()()}if(i&2){let e=a.$implicit;c(2),_("disabled",!e.value),c(6),Q(e.label),c(),Le("ngModel",e.value)}}function Pi(i,a){if(i&1){let e=S();r(0,"div",19)(1,"div",28)(2,"div",29)(3,"button",30),u(4,"Go home"),s(),r(5,"button",31),h("click",function(){p(e);let n=m();return b(n.showMenu.set(!1))}),u(6,"Close"),s()(),r(7,"div",32)(8,"div",33)(9,"mat-form-field",34)(10,"mat-label"),u(11,"Go To"),s(),r(12,"input",35,1),Ne("ngModelChange",function(n){p(e);let o=m();return Ve(o.idOrPattern,n)||(o.idOrPattern=n),b(n)}),h("keyup.enter",function(){p(e);let n=m();return b(n.goToFromInput())})("keyup",function(n){return n.stopPropagation()})("keydown",function(n){return n.stopPropagation()}),s()(),r(14,"button",36),h("click",function(){p(e);let n=m();return b(n.goToFromInput())}),u(15,"Go!"),s()()()(),r(16,"div",37)(17,"mat-tab-group",38)(18,"mat-tab",39)(19,"div",40)(20,"button",41),h("click",function(){p(e);let n=m();return b(n.removeAllMarks())}),u(21,"Remove All Marks"),s(),r(22,"button",41),h("click",function(){p(e);let n=m();return b(n.removeAllMarksExceptLastTwo())}),u(23," Remove All Marks Except Last Two "),s(),F(24,Ii,6,5,"button",42,nt),s()(),r(26,"mat-tab",39)(27,"div",43)(28,"div",44),F(29,Ti,6,2,"div",45,nt),s()()(),r(31,"mat-tab",46)(32,"div",47)(33,"button",48),h("click",function(){p(e);let n=m();return b(n.customStylesService.resetAllStyles())}),u(34,"Reset all styles"),s()(),r(35,"div",49),F(36,wi,10,3,"div",50,bi),s()()()()()}if(i&2){let e=m();c(12),Le("ngModel",e.idOrPattern),c(2),_("disabled",!e.idOrPattern()),c(4),_("label","Bookmarks ("+(e.currentMarkedItems().length||0)+")"),c(6),L(e.marksForMenu()),c(2),_("label","Headers ("+(e.currentHeaders().length||0)+")"),c(3),L(e.currentHeaders()),c(7),L(e.customStyles())}}function Oi(i,a){if(i&1){let e=S();r(0,"div",20)(1,"div",57)(2,"button",58),h("click",function(){p(e);let n=m();return b(n.showPopUpDictionary.set(!1))}),u(3," Close "),s()(),M(4,"app-dictionary-widget",18),r(5,"div",59)(6,"button",58),h("click",function(){p(e);let n=m();return b(n.showPopUpDictionary.set(!1))}),u(7," Close "),s()()()}if(i&2){let e=m();c(4),_("term",e.currentTerm())("hideSearchBar",!0)}}var Pn=class it{constructor(){this.bookId=J.required({alias:"id"}),this.dbTitle=J.required(),this.contentAll=J([]),this.translation=J({}),this.initMarkedItems=J([],{alias:"markedItem"}),this.initHeaders=J([],{alias:"headers"}),this.currentHeaders=x([]),this.currentMarkedItems=x([]),this.headersMap2=q(()=>{let a=new Map;return this.currentHeaders().forEach(e=>a.set(e.id,e)),a}),this.markedItemsSet=q(()=>{let a=new Set;return this.currentMarkedItems().forEach(e=>a.add(e)),a}),this.nextHeader=q(()=>this.currentHeaders().find(a=>a.id>this.currentItemId())?.id||0),this.marksForMenu=q(()=>Tn(this.currentHeaders(),this.currentMarkedItems(),this.contentAll())),this.customStylesService=d(rn),this.customStyles=In(this.customStylesService.customStyles$),this.syncPositionServiceUrlService=d(cn),this.translationIsOn=x({}),this.content=x([]),this.showMenu=x(!1),this.idOrPattern=x(""),this.showTranslation=x(!1),this.currentTerm=x(""),this.showPopUpDictionary=x(!1),this.computeTranslationId=de,this.CommandsEnum=v,this.toolsBlockHeightPx=50,this.lengthOfItemTitle=50,this.bookService=d(Ge),this.info=d(Xe),this.loader=d(sn),this.delayToPreventScrollAutoFocusing=0,this.intersectionCheckerId=0,this.currentWindowWidth=window.innerWidth,this.router=d(Lt),this.titleService=d(wt),this.componentContent=We.required("componentContent"),this.goToInputElementRef=We.required("goToInput"),this.goToNextItemTimeTimeoutMs=500,this.dictionaryMobileMediaWidthPx=1e3,this.lengthOfNewContentChunk=20,this.currentItemId=x(0),De(()=>{let a=this.currentItemId(),e=this.contentAll();if(!a)return;let t=this.dbTitle().currentContentItemId;a!==t&&(this.loader.setProgressValue(Math.round(a*100/e.length)),this.saveCurrentPosition())})}ngOnInit(){this.checkThisBook(),this.titleService.setTitle(this.dbTitle()?.title+" ("+this.contentAll().length+")"),this.currentItemId.set(this.dbTitle()?.currentContentItemId||0),this.currentHeaders.set(this.initHeaders()),this.currentMarkedItems.set(this.initMarkedItems())}ngAfterViewInit(){this.rebuildAndGoToItem(this.currentItemId()),this.currentWindowWidth=window.innerWidth,this.subscribeToCustomStylesService(),this.subscribeToKeyBord(),this.setDelayToPreventScrollAutoFocusing(),setTimeout(()=>{this.intersectionCheckerId=window.setInterval(()=>{this.checkToAddBookContent(),this.setCurrentItemIdAfterScrolling()},100)},500)}ngOnDestroy(){this.titleService.setTitle(Nt),this.loader.setProgressValue(0),document.onkeydown=null,clearInterval(this.intersectionCheckerId)}restoreCurrentPositionAfterWindowResizing(){let a=this.getCurrentWindowWidth();a!==this.currentWindowWidth&&(this.currentWindowWidth=a,this.rebuildAndGoToItem(this.currentItemId()))}onScroll(){this.setDelayToPreventScrollAutoFocusing()}clickOnOriginalText(a){this.setTranslationIsOn(a,!0),this.clickOnOriginalWord()}setTranslationIsOn(a,e){this.translationIsOn.update(t=>(t[a]=e,me({},t)))}removeAllMarksExceptLastTwo(){let a=this.currentMarkedItems();if(!a.length)return;let e=a.pop(),t=a.pop(),n=[];t&&n.push(t),e&&n.push(e),this.currentMarkedItems.set(n),this.saveMarkedItems()}removeAllMarks(){this.currentMarkedItems.set([]),this.saveMarkedItems()}itemOnFocus(a){let t=+a.target?.id;Number.isNaN(t)||(this.currentItemId.set(t),this.setDelayToPreventScrollAutoFocusing())}clickOnOriginalWord(){this.wordToDictionary(an())}goToFromInput(){let a=+this.idOrPattern();if(Number.isInteger(a)){if(a>this.contentAll().length)return;this.idOrPattern.set(""),this.rebuildAndGoToItem(a);return}let e=this.contentAll().findIndex(t=>t.id>this.currentItemId()&&t.text.join("").toLowerCase().includes(String(this.idOrPattern()).toLowerCase()));e>-1&&this.rebuildAndGoToItem(e)}rebuildAndGoToItem(a){this.showMenu.set(!1),this.currentItemId.set(a),this.rebuildCurrentContent(a),this.setDelayToPreventScrollAutoFocusing(),setTimeout(()=>this.scrollTo(a))}scrollTo(a){if(a>this.contentAll().length-1)return;this.setDelayToPreventScrollAutoFocusing();let e=document.getElementById(String(a));e?.focus({preventScroll:!0}),e?.scrollIntoView({behavior:"smooth",block:"center"})}runCommand(a){if(a!==null)switch(a){case v.Sync:this.syncBookPosition();break;case v.GoHome:this.router.navigate(["/"]).then();break;case v.TranslateOne:this.translateOne();break;case v.MarkIt:this.markCurrentItem();break;case v.GoToNextItem:this.goToNextItem();break;case v.GoToNextMark:this.goToNextMark();break;case v.GoToPrevMark:this.goToPrevMark();break;case v.ShowMenu:this.onShowMenu();break}}originalDbClick(){this.dictionaryMobileMediaWidthPx>window.innerWidth&&this.showPopUpDictionary.set(!0)}checkThisBook(){this.contentAll()?.length||this.router.navigate(["/"]).then()}subscribeToCustomStylesService(){this.customStylesService.customStyles$.pipe(Jt(this)).subscribe(a=>{a.forEach(e=>{this.componentContent().nativeElement.style.setProperty(e.cssVariable,e.value)})})}subscribeToKeyBord(){document.onkeydown=a=>{let e=hn(a);this.runCommand(e)}}checkToAddBookContent(){let e=document.getElementById("start-block"),t=document.getElementById("end-block"),n=e?.getBoundingClientRect().bottom||0,o=t?.getBoundingClientRect().top||0,l=window.innerHeight;n+2e3>0&&this.addItemAtStart(),o-l-2e3<0&&(this.addItemToEnd(),this.addItemToEnd())}setCurrentItemIdAfterScrolling(){if(this.showMenu()||Date.now()-this.delayToPreventScrollAutoFocusing<this.goToNextItemTimeTimeoutMs)return;let a=(document.getElementById(String(this.currentItemId()))?.getBoundingClientRect().bottom||0)-50+10;if(innerHeight-(document.getElementById(String(this.currentItemId()))?.getBoundingClientRect().top||0)<0){this.currentItemId.update(t=>t-1),document.getElementById(String(this.currentItemId()))?.focus({preventScroll:!0});return}a<0&&(this.currentItemId.update(t=>t+1),document.getElementById(String(this.currentItemId()))?.focus({preventScroll:!0}))}addItemAtStart(){let a=this.content();if(a.length>=this.contentAll().length||!a.length)return;let e=a[0].id,t=e>this.lengthOfNewContentChunk?e-this.lengthOfNewContentChunk:0;this.content.set([...this.contentAll().slice(t,e),...a])}rebuildCurrentContent(a){let t=a>100?a-100:0;this.content.set(this.contentAll().slice(t,a+100))}markCurrentItem(){this.setItemMarked(this.currentItemId()),this.syncPositionServiceUrlService.isOn()&&this.syncBookPosition()}setItemMarked(a){if(this.markedItemsSet().has(a))this.currentMarkedItems.update(e=>e.filter(t=>t!==a));else{let e=this.currentMarkedItems();e.push(a),e.sort((t,n)=>t-n),this.currentMarkedItems.set([...e])}this.saveMarkedItems()}onShowMenu(){this.showMenu.update(a=>!a)}setDelayToPreventScrollAutoFocusing(a=0){this.delayToPreventScrollAutoFocusing=Date.now()+a}goToNextItem(){this.currentItemId()>=this.contentAll().length-1||(this.currentItemId.update(a=>a+1),this.scrollTo(this.currentItemId()))}wordToDictionary(a){this.currentTerm.set(a)}saveMarkedItems(){this.loader.topOn(),this.bookService.saveMarkedItems$(this.bookId(),this.currentMarkedItems()).pipe(_e(1)).subscribe({next:()=>{this.loader.topOff()},error:a=>{this.loader.topOff(),console.error(a),this.info.error("saveMarkedItems")}})}addItemToEnd(){let a=this.content();if(a.length>=this.contentAll().length||!a.length)return;let e=a.at(-1)?.id;e&&this.content.set([...a,...this.contentAll().slice(e+1,e+this.lengthOfNewContentChunk)])}goToNextMark(){let a=this.currentItemId(),e=this.currentMarkedItems().find(t=>+t>a);e&&this.rebuildAndGoToItem(+e)}goToPrevMark(){let a=this.currentItemId(),e=null;for(let t=this.currentMarkedItems().length-1;t>=0;t--)if(this.currentMarkedItems()[t]<a){e=+this.currentMarkedItems()[t];break}e&&this.rebuildAndGoToItem(+e)}translateOne(){let a=!1,e=this.contentAll()[this.currentItemId()].text,t=-1;if(e.forEach((n,o)=>{this.translationIsOn()[de(this.currentItemId(),o)]&&(t=o)}),e.forEach((n,o)=>{!a&&o>t&&!this.translationIsOn()[de(this.currentItemId(),o)]&&(a=!0,this.setTranslationIsOn(de(this.currentItemId(),o),!0))}),!a){this.goToNextItem(),this.translateOne();return}}getCurrentWindowWidth(){return window.innerWidth}syncBookPosition(){this.syncPositionServiceUrlService.getBookPosition(this.bookId(),this.currentItemId()).pipe(_e(1)).subscribe({next:a=>{let e=+a.blockId;if(isNaN(+e)){console.error("Invalid position received:",e);return}this.info.show("position: "+e),!(e<=this.currentItemId())&&this.rebuildAndGoToItem(e)},error:a=>{this.info.error("get position is error"),console.error("Error getting book position:",a)}})}saveCurrentPosition(){let a=this.dbTitle();a.currentContentItemId=this.currentItemId(),a.lastOpenedTime=Date.now(),this.bookService.updateTitle$(a).pipe(_e(1)).subscribe({next:()=>{},error:e=>{console.error("Error saving current position:",e)}})}static{this.\u0275fac=function(e){return new(e||it)}}static{this.\u0275cmp=D({type:it,selectors:[["app-book"]],viewQuery:function(e,t){e&1&&kt(t.componentContent,ui,5)(t.goToInputElementRef,_i,5),e&2&&yt(2)},hostBindings:function(e,t){e&1&&h("resize",function(){return t.restoreCurrentPositionAfterWindowResizing()},gt)},inputs:{bookId:[1,"id","bookId"],dbTitle:[1,"dbTitle"],contentAll:[1,"contentAll"],translation:[1,"translation"],initMarkedItems:[1,"markedItem","initMarkedItems"],initHeaders:[1,"headers","initHeaders"]},decls:36,vars:20,consts:[["componentContent",""],["goToInput",""],[1,"component-content"],[1,"tools-block"],["mat-icon-button","","routerLink","/",1,"primary-color",3,"matTooltip"],["mat-icon-button","",1,"primary-color",3,"click","matTooltip"],["mat-icon-button","",1,"primary-color",3,"click"],["mat-icon-button","",1,"primary-color",3,"matTooltip"],[1,"status"],[1,"hide-for-small-screen"],[1,"book-wrapper"],[1,"left-placeholder"],["id","book",1,"book",3,"scroll"],["id","start-block"],[1,"items"],["tabindex","0",1,"item-block",3,"is-marked","is-current"],["id","end-block"],[1,"dictionary"],[3,"term","hideSearchBar"],[1,"popup-menu"],[1,"popup-menu","dictionary"],["tabindex","0",1,"item-block",3,"focus"],[1,"item-header"],[1,"item-content"],[1,"text"],[1,"empty-paragraph"],[1,"original",3,"click","dblclick"],[1,"translation"],[1,"buttons"],[1,"left"],["mat-button","","color","primary","routerLink","/"],["mat-button","","color","primary",3,"click"],[1,"right"],[1,"go-to"],["appearance","outline",1,"go-to-input"],["matInput","",3,"ngModelChange","keyup.enter","keyup","keydown","ngModel"],["mat-button","","color","primary",3,"click","disabled"],[1,"main"],["mat-stretch-tabs","false","mat-align-tabs","center","animationDuration","0ms"],[3,"label"],[1,"bookmarks"],["mat-button","",1,"warn-color",3,"click"],["mat-button","",3,"color"],[1,"headers-wrapper"],[1,"headers"],[1,"header"],["label","Styles"],[1,"reset-all"],["color","primary","mat-button","",3,"click"],[1,"custom-styles"],[1,"style-item"],["mat-button","",3,"click","color"],[1,"id-label"],["mat-button","",1,"button","primary-color",3,"click"],["color","primary","mat-button","",1,"clear-button",3,"click","disabled"],["color","primary","mat-button","",1,"save-button",3,"click"],["matInput","",3,"keyup","keydown","ngModelChange","ngModel"],[1,"top"],["mat-button","","color","primary",1,"button","close-button",3,"click"],[1,"bottom"]],template:function(e,t){e&1&&(r(0,"div",2,0)(2,"div",3)(3,"button",4)(4,"mat-icon"),u(5,"home"),s()(),r(6,"button",5),h("click",function(){return t.runCommand(t.CommandsEnum.MarkIt)}),r(7,"mat-icon"),u(8,"star"),s()(),r(9,"button",6),h("click",function(){return t.showTranslation.set(!t.showTranslation())}),r(10,"mat-icon"),u(11,"g_translate"),s()(),w(12,gi,3,1,"button",7),r(13,"button",5),h("click",function(){return t.runCommand(t.CommandsEnum.ShowMenu)}),r(14,"mat-icon"),u(15,"menu"),s()(),r(16,"div",8)(17,"span"),u(18),s(),r(19,"span",9),u(20),s()()(),r(21,"div",10),M(22,"div",11),r(23,"div",12),h("scroll",function(){return t.onScroll()}),r(24,"div",13)(25,"h1"),u(26),s()(),r(27,"div",14),F(28,xi,7,7,"div",15,nt),s(),r(30,"div",16),u(31,"The End"),s()(),r(32,"div",17),M(33,"app-dictionary-widget",18),s()()(),w(34,Pi,38,4,"div",19),w(35,Oi,8,2,"div",20)),e&2&&(c(2),te("height",t.toolsBlockHeightPx,"px"),c(),_("matTooltip","Go Home (Home)"),c(3),k("accent-color",t.markedItemsSet().has(t.currentItemId())),_("matTooltip","Mark it (1)"),c(3),k("accent-color",t.showTranslation()),c(3),P(t.syncPositionServiceUrlService.isOn()?12:-1),c(),_("matTooltip","Show Menu (0 | Esc)"),c(5),X(" ",t.currentItemId()," "),c(2),xt(" / ",t.nextHeader()," / ",t.contentAll().length-1," "),c(6),Q(t.dbTitle().title),c(2),L(t.content()),c(4),te("top",t.toolsBlockHeightPx,"px"),c(),_("term",t.currentTerm())("hideSearchBar",!0),c(),P(t.showMenu()?34:-1),c(),P(t.showPopUpDictionary()?35:-1))},dependencies:[It,kn,Je,vn,Ft,Bt,At,dn,ln,tn,en,Yt,Kt,qt,Xt,Gt,zt,Ut,jt,yn,xn,Cn,Vt,Mn,on],styles:["[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:0;width:100vw;max-width:100vw;position:fixed;top:4px;left:0;height:calc(100vh - 4px);max-height:calc(100vh - 4px);box-sizing:border-box;background:var(--background-color-main);background-image:var(--book-background-image);background-repeat:repeat;font-family:var(--font-family);color:var(--font-color-main)}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], [_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{color:var(--font-color-main);border:1px solid var(--color-accent)}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]     .mdc-notched-outline__leading, [_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]     .mdc-notched-outline__notch, [_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]     .mdc-notched-outline__trailing, [_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]     mat-label{border-color:var(--color-accent);color:var(--font-color-main)}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .tools-block[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;box-shadow:0 1px gray}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .tools-block[_ngcontent-%COMP%]   .chosen[_ngcontent-%COMP%]{color:var(--color-accent)}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]{flex:1;max-width:var(--max-book-width);min-width:min(var(--max-book-width),95vw);overflow:auto;padding:var(--padding-main)}@media(max-width:600px){[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]{padding:var(--padding-small)}}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   #start-block[_ngcontent-%COMP%], [_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   #end-block[_ngcontent-%COMP%]{display:flex;align-items:center}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   #start-block[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], [_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   #end-block[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item-block[_ngcontent-%COMP%]{display:block;padding:0;margin:4px}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item-block.is-marked[_ngcontent-%COMP%]{border-left:2px solid var(--color-primary)}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item-block.is-current[_ngcontent-%COMP%]{outline:solid var(--color-accent) 2px;outline-offset:2px}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item-block.hide-menu[_ngcontent-%COMP%]{display:flex}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item-block.hide-menu[_ngcontent-%COMP%]   .extra[_ngcontent-%COMP%]{display:none!important}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item-block.hide-menu[_ngcontent-%COMP%]   .tools[_ngcontent-%COMP%]{display:block!important}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item-block.hide-menu[_ngcontent-%COMP%]   .tools[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(.extra){display:block!important}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item-block[_ngcontent-%COMP%]   .item-header[_ngcontent-%COMP%]{padding:var(--padding-small);font-size:var(--font-size-original-text);text-align:center;color:var(--font-color-accent);background:var(--background-color-accent)}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item-block[_ngcontent-%COMP%]   .item-header.header-is-marked[_ngcontent-%COMP%]{text-decoration:underline}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item-block[_ngcontent-%COMP%]   .item-header-editor[_ngcontent-%COMP%]{padding:var(--padding-small)}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item-block[_ngcontent-%COMP%]   .item-header-editor[_ngcontent-%COMP%]   .header-name-input[_ngcontent-%COMP%]{display:flex}@media(max-width:600px){[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item-block[_ngcontent-%COMP%]   .item-header-editor[_ngcontent-%COMP%]   .header-name-input[_ngcontent-%COMP%]{flex-direction:column}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item-block[_ngcontent-%COMP%]   .item-header-editor[_ngcontent-%COMP%]   .header-name-input[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{display:flex;justify-content:center}}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item-block[_ngcontent-%COMP%]   .item-header-editor[_ngcontent-%COMP%]   .header-name-input[_ngcontent-%COMP%]   .input-form[_ngcontent-%COMP%]{flex:1}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item-block[_ngcontent-%COMP%]   .item-header-editor[_ngcontent-%COMP%]   .header-level-input[_ngcontent-%COMP%]{margin-top:-16px}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item-block[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]{flex:1;display:block;padding:var(--padding-small)}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item-block[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%]{font-size:var(--font-size-original-text)}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item-block[_ngcontent-%COMP%]   .item-content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .translation[_ngcontent-%COMP%]{font-size:var(--font-size-translation-text);color:var(--font-color-translation)}[_nghost-%COMP%]   .component-content[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item-block[_ngcontent-%COMP%]   .id-label[_ngcontent-%COMP%]{color:var(--color-accent);font-weight:500}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]{position:fixed;z-index:10;width:calc(100% - 2 * var(--padding-main));height:100%;top:0;left:0;display:flex;flex-direction:column;align-items:center;background:#f2f2f2;padding:var(--padding-main);overflow:auto}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--padding-small)}@media(max-width:600px){[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{flex-direction:column;justify-content:center}}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], [_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{display:flex;align-items:center}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .go-to[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--padding-small);padding:var(--padding-small)}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .go-to[_ngcontent-%COMP%]   .go-to-input[_ngcontent-%COMP%]{margin-bottom:-16px}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{width:100%;min-height:100%;margin-left:var(--padding-main);margin-right:var(--padding-main)}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]     .mat-mdc-tab-body-content{overflow:hidden}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .bookmarks[_ngcontent-%COMP%], [_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .fragments[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;overflow:visible}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .headers-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .headers-wrapper[_ngcontent-%COMP%]   .headers[_ngcontent-%COMP%]{display:block}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .headers-wrapper[_ngcontent-%COMP%]   .headers[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{display:flex}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .headers-wrapper[_ngcontent-%COMP%]   .headers[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header-is-marked[_ngcontent-%COMP%]{text-decoration:underline}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .headers-wrapper[_ngcontent-%COMP%]   .headers[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .id-label[_ngcontent-%COMP%]{display:flex;width:50px;justify-content:end;align-items:center;color:var(--color-accent);transform:translateY(-2px)}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .headers-wrapper[_ngcontent-%COMP%]   .headers[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{width:fit-content}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .audio-settings[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .audio-settings[_ngcontent-%COMP%]   .audio-setting-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;width:100%}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .audio-settings[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:400px}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .audio-settings[_ngcontent-%COMP%]   .mat-mdc-slider[_ngcontent-%COMP%]{width:400px}@media(max-width:420px){[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .audio-settings[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:90%}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .audio-settings[_ngcontent-%COMP%]   .mat-mdc-slider[_ngcontent-%COMP%]{width:90%}}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .custom-styles[_ngcontent-%COMP%]   .style-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--padding-mini)}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .custom-styles[_ngcontent-%COMP%]   .style-item[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{width:fit-content}@media(max-width:600px){[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .custom-styles[_ngcontent-%COMP%]   .style-item[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{flex-direction:column;padding-bottom:16px}}[_nghost-%COMP%]   .popup-menu[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .custom-styles[_ngcontent-%COMP%]   .style-item[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .original[_ngcontent-%COMP%], [_nghost-%COMP%]   .translation[_ngcontent-%COMP%]{white-space:pre-line;overflow-wrap:break-word}[_nghost-%COMP%]   #end-block[_ngcontent-%COMP%]{font-size:var(--font-size-original-text);font-weight:700;width:100%;justify-content:center;padding:var(--padding-main) 0}[_nghost-%COMP%]   .primary-color[_ngcontent-%COMP%]{color:var(--color-primary)}[_nghost-%COMP%]   .warn-color[_ngcontent-%COMP%]{color:var(--color-warn)}[_nghost-%COMP%]   .primary-color.accent-color[_ngcontent-%COMP%], [_nghost-%COMP%]   .accent-color[_ngcontent-%COMP%]{color:var(--color-accent)}.remove-all-header-marks-button[_ngcontent-%COMP%]{margin-bottom:30px}.book-wrapper[_ngcontent-%COMP%]{display:flex;overflow:auto;justify-content:center}.book-wrapper[_ngcontent-%COMP%]   .dictionary[_ngcontent-%COMP%]{overflow:auto;width:auto;max-width:500px}@media(max-width:1000px){.book-wrapper[_ngcontent-%COMP%]   .dictionary[_ngcontent-%COMP%]{display:none}}.translate-export-container[_ngcontent-%COMP%]{max-width:400px;margin:auto}.popup-menu.dictionary[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]{outline:1px solid green;width:100%;margin:24px 0}.popup-menu.dictionary[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%], .popup-menu.dictionary[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]{width:100%}.empty-paragraph[_ngcontent-%COMP%]{opacity:.25}.left-placeholder[_ngcontent-%COMP%]{height:200px}.left-placeholder[_ngcontent-%COMP%], .dictionary[_ngcontent-%COMP%]{flex:1}@media(max-width:1600px){.left-placeholder[_ngcontent-%COMP%]{display:none}}"],changeDetection:0})}};Pn=st([Zt()],Pn);export{Pn as BookComponent};

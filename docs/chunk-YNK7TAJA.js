import{a as Ut,b as zt,d as Yt,e as qt,g as Kt,h as Gt,i as Qt,k as Zt,l as Xt,m as Jt,n as en,o as tn,p as nn,q as rn,s as an}from"./chunk-JT764RMD.js";import{c as Pt,d as At,f as Ft,j as Rt,k as Lt,l as Nt,n as Vt,o as Wt}from"./chunk-QJUMDOC3.js";import{a as on}from"./chunk-Q44VOGOY.js";import{$ as C,$b as xt,A as $e,Ac as Me,Ba as st,Bc as ye,C as Q,Cb as ge,D as Ue,Da as g,Dc as Tt,E as ze,Ea as N,Fa as lt,Gb as _t,Gc as Et,H as Ye,Ia as ct,Ib as gt,Ja as dt,Jb as vt,K as qe,Kb as q,Kc as B,L as pe,Lb as yt,M as Ke,N as Z,Nc as se,Oa as $,Pa as h,Pb as K,Pc as Bt,Q as Ge,Qa as f,Qb as S,Qc as jt,R as Qe,Ra as U,S as me,Sa as D,Sc as Ht,T as L,Ta as T,U as I,Ua as M,Ub as bt,Uc as $t,V as Ze,Va as c,Vb as Ct,W as oe,Wa as p,X as l,Xa as k,Ya as re,Za as ae,_ as Xe,aa as x,ab as V,bb as J,cb as y,da as Oe,e as A,ea as ue,eb as d,ec as St,f as Ce,fb as W,fc as Ot,g as F,ga as j,gb as E,gc as ee,h as Re,ha as Je,hb as pt,hc as Mt,i as Le,ia as he,ib as fe,j as Ne,ja as et,jb as z,jc as kt,k as Ve,kb as Y,l as w,la as tt,m as We,mb as mt,n as R,na as H,nb as ut,nc as wt,o as Be,ob as ht,p as xe,pa as nt,qb as v,r as je,ra as X,rb as _e,rc as It,s as He,sa as it,sb as u,tb as ft,ua as s,ub as _,v as de,wa as ot,wc as te,x as Se,xa as rt,xc as Dt,za as at,zc as ve}from"./chunk-XB6BERNY.js";var sn=(()=>{class i{_animationsDisabled=se();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,n){t&2&&v("mat-pseudo-checkbox-indeterminate",n.state==="indeterminate")("mat-pseudo-checkbox-checked",n.state==="checked")("mat-pseudo-checkbox-disabled",n.disabled)("mat-pseudo-checkbox-minimal",n.appearance==="minimal")("mat-pseudo-checkbox-full",n.appearance==="full")("_mat-animation-noopable",n._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,n){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return i})();var jn=["text"],Hn=[[["mat-icon"]],"*"],$n=["mat-icon","*"];function Un(i,o){if(i&1&&k(0,"mat-pseudo-checkbox",1),i&2){let e=d();M("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function zn(i,o){if(i&1&&k(0,"mat-pseudo-checkbox",3),i&2){let e=d();M("disabled",e.disabled)}}function Yn(i,o){if(i&1&&(c(0,"span",4),u(1),p()),i&2){let e=d();s(),_("(",e.group.label,")")}}var we=new I("MAT_OPTION_PARENT_COMPONENT"),Ie=new I("MatOptgroup");var le=class{source;isUserInput;constructor(o,e=!1){this.source=o,this.isUserInput=e}},ne=(()=>{class i{_element=l(H);_changeDetectorRef=l(K);_parent=l(we,{optional:!0});group=l(Ie,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=l(ve).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=et(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new j;_text;_stateChanges=new F;constructor(){let e=l(St);e.load(jt),e.load(Ot),this._signalDisableRipple=!!this._parent&&dt(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let n=this._getHostElement();typeof n.focus=="function"&&n.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!te(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new le(this,e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["mat-option"]],viewQuery:function(t,n){if(t&1&&fe(jn,7),t&2){let r;z(r=Y())&&(n._text=r.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,n){t&1&&y("click",function(){return n._selectViaInteraction()})("keydown",function(a){return n._handleKeydown(a)}),t&2&&(J("id",n.id),$("aria-selected",n.selected)("aria-disabled",n.disabled.toString()),v("mdc-list-item--selected",n.selected)("mat-mdc-option-multiple",n.multiple)("mat-mdc-option-active",n.active)("mdc-list-item--disabled",n.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",S]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:$n,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,n){t&1&&(W(Hn),h(0,Un,1,2,"mat-pseudo-checkbox",1),E(1),c(2,"span",2,0),E(4,1),p(),h(5,zn,1,1,"mat-pseudo-checkbox",3),h(6,Yn,2,1,"span",4),k(7,"div",5)),t&2&&(f(n.multiple?0:-1),s(5),f(!n.multiple&&n.selected&&!n.hideSingleSelectionIndicator?5:-1),s(),f(n.group&&n.group._inert?6:-1),s(),M("matRippleTrigger",n._getHostElement())("matRippleDisabled",n.disabled||n.disableRipple))},dependencies:[sn,Bt],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return i})();function ln(i,o,e){if(e.length){let t=o.toArray(),n=e.toArray(),r=0;for(let a=0;a<i+1;a++)t[a].group&&t[a].group===n[r]&&r++;return r}return 0}function cn(i,o,e,t){return i<e?i:i+o>e+t?Math.max(0,i-t+o):e}var dn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=N({type:i});static \u0275inj=L({imports:[B]})}return i})();var ie=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=N({type:i});static \u0275inj=L({imports:[Ht,dn,ne,B]})}return i})();var Gn=["panel"],Qn=["*"];function Zn(i,o){if(i&1&&(re(0,"div",1,0),E(2),ae()),i&2){let e=o.id,t=d();_e(t._classList),v("mat-mdc-autocomplete-visible",t.showPanel)("mat-mdc-autocomplete-hidden",!t.showPanel)("mat-autocomplete-panel-animations-enabled",!t._animationsDisabled)("mat-primary",t._color==="primary")("mat-accent",t._color==="accent")("mat-warn",t._color==="warn"),J("id",t.id),$("aria-label",t.ariaLabel||null)("aria-labelledby",t._getPanelAriaLabelledby(e))}}var De=class{source;option;constructor(o,e){this.source=o,this.option=e}},un=new I("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),hn=(()=>{class i{_changeDetectorRef=l(K);_elementRef=l(H);_defaults=l(un);_animationsDisabled=se();_activeOptionChanges=A.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new j;opened=new j;closed=new j;optionActivated=new j;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=l(ve).getId("mat-autocomplete-");inertGroups;constructor(){let e=l(xt);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new Dt(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let t=new De(this,e);this.optionSelected.emit(t)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["mat-autocomplete"]],contentQueries:function(t,n,r){if(t&1&&pt(r,ne,5)(r,Ie,5),t&2){let a;z(a=Y())&&(n.options=a),z(a=Y())&&(n.optionGroups=a)}},viewQuery:function(t,n){if(t&1&&fe(rt,7)(Gn,5),t&2){let r;z(r=Y())&&(n.template=r.first),z(r=Y())&&(n.panel=r.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",S],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",S],requireSelection:[2,"requireSelection","requireSelection",S],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",S],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",S]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[ge([{provide:we,useExisting:i}])],ngContentSelectors:Qn,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(t,n){t&1&&(W(),ct(0,Zn,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
  width: 100%;
  max-height: 256px;
  visibility: hidden;
  transform-origin: center top;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  position: relative;
  border-radius: var(--mat-autocomplete-container-shape, var(--mat-sys-corner-extra-small));
  box-shadow: var(--mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  background-color: var(--mat-autocomplete-background-color, var(--mat-sys-surface-container));
}
@media (forced-colors: active) {
  div.mat-mdc-autocomplete-panel {
    outline: solid 1px;
  }
}
.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  transform-origin: center bottom;
}
div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible {
  visibility: visible;
}

div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden,
.cdk-overlay-pane:has(> .mat-mdc-autocomplete-hidden) {
  visibility: hidden;
  pointer-events: none;
}

@keyframes _mat-autocomplete-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.mat-autocomplete-panel-animations-enabled {
  animation: _mat-autocomplete-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}

mat-autocomplete {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return i})();var Xn={provide:Ut,useExisting:Qe(()=>Te),multi:!0};var Jn=new I("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let i=l(Oe);return()=>Rt(i)}}),Te=(()=>{class i{_environmentInjector=l(Xe);_element=l(H);_injector=l(Oe);_viewContainerRef=l(st);_zone=l(Je);_changeDetectorRef=l(K);_dir=l(Et,{optional:!0});_formField=l(Xt,{optional:!0,host:!0});_viewportRuler=l(Pt);_scrollStrategy=l(Jn);_renderer=l(at);_animationsDisabled=se();_defaults=l(un,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new F;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=A.EMPTY;_breakpointObserver=l(kt);_handsetLandscapeSubscription=A.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new F;_overlayPanelClass=Mt(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;constructor(){}_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges(),this._trackedModal&&ye(this._trackedModal,"aria-owns",this.autocomplete.id))}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return de(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(Se(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(Se(()=>this._overlayAttached)):w()).pipe(R(e=>e instanceof le?e:null))}optionSelections=je(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(qe(e),pe(()=>de(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(pe(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new Ce(e=>{let t=r=>{let a=Ct(r),m=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,b=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&a!==this._element.nativeElement&&!this._hasFocus()&&(!m||!m.contains(a))&&(!b||!b.contains(a))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(a)&&e.next(r)},n=[this._renderer.listen("document","click",t),this._renderer.listen("document","auxclick",t),this._renderer.listen("document","touchend",t)];return()=>{n.forEach(r=>r())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let t=e,n=t.keyCode,r=te(t);if(n===27&&!r&&t.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&n===13&&this.panelOpen&&!r)this.activeOption._selectViaInteraction(),this._resetActiveItem(),t.preventDefault();else if(this.autocomplete){let a=this.autocomplete._keyManager.activeItem,m=n===38||n===40;n===9||m&&!r&&this.panelOpen?this.autocomplete._keyManager.onKeydown(t):m&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(m||this.autocomplete._keyManager.activeItem!==a)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let t=e.target,n=t.value;if(t.type==="number"&&(n=n==""?null:parseFloat(n)),this._previousValue!==n){if(this._previousValue=n,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(n),!n)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let r=this.autocomplete.options?.find(a=>a.selected);if(r){let a=this._getDisplayValue(r.value);n!==a&&r.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let r=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(r)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return bt()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new Ce(n=>{ot(()=>{n.next()},{injector:this._environmentInjector})}),t=this.autocomplete.options?.changes.pipe(Z(()=>this._positionStrategy.reapplyLastPosition()),Ue(0))??w();return de(e,t).pipe(pe(()=>this._zone.run(()=>{let n=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),n!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),Q(1)).subscribe(n=>this._setValueAndClose(n))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let t=this.autocomplete;return t&&t.displayWith?t.displayWith(e):e}_assignOptionValue(e){let t=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(t??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let t=this.autocomplete,n=e?e.source:this._pendingAutoselectedOption;n?(this._clearPreviousSelectedOption(n),this._assignOptionValue(n.value),this._onChange(n.value),t._emitSelectEvent(n),this._element.nativeElement.focus()):t.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,t){this.autocomplete?.options?.forEach(n=>{n!==e&&n.selected&&n.deselect(t)})}_openPanelInternal(e=this._element.nativeElement.value){if(this._attachOverlay(e),this._floatLabel(),this._trackedModal){let t=this.autocomplete.id;Me(this._trackedModal,"aria-owns",t)}}_attachOverlay(e){if(!this.autocomplete)return;let t=this._overlayRef;t?(this._positionStrategy.setOrigin(this._getConnectedElement()),t.updateSize({width:this._getPanelWidth()})):(this._portal=new Ft(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),t=Vt(this._injector,this._getOverlayConfig()),this._overlayRef=t,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&t&&t.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(Tt.HandsetLandscape).subscribe(r=>{r.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),t&&!t.hasAttached()&&(t.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let n=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this._applyModalPanelOwnership(),this.panelOpen&&n!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!te(e)||e.keyCode===38&&te(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new Lt({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=Nt(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let t=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],n=this._aboveClass,r=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:n},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:n}],a;this.position==="above"?a=r:this.position==="below"?a=t:a=[...t,...r],e.withPositions(a)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let t=-1;for(let n=0;n<e.options.length;n++)if(!e.options.get(n).disabled){t=n;break}e._keyManager.setActiveItem(t)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let t=this.autocomplete,n=ln(e,t.options,t.optionGroups);if(e===0&&n===1)t._setScrollTop(0);else if(t.panel){let r=t.options.toArray()[e];if(r){let a=r._getHostElement(),m=cn(a.offsetTop,a.offsetHeight,t._getScrollTop(),t.panel.nativeElement.offsetHeight);t._setScrollTop(m)}}}_trackedModal=null;_applyModalPanelOwnership(){let e=this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=this.autocomplete.id;this._trackedModal&&ye(this._trackedModal,"aria-owns",t),Me(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(this._trackedModal){let e=this.autocomplete.id;ye(this._trackedModal,"aria-owns",e),this._trackedModal=null}}static \u0275fac=function(t){return new(t||i)};static \u0275dir=lt({type:i,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(t,n){t&1&&y("focusin",function(){return n._handleFocus()})("blur",function(){return n._onTouched()})("input",function(a){return n._handleInput(a)})("keydown",function(a){return n._handleKeydown(a)})("click",function(){return n._handleClick()}),t&2&&$("autocomplete",n.autocompleteAttribute)("role",n.autocompleteDisabled?null:"combobox")("aria-autocomplete",n.autocompleteDisabled?null:"list")("aria-activedescendant",n.panelOpen&&n.activeOption?n.activeOption.id:null)("aria-expanded",n.autocompleteDisabled?null:n.panelOpen.toString())("aria-controls",n.autocompleteDisabled||!n.panelOpen||n.autocomplete==null?null:n.autocomplete.id)("aria-haspopup",n.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",S]},exportAs:["matAutocompleteTrigger"],features:[ge([Xn]),tt]})}return i})(),fn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=N({type:i});static \u0275inj=L({imports:[Wt,ie,At,ie,B]})}return i})();var ti=Ze;function ni(i){return!!i[ti]}var ii=Symbol("__destroy"),yn=Symbol("__decoratorApplied");function bn(i){return typeof i=="string"?Symbol(`__destroy__${i}`):ii}function oi(i){i.prototype[yn]=!0}function Cn(i,o){i[o]||(i[o]=new F)}function xn(i,o){i[o]&&(i[o].next(),i[o].complete(),i[o]=null)}function Sn(i){i instanceof A&&i.unsubscribe()}function ri(i){Array.isArray(i)&&i.forEach(Sn)}function On(i,o){return function(){if(i&&i.call(this),xn(this,bn()),o.arrayName&&ri(this[o.arrayName]),o.checkProperties)for(let e in this)o.blackList?.includes(e)||Sn(this[e])}}function ai(i,o){i.prototype.ngOnDestroy=On(i.prototype.ngOnDestroy,o)}function si(i,o){let e=i.\u0275pipe;e.onDestroy=On(e.onDestroy,o)}function Mn(i={}){return o=>{ni(o)?si(o,i):ai(o,i),oi(o)}}var _n=7,gn=Symbol("CheckerHasBeenSet");function li(i,o){i[gn]||ci()||(vn(()=>Ve(Promise.resolve()).pipe(xe(()=>{let e;try{e=nt(i)}catch(a){e=null}let t=e?.lView;if(t==null)return Le;let n=t[_n]||(t[_n]=[]),r=new F;return n.push(function(){vn(()=>{r.next(),r.complete()})}),r}),xe(()=>Promise.resolve())).subscribe(()=>{(o.observed??o.observers.length>0)&&console.warn(di(i))})),i[gn]=!0)}function ci(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]"}function vn(i){let o=Ge.Zone;return!!o&&typeof o.root?.run=="function"?o.root.run(i):i()}function di(i){return`
  The ${i.constructor.name} still has subscriptions that haven't been unsubscribed.
  This may happen if the class extends another class decorated with @UntilDestroy().
  The child class implements its own ngOnDestroy() method but doesn't call super.ngOnDestroy().
  Let's look at the following example:
  @UntilDestroy()
  @Directive()
  export abstract class BaseDirective {}
  @Component({ template: '' })
  export class ConcreteComponent extends BaseDirective implements OnDestroy {
    constructor() {
      super();
      someObservable$.pipe(untilDestroyed(this)).subscribe();
    }
    ngOnDestroy(): void {
      // Some logic here...
    }
  }
  The BaseDirective.ngOnDestroy() will not be called since Angular will call ngOnDestroy()
  on the ConcreteComponent, but not on the BaseDirective.
  One of the solutions is to declare an empty ngOnDestroy method on the BaseDirective:
  @UntilDestroy()
  @Directive()
  export abstract class BaseDirective {
    ngOnDestroy(): void {}
  }
  @Component({ template: '' })
  export class ConcreteComponent extends BaseDirective implements OnDestroy {
    constructor() {
      super();
      someObservable$.pipe(untilDestroyed(this)).subscribe();
    }
    ngOnDestroy(): void {
      // Some logic here...
      super.ngOnDestroy();
    }
  }
  `}var Ee=!1;function pi(i,o,e){let t=i[o];if(Ee&&typeof t!="function")throw new Error(`${i.constructor.name} is using untilDestroyed but doesn't implement ${o}`);Cn(i,e),i[o]=function(){t.apply(this,arguments),xn(this,e),i[o]=t}}function kn(i,o){return e=>{let t=bn(o);typeof o=="string"?pi(i,o,t):(Ee&&mi(i),Cn(i,t));let n=i[t];return Ee&&li(i,n),e.pipe(Ke(n))}}function mi(i){let o=Object.getPrototypeOf(i);if(!(yn in o))throw new Error("untilDestroyed operator cannot be used inside directives or components or providers that are not decorated with UntilDestroy decorator")}function wn(i){return Error(`Unable to find icon with the name "${i}"`)}function ui(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function In(i){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${i}".`)}function Dn(i){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${i}".`)}var P=class{url;svgText;options;svgElement=null;constructor(o,e,t){this.url=o,this.svgText=e,this.options=t}},En=(()=>{class i{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,n,r){this._httpClient=e,this._sanitizer=t,this._errorHandler=r,this._document=n}addSvgIcon(e,t,n){return this.addSvgIconInNamespace("",e,t,n)}addSvgIconLiteral(e,t,n){return this.addSvgIconLiteralInNamespace("",e,t,n)}addSvgIconInNamespace(e,t,n,r){return this._addSvgIconConfig(e,t,new P(n,null,r))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,n,r){let a=this._sanitizer.sanitize(X.HTML,n);if(!a)throw Dn(n);let m=ee(a);return this._addSvgIconConfig(e,t,new P("",m,r))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,n){return this._addSvgIconSetConfig(e,new P(t,null,n))}addSvgIconSetLiteralInNamespace(e,t,n){let r=this._sanitizer.sanitize(X.HTML,t);if(!r)throw Dn(t);let a=ee(r);return this._addSvgIconSetConfig(e,new P("",a,n))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(X.RESOURCE_URL,e);if(!t)throw In(e);let n=this._cachedIconsByUrl.get(t);return n?w(be(n)):this._loadSvgIconFromConfig(new P(e,null)).pipe(Z(r=>this._cachedIconsByUrl.set(t,r)),R(r=>be(r)))}getNamedSvgIcon(e,t=""){let n=Tn(t,e),r=this._svgIconConfigs.get(n);if(r)return this._getSvgFromConfig(r);if(r=this._getIconConfigFromResolvers(t,e),r)return this._svgIconConfigs.set(n,r),this._getSvgFromConfig(r);let a=this._iconSetConfigs.get(t);return a?this._getSvgFromIconSetConfigs(e,a):We(wn(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?w(be(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(R(t=>be(t)))}_getSvgFromIconSetConfigs(e,t){let n=this._extractIconWithNameFromAnySet(e,t);if(n)return w(n);let r=t.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe($e(m=>{let G=`Loading icon set URL: ${this._sanitizer.sanitize(X.RESOURCE_URL,a.url)} failed: ${m.message}`;return this._errorHandler.handleError(new Error(G)),w(null)})));return He(r).pipe(R(()=>{let a=this._extractIconWithNameFromAnySet(e,t);if(!a)throw wn(e);return a}))}_extractIconWithNameFromAnySet(e,t){for(let n=t.length-1;n>=0;n--){let r=t[n];if(r.svgText&&r.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(r),m=this._extractSvgIconFromSet(a,e,r.options);if(m)return m}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(Z(t=>e.svgText=t),R(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?w(null):this._fetchIcon(e).pipe(Z(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,n){let r=e.querySelector(`[id="${t}"]`);if(!r)return null;let a=r.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,n);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),n);let m=this._svgElementFromString(ee("<svg></svg>"));return m.appendChild(a),this._setSvgAttributes(m,n)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let n=t.querySelector("svg");if(!n)throw Error("<svg> tag not found");return n}_toSvgElement(e){let t=this._svgElementFromString(ee("<svg></svg>")),n=e.attributes;for(let r=0;r<n.length;r++){let{name:a,value:m}=n[r];a!=="id"&&t.setAttribute(a,m)}for(let r=0;r<e.childNodes.length;r++)e.childNodes[r].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[r].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:n}=e,r=n?.withCredentials??!1;if(!this._httpClient)throw ui();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let a=this._sanitizer.sanitize(X.RESOURCE_URL,t);if(!a)throw In(t);let m=this._inProgressUrlFetches.get(a);if(m)return m;let b=this._httpClient.get(a,{responseType:"text",withCredentials:r}).pipe(R(G=>ee(G)),ze(()=>this._inProgressUrlFetches.delete(a)),Ye());return this._inProgressUrlFetches.set(a,b),b}_addSvgIconConfig(e,t,n){return this._svgIconConfigs.set(Tn(e,t),n),this}_addSvgIconSetConfig(e,t){let n=this._iconSetConfigs.get(e);return n?n.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let n=0;n<this._resolvers.length;n++){let r=this._resolvers[n](t,e);if(r)return hi(r)?new P(r.url,null,r.options):new P(r,null)}}static \u0275fac=function(t){return new(t||i)(oe(wt,8),oe(It),oe(ue,8),oe(he))};static \u0275prov=me({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function be(i){return i.cloneNode(!0)}function Tn(i,o){return i+":"+o}function hi(i){return!!(i.url&&i.options)}var fi=["*"],_i=new I("MAT_ICON_DEFAULT_OPTIONS"),gi=new I("mat-icon-location",{providedIn:"root",factory:()=>{let i=l(ue),o=i?i.location:null;return{getPathname:()=>o?o.pathname+o.search:""}}}),Pn=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],vi=Pn.map(i=>`[${i}]`).join(", "),yi=/^url\(['"]?#(.*?)['"]?\)$/,_r=(()=>{class i{_elementRef=l(H);_iconRegistry=l(En);_location=l(gi);_errorHandler=l(he);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=A.EMPTY;constructor(){let e=l(new gt("aria-hidden"),{optional:!0}),t=l(_i,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let n=e.childNodes[t];(n.nodeType!==1||n.nodeName.toLowerCase()==="svg")&&n.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(n=>n.length>0);this._previousFontSetClass.forEach(n=>e.classList.remove(n)),t.forEach(n=>e.classList.add(n)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((n,r)=>{n.forEach(a=>{r.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(vi),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let r=0;r<t.length;r++)Pn.forEach(a=>{let m=t[r],b=m.getAttribute(a),G=b?b.match(yi):null;if(G){let ce=n.get(m);ce||(ce=[],n.set(m,ce)),ce.push({name:a,value:G[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,n]=this._splitIconName(e);t&&(this._svgNamespace=t),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,t).pipe(Q(1)).subscribe(r=>this._setSvgElement(r),r=>{let a=`Error retrieving icon ${t}:${n}! ${r.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,n){t&2&&($("data-mat-icon-type",n._usingFontIcon()?"font":"svg")("data-mat-icon-name",n._svgName||n.fontIcon)("data-mat-icon-namespace",n._svgNamespace||n.fontSet)("fontIcon",n._usingFontIcon()?n.fontIcon:null),_e(n.color?"mat-"+n.color:""),v("mat-icon-inline",n.inline)("mat-icon-no-color",n.color!=="primary"&&n.color!=="accent"&&n.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",S],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:fi,decls:1,vars:0,template:function(t,n){t&1&&(W(),E(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return i})(),An=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=N({type:i});static \u0275inj=L({imports:[B]})}return i})();function Fn(i,o,e){let t=o;for(;t--;)if(e(i[t],t,i))return t;return-1}var Pe=["\u2018","\u201C"," ",".",",","!","?",":",";","	",`
`,"\r","'","`","\u2019",'"',"\\","/","[","]","(",")","{","}","-","\u2014","<",">"];function Rn(){let i=window.getSelection();if(!i)return"";let o=i.toString().trim();if(o)return o;let e=i.focusOffset,t=i.focusNode?.nodeValue;if(!t)return"";let n=t.split(""),r=Fn(n,e,m=>Pe.includes(m));r=r===-1?0:r+1;let a=n.findIndex((m,b)=>Pe.includes(m)&&b>e);return a===-1&&(a=t.length),t.slice(r,a).trim()}function Ae(i,o){let e=o.index>=0?o.index:i.length+o.index;if(i.slice(e,e+o.pattern.length)!==o.pattern)return null;let t=i.length-(i.slice(0,o.index).length+o.pattern.length),n=i.slice(0,o.index)+o.replace;return t>0&&(n=n+i.slice(-1*t)),n}var Ln=(()=>{class i{constructor(){this.bookService=l(on),this.currentDictionaryState$=new Re(null),this.minimalSearchPattern=2,this.maxNumberOfSearchResults=50,this.morphology={},this.morphologyReplaceRules=[],this.dictionaryIsEmpty=!0,this.morphologyIsEmpty=!0,this.searchTerm="",this.currentTerm="",this.terms=[],this.seeAlsoWords=[],Be([this.bookService.getMorphology$(),this.bookService.getDictionaryTerms$(),this.bookService.getMorphologyReplaceRules$()]).pipe(Q(1)).subscribe(([e,t,n])=>{e?.morphology?(this.morphology=e.morphology,this.morphologyIsEmpty=!1):(this.morphology={},this.morphologyIsEmpty=!0),n?.morphologyReplaceRules?this.morphologyReplaceRules=n.morphologyReplaceRules:this.morphologyReplaceRules=[],t.length?(this.terms=t,this.dictionaryIsEmpty=!1):this.dictionaryIsEmpty=!0,this.setDictionaryState(null),this.searchTerm&&this.setTerm(this.searchTerm)})}searchTerms(e){if(e.length<this.minimalSearchPattern)return null;let t=new RegExp(e.replaceAll("*",".+"),"iu");return this.terms.filter(n=>t.test(n)).slice(0,this.maxNumberOfSearchResults)}setTerm(e){if(this.searchTerm=e,this.currentTerm=e.trim().toLowerCase(),this.seeAlsoWords=[],this.setDictionaryState(null),this.morphologyReplaceRules.forEach(n=>{let r=Ae(this.currentTerm,n);r&&this.checkTerm(r)&&this.seeAlsoWords.push(r)}),!this.morphologyIsEmpty){let n=this.morphology[this.currentTerm];n?.o&&this.seeAlsoWords.push(n.o)}let t=this.checkTerm(this.currentTerm);if(t){this.setDictionaryState(t);return}if(!this.morphologyIsEmpty){let n=this.morphology[this.currentTerm];if(n?.o&&(t=this.checkTerm(n.o),t)){this.setDictionaryState(t);return}}for(let n=0;n<this.morphologyReplaceRules.length;n++){let r=Ae(this.currentTerm,this.morphologyReplaceRules[n]);if(!r)continue;let a=this.checkTerm(r);if(a){this.currentTerm=r,this.setDictionaryState(a);return}}}setDictionaryState(e){if(!e){this.setNullState();return}this.bookService.getDictionaryItem$(e).subscribe(t=>{this.currentDictionaryState$.next({currentDictionaryTerm:t,dictionaryIsEmpty:this.dictionaryIsEmpty,searchTerm:this.searchTerm,seeAlsoWords:this.seeAlsoWords})})}setNullState(){this.seeAlsoWords=[],this.currentDictionaryState$.next({currentDictionaryTerm:null,dictionaryIsEmpty:this.dictionaryIsEmpty,searchTerm:this.searchTerm,seeAlsoWords:this.seeAlsoWords})}checkTerm(e){return this.terms.includes(e)?e:""}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=me({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var bi=["mat-internal-form-field",""],Ci=["*"],Tr=(()=>{class i{labelPosition="after";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=g({type:i,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,n){t&2&&v("mdc-form-field--align-end",n.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:bi,ngContentSelectors:Ci,decls:1,vars:0,template:function(t,n){t&1&&(W(),E(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return i})();var Nn=(()=>{class i{constructor(){this.link=q.required(),this.pattern=q.required(),this.computedLink=_t(()=>{let e=this.link().link,t=this.pattern();return e.replace(rn,t)})}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=g({type:i,selectors:[["app-external-dictionary-link"]],inputs:{link:[1,"link"],pattern:[1,"pattern"]},decls:2,vars:2,consts:[["target","_blank",1,"link",3,"href"]],template:function(t,n){t&1&&(re(0,"a",0),u(1),ae()),t&2&&(J("href",n.computedLink(),it),s(),_(" ",n.link().label,`
`))},encapsulation:2})}}return i})();var xi=(i,o)=>o.link;function Si(i,o){if(i&1&&k(0,"app-external-dictionary-link",0),i&2){let e=o.$implicit,t=d(2);M("link",e)("pattern",t.pattern())}}function Oi(i,o){if(i&1&&D(0,Si,1,2,"app-external-dictionary-link",0,xi),i&2){let e=d();T(e.externalDictionaryService.items())}}var Vn=(()=>{class i{constructor(){this.pattern=q.required(),this.externalDictionaryService=l(an)}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=g({type:i,selectors:[["app-external-dictionary-links"]],inputs:{pattern:[1,"pattern"]},decls:1,vars:1,consts:[[3,"link","pattern"]],template:function(t,n){t&1&&h(0,Oi,2,0),t&2&&f(n.pattern()?0:-1)},dependencies:[Nn],styles:["[_nghost-%COMP%]{display:flex;gap:4px;margin:8px 0}"]})}}return i})();var Mi=["topMarker"];function ki(i,o){if(i&1){let e=V();c(0,"mat-option",14),y("keyup.enter",function(){let n=C(e).$implicit,r=d(2);return x(r.selectTermOption(n))})("click",function(){let n=C(e).$implicit,r=d(2);return x(r.selectTermOption(n))}),u(1),p()}if(i&2){let e=o.$implicit;M("value",e),s(),_(" ",e," ")}}function wi(i,o){if(i&1){let e=V();c(0,"div",4)(1,"mat-form-field",10)(2,"mat-label",11),u(3,"Term"),p(),c(4,"input",12),y("keyup.enter",function(){C(e);let n=d();return x(n.selectTermOption(n.searchControl.value))})("keyup",function(n){return n.stopPropagation()})("keydown",function(n){return n.stopPropagation()})("paste",function(){C(e);let n=d();return x(n.paste())}),p(),c(5,"mat-autocomplete",null,1),D(7,ki,2,2,"mat-option",13,U),p()()()}if(i&2){let e=ht(6),t=d();s(4),M("formControl",t.searchControl)("matAutocomplete",e),s(3),T(t.termOptions)}}function Ii(i,o){i&1&&(c(0,"div",5),u(1," dictionaryIsEmpty "),p())}function Di(i,o){if(i&1){let e=V();c(0,"div",16),y("click",function(){let n=C(e).$implicit,r=d(2);return x(r.selectPartOfSpeech(n))}),u(1),p()}if(i&2){let e=o.$implicit,t=d(2);v("selected",t.selectedPartsOfSpeech.includes(e)),s(),_(" ",e," ")}}function Ti(i,o){if(i&1&&(c(0,"div",6),D(1,Di,2,3,"div",15,U),p()),i&2){let e=d();s(),T(e.partsOfSpeech)}}function Ei(i,o){i&1&&u(0," => ")}function Pi(i,o){if(i&1&&(c(0,"span"),u(1),h(2,Ei,1,0),p()),i&2){let e=d();s(),_(" ",e.searchTerm," "),s(),f(e.dictionaryTerm!=null&&e.dictionaryTerm.term?2:-1)}}function Ai(i,o){if(i&1&&(c(0,"span",18),u(1),p()),i&2){let e=d(2).$implicit;s(),_(" ",e.transcription," ")}}function Fi(i,o){if(i&1&&(c(0,"span",19),u(1),p()),i&2){let e=d(2).$implicit;s(),_(" ",e.dictionaryName," ")}}function Ri(i,o){if(i&1&&(c(0,"div",20),u(1),p()),i&2){let e=d(2).$implicit;s(),_(" Etymology: ",e.etymology," ")}}function Li(i,o){if(i&1&&(c(0,"div",23),u(1),p()),i&2){let e=d().$implicit;s(),_(" ",e.lexicalUnit," ")}}function Ni(i,o){i&1&&(c(0,"span",26),k(1,"div",32),p())}function Vi(i,o){i&1&&(c(0,"span",27),k(1,"div",32),p())}function Wi(i,o){if(i&1&&(c(0,"div",29),u(1),p()),i&2){let e=d().$implicit;s(),_(" Synonym: ",e.synonym," ")}}function Bi(i,o){if(i&1&&(c(0,"div",30),u(1),p()),i&2){let e=d().$implicit;s(),_(" Antonym: ",e.antonym," ")}}function ji(i,o){if(i&1){let e=V();c(0,"div",34)(1,"div",35),y("dblclick",function(){C(e);let n=d(5);return x(n.clickOnWord())}),c(2,"span"),u(3),p()(),c(4,"div",36),u(5),p()()}if(i&2){let e=o.$implicit;s(3),_(" ",e.original," "),s(2),ft(e.translation)}}function Hi(i,o){if(i&1&&(c(0,"div",31)(1,"div",33),D(2,ji,6,2,"div",34,U),p()()),i&2){let e=d().$implicit;s(2),T(e.examples)}}function $i(i,o){if(i&1){let e=V();c(0,"div",22),h(1,Li,2,1,"div",23),c(2,"div",24),y("click",function(){let n=C(e).$implicit;return x(n.showDetails=!n.showDetails)}),c(3,"span",25),y("dblclick",function(){C(e);let n=d(3);return x(n.clickOnWord())}),h(4,Ni,2,0,"span",26),h(5,Vi,2,0,"span",27),c(6,"span",28),u(7),p()()(),h(8,Wi,2,1,"div",29),h(9,Bi,2,1,"div",30),h(10,Hi,4,0,"div",31),p()}if(i&2){let e=o.$implicit;s(),f(e.lexicalUnit?1:-1),s(),v("has-examples",e.examples),s(2),f(e.examples?4:-1),s(),f(e.examples?-1:5),s(2),_(" ",e.definition," "),s(),f(e.synonym?8:-1),s(),f(e.antonym?9:-1),s(),f(e.showDetails?10:-1)}}function Ui(i,o){if(i&1){let e=V();c(0,"div",17),h(1,Ai,2,1,"span",18),c(2,"span",16),y("click",function(){C(e);let n=d().$implicit,r=d();return x(r.selectPartOfSpeech(n.partOfSpeech))}),u(3),p(),h(4,Fi,2,1,"span",19),p(),h(5,Ri,2,1,"div",20),c(6,"div",21),D(7,$i,11,9,"div",22,U),p()}if(i&2){let e=d().$implicit,t=d();s(),f(e.transcription?1:-1),s(),v("selected",t.selectedPartsOfSpeech.includes(e.partOfSpeech)),s(),_(" ",e.partOfSpeech," "),s(),f(e.dictionaryName?4:-1),s(),f(e.etymology?5:-1),s(2),T(e.definitions)}}function zi(i,o){if(i&1&&(c(0,"div",8),h(1,Ui,9,6),p()),i&2){let e=o.$implicit,t=d();s(),f(!t.selectedPartsOfSpeech.length||t.selectedPartsOfSpeech.includes(e.partOfSpeech)?1:-1)}}function Yi(i,o){if(i&1){let e=V();c(0,"div",39),y("dblclick",function(){C(e);let n=d(2);return x(n.clickOnWord())}),u(1),p()}if(i&2){let e=o.$implicit;s(),_(" ",e," ")}}function qi(i,o){if(i&1&&(c(0,"div",9)(1,"div",37),u(2,"See also:"),p(),D(3,Yi,2,1,"div",38,U),p()),i&2){let e=d();s(3),T(e.words)}}var Wn=class Fe{constructor(){this.cdr=l(K),this.dictionaryService=l(Ln),this.hideSearchBar=q(!1),this.newTermIsSet=vt(),this.topMarker=yt.required("topMarker"),this.searchTerm="",this.dictionaryIsEmpty=!1,this.dictionaryTerm=null,this.partsOfSpeech=[],this.selectedPartsOfSpeech=[],this.words=[],this.termOptions=[],this.searchControl=new qt("")}set term(o){this.dictionaryService.setTerm(o),this.searchControl.setValue(o,{emitEvent:!1})}selectPartOfSpeech(o){this.selectedPartsOfSpeech.includes(o)?this.selectedPartsOfSpeech=this.selectedPartsOfSpeech.filter(e=>e!==o):this.selectedPartsOfSpeech.push(o)}ngOnInit(){this.dictionaryService.currentDictionaryState$.pipe(kn(this)).subscribe(o=>{this.searchTerm=o?.searchTerm||"",this.dictionaryTerm=o?.currentDictionaryTerm||null,this.dictionaryIsEmpty=!!o?.dictionaryIsEmpty,this.words=o?.seeAlsoWords||[],this.dictionaryTerm?.term&&(this.words=this.words.filter(e=>e!==this.dictionaryTerm?.term)),this.setTerm(this.dictionaryTerm)}),this.initSearchControl()}initSearchControl(){this.searchControl.valueChanges.subscribe(o=>{if(!o||o.length<this.dictionaryService.minimalSearchPattern){this.termOptions=[];return}this.termOptions=this.dictionaryService.searchTerms(o)||[],this.termOptions.length===1&&this.selectTermOption(this.termOptions[0])})}paste(){navigator.clipboard.readText().then(o=>this.selectTermOption(o?.trim()||""),o=>console.error(o))}selectTermOption(o){this.dictionaryService.setTerm(o||""),this.termOptions=[],this.newTermIsSet.emit(o||"")}clickOnWord(){let o=Rn();this.searchControl.setValue(o,{emitEvent:!1}),this.dictionaryService.setTerm(o),this.newTermIsSet.emit(o)}setTerm(o){if(this.selectedPartsOfSpeech=[],this.dictionaryTerm=o,!o){this.partsOfSpeech=[],this.cdr.detectChanges();return}let e=o.articles.map(t=>t.partOfSpeech?.toLowerCase()?.trim()||"").filter(t=>!!t);this.partsOfSpeech=[...new Set(e)],this.topMarker()?.nativeElement?.scrollIntoView(),this.cdr.detectChanges()}static{this.\u0275fac=function(e){return new(e||Fe)}}static{this.\u0275cmp=g({type:Fe,selectors:[["app-dictionary-widget"]],viewQuery:function(e,t){e&1&&mt(t.topMarker,Mi,5),e&2&&ut()},inputs:{term:"term",hideSearchBar:[1,"hideSearchBar"]},outputs:{newTermIsSet:"newTermIsSet"},decls:13,vars:7,consts:[["topMarker",""],["auto","matAutocomplete"],[1,"top-marker"],[3,"pattern"],[1,"search-bar"],[1,"empty-dictionary"],[1,"parts-of-speech"],[1,"header"],[1,"article"],[1,"words"],[1,"form-field"],[1,"mat-label"],["type","text","placeholder","Term","autocomplete","false","matInput","",3,"keyup.enter","keyup","keydown","paste","formControl","matAutocomplete"],[3,"value"],[3,"keyup.enter","click","value"],[1,"part-of-speech",3,"selected"],[1,"part-of-speech",3,"click"],[1,"article-header"],[1,"transcription"],[1,"dictionary"],[1,"etymology"],[1,"definitions"],[1,"definition"],[1,"lex-unit"],[1,"definition",3,"click"],[3,"dblclick"],[1,"content-mark"],[1,"non-content-mark"],[1,"def-text"],[1,"synonym"],[1,"antonym"],[1,"details"],[1,"box"],[1,"examples"],[1,"example"],[1,"original",3,"dblclick"],[1,"translation"],[1,"title"],[1,"word"],[1,"word",3,"dblclick"]],template:function(e,t){if(e&1&&(k(0,"div",2,0)(2,"app-external-dictionary-links",3),h(3,wi,9,2,"div",4),h(4,Ii,2,0,"div",5),h(5,Ti,3,0,"div",6),c(6,"div",7),h(7,Pi,3,2,"span"),c(8,"span"),u(9),p()(),D(10,zi,2,1,"div",8,U),h(12,qi,5,0,"div",9)),e&2){let n;s(2),M("pattern",t.searchTerm.trim().toLowerCase()),s(),f(t.hideSearchBar()?-1:3),s(),f(t.dictionaryIsEmpty?4:-1),s(),f(t.partsOfSpeech.length&&t.partsOfSpeech.length>1?5:-1),s(2),f(t.searchTerm.trim().toLowerCase()!==(t.dictionaryTerm==null||t.dictionaryTerm.term==null||(n=t.dictionaryTerm.term.trim())==null?null:n.toLowerCase())?7:-1),s(2),_(" ",t.dictionaryTerm==null?null:t.dictionaryTerm.term," "),s(),T(t.dictionaryTerm==null?null:t.dictionaryTerm.articles),s(2),f(t.words.length?12:-1)}},dependencies:[$t,An,Gt,zt,Yt,fn,hn,ne,Te,en,Jt,Zt,nn,tn,ie,Qt,Kt,Vn],styles:["[_nghost-%COMP%]{display:block;padding:var(--padding-main);font-size:var(--dictionary-main-font-size)}.parts-of-speech[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.parts-of-speech[_ngcontent-%COMP%]   .part-of-speech[_ngcontent-%COMP%]{cursor:pointer;margin:4px}.parts-of-speech[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%]{outline:1px solid green}.header[_ngcontent-%COMP%]{font-size:var(--dictionary-header-font-size);font-weight:700;display:flex;flex-wrap:wrap;align-items:center;gap:8px}.header[_ngcontent-%COMP%]   .favorite-word-button[_ngcontent-%COMP%]{padding:8px 0 0;margin-right:-8px}.header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{line-height:1}.has-examples[_ngcontent-%COMP%]   .def-text[_ngcontent-%COMP%]{cursor:pointer}.article[_ngcontent-%COMP%]{margin:16px 0}.article[_ngcontent-%COMP%]   .article-header[_ngcontent-%COMP%]{margin:var(--padding-main) 0;line-height:2}.article[_ngcontent-%COMP%]   .article-header[_ngcontent-%COMP%]   .transcription[_ngcontent-%COMP%]{color:#000;margin:4px;padding:4px;background-color:#f9e79f}.article[_ngcontent-%COMP%]   .article-header[_ngcontent-%COMP%]   .dictionary[_ngcontent-%COMP%]{color:#000;margin:4px;padding:4px;background-color:#94ff7d}.article[_ngcontent-%COMP%]   .definition[_ngcontent-%COMP%]{margin:8px 0}.article[_ngcontent-%COMP%]   .definition[_ngcontent-%COMP%]   .content-mark[_ngcontent-%COMP%], .article[_ngcontent-%COMP%]   .definition[_ngcontent-%COMP%]   .non-content-mark[_ngcontent-%COMP%]{display:inline-flex;justify-content:center;align-items:center;background-color:wheat;height:12px;width:12px;transform:translateY(-2px)}.article[_ngcontent-%COMP%]   .definition[_ngcontent-%COMP%]   .content-mark[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%], .article[_ngcontent-%COMP%]   .definition[_ngcontent-%COMP%]   .non-content-mark[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{height:8px;width:8px}.article[_ngcontent-%COMP%]   .definition[_ngcontent-%COMP%]   .content-mark[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{background-color:green}.article[_ngcontent-%COMP%]   .definition[_ngcontent-%COMP%]   .lex-unit[_ngcontent-%COMP%]{font-weight:700;font-size:1.2em;background-color:wheat;color:#000;padding:2px}.article[_ngcontent-%COMP%]   .definition[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%]{color:green;font-weight:700;background-color:wheat;padding:2px;margin-right:4px}.article[_ngcontent-%COMP%]   .definition[_ngcontent-%COMP%]   .synonym[_ngcontent-%COMP%]{color:green;padding-left:var(--padding-small)}.article[_ngcontent-%COMP%]   .definition[_ngcontent-%COMP%]   .antonym[_ngcontent-%COMP%]{color:red;padding-left:var(--padding-small)}.article[_ngcontent-%COMP%]   .definition[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{padding-left:var(--padding-small)}.article[_ngcontent-%COMP%]   .definition[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .examples[_ngcontent-%COMP%]{padding-left:var(--padding-small);margin:4px 0}.article[_ngcontent-%COMP%]   .definition[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .examples[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]{margin:8px 0}.article[_ngcontent-%COMP%]   .definition[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .examples[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%]{display:flex;align-items:center}.article[_ngcontent-%COMP%]   .definition[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .examples[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{cursor:pointer}.article[_ngcontent-%COMP%]   .definition[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .examples[_ngcontent-%COMP%]   .translation[_ngcontent-%COMP%]{color:gray;padding-left:var(--padding-large)}.part-of-speech[_ngcontent-%COMP%]{font-weight:700;background-color:wheat;color:#000;padding:4px;margin:4px 0;cursor:pointer}.words[_ngcontent-%COMP%]{display:flex;gap:8px}.search-bar[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:center;gap:var(--padding-main);width:100%}.form-field[_ngcontent-%COMP%]{width:800px;max-width:90vw}.mat-label[_ngcontent-%COMP%]{color:gray!important}.etymology[_ngcontent-%COMP%]{color:green}"],changeDetection:0})}};Wn=Ne([Mn()],Wn);export{ie as a,fn as b,Mn as c,kn as d,_r as e,An as f,Tr as g,Rn as h,Wn as i};

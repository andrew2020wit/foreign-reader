import{C as s,Da as g,Ea as f,Jc as x,S as l,T as p,U as u,X as i,Yb as y,a as o,bd as C,fb as v,gb as h,n as c,qb as b,y as m}from"./chunk-X4ZIZC3B.js";var k=["*"];var S=new u("MAT_CARD_CONFIG"),L=(()=>{class a{appearance;constructor(){let e=i(S,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=g({type:a,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(t,r){t&2&&b("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:k,decls:1,vars:0,template:function(t,r){t&1&&(v(),h(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return a})();var N=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=f({type:a});static \u0275inj=p({imports:[x]})}return a})();var M="ForeignReaderBook";var q=(()=>{class a{constructor(){this.bookService=i(C),this.datePipe=new y("en")}importMorphologyReplaceRules(e){let t=JSON.parse(e)?.morphologyReplaceRules;if(!t){console.error("!morphologyReplaceRules");return}return this.bookService.updateMorphologyReplaceRules$(t)}importMorphology(e){let t=JSON.parse(e)?.rules;if(!t?.[0]?.i||!t?.[0]?.o){console.error("if (!morphologies?.[0]?.i || !morphologies?.[0]?.o)");return}return this.bookService.updateMorphology$(t)}importDictionary(e){let t=JSON.parse(e)?.terms;if(!t?.[0]?.term){console.error("!dictionary?.[0]?.term");return}return this.bookService.updateDictionary$(t)}importJsonText(e){let t=JSON.parse(e);if(!t.book?.title||!t.book?.content?.[0]?.text){console.error("!bookJson.book?.title || !bookJson.book?.content?.[0]?.original");return}return this.bookService.import$(t)}importTextFile(e,t){return this.bookService.create$(t,e)}export(e){m(this.bookService.getTitle$(e),this.bookService.getContent$(e),this.bookService.getHeaders$(e),this.bookService.getMarkedItems$(e),this.bookService.getTranslation$(e)).pipe(s(1),c(t=>({id:t[0].id,title:t[0].title,content:t[1].content,headers:t[2]?.headers||[],markedItems:t[3]?.markedItems||[],translation:t[4]?.translation||{}}))).subscribe(t=>{let r=o({},t),d=JSON.stringify({jsonContentDescription:M,book:r},null,2);this.download(d,r.title)})}download(e,t){let r="text/plain",n=document.createElement("a"),d=new Blob([e],{type:r}),D=this.datePipe.transform(new Date,"yyyy-MM-dd");n.href=URL.createObjectURL(d),n.download=t+`.${D}.book.json`,n.click(),n.remove()}static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275prov=l({token:a,factory:a.\u0275fac,providedIn:"root"})}}return a})();export{L as a,N as b,q as c};

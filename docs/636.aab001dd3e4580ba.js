"use strict";(self.webpackChunkforeign_reader=self.webpackChunkforeign_reader||[]).push([[636],{5709:(w,y,s)=>{s.d(y,{j:()=>v});var d=s(5619),f=s(8180),O=s(2096),l=s(7772),C=s(5879),i=s(2e3),g=s(957);let v=(()=>{class e{constructor(m,p){this.dbService=m,this.infoService=p,this.examples$=new d.X([]),this.sort=(_,h)=>(_.toDoTimestamp||0)-(h.toDoTimestamp||0),this.dbService.getAll(l.L.FavoriteExamples).pipe((0,f.q)(1)).subscribe(_=>{_.forEach(h=>h.showDetails=!1),_?(_.sort(this.sort),this.examples$.next(_)):this.examples$.next([])})}deleteAll(){return this.dbService.clear(l.L.FavoriteExamples)}import(m){const p=JSON.parse(m)?.favoriteExamples;if(!p?.length)return console.error("!examples?.length"),this.infoService.error("!examples?.length"),(0,O.of)([]);const _=this.examples$.value.map(D=>D.timestamp);function h(D){return _.includes(D)?h(D+1):D}return p.forEach(D=>{if(!D.timestamp){const M=h(Date.now());_.push(M),D.timestamp=M}}),this.dbService.bulkAdd(l.L.FavoriteExamples,p).pipe((0,f.q)(1))}addExample(m){const p=Date.now(),_={...m,timestamp:p,showDetails:!1};this.dbService.add(l.L.FavoriteExamples,_).pipe((0,f.q)(1)).subscribe();const h=[_,...this.examples$.value];this.examples$.next(h),this.infoService.show("added: "+m.original)}update(m){if(!m?.timestamp||!m.toDoTimestamp)return;const p=this.examples$.value,_=p.find(h=>h.timestamp===m.timestamp);_&&(_.toDoTimestamp=m.toDoTimestamp,_.updateTimestamp=Date.now(),this.dbService.update(l.L.FavoriteExamples,_).pipe((0,f.q)(1)).subscribe(),p.sort(this.sort),this.examples$.next(p))}removeExample(m){if(!m)return;this.dbService.delete(l.L.FavoriteExamples,m).pipe((0,f.q)(1)).subscribe();const p=this.examples$.value.filter(_=>_.timestamp!==m);this.examples$.next(p)}}return e.\u0275fac=function(m){return new(m||e)(C.LFG(i.ys),C.LFG(g.C))},e.\u0275prov=C.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},2907:(w,y,s)=>{s.r(y),s.d(y,{FavoriteExamplesComponent:()=>b});var p,d=s(7582),f=s(6814),O=s(2296),l=s(4408),C=s(5986),i=s(6223),g=s(1791),v=s(2596),e=s(5879),P=s(5709),m=s(5152);const _=["componentContent"];function h(r,o){if(1&r&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.hij(" / ",t.allExamplesNumber," ")}}function D(r,o){if(1&r&&(e.TgZ(0,"span",23),e._uU(1),e.qZA()),2&r){const t=e.oxw(2).$implicit;e.xp6(1),e.Oqu(t.level)}}function M(r,o){if(1&r&&(e.TgZ(0,"div",31),e._uU(1),e.qZA()),2&r){const t=e.oxw(3).$implicit;e.xp6(1),e.hij(" ",t.transcription," ")}}function B(r,o){if(1&r&&(e.TgZ(0,"div",32),e._uU(1),e.qZA()),2&r){const t=e.oxw(3).$implicit;e.xp6(1),e.hij(" Synonym: ",t.synonym," ")}}function A(r,o){if(1&r&&(e.TgZ(0,"div",33),e._uU(1),e.qZA()),2&r){const t=e.oxw(3).$implicit;e.xp6(1),e.hij(" Antonym: ",t.antonym," ")}}function U(r,o){if(1&r&&(e.TgZ(0,"div",34),e._uU(1),e.qZA()),2&r){const t=e.oxw(3).$implicit;e.xp6(1),e.hij(" ",t.translation," ")}}function F(r,o){if(1&r&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"date"),e.qZA()),2&r){const t=e.oxw(3).$implicit;e.xp6(1),e.hij("U: ",e.xi3(2,1,t.updateTimestamp,"dd.MM.yyyy"),";")}}function Z(r,o){if(1&r&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"date"),e.qZA()),2&r){const t=e.oxw(3).$implicit;e.xp6(1),e.hij("ToDo: ",e.xi3(2,1,t.toDoTimestamp,"dd.MM.yyyy"),"")}}function I(r,o){if(1&r&&(e.TgZ(0,"div",24),e.YNc(1,M,2,1,"div",25),e.TgZ(2,"div",26),e._uU(3),e.qZA(),e.YNc(4,B,2,1,"div",27),e.YNc(5,A,2,1,"div",28),e.YNc(6,U,2,1,"div",29),e.TgZ(7,"div",30)(8,"span"),e._uU(9),e.ALo(10,"date"),e.qZA(),e.YNc(11,F,3,4,"span",6),e.YNc(12,Z,3,4,"span",6),e.qZA()()),2&r){const t=e.oxw(2).$implicit;e.xp6(1),e.Q6J("ngIf",t.transcription),e.xp6(2),e.hij(" ",t.definition," "),e.xp6(1),e.Q6J("ngIf",t.synonym),e.xp6(1),e.Q6J("ngIf",t.antonym),e.xp6(1),e.Q6J("ngIf",t.translation),e.xp6(3),e.hij(" C: ",e.xi3(10,8,t.timestamp,"dd.MM.yyyy"),"; "),e.xp6(2),e.Q6J("ngIf",t.updateTimestamp),e.xp6(1),e.Q6J("ngIf",t.toDoTimestamp)}}function S(r,o){if(1&r){const t=e.EpF();e.TgZ(0,"div",10)(1,"div",11)(2,"span",12),e._uU(3),e.qZA(),e.TgZ(4,"button",13),e.NdJ("click",function(){e.CHM(t);const u=e.oxw().$implicit,T=e.oxw();return e.KtG(T.favoriteExamplesService.removeExample(u.timestamp||0))}),e._uU(5," Del "),e.qZA(),e.TgZ(6,"button",14),e.NdJ("click",function(){e.CHM(t);const u=e.oxw().$implicit,T=e.oxw();return e.KtG(T.setToDo(u,1))}),e._uU(7," 1 "),e.qZA(),e.TgZ(8,"button",15),e.NdJ("click",function(){e.CHM(t);const u=e.oxw().$implicit,T=e.oxw();return e.KtG(T.setToDo(u,3))}),e._uU(9," 3 "),e.qZA(),e.TgZ(10,"button",16),e.NdJ("click",function(){e.CHM(t);const u=e.oxw().$implicit,T=e.oxw();return e.KtG(T.setToDo(u,7))}),e._uU(11," 7 "),e.qZA(),e.TgZ(12,"button",17),e.NdJ("click",function(){e.CHM(t);const u=e.oxw().$implicit,T=e.oxw();return e.KtG(T.setToDo(u,30))}),e._uU(13," 30 "),e.qZA(),e.TgZ(14,"span",18),e._uU(15),e.qZA(),e.TgZ(16,"span",19),e._uU(17),e.qZA()(),e.TgZ(18,"div",20),e.NdJ("click",function(){e.CHM(t);const u=e.oxw().$implicit;return e.KtG(u.showDetails=!u.showDetails)}),e.YNc(19,D,2,1,"span",21),e._uU(20),e.qZA(),e.YNc(21,I,13,11,"div",22),e.qZA()}if(2&r){const t=e.oxw().$implicit,c=e.oxw();e.ekj("old",c.dayFromUpdate(t)>25),e.xp6(2),e.Q6J("matTooltip","dayFromCreate/Update"),e.xp6(1),e.AsE(" [ ",c.dayFromCreate(t)," : ",c.dayFromUpdate(t),"] "),e.xp6(12),e.Oqu(t.partOfSpeech),e.xp6(2),e.Oqu(t.term),e.xp6(2),e.Q6J("ngIf",t.level),e.xp6(1),e.hij(" ",t.original," "),e.xp6(1),e.Q6J("ngIf",t.showDetails)}}function L(r,o){if(1&r&&(e.ynx(0),e.YNc(1,S,22,10,"div",9),e.BQk()),2&r){const t=o.$implicit,c=e.oxw();e.xp6(1),e.Q6J("ngIf",c.showAll||c.exampleIsToDo(t))}}let b=((p=class{constructor(o,t,c){this.favoriteExamplesService=o,this.cd=t,this.customStylesService=c,this.dayTime=864e5,this.showAll=!1,this.examples=[],this.toDoNumber=0,this.allExamplesNumber=0}ngOnInit(){this.favoriteExamplesService.examples$.pipe((0,g.t)(this)).subscribe(o=>{this.allExamplesNumber=o?.length||0,this.examples=o.slice(0,1e3),this.computeToDoNumber()})}ngAfterViewInit(){this.subscribeToCustomStylesService(),this.subscribeToKeyBord()}subscribeToCustomStylesService(){this.customStylesService.customStyles$.pipe((0,g.t)(this)).subscribe(o=>{o.forEach(t=>{this.componentContent.nativeElement.style.setProperty(t.cssVariable,t.value)}),this.cd.detectChanges()})}subscribeToKeyBord(){document.onkeydown=o=>{const t=o?.key,c=this.examples[0];switch(t){case"d":this.favoriteExamplesService.removeExample(c.timestamp||0);break;case" ":c.showDetails=!c.showDetails,this.cd.detectChanges();break;case"w":this.setToDo(c,7);break;case"q":this.setToDo(c,30);break;case"s":this.setToDo(c,3);break;case"a":this.setToDo(c,1)}}}trackBy(o,t){return t.timestamp}setToDo(o,t){o.toDoTimestamp=Date.now()+t*this.dayTime,this.favoriteExamplesService.update(o)}dayFromUpdate(o){return o.timestamp?Math.round((Date.now()-(o.updateTimestamp||o.timestamp))/this.dayTime):0}dayFromCreate(o){return o.timestamp?Math.round((Date.now()-o.timestamp)/this.dayTime):0}exampleIsToDo(o){return!o.toDoTimestamp||o.toDoTimestamp<Date.now()+432e5}computeToDoNumber(){this.toDoNumber=this.examples.filter(o=>this.exampleIsToDo(o)).length}}).\u0275fac=function(o){return new(o||p)(e.Y36(P.j),e.Y36(e.sBO),e.Y36(m.N))},p.\u0275cmp=e.Xpm({type:p,selectors:[["app-favorite-examples"]],viewQuery:function(o,t){if(1&o&&e.Gf(_,5),2&o){let c;e.iGM(c=e.CRH())&&(t.componentContent=c.first)}},standalone:!0,features:[e.jDz],decls:12,vars:6,consts:[[1,"component-content",3,"keydown.space","keyup.space"],["componentContent",""],[1,"list"],[1,"header"],["mat-button","","color","primary","routerLink","/"],[1,"example-number"],[4,"ngIf"],["color","primary",1,"checkbox",3,"ngModel","ngModelChange"],[4,"ngFor","ngForOf","ngForTrackBy"],["class","example",3,"old",4,"ngIf"],[1,"example"],[1,"example-header"],[1,"day-from-update",3,"matTooltip"],["mat-button","","color","warn","matTooltip","d",3,"click"],["mat-button","","color","primary","matTooltip","a",3,"click"],["mat-button","","color","primary","matTooltip","s",3,"click"],["mat-button","","color","primary","matTooltip","w",3,"click"],["mat-button","","color","primary","matTooltip","q",3,"click"],[1,"pos"],[1,"term"],["matTooltip","space",1,"original",3,"click"],["class","level",4,"ngIf"],["class","description",4,"ngIf"],[1,"level"],[1,"description"],["class","transcription",4,"ngIf"],[1,"definition"],["class","synonym",4,"ngIf"],["class","antonym",4,"ngIf"],["class","translation",4,"ngIf"],[1,"dates"],[1,"transcription"],[1,"synonym"],[1,"antonym"],[1,"translation"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0,1),e.NdJ("keydown.space",function(u){return u.preventDefault(),u.stopPropagation()})("keyup.space",function(u){return u.preventDefault(),u.stopPropagation()}),e.TgZ(2,"div",2)(3,"div",3)(4,"button",4),e._uU(5,"Go Home"),e.qZA(),e.TgZ(6,"span",5),e._uU(7),e.qZA(),e.YNc(8,h,2,1,"span",6),e.TgZ(9,"mat-checkbox",7),e.NdJ("ngModelChange",function(u){return t.showAll=u}),e._uU(10,"Show All"),e.qZA()(),e.YNc(11,L,2,1,"ng-container",8),e.qZA()()),2&o&&(e.xp6(7),e.AsE("Example number: ",t.toDoNumber," / ",(null==t.examples?null:t.examples.length)||0," "),e.xp6(1),e.Q6J("ngIf",t.allExamplesNumber!==(null==t.examples?null:t.examples.length)),e.xp6(1),e.Q6J("ngModel",t.showAll),e.xp6(2),e.Q6J("ngForOf",t.examples)("ngForTrackBy",t.trackBy))},dependencies:[f.ez,f.sg,f.O5,f.uU,O.ot,O.lW,l.rH,C.p9,C.oG,i.u5,i.JJ,i.On,v.AV,v.gM],styles:[".component-content[_ngcontent-%COMP%]{padding:0;width:100vw;max-width:100vw;height:calc(100vh - 4px);max-height:calc(100vh - 4px);overflow:auto;box-sizing:border-box;background:var(--background-color-main);background-image:var(--book-background-image);background-repeat:repeat;font-family:var(--font-family);color:var(--font-color-main)}.list[_ngcontent-%COMP%]{padding:var(--padding-main);max-width:800px;margin:auto}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]{padding:var(--padding-small);outline:1px solid gray;margin:var(--padding-small)}.list[_ngcontent-%COMP%]   .example.old[_ngcontent-%COMP%]{outline:1px solid red}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .example-header[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:var(--padding-main)}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .example-header[_ngcontent-%COMP%]   .pos[_ngcontent-%COMP%]{color:var(--font-color-translation)}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .example-header[_ngcontent-%COMP%]   .term[_ngcontent-%COMP%]{font-weight:700}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%]{cursor:pointer;margin-top:var(--padding-small);font-size:var(--font-size-original-text)}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%]{color:green;font-weight:700;background-color:wheat;padding:2px}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:var(--font-size-translation-text);padding-left:var(--padding-main)}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin:var(--padding-small) 0}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .definition[_ngcontent-%COMP%], .list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .synonym[_ngcontent-%COMP%]{color:var(--font-color-translation)}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .antonym[_ngcontent-%COMP%]{color:red}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .dates[_ngcontent-%COMP%]{display:flex;gap:var(--padding-small);font-size:12px}"]}),p);b=(0,d.gn)([(0,g.c)()],b)},957:(w,y,s)=>{s.d(y,{C:()=>O});var d=s(5879),f=s(2939);let O=(()=>{class l{constructor(i){this.snackBar=i}show(i){this.snackBar.open(i,"",{duration:1e3,verticalPosition:"top",panelClass:"info-snack"})}error(i){this.snackBar.open(i,"",{duration:3e3,verticalPosition:"top",panelClass:"error-snack"})}}return l.\u0275fac=function(i){return new(i||l)(d.LFG(f.ux))},l.\u0275prov=d.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},2969:(w,y,s)=>{s.d(y,{n:()=>O});var d=function(l){return l.CurrentPopupMenuTab="CurrentPopupMenuTab",l.CopyToClipboard="CopyToClipboard",l.ShowDictionary="ShowDictionary",l.HideMarkedHeaders="HideMarkedHeaders",l.ShowTranslationInBook="ShowTranslationInBook",l.AutoTranslateSelected="AutoTranslateSelected",l.ShowTranslatorInDictionaryViewer="ShowTranslatorInDictionaryViewer",l}(d||{}),f=s(5879);let O=(()=>{class l{get hideMarkedHeaders(){return this.getBoolean(d.HideMarkedHeaders,!1)}set hideMarkedHeaders(i){this.setBoolean(d.HideMarkedHeaders,i)}get copyToClipboard(){return this.getBoolean(d.CopyToClipboard,!1)}set copyToClipboard(i){this.setBoolean(d.CopyToClipboard,i)}get showDictionary(){return this.getBoolean(d.ShowDictionary,!0)}set showDictionary(i){this.setBoolean(d.ShowDictionary,i)}get showTranslationInBook(){return this.getBoolean(d.ShowTranslationInBook,!0)}set showTranslationInBook(i){this.setBoolean(d.ShowTranslationInBook,i)}get currentPopupMenuTab(){return this.getNumber(d.CurrentPopupMenuTab)}set currentPopupMenuTab(i){this.setNumber(d.CurrentPopupMenuTab,i||0)}constructor(){this.trueString="true",this.falseString="false"}getString(i,g=""){return localStorage.getItem(i)||g}setString(i,g){localStorage.setItem(i,g)}setNumber(i,g){localStorage.setItem(i,String(g||0))}getNumber(i,g=0){const v=localStorage.getItem(i);if(null===v)return g;const e=+v;return Number.isNaN(e)?g:e}setBoolean(i,g){localStorage.setItem(i,g?this.trueString:this.falseString)}getBoolean(i,g=!1){const v=localStorage.getItem(i);return v===this.trueString||v!==this.falseString&&g}}return l.\u0275fac=function(i){return new(i||l)},l.\u0275prov=f.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},1791:(w,y,s)=>{s.d(y,{c:()=>Z,t:()=>u});var d=s(8645),f=s(7394),O=s(7715),l=s(6232),C=s(5879),i=s(1631),g=s(9773);const v=C.GuJ,P=Symbol("__destroy"),m=Symbol("__decoratorApplied");function p(n){return"string"==typeof n?Symbol(`__destroy__${n}`):P}function h(n,a){n[a]||(n[a]=new d.x)}function D(n,a){n[a]&&(n[a].next(),n[a].complete(),n[a]=null)}function M(n){n instanceof f.w0&&n.unsubscribe()}function A(n,a){return function(){if(n&&n.call(this),D(this,p()),a.arrayName&&function B(n){Array.isArray(n)&&n.forEach(M)}(this[a.arrayName]),a.checkProperties)for(const x in this)a.blackList?.includes(x)||M(this[x])}}function Z(n={}){return a=>{!function e(n){return!!n[v]}(a)?function U(n,a){n.prototype.ngOnDestroy=A(n.prototype.ngOnDestroy,a)}(a,n):function F(n,a){const x=n.\u0275pipe;x.onDestroy=A(x.onDestroy,a)}(a,n),function _(n){n.prototype[m]=!0}(a)}}const I=7,S=Symbol("CheckerHasBeenSet");function r(n){const a=C.dqk.Zone;return a&&"function"==typeof a.root?.run?a.root.run(n):n()}const t=!1;function u(n,a){return x=>{const E=p(a);"string"==typeof a?function c(n,a,x){const E=n[a];if(t&&"function"!=typeof E)throw new Error(`${n.constructor.name} is using untilDestroyed but doesn't implement ${a}`);h(n,x),n[a]=function(){E.apply(this,arguments),D(this,x),n[a]=E}}(n,a,E):(t&&function T(n){const a=Object.getPrototypeOf(n);if(!(m in a))throw new Error("untilDestroyed operator cannot be used inside directives or components or providers that are not decorated with UntilDestroy decorator")}(n),h(n,E));const k=n[E];return t&&function L(n,a){n[S]||function b(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha||typeof process<"u"&&"[object process]"===Object.prototype.toString.call(process)}()||(r(()=>(0,O.D)(Promise.resolve()).pipe((0,i.z)(()=>{let x;try{x=(0,C.EEQ)(n)}catch{x=null}const E=x?.lView;if(null==E)return l.E;const k=E[I]||(E[I]=[]),N=new d.x;return k.push(function(){r(()=>{N.next(),N.complete()})}),N}),(0,i.z)(()=>Promise.resolve())).subscribe(()=>{(a.observed??a.observers.length>0)&&console.warn(function o(n){return`\n  The ${n.constructor.name} still has subscriptions that haven't been unsubscribed.\n  This may happen if the class extends another class decorated with @UntilDestroy().\n  The child class implements its own ngOnDestroy() method but doesn't call super.ngOnDestroy().\n  Let's look at the following example:\n  @UntilDestroy()\n  @Directive()\n  export abstract class BaseDirective {}\n  @Component({ template: '' })\n  export class ConcreteComponent extends BaseDirective implements OnDestroy {\n    constructor() {\n      super();\n      someObservable$.pipe(untilDestroyed(this)).subscribe();\n    }\n    ngOnDestroy(): void {\n      // Some logic here...\n    }\n  }\n  The BaseDirective.ngOnDestroy() will not be called since Angular will call ngOnDestroy()\n  on the ConcreteComponent, but not on the BaseDirective.\n  One of the solutions is to declare an empty ngOnDestroy method on the BaseDirective:\n  @UntilDestroy()\n  @Directive()\n  export abstract class BaseDirective {\n    ngOnDestroy(): void {}\n  }\n  @Component({ template: '' })\n  export class ConcreteComponent extends BaseDirective implements OnDestroy {\n    constructor() {\n      super();\n      someObservable$.pipe(untilDestroyed(this)).subscribe();\n    }\n    ngOnDestroy(): void {\n      // Some logic here...\n      super.ngOnDestroy();\n    }\n  }\n  `}(n))})),n[S]=!0)}(n,k),x.pipe((0,g.R)(k))}}}}]);
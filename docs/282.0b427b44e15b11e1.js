"use strict";(self.webpackChunkforeign_reader=self.webpackChunkforeign_reader||[]).push([[282],{6282:(I,_,s)=>{s.r(_),s.d(_,{FavoriteExamplesComponent:()=>p});var u=s(1635),d=s(177),x=s(8834),g=s(4710),C=s(2765),E=s(9417),c=s(5256),v=s(4823),M=s(9791),F=s(3716),t=s(4438),y=s(7251),h=s(5643);const f=["componentContent"];function O(i,n){if(1&i&&(t.j41(0,"span",20),t.EFF(1),t.k0s()),2&i){const e=t.XpG().$implicit;t.R7$(),t.JRh(e.level)}}function P(i,n){if(1&i&&(t.j41(0,"div",23),t.EFF(1),t.k0s()),2&i){const e=t.XpG(2).$implicit;t.R7$(),t.SpI(" ",e.transcription," ")}}function T(i,n){if(1&i&&(t.j41(0,"div",25),t.EFF(1),t.k0s()),2&i){const e=t.XpG(2).$implicit;t.R7$(),t.SpI(" Synonym: ",e.synonym," ")}}function k(i,n){if(1&i&&(t.j41(0,"div",26),t.EFF(1),t.k0s()),2&i){const e=t.XpG(2).$implicit;t.R7$(),t.SpI(" Antonym: ",e.antonym," ")}}function D(i,n){if(1&i&&(t.j41(0,"div",27),t.EFF(1),t.k0s()),2&i){const e=t.XpG(2).$implicit;t.R7$(),t.SpI(" ",e.translation," ")}}function b(i,n){if(1&i&&(t.j41(0,"span"),t.EFF(1),t.nI1(2,"date"),t.k0s()),2&i){const e=t.XpG(2).$implicit;t.R7$(),t.SpI("U: ",t.i5U(2,1,e.updateTimestamp,"dd.MM.yyyy"),";")}}function R(i,n){if(1&i&&(t.j41(0,"span"),t.EFF(1),t.nI1(2,"date"),t.k0s()),2&i){const e=t.XpG(2).$implicit;t.R7$(),t.SpI("ToDo: ",t.i5U(2,1,e.toDoTimestamp,"dd.MM.yyyy"),"")}}function j(i,n){if(1&i&&(t.j41(0,"div",22),t.DNE(1,P,2,1,"div",23),t.j41(2,"div",24),t.EFF(3),t.k0s(),t.DNE(4,T,2,1,"div",25)(5,k,2,1,"div",26)(6,D,2,1,"div",27),t.j41(7,"div",28)(8,"span"),t.EFF(9),t.nI1(10,"date"),t.k0s(),t.DNE(11,b,3,4,"span")(12,R,3,4,"span"),t.k0s()()),2&i){const e=t.XpG().$implicit;t.R7$(),t.vxM(1,e.transcription?1:-1),t.R7$(2),t.SpI(" ",e.definition," "),t.R7$(),t.vxM(4,e.synonym?4:-1),t.R7$(),t.vxM(5,e.antonym?5:-1),t.R7$(),t.vxM(6,e.translation?6:-1),t.R7$(3),t.SpI(" C: ",t.i5U(10,8,e.timestamp,"dd.MM.yyyy"),"; "),t.R7$(2),t.vxM(11,e.updateTimestamp?11:-1),t.R7$(),t.vxM(12,e.toDoTimestamp?12:-1)}}function $(i,n){if(1&i){const e=t.RV6();t.j41(0,"div",9)(1,"div",10)(2,"span",11),t.EFF(3),t.k0s(),t.j41(4,"button",12),t.bIt("click",function(){const a=t.eBV(e).$implicit,r=t.XpG();return t.Njj(r.favoriteExamplesService.removeExample(a.timestamp||0))}),t.EFF(5," Del "),t.k0s(),t.j41(6,"button",13),t.bIt("click",function(){const a=t.eBV(e).$implicit,r=t.XpG();return t.Njj(r.setToDo(a,1))}),t.EFF(7," 1 "),t.k0s(),t.j41(8,"button",14),t.bIt("click",function(){const a=t.eBV(e).$implicit,r=t.XpG();return t.Njj(r.setToDo(a,3))}),t.EFF(9," 3 "),t.k0s(),t.j41(10,"button",15),t.bIt("click",function(){const a=t.eBV(e).$implicit,r=t.XpG();return t.Njj(r.setToDo(a,7))}),t.EFF(11," 7 "),t.k0s(),t.j41(12,"button",16),t.bIt("click",function(){const a=t.eBV(e).$implicit,r=t.XpG();return t.Njj(r.setToDo(a,30))}),t.EFF(13," 30 "),t.k0s(),t.j41(14,"span",17),t.EFF(15),t.k0s(),t.j41(16,"span",18),t.EFF(17),t.k0s()(),t.j41(18,"div",19),t.bIt("click",function(){const a=t.eBV(e).$implicit;return t.Njj(a.showDetails=!0)}),t.DNE(19,O,2,1,"span",20),t.j41(20,"span",21),t.bIt("click",function(){t.eBV(e);const a=t.XpG();return t.Njj(a.clickOnWord())}),t.EFF(21),t.k0s()(),t.DNE(22,j,13,11,"div",22),t.k0s()}if(2&i){const e=n.$implicit,o=t.XpG();t.AVh("old",o.dayFromUpdate(e)>25)("recent",o.dayFromUpdate(e)<3),t.R7$(2),t.Y8G("matTooltip","dayFromCreate/Update"),t.R7$(),t.Lme(" [ ",o.dayFromCreate(e)," : ",o.dayFromUpdate(e),"] "),t.R7$(12),t.JRh(e.partOfSpeech||""),t.R7$(2),t.JRh(e.term||""),t.R7$(2),t.vxM(19,e.level?19:-1),t.R7$(2),t.SpI(" ",e.original," "),t.R7$(),t.vxM(22,e.showDetails?22:-1)}}let p=class m{constructor(n,e,o){this.favoriteExamplesService=n,this.cd=e,this.customStylesService=o,this.dayTime=864e5,this.examples=[],this.allExamplesNumber=0,this.todoExampleNumber=0,this.currentTerm=""}ngOnInit(){this.favoriteExamplesService.examples$.pipe((0,c.s)(this)).subscribe(n=>{this.allExamplesNumber=n?.length||0,this.takeCurrentExamples(n)})}ngAfterViewInit(){this.subscribeToCustomStylesService(),this.subscribeToKeyBord()}clickOnWord(){this.currentTerm=(0,F.T)()}subscribeToCustomStylesService(){this.customStylesService.customStyles$.pipe((0,c.s)(this)).subscribe(n=>{n.forEach(e=>{this.componentContent.nativeElement.style.setProperty(e.cssVariable,e.value)}),this.cd.detectChanges()})}subscribeToKeyBord(){document.onkeydown=n=>{const e=n?.key,o=this.examples[0];switch(e){case"d":this.favoriteExamplesService.removeExample(o.timestamp||0);break;case" ":o.showDetails=!o.showDetails,this.cd.detectChanges();break;case"w":this.setToDo(o,7);break;case"q":this.setToDo(o,30);break;case"s":this.setToDo(o,3);break;case"a":this.setToDo(o,1)}}}trackBy(n,e){return e.timestamp}setToDo(n,e){n.toDoTimestamp=Date.now()+e*this.dayTime,this.favoriteExamplesService.update(n)}dayFromUpdate(n){return n.timestamp?Math.round((Date.now()-(n.updateTimestamp||n.timestamp))/this.dayTime):0}dayFromCreate(n){return n.timestamp?Math.round((Date.now()-n.timestamp)/this.dayTime):0}exampleIsToDo(n){return!n.toDoTimestamp||n.toDoTimestamp<Date.now()+432e5}takeCurrentExamples(n){const e=n.filter(o=>this.exampleIsToDo(o));this.todoExampleNumber=e.length,this.examples=e.sort((o,a)=>this.dayFromUpdate(a)-this.dayFromUpdate(o)).slice(0,20)}static{this.\u0275fac=function(e){return new(e||m)(t.rXU(y.f),t.rXU(t.gRc),t.rXU(h.V))}}static{this.\u0275cmp=t.VBU({type:m,selectors:[["app-favorite-examples"]],viewQuery:function(e,o){if(1&e&&t.GBs(f,5),2&e){let a;t.mGM(a=t.lsd())&&(o.componentContent=a.first)}},standalone:!0,features:[t.aNF],decls:12,vars:3,consts:[["componentContent",""],[1,"component-content",3,"keydown.space","keyup.space"],[1,"list"],[1,"header"],["mat-button","","color","primary","routerLink","/"],[1,"example-number"],[1,"example",3,"old","recent"],[1,"dictionary"],[3,"term"],[1,"example"],[1,"example-header"],[1,"day-from-update",3,"matTooltip"],["mat-button","","color","warn","matTooltip","d",3,"click"],["mat-button","","color","primary","matTooltip","a",3,"click"],["mat-button","","color","primary","matTooltip","s",3,"click"],["mat-button","","color","primary","matTooltip","w",3,"click"],["mat-button","","color","primary","matTooltip","q",3,"click"],[1,"pos"],[1,"term"],[1,"original",3,"click"],[1,"level"],[1,"example-text",3,"click"],[1,"description"],[1,"transcription"],[1,"definition"],[1,"synonym"],[1,"antonym"],[1,"translation"],[1,"dates"]],template:function(e,o){if(1&e){const a=t.RV6();t.j41(0,"div",1,0),t.bIt("keydown.space",function(l){return t.eBV(a),l.preventDefault(),t.Njj(l.stopPropagation())})("keyup.space",function(l){return t.eBV(a),l.preventDefault(),t.Njj(l.stopPropagation())}),t.j41(2,"div",2)(3,"div",3)(4,"button",4),t.EFF(5,"Go Home"),t.k0s(),t.j41(6,"span",5),t.EFF(7),t.k0s()(),t.Z7z(8,$,23,12,"div",6,o.trackBy,!0),t.k0s(),t.j41(10,"div",7),t.nrm(11,"app-dictionary-widget",8),t.k0s()()}2&e&&(t.R7$(7),t.Lme(" ",o.todoExampleNumber," / ",o.allExamplesNumber," "),t.R7$(),t.Dyx(o.examples),t.R7$(3),t.Y8G("term",o.currentTerm))},dependencies:[d.MD,d.vh,x.Hl,x.$z,g.Wk,C.g7,E.YN,v.uc,v.oV,M.G],styles:[".component-content[_ngcontent-%COMP%]{display:flex;gap:var(--padding-small);justify-content:end;padding:0;width:100vw;max-width:100vw;height:calc(100vh - 4px);max-height:calc(100vh - 4px);overflow:auto;box-sizing:border-box;background:var(--background-color-main);background-image:var(--book-background-image);background-repeat:repeat;font-family:var(--font-family);color:var(--font-color-main)}.list[_ngcontent-%COMP%]{padding:var(--padding-main);max-width:var(--max-book-width);width:var(--max-book-width);max-height:calc(100vh - 10px);overflow:hidden;box-sizing:border-box}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]{padding:var(--padding-small);outline:1px solid gray;margin:var(--padding-small)}.list[_ngcontent-%COMP%]   .example.old[_ngcontent-%COMP%]{outline:1px solid red}.list[_ngcontent-%COMP%]   .example.recent[_ngcontent-%COMP%]{outline:1px solid green}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .example-header[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:var(--padding-main)}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .example-header[_ngcontent-%COMP%]   .pos[_ngcontent-%COMP%]{color:var(--font-color-translation)}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .example-header[_ngcontent-%COMP%]   .term[_ngcontent-%COMP%]{font-weight:700}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%]{cursor:pointer;margin-top:var(--padding-small);font-size:var(--font-size-original-text)}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .original[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%]{color:green;font-weight:700;background-color:wheat;padding:2px}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:var(--font-size-translation-text);padding-left:var(--padding-main)}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin:var(--padding-small) 0}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .definition[_ngcontent-%COMP%], .list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .synonym[_ngcontent-%COMP%]{color:var(--font-color-translation)}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .antonym[_ngcontent-%COMP%]{color:red}.list[_ngcontent-%COMP%]   .example[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .dates[_ngcontent-%COMP%]{display:flex;gap:var(--padding-small);font-size:12px}.dictionary[_ngcontent-%COMP%]{overflow:auto;width:var(--dictionary-width)}@media (max-width: 1000px){.dictionary[_ngcontent-%COMP%]{display:none}}"]})}};p=(0,u.Cg)([(0,c.d)()],p)}}]);
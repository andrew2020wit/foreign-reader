"use strict";(self.webpackChunkforeign_reader=self.webpackChunkforeign_reader||[]).push([[816],{1816:(x,u,t)=>{t.r(u),t.d(u,{CreateExampleComponent:()=>s});var i,f=t(7582),_=t(6814),g=t(6223),l=t(9157),c=t(2032),E=t(2296),C=t(617),M=t(1791),m=t(2058),v=t(5986),o=t(5933),e=t(5879),n=t(3631);let s=((i=class{constructor(p,a,d,r){this.cdr=p,this.favoriteExamplesService=a,this.activatedRoute=d,this.router=r,this.original="",this.definition="",this.translation="",this.transcription="",this.partOfSpeech="",this.term="",this.synonym="",this.goToExamples=!0}ngOnInit(){const p=this.activatedRoute.snapshot.queryParams.add;p&&(this.original=p,this.cdr.detectChanges())}addExample(){this.original&&(this.favoriteExamplesService.addExample({definition:this.definition,original:this.original,translation:this.translation,synonym:this.synonym,antonym:"",level:"",partOfSpeech:this.partOfSpeech,term:this.term,transcription:this.transcription}),this.goToExamples&&setTimeout(()=>{this.router.navigate(["/",o.X.FavoriteExamples]).then()},300))}}).\u0275fac=function(p){return new(p||i)(e.Y36(e.sBO),e.Y36(n.j),e.Y36(m.gz),e.Y36(m.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-create-example"]],standalone:!0,features:[e.jDz],decls:46,vars:11,consts:[[1,"component-content"],[1,"main"],[1,"add-new"],["mat-button","","color","primary",3,"routerLink"],["mat-button","","color","primary",3,"disabled","click"],["color","primary",1,"hide-marked-headers-checkbox",3,"ngModel","ngModelChange"],[1,"text-area"],["matInput","","required","",3,"ngModel","ngModelChange"],[1,"definition","add-new"],["matInput","",3,"ngModel","ngModelChange"],[1,"translation","add-new"],[1,"transcription","add-new"],[1,"term","add-new"],[1,"pos","add-new"],[1,"synonym","add-new"]],template:function(p,a){1&p&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),e._uU(4," Home "),e.qZA(),e.TgZ(5,"button",3),e._uU(6," Examples "),e.qZA(),e.TgZ(7,"button",4),e.NdJ("click",function(){return a.addExample()}),e._uU(8," Add "),e.qZA(),e.TgZ(9,"mat-checkbox",5),e.NdJ("ngModelChange",function(r){return a.goToExamples=r}),e._uU(10,"goToExamples "),e.qZA()(),e.TgZ(11,"div",2)(12,"mat-form-field",6)(13,"mat-label"),e._uU(14," Text"),e.qZA(),e.TgZ(15,"textarea",7),e.NdJ("ngModelChange",function(r){return a.original=r}),e.qZA()()(),e.TgZ(16,"div",8)(17,"mat-form-field",6)(18,"mat-label"),e._uU(19," Definition"),e.qZA(),e.TgZ(20,"textarea",9),e.NdJ("ngModelChange",function(r){return a.definition=r}),e.qZA()()(),e.TgZ(21,"div",10)(22,"mat-form-field",6)(23,"mat-label"),e._uU(24," Translation"),e.qZA(),e.TgZ(25,"textarea",9),e.NdJ("ngModelChange",function(r){return a.translation=r}),e.qZA()()(),e.TgZ(26,"div",11)(27,"mat-form-field",6)(28,"mat-label"),e._uU(29," Transcription"),e.qZA(),e.TgZ(30,"input",9),e.NdJ("ngModelChange",function(r){return a.transcription=r}),e.qZA()()(),e.TgZ(31,"div",12)(32,"mat-form-field",6)(33,"mat-label"),e._uU(34," Term"),e.qZA(),e.TgZ(35,"input",9),e.NdJ("ngModelChange",function(r){return a.term=r}),e.qZA()()(),e.TgZ(36,"div",13)(37,"mat-form-field",6)(38,"mat-label"),e._uU(39," Part Of Speech"),e.qZA(),e.TgZ(40,"input",9),e.NdJ("ngModelChange",function(r){return a.partOfSpeech=r}),e.qZA()()(),e.TgZ(41,"div",14)(42,"mat-form-field",6)(43,"mat-label"),e._uU(44," Synonym"),e.qZA(),e.TgZ(45,"input",9),e.NdJ("ngModelChange",function(r){return a.synonym=r}),e.qZA()()()()()),2&p&&(e.xp6(3),e.Q6J("routerLink","/"),e.xp6(2),e.Q6J("routerLink","/favorite-examples"),e.xp6(2),e.Q6J("disabled",!a.original),e.xp6(2),e.Q6J("ngModel",a.goToExamples),e.xp6(6),e.Q6J("ngModel",a.original),e.xp6(5),e.Q6J("ngModel",a.definition),e.xp6(5),e.Q6J("ngModel",a.translation),e.xp6(5),e.Q6J("ngModel",a.transcription),e.xp6(5),e.Q6J("ngModel",a.term),e.xp6(5),e.Q6J("ngModel",a.partOfSpeech),e.xp6(5),e.Q6J("ngModel",a.synonym))},dependencies:[_.ez,g.u5,g.Fj,g.JJ,g.Q7,g.On,l.lN,l.KE,l.hX,c.c,c.Nt,E.ot,E.lW,C.Ps,m.rH,v.p9,v.oG],styles:[".component-content[_ngcontent-%COMP%]{display:block;padding:0;width:100vw;max-width:100vw;height:calc(100vh - 4px);max-height:calc(100vh - 4px);box-sizing:border-box;background:var(--background-color-main);background-image:var(--book-background-image);background-repeat:repeat;font-family:var(--font-family);color:var(--font-color-main)}.main[_ngcontent-%COMP%]{max-width:var(--max-book-width);padding:var(--padding-main);margin:auto;overflow:auto}.main[_ngcontent-%COMP%]   .add-new[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--padding-small)}.main[_ngcontent-%COMP%]   .add-new[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]{width:100%}.main[_ngcontent-%COMP%]   .phrases-list[_ngcontent-%COMP%]   .phrases-item[_ngcontent-%COMP%]   .phrases-item-tools[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--padding-small)}.main[_ngcontent-%COMP%]   .phrases-list[_ngcontent-%COMP%]   .phrases-item[_ngcontent-%COMP%]   .phrase-text[_ngcontent-%COMP%]{font-size:var(--font-size-original-text)}.dictionary[_ngcontent-%COMP%]{overflow:auto;width:var(--dictionary-width)}@media (max-width: 1000px){.dictionary[_ngcontent-%COMP%]{display:none}}"],changeDetection:0}),i);s=(0,f.gn)([(0,M.c)()],s)},3631:(x,u,t)=>{t.d(u,{j:()=>M});var f=t(5619),_=t(8180),g=t(2096),l=t(7772),c=t(5879),E=t(6280),C=t(957);let M=(()=>{class m{constructor(o,e){this.dbService=o,this.infoService=e,this.examples$=new f.X([]),this.sort=(n,i)=>(n.toDoTimestamp||0)-(i.toDoTimestamp||0),this.dbService.getAll(l.L.FavoriteExamples).pipe((0,_.q)(1)).subscribe(n=>{n.forEach(i=>i.showDetails=!1),n?(n.sort(this.sort),this.examples$.next(n)):this.examples$.next([])})}deleteAll(){return this.dbService.clear(l.L.FavoriteExamples)}import(o){const e=JSON.parse(o)?.favoriteExamples;if(!e?.length)return console.error("!examples?.length"),this.infoService.error("!examples?.length"),(0,g.of)([]);const n=this.examples$.value.map(s=>s.timestamp);function i(s){return n.includes(s)?i(s+1):s}return e.forEach(s=>{if(!s.timestamp){const h=i(Date.now());n.push(h),s.timestamp=h}}),this.dbService.bulkAdd(l.L.FavoriteExamples,e).pipe((0,_.q)(1))}addExample(o){const e=Date.now(),n={...o,timestamp:e,showDetails:!1};this.dbService.add(l.L.FavoriteExamples,n).pipe((0,_.q)(1)).subscribe();const i=[n,...this.examples$.value];this.examples$.next(i),this.infoService.show("added: "+o.original)}update(o){if(!o?.timestamp||!o.toDoTimestamp)return;const e=this.examples$.value,n=e.find(i=>i.timestamp===o.timestamp);n&&(n.toDoTimestamp=o.toDoTimestamp,n.updateTimestamp=Date.now(),this.dbService.update(l.L.FavoriteExamples,n).pipe((0,_.q)(1)).subscribe(),e.sort(this.sort),this.examples$.next(e))}removeExample(o){if(!o)return;this.dbService.delete(l.L.FavoriteExamples,o).pipe((0,_.q)(1)).subscribe();const e=this.examples$.value.filter(n=>n.timestamp!==o);this.examples$.next(e)}}return m.\u0275fac=function(o){return new(o||m)(c.LFG(E.ys),c.LFG(C.C))},m.\u0275prov=c.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()}}]);
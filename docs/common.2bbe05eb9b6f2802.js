"use strict";(self.webpackChunkforeign_reader=self.webpackChunkforeign_reader||[]).push([[592],{8805:(u,n,t)=>{t.d(n,{N:()=>l});var i=t(5619);const r=[{label:"Font size original text (26px)",cssVariable:"--font-size-original-text"},{label:"Font size translation text (24px)",cssVariable:"--font-size-translation-text"},{label:"dictionary-main-font-size",cssVariable:"--dictionary-main-font-size"},{label:"dictionary-header-font-size",cssVariable:"--dictionary-header-font-size"},{label:"Main background color",cssVariable:"--background-color-main"},{label:'background-image, like: url(https://andrew2020wit.github.io/foreign-reader/assets/background/fancy-deboss.png) or "none"',cssVariable:"--book-background-image"},{label:"Accent background color (header)",cssVariable:"--background-color-accent"},{label:"Main font color (original text)",cssVariable:"--font-color-main"},{label:"Translation font color",cssVariable:"--font-color-translation"},{label:"Accent font color (header)",cssVariable:"--font-color-accent"},{label:"Color primary",cssVariable:"--color-primary"},{label:"Color accent",cssVariable:"--color-accent"},{label:"Color warn",cssVariable:"--color-warn"},{label:"Dictionary width",cssVariable:"--dictionary-width"},{label:"--max-book-width",cssVariable:"--max-book-width"},{label:'Font family ("Segoe UI", roboto, verdana, sans-serif)',cssVariable:"--font-family"}];var c=t(5879),b=t(2969);let l=(()=>{class a{constructor(e){this.localStorageService=e,this.customStyles$=new i.X([]);const o=[];r.forEach(s=>{o.push({...s,value:this.localStorageService.getString(s.cssVariable)})}),this.customStyles$.next(o)}setStyle(e,o){this.localStorageService.setString(e,o);const s=this.customStyles$.value,d=s.find(S=>S.cssVariable===e);d&&(d.value=o,this.customStyles$.next([...s]))}resetAllStyles(){const e=[];r.forEach(o=>{e.push({...o,value:""}),this.localStorageService.setString(o.cssVariable,"")}),this.customStyles$.next(e)}}return a.\u0275fac=function(e){return new(e||a)(c.LFG(b.n))},a.\u0275prov=c.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},8863:(u,n,t)=>{function i(r,c){const l=document.createElement("a"),a=new Blob([r],{type:"text/plain"});l.href=URL.createObjectURL(a),l.download=c,l.click(),l.remove()}t.d(n,{l:()=>i})}}]);
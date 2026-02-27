import{T as a,ha as s}from"./chunk-AQQ2OTRN.js";var e="%%pattern%%";var n=`
[Et] https://www.etymonline.com/search?type=all&q=${e}
[Ld] https://www.ldoceonline.com/dictionary/${e}
[Cm] https://dictionary.cambridge.org/dictionary/english/${e}
[MW] https://www.merriam-webster.com/dictionary/${e}
[Ox] https://www.oxfordlearnersdictionaries.com/definition/english/${e}
[Co] https://www.collinsdictionary.com/dictionary/english/${e}
[W] https://en.wiktionary.org/wiki/${e}
[G] https://translate.google.com/details?sl=en&tl=ru&text=${e}&op=translate
`;var f=(()=>{let i=class i{constructor(){this.items=s([]),this.localStorageKey="foreign-reader-external-dictionaries";let o=this.getLocalStorageStringValue()||n;this.items.set(this.parse(o))}setItemsFromString(o){localStorage.setItem(this.localStorageKey,o),this.items.set(this.parse(o))}getLocalStorageStringValue(){return localStorage.getItem(this.localStorageKey)||""}parse(o){return o.split(`
`).map(t=>t.trim()).filter(Boolean).map(t=>t.split(" ").map(l=>l.trim())).map(t=>t.slice(0,2)).filter(t=>t.length===2).map(t=>({label:t[0],link:t[1]}))}};i.\u0275fac=function(t){return new(t||i)},i.\u0275prov=a({token:i,factory:i.\u0275fac,providedIn:"root"});let r=i;return r})();export{e as a,n as b,f as c};

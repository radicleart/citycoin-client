import{O as e}from"./index-81fcc74e.js";const r=()=>{const s=e("__svelte__");return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:s.navigating.subscribe}},session:s.session,updated:s.updated}},n={subscribe(s){return r().page.subscribe(s)}};export{n as p};

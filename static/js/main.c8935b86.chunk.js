(this["webpackJsonpnf-to-csv"]=this["webpackJsonpnf-to-csv"]||[]).push([[0],{12:function(e,t,n){},29:function(e,t,n){e.exports=n(58)},52:function(e,t){},53:function(e,t){},54:function(e,t){},55:function(e,t){},56:function(e,t){},58:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(25),c=n.n(o),i=(n(12),n(2)),l=n.n(i),s=n(28),u=n(10),f=n(9),m=n(27),p=n(6),d=n.n(p);n(57);function h(){return(h=Object(f.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.getDocument({data:t}).promise;case 2:return n=e.sent,r=Array.from({length:n.numPages},function(){var e=Object(f.a)(l.a.mark((function e(t,r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getPage(r+1);case 2:return e.next=4,e.sent.getTextContent();case 4:return e.abrupt("return",e.sent.items.map((function(e){return e.str})).join(""));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=6,Promise.all(r);case 6:return e.abrupt("return",e.sent.join(""));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)([]),i=Object(u.a)(c,2),l=i[0],f=i[1];function p(){l.sort((function(e,t){var n=e.match(/([0-9]*?)\/([0-9]*)/),r=t.match(/([0-9]*?)\/([0-9]*)/);return(n=1e3*n[1]+n[2])>(r=1e3*r[1]+r[2])?1:r>n?-1:0}));var e='VENCTO,CLIENTE,NF,"VALOR"\n';return l.forEach((function(t){e+=t.vencimento+","+t.cliente+","+t.NF+","+t.valor+"\n"})),e}return a.a.createElement("div",{className:"App",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},a.a.createElement("h1",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},"Converter notas para excel"),a.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"80%"}},a.a.createElement(m.a,{onDrop:function(e){var t=[];e.forEach((function(e){if(!n.includes(e.name)&&"application/pdf"===e.type)try{var r=new FileReader;r.onabort=function(){return console.log("file reading was aborted")},r.onerror=function(){return console.log("file reading has failed")},r.onload=function(){(function(e){return h.apply(this,arguments)})(r.result).then((function(e){try{var t=e.match(/RAZ\xc3O SOCIAL([\s\S]*?)CNPJ/);if(t){t=t[1];for(var n,r=e.match(/N\xba ([\s\S]*?)S/)[1],a=/Num\.([0-9]*?)Venc\.([0-9]{2}\/[0-9]{2}\/[0-9]{4})ValorR\$[\s]*([0-9\.]*?,[0-9]{2})/;n=a.exec(e);){var o={NF:parseInt(r.replace(".",""))+"/"+parseInt(n[1]),vencimento:n[2].trim(),valor:'"'+n[3].replace(".","")+'"',cliente:t};e=e.replace(n[0],""),l.push(o)}}else console.log(e)}catch(c){console.log(c)}}))},r.readAsArrayBuffer(e),t.push(e.name)}catch(a){console.log(a)}})),o([].concat(Object(s.a)(n),t))}},(function(e){var t=e.getRootProps,r=e.getInputProps;return a.a.createElement("div",t({className:"dropzone"}),a.a.createElement("input",r()),a.a.createElement("span",{role:"img"},"\ud83d\udcc2"),a.a.createElement("p",null,"Arraste e solte os arquivos aqui ou clique para adicion\xe1-los"),a.a.createElement("div",null,a.a.createElement("strong",null,"Arquivos: "),a.a.createElement("ul",null,n.map((function(e){return a.a.createElement("li",{key:e},e)})))))}))),a.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",width:"100%"}},a.a.createElement("button",{style:{justifyContent:"center",alignItems:"center",margin:10},disabled:0===n.length,onClick:function(){var e=document.createElement("a"),t=new Blob([p()],{type:"text/plain;charset=utf-8"});e.href=URL.createObjectURL(t),e.download="tabela_"+function(e){var t=new Date(e),n=""+(t.getMonth()+1),r=""+t.getDate(),a=t.getFullYear();return n.length<2&&(n="0"+n),r.length<2&&(r="0"+r),[a,n,r].join("_")}(Date.now())+".csv",document.body.appendChild(e),e.click()}},"Gerar tabela"),a.a.createElement("button",{style:{justifyContent:"center",alignItems:"center",margin:10},disabled:0===n.length,onClick:function(){f([]),o([])}},"Limpar sele\xe7\xe3o")))}d.a.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(d.a.version,"/pdf.worker.js");Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.c8935b86.chunk.js.map
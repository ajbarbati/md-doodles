_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{Fe0P:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/litters",function(){return e("rfek")}])},bYjO:function(t,n,e){t.exports=function(){function t(){return(t=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t}).apply(this,arguments)}function n(t,n){if(t){if("string"===typeof t)return e(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?e(t,n):void 0}}function e(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}function i(t){var e=0;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=n(t)))return function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(e=t[Symbol.iterator]()).next.bind(e)}var r="image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";function o(t){var n=t.split("-"),e=n[1],i=n[2],o=n[3];if(!e||!i||!o)throw new Error("Malformed asset _ref '"+t+"'. Expected an id like \""+r+'".');var a=i.split("x"),h=+a[0],s=+a[1];if(!isFinite(h)||!isFinite(s))throw new Error("Malformed asset _ref '"+t+"'. Expected an id like \""+r+'".');return{id:e,width:h,height:s,format:o}}var a=function(t){return!!t&&"string"===typeof t._ref},h=function(t){return!!t&&"string"===typeof t._id},s=function(t){var n=t;return!(!n||!n.asset)&&"string"===typeof n.asset.url};function u(t){if(!t)return null;var n;if("string"===typeof t&&f(t))n={asset:{_ref:l(t)}};else if("string"===typeof t)n={asset:{_ref:t}};else if(a(t))n={asset:t};else if(h(t))n={asset:{_ref:t._id||""}};else if(s(t))n={asset:{_ref:l(t.asset.url)}};else{if("object"!==typeof t.asset)return null;n=t}var e=t;return e.crop&&(n.crop=e.crop),e.hotspot&&(n.hotspot=e.hotspot),p(n)}function f(t){return/^https?:\/\//.test(""+t)}function l(t){return("image-"+t.split("/").slice(-1)[0]).replace(/\.([a-z]+)$/,"-$1")}function p(n){if(n.crop&&n.hotspot)return n;var e=t({},n);return e.crop||(e.crop={left:0,top:0,bottom:0,right:0}),e.hotspot||(e.hotspot={x:.5,y:.5,height:1,width:1}),e}var c=[["width","w"],["height","h"],["format","fm"],["download","dl"],["blur","blur"],["sharpen","sharp"],["invert","invert"],["orientation","or"],["minHeight","min-h"],["maxHeight","max-h"],["minWidth","min-w"],["maxWidth","max-w"],["quality","q"],["fit","fit"],["crop","crop"],["saturation","sat"],["auto","auto"],["dpr","dpr"]];function d(n){var e=t({},n||{}),i=e.source;delete e.source;var r=u(i);if(!r)return null;var a=o(r.asset._ref||r.asset._id||""),h=Math.round(r.crop.left*a.width),s=Math.round(r.crop.top*a.height),f={left:h,top:s,width:Math.round(a.width-r.crop.right*a.width-h),height:Math.round(a.height-r.crop.bottom*a.height-s)},l=r.hotspot.height*a.height/2,p=r.hotspot.width*a.width/2,c=r.hotspot.x*a.width,d=r.hotspot.y*a.height,g={left:c-p,top:d-l,right:c+p,bottom:d+l};return e.rect||e.focalPoint||e.ignoreImageParams||e.crop||(e=t(t({},e),w({crop:f,hotspot:g},e))),m(t(t({},e),{},{asset:a}))}function m(t){var n=t.baseUrl||"https://cdn.sanity.io",e=t.asset.id+"-"+t.asset.width+"x"+t.asset.height+"."+t.asset.format,i=n+"/images/"+t.projectId+"/"+t.dataset+"/"+e,r=[];if(t.rect){var o=t.rect,a=o.left,h=o.top,s=o.width,u=o.height;(0!==a||0!==h||u!==t.asset.height||s!==t.asset.width)&&r.push("rect="+a+","+h+","+s+","+u)}t.bg&&r.push("bg="+t.bg),t.focalPoint&&(r.push("fp-x="+t.focalPoint.x),r.push("fp-y="+t.focalPoint.y));var f=[t.flipHorizontal&&"h",t.flipVertical&&"v"].filter(Boolean).join("");return f&&r.push("flip="+f),c.forEach((function(n){var e=n[0],i=n[1];"undefined"!==typeof t[e]?r.push(i+"="+encodeURIComponent(t[e])):"undefined"!==typeof t[i]&&r.push(i+"="+encodeURIComponent(t[i]))})),0===r.length?i:i+"?"+r.join("&")}function w(t,n){var e,i=n.width,r=n.height;if(!i||!r)return{width:i,height:r,rect:t.crop};var o=t.crop,a=t.hotspot,h=i/r;if(o.width/o.height>h){var s=o.height,u=s*h,f=o.top,l=(a.right-a.left)/2+a.left-u/2;l<o.left?l=o.left:l+u>o.left+o.width&&(l=o.left+o.width-u),e={left:Math.round(l),top:Math.round(f),width:Math.round(u),height:Math.round(s)}}else{var p=o.width,c=p/h,d=o.left,m=(a.bottom-a.top)/2+a.top-c/2;m<o.top?m=o.top:m+c>o.top+o.height&&(m=o.top+o.height-c),e={left:Math.max(0,Math.floor(d)),top:Math.max(0,Math.floor(m)),width:Math.round(p),height:Math.round(c)}}return{width:i,height:r,rect:e}}var g=["clip","crop","fill","fillmax","max","scale","min"],v=["top","bottom","left","right","center","focalpoint","entropy"],b=["format"];function y(t){return!!t&&"object"===typeof t.clientConfig}function O(t){for(var n,e=i(c);!(n=e()).done;){var r=n.value,o=r[0],a=r[1];if(t===o||t===a)return o}return t}function x(t){var n=t;if(y(n)){var e=n.clientConfig,i=e.apiHost,r=e.projectId,o=e.dataset;return new I(null,{baseUrl:(i||"https://api.sanity.io").replace(/^https:\/\/api\./,"https://cdn."),projectId:r,dataset:o})}return new I(null,t)}var I=function(){function n(n,e){this.options=t(n?t({},n.options||{}):{},e||{})}var e=n.prototype;return e.withOptions=function(e){var i=e.baseUrl||this.options.baseUrl,r={baseUrl:i};for(var o in e)e.hasOwnProperty(o)&&(r[O(o)]=e[o]);return new n(this,t({baseUrl:i},r))},e.image=function(t){return this.withOptions({source:t})},e.dataset=function(t){return this.withOptions({dataset:t})},e.projectId=function(t){return this.withOptions({projectId:t})},e.bg=function(t){return this.withOptions({bg:t})},e.dpr=function(t){return this.withOptions({dpr:t})},e.width=function(t){return this.withOptions({width:t})},e.height=function(t){return this.withOptions({height:t})},e.focalPoint=function(t,n){return this.withOptions({focalPoint:{x:t,y:n}})},e.maxWidth=function(t){return this.withOptions({maxWidth:t})},e.minWidth=function(t){return this.withOptions({minWidth:t})},e.maxHeight=function(t){return this.withOptions({maxHeight:t})},e.minHeight=function(t){return this.withOptions({minHeight:t})},e.size=function(t,n){return this.withOptions({width:t,height:n})},e.blur=function(t){return this.withOptions({blur:t})},e.sharpen=function(t){return this.withOptions({sharpen:t})},e.rect=function(t,n,e,i){return this.withOptions({rect:{left:t,top:n,width:e,height:i}})},e.format=function(t){return this.withOptions({format:t})},e.invert=function(t){return this.withOptions({invert:t})},e.orientation=function(t){return this.withOptions({orientation:t})},e.quality=function(t){return this.withOptions({quality:t})},e.forceDownload=function(t){return this.withOptions({download:t})},e.flipHorizontal=function(){return this.withOptions({flipHorizontal:!0})},e.flipVertical=function(){return this.withOptions({flipVertical:!0})},e.ignoreImageParams=function(){return this.withOptions({ignoreImageParams:!0})},e.fit=function(t){if(-1===g.indexOf(t))throw new Error('Invalid fit mode "'+t+'"');return this.withOptions({fit:t})},e.crop=function(t){if(-1===v.indexOf(t))throw new Error('Invalid crop mode "'+t+'"');return this.withOptions({crop:t})},e.saturation=function(t){return this.withOptions({saturation:t})},e.auto=function(t){if(-1===b.indexOf(t))throw new Error('Invalid auto mode "'+t+'"');return this.withOptions({auto:t})},e.url=function(){return d(this.options)},e.toString=function(){return this.url()},n}();return x}()},rfek:function(t,n,e){"use strict";e.r(n);var i=e("q1tI"),r=e.n(i),o=e("ZHh6"),a=e("zCU7"),h=e("bYjO"),s=e.n(h)()(a.a);function u(t){return s.image(t)}var f=r.a.createElement;function l(){var t=Object(i.useState)(null),n=t[0],e=t[1];return Object(i.useEffect)((function(){a.a.fetch('*[_type == "litter"] {\n            title,\n            "mom": mom->title,\n            "momImage": mom->image,\n            "momBreed": mom->breedSelect,\n            "dad": dad->title,\n            "dadImage": dad->image,\n            "dadBreed": dad->breedSelect,\n            featured,\n            dob,\n            dateA,\n            image{\n              asset->{\n                _id,\n                url\n              }\n            },\n            body{\n              en[0]{\n                children[0]{\n                  text\n                } \n              }\n            },\n        }').then((function(t){return e(t)})).catch(console.error)}),[]),console.log(e),f("div",{className:"litters"},f("h2",null,"Featured Litters"),f("div",{className:"litterGrid"},n&&n.map((function(t,n){return f("div",{className:"litterWrap",key:n},f("div",{className:"Mother"},f("img",{src:u(t.momImage).width(300).url(),alt:"Mother of Litter"}),f("p",null,"Mother: ",t.mom),f("h4",{className:"breed"},t.momBreed)),f("div",{className:"litterInfo"},f("img",{width:"100px",src:t.image.asset.url,alt:"A litter of puppies"}),f("h2",null,t.title),f("h4",null,"Date of Birth: ",t.dob),f("h4",null,"Date Available: ",t.dateA),f("p",null,t.body.en.children.text)),f("div",{className:"Father"},f("img",{src:u(t.dadImage).width(300).url(),alt:"Mother of Litter"}),f("p",null,"Father: ",t.dad),f("h4",{className:"breed"},t.dadBreed)))}))))}var p=e("aIN1"),c=r.a.createElement;n.default=function(){return c("div",null,c(o.a,null),c(l,null),c(p.a,null))}}},[["Fe0P",0,2,1,3]]]);
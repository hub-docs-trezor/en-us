!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},r=(new e.Error).stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="bfc6619e-49e0-4c96-92d6-6cfea8898aab",e._sentryDebugIdIdentifier="sentry-dbid-bfc6619e-49e0-4c96-92d6-6cfea8898aab")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9902],{60367:function(e,r,o){"use strict";var t;Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return n}});let n=((t=o(51237))&&t.__esModule?t:{default:t}).default},51237:function(e,r){"use strict";function o(e,r){return{handler:e,config:r}}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return t}}),o.withOptions=function(e,r=()=>({})){let o=function(o){return{__options:o,handler:e(o),config:r(o)}};return o.__isOptionsFunction=!0,o.__pluginFunction=e,o.__configFunction=r,o};let t=o},50806:function(e,r,o){let t=o(60367);e.exports=(t.__esModule?t:{default:t}).default},87898:function(e,r,o){"use strict";o.d(r,{q:function(){return W}});var t=/^\[(.+)\]$/;function n(e,r){var o=e;return r.split("-").forEach(function(e){o.nextPart.has(e)||o.nextPart.set(e,{nextPart:new Map,validators:[]}),o=o.nextPart.get(e)}),o}var i=/\s+/;function a(){for(var e,r,o=0,t="";o<arguments.length;)(e=arguments[o++])&&(r=function e(r){if("string"==typeof r)return r;for(var o,t="",n=0;n<r.length;n++)r[n]&&(o=e(r[n]))&&(t&&(t+=" "),t+=o);return t}(e))&&(t&&(t+=" "),t+=r);return t}function l(){for(var e,r,o,l=arguments.length,s=Array(l),c=0;c<l;c++)s[c]=arguments[c];var d=function(i){var a=s[0];return r=(e=function(e){var r,o,i,a,l,s,c,d,u,p,f;return{cache:function(e){if(e<1)return{get:function(){},set:function(){}};var r=0,o=new Map,t=new Map;function n(n,i){o.set(n,i),++r>e&&(r=0,t=o,o=new Map)}return{get:function(e){var r=o.get(e);return void 0!==r?r:void 0!==(r=t.get(e))?(n(e,r),r):void 0},set:function(e,r){o.has(e)?o.set(e,r):n(e,r)}}}(e.cacheSize),splitModifiers:(o=1===(r=e.separator||":").length,i=r[0],a=r.length,function(e){for(var t,n=[],l=0,s=0,c=0;c<e.length;c++){var d=e[c];if(0===l){if(d===i&&(o||e.slice(c,c+a)===r)){n.push(e.slice(s,c)),s=c+a;continue}if("/"===d){t=c;continue}}"["===d?l++:"]"===d&&l--}var u=0===n.length?e:e.substring(s),p=u.startsWith("!"),f=p?u.substring(1):u;return{modifiers:n,hasImportantModifier:p,baseClassName:f,maybePostfixModifierPosition:t&&t>s?t-s:void 0}}),...(d=e.theme,u=e.prefix,p={nextPart:new Map,validators:[]},(f=Object.entries(e.classGroups),u?f.map(function(e){return[e[0],e[1].map(function(e){return"string"==typeof e?u+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(function(e){return[u+e[0],e[1]]})):e})]}):f).forEach(function(e){var r=e[0];(function e(r,o,t,i){r.forEach(function(r){if("string"==typeof r){(""===r?o:n(o,r)).classGroupId=t;return}if("function"==typeof r){if(r.isThemeGetter){e(r(i),o,t,i);return}o.validators.push({validator:r,classGroupId:t});return}Object.entries(r).forEach(function(r){var a=r[0];e(r[1],n(o,a),t,i)})})})(e[1],p,r,d)}),l=e.conflictingClassGroups,c=void 0===(s=e.conflictingClassGroupModifiers)?{}:s,{getClassGroupId:function(e){var r=e.split("-");return""===r[0]&&1!==r.length&&r.shift(),function e(r,o){if(0===r.length)return o.classGroupId;var t=r[0],n=o.nextPart.get(t),i=n?e(r.slice(1),n):void 0;if(i)return i;if(0!==o.validators.length){var a=r.join("-");return o.validators.find(function(e){return(0,e.validator)(a)})?.classGroupId}}(r,p)||function(e){if(t.test(e)){var r=t.exec(e)[1],o=r?.substring(0,r.indexOf(":"));if(o)return"arbitrary.."+o}}(e)},getConflictingClassGroupIds:function(e,r){var o=l[e]||[];return r&&c[e]?[].concat(o,c[e]):o}})}}(s.slice(1).reduce(function(e,r){return r(e)},a()))).cache.get,o=e.cache.set,d=u,u(i)};function u(t){var n,a,l,s,c,d=r(t);if(d)return d;var u=(a=(n=e).splitModifiers,l=n.getClassGroupId,s=n.getConflictingClassGroupIds,c=new Set,t.trim().split(i).map(function(e){var r=a(e),o=r.modifiers,t=r.hasImportantModifier,n=r.baseClassName,i=r.maybePostfixModifierPosition,s=l(i?n.substring(0,i):n),c=!!i;if(!s){if(!i||!(s=l(n)))return{isTailwindClass:!1,originalClassName:e};c=!1}var d=(function(e){if(e.length<=1)return e;var r=[],o=[];return e.forEach(function(e){"["===e[0]?(r.push.apply(r,o.sort().concat([e])),o=[]):o.push(e)}),r.push.apply(r,o.sort()),r})(o).join(":");return{isTailwindClass:!0,modifierId:t?d+"!":d,classGroupId:s,originalClassName:e,hasPostfixModifier:c}}).reverse().filter(function(e){if(!e.isTailwindClass)return!0;var r=e.modifierId,o=e.classGroupId,t=e.hasPostfixModifier,n=r+o;return!c.has(n)&&(c.add(n),s(o,t).forEach(function(e){return c.add(r+e)}),!0)}).reverse().map(function(e){return e.originalClassName}).join(" "));return o(t,u),u}return function(){return d(a.apply(null,arguments))}}function s(e){var r=function(r){return r[e]||[]};return r.isThemeGetter=!0,r}var c=/^\[(?:([a-z-]+):)?(.+)\]$/i,d=/^\d+\/\d+$/,u=new Set(["px","full","screen"]),p=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,f=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|^0$/,b=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function m(e){return w(e)||u.has(e)||d.test(e)||g(e)}function g(e){return M(e,"length",P)}function h(e){return M(e,"size",G)}function v(e){return M(e,"position",G)}function y(e){return M(e,"url",N)}function x(e){return M(e,"number",w)}function w(e){return!Number.isNaN(Number(e))}function k(e){return e.endsWith("%")&&w(e.slice(0,-1))}function z(e){return O(e)||M(e,"number",O)}function j(e){return c.test(e)}function C(){return!0}function _(e){return p.test(e)}function I(e){return M(e,"",S)}function M(e,r,o){var t=c.exec(e);return!!t&&(t[1]?t[1]===r:o(t[2]))}function P(e){return f.test(e)}function G(){return!1}function N(e){return e.startsWith("url(")}function O(e){return Number.isInteger(Number(e))}function S(e){return b.test(e)}function E(){var e=s("colors"),r=s("spacing"),o=s("blur"),t=s("brightness"),n=s("borderColor"),i=s("borderRadius"),a=s("borderSpacing"),l=s("borderWidth"),c=s("contrast"),d=s("grayscale"),u=s("hueRotate"),p=s("invert"),f=s("gap"),b=s("gradientColorStops"),M=s("gradientColorStopPositions"),P=s("inset"),G=s("margin"),N=s("opacity"),O=s("padding"),S=s("saturate"),E=s("scale"),A=s("sepia"),T=s("skew"),W=s("space"),$=s("translate"),D=function(){return["auto","contain","none"]},R=function(){return["auto","hidden","clip","visible","scroll"]},q=function(){return["auto",r]},F=function(){return["",m]},B=function(){return["auto",w,j]},H=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},J=function(){return["solid","dashed","dotted","double","none"]},K=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},L=function(){return["start","end","center","between","around","evenly","stretch"]},Q=function(){return["","0",j]},U=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},V=function(){return[w,x]},X=function(){return[w,j]};return{cacheSize:500,theme:{colors:[C],spacing:[m],blur:["none","",_,g],brightness:V(),borderColor:[e],borderRadius:["none","","full",_,g],borderSpacing:[r],borderWidth:F(),contrast:V(),grayscale:Q(),hueRotate:X(),invert:Q(),gap:[r],gradientColorStops:[e],gradientColorStopPositions:[k,g],inset:q(),margin:q(),opacity:V(),padding:[r],saturate:V(),scale:V(),sepia:Q(),skew:X(),space:[r],translate:[r]},classGroups:{aspect:[{aspect:["auto","square","video",j]}],container:["container"],columns:[{columns:[_]}],"break-after":[{"break-after":U()}],"break-before":[{"break-before":U()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(H(),[j])}],overflow:[{overflow:R()}],"overflow-x":[{"overflow-x":R()}],"overflow-y":[{"overflow-y":R()}],overscroll:[{overscroll:D()}],"overscroll-x":[{"overscroll-x":D()}],"overscroll-y":[{"overscroll-y":D()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[P]}],"inset-x":[{"inset-x":[P]}],"inset-y":[{"inset-y":[P]}],start:[{start:[P]}],end:[{end:[P]}],top:[{top:[P]}],right:[{right:[P]}],bottom:[{bottom:[P]}],left:[{left:[P]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",z]}],basis:[{basis:q()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",j]}],grow:[{grow:Q()}],shrink:[{shrink:Q()}],order:[{order:["first","last","none",z]}],"grid-cols":[{"grid-cols":[C]}],"col-start-end":[{col:["auto",{span:[z]},j]}],"col-start":[{"col-start":B()}],"col-end":[{"col-end":B()}],"grid-rows":[{"grid-rows":[C]}],"row-start-end":[{row:["auto",{span:[z]},j]}],"row-start":[{"row-start":B()}],"row-end":[{"row-end":B()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",j]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",j]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:["normal"].concat(L())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(L(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(L(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[O]}],px:[{px:[O]}],py:[{py:[O]}],ps:[{ps:[O]}],pe:[{pe:[O]}],pt:[{pt:[O]}],pr:[{pr:[O]}],pb:[{pb:[O]}],pl:[{pl:[O]}],m:[{m:[G]}],mx:[{mx:[G]}],my:[{my:[G]}],ms:[{ms:[G]}],me:[{me:[G]}],mt:[{mt:[G]}],mr:[{mr:[G]}],mb:[{mb:[G]}],ml:[{ml:[G]}],"space-x":[{"space-x":[W]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[W]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",r]}],"min-w":[{"min-w":["min","max","fit",m]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[_]},_,g]}],h:[{h:[r,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",m]}],"max-h":[{"max-h":[r,"min","max","fit"]}],"font-size":[{text:["base",_,g]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",x]}],"font-family":[{font:[C]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",g]}],"line-clamp":[{"line-clamp":["none",w,x]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",m]}],"list-image":[{"list-image":["none",j]}],"list-style-type":[{list:["none","disc","decimal",j]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[N]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[N]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(J(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",m]}],"underline-offset":[{"underline-offset":["auto",m]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:[r]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",g]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",j]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[N]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(H(),[v])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",h]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},y]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[M]}],"gradient-via-pos":[{via:[M]}],"gradient-to-pos":[{to:[M]}],"gradient-from":[{from:[b]}],"gradient-via":[{via:[b]}],"gradient-to":[{to:[b]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[N]}],"border-style":[{border:[].concat(J(),["hidden"])}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[N]}],"divide-style":[{divide:J()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:[""].concat(J())}],"outline-offset":[{"outline-offset":[m]}],"outline-w":[{outline:[m]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:F()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[N]}],"ring-offset-w":[{"ring-offset":[m]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",_,I]}],"shadow-color":[{shadow:[C]}],opacity:[{opacity:[N]}],"mix-blend":[{"mix-blend":K()}],"bg-blend":[{"bg-blend":K()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[t]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",_,j]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[p]}],saturate:[{saturate:[S]}],sepia:[{sepia:[A]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[t]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[N]}],"backdrop-saturate":[{"backdrop-saturate":[S]}],"backdrop-sepia":[{"backdrop-sepia":[A]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",j]}],duration:[{duration:X()}],ease:[{ease:["linear","in","out","in-out",j]}],delay:[{delay:X()}],animate:[{animate:["none","spin","ping","pulse","bounce",j]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[E]}],"scale-x":[{"scale-x":[E]}],"scale-y":[{"scale-y":[E]}],rotate:[{rotate:[z,j]}],"translate-x":[{"translate-x":[$]}],"translate-y":[{"translate-y":[$]}],"skew-x":[{"skew-x":[T]}],"skew-y":[{"skew-y":[T]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",j]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",j]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":[r]}],"scroll-mx":[{"scroll-mx":[r]}],"scroll-my":[{"scroll-my":[r]}],"scroll-ms":[{"scroll-ms":[r]}],"scroll-me":[{"scroll-me":[r]}],"scroll-mt":[{"scroll-mt":[r]}],"scroll-mr":[{"scroll-mr":[r]}],"scroll-mb":[{"scroll-mb":[r]}],"scroll-ml":[{"scroll-ml":[r]}],"scroll-p":[{"scroll-p":[r]}],"scroll-px":[{"scroll-px":[r]}],"scroll-py":[{"scroll-py":[r]}],"scroll-ps":[{"scroll-ps":[r]}],"scroll-pe":[{"scroll-pe":[r]}],"scroll-pt":[{"scroll-pt":[r]}],"scroll-pr":[{"scroll-pr":[r]}],"scroll-pb":[{"scroll-pb":[r]}],"scroll-pl":[{"scroll-pl":[r]}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",j]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[m,x]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}var A=Object.prototype.hasOwnProperty,T=new Set(["string","number","boolean"]);function W(e){for(var r=arguments.length,o=Array(r>1?r-1:0),t=1;t<r;t++)o[t-1]=arguments[t];return"function"==typeof e?l.apply(void 0,[E,e].concat(o)):l.apply(void 0,[function(){return function(e,r){for(var o in r)(function e(r,o,t){if(!A.call(r,o)||T.has(typeof t)||null===t){r[o]=t;return}if(Array.isArray(t)&&Array.isArray(r[o])){r[o]=r[o].concat(t);return}if("object"==typeof t&&"object"==typeof r[o]){if(null===r[o]){r[o]=t;return}for(var n in t)e(r[o],n,t[n])}})(e,o,r[o]);return e}(E(),e)}].concat(o))}}}]);
(this["webpackJsonpword-master"]=this["webpackJsonpword-master"]||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n(0),c=n.n(a),i=n(13),o=n.n(i),s=(n(95),n(21)),u=n(15),d=n(135),l=n(161),j=n(138),f=n(41),b=240,h=Object(d.a)((function(e){return{root:{display:"flex"},appBar:{width:"calc(100% - ".concat(b,"px)"),marginLeft:b},drawer:{width:b,flexShrink:0},drawerPaper:{width:b},drawerContainer:{overflow:"auto"},content:{flexGrow:1}}}));var O=function(e){var t=e.appTitle,n=e.side,a=e.children,c=h();return Object(r.jsxs)("div",{className:c.root,children:[Object(r.jsxs)(l.a,{className:c.drawer,classes:{paper:c.drawerPaper},variant:"permanent",anchor:"left",children:[Object(r.jsx)(j.a,{children:Object(r.jsx)(f.a,{variant:"h6",children:t})}),Object(r.jsx)("div",{className:c.drawerContainer,children:n})]}),Object(r.jsx)("main",{className:c.content,children:a})]})},p=n(55),x=n(28),m=n(139),v=n(140),w=n(141),k=n(157),g=n(143),y=n(105),C=n(144),L=n(145),S=n(142),N=n(146),D=n(58),W=n.n(D);function I(){return Object(a.useContext)(u.a)}var H=Object(d.a)({addBtn:{}}),B=function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),c=n[0],i=n[1],o=Object(a.useState)(""),u=Object(s.a)(o,2),d=u[0],l=u[1],j=function(){i(!1)};return Object(r.jsxs)(r.Fragment,{children:[e.render((function(){i(!0)})),Object(r.jsxs)(m.a,{open:c,onClose:j,"aria-labelledby":"form-dialog-title",children:[Object(r.jsx)(v.a,{id:"form-dialog-title",children:"\ub2e8\uc5b4\uc7a5 \ub9cc\ub4e4\uae30"}),Object(r.jsx)(w.a,{children:Object(r.jsx)(k.a,{autoFocus:!0,margin:"dense",fullWidth:!0,label:"\ub2e8\uc5b4\uc7a5 \uc774\ub984",name:"name",onChange:function(e){var t=e.target,n=t.name,r=t.value;l((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(p.a)({},n,r))}))}})}),Object(r.jsxs)(g.a,{children:[Object(r.jsx)(y.a,{onClick:j,color:"primary",children:"\ucde8\uc18c"}),Object(r.jsx)(y.a,{onClick:function(){(e.onSubmit||function(){})(d),j()},color:"primary",children:"\ucd94\uac00"})]})]})]})},E=function(e){var t=e.book,n=e.selected,a=e.onClick;return Object(r.jsx)(C.a,{button:!0,selected:n,onClick:function(){a(t)},children:Object(r.jsx)(L.a,{children:t.name})})},T=Object(u.c)((function(){var e=I().wordbookList,t=H();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(S.a,{subheader:Object(r.jsx)(N.a,{children:"\ub0b4 \ub2e8\uc5b4\uc7a5"}),children:e.books.map((function(t){return Object(r.jsx)(E,{book:t,selected:t===e.current,onClick:function(){return e.select(t)}},t.id)}))}),Object(r.jsx)(B,{onSubmit:function(t){e.create(t)},render:function(e){return Object(r.jsx)(y.a,{className:t.addBtn,variant:"contained",color:"primary",startIcon:Object(r.jsx)(W.a,{}),disableElevation:!0,fullWidth:!0,onClick:function(){return e()},children:"\ub2e8\uc5b4\uc7a5 \ub9cc\ub4e4\uae30"})}})]})}));var F=function(){return Object(r.jsx)(T,{})},M=n(159),J=n(156),P=n(9),A=n.n(P),R=n(16),K=n(59),z=n(60),G=n(11);function V(){return new Promise((function(e){var t,n;setTimeout((function(){e()}),(n=50,(t=0)+Math.floor(Math.random()*(n-t+1))))}))}var q=0,Q=[];function U(){var e=localStorage.getItem("wordbookList");if(e){Q=JSON.parse(e);var t=-1;Q.forEach((function(e){t=Math.max(t,e.id)})),q=t+1}else Q=[],q=0}function X(){var e=JSON.stringify(Q);localStorage.setItem("wordbookList",e)}function Y(e){var t=localStorage.getItem("wordbook-".concat(e));if(!t)throw new Error("No book id "+e);var n=JSON.parse(t);return void 0===n.wordList&&(n.wordList=[]),n}function Z(e){void 0!==e.id&&localStorage.setItem("wordbook-".concat(e.id),JSON.stringify(e))}function $(){return _.apply(this,arguments)}function _(){return(_=Object(R.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V();case 2:return U(),e.abrupt("return",{books:Q.map((function(e){var t=Y(e.id);return{id:e.id,name:t.name}})),nextId:q});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ee(e){return te.apply(this,arguments)}function te(){return(te=Object(R.a)(A.a.mark((function e(t){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V();case 2:n={id:q++},Q.push(n),Z({id:n.id,name:t.name,wordList:[]}),X();case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ne(e){return re.apply(this,arguments)}function re(){return(re=Object(R.a)(A.a.mark((function e(t){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V();case 2:return n=Y(t),e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ae(e,t){return ce.apply(this,arguments)}function ce(){return(ce=Object(R.a)(A.a.mark((function e(t,n){var r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne(t);case 2:r=e.sent,Z(Object(x.a)(Object(x.a)({},r),n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ie(e,t){return oe.apply(this,arguments)}function oe(){return(oe=Object(R.a)(A.a.mark((function e(t,n){var r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==n.word&&""!==n.def){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,ne(t);case 4:if(!(r=e.sent).wordList.find((function(e){return e.word===n.word}))){e.next=7;break}return e.abrupt("return");case 7:r.wordList.push({word:n.word,def:n.def}),Z(r);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function se(e,t){return ue.apply(this,arguments)}function ue(){return(ue=Object(R.a)(A.a.mark((function e(t,n){var r,a,c,i;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne(t);case 2:if(r=e.sent,"dict"!==n){e.next=7;break}r.wordList.sort((function(e,t){return e.word.localeCompare(t.word)})),e.next=13;break;case 7:if("rand"!==n){e.next=12;break}for(console.log("rand!"),a=r.wordList.length-1;a>0;a--)c=Math.floor(Math.random()*(a+1)),i=[r.wordList[c],r.wordList[a]],r.wordList[a]=i[0],r.wordList[c]=i[1];e.next=13;break;case 12:return e.abrupt("return");case 13:Z(r);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var de=function(){function e(){Object(K.a)(this,e),this.rawWordList=[],this.name="",this.id=-1,this.isHideDef=!1,this.search="",Object(G.l)(this)}return Object(z.a)(e,[{key:"load",value:function(){var e=Object(R.a)(A.a.mark((function e(t){var n,r=this;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne(t);case 2:n=e.sent,Object(G.n)((function(){r.rawWordList=n.wordList,r.name=n.name,r.id=t,r.isHideDef=!1,r.search=""}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"update",value:function(){var e=Object(R.a)(A.a.mark((function e(){var t,n=this;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne(this.id);case 2:t=e.sent,Object(G.n)((function(){n.rawWordList=t.wordList,n.name=t.name}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"changeName",value:function(){var e=Object(R.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.name=t,e.next=3,ae(this.id,{name:t});case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"addWord",value:function(){var e=Object(R.a)(A.a.mark((function e(t){var n,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.word,r=t.def,e.next=3,ie(this.id,{word:n,def:r});case 3:return e.next=5,this.update();case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"setSearch",value:function(e){this.search=e}},{key:"setHideDef",value:function(e){this.isHideDef=e}},{key:"sort",value:function(){var e=Object(R.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se(this.id,t);case 2:return e.next=4,this.update();case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"wordList",get:function(){var e=this;return this.rawWordList.filter((function(t){var n=t.word,r=t.def;return!(!n.includes(e.search)&&!r.includes(e.search))}))}}]),e}(),le=n(147),je=n(158),fe=Object(d.a)((function(e){return{nameBox:{width:"15em",display:"flex",alignItems:"center",marginLeft:e.spacing(3)}}})),be=Object(u.c)((function(e){var t=e.navTabs,n=fe(),a=I(),c=a.wordbookList,i=a.wordbook;return c.selected?Object(r.jsx)(le.a,{position:"sticky",color:"inherit",elevation:1,children:Object(r.jsxs)(je.a,{display:"flex",flexDirection:"row",children:[Object(r.jsx)(je.a,{className:n.nameBox,children:Object(r.jsx)(f.a,{variant:"h6",noWrap:!0,children:i.name})}),t]})}):Object(r.jsx)(j.a,{})})),he=n(151),Oe=n(152),pe=n(153),xe=n(78),me=n(66),ve=n(148),we=n(160),ke=n(149),ge=n(150),ye=n(77),Ce=n.n(ye),Le=Object(d.a)((function(e){return{addWordBtn:{marginTop:e.spacing(1)}}}));function Se(e){var t=e.children;return Object(r.jsx)(je.a,{marginBottom:2,children:Object(r.jsx)(me.a,{variant:"outlined",children:Object(r.jsx)(je.a,{padding:1.5,children:t})})})}function Ne(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(s.a)(n,2),i=c[0],o=c[1],u=Object(a.useState)(""),d=Object(s.a)(u,2),l=d[0],j=d[1],f=Le(),b=Object(a.useRef)(null),h=Object(a.useRef)(null),O=Object(a.useMemo)((function(){return 0!==i.length&&0!==l.length}),[i,l]),p=function(e){"word"===e.target.name?o(e.target.value):"def"===e.target.name&&j(e.target.value)},x=function(){""!==l&&(t({word:i,def:l}),o(""),j(""),b.current.focus())};return Object(r.jsxs)(Se,{children:[Object(r.jsx)(k.a,{inputRef:b,label:"\ub2e8\uc5b4",name:"word",value:i,variant:"filled",margin:"dense",fullWidth:!0,onChange:p,onKeyDown:function(e){"Enter"===e.key&&""!==i&&h.current.focus()}}),Object(r.jsx)(k.a,{inputRef:h,label:"\ub73b",name:"def",value:l,variant:"filled",margin:"dense",fullWidth:!0,onChange:p,onKeyDown:function(e){"Enter"===e.key&&x()}}),Object(r.jsx)(y.a,{className:f.addWordBtn,variant:"contained",color:"primary",startIcon:Object(r.jsx)(W.a,{}),disableElevation:!0,fullWidth:!0,disabled:!O,onClick:function(){return x()},children:"\ub2e8\uc5b4 \ucd94\uac00"})]})}function De(e){var t=e.isHideDef,n=e.onHideDefChange;return Object(r.jsx)(Se,{children:Object(r.jsx)(S.a,{children:Object(r.jsxs)(C.a,{children:[Object(r.jsx)(L.a,{primary:"\ub2e8\uc5b4 \ub73b \uc228\uae30\uae30"}),Object(r.jsx)(ve.a,{children:Object(r.jsx)(we.a,{edge:"end",value:t,onChange:function(e){n(e.target.checked)}})})]})})})}function We(e){var t=e.onSearchCnahge,n=e.search,a=e.onSortAction;function c(e){a&&a(e)}return Object(r.jsxs)(Se,{children:[Object(r.jsx)(k.a,{placeholder:"\uac80\uc0c9",variant:"outlined",margin:"dense",fullWidth:!0,value:n,onChange:function(e){t&&t(e.target.value)},InputProps:{startAdornment:Object(r.jsx)(ke.a,{position:"start",children:Object(r.jsx)(Ce.a,{})})}}),Object(r.jsxs)(ge.a,{color:"primary",fullWidth:!0,children:[Object(r.jsx)(y.a,{onClick:function(){return c("dict")},children:"\uc0ac\uc804\uc21c \uc815\ub82c"}),Object(r.jsx)(y.a,{onClick:function(){return c("rand")},children:"\ub79c\ub364 \uc11e\uae30"})]})]})}var Ie=Object(u.c)((function(){var e=I().wordbook;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(We,{onSearchCnahge:function(t){e.setSearch(t)},search:e.search,onSortAction:function(t){e.sort(t)}}),Object(r.jsx)(De,{isHideDef:e.isHideDef,onHideDefChange:function(t){return e.setHideDef(t)}}),Object(r.jsx)(Ne,{onSubmit:function(t){e.addWord({word:t.word,def:t.def})}})]})})),He=Object(d.a)((function(e){return{container:{marginTop:e.spacing(2)}}})),Be=Object(a.forwardRef)((function(e,t){var n=e.word,a=e.hideDef;return Object(r.jsxs)("div",{ref:t,children:[Object(r.jsx)(C.a,{children:Object(r.jsx)(L.a,{children:Object(r.jsxs)(je.a,{display:"flex",children:[Object(r.jsx)(f.a,{component:"div",variant:"h6",children:n.word}),Object(r.jsx)(je.a,{flexGrow:1}),!a&&Object(r.jsx)(f.a,{component:"div",variant:"h6",children:n.def})]})})}),Object(r.jsx)(he.a,{component:"li"})]})}));function Ee(e){var t=e.words,n=e.hideDef,a=e.wordbookName;return Object(r.jsx)(je.a,{children:Object(r.jsxs)(S.a,{dense:!0,children:[Object(r.jsx)(he.a,{}),Object(r.jsx)(xe.a,{enterAnimation:"accordionVertical",leaveAnimation:"accordionVertical",children:t.map((function(e){return Object(r.jsx)(Be,{word:e,hideDef:n},a+e.word)}))})]})})}var Te=Object(u.c)((function(){var e=I().wordbook,t=He();return Object(r.jsx)(Oe.a,{className:t.container,maxWidth:"md",children:Object(r.jsxs)(pe.a,{container:!0,spacing:2,children:[Object(r.jsx)(pe.a,{item:!0,xs:8,children:Object(r.jsx)(Ee,{words:e.wordList,wordbookName:e.name,hideDef:e.isHideDef})}),Object(r.jsx)(pe.a,{item:!0,xs:4,children:Object(r.jsx)(Ie,{})})]})})})),Fe=n(79),Me=n(154),Je=n(155),Pe=Object(d.a)((function(e){return{title:{fontSize:14},container:{marginTop:e.spacing(2)}}}));function Ae(e){var t=e.currentName,n=e.onNameChange,c=Object(Fe.a)(e,["currentName","onNameChange"]),i=Pe(),o=Object(a.useState)(t),u=Object(s.a)(o,2),d=u[0],l=u[1];Object(a.useEffect)((function(){l(t)}),[t]);var j=function(){n(d)};return Object(r.jsx)(Me.a,Object(x.a)(Object(x.a)({},c),{},{children:Object(r.jsxs)(Je.a,{children:[Object(r.jsx)(f.a,{className:i.title,children:"\ub2e8\uc5b4\uc7a5 \uc774\ub984"}),Object(r.jsxs)(je.a,{display:"flex",flexDirection:"row",children:[Object(r.jsx)(k.a,{variant:"outlined",value:d,onChange:function(e){return l(e.target.value)},onKeyDown:function(e){"Enter"===e.key?t!==d&&j():"Escape"===e.key&&l(t)},fullWidth:!0,autoComplete:"off"}),Object(r.jsx)(je.a,{ml:1,display:"flex",children:Object(r.jsx)(y.a,{variant:"outlined",color:"primary",size:"small",placeholder:t,onClick:j,disabled:t===d,children:"\ubcc0\uacbd"})})]})]})}))}var Re=[{title:"\ub2e8\uc5b4",component:Te},{title:"\uc124\uc815",component:Object(u.c)((function(){var e=I(),t=e.wordbook,n=e.wordbookList,a=Pe();function c(){return(c=Object(R.a)(A.a.mark((function e(r){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.changeName(r);case 2:return e.next=4,n.load();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.jsx)(Oe.a,{className:a.container,maxWidth:"sm",children:Object(r.jsx)(Ae,{currentName:t.name,onNameChange:function(e){return c.apply(this,arguments)}})})}))}],Ke=Object(u.c)((function(){var e=I().wordbookList,t=Object(a.useState)((function(){return new de})),n=Object(s.a)(t,1)[0],c=Object(a.useState)(0),i=Object(s.a)(c,2),o=i[0],d=i[1];if(Object(G.f)((function(){if(e.selected){var t=e.current;n.load(t.id)}})),!e.selected)return Object(r.jsx)("div",{children:"\ub2e8\uc5b4\uc7a5\uc744 \ub9cc\ub4e4\uc5b4\ubcf4\uc138\uc694!"});var l=Re[o].component;return Object(r.jsxs)(u.b,{wordbook:n,children:[Object(r.jsx)(be,{wordbookList:e,navTabs:Object(r.jsx)(M.a,{value:o,onChange:function(e,t){d(t)},children:Re.map((function(e,t){return Object(r.jsx)(J.a,{label:e.title},t)}))})}),Object(r.jsx)(l,{})]})})),ze=Object(u.c)((function(){var e=I().wordbookList;function t(){return e.selected?Object(r.jsx)("div",{children:"\uc120\ud0dd\ub41c \ub2e8\uc5b4\uc7a5\uc774 \uc5c6\uc2b5\ub2c8\ub2e4..."}):Object(r.jsx)(Ke,{bookInfo:e.selected})}return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(t,{})})})),Ge=function(){function e(){var t=this;Object(K.a)(this,e),this.books=[],this.current={id:-1},this.select=function(e){var n=e.id,r=t.books.find((function(e){return e.id===n}));t.current=r||null},Object(G.l)(this),this.load()}return Object(z.a)(e,[{key:"load",value:function(){var e=Object(R.a)(A.a.mark((function e(){var t,n=this;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$();case 2:t=e.sent,Object(G.n)((function(){n.books=t.books}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"create",value:function(){var e=Object(R.a)(A.a.mark((function e(t){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,e.next=3,ee({name:n});case 3:return e.next=5,this.load();case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"count",get:function(){return this.books.length}},{key:"selected",get:function(){return-1!==this.current.id}}]),e}();var Ve=function(){var e=Object(a.useState)((function(){return new Ge})),t=Object(s.a)(e,1)[0];return Object(r.jsx)(u.b,{wordbookList:t,children:Object(r.jsx)(O,{appTitle:"Word Master",side:Object(r.jsx)(F,{}),children:Object(r.jsx)(ze,{})})})},qe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,163)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(Ve,{})}),document.getElementById("root")),qe()},95:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.f6dff655.chunk.js.map
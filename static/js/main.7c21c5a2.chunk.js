(this["webpackJsonpword-master"]=this["webpackJsonpword-master"]||[]).push([[0],{89:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n(0),c=n.n(a),i=n(13),o=n.n(i),s=(n(89),n(21)),u=n(14),d=n(127),l=n(150),j=n(130),f=n(42),b=240,h=Object(d.a)((function(e){return{root:{display:"flex"},appBar:{width:"calc(100% - ".concat(b,"px)"),marginLeft:b},drawer:{width:b,flexShrink:0},drawerPaper:{width:b},drawerContainer:{overflow:"auto"},content:{flexGrow:1}}}));var O=function(e){var t=e.appTitle,n=e.side,a=e.children,c=h();return Object(r.jsxs)("div",{className:c.root,children:[Object(r.jsxs)(l.a,{className:c.drawer,classes:{paper:c.drawerPaper},variant:"permanent",anchor:"left",children:[Object(r.jsx)(j.a,{children:Object(r.jsx)(f.a,{variant:"h6",children:t})}),Object(r.jsx)("div",{className:c.drawerContainer,children:n})]}),Object(r.jsx)("main",{className:c.content,children:a})]})},p=n(52),x=n(25),m=n(131),v=n(132),w=n(133),k=n(147),g=n(135),y=n(136),C=n(137),L=n(138),S=n(134),N=n(139),W=n(54),I=n.n(W);function E(){return Object(a.useContext)(u.a)}var F=Object(d.a)({addBtn:{}}),T=function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),c=n[0],i=n[1],o=Object(a.useState)(""),u=Object(s.a)(o,2),d=u[0],l=u[1],j=function(){i(!1)};return Object(r.jsxs)(r.Fragment,{children:[e.render((function(){i(!0)})),Object(r.jsxs)(m.a,{open:c,onClose:j,"aria-labelledby":"form-dialog-title",children:[Object(r.jsx)(v.a,{id:"form-dialog-title",children:"\ub2e8\uc5b4\uc7a5 \ub9cc\ub4e4\uae30"}),Object(r.jsx)(w.a,{children:Object(r.jsx)(k.a,{autoFocus:!0,margin:"dense",fullWidth:!0,label:"\ub2e8\uc5b4\uc7a5 \uc774\ub984",name:"name",onChange:function(e){var t=e.target,n=t.name,r=t.value;l((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(p.a)({},n,r))}))}})}),Object(r.jsxs)(g.a,{children:[Object(r.jsx)(y.a,{onClick:j,color:"primary",children:"\ucde8\uc18c"}),Object(r.jsx)(y.a,{onClick:function(){(e.onSubmit||function(){})(d),j()},color:"primary",children:"\ucd94\uac00"})]})]})]})},B=function(e){var t=e.book,n=e.selected,a=e.onClick;return Object(r.jsx)(C.a,{button:!0,selected:n,onClick:function(){a(t)},children:Object(r.jsx)(L.a,{children:t.name})})},D=Object(u.c)((function(){var e=E().wordbookList,t=F();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(S.a,{subheader:Object(r.jsx)(N.a,{children:"\ub0b4 \ub2e8\uc5b4\uc7a5"}),children:e.books.map((function(t){return Object(r.jsx)(B,{book:t,selected:t===e.current,onClick:function(){return e.select(t)}},t.id)}))}),Object(r.jsx)(T,{onSubmit:function(t){e.create(t)},render:function(e){return Object(r.jsx)(y.a,{className:t.addBtn,variant:"contained",color:"primary",startIcon:Object(r.jsx)(I.a,{}),disableElevation:!0,fullWidth:!0,onClick:function(){return e()},children:"\ub2e8\uc5b4\uc7a5 \ub9cc\ub4e4\uae30"})}})]})}));var J=function(){return Object(r.jsx)(D,{})},M=n(149),P=n(146),R=n(12),K=n.n(R),z=n(15),G=n(55),q=n(56),A=n(9);function H(){return new Promise((function(e){var t,n;setTimeout((function(){e()}),(n=50,(t=0)+Math.floor(Math.random()*(n-t+1))))}))}var Q=0,U=[];function V(){var e=localStorage.getItem("wordbookList");if(e){U=JSON.parse(e);var t=-1;U.forEach((function(e){t=Math.max(t,e.id)})),Q=t+1}else U=[],Q=0}function X(){var e=JSON.stringify(U);localStorage.setItem("wordbookList",e)}function Y(e){var t=localStorage.getItem("wordbook-".concat(e));if(!t)throw new Error("No book id "+e);var n=JSON.parse(t);return void 0===n.wordList&&(n.wordList=[]),n}function Z(e){void 0!==e.id&&localStorage.setItem("wordbook-".concat(e.id),JSON.stringify(e))}function $(){return _.apply(this,arguments)}function _(){return(_=Object(z.a)(K.a.mark((function e(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H();case 2:return V(),e.abrupt("return",{books:U.map((function(e){var t=Y(e.id);return{id:e.id,name:t.name}})),nextId:Q});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ee(e){return te.apply(this,arguments)}function te(){return(te=Object(z.a)(K.a.mark((function e(t){var n;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H();case 2:n={id:Q++},U.push(n),Z({id:n.id,name:t.name,wordList:[]}),X();case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ne(e){return re.apply(this,arguments)}function re(){return(re=Object(z.a)(K.a.mark((function e(t){var n;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H();case 2:return n=Y(t),e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ae(e,t){return ce.apply(this,arguments)}function ce(){return(ce=Object(z.a)(K.a.mark((function e(t,n){var r;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne(t);case 2:r=e.sent,Z(Object(x.a)(Object(x.a)({},r),n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ie(e,t){return oe.apply(this,arguments)}function oe(){return(oe=Object(z.a)(K.a.mark((function e(t,n){var r;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==n.word&&""!==n.def){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,ne(t);case 4:if(!(r=e.sent).wordList.find((function(e){return e.word===n.word}))){e.next=7;break}return e.abrupt("return");case 7:r.wordList.push({word:n.word,def:n.def}),Z(r);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var se=function(){function e(){Object(G.a)(this,e),this.wordList=[],this.name="",this.id=-1,Object(A.l)(this)}return Object(q.a)(e,[{key:"load",value:function(){var e=Object(z.a)(K.a.mark((function e(t){var n,r=this;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne(t);case 2:n=e.sent,Object(A.n)((function(){r.wordList=n.wordList,r.name=n.name,r.id=t}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"update",value:function(){var e=Object(z.a)(K.a.mark((function e(){var t,n=this;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne(this.id);case 2:t=e.sent,Object(A.n)((function(){n.wordList=t.wordList,n.name=t.name}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"changeName",value:function(){var e=Object(z.a)(K.a.mark((function e(t){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.name=t,e.next=3,ae(this.id,{name:t});case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"addWord",value:function(){var e=Object(z.a)(K.a.mark((function e(t){var n,r;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.word,r=t.def,e.next=3,ie(this.id,{word:n,def:r});case 3:return e.next=5,this.update();case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),ue=n(140),de=n(148),le=Object(d.a)((function(e){return{nameBox:{width:"15em",display:"flex",alignItems:"center",marginLeft:e.spacing(3)}}})),je=Object(u.c)((function(e){var t=e.navTabs,n=le(),a=E(),c=a.wordbookList,i=a.wordbook;return c.selected?Object(r.jsx)(ue.a,{position:"sticky",color:"transparent",elevation:1,children:Object(r.jsxs)(de.a,{display:"flex",flexDirection:"row",children:[Object(r.jsx)(de.a,{className:n.nameBox,children:Object(r.jsx)(f.a,{variant:"h6",noWrap:!0,children:i.name})}),t]})}):Object(r.jsx)(j.a,{})})),fe=n(141),be=n(62),he=n(142),Oe=n(143);function pe(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(s.a)(n,2),i=c[0],o=c[1],u=Object(a.useState)(""),d=Object(s.a)(u,2),l=d[0],j=d[1],f=Object(a.useRef)(null),b=Object(a.useRef)(null),h=function(e){"word"===e.target.name?o(e.target.value):"def"===e.target.name&&j(e.target.value)},O=function(){""!==l&&(t({word:i,def:l}),o(""),j(""),f.current.focus())};return Object(r.jsxs)(de.a,{padding:1,children:[Object(r.jsx)(k.a,{inputRef:f,label:"\ub2e8\uc5b4",name:"word",value:i,variant:"filled",margin:"dense",fullWidth:!0,onChange:h,onKeyDown:function(e){"Enter"===e.key&&""!==i&&b.current.focus()}}),Object(r.jsx)(k.a,{inputRef:b,label:"\ub73b",name:"def",value:l,variant:"filled",margin:"dense",fullWidth:!0,onChange:h,onKeyDown:function(e){"Enter"===e.key&&O()}}),Object(r.jsx)(y.a,{variant:"contained",color:"primary",startIcon:Object(r.jsx)(I.a,{}),disableElevation:!0,fullWidth:!0,onClick:function(){return O()},children:"\ub2e8\uc5b4 \ucd94\uac00"})]})}var xe=Object(u.c)((function(){var e=E().wordbook;return Object(r.jsx)(be.a,{children:Object(r.jsx)(pe,{onSubmit:function(t){e.addWord({word:t.word,def:t.def})}})})})),me=Object(d.a)((function(e){return{container:{marginTop:e.spacing(2)}}}));function ve(e){var t=e.word;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(C.a,{children:Object(r.jsx)(L.a,{children:Object(r.jsxs)(de.a,{display:"flex",children:[Object(r.jsx)(f.a,{component:"div",variant:"h6",children:t.word}),Object(r.jsx)(de.a,{flexGrow:1}),Object(r.jsx)(f.a,{component:"div",variant:"h6",children:t.def})]})})}),Object(r.jsx)(fe.a,{component:"li"})]})}function we(e){var t=e.words;return Object(r.jsx)(de.a,{children:Object(r.jsx)(be.a,{children:Object(r.jsx)(S.a,{dense:!0,children:t.map((function(e){return Object(r.jsx)(ve,{word:e},e.word)}))})})})}var ke=Object(u.c)((function(){var e=E().wordbook,t=me();return Object(r.jsx)(he.a,{className:t.container,maxWidth:"md",children:Object(r.jsxs)(Oe.a,{container:!0,spacing:2,children:[Object(r.jsx)(Oe.a,{item:!0,xs:8,children:Object(r.jsx)(we,{words:e.wordList})}),Object(r.jsx)(Oe.a,{item:!0,xs:4,children:Object(r.jsx)(xe,{})})]})})})),ge=n(72),ye=n(144),Ce=n(145),Le=Object(d.a)((function(e){return{title:{fontSize:14},container:{marginTop:e.spacing(2)}}}));function Se(e){var t=e.currentName,n=e.onNameChange,c=Object(ge.a)(e,["currentName","onNameChange"]),i=Le(),o=Object(a.useState)(t),u=Object(s.a)(o,2),d=u[0],l=u[1];Object(a.useEffect)((function(){l(t)}),[t]);var j=function(){n(d)};return Object(r.jsx)(ye.a,Object(x.a)(Object(x.a)({},c),{},{children:Object(r.jsxs)(Ce.a,{children:[Object(r.jsx)(f.a,{className:i.title,children:"\ub2e8\uc5b4\uc7a5 \uc774\ub984"}),Object(r.jsxs)(de.a,{display:"flex",flexDirection:"row",children:[Object(r.jsx)(k.a,{variant:"outlined",value:d,onChange:function(e){return l(e.target.value)},onKeyDown:function(e){"Enter"===e.key?t!==d&&j():"Escape"===e.key&&l(t)},fullWidth:!0,autoComplete:"off"}),Object(r.jsx)(de.a,{ml:1,display:"flex",children:Object(r.jsx)(y.a,{variant:"outlined",color:"primary",size:"small",placeholder:t,onClick:j,disabled:t===d,children:"\ubcc0\uacbd"})})]})]})}))}var Ne=[{title:"\ub2e8\uc5b4",component:ke},{title:"\uc124\uc815",component:Object(u.c)((function(){var e=E(),t=e.wordbook,n=e.wordbookList,a=Le();function c(){return(c=Object(z.a)(K.a.mark((function e(r){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.changeName(r);case 2:return e.next=4,n.load();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.jsx)(he.a,{className:a.container,maxWidth:"sm",children:Object(r.jsx)(Se,{currentName:t.name,onNameChange:function(e){return c.apply(this,arguments)}})})}))}],We=Object(u.c)((function(){var e=E().wordbookList,t=Object(a.useState)((function(){return new se})),n=Object(s.a)(t,1)[0],c=Object(a.useState)(0),i=Object(s.a)(c,2),o=i[0],d=i[1];if(Object(A.f)((function(){if(e.selected){var t=e.current;n.load(t.id)}})),!e.selected)return Object(r.jsx)("div",{children:"\ub2e8\uc5b4\uc7a5\uc744 \ub9cc\ub4e4\uc5b4\ubcf4\uc138\uc694!"});var l=Ne[o].component;return Object(r.jsxs)(u.b,{wordbook:n,children:[Object(r.jsx)(je,{wordbookList:e,navTabs:Object(r.jsx)(M.a,{value:o,onChange:function(e,t){d(t)},children:Ne.map((function(e,t){return Object(r.jsx)(P.a,{label:e.title},t)}))})}),Object(r.jsx)(l,{})]})})),Ie=Object(u.c)((function(){var e=E().wordbookList;function t(){return e.selected?Object(r.jsx)("div",{children:"\uc120\ud0dd\ub41c \ub2e8\uc5b4\uc7a5\uc774 \uc5c6\uc2b5\ub2c8\ub2e4..."}):Object(r.jsx)(We,{bookInfo:e.selected})}return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(t,{})})})),Ee=function(){function e(){var t=this;Object(G.a)(this,e),this.books=[],this.current={id:-1},this.select=function(e){var n=e.id,r=t.books.find((function(e){return e.id===n}));t.current=r||null},Object(A.l)(this),this.load()}return Object(q.a)(e,[{key:"load",value:function(){var e=Object(z.a)(K.a.mark((function e(){var t,n=this;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$();case 2:t=e.sent,Object(A.n)((function(){n.books=t.books}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"create",value:function(){var e=Object(z.a)(K.a.mark((function e(t){var n;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,e.next=3,ee({name:n});case 3:return e.next=5,this.load();case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"count",get:function(){return this.books.length}},{key:"selected",get:function(){return-1!==this.current.id}}]),e}();var Fe=function(){var e=Object(a.useState)((function(){return new Ee})),t=Object(s.a)(e,1)[0];return Object(r.jsx)(u.b,{wordbookList:t,children:Object(r.jsx)(O,{appTitle:"Word Master",side:Object(r.jsx)(J,{}),children:Object(r.jsx)(Ie,{})})})},Te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,152)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(Fe,{})}),document.getElementById("root")),Te()}},[[97,1,2]]]);
//# sourceMappingURL=main.7c21c5a2.chunk.js.map
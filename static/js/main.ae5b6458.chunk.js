(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{62:function(e,A,n){"use strict";n.r(A);var t=n(0),a=n.n(t),r=n(9),i=n.n(r),c=n(35),g=n(34),l=n(12),o=(n(55),n(27)),d=n.p+"static/media/reveal.ae2de8e7.wav",s=n.p+"static/media/flag.1b1743f7.wav",j=n.p+"static/media/boom.89a0ee30.wav",u=n.p+"static/media/win.abeb4707.wav";var B,C=function(e){for(var A=e.ROW,n=e.COL,t=e.BOMBS,a=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]],r=[],i=[],c=0;c<A;c++){for(var g=[],l=0;l<n;l++)g.push({value:0,revealed:!1,x:c,y:l,flagged:!1});r.push(g)}for(var o=0;o<t;){var d=Math.floor(Math.random()*A),s=Math.floor(Math.random()*n);0===r[d][s].value&&(r[d][s].value="X",i.push([d,s]),o++)}return i.forEach((function(e){a.forEach((function(t){var a=e[0]+t[0],i=e[1]+t[1];a>=0&&i>=0&&a<A&&i<n&&"X"!==r[a][i].value&&r[a][i].value++}))})),function(e,A,n){console.log("Heres your Board!==>");for(var t=0;t<A;t++)console.log(e[t].map((function(e,A){return String(e.value)})))}(r,A),{board:r,mineLocations:i}},f=n(13),b=n(14),v=b.a.h1(B||(B=Object(f.a)(["\n    @import url('https://fonts.googleapis.com/css2?family=Chela+One&family=Odibee+Sans&display=swap');\n    text-align:center;\n    color: white;\n    font-family: 'Chela One', cursive;\n    font-size: 2.5rem;\n    padding:20px;\n    background-color:black;\n    margin-bottom: 0;\n"]))),h=n(2);var O=function(e){return Object(h.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"absolute",width:300,height:240},className:"p-2 card",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{className:"p-4",children:e.win?"\ud83c\udf89Winner\ud83c\udf89":"\ud83d\udca2Oops!\ud83d\udca2"}),Object(h.jsx)("div",{class:"col-md-12 text-center",children:Object(h.jsx)("button",{className:"p-1 btn btn-lg btn-danger ",onClick:e.tryAgainClicked,children:e.win?"Play Again":"Try Again"})})]})})};var E=function(e){return Object(h.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",color:"white"},children:Object(h.jsxs)("h3",{children:["\ud83d\udea9",e.flagsLeft," \ud83d\udea9"]})})},w=n(6),I=n(92),Q=n(91),m=n(89),x=n(90),y=n.p+"static/media/mouseRightClick.1356be6e.png",L=n(93),J=n(94),D=Object(w.a)((function(e){return{tooltip:{backgroundColor:"#f5f5f9",color:"rgba(0, 0, 0, 0.87)",maxWidth:220,fontSize:e.typography.pxToRem(12),border:"1px solid #dadde9"}}}))(Q.a),M=Object(w.a)((function(e){return{card:{padding:20,textAlign:"center",color:e.palette.text.secondary}}}))(J.a);var k,G=function(e){return Object(h.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:20},children:[Object(h.jsx)("div",{children:Object(h.jsxs)("select",{defaultValue:e.defaultValue,onChange:function(A){return e.handleChangeLevel(A)},children:[Object(h.jsx)("option",{value:"easy",children:"Easy"}),Object(h.jsx)("option",{value:"medium",children:"Medium"}),Object(h.jsx)("option",{value:"hard",children:"Hard"})]})}),Object(h.jsx)("div",{children:Object(h.jsx)(D,{title:Object(h.jsxs)(a.a.Fragment,{children:[Object(h.jsx)(m.a,{variant:"h5",color:"inherit",children:"How To Play"}),Object(h.jsx)("div",{children:Object(h.jsxs)(x.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",style:{padding:20},children:[Object(h.jsxs)(M,{square:!0,children:[Object(h.jsx)("img",{style:{width:100},src:"data:image/png;base64,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"}),Object(h.jsx)(m.a,{style:{padding:20},color:"inherit",children:"Left Click To Reveal a Mine"})]}),Object(h.jsxs)(M,{square:!0,children:[Object(h.jsx)("img",{style:{width:100},src:y}),Object(h.jsx)(m.a,{style:{padding:20},color:"inherit",children:"Right Click to Flag a cell i.e. mark the cell "})]})]})})]}),children:Object(h.jsx)(I.a,{children:Object(h.jsx)(L.a,{color:"secondary",fontSize:"large"})})})})]})},S=function(){var e=["lightgreen","orange","violet","cyan","yellow"];return e[Math.floor(Math.random()*e.length)]},R=b.a.div(k||(k=Object(f.a)(["\n    width: 30px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    border: 2px solid white;\n    user-select: none;\n    \n"])));var X,p,H,Z=function(e){var A,n=e.info,t=e.updateFlag,a=e.handleRevealCell,r=(e.gameLevel,{background:n.revealed?"X"===n.value?S():"silver":"grey",color:(A=n.value,["white","blue","darkgreen","orange","violet","cyan","red","mangenta","maroon"][A])});return Object(h.jsx)(R,{style:r,onClick:function(){return a(n.x,n.y)},onContextMenu:function(e){return t(e,n.x,n.y)},children:n.revealed?"X"===n.value?"\ud83d\udca3":0!==n.value&&n.value:n.flagged?"\ud83d\udd34":""})},P=b.a.div(X||(X=Object(f.a)(["\n    display: flex;\n    flex-direction:column;\n    justify-content: center;\n    align-items: center;\n    position:relative;\n"]))),F=b.a.div(p||(p=Object(f.a)(["\n    display: flex;\n    flex-direction:row;\n    align-items: center;\n"]))),W=b.a.div(H||(H=Object(f.a)(["\n    background-color:black;\n    margin-bottom: 0;\n"]))),Y=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]],U={ROW:8,COL:10,BOMBS:10},V={ROW:14,COL:18,BOMBS:40},K={ROW:20,COL:24,BOMBS:80};var z=function(){var e=Object(t.useState)([]),A=Object(l.a)(e,2),n=A[0],a=A[1],r=Object(t.useState)([]),i=Object(l.a)(r,2),B=i[0],f=i[1],b=Object(t.useState)(V),v=Object(l.a)(b,2),w=v[0],I=v[1],Q=Object(t.useState)(w.BOMBS),m=Object(l.a)(Q,2),x=m[0],y=m[1],L=Object(t.useState)(w.COL*w.ROW-w.BOMBS),J=Object(l.a)(L,2),D=J[0],M=J[1],k=Object(t.useState)({gameOver:!1,win:!1}),S=Object(l.a)(k,2),R=S[0],X=S[1],p=Object(o.a)(s),H=Object(l.a)(p,1)[0],z=Object(o.a)(d),T=Object(l.a)(z,1)[0],q=Object(o.a)(j),N=Object(l.a)(q,1)[0],$=Object(o.a)(u),_=Object(l.a)($,1)[0];Object(t.useEffect)((function(){ee()}),[w]),Object(t.useEffect)((function(){0===D&&(X({gameOver:!0,win:!0}),_())}),[D]),Object(t.useEffect)((function(){}),[R]);var ee=function(){var e=C(w);f(e.mineLocations),y(w.BOMBS),M(w.COL*w.ROW-w.BOMBS),X({gameOver:!1,win:!1}),a(e.board)},Ae=function(e,A,t){e.preventDefault();var r=Object(g.a)(n);r[A][t].flagged?y((function(e){return e+1})):(y((function(e){return e-1})),H()),r[A][t].flagged=!r[A][t].flagged,a(r)},ne=function(e,A){var t=Object(g.a)(n);t[e][A].flagged?(t[e][A].flagged=!1,y((function(e){return e+1}))):(te(t,e,A),T()),a(t)},te=function(e,A,t){if(!0!==e[A][t].revealed){if(e[A][t].revealed=!0,"X"!==e[A][t].value&&M((function(e){return e-1})),e[A][t].flagged&&(e[A][t].flagged=!1,y((function(e){return e+1}))),0===n[A][t].value)return ae(e,A,t);if("X"===e[A][t].value){N();for(var a=0;a<B.length;a++)e[B[a][0]][B[a][1]].revealed=!0;X((function(e){return Object(c.a)(Object(c.a)({},e),{},{gameOver:!0})}))}return e}},ae=function(e,A,n){Y.forEach((function(t){var a=A+t[0],r=n+t[1];if(a>=0&&r>=0&&a<w.ROW&&r<w.COL&&"X"!==e[a][r].value&&!e[a][r].revealed)return te(e,a,r)}))};return n?Object(h.jsxs)(W,{children:[Object(h.jsx)(E,{flagsLeft:x}),Object(h.jsx)(G,{handleChangeLevel:function(e){switch(e.target.value){case"easy":I(U);break;case"medium":I(V);break;case"hard":I(K)}},defaultValue:"medium"}),Object(h.jsxs)(P,{children:[R.gameOver&&Object(h.jsx)(O,{win:R.win,tryAgainClicked:ee}),n.map((function(e,A){return Object(h.jsx)(F,{children:e.map((function(e,A){return Object(h.jsx)(Z,{info:e,gameLevel:w,handleRevealCell:ne,updateFlag:Ae},A)}))},A)}))]}),Object(h.jsx)("div",{class:"col-md-12 text-center",children:Object(h.jsx)("button",{style:{margin:20},className:"btn btn-primary btn-lg",onClick:ee,children:"Reset"})})]}):Object(h.jsx)("div",{children:"Loading"})};var T=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(v,{children:"Minesweeper"}),Object(h.jsx)(z,{})]})};i.a.render(Object(h.jsx)(T,{}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.ae5b6458.chunk.js.map
(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{73:function(A,e,n){"use strict";n.r(e);var t=n(0),i=n.n(t),g=n(10),c=n.n(g),a=n(41),r=n(40),l=n(12),o=(n(62),n(30)),E=n.p+"static/media/reveal.ae2de8e7.wav",I=n.p+"static/media/flag.1b1743f7.wav",C=n.p+"static/media/boom.89a0ee30.wav",d=n.p+"static/media/win.abeb4707.wav";var s,B=function(A){for(var e=A.ROW,n=A.COL,t=A.BOMBS,i=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]],g=[],c=[],a=0;a<e;a++){for(var r=[],l=0;l<n;l++)r.push({value:0,revealed:!1,x:a,y:l,flagged:!1});g.push(r)}for(var o=0;o<t;){var E=Math.floor(Math.random()*e),I=Math.floor(Math.random()*n);0===g[E][I].value&&(g[E][I].value="X",c.push([E,I]),o++)}return c.forEach((function(A){i.forEach((function(t){var i=A[0]+t[0],c=A[1]+t[1];i>=0&&c>=0&&i<e&&c<n&&"X"!==g[i][c].value&&g[i][c].value++}))})),function(A,e,n){console.log("Heres your Board!==>");for(var t=0;t<e;t++)console.log(A[t].map((function(A,e){return String(A.value)})))}(g,e),{board:g,mineLocations:c}},Q=n(14),f=n(15),h=f.a.h1(s||(s=Object(Q.a)(["\n    @import url('https://fonts.googleapis.com/css2?family=Chela+One&family=Odibee+Sans&display=swap');\n    text-align:center;\n    color: white;\n    font-family: 'Chela One', cursive;\n    font-size: 2.5rem;\n    padding:20px;\n    background-color:black;\n    margin-bottom: 0;\n"]))),O=n(2);var j=function(A){return Object(O.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"absolute",width:300,height:240},className:"p-2 card",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{className:"p-4",children:A.win?"\ud83c\udf89Winner\ud83c\udf89":"\ud83d\udca2Oops!\ud83d\udca2"}),Object(O.jsx)("div",{class:"col-md-12 text-center",children:Object(O.jsx)("button",{className:"p-1 btn btn-lg btn-danger ",onClick:A.tryAgainClicked,children:A.win?"Play Again":"Try Again"})})]})})};var b=function(A){return Object(O.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",color:"white"},children:Object(O.jsxs)("h3",{children:["\ud83d\udea9",A.flagsLeft," \ud83d\udea9"]})})},v=n(6),u=n(104),w=n(103),m=n(100),J=n(101),y=n.p+"static/media/mouseRightClick.1356be6e.png",S=n(102),k=n(105),x=n(53),R=n.n(x),P=Object(v.a)((function(A){return{tooltip:{backgroundColor:"#f5f5f9",color:"rgba(0, 0, 0, 0.87)",maxWidth:250,fontSize:A.typography.pxToRem(12),border:"1px solid #dadde9"}}}))(w.a),D=Object(v.a)((function(A){return{card:{padding:20,display:"flex",alignItems:"center",justifyContent:"center",color:A.palette.text.secondary}}}))(k.a);var L,Z=function(A){return Object(O.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:20},children:[Object(O.jsx)("div",{children:Object(O.jsxs)("select",{defaultValue:A.defaultValue,onChange:function(e){return A.handleChangeLevel(e)},children:[Object(O.jsx)("option",{value:"easy",children:"Easy"}),Object(O.jsx)("option",{value:"medium",children:"Medium"}),Object(O.jsx)("option",{value:"hard",children:"Hard"})]})}),Object(O.jsx)("div",{children:Object(O.jsx)(P,{title:Object(O.jsxs)(i.a.Fragment,{children:[Object(O.jsx)(m.a,{variant:"h5",color:"inherit",children:"How To Play"}),Object(O.jsx)("div",{children:Object(O.jsxs)(J.a,{container:!0,direction:"row",justify:"flex",alignItems:"center",style:{padding:0},children:[Object(O.jsxs)(D,{square:!0,children:[Object(O.jsx)("img",{style:{width:100},src:"data:image/png;base64,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"}),Object(O.jsx)(m.a,{style:{padding:20},color:"inherit",children:"Left Click To Reveal a Mine"})]}),Object(O.jsxs)(D,{square:!0,children:[Object(O.jsx)("img",{style:{width:100},src:y}),Object(O.jsx)(m.a,{style:{padding:20},color:"inherit",children:"Right Click to Flag a cell i.e. mark the cell "})]})]})})]}),children:Object(O.jsx)(u.a,{children:Object(O.jsx)(S.a,{color:"secondary",fontSize:"large"})})})}),Object(O.jsx)("div",{children:Object(O.jsx)(P,{title:Object(O.jsxs)(i.a.Fragment,{children:[Object(O.jsx)(m.a,{variant:"h5",color:"inherit",children:"Rules:"}),Object(O.jsx)("div",{children:Object(O.jsxs)(D,{square:!0,children:[Object(O.jsx)("img",{style:{width:100},src:"data:image/png;base64,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"}),Object(O.jsx)(m.a,{style:{padding:20},color:"inherit",children:"Each number N means that their are N number of bombs\ud83d\udca3 in the surrounding cells ! BE CAREFUL !"}),Object(O.jsx)(m.a,{style:{padding:20},color:"inherit",children:"Start by Randomly Revealing cells and try to Flag\u26f3\ufe0f All the Mines!"}),Object(O.jsx)(m.a,{style:{padding:20},color:"inherit",children:"WHAT ARE YOU WAITING FOR !"})]})})]}),children:Object(O.jsx)(u.a,{children:Object(O.jsx)(R.a,{color:"secondary",fontSize:"large"})})})})]})},H=function(){var A=["lightgreen","orange","violet","cyan","yellow"];return A[Math.floor(Math.random()*A.length)]},G=f.a.div(L||(L=Object(Q.a)(["\n    \n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    border: 2px solid white;\n    user-select: none;\n    \n"])));var X,p,M,Y=function(A){var e,n=A.info,t=A.updateFlag,i=A.handleRevealCell,g=(A.gameLevel,A.cellSize),c={background:n.revealed?"X"===n.value?H():"silver":"grey",color:(e=n.value,["white","blue","darkgreen","orange","violet","cyan","red","mangenta","maroon"][e]),width:g,height:g};return Object(O.jsx)(G,{style:c,onClick:function(){return i(n.x,n.y)},onContextMenu:function(A){return t(A,n.x,n.y)},children:n.revealed?"X"===n.value?"\ud83d\udca3":0!==n.value&&n.value:n.flagged?"\ud83d\udd34":""})},F=f.a.div(X||(X=Object(Q.a)(["\n    display: flex;\n    flex-direction:column;\n    justify-content: center;\n    align-items: center;\n    position:relative;\n"]))),W=f.a.div(p||(p=Object(Q.a)(["\n    display: flex;\n    flex-direction:row;\n    align-items: center;\n"]))),T=f.a.div(M||(M=Object(Q.a)(["\n    background-color:black;\n    margin-bottom: 0;\n"]))),K=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]],N={ROW:8,COL:10,BOMBS:10,CELLSIZE:40},z={ROW:14,COL:18,BOMBS:40,CELLSIZE:30},V={ROW:20,COL:24,BOMBS:80,CELLSIZE:25};var U=function(){var A=i.a.useState(window.innerWidth),e=Object(l.a)(A,2),n=(e[0],e[1]),g=Object(t.useState)([]),c=Object(l.a)(g,2),s=c[0],Q=c[1],f=Object(t.useState)([]),h=Object(l.a)(f,2),v=h[0],u=h[1],w=Object(t.useState)(z),m=Object(l.a)(w,2),J=m[0],y=m[1],S=Object(t.useState)(J.CELLSIZE),k=Object(l.a)(S,2),x=k[0],R=k[1],P=Object(t.useState)(J.BOMBS),D=Object(l.a)(P,2),L=D[0],H=D[1],G=Object(t.useState)(J.COL*J.ROW-J.BOMBS),X=Object(l.a)(G,2),p=X[0],M=X[1],U=Object(t.useState)({gameOver:!1,win:!1}),q=Object(l.a)(U,2),$=q[0],_=q[1],AA=Object(o.a)(I),eA=Object(l.a)(AA,1)[0],nA=Object(o.a)(E),tA=Object(l.a)(nA,1)[0],iA=Object(o.a)(C),gA=Object(l.a)(iA,1)[0],cA=Object(o.a)(d),aA=Object(l.a)(cA,1)[0];Object(t.useEffect)((function(){rA()}),[J]),Object(t.useEffect)((function(){0===p&&(_({gameOver:!0,win:!0}),aA())}),[p]),Object(t.useEffect)((function(){}),[$]),i.a.useEffect((function(){var A=function(){var A=window.innerWidth;n(A);var e=J.CELLSIZE*J.COL+100;R(A>e?J.CELLSIZE:J.CELLSIZE*A/e)};return window.addEventListener("resize",A),function(){return window.removeEventListener("resize",A)}}));var rA=function(){var A=B(J);R(J.CELLSIZE),u(A.mineLocations),H(J.BOMBS),M(J.COL*J.ROW-J.BOMBS),_({gameOver:!1,win:!1}),Q(A.board)},lA=function(A,e,n){A.preventDefault();var t=Object(r.a)(s);t[e][n].flagged?H((function(A){return A+1})):(H((function(A){return A-1})),eA()),t[e][n].flagged=!t[e][n].flagged,Q(t)},oA=function(A,e){var n=Object(r.a)(s);n[A][e].flagged?(n[A][e].flagged=!1,H((function(A){return A+1}))):(EA(n,A,e),tA()),Q(n)},EA=function(A,e,n){if(!0!==A[e][n].revealed){if(A[e][n].revealed=!0,"X"!==A[e][n].value&&M((function(A){return A-1})),A[e][n].flagged&&(A[e][n].flagged=!1,H((function(A){return A+1}))),0===s[e][n].value)return IA(A,e,n);if("X"===A[e][n].value){gA();for(var t=0;t<v.length;t++)A[v[t][0]][v[t][1]].revealed=!0;_((function(A){return Object(a.a)(Object(a.a)({},A),{},{gameOver:!0})}))}return A}},IA=function(A,e,n){K.forEach((function(t){var i=e+t[0],g=n+t[1];if(i>=0&&g>=0&&i<J.ROW&&g<J.COL&&"X"!==A[i][g].value&&!A[i][g].revealed)return EA(A,i,g)}))};return s?Object(O.jsxs)(T,{children:[Object(O.jsx)(b,{flagsLeft:L}),Object(O.jsx)(Z,{handleChangeLevel:function(A){switch(A.target.value){case"easy":y(N);break;case"medium":y(z);break;case"hard":y(V)}},defaultValue:"medium"}),Object(O.jsxs)(F,{children:[$.gameOver&&Object(O.jsx)(j,{win:$.win,tryAgainClicked:rA}),s.map((function(A,e){return Object(O.jsx)(W,{children:A.map((function(A,e){return Object(O.jsx)(Y,{info:A,gameLevel:J,handleRevealCell:oA,updateFlag:lA,cellSize:x},e)}))},e)}))]}),Object(O.jsx)("div",{class:"col-md-12 text-center",children:Object(O.jsx)("button",{style:{margin:20},className:"btn btn-primary btn-lg",onClick:rA,children:"Reset"})})]}):Object(O.jsx)("div",{children:"Loading"})};var q=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(h,{children:"Minesweeper"}),Object(O.jsx)(U,{})]})};c.a.render(Object(O.jsx)(q,{}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.e4d6319b.chunk.js.map
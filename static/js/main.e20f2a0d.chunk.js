(this.webpackJsonplinkedin_clone_project=this.webpackJsonplinkedin_clone_project||[]).push([[0],{101:function(e,t,r){},102:function(e,t,r){},104:function(e,t,r){},106:function(e,t,r){},107:function(e,t,r){},108:function(e,t,r){},109:function(e,t,r){},110:function(e,t,r){},111:function(e,t,r){},112:function(e,t,r){},113:function(e,t,r){},114:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),s=r(17),c=r.n(s),i=r(20),o=r(18),l=r(68),d=l.a.initializeApp({apiKey:"AIzaSyA4Z30Y4CWOEGeG3egt1zEUzmpX9-CBIY4",authDomain:"linkedin-clone-762fb.firebaseapp.com",projectId:"linkedin-clone-762fb",storageBucket:"linkedin-clone-762fb.appspot.com",messagingSenderId:"678009761776",appId:"1:678009761776:web:a64a33615daf5ade3f3735",measurementId:"G-DXL7T92Q00"}),u=d.firestore(),j=d.auth(),m=new l.a.auth.GoogleAuthProvider,b=r(44),p=r.n(b),h=(r(95),r(4)),O=function(e){var t=e.variant;return Object(h.jsxs)("p",{className:"logo logo--".concat(t),children:[Object(h.jsx)("span",{className:"logo__text",children:"Linked"}),Object(h.jsx)(p.a,{className:"logo__icon"})]})},f=(r(101),r(102),function(e){var t=e.formComponent,r=Object(o.g)();return Object(h.jsxs)("main",{className:"formLayout__container",children:[Object(h.jsx)(O,{variant:window.screen.width<281?"small":"medium"}),t,Object(h.jsx)("button",{className:"formLayout__signInGoogleButton",type:"button","aria-label":"Sign in with Google",onClick:function(){return function(e){var t=e.history;j.signInWithPopup(m).then((function(){return t.push("/feed")}))}({history:r})},children:Object(h.jsx)("img",{src:"data:image/png;base64,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",alt:"Sign in with google"})})]})}),x=r(148),v=(r(104),r(146)),g=r(21),w=Object(a.createContext)(void 0),N=function(e){var t=e.children,r=Object(a.useState)(),n=Object(g.a)(r,2),s=n[0],c=n[1];return Object(a.useEffect)((function(){return j.onAuthStateChanged((function(e){c(e||null)}))}),[]),Object(h.jsx)(w.Provider,{value:s,children:t})},E=function(){var e=Object(a.useContext)(w);return Object(h.jsx)(o.b,{path:"/",render:function(){return void 0===e?Object(h.jsx)(v.a,{}):e?Object(h.jsx)(o.a,{to:"/feed"}):Object(h.jsx)(o.a,{to:"/"})}})},S=function(e){var t=e.exact,r=e.path,n=e.component,s=Object(a.useContext)(w);return void 0===s?Object(h.jsx)(v.a,{}):s?Object(h.jsx)(o.b,{exact:t,path:r,component:n}):Object(h.jsx)(o.a,{to:"/"})};S.defaultProps={exact:!0,component:void 0};var D=r(32),k=r.n(D),C=r(46),y=r(35),I=r(30),A=r(147),P=function(e){var t=e.label,r=e.type,a=e.name,n=e.isError,s=e.errorText,c=e.value,i=e.className,o=e.onClick,l=e.onChange;return Object(h.jsx)(A.a,{variant:"standard",label:t,type:r,name:a,error:n,helperText:s,value:c,className:i,onClick:o,onChange:l,inputProps:{"data-testid":a}})};P.defaultProps={className:""};var Y=function(){var e=Object(C.a)(k.a.mark((function e(t){var r,a,n,s,c,i;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.email,a=t.password,n=t.name,s=t.history,c=t.setError,e.prev=1,e.next=4,j.createUserWithEmailAndPassword(r,a);case 4:return e.next=6,null===(i=j.currentUser)||void 0===i?void 0:i.updateProfile({displayName:n});case 6:s.push("/home"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),c({isError:!0,errorText:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(o.g)(),t=Object(a.useState)({name:"",password:"",repeatPassword:"",email:""}),r=Object(g.a)(t,2),n=r[0],s=r[1],c=Object(a.useState)({name:!1,email:!1,password:!1,repeatPassword:!1}),l=Object(g.a)(c,2),d=l[0],u=l[1],j=Object(a.useState)(!1),m=Object(g.a)(j,2),b=m[0],p=m[1],O=function(e){var t={isError:!1,errorText:""},r=Object(a.useState)(t),n=Object(g.a)(r,2),s=n[0],c=n[1];return{error:s,setError:c,validateForm:function(){var r=e.name,a=e.email,n=e.password,s=e.repeatPassword;return""===r.trim()||""===a.trim()||""===n.trim()||""===s.trim()?(c({isError:!0,errorText:"Fields can't be empty"}),!1):r.length<3||r.length>30?(c({isError:!0,errorText:"Nickname must be longer than 3 characters and shorter than 30 characters"}),!1):n.length<8?(c({isError:!0,errorText:"Password must be at least 8 characters"}),!1):n!==s?(c({isError:!0,errorText:"Passwords must match"}),!1):(c(t),!0)}}}(n),f=O.error,v=O.setError,w=O.validateForm,N=Object(a.useMemo)((function(){return function(e,t){return[{label:"Email",type:"email",name:"email",isError:""===e.email&&t.email,errorText:""===e.email&&t.email?"Email can't be empty":" ",value:e.email},{label:"Password",type:"password",name:"password",isError:""===e.password&&t.password,errorText:""===e.password&&t.password?"Password can't be empty":" ",value:e.password},{label:"Repeat password",type:"password",name:"repeatPassword",isError:""===e.repeatPassword&&t.repeatPassword,errorText:""===e.repeatPassword&&t.repeatPassword?"Repeat Password can't be empty":" ",value:e.repeatPassword},{label:"Nickname",type:"text",name:"name",isError:""===e.name&&t.name,errorText:""===e.name&&t.name?"Nickname can't be empty":" ",value:e.name}]}(n,d)}),[n,d]),E=function(e){var t=e.target,r=t.name,a=t.value;s(Object(I.a)(Object(I.a)({},n),{},Object(y.a)({},r,a)))},S=function(){var t=Object(C.a)(k.a.mark((function t(r){var a,s,c;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),p(!0),!w()){t.next=6;break}return a=n.email,s=n.password,c=n.name,t.next=6,Y({email:a,password:s,name:c,history:e,setError:v});case 6:p(!1);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"formLayout__form",children:[Object(h.jsx)("h1",{className:"formLayout__text",children:"Sign up"}),Object(h.jsxs)("form",{className:"form__container","data-testid":"signupForm",onSubmit:S,children:[N.map((function(e){var t=e.label,r=e.type,a=e.name,n=e.isError,s=e.errorText,c=e.value;return Object(h.jsx)(P,{label:t,type:r,name:a,isError:n,errorText:s,value:c,className:"form__input",onClick:function(e){return u(Object(I.a)(Object(I.a)({},d),{},Object(y.a)({},a,!0)))},onChange:E},a)})),f.isError&&Object(h.jsx)("p",{className:"form__error",children:f.errorText}),Object(h.jsx)(x.a,{variant:"contained",color:"primary",className:"form__submit",type:"submit",disabled:b,"datatest-id":"signup_button",children:"Register"})]}),Object(h.jsxs)("p",{className:"hint",children:["Already have an account?"," ",Object(h.jsx)(i.b,{className:"cta__button",to:"/signIn",children:"Sign in!"})]})]})},R=function(e){var t=e.email,r=e.password,a=e.setError,n=e.history;j.signInWithEmailAndPassword(t,r).then((function(){return n.push("/feed")})).catch((function(e){return a({isError:!0,errorText:e.message})}))},U=function(){var e=Object(o.g)(),t=Object(a.useState)({password:"",email:""}),r=Object(g.a)(t,2),n=r[0],s=r[1],c=Object(a.useState)({email:!1,password:!1}),l=Object(g.a)(c,2),d=l[0],u=l[1],j=Object(a.useState)(!1),m=Object(g.a)(j,2),b=m[0],p=m[1],O=function(e){var t={isError:!1,errorText:""},r=Object(a.useState)(t),n=Object(g.a)(r,2),s=n[0],c=n[1];return{error:s,setError:c,validateForm:function(){var r=e.email,a=e.password;return""===r.trim()||""===a.trim()?(c({isError:!0,errorText:"Fields can't be empty"}),!1):(c(t),!0)}}}(n),f=O.error,v=O.setError,w=O.validateForm,N=Object(a.useMemo)((function(){return function(e,t){return[{label:"E-mail",type:"email",name:"email",isError:""===e.email&&t.email,errorText:""===e.email&&t.email?"Email can't be empty":" ",value:e.email},{label:"Password",type:"password",name:"password",isError:""===e.password&&t.password,errorText:""===e.password&&t.password?"Password can't be empty":" ",value:e.password}]}(n,d)}),[n,d]),E=function(e){var t=e.target,r=t.name,a=t.value;s(Object(I.a)(Object(I.a)({},n),{},Object(y.a)({},r,a)))},S=function(){var t=Object(C.a)(k.a.mark((function t(r){var a,s;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),p(!0),!w()){t.next=6;break}return a=n.email,s=n.password,t.next=6,R({email:a,password:s,setError:v,history:e});case 6:p(!1);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"formLayout__form",children:[Object(h.jsx)("h1",{className:"formLayout__text",children:"Sign in"}),Object(h.jsxs)("form",{className:"form__container",onSubmit:S,children:[N.map((function(e){var t=e.label,r=e.type,a=e.name,n=e.isError,s=e.errorText,c=e.value;return Object(h.jsx)(P,{label:t,type:r,name:a,isError:n,errorText:s,className:"form__input",onClick:function(e){u(Object(I.a)(Object(I.a)({},d),{},Object(y.a)({},a,!0)))},value:c,onChange:E},a)})),f.isError&&Object(h.jsx)("p",{className:"form__error",children:f.errorText}),Object(h.jsx)(x.a,{"data-testid":"signin_button",className:"form__submit",variant:"contained",color:"primary",disabled:b,type:"submit",children:"Sign in"})]}),Object(h.jsxs)("p",{className:"hint",children:["Don't have an account?",Object(h.jsx)(i.b,{to:"/signUp",className:"cta__button",children:"Sign up!"})]})]})},B=r(76),T=r.n(B),q=(r(106),function(e){var t=e.hint;return Object(h.jsx)(i.b,{className:"searchHint__link",to:"/profile/".concat(t),children:Object(h.jsx)("li",{className:"searchHint",children:t})})}),H=(r(107),function(e){var t=e.testid,r=e.getHints,n=Object(a.useState)(""),s=Object(g.a)(n,2),c=s[0],i=s[1],o=Object(a.useState)([]),l=Object(g.a)(o,2),d=l[0],u=l[1];return Object(a.useEffect)((function(){r&&r(u,c)}),[c]),Object(h.jsxs)("div",{className:"search","data-testid":t,children:[Object(h.jsxs)("div",{className:"search__container",children:[Object(h.jsx)(T.a,{className:"search__icon"}),Object(h.jsx)("input",{value:c,onChange:function(e){return i(e.target.value)},"data-testid":"".concat(t,"Input"),placeholder:"Search...",className:"search__input",type:"text"})]}),Object(h.jsx)("ul",{className:"search__hints",children:d.map((function(e){return Object(h.jsx)(q,{hint:e},e)}))})]})});H.defaultProps={testid:void 0};var z=r(149),_=function(){j.signOut().catch((function(e){return console.log(e.message)}))},F=(r(108),function(e){var t=e.testid,r=Object(a.useContext)(w),n=Object(o.g)();return Object(h.jsxs)("ul",{className:"headerDropdown","data-testid":t,children:[Object(h.jsx)("li",{className:"headerDropdown__listItem",children:Object(h.jsx)(z.a,{src:(null===r||void 0===r?void 0:r.photoURL)||""})}),Object(h.jsx)("li",{className:"headerDropdown__listItem",children:Object(h.jsx)("p",{children:(null===r||void 0===r?void 0:r.displayName)||"User"})}),Object(h.jsx)("li",{className:"headerDropdown__listItem",children:Object(h.jsx)(x.a,{"data-testid":"".concat(t,"ViewProfile"),onClick:function(){return n.push("/myProfile")},className:"headerDropdown__button",variant:"outlined",color:"primary",children:"View Profile"})}),Object(h.jsx)("li",{className:"headerDropdown__listItem",children:Object(h.jsx)(x.a,{onClick:_,"data-testid":"".concat(t,"SignOut"),className:"headerDropdown__button",variant:"outlined",children:"Sign Out"})})]})});F.defaultProps={testid:void 0};var J=r(77),K=r.n(J),X=r(78),G=r.n(X),M=r(79),Z=r.n(M),W=[{path:"/feed",icon:K.a,title:"Home"},{path:"/network",icon:G.a,title:"My Network"},{path:"/notifications",icon:Z.a,title:"Notifications"},{path:"",icon:z.a,title:"Me\u25bc"}],Q=(r(109),function(e){var t,r=e.DropdownOpener,n=e.children,s=Object(a.useState)(!1),c=Object(g.a)(s,2),i=c[0],o=c[1],l=Object(a.useRef)();return t=l,Object(a.useEffect)((function(){i&&document.addEventListener("click",(function e(r){t.current&&!t.current.contains(r.target)&&(o(!1),document.removeEventListener("click",e))}))}),[i,t]),Object(h.jsxs)("div",{className:"dropdown",children:[Object(h.jsx)("div",{className:"dropdown__opener",onClick:function(){return o(!0)},onKeyDown:function(){return o(!0)},role:"button",tabIndex:0,children:r}),i&&Object(h.jsx)("div",{ref:l,className:"dropdown__container",children:n})]})}),V=r(80),$=r.n(V),ee=(r(110),function(e){var t=e.Icon,r=e.title,n=e.path,s=e.testid,c=Object(o.h)(),i=Object(a.useContext)(w);return Object(h.jsxs)("div",{"data-testid":s,className:$()("navigationIcon",{"navigationIcon--active":n===c.pathname}),children:[Object(h.jsx)(t,{className:"navigationIcon__icon",src:null===i||void 0===i?void 0:i.photoURL}),Object(h.jsx)("p",{className:"navigationIcon__title",children:r})]})});ee.defaultProps={path:"",testid:void 0};r(111);var te=function(e){var t=e.testid;return Object(h.jsx)("nav",{className:"navigation","data-testid":t,children:Object(h.jsx)("ul",{className:"navigation__wrapper",children:W.map((function(e){var r=e.title,a=e.path,n=e.icon;return Object(h.jsx)("li",{children:a?Object(h.jsx)(i.b,{className:"navigation__link",to:a,children:Object(h.jsx)(ee,{testid:"".concat(t,"Link").concat(r),title:r,path:a,Icon:n})}):Object(h.jsx)(Q,{DropdownOpener:Object(h.jsx)(ee,{testid:"".concat(t,"DropdownOpener"),title:r,Icon:n}),children:Object(h.jsx)(F,{testid:"".concat(t,"Dropdown")})})},a)}))})})};te.defaultProps={testid:void 0};r(112);var re=function(e,t){u.collection("users").orderBy("displayName","asc").onSnapshot((function(r){e(r.docs.map((function(e){return e.data().displayName})).filter((function(e){return e.startsWith(t)&&t})).slice(0,5))}))},ae=function(e){var t=e.testid;return Object(h.jsxs)("header",{className:"header","data-testid":t,children:[Object(h.jsxs)("div",{className:"header__search",children:[Object(h.jsx)(p.a,{color:"primary",className:"header__logo"}),Object(h.jsx)(H,{testid:"searchHeader",getHints:re})]}),Object(h.jsx)(te,{testid:"navigationHeader"})]})};ae.defaultProps={testid:void 0};var ne=[Object(h.jsx)(o.b,{exact:!0,path:"/",component:function(){return Object(h.jsx)("main",{className:"welcomePage",children:Object(h.jsxs)("section",{className:"hero",children:[Object(h.jsxs)("h1",{className:"hero__title",children:[Object(h.jsx)("span",{children:"Linked"}),Object(h.jsx)(p.a,{className:"hero__icon"})]}),Object(h.jsx)("h2",{className:"hero__sub-title",children:"Welcome to your professional community"}),Object(h.jsxs)("div",{className:"hero__links",children:[Object(h.jsx)(i.b,{className:"hero__link",to:"/signIn",children:Object(h.jsx)(x.a,{"data-testid":"signIn",className:"primary",variant:"outlined",color:"primary",size:"large",children:"Sign in"})}),Object(h.jsx)(i.b,{className:"hero__link",to:"/signUp",children:Object(h.jsx)(x.a,{"data-testid":"signUp",className:"secondary",variant:"contained",color:"primary",size:"large",children:"Sign up"})})]})]})})}}),Object(h.jsx)(o.b,{exact:!0,path:"/signUp",render:function(){return Object(h.jsx)(f,{formComponent:Object(h.jsx)(L,{})})}}),Object(h.jsx)(o.b,{exact:!0,path:"/signIn",render:function(){return Object(h.jsx)(f,{formComponent:Object(h.jsx)(U,{})})}}),Object(h.jsx)(S,{path:"/feed",component:ae}),Object(h.jsx)(S,{exact:!0,path:"/network"}),Object(h.jsx)(S,{exact:!0,path:"/notification"}),Object(h.jsx)(S,{path:"/user/:ownerUid"}),Object(h.jsx)(E,{})],se=(r(113),function(){return Object(h.jsx)(i.a,{children:Object(h.jsx)(o.d,{children:ne})})});c.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(N,{children:Object(h.jsx)(se,{})})}),document.getElementById("root"))},95:function(e,t,r){}},[[114,1,2]]]);
//# sourceMappingURL=main.e20f2a0d.chunk.js.map
(function(t){function e(e){for(var r,s,l=e[0],o=e[1],c=e[2],d=0,m=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&m.push(n[s][0]),n[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,l=1;l<a.length;l++){var o=a[l];0!==n[o]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},i=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/Educational/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"56d7":function(t,e,a){"use strict";a.r(e);var r=a("2b0e"),n=a("1dce"),i=a.n(n),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view"),a("FooterComponent")],1)},l=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"text-secondary"},[a("b-container",{staticClass:"py-3 text-center"},[a("b-row",[a("div",{staticClass:"col"},[t._v("Авторское право © 2020-"+t._s(t.year.getFullYear())+". Все права защищены.")])])],1)],1)},c=[],u={data(){return{year:new Date}}},d=u,m=a("2877"),b=Object(m["a"])(d,o,c,!1,null,null,null),p=b.exports,f={components:{FooterComponent:p}},v=f,h=(a("034f"),Object(m["a"])(v,s,l,!1,null,null,null)),g=h.exports,x=(a("e792"),a("0cdd"),a("5f5b"));a("ab8b"),a("2dd8");r["default"].use(x["a"]);a("1f54");var _=a("8c4f"),$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("HomeWrap"),a("NavHeader"),a("OurAdvantages"),a("ForWhom"),a("QuestionsComponent"),a("FeedbackComponent")],1)},y=[],C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"paralax"},[a("div",{staticClass:"paralax__bg__color d-flex text-center"},[a("b-container",{staticClass:"align-self-center text-white"},[a("b-row",[a("b-col",[t._v(" Добро пожаловать на сайт ")])],1),a("b-row",[a("b-col",[a("h1",{staticClass:"text-monospace font-weight-bold my-3"},[t._v("EduDigital")])])],1),a("b-row",{staticClass:"mb-5"},[a("b-col",[t._v(" проект для тестирования разработан для учебных заведений")])],1),a("b-col",[a("b-button",{attrs:{pill:"",variant:"outline-light"}},[t._v("Присоединиться")])],1)],1)],1)])},w=[],k={},O=Object(m["a"])(k,C,w,!1,null,null,null),j=O.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"sticky-top"},[a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[a("b-container",[a("b-navbar-brand",{attrs:{href:"#"}},[a("img",{attrs:{src:"logo.svg",width:"36"}}),t._v(" EduDigital")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"ml-auto text-center"},[a("b-nav-item",{staticClass:"ml-3 mr-3",attrs:{href:"#"}},[t._v("Регистрация")]),a("b-nav-item",{staticClass:"ml-3 mr-3",attrs:{href:"#"}},[t._v("Авторизация")]),a("b-nav-item",{staticClass:"ml-3 mr-3",attrs:{href:"#"}},[t._v("О проекте")])],1)],1)],1)],1)],1)},S=[],q={},F=Object(m["a"])(q,E,S,!1,null,null,null),M=F.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"pb-5 pt-5"},[a("b-row",{staticClass:"pb-5 text-center"},[a("b-col",[a("h1",{staticClass:"font-weight-bold"},[t._v("Наши преимущества")])])],1),a("b-row",{staticClass:"text-center"},t._l(t.benefits,(function(e){return a("b-col",{key:e.icon,attrs:{md:"4"}},[a("i",{staticClass:"fa fa-3x",class:e.icon}),a("h4",[t._v(t._s(e.title))]),a("p",[t._v(" "+t._s(e.description)+" ")])])})),1)],1)},L=[],N={data(){return{benefits:[{icon:"fa-globe",title:"Глобальность",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur\n          laborum voluptate iure fuga saepe unde enim quibusdam ea eos rerum\n          debitis, tempore cumque distinctio, temporibus inventore obcaecati\n          suscipit exercitationem doloremque."},{icon:"fa-heart",title:"Простота",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores\n          aspernatur, at dignissimos velit veritatis ipsam modi fuga praesentium\n          nemo a sapiente architecto eligendi perspiciatis id voluptatem nostrum\n          alias temporibus."},{icon:"fa-mouse-pointer",title:"Скорость",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero\n          quaerat nihil cupiditate dolorum dolor assumenda minus necessitatibus\n          soluta voluptas? Excepturi minima ullam, laudantium ratione id\n          consequatur quasi? Ab, veritatis rem?"}]}}},D=N,T=Object(m["a"])(D,P,L,!1,null,null,null),A=T.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"mb-5"},[a("b-row",{staticClass:"text-center mb-5 mt-5"},[a("b-col",[a("h1",{staticClass:"font-weight-bold"},[t._v("Кому подходит?")])])],1),a("b-card-group",{attrs:{deck:""}},t._l(t.institutions,(function(e){return a("b-card",{key:e.title,attrs:{title:e.title,"img-src":e.src,"img-alt":e.title,"img-top":"","img-height":"250px"}},[a("b-card-text",[t._v(" "+t._s(e.text)+" ")])],1)})),1)],1)},W=[],J={data(){return{institutions:[{title:"Школы",src:"img/school.webp",text:"Наш сервис имеет достаточно функционала для бесплатной версии\n          большинства учреждений"},{title:"ВУЗы",src:"img/university.webp",text:"Учебные учреждения могут полностью контролировать своих учащихся по\n          успеваемости"},{title:"Колледжи",src:"img/college.jpeg",text:"Возможность создавать свои собственные тесты, и контролировать много\n          аспектов"}]}}},Q=J,z=Object(m["a"])(Q,H,W,!1,null,null,null),V=z.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"mb-5"},[a("b-row",{staticClass:"text-center pb-5"},[a("b-col",[a("h1",{staticClass:"font-weight-bold mt-5"},[t._v(" Почему такое тестирование эффективно? ")])])],1),t._l(t.questions,(function(e){return a("b-row",{key:e._id,staticClass:"mt-3"},[e._id%2==0?[a("b-col",{staticClass:"text-center",attrs:{cols:"12",md:"6","order-md":"2"}},[a("b-img",{attrs:{src:e.img,width:"325",height:"250"}})],1),a("b-col",{attrs:{cols:"12",md:"6"}},[a("h1",{staticClass:"mb-3 text-md-left text-center"},[t._v(t._s(e.title))]),t._v(" "+t._s(e.text)+" ")])]:[a("b-col",{staticClass:"text-center",attrs:{cols:"12",md:"6"}},[a("b-img",{attrs:{src:e.img,width:"325",height:"250"}})],1),a("b-col",{attrs:{cols:"12",md:"6"}},[a("h1",{staticClass:"mb-3 text-md-left text-center"},[t._v(t._s(e.title))]),t._v(" "+t._s(e.text)+" ")])]],2)}))],2)},B=[],G={data(){return{questions:[{_id:1,title:"Экономия времени",text:"Сейчас можно создать целую базу вопросов и сохранить их, чтобы\n          использовать в дальнейшем. Не нужно писать отдельный тест для каждого\n          курса — вы можете создать экзамен просто выбирая вопросы из уже\n          созданной базы или воспользоваться шаблоном, который будет легко\n          изменить для каждого нового курса.",img:"img/1.svg"},{_id:2,title:"Мгновенные результаты",text:"Кроме того очень полезной оказывается автоматическая система подсчета\n          баллов. А какой простой может быть аналитика! Вы можете легко\n          определить, кому из учащихся требуются ваша помощь. Согласитесь, это\n          сохранит вам немало времени и нервов. Наша система может помочь Вам\n          выбрать дизайн для определённых тестов.",img:"img/2.svg"},{_id:3,title:"Точное оценивание",text:"В отличии от других методов оценивания, такой является более\n          эфективным и точным. У устных оцениях обычно принимают 2-4 темы, а в\n          письменных 4-5. С таким количество тем не всегда удаётся выяснить на\n          сколько учащийся знает предмет учителя. В то время, как тест, может\n          состоять из несколько вопросов, но содержать большинство тем.",img:"img/3.svg"}]}}},I=G,K=Object(m["a"])(I,Y,B,!1,null,null,null),R=K.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"align-self-center text-center mb-5"},[a("b-row",{staticClass:"justify-content-center pb-3"},[a("b-col",{attrs:{md:"6",cols:"12"}},[a("h1",[t._v("Ещё остались вопросы?")])])],1),t.isShow?[a("b-row",{staticClass:"justify-content-center"},[a("b-col",{attrs:{md:"6",cols:"12"}},[a("p",[t._v(" Оставьте свои контактные данные, для того, чтобы мы смогли с Вами связаться ")])])],1),a("b-row",{staticClass:"justify-content-center pb-4"},[a("b-col",{attrs:{cols:"12",md:"6"}},[a("div",[a("b-form",{on:{submit:function(e){return e.preventDefault(),t.sendMess()}}},[a("b-form-group",[a("b-form-input",{attrs:{type:"text",placeholder:"Ваше имя...","aria-describedby":"input-feedback-name",state:t.validateStateName("name")},model:{value:t.$v.name.$model,callback:function(e){t.$set(t.$v.name,"$model","string"===typeof e?e.trim():e)},expression:"$v.name.$model"}}),a("b-form-invalid-feedback",{staticClass:"text-left",attrs:{id:"input-feedback-name"}},[t._v(" Это поле является обязательным ")])],1),a("b-form-group",[a("b-form-input",{attrs:{placeholder:"Ваш email...","aria-describedby":"input-feedback-email",type:"email",state:t.validateStateEmail("email")},model:{value:t.$v.email.$model,callback:function(e){t.$set(t.$v.email,"$model","string"===typeof e?e.trim():e)},expression:"$v.email.$model"}}),a("b-form-invalid-feedback",{staticClass:"text-left",attrs:{id:"input-feedback-email"}},[t._v(" Это поле должно быть email и обязательным ")])],1),a("b-form-textarea",{attrs:{placeholder:"Ваши вопросы...","aria-describedby":"input-feedback-text",rows:"6","no-resize":"",state:t.validateStateText("text")},model:{value:t.$v.text.$model,callback:function(e){t.$set(t.$v.text,"$model","string"===typeof e?e.trim():e)},expression:"$v.text.$model"}}),a("b-form-invalid-feedback",{staticClass:"text-left",attrs:{id:"input-feedback-text"}},[t._v(" Это поле является обязательным и быть не более 1024 символов ")]),a("div",{staticClass:"mt-3"},[a("b-button",{attrs:{type:"submit",block:"",variant:"secondary",disabled:t.$v.$anyError},on:{click:function(e){return e.preventDefault(),t.sendMess(e)}}},[t._v("Отправить")])],1)],1)],1)])],1)]:t.error?[a("b-alert",{attrs:{show:"",variant:"danger"}},[a("h4",{staticClass:"alert-heading"},[t._v("Ошибка!")]),a("p",[t._v("Внимание! Возникла ошибка, вернитесь на сайт чуть позже!")])])]:[a("b-alert",{attrs:{show:"",variant:"success"}},[a("h4",{staticClass:"alert-heading"},[t._v("Спасибо за сообщение!")]),a("p",[t._v("Мы постараемся связаться с Вами в ближайшее время!")])])]],2)},X=[],Z=a("2106"),tt=a.n(Z),et=a("bc3a"),at=a.n(et),rt=a("b5ae");r["default"].use(tt.a,at.a);var nt={mixins:[n["validationMixin"]],data(){return{name:null,email:null,text:null,isShow:!0,error:!1}},validations:{name:{required:rt["required"]},email:{email:rt["email"],required:rt["required"]},text:{required:rt["required"],maxLength:Object(rt["maxLength"])(1024)}},methods:{validateStateName(){const{$dirty:t,$error:e}=this.$v.name;return t?!e:null},validateStateEmail(){const{$dirty:t,$error:e}=this.$v.email;return t?!e:null},validateStateText(){const{$dirty:t,$error:e}=this.$v.text;return t?!e:null},sendMess(){this.$v.$touch(),this.$v.$anyError||at.a.post("http://localhost:3000/api/email/send",{email:this.email,text:this.text,name:this.name}).then(t=>{console.log("response.JSON:",t.data),this.isShow=!1}).catch(t=>{t.res?this.$v.$touch():t.request&&(this.isShow=!1,this.error=!0,console.log("error"))})}}},it=nt,st=Object(m["a"])(it,U,X,!1,null,null,null),lt=st.exports,ot={components:{HomeWrap:j,NavHeader:M,OurAdvantages:A,ForWhom:V,QuestionsComponent:R,FeedbackComponent:lt}},ct=ot,ut=(a("cccb"),Object(m["a"])(ct,$,y,!1,null,null,null)),dt=ut.exports;r["default"].use(_["a"]);const mt=[{path:"/",component:dt}],bt=new _["a"]({mode:"history",base:"/Educational/",routes:mt});var pt=bt;r["default"].component("VueFontawesome",a("150d").default),r["default"].use(i.a),r["default"].config.productionTip=!1,r["default"].config.devtools=!0,new r["default"]({router:pt,render:t=>t(g)}).$mount("#app")},"5ced":function(t,e,a){},"85ec":function(t,e,a){},cccb:function(t,e,a){"use strict";a("5ced")}});
//# sourceMappingURL=app.37752f6e.js.map
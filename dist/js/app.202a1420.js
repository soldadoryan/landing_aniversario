(function(t){function a(a){for(var s,r,n=a[0],c=a[1],l=a[2],d=0,f=[];d<n.length;d++)r=n[d],i[r]&&f.push(i[r][0]),i[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(a);while(f.length)f.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],s=!0,n=1;n<e.length;n++){var c=e[n];0!==i[c]&&(s=!1)}s&&(o.splice(a--,1),t=r(r.s=e[0]))}return t}var s={},i={app:0},o=[];function r(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=s,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)r.d(e,s,function(a){return t[a]}.bind(null,s));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=a,n=n.slice();for(var l=0;l<n.length;l++)a(n[l]);var u=c;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"036c":function(t,a,e){},"0375":function(t,a,e){},"0596":function(t,a,e){},"0faf":function(t,a,e){},"1ad9":function(t,a,e){},"1f9d":function(t,a,e){},"2d0c":function(t,a,e){"use strict";var s=e("6957"),i=e.n(s);i.a},"3b3f":function(t,a,e){},"4a31":function(t,a,e){"use strict";var s=e("ba18"),i=e.n(s);i.a},"50ba":function(t,a,e){"use strict";var s=e("f87b"),i=e.n(s);i.a},5452:function(t,a,e){"use strict";var s=e("0596"),i=e.n(s);i.a},"566e":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("f751"),e("097d");var s=e("2b0e"),i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"login"}},[s("form-custom",{attrs:{"id-form":"form_login","evento-submit":"login",img:e("cf05"),"alt-img":"Logo Cotemig","value-submit":"Acessar portal"}},[s("input-custom",{attrs:{cname:"matricula",ctype:"text",cplaceholder:"Matrícula"}}),s("input-custom",{attrs:{cname:"senha",ctype:"password",cplaceholder:"Senha"}})],1)],1)},o=[],r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("form",{staticClass:"shadow",attrs:{id:t.idForm},on:{submit:function(a){return a.preventDefault(),t.switchSubmit(t.eventoSubmit)}}},[t.img?e("img",{attrs:{src:t.img,alt:t.altImg}}):t._e(),t.titulo?e("h2",[t._v(t._s(t.titulo))]):t._e(),t._m(0),t._t("default"),e("input",{staticClass:"shadow",attrs:{type:"submit"},domProps:{value:t.valueSubmit}})],2)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"shadow wrap-result flipInX"},[e("i",{staticClass:"fas fa-times"}),e("span",{attrs:{id:"result"}})])}],c={name:"form-custom",props:{idForm:{type:String},img:{type:String},altImg:{type:String},titulo:{type:String},valueSubmit:{type:String},eventoSubmit:{type:String}},methods:{switchSubmit:function(t){switch(t){case"login":this.validarLogin();break;default:console.log("Submit não encontrado!");break}},validarLogin:function(){var t=$("#form_login input[name='matricula']").val(),a=$("#form_login input[name='senha']").val();$.ajax({type:"GET",url:"https://api.cotemig.com.br/v1/perfil",headers:{Authorization:"Basic "+btoa(t+":"+a)},success:function(t){sessionStorage.setItem("matricula",t.usuario),sessionStorage.setItem("senha",a),sessionStorage.setItem("nome",t.nome),window.location="/portal"},error:function(t,a,e){$("span#result").text(t.responseJSON.detalhes),$(".wrap-result").addClass("danger"),$(".wrap-result").fadeIn()}})}}},l=c,u=(e("f389"),e("2877")),d=Object(u["a"])(l,r,n,!1,null,null,null),f=d.exports,m=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrap-field"},[t.clabel?e("label",[t._v(t._s(t.clabel))]):t._e(),e("input",{staticClass:"shadow",attrs:{type:t.ctype,name:t.cname,placeholder:t.cplaceholder},domProps:{value:t.cvalue}})])},p=[],v={name:"input-custom",props:{ctype:{type:String},cname:{type:String},cplaceholder:{type:String},cvalue:{type:String},clabel:{type:String}},components:{}},b=v,h=(e("2d0c"),Object(u["a"])(b,m,p,!1,null,null,null)),g=h.exports,_={name:"Login",props:{},components:{"form-custom":f,"input-custom":g}},k=_,C=(e("50ba"),Object(u["a"])(k,i,o,!1,null,null,null)),S=C.exports,w=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h2",[t._v("Pagina 404")])},y=[],x={name:"Erro404",props:{msg:{type:String,default:"Erro 404"}}},O=x,A=Object(u["a"])(O,w,y,!1,null,null,null),j=A.exports,E=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"home_portal"}},[e("header-custom"),e("quadro-de-avisos")],1)},I=[],D=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"header"},[s("faixa",{attrs:{"ultimo-acesso":t.puser.ultimoAcesso,socials:[{link:"https://instagram.com",icone:"fab fa-instagram"},{link:"https://facebook.com",icone:"fab fa-facebook"},{link:"https://linkedin.com",icone:"fab fa-linkedin"},{link:"https://twitter.com",icone:"fab fa-twitter"}]}}),s("topbar",{attrs:{logo:e("db0a"),nomeUsuario:t.puser.nome,"imagem-usuario":t.puser.fotoPerfilURL}}),s("sidebar-menu",{attrs:{titulo:"Serviços on-line:"}},t._l(t.permissoes,function(a,e){return a?s("item-sidebar-menu",{key:e,attrs:{"link-menu":t._f("toLink")(e),"legenda-menu":t._f("toLegenda")(e)}}):t._e()}),1)],1)},q=[],M=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"shadow",attrs:{id:"topbar"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-2"},[e("img",{staticClass:"logo",attrs:{src:t.logo,alt:"Logo"}})]),e("div",{staticClass:"col-lg-10 text-right"},[e("div",{staticClass:"link-menu",on:{click:function(a){return t.toggleMenu()}}},[e("i",{staticClass:"fas fa-bars"}),t._v(" SERVIÇOS ON-LINE\n                ")]),e("div",{staticClass:"opcoes-usuario"},[e("img",{attrs:{src:t.imagemUsuario,alt:"Imagem usuário"}}),t._v("\n                    "+t._s(t.nomeUsuario)+" "),e("i",{staticClass:"fas fa-caret-down"})])])])])])},P=[],L={name:"Topbar",data:function(){return{toggleM:!1,toggleOpc:!1}},props:{logo:{type:String,default:e("db0a")},nomeUsuario:{type:String,default:""},imagemUsuario:{type:String,default:""}},methods:{toggleMenu:function(){this.toggleM?(this.toggleM=!1,$("#menu").fadeOut()):(this.toggleM=!0,$("#menu").fadeIn())},toggleOpcoesUsuario:function(){this.toggleOpc?(this.toggleOpc=!1,$("#menu").fadeOut()):(this.toggleOpc=!0,$("#menu").fadeIn())}},components:{}},T=L,z=(e("fb46"),Object(u["a"])(T,M,P,!1,null,null,null)),B=z.exports,F=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{attrs:{id:"faixa"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[t._v("\n                Último acesso: "+t._s(t.ultimoAcesso)+"\n            ")]),e("div",{staticClass:"col-lg-6 text-right"},[e("ul",{staticClass:"socials"},t._l(t.socials,function(t){return e("li",[e("a",{attrs:{href:t.link}},[e("i",{class:t.icone})])])}),0)])])])])},H=[],U={name:"Faixa",props:{socials:Array,ultimoAcesso:String},methods:{},components:{}},G=U,N=(e("f0cd"),Object(u["a"])(G,F,H,!1,null,null,null)),J=N.exports,R=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"shadow",attrs:{id:"menu"}},[e("h2",[t._v(t._s(t.titulo))]),t._t("default")],2)},Q=[],V={name:"SidebarMenu",props:{titulo:String}},X=V,K=(e("6b94"),Object(u["a"])(X,R,Q,!1,null,null,null)),W=K.exports,Y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("a",{attrs:{href:t.linkMenu}},[t._v(t._s(t.legendaMenu))])])},Z=[],tt={name:"ItemSidebarMenu",props:{linkMenu:String,legendaMenu:String}},at=tt,et=(e("baed"),Object(u["a"])(at,Y,Z,!1,null,null,null)),st=et.exports,it={name:"Header",components:{topbar:B,faixa:J,"sidebar-menu":W,"item-sidebar-menu":st},data:function(){return{matricula:sessionStorage.getItem("matricula"),senha:sessionStorage.getItem("senha"),puser:"",permissoes:""}},mounted:function(){null==sessionStorage.getItem("matricula")&&(window.location="/");var t=this;$.ajax({type:"GET",url:"https://api.cotemig.com.br/v1/perfil",headers:{Authorization:"Basic "+btoa(this.matricula+":"+this.senha)},success:function(a){t.retraindoDados(a)}})},filters:{toLink:function(t){if(!t)return"";var a="/";switch(t){case"arquivos":a+="area-de-arquivos";break;case"arquivosdownload":a+="download-de-arquivos";break;case"atualizarsenha":a+="atualizar-dados-pessoais";break;case"aulas":a+="aulas";break;case"avisos":a+="quadro-de-avisos";break;case"boletim":a+="notas-e-faltas";break;case"boletos":a+="segunda-via-boletos";break;case"config":a+="configuracao";break;case"declaracoes":a+="declaracoes";break;case"declaracoesemitidas":a+="historico-de-declaracoes";break;case"diariodatas":a+="diario-de-datas";break;case"diariofrequencia":a+="frequencia";break;case"diarios":a+="diarios";break;case"estagios":a+="estagios";break;case"historico":a+="historico";break;case"horario":a+="horario";break;case"laboratorio":a+="laboratorio";break;case"perfil":a+="perfil";break;case"rede":a+="rede";break;case"sobre":a+="sobre";break}return a},toLegenda:function(t){if(!t)return"";var a;switch(t){case"arquivos":a="Área de arquivos";break;case"arquivosdownload":a="Download de arquivos";break;case"atualizarsenha":a="Atualizar dados pessoais";break;case"aulas":a="Aulas";break;case"avisos":a="Quadro de avisos";break;case"boletim":a="Notas";break;case"boletos":a="2ª via de boletos";break;case"config":a="Configuração";break;case"declaracoes":a="Declarações";break;case"declaracoesemitidas":a="Histórico de declarações";break;case"diariodatas":a="Diário de datas";break;case"diariofrequencia":a="Frenquência";break;case"diarios":a="Diários";break;case"estagios":a="Estágio";break;case"historico":a="Histórico";break;case"horario":a="Horário";break;case"laboratorio":a="Laboratório";break;case"perfil":a="Perfil";break;case"rede":a="Rede";break;case"sobre":a="Sobre";break}return a}},props:{},methods:{retraindoDados:function(t){this.puser=t,this.permissoes=t.permissoes,sessionStorage.setItem("grupo_usuario",this.puser.grupo)}}},ot=it,rt=(e("5452"),Object(u["a"])(ot,D,q,!1,null,null,null)),nt=rt.exports,ct=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{attrs:{id:"quadro_avisos"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},t._l(t.avisos,function(t){return e("aviso",{key:t.id,attrs:{conteudo:t.conteudo,titulo:t.titulo,data:t.data,autor:t.autor}})}),1)])])},lt=[],ut=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-lg-6",attrs:{title:t.titulo}},[e("article",{staticClass:"shadow"},[e("h3",[t._v(t._s(t.titulo))]),e("b",[t._v(t._s(t.data)+" por "+t._s(t.autor))]),e("div",{staticClass:"conteudo",domProps:{innerHTML:t._s(t.conteudo)}})])])},dt=[],ft={name:"Aviso",props:{titulo:String,conteudo:String,data:String,autor:String}},mt=ft,pt=(e("d6ba"),Object(u["a"])(mt,ut,dt,!1,null,null,null)),vt=pt.exports,bt={name:"QuadroAvisos",data:function(){return{matricula:sessionStorage.getItem("matricula"),senha:sessionStorage.getItem("senha"),avisos:""}},mounted:function(){var t=this;$.ajax({type:"GET",url:"https://api.cotemig.com.br/v1/avisos",headers:{Authorization:"Basic "+btoa(this.matricula+":"+this.senha)},success:function(a){t.retrairAvisos(a)},error:function(t,a,e){console.log(t)}})},methods:{retrairAvisos:function(t){this.avisos=t,console.log(this.avisos)}},components:{aviso:vt}},ht=bt,gt=(e("acfb"),Object(u["a"])(ht,ct,lt,!1,null,null,null)),_t=gt.exports,kt={name:"HomePortal",components:{"header-custom":nt,"quadro-de-avisos":_t}},Ct=kt,St=(e("c1c5"),Object(u["a"])(Ct,E,I,!1,null,null,null)),wt=St.exports,yt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"area_arquivos"}},[e("header-custom"),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("diretorios")],1)])])],1)},xt=[],Ot=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"shadow",attrs:{id:"diretorios"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("h2",[e("i",{staticClass:"far fa-folder-open"}),t._v(" "+t._s(t.caminhoAtual))]),"/ Aluno Faculdade"!=t.caminhoAtual?e("button",{staticClass:"btn-out",on:{click:function(a){return t.openItem(t.caminhoAnterior,!0)}}},[t._m(0),t._v("\n                    Sair da pasta\n                ")]):t._e(),e("div",{staticClass:"wrap-list-diretorios row align-items-center"},t._l(t.itens.arvore,function(a){return e("item-diretorio",{attrs:{titulo:a.nome,"is-dir":a.diretorio},nativeOn:{click:function(e){return t.openItem(a.nome,a.diretorio)}}})}),1)])])])])},$t=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"fa-stack"},[e("i",{staticClass:"fas fa-folder fa-2x"}),e("i",{staticClass:"fas fa-arrow-up fa-stack-1x",staticStyle:{color:"#fff"}})])}],At=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"item-diretorio col-lg-3"},[e("div",{staticClass:"titulo-dir"},[t.isDir?e("i",{staticClass:"fas fa-folder"}):t._e(),t.isDir?t._e():e("i",{staticClass:"fas fa-file"}),e("span",[t._v(t._s(t.titulo))])])])},jt=[],Et={name:"ItemDiretorio",props:{titulo:{type:String},isDir:{type:Boolean}}},It=Et,Dt=(e("b636"),Object(u["a"])(It,At,jt,!1,null,null,null)),qt=Dt.exports,Mt={name:"Diretorios",components:{"item-diretorio":qt},data:function(){return{matricula:sessionStorage.getItem("matricula"),senha:sessionStorage.getItem("senha"),itens:"",caminhoAnterior:"",caminhoAtual:"/ Aluno Faculdade"}},mounted:function(){var t=this;$.ajax({type:"GET",url:"https://api.cotemig.com.br/v1/arquivos",headers:{Authorization:"Basic "+btoa(this.matricula+":"+this.senha)},success:function(a){t.retrairDiretorios(a)}})},filters:{checkHome:function(t){return"/"==t?sessionStorage.getItem("grupo_usuario"):t}},methods:{retrairDiretorios:function(t){this.itens=t},openItem:function(t,a){if(a){"/ Aluno Faculdade"==t&&(t="/");var e=this;e.caminhoAnterior=e.caminhoAtual,e.caminhoAtual+=" / "+t,$.ajax({type:"GET",url:"https://api.cotemig.com.br/v1/arquivos/"+t,headers:{Authorization:"Basic "+btoa(this.matricula+":"+this.senha)},success:function(t){e.retrairDiretorios(t)}})}else alert("Isso é um arquivo!")}}},Pt=Mt,Lt=(e("c455"),Object(u["a"])(Pt,Ot,$t,!1,null,null,null)),Tt=Lt.exports,zt={name:"AreaArquivos",components:{"header-custom":nt,diretorios:Tt}},Bt=zt,Ft=(e("4a31"),Object(u["a"])(Bt,yt,xt,!1,null,null,null)),Ht=Ft.exports,Ut=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"page_boletim"}},[e("header-custom"),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("boletim")],1)])])],1)},Gt=[],Nt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"shadow",attrs:{id:"boletim"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("h4",[t._v("Notas e faltas")]),e("h3",[t._v(t._s(t.boletimData.matricula)+" - "+t._s(t.boletimData.aluno))]),e("p",[t._v(t._s(t.boletimData.mensagem))]),t._l(t.boletimData.etapas,function(a){return e("div",{staticClass:"card"},[e("div",{staticClass:"card-header bg-dark"},[t._v("\n            "+t._s(a.nome)+"\n          ")]),e("div",{staticClass:"card-body"},t._l(a.disciplinas,function(a){return e("table",{staticClass:"table table-bordered"},[e("thead",{staticClass:"thead-light"},[e("th",{attrs:{colspan:"10"}},[e("span",{staticClass:"badge badge-dark serie"},[t._v(t._s(a.serie))]),t._v(" "+t._s(a.nome))])]),e("tbody",[e("tr",t._l(a.avaliacoes,function(a){return e("th",[t._v(t._s(a.nome))])}),0),e("tr",t._l(a.avaliacoes,function(a){return e("td",[t._v(" Nota: "),e("span",{staticClass:"nota"},[t._v(t._s(a.nota))])])}),0),e("tr",t._l(a.avaliacoes,function(a){return e("td",[t._v(" Valor: "),e("span",{staticClass:"nota"},[t._v(t._s(a.valor))])])}),0),e("tr",t._l(a.avaliacoes,function(a){return e("td",[t._v(" Média: "),e("span",{staticClass:"nota"},[t._v(t._s(a.media))])])}),0)])])}),0)])})],2)])])])},Jt=[],Rt={name:"PageBoletim",data:function(){return{boletimData:"",matricula:sessionStorage.getItem("matricula"),senha:sessionStorage.getItem("senha")}},mounted:function(){var t=this;$.ajax({type:"GET",url:"https://api.cotemig.com.br/v1/boletim",headers:{Authorization:"Basic "+btoa(this.matricula+":"+this.senha)},success:function(a){t.retraindoDados(a)}})},methods:{retraindoDados:function(t){this.boletimData=t,console.log(t)}}},Qt=Rt,Vt=(e("b108"),Object(u["a"])(Qt,Nt,Jt,!1,null,null,null)),Xt=Vt.exports,Kt={name:"PageBoletim",components:{"header-custom":nt,boletim:Xt}},Wt=Kt,Yt=(e("881f"),Object(u["a"])(Wt,Ut,Gt,!1,null,null,null)),Zt=Yt.exports;s["a"].config.productionTip=!0;var ta={"/erro404":j,"/":S,"/portal":wt,"/area-de-arquivos":Ht,"/notas-e-faltas":Zt};new s["a"]({el:"#app",data:{rotaAtual:window.location.pathname},computed:{tratarPagina:function(){return ta[this.rotaAtual]||j}},render:function(t){return t(this.tratarPagina)}})},6957:function(t,a,e){},"6a98":function(t,a,e){},"6b94":function(t,a,e){"use strict";var s=e("e472"),i=e.n(s);i.a},"787a":function(t,a,e){},"881f":function(t,a,e){"use strict";var s=e("1f9d"),i=e.n(s);i.a},acfb:function(t,a,e){"use strict";var s=e("1ad9"),i=e.n(s);i.a},b108:function(t,a,e){"use strict";var s=e("6a98"),i=e.n(s);i.a},b636:function(t,a,e){"use strict";var s=e("c631"),i=e.n(s);i.a},ba18:function(t,a,e){},baed:function(t,a,e){"use strict";var s=e("566e"),i=e.n(s);i.a},c1c5:function(t,a,e){"use strict";var s=e("036c"),i=e.n(s);i.a},c455:function(t,a,e){"use strict";var s=e("3b3f"),i=e.n(s);i.a},c631:function(t,a,e){},cf05:function(t,a,e){t.exports=e.p+"img/logo.75e30419.png"},d6ba:function(t,a,e){"use strict";var s=e("0faf"),i=e.n(s);i.a},db0a:function(t,a,e){t.exports=e.p+"img/logoportal.e01fbc71.png"},e472:function(t,a,e){},e724:function(t,a,e){},f0cd:function(t,a,e){"use strict";var s=e("0375"),i=e.n(s);i.a},f389:function(t,a,e){"use strict";var s=e("787a"),i=e.n(s);i.a},f87b:function(t,a,e){},fb46:function(t,a,e){"use strict";var s=e("e724"),i=e.n(s);i.a}});
//# sourceMappingURL=app.202a1420.js.map
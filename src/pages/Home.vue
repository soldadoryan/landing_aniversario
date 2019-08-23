<template>
  <div id="home">
    <politica c-conteudo="politica" v-on:fechar="abrirPolitica(0)" v-if="showPolitica == 1"></politica>
    <politica c-conteudo="contratacao" v-on:fechar="abrirContratacao(0)" v-if="showContratacao == 1"></politica>
    <div class="notificacao shadow">
      <i class="fas fa-times"></i>
      <span id="conteudo">Você precisa aceitar nossos termos para continuar!</span>
    </div>
    <passo v-if="nPasso == 1">
      <painel flag-type="conteudo">
        <img src="/img/taskinho1.png">
        <h2>Task - <span>25 Anos</span></h2>
        <h3>
          Excelência em <strong>hospedagem de site</strong>, <strong>serviços de e-mail</strong>,
          <strong>servidor vps</strong> e <strong>servidor dedicado</strong>
        </h3>
      </painel>
      <painel flag-type="form">
        <p class="descricao-sucesso home">
          Para celebrar o nosso aniversário, preparamos <strong>descontos especiais</strong> em nossos planos
          para vocês, clientes e parceiros, que fazem parte da nossa história.
        </p>
        <form autocomplete="off" id="form_dados_iniciais" v-on:submit.prevent="dadosIniciais">
          <span class="display-etapas">{{nPasso}}/2</span>
          <span class="desc-form">Para ganhar o desconto, preencha o formulário abaixo:</span>
          <input type="text" required name="nome_completo" placeholder="Nome completo"/>
          <input type="email" required name="email" placeholder="E-mail"/>
          <input type="text" required name="telefone" placeholder="Telefone"/>
          <div class="separador"></div>
          <div class="text-center">
            <button type="submit" name="button" class="btn-submit shadow animated shake">
              <span v-if="showLoading == 0">Quero desconto!</span>
              <i class="fas fa-spinner fa-pulse" v-if="showLoading == 1"></i>
            </button>
          </div>
        </form>
      </painel>
    </passo>
    <passo v-if="nPasso == 2">
      <painel flag-type="conteudo">
        <iframe width="60%" height="300" src="https://www.youtube.com/embed/iKOx_D7H-kI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h2>Um pouco sobre <span>a Task!</span></h2>
        <p class="w text-justify">
          Acompanhamos de perto a evolução da internet no Brasil e fizemos dela o nosso negócio! Em 1994,
          começamos como desenvolvedores de software e dois anos mais tarde nos tornamos um dos primeiros
          provedores de acesso à internet da capital mineira.
        </p>
        <p class="w text-justify">
          Hoje, 25 anos depois, oferecemos altíssima tecnologia em serviços de hospedagem de sites, e-mails e servidores.
        </p>
      </painel>
      <painel flag-type="form escolher-planos">
        <form class="wrap-descontos" v-on:submit.prevent="enviarPlano">
          <span class="display-etapas">{{nPasso}}/2</span>
          <span class="desc-form">Escolha o melhor desconto para você:</span>
          <div class="desconto active" @click="escolherPlano" data-desconto="1">
            <div class="wrap-check">
              <div class="check">
                <i class="fas fa-check" v-if="nDesconto == 1"></i>
              </div>
            </div>
            <img src="/img/hospedagem.png">
            <div class="desc">
              <h4 class="titulo">Hospedagem de site</h4>
              <span class="condicoes"><small>R$</small> 0,00 <small>no 1º mês</small></span>
            </div>
          </div>
          <div class="desconto" @click="escolherPlano" data-desconto="2">
            <div class="wrap-check">
              <div class="check">
                <i class="fas fa-check" v-if="nDesconto == 2"></i>
              </div>
            </div>
            <img src="/img/loja.png">
            <div class="desc">
              <h4 class="titulo">Loja virtual</h4>
              <span class="condicoes"><small>R$</small> 0,00 <small>no 1º mês</small></span>
            </div>
          </div>
          <div class="desconto" @click="escolherPlano" data-desconto="3">
            <div class="wrap-check">
              <div class="check">
                <i class="fas fa-check" v-if="nDesconto == 3"></i>
              </div>
            </div>
            <img src="/img/servidor.png">
            <div class="desc">
              <h4 class="titulo">Servidor virtual</h4>
              <span class="condicoes"> 50% <small>no 1º mês</small></span>
            </div>
          </div>
          <div class="wrap-check">
            <div class="check" @click="toggleCheck">
              <i class="fas fa-check" v-if="termosCheck == 1"></i>
            </div>
            <span class="termos">
              Por favor aceite nossos <a href="" v-on:click.prevent="abrirContratacao(1)">Termos de contratação</a> e <a href="" v-on:click.prevent="abrirPolitica(1)">Politicas de espaço/tráfego ilimitados e de e-mails</a>.
            </span>
          </div>
          <div class="separador"></div>
          <div class="text-center">
            <button type="submit" name="button" class="btn-submit shadow">
              <span v-if="showLoading == 0">Escolher desconto</span>
              <i class="fas fa-spinner fa-pulse" v-if="showLoading == 1"></i>
            </button>
          </div>
        </form>
      </painel>
    </passo>
    <passo v-if="nPasso == 3  ">
      <painel flag-type="conteudo" esconder-legenda="0">
        <img src="/img/timeline.png" class="timeline">
      </painel>
      <painel flag-type="form">
        <h4 class="titulo-sucesso">Agradecemos seu contato</h4>
        <p class="descricao-sucesso">
          Parabéns! <b>Você já garantiu o seu desconto.</b> Em breve, o nosso setor comercial entrará em contato para finalizar o cadastro.
        </p>
        <div class="row">
          <div class="col-lg-4">
            <div class="wrap-contato">
              <i class="far fa-map"></i>
              <h5>Onde estamos?</h5>
              <p>
                Rua Domingos Vieira, 348 cj 1501.
                CEP 30150-242.
                Belo Horizonte / MG - Brasil
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="wrap-contato">
              <i class="far fa-envelope"></i>
              <h5>Faça contato!</h5>
              <p>
                (31) 3123-1000<br>
                falecom@task.com.br
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="wrap-contato">
              <i class="far fa-thumbs-up"></i>
              <h5>Nos siga nas redes sociais!</h5>
              <ul class="lista-redes-sociais">
                <li><a href="https://www.facebook.com/TaskInternet/" target="_blank" class="facebook"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="https://www.instagram.com/task_internet/" target="_blank" class="instagram"><i class="fab fa-instagram"></i></a></li>
                <li><a href="https://www.linkedin.com/company/taskinternet/about/" target="_blank" class="linkedin"><i class="fab fa-linkedin-in"></i></a></li>
                <li><a href="https://www.youtube.com/user/TaskInternet" target="_blank" class="youtube"><i class="fab fa-youtube"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </painel>
    </passo>
  </div>
</template>

<script>
import Passo from '../components/Passo.vue'
import Painel from '../components/Painel.vue'
import Politica from '../components/Politica.vue'

import axios from "axios";

const API_URL = "http://api.task.com.br/api";

export default {
  mounted () {
    $("input[name='telefone']").mask('(00) 00000-0000');
  },
  data () {
    return {
      termosCheck: 0,
      nPasso: 1,
      nDesconto: 1,
      showPolitica: 0,
      showLoading: 0,
      showContratacao: 0,
      dadosCompletos: {},
    }
  },
  components: {
    "passo": Passo,
    "painel": Painel,
    "politica": Politica,
  },
  methods: {
    toggleCheck: function() {
      this.termosCheck = !this.termosCheck;
    },
    dadosIniciais: function() {
      var model = this;
      this.showLoading = 1;


      this.dadosCompletos = new FormData();
      this.dadosCompletos.append("customerPromotion", "25 Anos");
      this.dadosCompletos.append("customerEmail", $("#form_dados_iniciais input[name='email']").val());
      this.dadosCompletos.append("customerName", $("#form_dados_iniciais input[name='nome_completo']").val());
      this.dadosCompletos.append("customerTelefone", $("#form_dados_iniciais input[name='telefone']").val());

      var url = API_URL + "/envia-contato-promocao";

      axios.post(url, this.dadosCompletos).then(function(response) {
        model.abrirContratacao(0);
        model.abrirPolitica(0);
        model.nPasso = 2;
        model.showLoading = 0;
      });

    },
    escolherPlano: function(event) {
      $(".desconto").removeClass("active");
      var desconto = $(event.target).closest(".desconto");
      desconto.addClass("active");

      this.nDesconto = desconto.attr("data-desconto");
    },
    enviarPlano: function(event) {
      this.showLoading = 1;
      var model = this;
      if(this.termosCheck == 1) {


        var url = API_URL + "/envia-contato-promocao";

        if (this.nDesconto == 1)
        this.dadosCompletos.append("customerPlan", "Hospedagem de site");
        else if (this.nDesconto == 2)
        this.dadosCompletos.append("customerPlan", "Loja virtual");
        else
        this.dadosCompletos.append("customerPlan", "Servidor virtual");

        axios.post(url, this.dadosCompletos).then(function(response) {
          model.nPasso = 3;
          model.showLoading = 0;
        });

      } else {
        $(".notificacao #conteudo").text("Para continuar você precisa aceitar nossos termos!");
        $(".notificacao").css("right", "25px");
        model.showLoading = 0;

        window.setTimeout(function() {
          $(".notificacao").css("right", "-150%");

        }, 3000);
      }
    },
    abrirContratacao: function(val) {
      this.showContratacao = val;
    },
    abrirPolitica: function(val) {
      this.showPolitica = val;
    }
  }
}

</script>

<style lang="scss">
html {
  height: 100%;

  body {
    height: 100%;
    font-family: 'Poppins', sans-serif;

    button {
      outline: none;
    }

    #home {
      position: relative;
      height: 100%;
      overflow-x: hidden;

      .notificacao {
        position: absolute;
        top: 50px;
        right: -150%;
        background-color: #ed3d3d;
        color: #ed3d3d;
        padding: 20px;
        z-index: 1050;
        transition: right 0.5s;

        i {
          width: 25px;
          height: 25px;
          line-height: 25px;
          display: inline-block;
          text-align: center;
          margin-right: 10px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.5);
          vertical-align: middle;
        }

        #conteudo {
          display: inline;
          vertical-align: middle;
          color: white;
        }
      }
    }
  }
}
</style>

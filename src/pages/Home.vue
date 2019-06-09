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
        <h2>Task Internet - <span>25 Anos</span></h2>
        <h3>
          Excelência em <strong>hospedagem de site</strong>, <strong>serviço de email</strong>,
          <strong>servidor vps</strong> e <strong>servidor dedicado</strong>
        </h3>
        <p class="w">
          Para celebrar o nosso aniversário, preparamos <strong>descontos especiais</strong> em nossos planos e
          vários benefícios para vocês, clientes e parceiros, que fazem parte da nossa história
        </p>
      </painel>
      <painel flag-type="form">
        <form autocomplete="off" v-on:submit.prevent="dadosIniciais">
          <span class="display-etapas">{{nPasso}}/2</span>
          <span class="desc-form">Para conseguir o desconto, preencha o formulário abaixo:</span>
          <input type="text" required name="nome_completo" placeholder="Nome completo"/>
          <input type="email" required name="email" placeholder="E-mail"/>
          <input type="text" required name="telefone" placeholder="Telefone"/>
          <div class="wrap-check">
            <div class="check" @click="toggleCheck">
              <i class="fas fa-check" v-if="termosCheck == 1"></i>
            </div>
            <span class="termos">
              Por favor aceite nossos <a href="" v-on:click.prevent="abrirContratacao(1)">Termos de contratação</a> e <a href="" v-on:click.prevent="abrirPolitica(1)">Politicas de espaço/tráfego ilimitados e de e-mails</a>.
            </span>
          </div>
          <div class="separador"></div>
          <div class="text-right">
            <button type="submit" name="button" class="btn-submit">
              Quero desconto!
            </button>
          </div>
        </form>
      </painel>
    </passo>
    <passo v-if="nPasso == 2">
      <painel flag-type="conteudo">
        <img src="/img/taskinho1.png">
        <h2>Um pouquinho sobre <span>a Task!</span></h2>
        <p class="w text-justify">
          Acompanhamos de perto a evolução da internet no Brasil e fizemos dela o nosso negócio! Em 1994,
          começamos como desenvolvedores de software e dois anos mais tarde nos tornamos um dos primeiros
          provedores de acesso à internet da capital mineira.
        </p>
        <p class="w text-justify">
          Hoje, 25 anos depois, oferecemos altíssima tecnologia em serviços de hospedagem de sites, e-mails e servidores. A palavra-chave que norteia a empresa e seu envolvimento com a internet é a confiabilidade pela experiência no mercado.
        </p>
      </painel>
      <painel flag-type="form">
        <form class="wrap-descontos" v-on:submit.prevent="enviarPlano">
          <span class="display-etapas">{{nPasso}}/2</span>
          <span class="desc-form">Escolha o melhor desconto pra você:</span>
          <div class="desconto" @click="escolherPlano" data-desconto="1">
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
          <div class="separador"></div>
          <div class="text-right">
            <button type="submit" name="button" class="btn-submit">
              Escolher desconto
            </button>
          </div>
        </form>
      </painel>
    </passo>
    <passo v-if="nPasso == 3  ">
      <painel flag-type="conteudo">
        <img src="/img/timeline.png" alt="">
      </painel>
      <painel flag-type="form">
        <h4 class="titulo-sucesso">Agradecemos seu contato</h4>
        <p class="descricao-sucesso">
          É um prazer ter você como cliente. Em breve o nosso setor comercial entrará em contato com você para finalizar o cadastro.
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

export default {
  mounted () {
    $("input[name='telefone']").mask('(00) 00000-0000');
  },
  data () {
    return {
      termosCheck: 0,
      nPasso: 1,
      nDesconto: 0,
      showPolitica: 0,
      showContratacao: 0,
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
      if(this.termosCheck == 1) {
        //submit
        
        this.abrirContratacao(0);
        this.abrirPolitica(0);
        this.nPasso = 2;
      } else {
        $(".notificacao #conteudo").text("Para continuar você precisa aceitar nossos termos!");
        $(".notificacao").css("right", "25px");

        window.setTimeout(function() {
          $(".notificacao").css("right", "-150%");

        }, 3000);
      }
    },
    escolherPlano: function(event) {
      $(".desconto").removeClass("active");
      var desconto = $(event.target).closest(".desconto");
      desconto.addClass("active");

      this.nDesconto = desconto.attr("data-desconto");
    },
    enviarPlano: function(event) {
      if(this.nDesconto != 0) {
        // submit

        this.nPasso = 3;
      } else {
        $(".notificacao #conteudo").text("Você precisa escolher um desconto para continuar!");
        $(".notificacao").css("right", "25px");

        window.setTimeout(function() {
          $(".notificacao").css("right", "-150%");

        }, 5000);
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

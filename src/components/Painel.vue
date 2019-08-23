<template>
  <div class="col-lg-6 painel" :class="'wrap-' + flagType">
    <img src="/img/logo.png" class="logo" v-if="flagType == 'conteudo'">
    <ul class="lista-redes-sociais" v-if="flagType == 'conteudo'">
      <li><a href="https://www.facebook.com/TaskInternet/" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
      <li><a href="https://www.instagram.com/task_internet/" target="_blank"><i class="fab fa-instagram"></i></a></li>
      <li><a href="https://www.linkedin.com/company/taskinternet/about/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
      <li><a href="https://www.youtube.com/user/TaskInternet" target="_blank"><i class="fab fa-youtube"></i></a></li>
    </ul>
    <div class="v-center text-center">
      <slot></slot>
    </div>
    <small class="rodape" v-if="flagType == 'conteudo' && esconderLegenda == 1" >Task Internet - 25 anos</small>
  </div>
</template>

<script>
export default {
  props: {
    flagType: String,
    esconderLegenda: {
      type: Number,
      default: 1,
    }
  }
}

</script>

<style lang="scss">
.painel {
  height: 100%;
  padding: 0 5%;


  .rodape {
    position: absolute;
    bottom: 25px;
    left: 0;
    color: white;
    opacity: 0.5;
    font-size: 1rem;
    width: 100%;
    display: block;
    text-align: center;
  }

  &.wrap-conteudo {
    background: transparent;
    background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.5));

    .logo {
      position: absolute;
      left: 20px;
      top: 20px;
      width: 15%;
    }

    .lista-redes-sociais {
      position: absolute;
      list-style: none;
      right: 20px;
      top: 30px;
      padding: 0;

      li {
        display: inline-block;
        margin-left: 20px;
        vertical-align: middle;

        a {
          color: white;
          opacity: 0.6;
          font-size: 1.3rem;
          transition: opacity 0.5s;

          &:hover {
            opacity: 1;
          }
        }
      }
    }

    img {
      width: 50%;

      &.timeline {
        width: 90%;
      }
    }

    h2 {
      color: white;
      font-size: 2.2rem;
      text-transform: uppercase;
      margin-top: 25px;
      font-weight: bold;

      span {
        color: #f87204;
      }
    }

    h3 {
      color: white;
      opacity: 0.8;
      font-weight: lighter;
      font-size: 1.6rem;
      margin-top: 25px;
      margin-bottom: 50px;
    }

    p {
      color: #fff;
      margin-top: 25px;
      font-weight: normal;
      font-size: 1.1rem;

      strong { color: #f87204; }

      &.desc {
        opacity: 1;
      }
    }
  }

  &.wrap-form {
    background-color: white;

    .w {
      text-align: justify;
    }

    .display-etapas {
      color: #999;
      font-weight: normal;
      letter-spacing: 2px;
      font-size: 1.4rem;
      margin-bottom: 0px;
      text-align: left;
      display: block;
    }

    .desc-form {
      font-weight: normal;
      font-size: 1.1rem;
      margin-bottom: 20px;
      display: block;
      text-align: left;
      color: #222;
    }

    .wrap-check {
      .check {
        border: 1px solid #d2d8dd;
        border-radius: 3px;
        width: 20px;
        display: inline-block;
        height: 20px;
        vertical-align: middle;
        margin-right: 5px;
        cursor: pointer;

        i { color: #00ff99; display: block; font-size: 1.2rem; }
      }

      .termos {
        font-size: 0.9rem;
        display: inline;
      }
    }

    form {
      width: 70%;
      margin: 50px auto 0;
      text-align: left;
      border: 1px solid #d2d8dd;
      border-radius: 3px;
      padding: 20px 40px 30px;

      .separador {
        border-top: 2px solid #ededed;
        margin: 25px 0 25px;
      }

      input {
        border: 1px solid #d2d8dd;
        height: calc(2.55rem + 2px);
        border-radius: 3px;
        display: block;
        width: 100%;
        color: #495057;
        font-weight: lighter;
        outline: none;
        margin-bottom: 20px;
        font-size: 0.875;
        padding: 0 10px;
        transition: border-color 0.5s;

        &:focus {
          border: 1px solid #434bdf;
        }
      }


      .btn-submit {
        background-color: #f87204;
        border: 0;
        color: white;
        outline: none;
        border-radius: 3px;
        font-weight: normal;
        padding: 20px 50px;
      }
    }

    .wrap-descontos {
      width: 75%;
      margin: 0 auto;

      .desconto {
        width: 100%;
        padding: 10px;
        position: relative;
        text-align: left;
        margin-bottom: 20px;
        border: 1px solid #ededed;
        border-radius: 3px;
        cursor: pointer;
        transition: border-color 0.5s;

        .wrap-check {
          position: absolute;
          left: 3px;
          top: 2px;
        }

        &.active {
          border-color: #434bdf;
        }

        &:hover {
          border-color: #434bdf;
        }

        img {
          display: inline-block;
          width: 17%;
          margin-left: 3%;
          vertical-align: middle;
          margin-right: 8%;
          padding: 10px;
        }

        .desc {
          width: 70%;
          display: inline-block;
          text-align: left;
          vertical-align: middle;

          .titulo {
            color: #222;
            font-weight: lighter;
          }

          .condicoes {
            font-weight: lighter;
            color: #555;
            font-size: 1.5rem;
          }
        }
      }
    }

    .titulo-sucesso {
      font-size: 2rem;
      color: #222;
    }

    .descricao-sucesso {
      font-size: 1.5rem;
      font-weight: lighter;
      margin-top: 40px;
      color: #555;

      &.home {
        margin-top: 0;
      }

      b {
        color: #434bdf;
        font-weight: bold;
      }

      strong {
        color: #434bdf;
        font-weight: bold;
        font-family: 'Satisfy', cursive;
        font-size: 4rem;
      }
    }

    .wrap-contato {
      width: 100%;
      padding: 20px 10px;
      border: 1px solid #ededed;
      margin-top: 50px;
      height: 185px;

      i {
        font-size: 2.5rem;
        color: #434bdf;
      }

      h5 { font-size: 1rem; margin: 20px 0 10px; }

      p {
        font-size: 0.8rem;
        color: #999;
      }

      .lista-redes-sociais {
        list-style: none;
        padding: 0;
        margin-top: 20px;

        li {
          display: inline-block;
          margin: 0 5px;

          a {
            width: 30px;
            height: 30px;
            background-color: black;
            display: block;
            border-radius: 5px;

            &.facebook { background-color: #4267b2; }
            &.instagram { background-image: linear-gradient(to bottom, #814c9e, #ce228e, #ea2145, #fbb253); }
            &.linkedin { background-color: #0077B5; }
            &.youtube { background-color: #ff0000; }

            i { font-size: 1.3rem; margin-top: 6px; color: white;}
          }
        }
      }
    }
  }

  .v-center {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

}
@media (max-width: 576px) {
  .wrap-conteudo {
    h2 {
      font-size: 1.2rem !important;
    }

    h3 {
      font-size: 1.2rem !important;
    }

    p.w {
      font-size: 0.8rem !important;
    }

    .logo {
      width: 30% !important;
    }
  }

  .wrap-form {
    min-height: 100%;
    .titulo-sucesso {
      font-size: 1.3rem !important;
      margin-top: 25px !important;
    }

    .descricao-sucesso {
      font-size: 1.0rem !important;
      margin-top: 0 !important;

      strong {
        font-size: 1.4rem !important;
      }
    }

    .wrap-contato {
      margin: 10px 0 !important;
      height: 150px !important;
      padding: 5px !important;
    }

    form {
      border: 0 !important;
      padding: 5px !important;
      width: 100% !important;
      margin-top: 0 !important;

      .wrap-check {
        .termos {
          font-size: 0.8rem !important;
        }
      }

      .desc-form {
        font-size: 0.8rem !important;
      }

      .desconto {
        img {
          width: 22% !important;
        }

        .desc {
          width: 67% !important;
          h4.titulo {
            font-size: 1rem !important;
          }
        }

        .condicoes {
          font-size: 1.2rem !important;
        }
      }

      .btn-submit {
        padding: 10px 50px !important;
      }
    }
  }
}

@media (min-width: 577px) and (max-width: 1360px) {
  .wrap-conteudo {
    p {
      font-size: 0.8rem !important;
    }
  }

  .wrap-form {
    .descricao-sucesso {
      font-size: 0.8rem !important;

      strong {
        font-size: 1.7rem !important;
      }
    }

    .desc-form {
      font-size: 0.8rem !important;
    }

    .wrap-check {
      .termos {
        font-size: 0.7rem !important;
      }
    }

    .desconto {
      .desc {
        h4 {
          font-size: 1rem !important;
        }

        .condicoes {
          font-size: 1rem !important;
        }
      }

    }

    .wrap-contato {
      p {
        font-size: 0.7rem !important;
      }

      .lista-redes-sociais {
        li {
          a {
            width: 23px !important;
            height: 23px !important;

            i {
              font-size: 1rem !important;
              line-height: 0 !important;
            }
          }
        }
      }
    }
  }
}
</style>

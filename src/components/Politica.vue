<template>
  <div class="texto">
    <button name="button" class="btn-fechar" @click="emitirClick"><i class="fas fa-times"></i> Fechar</button>
    <div v-if="cConteudo == 'politica'">
      <h4 class="titulo">
        Política de espaço/tráfego ilimitados e de e-mails
      </h4>
      <p class="pb_font-20 ">A Task oferece tráfego e espaço ilimitados para todos o seus clientes que possuem planos de hospedagem compartilhada. São 2 benefícios importantes quando falamos de hospedagem de site e explicaremos a diferença entre eles abaixo: </p>

      <strong>Espaço ilimitado :</strong>
      <p>
        A hospedagem de um site é composta basicamente pelo armazenamento de seus arquivos em um servidor Web. Quando dizemos que a Task disponibiliza espaço ilimitado para a hospedagem de site, significa que não há limitações de quantidade ou de tamanho para o armazenamento destes arquivos em nossos servidores. Na prática, nossos clientes não precisarão se preocupar com o tamanho de seus respectivos sites.
      </p>

      <strong>Tráfego ilimitado :</strong>
      <p>
        Por tráfego, entende-se toda a informação contida nos arquivos do site que transita dos servidores da Task até a máquina do usuário que o está acessando. Ou seja, cada acesso realizado a um determinado site gera uma transferência de dados do servidor até o dispositivo de quem realizou o acesso. Na Task, esta transferência é ilimitada, o que representa maior liberdade de acessos para seu site.
      </p>

      <strong>Políticas de ilimitado :</strong>

      <p>
        Como dito, na Task, tráfego e espaço são ilimitados na hospedagem compartilhada. Esta plataforma de hospedagem é caracterizada por um servidor com grande quantidade de recursos, divididos entre vários sites. Desta forma, para que o serviço funcione de forma estável e correta, é necessário configurarmos restrições quanto à forma de utilização, em algumas características da hospedagem, conforme listado abaixo:
      </p><ul>
        <li>
          Não será permitido o uso da hospedagem compartilhada como disco virtual, ou seja, como local para armazenamento de arquivos que não façam parte do site e consequente disponibilização (download) dos mesmos;
        </li>
        <li>
          Não é permitida hospedagem e disponibilização de qualquer tipo de arquivo que esteja protegido por leis de direito autoral, sem que o responsável pelo site esteja devidamente autorizado a fazê-lo;
        </li>
        <li>
          Cada site configurado em nossa estrutura de hospedagem compartilhada, possui um limite de 32 downloads simultâneos do site.
        </li>
        <li>
          Será vetada a hospedagem e execução de vídeos diretamente de nosso servidores de hospedagem compartilhada. Sites com esta finalidade serão permitidos apenas quando os vídeos estiverem hospedados em servidores externos à Task, como Youtube, Vimeo e similares.
        </li>
        <li>
          Não será permitida a disponibilização de dados de acesso (login e senha) a serviços como painel de controle, FTP, Banco de Dados, etc., no intuito de acesso para grande público.
        </li>
        <li>
          Bases de dados dos tipos MySQL, Postgres, Firebird possuem limite de 20 conexões simultâneas.
        </li>
        <li>
          Para base de dados MySQL há também a limitação dos parâmetros MAX_JOIN_SIZE e SQL_SELECT_LIMIT, que dizem respeito à quantidade de registros que determinada consulta pode retornar. Ambos são limitados em 4 milhões. Estes limites visam estabilidade e otimização de desempenho, para o serviço.
        </li>
        <li>
          Sites que infringirem alguma das restrições listadas acima serão desativados sem prévio aviso, até que seu conteúdo seja regularizado, ou que o plano contratado seja adequado ao consumo de recursos.
        </li>
      </ul>
      <p></p>


      <strong>Política de Armazenamento de e-mails:</strong>
      <p>
        Visando otimizar o desempenho da ferramenta webmail, são aplicadas as seguintes regras para o armazenamento de mensagens nesta ferramenta:
      </p><ul>
        <li>
          Na pasta CAIXA DE ENTRADA, mensagens com mais de 2 (dois) anos serão automaticamente excluídas;
        </li>
        <li>
          Na pasta ITENS ENVIADOS, mensagens com mais de 2 (dois) anos serão automaticamente excluídas;
        </li>
        <li>
          Na pasta SPAM, mensagens com mais de 05 (cinco) dias serão automaticamente excluídas;
        </li>
        <li>
          Na pasta LIXEIRA, mensagens serão apagadas a qualquer momento;
        </li>
        <li>
          Em pastas personalizadas, não há política de manutenção de armazernamento.
          Capacidade máxima de cada conta de e-mail: 10 GB.
        </li>
      </ul>
      <p></p>

      <p>
        A TASK se exime integralmente de qualquer responsabilidade por custos, prejuízos e/ou danos causados ao CONTRATANTE ou a terceiros por eventual desaparecimento de e-mails armazenados pelo CONTRATANTE no servidor de e-mail, haja vista a inadequação dessa ferramenta para tal fim.
      </p>

      <a href="https://www.task.com.br/contrato" target="_blank">Ver contrato</a>
    </div>
    <div v-if="cConteudo == 'contratacao'">
      <h4 class="titulo">Regras promoção aniversário Task - 25 anos</h4>
      <strong>Validade:</strong>
      <p>
        Promoção válida de 03/06/2019 a 28/06/2019
      </p>

      <strong>Detalhes da promoção:</strong>
      <p>
        Planos de hospedagem compartilhada (Básico, Pleno e Avançado);
      </p>

      <p>
        Válido somente para novas contratações (no caso de clientes, pode hospedar um novo site ou transferir de outro provedor);
      </p>

      <p>
        Válido somente para o plano anual no cartão de crédito;
      </p>

      <p>
        Não é válido para renovações de serviços com a Task;
      </p>

      <p>
        No caso do Servidor Virtual, após o término do teste, caso o cliente queira retornar para a hospedagem compartilhada ou cancelar o plano, deverá entrar em contato com o setor comercial;
      </p>

      <p>
      </p><ul>
        Configuração do VPS:
        <li>Sistema Operacional: Linux</li>
        <li>Processador: 1 core</li>
        <li>Memória RAM: 512 MB</li>
        <li>Armazenamento: 30 Gb</li>
        <li>ransferência: 100 GB</li>
      </ul>
      <p></p>

      <p>
        <strong>Atenção!  </strong>   A promoção não se aplica para os planos já contratados dos clientes atuais. Não será permitido migração entre contas e nem alterações do ciclo de pagamento.
      </p>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    cConteudo: String,
  },
  methods: {
    emitirClick: function() {
      this.$emit("fechar");
    }
  }
}

</script>

<style lang="scss">
.texto {
  background-color: white;
  position: absolute;
  height: 100%;
  padding: 50px;
  overflow-y: auto;
  width: 50%;
  z-index: 1050;
  text-align: justify;

  &::-webkit-scrollbar-track {
    background-color: #F4F4F4;
  }
  &::-webkit-scrollbar {
    width: 6px;
    background: #F4F4F4;
  }
  &::-webkit-scrollbar-thumb {
    background: #dad7d7;
  }

  .titulo {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 50px;
  }

  .btn-fechar {
    position: absolute;
    right: 20px;
    top: 20px;
    background-color: #ed3d3d;
    border: 0;
    height: calc(2.55rem + 2px);
    color: white;
    border-radius: 3px;
    font-weight: normal;
    padding: 0 10px;

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
  }
}
</style>

import Vue from 'vue' // Importando o vue

// Paginas do sistema
import Home from './pages/Home.vue'


Vue.config.productionTip = true;

// Rotas do sistema
const rotas = {
  '/Home': Home,
}

new Vue({
  el: "#app",
  data: {
    rotaAtual: window.location.pathname, // Recolher rota acessada
  },
  computed: {
    tratarPagina: function() {
      return rotas[this.rotaAtual] || Home; // Se existir rota retorna pagina, se não retorna 404
    }
  },
  render :  function ( createElement ) {
    return  createElement (this.tratarPagina); // Renderiza pagina no elemento "#app"
  }
});

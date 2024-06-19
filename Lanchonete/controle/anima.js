document.addEventListener("DOMContentLoaded", function () {
    const elementos = document.querySelectorAll(".elementos");
    const textHome = document.querySelectorAll(".gosma");
  
    // Função para verificar se o elemento está visível na tela
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    // Função que será ativada quando o elemento estiver visível
    function funcaoAtivada(elemento) {
      console.log('Elemento está visível na tela:', elemento.id);
      if (elemento.classList.contains('elementos')) {
        animateOpacityScale(elemento);
      } else if (elemento.classList.contains('gosma') && !elemento.dataset.animated) {
        animateBackgroundSize(elemento);
        elemento.dataset.animated = true;
      }
    }
  
    // Função para animar a opacidade e escala de um elemento
    function animateOpacityScale(element) {
      if (isElementInViewport(element)) {
        if (!element.classList.contains('visible')) {
          element.classList.add('visible');
        }
      }
    }
  
    // Função para animar o background-size de um elemento
    function animateBackgroundSize(elemento) {
      var tempoTotal = 2000; // Tempo total da animação em milissegundos (2 segundos)
      var intervalo = 30; // Intervalo entre cada atualização em milissegundos (aproximadamente 30 vezes por segundo)
      var incremento = intervalo / tempoTotal * 100; // Incremento percentual em cada intervalo
      var tamanhoVertical = 0; // Tamanho vertical atual do background
  
      var intervaloId = setInterval(function() {
        tamanhoVertical += incremento;
  
        if (tamanhoVertical >= 100) {
          tamanhoVertical = 100; // Garante que o tamanho não ultrapasse 100%
          clearInterval(intervaloId); // Para o intervalo quando a animação estiver completa
        }
  
        // Define o novo background-size
        elemento.style.backgroundSize = '100% ' + tamanhoVertical + '%';
      }, intervalo);
    }
  
    // Função que será chamada para verificar se os elementos estão visíveis durante o evento de rolagem
    function verificarVisibilidade() {
      elementos.forEach(function(elemento) {
        funcaoAtivada(elemento);
      });
      textHome.forEach(function(elemento) {
        if (!elemento.dataset.animated && isElementInViewport(elemento)) {
          funcaoAtivada(elemento);
        }
      });
    }
  
    // Adicionar um evento de rolagem para verificar a visibilidade dos elementos quando a página é rolada
    window.addEventListener('scroll', verificarVisibilidade);
  
    // Chamar verificarVisibilidade() uma vez para verificar a visibilidade inicial dos elementos
    verificarVisibilidade();
  });
  
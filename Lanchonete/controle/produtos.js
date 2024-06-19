

// script.js

    fetch('produtos.json')
      .then(response => response.json())
      .then(produtos => {
        produtos.forEach(produto => {
          const produtoDiv = document.querySelector(`.produto[data-id="${produto.id}"]`);

          
          if (produtoDiv) {
            const nome = document.createElement('h2');
            nome.textContent = produto.nome;

            const preco = document.createElement('p');
            preco.textContent = `Preço: R$ ${produto.preco}`;

            const descricao = document.createElement('p');
            descricao.textContent = produto.descricao;
  
            produtoDiv.appendChild(nome);
            produtoDiv.appendChild(descricao);
            produtoDiv.appendChild(preco);
          }
        });
      })
      .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));

  
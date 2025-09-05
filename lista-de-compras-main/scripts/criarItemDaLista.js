// Exporta a constante 'inputItem' para que ela possa ser usada em outros arquivos JavaScript.
export const inputItem = document.getElementById("input-item");

let contador = 0;

// Exporta a função 'criarItemDaLista', que será usada para criar um novo item na lista de compras.
export function criarItemDaLista() {
    
    // Verifica se o campo de entrada está vazio
    if (inputItem.value === "") {
        alert("Por favor, insira um item!");
        return;
    }

    // Cria um elemento HTML <li>
    const itemDaLista = document.createElement("li");

    // Cria uma <div> container para o conteúdo do item
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");

    // Cria o checkbox
    const inputCheckBox = document.createElement("input");
    inputCheckBox.type = "checkbox";
    inputCheckBox.id = "checkbox-" + contador++;

    // Cria o parágrafo com o nome do item
    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

    // Evento para riscar texto quando checkbox for marcado
    inputCheckBox.addEventListener("change", function () {
        if (inputCheckBox.checked) {
            nomeItem.style.textDecoration = "line-through";
        } else {
            nomeItem.style.textDecoration = "none";
        }
    });

    // Cria botão Editar
    const botaoEditar = document.createElement("button");
    botaoEditar.textContent = "Editar";
    botaoEditar.classList.add("botao-editar");

    botaoEditar.addEventListener("click", () => {
        const novoTexto = prompt("Edite o item:", nomeItem.textContent);
        if (novoTexto && novoTexto.trim() !== "") {
            nomeItem.textContent = novoTexto.trim();
        }
    });

    // Cria botão Excluir
    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.classList.add("botao-excluir");

    botaoExcluir.addEventListener("click", () => {
        itemDaLista.remove();
        const listaDeCompras = document.getElementById("lista-de-compras");
        import("./verificarListaVazia.js").then(({ default: verificarListaVazia }) => {
            verificarListaVazia(listaDeCompras);
        });
    });

    // Monta a estrutura final
    containerItemDaLista.appendChild(inputCheckBox);
    containerItemDaLista.appendChild(nomeItem);
    containerItemDaLista.appendChild(botaoEditar);
    containerItemDaLista.appendChild(botaoExcluir);

    itemDaLista.appendChild(containerItemDaLista);

    return itemDaLista;
}

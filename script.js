/*

Estrutura do código: +1

- Selecionar primeiro item (OK)
- Selecionar segundo item (OK)
- Selecionar terceiro item (OK)

        # Ao selecionar os itens, apenas um item pode ficar selecionado (mutualmente exclusivo)
        # O script deve ser capaz de armazenar o nome e o preço de cada item selecionado
        # Logo, o script deve armazenar esses dados no momento da seleção dos itens para que eles já estejam processados na conclusão do pedido.

- Ativar botão

        # Para que o botão seja ativado, os três itens (um de cada seção) devem estar selecionados

- No clique do botão:
    - Ativar tela de confirmação do pedido
    - Indicar itens selecionados e respectivos preços

        # O script deve ser capaz de organizar os dados armazenados durante a seleção dos itens para aparecerem na tela escondida.

    - Indicar o preço total do pedido

        # O script deve ser capaz de realizar a soma dos preços dos itens

    - Realizar ou cancelar pedido
        - Ao cancelar, voltar para a tela principal de seleção

            # O botão de cancelamento esconde a tela de confirmação, onde a troca dos itens pode ser realizada. Basicamente, o processamento do pedido (nomes + valores + total) acontece concomitantemente com a seleção dos itens do cardápio.

        - Ao realizar pedido:
            - Abrir prompt perguntando o nome e depois endereço
            - Abrir WhatsApp e preparar mensagem de texto formatada

*/

let food_name;
let drink_name;
let dessert_name;
let food_price;
let drink_price;
let dessert_price;
let total_price;
let name;
let address;

function selectFood(select) {
    // Essa função seleciona um item da seção Food, e coloca as variáveis food_name e food_price com o nome e o preço do item, respectivamente.
    let selectedItem = document.querySelector('.food .selected'); // verifica se há um item já selecionado
    if (selectedItem !== null) {
        selectedItem.classList.remove('selected');
    } // remove a seleção do item já selecionado para selecionar outro item
    select.classList.add('selected'); // seleciona o item (mudando ele)
    food_name = document.querySelector('.selected .item-title').innerHTML; // pega o texto dentro do 'item-title' e define como o food_name
    food_price = document.querySelector('.selected .item-price').innerHTML; // pega o texto dentro do 'item-price' e define como o food_price
}

function selectDrink(select) {
    // Essa função seleciona um item da seção Drink, e coloca as variáveis drink_name e drink_price com o nome e o preço do item, respectivamente.
    let selectedItem = document.querySelector('.drink .selected');
    if (selectedItem !== null) {
        selectedItem.classList.remove('selected');
    }
    select.classList.add('selected');
    drink_name = document.querySelector('.selected .item-title').innerHTML;
    drink_price = document.querySelector('.selected .item-price').innerHTML; 
}

function selectDessert(select) {
    // Essa função seleciona um item da seção Dessert, e coloca as variáveis dessert_name e dessert_price com o nome e o preço do item, respectivamente.
    let selectedItem = document.querySelector('.dessert .selected'); 
    if (selectedItem !== null) {
        selectedItem.classList.remove('selected');
    }
    select.classList.add('selected'); 
    dessert_name = document.querySelector('.selected .item-title').innerHTML; 
    dessert_price = document.querySelector('.selected .item-price').innerHTML;
}


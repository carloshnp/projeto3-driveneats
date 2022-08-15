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

let foodName;
let drinkName;
let dessertName;
let foodPrice;
let drinkPrice;
let dessertPrice;
let totalPrice;
let name;
let address;
let checkoutName;

function selectFood(select) {
    // Essa função seleciona um item da seção Food, e coloca as variáveis foodName e foodPrice com o nome e o preço do item, respectivamente.
    let selectedItem = document.querySelector('.food .selected'); // verifica se há um item já selecionado
    if (selectedItem !== null) {
        selectedItem.classList.remove('selected');
    } // remove a seleção do item já selecionado para selecionar outro item
    select.classList.add('selected'); // seleciona o item (mudando ele)
    foodName = document.querySelector('.selected .item-title').innerHTML; // pega o texto dentro do 'item-title' e define como o foodName
    foodPrice = document.querySelector('.selected .item-price').innerHTML; // pega o texto dentro do 'item-price' e define como o foodPrice
    foodPrice = foodPrice.replace('R$ ', ''); // deixa apenas o texto em número do preço do item
    checkoutName = document.querySelector('.food-name'); // seleciona a categoria do item no checkout
    checkoutName.innerHTML = foodName; // adiciona o nome do item no checkout
    checkoutPrice = document.querySelector('.food-price'); // seleciona o preço do item no checkout
    checkoutPrice.innerHTML = foodPrice; // adiciona o preço do item no checkout

    orderEnabled(); // verifica se os itens foram selecionados para ativar o botão do checkout
}

function selectDrink(select) {
    // Essa função seleciona um item da seção Drink, e coloca as variáveis drinkName e drinkPrice com o nome e o preço do item, respectivamente.
    let selectedItem = document.querySelector('.drink .selected');
    if (selectedItem !== null) {
        selectedItem.classList.remove('selected');
    }
    select.classList.add('selected');
    drinkName = document.querySelector('.selected .item-title').innerHTML;
    drinkPrice = document.querySelector('.selected .item-price').innerHTML;
    drinkPrice = drinkPrice.replace('R$ ', '');
    checkoutName = document.querySelector('.drink-name');
    checkoutName.innerHTML = drinkName;
    checkoutPrice = document.querySelector('.drink-price');
    checkoutPrice.innerHTML = drinkPrice;

    
    orderEnabled();
}

function selectDessert(select) {
    // Essa função seleciona um item da seção Dessert, e coloca as variáveis dessertName e dessertPrice com o nome e o preço do item, respectivamente.
    let selectedItem = document.querySelector('.dessert .selected'); 
    if (selectedItem !== null) {
        selectedItem.classList.remove('selected');
    }
    select.classList.add('selected'); 
    dessertName = document.querySelector('.selected .item-title').innerHTML; 
    dessertPrice = document.querySelector('.selected .item-price').innerHTML;
    dessertPrice = dessertPrice.replace('R$ ', '');
    checkoutName = document.querySelector('.dessert-name');
    checkoutName.innerHTML = dessertName;
    checkoutPrice = document.querySelector('.dessert-price');
    checkoutPrice.innerHTML = dessertPrice;

    orderEnabled();
}

function orderEnabled() {
    // verifica se os itens foram selecionados para ativar o botão do checkout
    if (foodName && drinkName && dessertName !== undefined) {
        let enabled = document.querySelector('.order-button');
        enabled.classList.add('enabled-order');
        enabled.innerHTML = 'Fechar pedido';
    }
}

function checkout() {
    if (foodName && drinkName && dessertName !== undefined) {
        let unhide = document.querySelector('.checkout-container')
        unhide.classList.remove('hidden')
    }
    totalPriceCalc();
    let total = document.querySelector('.total-price');
    total.innerHTML = totalPrice
}

function totalPriceCalc() {
    totalPrice = Number(foodPrice.replace(',', '.')) + Number(drinkPrice.replace(',', '.')) + Number(dessertPrice.replace(',', '.'));
    totalPrice = totalPrice.toFixed(2);
    totalPrice = totalPrice.replace('.', ',')
}
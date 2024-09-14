// Função JavaScript para mostrar os Quick Facts
// Essa função é chamada quando o evento onMouseOver é acionado
function showQuickFacts() {
    // Seleciona o elemento Quick Facts pelo seu id
    const quickFacts = document.getElementById('quick-facts');
    // Muda o estilo de exibição para 'block' para mostrar o elemento
    quickFacts.style.display = 'block';
}

// Função JavaScript para esconder os Quick Facts
// Essa função é chamada quando o evento onMouseOut é acionado
function hideQuickFacts() {
    // Seleciona o elemento Quick Facts pelo seu id
    const quickFacts = document.getElementById('quick-facts');
    // Muda o estilo de exibição para 'none' para esconder o elemento
    quickFacts.style.display = 'none';
}
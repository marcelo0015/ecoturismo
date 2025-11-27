/**
 * 🌳 Ecoturismo Arapoti - script.js
 * Arquivo de interatividade
 */

// Função simples para mostrar uma mensagem de novidades
function mostrarMensagem() {
    alert("📢 Fique ligado! Em breve teremos novos roteiros e eventos de observação de aves!");
}

// -----------------------------------------------------------
// 1. Manipulação do Formulário de Contato
// Adiciona um listener para o evento de submit do formulário
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contato-form');

    form.addEventListener('submit', function(event) {
        // Previne o comportamento padrão de recarregar a página
        event.preventDefault(); 

        // Captura os valores do formulário
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        // **Atenção:** Em um site real, você enviaria esses dados 
        // para um servidor aqui (usando Fetch API, por exemplo).
        
        // Simulação de envio bem-sucedido
        console.log("Dados do Contato:");
        console.log(`Nome: ${nome}`);
        console.log(`Email: ${email}`);
        console.log(`Mensagem: ${mensagem}`);
        
        // Exibe uma mensagem de sucesso para o usuário
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada. Responderemos em breve para o email ${email}.`);

        // Limpa o formulário
        form.reset();
    });
});
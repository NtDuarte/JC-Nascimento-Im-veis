// Banco de dados simulado
const imoveis = [
    {
        titulo: "Apartamento Moderno - Centro",
        preco: "R$ 320.000",
        detalhes: "2 Quartos | 1 Banheiro | 60m²",
        imagem: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80",
        linkZap: "https://wa.me/5521999999999"
    },
    {
        titulo: "Casa de Campo Luxuosa",
        preco: "R$ 750.000",
        detalhes: "4 Quartos | 3 Banheiros | 250m²",
        imagem: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80",
        linkZap: "https://wa.me/5521999999999"
    },
    {
        titulo: "Studio Compacto",
        preco: "R$ 180.000",
        detalhes: "1 Quarto | Próximo ao Metrô",
        imagem: "https://images.unsplash.com/photo-1536376074432-8f240d7696b4?auto=format&fit=crop&w=400&q=80",
        linkZap: "https://wa.me/5521999999999"
    }
];

// Seleciona o container no HTML
const listaContainer = document.getElementById('lista-imoveis');

// Função para renderizar os imóveis
function carregarImoveis() {
    imoveis.forEach(imovel => {
        const cardHTML = `
            <div class="card">
                <img src="${imovel.imagem}" alt="${imovel.titulo}">
                <div class="card-content">
                    <h3>${imovel.titulo}</h3>
                    <p>${imovel.detalhes}</p>
                    <p class="preco">${imovel.preco}</p>
                    <a href="${imovel.linkZap}" class="btn-zap" target="_blank">Tenho Interesse</a>
                </div>
            </div>
        `;
        listaContainer.innerHTML += cardHTML;
    });
}

// Executa a função ao carregar a página
window.onload = carregarImoveis;

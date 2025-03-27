document.getElementById("buscar-dados").addEventListener("click", async function () {
    const destino = document.getElementById("destino-input").value;
    if (!destino) {
        alert("Digite um destino!");
        return;
    }

    const API_PASSAGENS = `https://serpapi.com/search.json?engine=google_flights&q=Passagens+para+${destino}&api_key=SUA_API_KEY`;
    const API_CUSTO_VIDA = `https://www.livingcost.org/api/country?country=${destino}`;
    const API_CAMBIO = `https://open.er-api.com/v6/latest/USD`;

    try {
        const [passagensRes, custoRes, cambioRes] = await Promise.all([
            fetch(API_PASSAGENS).then(res => res.json()),
            fetch(API_CUSTO_VIDA).then(res => res.json()),
            fetch(API_CAMBIO).then(res => res.json())
        ]);

        const precoPassagens = passagensRes.search_metadata ? "Preço encontrado!" : "Não encontrado";
        const custoVida = custoRes.success ? custoRes.data.cost : "Dados não disponíveis";
        const cambio = cambioRes.rates.BRL;

        document.getElementById("api-results").innerHTML = `
            <p>Preço médio de passagens: ${precoPassagens}</p>
            <p>Custo de vida médio: ${custoVida} USD</p>
            <p>Câmbio: 1 USD = ${cambio} BRL</p>
        `;
    } catch (error) {
        document.getElementById("api-results").innerHTML = "<p>Erro ao buscar os dados.</p>";
    }
});

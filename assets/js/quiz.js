document.addEventListener("DOMContentLoaded", function () {
    const quizContainer = document.getElementById("quiz-container");
    const quizSubmit = document.getElementById("quiz-submit");
    const quizResult = document.getElementById("quiz-result");

    const perguntas = [
        { pergunta: "Prefere frio ou calor?", opcoes: ["Frio", "Calor"] },
        { pergunta: "Gosta de cidades grandes?", opcoes: ["Sim", "Não"] }
    ];

    let respostas = [];

    perguntas.forEach((q, index) => {
        let div = document.createElement("div");
        div.innerHTML = `<p>${q.pergunta}</p>`;
        
        q.opcoes.forEach(opcao => {
            let btn = document.createElement("button");
            btn.textContent = opcao;
            btn.onclick = function () {
                respostas[index] = opcao;
                btn.style.backgroundColor = "#5A79C9";
                btn.style.color = "white";
            };
            div.appendChild(btn);
        });

        quizContainer.appendChild(div);
    });

    quizSubmit.onclick = function () {
        if (respostas.length < perguntas.length) {
            quizResult.textContent = "Responda todas as perguntas!";
            return;
        }

        let destino = (respostas.includes("Frio")) ? "Canadá" : "Austrália";
        quizResult.textContent = `Seu destino ideal é: ${destino}`;
    };
});

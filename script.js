// 28:17 criando mais perguntas
let perguntas = [{
    titulo: 'Gato',
    alternativas: ['Gat', 'Cat', 'Gate', 'Dog'],
    correta: 1
},
{
    titulo: 'Fire',
    alternativas: ['Fogo', 'Agua', 'Terra', 'Ar'],
    correta: 0
}, {
    titulo: 'Bird',
    alternativas: ['Gato', 'Urubu', 'Pombo', 'Passaro'],
    correta: 3
}];

let app = {
    statart() {
        this.atualPos = 0;
        this.totalPontos = 0;
        let alts = document.querySelectorAll('.alt');
        alts.forEach((element, index) => {
            element.addEventListener('click', () => {
                this.checaResposta(index);
            })
        });
        this.atualizaPontos();
        this.mostraQuestao(perguntas[this.atualPos]);
    },

    mostraQuestao(q) {
        this.qAtual = q;
        let titleDiv = document.getElementById('title');
        titleDiv.textContent = q.titulo;

        let alts = document.querySelectorAll('.alt');
        alts.forEach(function (element, index) {
            element.textContent = q.alternativas[index];
        });

    },
    proximaPerg() {
        this.atualPos++;
        if (this.atualPos == perguntas.length) {
            this.atualPos = 0;
        }
    },
    checaResposta(userRes) {
        let correta = this.qAtual.correta === userRes;
        if (correta) {

            this.totalPontos++;
        }

        this.mostraResposta(correta);
        this.atualizaPontos();
        this.proximaPerg();
        this.mostraQuestao(perguntas[this.atualPos])
    },
    atualizaPontos() {
        let scoreDiv = document.getElementById('pontos');
        scoreDiv.textContent = `Sua pontuaçao é: ${this.totalPontos}`;
    },
    mostraResposta(correta) {
        let resultDiv = document.getElementById('result');
        let result = '';
        if (correta) {
            result = 'Resposta correta';
        }
        else {
            let pergunta = perguntas[this.atualPos];
            let cIndice = pergunta.correta;
            let cTexto = pergunta.alternativas[cIndice];
            result = `Incorreto! Resporta correta é: ${cTexto}`;
        }
        resultDiv.textContent = result;
    }

}
app.statart();

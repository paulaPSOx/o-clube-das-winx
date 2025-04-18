const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        removerSelecaoDoPersonagem();
        personagem.classList.add('selecionado');

        alterarImagemPersonagemSelecionado(personagem);
        alterarNomePersonagemSelecionado(personagem);
        alterarDescricaoPersonagem(personagem);
    });
});

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    if (personagemSelecionado) {
        personagemSelecionado.classList.remove('selecionado');
    }
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.getAttribute('id');

    if (idPersonagem) {
        imagemPersonagemGrande.src = `./src/imagens/winx/${idPersonagem}.png`;
        imagemPersonagemGrande.alt = personagem.getAttribute('data-name');
    }
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    const nome = personagem.getAttribute('data-name');

    if (nome) {
        nomePersonagem.innerText = nome;
    }
}

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    const descricao = personagem.getAttribute('data-description');

    if (descricao) {
        descricaoPersonagem.innerText = descricao;
    }
}

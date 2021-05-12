export const calculadoraDeAlcanceDeAnuncio = (reais) => {
  // A visualização inicial é baseada na quantidade de dinheiro investido multiplicado pela quantidade visualizações geradas por real investido
  const visualizacoesPorRealInvestido = 30;
  const visualizacaoInicial = reais * visualizacoesPorRealInvestido;

  const razaoDosCliques = 0.12; // a cada 100 visualizações 12 pessoas clicam
  const razaoDosCompartilhamentos = 0.15; // a cada 20 pessoas que clicam 3 compartilham
  const visualizacaoPorCompartilhamento = 40; // cada compartilhamento gera 40 visualizações
  const maximoDeCompartilhamentosEmSequencia = 4; // cada anúncio é compartilhado até 4 vezes

  // A visualização total recebe esse volume inicial de forma direta
  let visualizacaoTotal = visualizacaoInicial;

  // visualizacao é a variável que vai armazenar o volume de visualização em cada ordem de compartilhamento
  let visualizacao = visualizacaoInicial;

  // O loop aqui serve para contabilizar a quantidade de visualização recebida em cada ordem de compartilhamento(da 1ª até 4ª ordem)
  for (let ordem = 1; ordem <= maximoDeCompartilhamentosEmSequencia; ordem++) {
    // click são alimentados pela visualizacao
    const cliques = visualizacao * razaoDosCliques;

    // compartilhamentos são alimentados por clicks
    const compartilhamentos = cliques * razaoDosCompartilhamentos;

    // visualização na ordem é alimentada pelos compartilhamentos
    const visualizacaoPorOrdem =
      compartilhamentos * visualizacaoPorCompartilhamento;

    // aqui o valor da visualização na ordem é transferido para a variável que será usada na contabilização de visualizações na próxima ordem do loop
    visualizacao = visualizacaoPorOrdem;

    // O valor total em visualizações é atualizado com a quantidade de visualizações na ordem
    visualizacaoTotal = visualizacaoTotal + visualizacaoPorOrdem;
  }

  // a visualização total é o resultado retornado pela função
  return visualizacaoTotal;
};

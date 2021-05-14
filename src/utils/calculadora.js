export const calculadoraDeAlcanceDeAnuncio = (raw) => {
  const reais = Number(raw);
  const visualizacoesPorRealInvestido = 30;
  const visualizacaoInicial = reais * visualizacoesPorRealInvestido;

  const razaoDosCliques = 0.12;
  const razaoDosCompartilhamentos = 0.15;
  const visualizacaoPorCompartilhamento = 40;
  const maximoDeCompartilhamentosEmSequencia = 4;

  let visualizacaoTotal = visualizacaoInicial;
  let cliqueTotal = 0;
  let compartilhamentoTotal = 0;

  let visualizacao = visualizacaoInicial;

  for (let ordem = 1; ordem <= maximoDeCompartilhamentosEmSequencia; ordem++) {
    const cliques = visualizacao * razaoDosCliques;
    cliqueTotal += cliques;

    const compartilhamentos = cliques * razaoDosCompartilhamentos;
    compartilhamentoTotal += compartilhamentos;

    const visualizacaoPorOrdem =
      compartilhamentos * visualizacaoPorCompartilhamento;

    visualizacao = visualizacaoPorOrdem;

    visualizacaoTotal = visualizacaoTotal + visualizacaoPorOrdem;
  }

  return {
    visualizacaoTotal: visualizacaoTotal,
    cliqueTotal: cliqueTotal,
    compartilhamentoTotal: compartilhamentoTotal,
  };
};

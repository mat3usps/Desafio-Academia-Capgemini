import { calculadoraDeAlcanceDeAnuncio } from "./calculadora";

describe("calculadoraDeAlcanceDeAnuncio", () => {
  it("should return an object containing total views, clicks and shares if a valid amount is given", () => {
    const sampleResult = {
      cliqueTotal: 940.19328,
      compartilhamentoTotal: 141.02899199999996,
      visualizacaoTotal: 8641.159679999999,
    };
    expect(calculadoraDeAlcanceDeAnuncio(100)).toEqual(sampleResult);
    expect(calculadoraDeAlcanceDeAnuncio("1").visualizacaoTotal).toBe(
      86.41159679999998
    );
    expect(calculadoraDeAlcanceDeAnuncio(0).compartilhamentoTotal).toBe(0);
  });
  it("should return null if an invalid amount is given", () => {
    expect(calculadoraDeAlcanceDeAnuncio("27-0").visualizacaoTotal).toBe(NaN);
    expect(calculadoraDeAlcanceDeAnuncio("PA3").cliqueTotal).toBe(NaN);
  });
});

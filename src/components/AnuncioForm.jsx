import {
  TextField,
  Typography,
  Box,
  Button,
  InputAdornment,
} from "@material-ui/core";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { useState } from "react";

import firebase from "../services/FirebaseService";
import { calculadoraDeAlcanceDeAnuncio } from "../utils/calculadora";

const AnuncioForm = () => {
  const [anuncio, setAnuncio] = useState({
    nome: "",
    cliente: "",
    inicio: "",
    fim: "",
    investimentoAoDia: "",
  });

  const [mensagemDeErro, setMensagemDeErro] = useState("");

  const handleChange = (prop) => (event) => {
    setAnuncio({ ...anuncio, [prop]: event.target.value });
  };

  const cadastrouAnuncio = async () => {
    if (
      anuncio.nome !== "" &&
      anuncio.cliente !== "" &&
      anuncio.inicio !== "" &&
      anuncio.fim !== "" &&
      anuncio.investimentoAoDia !== ""
    ) {
      const data1 = new Date(anuncio.inicio);
      const data2 = new Date(anuncio.fim);
      const diferenca = data2.getTime() - data1.getTime();
      const diferencaEmDias = diferenca / (1000 * 3600 * 24);
      const investimentoTotal =
        Number(anuncio.investimentoAoDia) * diferencaEmDias;
      const resultados = calculadoraDeAlcanceDeAnuncio(investimentoTotal);

      setAnuncio({
        nome: "",
        cliente: "",
        inicio: "",
        fim: "",
        investimentoAoDia: "",
      });

      await firebase
        .firestore()
        .collection("anunciosCadastrados")
        .add({
          nome: anuncio.nome,
          cliente: anuncio.cliente,
          inicio: anuncio.inicio,
          fim: anuncio.fim,
          investimentoAoDia: anuncio.investimentoAoDia,
          investimentoTotal: investimentoTotal,
          maximoDeVisualizacoes: resultados.visualizacaoTotal.toFixed(0),
          maximoDeCliques: resultados.cliqueTotal.toFixed(0),
          maximoDeCompartilhamentos:
            resultados.compartilhamentoTotal.toFixed(0),
        })
        .then(() => {
          console.log("Anúncio Cadastrado.");
        })
        .catch((error) => {
          console.log("Anúncio não cadastrado.", error);
        });
    } else {
      setMensagemDeErro(
        "Antes de cadastrar um anúncio, preencha todos os campos."
      );
    }
  };

  return (
    <form style={{ width: "300px", height: "370px", padding: "15px" }}>
      <Typography variant="h3" align="center">
        Novo Anúncio
      </Typography>
      <TextField
        value={anuncio.nome}
        onChange={handleChange("nome")}
        label="Nome do Anúncio"
        variant="outlined"
        size="small"
        margin="dense"
        fullWidth
      />
      <TextField
        value={anuncio.cliente}
        onChange={handleChange("cliente")}
        label="Cliente"
        variant="outlined"
        size="small"
        margin="dense"
        fullWidth
      />
      <Box fullWidth display="flex" justifyContent="space-between">
        <TextField
          value={anuncio.inicio}
          onChange={handleChange("inicio")}
          label="Início"
          type="date"
          margin="dense"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          value={anuncio.fim}
          onChange={handleChange("fim")}
          label="Fim"
          type="date"
          margin="dense"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>

      <TextField
        value={anuncio.investimentoAoDia}
        onChange={handleChange("investimentoAoDia")}
        label="Investimento por dia"
        variant="outlined"
        size="small"
        margin="dense"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon />
            </InputAdornment>
          ),
        }}
        fullWidth
      />

      <Box fullWidth display="flex" justifyContent="center" margin="5px">
        <Button variant="outlined" onClick={cadastrouAnuncio}>
          Cadastrar
        </Button>
      </Box>

      <Typography variant="h6" align="center">
        {mensagemDeErro}
      </Typography>
    </form>
  );
};

export default AnuncioForm;

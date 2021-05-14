import { Typography, Box, GridList, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";

import firebase from "../services/FirebaseService";
import CartaoDeCadastrado from "../components/CartaoDeCadastrado";

const Cadastrados = () => {
  const [anunciosCadastrados, setAnunciosCadastrados] = useState([]);
  const [filtroPorCliente, setFiltroPorCliente] = useState("");
  const [filtroPorData, setFiltroPorData] = useState({ inicio: "", fim: "" });

  useEffect(() => {
    atualizarCadastros();
  }, []);

  const atualizarCadastros = async () => {
    await firebase
      .firestore()
      .collection(`anunciosCadastrados`)
      .onSnapshot((doc) => {
        let anuncios = [];

        doc.forEach((anuncio) => {
          console.log(anuncio);
          anuncios.push({
            id: anuncio.id,
            nome: anuncio.data().nome,
            cliente: anuncio.data().cliente,
            inicio: anuncio.data().inicio,
            fim: anuncio.data().fim,
            investimentoAoDia: anuncio.data().investimentoAoDia,
            investimentoTotal: anuncio.data().investimentoTotal,
            maximoDeVisualizacoes: anuncio.data().maximoDeVisualizacoes,
            maximoDeCliques: anuncio.data().maximoDeCliques,
            maximoDeCompartilhamentos: anuncio.data().maximoDeCompartilhamentos,
          });
        });
        setAnunciosCadastrados(anuncios);
      });
  };

  const filtrando = (string, inicio, fim) => {
    if (string !== "") {
      const filtrados = anunciosCadastrados.filter((anuncio) => {
        const cliente = anuncio.cliente.toLowerCase();
        const termo = string.toLowerCase();
        return cliente.indexOf(termo) >= 0;
      });

      return filtrados;
    } else if (inicio !== "" && fim !== "") {
      const periodoInicio = new Date(inicio);
      const periodoFim = new Date(fim);
      const filtrados = anunciosCadastrados.filter((anuncio) => {
        const anuncioInicio = new Date(anuncio.inicio);
        const anuncioFim = new Date(anuncio.fim);
        return periodoInicio >= anuncioInicio && periodoFim <= anuncioFim;
      });

      return filtrados;
    }
  };

  return (
    <Box maxWidth="500px" marginTop="40px">
      <Typography variant="h2" align="center" gutterbottom>
        Cadastrados
      </Typography>

      <Box display="flex" alignItems="center" justifyContent="space-evenly">
        <Box width="165px" display="flex" flexDirection="column" align="center">
          <Box height="25px">
            <Typography variant="h6" align="center">
              {" "}
              Filtrar por Cliente{" "}
            </Typography>
          </Box>
          <TextField
            value={filtroPorCliente}
            onChange={(event) => setFiltroPorCliente(event.target.value)}
            label="Cliente"
            variant="outlined"
            size="small"
            margin="dense"
            fullWidth
          />

          <Box height="25px">
            <Typography variant="h6" align="center">
              {" "}
              Filtrar por Período{" "}
            </Typography>
          </Box>
          <TextField
            value={filtroPorData.inicio}
            onChange={(event) =>
              setFiltroPorData({ ...filtroPorData, inicio: event.target.value })
            }
            label="Início"
            type="date"
            margin="dense"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            value={filtroPorData.fim}
            onChange={(event) =>
              setFiltroPorData({ ...filtroPorData, fim: event.target.value })
            }
            label="Fim"
            type="date"
            margin="dense"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>

        <Box
          marginLeft="5px"
          display="flex"
          justifyContent="center"
          height="230px"
          width="325px"
        >
          <GridList>
            {filtroPorCliente !== "" ||
            (filtroPorData.inicio !== "" && filtroPorData.fim !== "")
              ? filtrando(
                  filtroPorCliente,
                  filtroPorData.inicio,
                  filtroPorData.fim
                ).map((anuncio) => (
                  <CartaoDeCadastrado anuncio={anuncio} key={anuncio.nome} />
                ))
              : anunciosCadastrados.map((anuncio) => (
                  <CartaoDeCadastrado anuncio={anuncio} key={anuncio.nome} />
                ))}
          </GridList>
        </Box>
      </Box>
    </Box>
  );
};

export default Cadastrados;

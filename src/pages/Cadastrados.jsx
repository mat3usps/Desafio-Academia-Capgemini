import {
  Typography,
  Box,
  GridList,
  TextField,
  Button,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

import firebase from "../services/FirebaseService";
import CartaoDeCadastrado from "../components/CartaoDeCadastrado";

const Cadastrados = () => {
  const [anunciosCadastrados, setAnunciosCadastrados] = useState([]);
  const [filtroPorCliente, setFiltroPorCliente] = useState("");

  useEffect(() => {
    atualizarCadastros();
    console.log("cadastrados", anunciosCadastrados);
  }, []);

  const atualizarCadastros = async () => {
    await firebase
      .firestore()
      .collection(`anunciosCadastrados`)
      .onSnapshot((doc) => {
        let anuncios = [];

        doc.forEach((anuncio) => {
          anuncios.push({
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

  let filtrados = null;
  console.log("filtrados", filtrados);

  const filtrandoClientes = (string) => {
    if (filtrados) {
      filtrados = null;
      atualizarCadastros();
    } else {
      filtrados = anunciosCadastrados.filter((anuncio) => {
        const cliente = anuncio.cliente.toLowerCase();
        const termo = string.toLowerCase();
        return cliente.indexOf(termo) >= 0;
      });
    }
  };

  return (
    <Box maxWidth="500px" marginTop="40px">
      <Typography variant="h2" align="center" gutterbottom>
        Cadastrados
      </Typography>

      <Box display="flex" alignItems="center" justifyContent="space-evenly">
        <Box>
          <Box display="flex" justifyContent="space-evenly">
            <Button
              variant="outlined"
              onClick={filtrandoClientes(filtroPorCliente)}
            >
              {filtrados ? <CloseIcon /> : <SearchIcon />}
            </Button>
            <Typography variant="h6"> por Cliente </Typography>
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

          <Typography variant="h6"> por Período </Typography>
          <TextField
            label="Início"
            type="date"
            margin="dense"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
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
            {filtrados
              ? filtrados.map((anuncio) => (
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

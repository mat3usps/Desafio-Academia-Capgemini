import { Typography, Box, GridListTile, Button } from "@material-ui/core";
import { useState } from "react";

const CartaoDeCadastrado = ({ anuncio }) => {
  const [verso, setVerso] = useState(false);
  const {
    nome,
    cliente,
    inicio,
    fim,
    investimentoAoDia,
    investimentoTotal,
    maximoDeVisualizacoes,
    maximoDeCliques,
    maximoDeCompartilhamentos,
  } = anuncio;

  const virarLado = () => {
    if (verso) {
      setVerso(false);
    } else {
      setVerso(true);
    }
  };

  return (
    <GridListTile cols={1}>
      <Box
        border="1px solid gray"
        borderRadius="10px"
        width="300px"
        height="220px"
        margin="5px"
      >
        {!verso ? (
          <Box display="flex" flexDirection="column" bgcolor="background.paper">
            <Typography variant="h5" align="center">
              Cliente
            </Typography>
            <Typography variant="h4" align="center" gutterbottom>
              {cliente}
            </Typography>
            <Typography variant="h6" align="center" gutterbottom>
              Nome: {nome}
            </Typography>
            <Typography variant="h6" align="center" gutterbottom>
              Período: {`${inicio} a ${fim}`}
            </Typography>
            <Typography
              variant="h6"
              align="center"
              gutterbottom
            >{`Investimento(ao dia): ${investimentoAoDia}`}</Typography>
          </Box>
        ) : (
          <Box alignItems="center">
            <Typography variant="h6" align="center" gutterbottom>
              Máximo de Visualizações: {maximoDeVisualizacoes}{" "}
            </Typography>
            <Typography variant="h6" align="center" gutterbottom>
              Máximo de Cliques: {maximoDeCliques}{" "}
            </Typography>
            <Typography variant="h6" align="center" gutterbottom>
              Maximo de Compartilhamentos: {maximoDeCompartilhamentos}{" "}
            </Typography>
            <Typography variant="h6" align="center" gutterbottom>
              Investimento Total
            </Typography>
            <Typography variant="h5" align="center" gutterbottom>
              {investimentoTotal}{" "}
            </Typography>
          </Box>
        )}
        <Box m={1} fullWidth display="flex" justifyContent="center">
          <Button variant="outlined" onClick={virarLado}>
            {verso ? "Principal" : "Relatórios"}
          </Button>
        </Box>
      </Box>
    </GridListTile>
  );
};

export default CartaoDeCadastrado;

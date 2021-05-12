import { Typography, Box, TextField, InputAdornment } from "@material-ui/core";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { useState } from "react";
import { calculadoraDeAlcanceDeAnuncio } from "../utils/calculadora";

const Calculadora = () => {
  const [investimento, setInvestimento] = useState("");

  return (
    <div>
      <Box
        maxWidth="550px"
        marginTop="20px"
        display="flex"
        flexDirection="column"
      >
        <Typography variant="h2" align="center" gutterbottom>
          Calculadora de Alcance
        </Typography>
        <Typography variant="h6" align="center" gutterbottom>
          A calculadora de alcance faz uma expeculação média da quantidade de
          visualização que um anúncio pode ter baseado no valor investido
          inicialmente e dados padronizados de acordo com nossas próprias
          análises.
        </Typography>

        <Box m={2} display="flex" flexDirection justifyContent="space-evenly">
          <TextField
            value={investimento}
            onChange={(event) => setInvestimento(event.target.value)}
            label="Investimento"
            variant="outlined"
            margin="dense"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AttachMoneyIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            value={calculadoraDeAlcanceDeAnuncio(investimento).toFixed(0)}
            label="Visualizações"
            variant="outlined"
            margin="dense"
          />
        </Box>
      </Box>
    </div>
  );
};

export default Calculadora;

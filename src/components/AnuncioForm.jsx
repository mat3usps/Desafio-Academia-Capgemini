import {
  TextField,
  Typography,
  Box,
  FormControl,
  InputAdornment,
} from "@material-ui/core";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { useState } from "react";

const AnuncioForm = () => {
  const [anuncio, setAnuncio] = useState({
    nome: "",
    cliente: "",
    inicio: "",
    fim: "",
    investimento: "",
  });

  const handleChange = (prop) => (event) => {
    setAnuncio({ ...anuncio, [prop]: event.target.value });
  };

  return (
    <form style={{ width: "300px", height: "300px", padding: "15px" }}>
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
        value={anuncio.investimento}
        onChange={handleChange("investimento")}
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
    </form>
  );
};

export default AnuncioForm;

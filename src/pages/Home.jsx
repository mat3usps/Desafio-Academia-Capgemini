import { Typography, Box, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Box maxWidth="500px" marginTop="50px">
        <Typography variant="h2" gutterbottom>
          {" "}
          Sobre{" "}
        </Typography>
        <Typography variant="h6" gutterbottom>
          {" "}
          CadastrAnúncio é um sistema de cadastro de anúncios feito sob medida
          para a agência Divulga Tudo. O sistema tem foco no gerenciamento dos
          anúncios online e foi desenvolvido de forma a facilitar a gestão e
          rastreamento dos resultados de suas campanhas nas redes sociais.{" "}
        </Typography>

        <Box m={2} fullWidth display="flex" justifyContent="space-evenly">
          <Button variant="outlined" component={Link} to="/cadastrados">
            Anúncios Cadastrados
          </Button>
          <Button variant="outlined" component={Link} to="/calculadora">
            Calculadora de Alcance
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Home;

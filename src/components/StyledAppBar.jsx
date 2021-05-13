import {
  Typography,
  AppBar,
  Toolbar,
  Box,
  Button,
  ButtonBase,
  Modal,
} from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useState } from "react";

import AnuncioForm from "./AnuncioForm";
import Logo from "../assets/images/logo.png";

const NewAppBar = styled(AppBar)({
  background: "linear-gradient(45deg, #FFF 30%, #FF4500 90%)",
  color: "#FF4500",
  height: 60,
});

const StyledAppBar = () => {
  const [displayModal, setDisplayModal] = useState(false);

  const openModal = (event) => {
    event.preventDefault();
    setDisplayModal(true);
  };

  const closeModal = () => {
    setDisplayModal(false);
  };

  return (
    <>
      <NewAppBar position="relative">
        <Toolbar>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <ButtonBase component={Link} to="/">
              <img
                src={Logo}
                alt="logo"
                style={{ width: "40px", margin: "5px" }}
              />
              <Typography variant="h4">CadastrAnúncio</Typography>
            </ButtonBase>

            <Button variant="outlined" onClick={openModal}>
              Cadastrar Novo
            </Button>
          </Box>
        </Toolbar>
      </NewAppBar>
      <Modal open={displayModal} onClose={closeModal}>
        <Box display="flex" justifyContent="center">
          <Box
            borderRadius={7}
            position="absolute"
            top="15vh"
            bgcolor="background.paper"
          >
            <AnuncioForm />
          </Box>
        </Box>
      </Modal>
    </>
  );
};
export default StyledAppBar;

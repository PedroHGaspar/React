import { Button, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import StarIcon from '@mui/icons-material/Star';
import styled from "@emotion/styled";


function App() {

  const BlueButton = styled(Button)(({ theme }) => ({//ESSE AQUI É UM BOTAO CUSTOM QUE VAI SER CHAMADO LA EMBAIXO COMO BlueButton. ELE CRIOU O THEME LA NO THEME.JS
    backgroundColor: theme.palette.terciary.main, //Aqui ele usa a cor declarada la no theme.js, basicamente ele chama com o . de acordo com a ordem de chamadas de variável.
    color: "#888",
    margin: 5,
    "&:hover": {//PRA HOVER DE BUTTON
      backgroundColor: "lightblue"
    },
    "&:disabled": {//PRA QUANDO O BOTAO ESTIVER DISABLED
      backgroundColor: "gray",
      color: "white"
    },
  }));

  return (
    <div>
      <Button color="primary" startIcon={<StarIcon />} variant="text">Text</Button>
      <Button color="secondary" startIcon={<DeleteIcon />} variant="contained">Contained</Button>
      <Button color="terciary" endIcon={<SendIcon />} variant="outlined">Outlined</Button>

      <Typography variant="h1" component="p">
        It uses h1 style but it's a p tag because of the component
      </Typography>

      <Button variant="contained" sx={{
        backgroundColor: "skyblue",
        color: "secondary",
        margin: 5,
        "&:hover": {
          backgroundColor: "lightblue"
        },
        "&:disabled": {
          backgroundColor: "gray",
          color: "secondary"
        }
      }}>My Unique Button</Button>

      <BlueButton>My Button</BlueButton>
      <BlueButton>Another Button</BlueButton>

    </div>
  );
}

export default App;

import "./Header.css";
import photo from "../../ui/Lucy/media/Lucy.jpeg";
import { Container, Typography, Button } from "@mui/material";
import { TITLE } from "../../ui/styles";
import { useState } from "react";

function Header({ onPersonSelect }) {
  const [selectedPerson, setSelectedPerson] = useState(null);

  // Function to handle the image click and set the selected person
  const handleClickLucy = () => {
    setSelectedPerson("Lucy");
    onPersonSelect("Lucy");
  };

  // Function to handle the image click and set the selected person
  const handleClickArtu = () => {
    setSelectedPerson("Arturo");
    onPersonSelect("Arturo");
  };

  return (
    <div className="header">
      <Button onClick={handleClickLucy}>
        <img src={photo} alt="Lucy" />
      </Button>
      <Typography color="primary" margin={3} sx={TITLE}>
        Celia Lucia <br /> Castañeda Arizaga
      </Typography>
      <Container maxWidth="xs"></Container>
      <Typography color="primary" margin={3} sx={TITLE}>
        Arturo <br /> García Brambila
      </Typography>
      <Button onClick={handleClickArtu}>
        <img src={photo} alt="Arturo" />
      </Button>
    </div>
  );
}

export default Header;

import "./Header.css";
import photo from "../../ui/Lucy/media/Lucy.jpeg";
import { Container, Typography, Button } from "@mui/material";
import { TITLE } from "../../ui/styles";
import { useState } from "react";

/**
 * Profile Header
 * @author Arturo García Brambila
 * @author Celia Lucia Castañeda Arizaga
 * Includes both author's profile pictures, full names and social media
 * When a profile picture is clicked on, changes the theme to the person clicked
 * Uses the current theme for the font color and font type
 * @param onPersonSelect state function that changes when a profile picture is clicked on
 * @returns <div> Header with both profiles´ basic info
 */

function Header({ onPersonSelect }) {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleClickLucy = () => {
    setSelectedPerson("Lucy");
    onPersonSelect("Lucy");
  };

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

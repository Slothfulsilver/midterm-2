import "./Header.css";
import photo from "../../ui/Lucy/media/Lucy.jpeg";
import { Container, Typography, Button } from "@mui/material";
import { TITLE, TEXT } from "../../ui/styles";
import { useState } from "react";

/**
 * Profile Header
 * @author Arturo García Brambila
 * @author Celia Lucia Castañeda Arizaga
 * Includes both author's profile pictures, full names and brief introduction
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
      <div className="info">
        <Typography color="primary" margin={3} marginTop={1} sx={TITLE}>
          Celia Lucia Castañeda Arizaga
        </Typography>
        <Typography color="secondary" marginInline={3} sx={TEXT}>
          ｡ﾟ•┈୨♡୧┈• ｡ﾟ
          <br/> Hi! I´m Lucy :) 
          <br/> I love learning and giving my all! Some of my hobbies are dancing, drawing and lifting weights.
          <br/> Surprisingly, my favourite color isn't pink.
        </Typography>
      </div>
      <div className="info">
      <Typography color="primary" margin={3} marginTop={1} sx={TITLE}>
        Arturo García Brambila
      </Typography>
      <Typography color="secondary" marginInline={3} sx={TEXT}>
          ｡ﾟ•┈୨♡୧┈• ｡ﾟ
          <br/> Hi! I´m Lucy :) 
          <br/> I love learning and giving my all! Some of my hobbies are dancing, drawing and lifting weights.
          <br/> Surprisingly, my favourite color isn't pink.
        </Typography>
      </div>
      <Button onClick={handleClickArtu}>
        <img src={photo} alt="Arturo" />
      </Button>
    </div>
  );
}

export default Header;

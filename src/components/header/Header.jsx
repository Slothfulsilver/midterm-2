import * as React from 'react';
import "./header.css";
import photo from "../../ui/Lucy/media/Lucy.jpeg";
import photo2 from "../../ui/Arturo/media/icon.png";
import { Alert, Badge, Button, CircularProgress, Popover, Typography } from '@mui/material';
import { TITLE, TEXT, TITLE2, TEXT2 } from "../../ui/styles";
import MailIcon from '@mui/icons-material/Mail';
import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { THEME } from "../../ui/Lucy/theme";
import { THEME2 } from "../../ui/Arturo/theme";
import { Container } from '@mui/system';
import Stack from '@mui/material/Stack';


/**
 * Profile Header
 * @author Arturo García Brambila
 * @author Celia Lucia Castañeda Arizaga
 * Includes both author's profile pictures, full names and brief introduction
 * Uses the current theme for the font color and font type
 * @param onPersonSelect state function that changes when a profile picture is clicked on
 * @returns <div> Header with both profiles´ basic info
 */

function Header({ onPersonSelect, selectedTheme}) {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const handleClickLucy = () => {
    setSelectedPerson("Lucy");
    onPersonSelect("Lucy");
  };

  const handleClickArtu = () => {
    setSelectedPerson("Arturo");
    onPersonSelect("Arturo");
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>

    <div className="header">
      {selectedTheme === "Arturo"? (
        <ThemeProvider theme={THEME2}>
        <div className="info">
          <Typography color="primary" margin={3} marginTop={1} sx={TITLE2}>
            Arturo García Brambila
          </Typography>
          <Typography color="secondary" marginInline={3} sx={TEXT2}>
            ARTURO INFO
            <br/> Hi! I´m Lucy :) 
            <br/> I love learning and giving my all! Some of my hobbies are dancing, drawing and lifting weights.
            <br/> Surprisingly, my favourite color isn't pink.
          </Typography>
        </div>
        <Button disabled onClick={handleClickArtu}>
          <img src={photo2} alt="Arturo" />
        </Button>
      </ThemeProvider>
      ):(
        <ThemeProvider theme={THEME}>
        <Stack spacing={2}>
        <Button disabled onClick={handleClickLucy}>
          <img src={photo} alt="Lucy" />
        </Button>
        <Container>
        <div className="info">
          <Typography color="primary" margin={3} marginTop={1} sx={TITLE}>
            Celia Lucia Castañeda Arizaga
          </Typography>
          <Typography color="secondary" marginInline={3} marginY={2}  sx={TEXT}>
            ｡ﾟ•┈୨♡୧┈• ｡ﾟ
            <br/> Hi! I´m Lucy :) 
            <br/> I love learning and giving my all! Some of my hobbies are dancing, drawing and lifting weights.
            <br/> Surprisingly, my favourite color isn't pink.
          </Typography>
          <Typography color="secondary" marginInline={3} marginY={2} sx={TEXT}>
            ｡ﾟ•┈୨♡୧┈• ｡ﾟ ｡ﾟ•┈୨♡୧┈• ｡ﾟ ｡ﾟ•┈୨♡୧┈• ｡ﾟ
            <li> My favourite band is Gorillaz
            </li><li> I do not like web development :)
            </li><li> I am scared of heights even though I am tall 
            </li><li> Nintendo is better than Sega
            </li>
          </Typography>
          <Typography color="secondary" marginInline={3} marginY={2}  sx={TEXT}>
            GIFTS:
          </Typography>
        </div>
        </Container>
        <Container>
          <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                CONGRATULATIONS YOU WON a FREE IPOD NANO
                <Badge badgeContent={999} color="secondary">
                    <MailIcon color="action" />
                </Badge>
            </Button>
            <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            >
            <Alert severity="error">Take action</Alert>
            <Typography sx={{ p: 2 }}>Your computer has been INFECTED, PAY $9999 to get your DATA back!!!</Typography>
            </Popover>
            <Typography color="secondary" marginInline={3} marginY={6} sx={TEXT}>
                <CircularProgress />...       Downloading the book of War and Peace by Leo Tolstoy and converting it to hex using the Big Mac Index
            </Typography>
          </Container>
        </Stack>
      </ThemeProvider>)}
    </div>
    </Container>
  );
}

export default Header;

import './infoSocial.css'
import * as React from 'react';
import { Alert, Button, CircularProgress, Popover, Typography } from '@mui/material';
import { TITLE, TEXT } from "../../ui/styles";

/**
 * Career Summary, Main Social Media Links
 * @author Arturo García Brambila
 * @author Celia Lucia Castañeda Arizaga
 * Returns Career Summary data and working social media links
 * Uses the current theme for the font color and font type
 * @returns <div> Career Summary + links
 */
function InfoSocial() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
  
    return (
        //Info of the person and their social networks
        <div className="container">
            <Typography color="primary" margin={3} marginY={8} sx={TITLE}>
                Career Summary
            </Typography>
            <Typography color="secondary" marginInline={3} marginY={4} sx={TEXT}>
            ｡ﾟ•┈୨♡୧┈• ｡ﾟ
            <br/> Universidad Panamericana Guadalajara (2020-2025)
            <br/> Bachelor of Computer Science specialized in Data Science
            <br/>
            <br/>
            ｡ﾟ•┈୨♡୧┈• ｡ﾟ
            <br/> Arte y Cultura UP GDL (2021)
            <br/> Front End Developer
            <br/>
            <br/>
            ｡ﾟ•┈୨♡୧┈• ｡ﾟ
            <br/> Intel GDC (2023)

            <br/> Debug Tools Development Intern
            </Typography>
            <Typography color="secondary" marginInline={3} marginY={6} sx={TEXT}>
            ｡ﾟ•┈୨♡୧┈• ｡ﾟ
            <ul>
                <li><a href="https://github.com/888Lucy888">Github</a></li>
                <li><a href="https://mx.linkedin.com/in/celia-lucia-casta%C3%B1eda-arizaga-137375216">LinkedIn</a></li>
                <li><a href="https://www.instagram.com/a_lucyd_dream/">Instagram</a></li>
            </ul>
            </Typography>
            <br/>
            <br/>
            <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                Free iPod nano
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
            <Typography sx={{ p: 2 }}>Your computer has been infected, pay $9999 to get your data back!</Typography>
            </Popover>
            <Typography color="secondary" marginInline={3} marginY={6} sx={TEXT}>
                <CircularProgress />...       Downloading the book War and Peace by Leo Tolstoy and converting it to hex using the Big Mac Index
            </Typography>
        </div>
    );
};

export default InfoSocial
import './infoSocial.css'
import { Typography } from '@mui/material';
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
    return (
        //Info of the person and their social networks
        <div className="container">
            <Typography color="primary" margin={3} marginTop={1} sx={TITLE}>
                Career Summary
            </Typography>
            <Typography color="secondary" marginInline={3} sx={TEXT}>
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
            <Typography color="secondary" marginInline={3} sx={TEXT}>
            ｡ﾟ•┈୨♡୧┈• ｡ﾟ
            <ul>
                <li><a href="https://github.com/888Lucy888">Github</a></li>
                <li><a href="https://mx.linkedin.com/in/celia-lucia-casta%C3%B1eda-arizaga-137375216">LinkedIn</a></li>
                <li><a href="https://www.instagram.com/a_lucyd_dream/">Instagram</a></li>
            </ul>
            </Typography>
        </div>
    );
};

export default InfoSocial
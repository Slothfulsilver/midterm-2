import "./header.css";
import photo from "../../ui/Lucy/media/Lucy.jpeg";
import { Typography } from "@mui/material";
import { TITLE } from "../../ui/styles";
function Header() {
  return (
    <div className="header">
      <img src={photo} alt="txt" />
      <Typography color="primary" margin={3} sx={TITLE}>
        Celia Lucia <br /> Castañeda Arizaga
      </Typography>
    </div>
  );
}

export default Header;

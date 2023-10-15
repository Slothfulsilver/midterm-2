//import { ThemeProvider } from "@mui/material";
import ar from "../../ui/Lucy/media/ARApp1.jpeg"
import './header.css'
function Header() {
    return (
        <div className="header">
          <img src={ar} alt="txt"/>
          <h2>Name</h2>
        </div>
    );
}

export default Header
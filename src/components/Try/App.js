import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { THEME } from "./ui/Lucy/theme";
import { THEME2 } from "./ui/Arturo/theme";
import Gallery from "../gallery/Gallery";
//import Header from "../header/Header";
import { BottomNavigation, BottomNavigationAction, Container } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Navbar from "./components/navbar/Navbar";
import InfoSocial from "./components/infoSocial/InfoSocial";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Delicious+Handrawn&family=Orelega+One&family=Readex+Pro&display=swap');
</style>;

/**
 * Profile Web Page App
 * @author Arturo García Brambila
 * @author Celia Lucia Castañeda Arizaga
 * @library MUI https://mui.com/
 * Interfaces 2nd Midterm Project
 * Uses different unique Themes for each profile
 * Profiles include: Name, Profile Picture, About Me, Social Media Links, Projects, CV
 * @returns <>
 */

function App() {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [pTheme, setPTheme] = useState(null);
  const [view, setView] = useState(null);
  const [value, setValue] = useState(0);

  const setBackgroundFromItem = (item) => {
    setBackgroundImage(item.img);
  };

  const changeTheme = (selectedPerson) => {
    setPTheme(selectedPerson);
  };
  
  const changeComponent = (page) => {
    setView(page);
  };

  return (
    <>
    <Navbar onUserChange={changeTheme} onViewChange={changeComponent}/>
    {pTheme === "Arturo"? (
      <ThemeProvider theme={THEME2}>
                <div
                  className="App"
                  style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "600px",
                  }}
                >
                  <Container
                    maxWidth="xl"
                    style={{ background: "linear-gradient(to bottom, #000000, #c272db" }}
                  >
                    {view === "Career"? (
                    <InfoSocial />
                    ): view === "Projects"? (
                    <Gallery onItemSelect={setBackgroundFromItem} />
                    ):(
                    <Header onPersonSelect={changeTheme} selectedTheme={pTheme} />
                    )}
                  </Container>
                </div>
                <BottomNavigation
                sx={{backgroundColor: "#FFD9DF", marginTop: "1rem"}}
                showLabels
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              >
              <BottomNavigationAction label="Like" icon={<FavoriteIcon />} />
            </BottomNavigation>
      </ThemeProvider>
    ):(
      <ThemeProvider theme={THEME}>
      <div
        className="App"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "repeat",
          backgroundSize: "600px",
        }}
      >
        <Container
          maxWidth="xl"
          style={{ background: "linear-gradient(to bottom, #FFC0CB, #E0115F" }}
        >
          {view === "Career"? (
          <InfoSocial />
          ): view === "Projects"? (
          <Gallery onItemSelect={setBackgroundFromItem} />
          ):(
          <Header onPersonSelect={changeTheme} selectedTheme={pTheme}/>
                    )}
        </Container>
      </div>
      <BottomNavigation
      sx={{backgroundColor: "#FFD9DF", marginTop: "1rem"}}
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Like" icon={<FavoriteIcon />} />
    </BottomNavigation>
      </ThemeProvider>
    )}
  </>
  );
}

export default App;

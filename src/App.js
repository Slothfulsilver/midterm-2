import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { THEME } from "./ui/Lucy/theme";
import { THEME2 } from "./ui/Arturo/theme";
import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/Header";
import { BottomNavigation, BottomNavigationAction, Container } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';

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
  const [value, setValue] = useState(0);

  const setBackgroundFromItem = (item) => {
    setBackgroundImage(item.img);
  };

  const changeTheme = (selectedPerson) => {
    setPTheme(selectedPerson);
  };
  
  return (
    <>
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
            style={{ background: "linear-gradient(to bottom, #000000, #F18FA0" }}
          >
            <Header onPersonSelect={changeTheme} />
            <Gallery onItemSelect={setBackgroundFromItem} />
          </Container>
        </div>
        <BottomNavigation
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
          <Header onPersonSelect={changeTheme} />
          <Gallery onItemSelect={setBackgroundFromItem} />
        </Container>
      </div>
      <BottomNavigation
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

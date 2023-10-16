import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { THEME } from "./ui/Lucy/theme";
import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/Header";
import { Container } from "@mui/material";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Delicious+Handrawn&family=Orelega+One&family=Readex+Pro&display=swap');
</style>;

function App() {
  const [backgroundImage, setBackgroundImage] = useState(null); // State for background image

  // Function to set the background image when a different item is clicked
  const setBackgroundFromItem = (item) => {
    setBackgroundImage(item.img);
  };

  return (
    <ThemeProvider theme={THEME}>
      <div
        className="App"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "repeat",
          backgroundSize: "500px",
        }}
      >
        <Container
          maxWidth="xl"
          style={{ background: "linear-gradient(to bottom, #FFC0CB, #E0115F" }}
        >
          <Header />
          <Gallery onItemSelect={setBackgroundFromItem} />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;

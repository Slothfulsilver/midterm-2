import { ThemeProvider } from "@emotion/react";
import { THEME } from "./ui/Lucy/theme";
import "./App.css";
import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/header";
import { Container } from "@mui/material";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Delicious+Handrawn&family=Orelega+One&family=Readex+Pro&display=swap');
</style>;

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <div className="App lucy">
        <Container>
          <Header />
          <Gallery />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;

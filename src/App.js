import "./App.css";
import InfoSocial from "./components/InfoSocial/infoSocial";
import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/header";
//import Project from "./components/project/Project";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Delicious+Handrawn&family=Orelega+One&family=Readex+Pro&display=swap');
</style>;

function App() {
  return (
    <div className="App">
      <div className="Lucy">
        <Header/>
        <div className="inf">
          <Gallery/>
          <InfoSocial/>
        </div>
      </div>
      {/* <Project/> */}
    </div>
  );
}

export default App;

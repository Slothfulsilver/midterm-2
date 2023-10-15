import "./App.css";
import Gallery from "./components/gallery/Gallery";
import Project from "./components/project/Project";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Delicious+Handrawn&family=Orelega+One&family=Readex+Pro&display=swap');
</style>;

function App() {
  return (
    <div className="App">
      <Gallery></Gallery>
      <Project></Project>
    </div>
  );
}

export default App;

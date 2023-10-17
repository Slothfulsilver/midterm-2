import Header from "../components/Header/header";

import "../components/SCSS/Home.scss"
import Gallery from "../components/Try/components/gallery/Gallery";

function Home(){
    return(
        <div>
             <Header/>
            <div className="info" id="Lucy">
                <h2>Lucy</h2>
            </div>
            <div className="info" id="Arturo">
                <h2>Arturo</h2>
            </div>
        </div>
       
    )
}

export default Home
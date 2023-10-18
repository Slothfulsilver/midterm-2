import Header from "../components/Header/header";
import "../components/SCSS/Home.scss"
import lucy from "../components/Imgs/Lucy/IMGS/Lucy.jpeg"

function Home(){
    return(
        <div>
            <Header/>
            <div className="home lucy" id="lucy">
                <img src={lucy} alt="Lucy"/>
                    <div className="description">
                        <h1>Celia Lucia Castañeda Arizaga</h1>
                        <p>  ｡ﾟ•┈୨♡୧┈• ｡ﾟ
                        <br/> Hi! I´m Lucy :) 
                        <br/> I love learning and giving my all! Some of my hobbies are dancing, drawing and lifting weights.
                        <br/> Surprisingly, my favourite color isn't pink.</p>
                    </div>
            </div>       
        </div>
    )
}

export default Home
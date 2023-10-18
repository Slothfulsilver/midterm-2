import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/header/Header";

function Projects(){
    return(
        <div>
            <Header/>

            <Container fluid>
                <div className="title">
                    <h2>Personal Projects</h2>
                </div>
                <Row md={4}>
                    {/*Map de info
                    Return for item in info*/}
                    <Col>
                        <div className="image">
                            <img alt="Project"/>
                        </div>
                        <div className="content">
                            <h3>Name</h3>
                            <span>Collaborators</span>
                            <p>Description</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Projects
import{Container,Row,}from "react-bootstrap"


const MyFooter=function(){
    return(
        <Container fluid className="bg-secondary mt-3">
            <Row className="py-3">
                <ul className="d-flex nav justify-content-center mb-4 ">
                    <li className="nav-item ms-2">Home</li>
                    <li className="nav-item ms-2">Features</li>
                    <li className="nav-item ms-2">Pricing</li>
                    <li className="nav-item ms-2">FAQ</li>
                    <li className="nav-item ms-2">About</li>
                </ul>
                <hr />
                <p class="text-center">© 2024 Company, Inc</p>
            </Row>
        </Container>
    )
}

export default MyFooter
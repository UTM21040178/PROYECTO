import { Card, Col, Container, Row } from "react-bootstrap"
import { Calendar2CheckFill, MicrosoftTeams, PeopleFill } from "react-bootstrap-icons"
import { useNavigate } from "react-router-dom"

export const Dashboard = () => {


    const navigate = useNavigate ()
    return (
        <Container>
            <Row>
                <Col>
                    <Card onClick={()=> navigate("/user/list")}>
                        <Card.Title>Usuarios</Card.Title>
                        <Card.Text> <PeopleFill/>45</Card.Text>
                    </Card>
                </Col>
                <Col>
                    <Card onClick={()=> navigate("/team/list")}>
                        <Card.Title>Equipos</Card.Title>
                        <Card.Text> <MicrosoftTeams/>45</Card.Text>
                    </Card>
                </Col>
                <Col>
                    <Card onClick={()=> navigate("/event/list")}>
                        <Card.Title>Eventos</Card.Title>
                        <Card.Text> <Calendar2CheckFill/>45</Card.Text>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
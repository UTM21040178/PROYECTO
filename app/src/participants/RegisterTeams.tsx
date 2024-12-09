import axios from 'axios';
import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';
import Swal from 'sweetalert2';

export const RegisterTeam = () => {
    const emptyMember = {
        name: "",
        role: ""
    }
    const [team, setTeam] = useState({
        name: "",
        leader: "",
        round: 0,
        grades: [],
        members: [emptyMember]
    })

    const onChangeBasicFields = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const data: any = team
        data[e.target.name] = e.target.value
        setTeam({ ...data })
    }

    const onChangeMember = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
        e.preventDefault()
        const data: any = team
        data.members[i][e.target.name] = e.target.value
        setTeam({ ...data })
    }

    const addMember = () => {
        const data = team;
        data.members.push(emptyMember);
        setTeam({ ...data })
    }

    const removeMember = (iM: number) => {
        const data = team
        const membersFiltered = data.members.filter((_, i) => i !== iM)
        data.members = membersFiltered
        setTeam({ ...data })
    }

    const onSubmit = async () => {
        try {
            Swal.fire("Guardando equipo")
            Swal.showLoading()
            await axios.post("", team)
            Swal.fire("Equipo registrado con éxito", "", "success")
        } catch (error) {
            console.log(error)
            Swal.fire("Ocurrió un error", "", "error")
        }
    }

    return (
        <Container>
            <Card className='m-3'>
                <Card.Body>
                    <Card.Title>Registrar equipo</Card.Title>
                    <Form>
                        <Row className='mb-3'>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Nombre del equipo</Form.Label>
                                    <Form.Control onChange={onChangeBasicFields} name="name" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Líder del equipo</Form.Label>
                                    <Form.Control onChange={onChangeBasicFields} name="leader" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Ronda inicial</Form.Label>
                                    <Form.Control onChange={onChangeBasicFields} name="round" type="number" defaultValue={0} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Form.Group className='text-center'>
                                <Form.Label>Miembros:</Form.Label>
                                {
                                    team.members.map((member, i) => (
                                        <Row className='mb-3' key={i}>
                                            <Col>
                                                <Form.Label>Nombre:</Form.Label>
                                                <Form.Control onChange={(e: any) => onChangeMember(e, i)} name="name" />
                                            </Col>
                                            <Col>
                                                <Form.Label>Rol:</Form.Label>
                                                <Form.Control onChange={(e: any) => onChangeMember(e, i)} name="role" />
                                            </Col>
                                            {
                                                team.members.length > 1 && (<Col xs={1}>
                                                    <Button variant='danger' onClick={() => removeMember(i)}> <Trash /></Button>
                                                </Col>)
                                            }
                                        </Row>
                                    ))
                                }
                                <div className='text-center'>
                                    <Button variant='info' onClick={() => addMember()}>Agregar miembro</Button>
                                </div>
                            </Form.Group>
                        </Row>
                    
                        <hr />
                        <div className='text-center'>
                            <Button onClick={() => onSubmit()}>Guardar equipo</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}

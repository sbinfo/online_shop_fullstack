import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, DropdownDivider, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";

const CreateDevice = ({ show, onHide }) => {
    const {type, brand} = useContext(Context);
    const [info, setInfo] = useState([]);

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title>Create Device</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className={"mb-3"}>
                        <Dropdown.Toggle variant={"outline-secondary"}>Select Type</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {type.types.map(item =>
                                <Dropdown.Item key={item.id}>{ item.name }</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className={"mb-3"}>
                        <Dropdown.Toggle variant={"outline-secondary"}>Select Brand</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {brand.brands.map(item =>
                                <Dropdown.Item key={item.id}>{ item.name }</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Form.Control
                        className={"mb-3"}
                        placeholder={"Enter Device name..."}
                    />
                    <Form.Control
                        className={"mb-3"}
                        placeholder={"Enter Device Price..."}
                    />
                    <Form.Control
                        type={"file"}
                        className={"mb-3"}

                    />
                    <hr />

                    <Button variant={"outline-primary"} onClick={addInfo}>Add new item</Button>
                    {
                        info.map(item =>
                            <Row key={item.number} className={"mt-3"}>
                                <Col md={4}>
                                    <Form.Control
                                        placeholder={"Enter a property name..."}
                                    />
                                </Col>
                                <Col md={4}>
                                    <Form.Control
                                        placeholder={"Enter a description..."}
                                    />
                                </Col>
                                <Col md={4}>
                                    <Button
                                        variant={"outline-danger"}
                                        onClick={() => removeInfo(item.number)}
                                    >
                                        Delete
                                    </Button>
                                </Col>
                            </Row>
                        )
                    }
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-dark" onClick={onHide}>
                    Cancel
                </Button>
                <Button
                    variant="outline-success"
                    onClick={onHide}
                >
                    Add Device
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;

import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const CreateBrand = ({ show, onHide}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title>Create Brand</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control placeholder={"Enter Brand name..."} />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-dark">
                    Cancel
                </Button>
                <Button variant="outline-success">
                    Add Brand
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;

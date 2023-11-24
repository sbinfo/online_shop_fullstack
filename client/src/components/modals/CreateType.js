import {Button, Form, Modal} from "react-bootstrap";

const CreateType = ({ show, onHide }) => {

    return (
        <Modal
            show={show}
            onHide={onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title>Create Type</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control placeholder={"Enter Type name..."} />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-dark" >
                    Cancel
                </Button>
                <Button variant="outline-success" >
                    Add Type
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;

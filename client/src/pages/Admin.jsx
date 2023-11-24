import React, {useState} from 'react';
import {Button, Container, Row} from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";

const Admin = () => {
    const [typeVisible, setTypeVisible] = useState(false);
    const [brandVisible, setBrandVisible] = useState(false);
    const [deviceVisible, setDeviceVisible] = useState(false);

    return (
        <Container className={"d-flex flex-column"}>
            <Row style={{ width: 600}} className={"mx-auto"}>
                <Button
                    variant={"outline-primary"}
                    className={"mt-4 p-2"}
                    onClick={() => setTypeVisible(true)}
                >
                    Add Type
                </Button>
                <Button
                    variant={"outline-primary"}
                    className={"mt-4 p-2"}
                    onClick={() => setBrandVisible(true)}
                >
                    Add Brand
                </Button>
                <Button
                    variant={"outline-primary"}
                    className={"mt-4 p-2"}
                    onClick={() => setDeviceVisible(true)}
                >
                    Add Device
                </Button>
            </Row>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
        </Container>
    )
}

export default Admin;

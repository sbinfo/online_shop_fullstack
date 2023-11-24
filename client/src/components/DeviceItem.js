import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({ device }) => {
    const navigate = useNavigate()

    return (
        <Col md={4}>
            <Card
                style={{ cursor: "pointer", marginBottom: 20 }}
                border={"light"}
                onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}
            >
                <Image height={200} src={device.img} style={{ objectFit: "contain"}} />
                <div className={"p-3"}>
                    <h5>{device.name}</h5>
                    <div className={"d-flex justify-content-between"} style={{ }}>
                        <span>Price</span>
                        <b>${ device.price }</b>
                    </div>
                    <div className={"d-flex justify-content-between"} style={{ }}>
                        <span>Rating</span>
                        <b>&#9733; { device.rating }</b>
                    </div>
                    {/*<div style={{ fontSize: 14, marginTop: 12}}>*/}
                    {/*    { device.desc}*/}
                    {/*</div>*/}
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;

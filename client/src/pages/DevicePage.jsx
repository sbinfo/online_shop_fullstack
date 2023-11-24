import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";

const DevicePage = () => {
    const device = { id: 1, name: "Pixel 8 Pro",
        price: 1099, rating: 9.0,
        img: "https://lh3.googleusercontent.com/q5rKMPfhgbQmZOXMBohWyajhHDqGulqS-3mXO-BAcjd8kLaPenXIHJ1HnmQXUVFUEzNlhwIwgK0-IuM0_CLoz0w3QyHHx3i0gpgv",
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'" }

    const description = [
        { id: 1, title: "RAM", value: "8GB"},
        { id: 2, title: "Memory", value: "256GB"},
        { id: 3, title: "Processor", value: "Tensor G3"},
        { id: 4, title: "Battery", value: "5000"},
        { id: 5, title: "Charge speed", value: "27wat"},
    ]

    return (
        <Container className={"d-flex flex-wrap pb-5"}>
            <Col md={4}>
                <Card className={"m-4"} style={{ height: 400}}>
                    <Image
                        src={device.img}
                        style={{width: "100%", maxHeight: "100%", objectFit: "contain"}}
                    />
                </Card>
            </Col>
            <Col md={4}>
                <Card
                    className={"p-4 m-4"}
                    style={{ height: 400 }}
                >
                    <h1>{device.name}</h1>
                    <div
                        className={"d-flex justify-content-between mb-2"}
                        style={{ borderBottom: "1px solid #eee"}}
                    >
                        <h5>${device.price}</h5>
                        <h6><span>Rating:</span> &#9733;{device.rating}</h6>
                    </div>
                    <div style={{ fontSize: 14}}>
                        Do you love taking photos and shooting videos? This Google Pixel 8 Pro has an excellent camera to help you out in this! The camera lenses of this device take razor-sharp photos and the software offers many features and support when shooting pictures.

                        The main sensor of this Google Pixel 8 Pro has 50 megapixels, which means you will take sharp pictures anyway. It also has all sorts of handy tricks to make your photo look good. All you have to do is press the button yourself!
                    </div>
                </Card>
            </Col>
            <Col md={4}>
                <Card
                    className={"p-4 m-4 d-flex justify-content-center align-items-center"}
                    style={{ height: 400}}
                >
                    <h3>From: ${device.price}</h3>
                    <Button className={"mt-4"}>Add to shopping card</Button>
                </Card>
            </Col>
            <Row className={"mx-4"} style={{ width: "100%"}}>
                <Card className={"px-0"}>
                    <h2 className={"p-3"}>Specifications: </h2>
                    {
                        description.map((item, index) => (
                            <div
                                key={item.id}
                                style={{ background: index %  2 === 0 ? "lightgray" : "transparent" }}
                                className={"p-3"}
                            >
                                {item.title}: {item.value}
                            </div>
                        ))
                    }
                </Card>
            </Row>
        </Container>
    )
}

export default DevicePage;

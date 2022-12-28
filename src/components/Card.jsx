import React from "react";
import data from "./data";

import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from "react-bootstrap";

const Cards = (props) => {
    let {imgSrc, name, role, comp, desc} = props.data;

    return(
        <Card className="p-0 ml-20 overflow-hidden h-100 shadow">
            <div className="overflow-hidden rounded p-0 bg-light">
                <Card.Img variant="top" className="card-imag" src={imgSrc} />
            </div>
            <Card.Body className="text-center">
                <Card.Title className="card-name">{name}</Card.Title>
                <Card.Title className="card-role">{role}</Card.Title>
                <Card.Title className="card-comp">{comp}</Card.Title>
                <Card.Text className="card-desc">{desc}</Card.Text>
            </Card.Body>
        </Card>
    )
   
}

export default Cards
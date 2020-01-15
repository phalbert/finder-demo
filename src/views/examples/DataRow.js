import React from "react";

// reactstrap components
import { Row, Col, Label } from "reactstrap";

const DataRow = ({ item }) => {
    return (
        <div>
            <Row>
                <Col md="3">
                    <strong>{item.number}</strong>
                </Col>
                <Col md="3">
                    <strong>{item.name}</strong>
                </Col>
                <Col md="3">
                    <strong>{item.address}</strong>
                </Col>
                <Col md="3">
                    <Label className={`label label-${item.label}`}>{item.status}</Label>
                </Col>
            </Row>
            <br />
        </div>
    );
}

export default DataRow;

/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";

// reactstrap components
import {
  Button,
  FormGroup,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
  Row,
  Col,
  Label
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function ProfilePage(props) {

  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const [phone, setPhone] = useState('');

  const toggle = () => setModal(!modal);
  
  const searchResult = () => {
    // Prevent button click from submitting form
    // e.preventDefault();

    const searchValue = document.getElementById("value");

    setPhone(searchValue)
  }

  return (
    <>
      <ExamplesNavbar />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Finder</h2>
                <h5 className="description">
                  <strong>Enter a phone number</strong>
                </h5>
                <br />
                <Row>
                  <Col sm="2"></Col>
                  <Col sm="4">
                    <FormGroup>
                      <Input id="value" placeholder="Default" type="text" />
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <Button
                      className="btn-round" color="default" outline
                      href="#pablo"
                      onClick={() => {
                        toggle("1");
                      }}
                    >
                      See Details
                </Button>
                  </Col>
                  <Col sm="2"></Col>
                </Row>
              </Col>
            </Row>
            <br />
            <br />

          </Container>
        </div>
        <div className="section landing-section">
        </div>
      </div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Credit Status</ModalHeader>
        <ModalBody>
          <div class="md:flex bg-white rounded-lg p-6">
            <div class="text-center md:text-left">
              <h2 class="text-lg">Juma Mule</h2>
              <div class="text-purple-500">Accountant</div>
              <div class="text-gray-600"><Label className={`label label-danger`}>HIGH RISK</Label></div>
              <div class="text-gray-600">256777642211</div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Email</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
      <DemoFooter />
    </>
  );
}

export default ProfilePage;

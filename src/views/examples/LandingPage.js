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
import React, {useState} from "react";

// reactstrap components
import {
  Button,
  Input,
  Container,
  Row,
  Col,
  FormGroup,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Label
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import DataRow from "./DataRow"
import IndexNavbar from "components/Navbars/IndexNavbar.js";

function LandingPage(props) {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const [phone, setPhone] = useState('');

  const toggle = () => setModal(!modal);
  

  const [value, setValue] = React.useState('');

  const people = [
    {
      id: 1,
      number: '256777334400',
      address: 'Naalya',
      name: 'Liam Lutaaya',
      status: 'Suspect',
      label: 'default'
    },
    {
      id: 2,
      number: '256750551234',
      address: 'Maganjo',
      name: 'Juliana Nante',
      status: 'Clean',
      label: 'success'
    },
    {
      id: 2,
      number: '256750921241',
      address: 'Kyebando',
      name: 'Collin Kato',
      status: 'Convicted',
      label: 'danger'
    },
    {
      id: 3,
      number: '256750551234',
      address: 'Maganjo',
      name: 'Juliana Nante',
      status: 'Clean',
      label: 'success'
    },
    {
      id: 4,
      number: '256750551234',
      address: 'Maganjo',
      name: 'Juliana Nante',
      status: 'Clean',
      label: 'success'
    }
  ]

  const search = () => {
    // Prevent button click from submitting form
    // e.preventDefault();

    const searchValue = document.getElementById("value");

    return people.filter(person => person.name.toLowerCase().includes(searchValue))
  }

  return (
    <>
      <ExamplesNavbar />
      {/* <LandingPageHeader /> */}
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
        <ModalHeader toggle={toggle}>Result</ModalHeader>
        <ModalBody>
          <div class="md:flex bg-white rounded-lg p-6">
            <div class="text-center md:text-left">
              <h2 class="text-lg">Erin Lindford</h2>
              <div class="text-purple-500">Customer Support</div>
              <div class="text-gray-600"><Label className={`label label-success`}>CLEAR</Label></div>
              <div class="text-gray-600">256777233311</div>
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

export default LandingPage;

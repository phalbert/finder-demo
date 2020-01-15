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
import React from "react";

// reactstrap components
import {
  Button,
  Input,
  Container,
  Row,
  Col,
  FormGroup,
  Label
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import DataRow from "./DataRow"
import IndexNavbar from "components/Navbars/IndexNavbar.js";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
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
                  <strong>Enter a NIN or phone number</strong>
                </h5>
                <br />
                <Row>
                  <Col sm="2"></Col>
                  <Col sm="4">
                    <FormGroup>
                      <Input placeholder="Default" type="text" />
                    </FormGroup>
                  </Col>
                  <Col sm="4">
                    <Button
                      className="btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
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
            <Row>
              <Col md="3">
                <h6 className="info-title">NIN/Number</h6>
              </Col>
              <Col md="3">
                <h6 className="info-title">Name</h6>
              </Col>
              <Col md="3">
                <h6 className="info-title">Address</h6>
              </Col>
              <Col md="3">
                <h6 className="info-title">Criminal Status</h6>
              </Col>
            </Row>
            <br />
            {
                people.map((item) => (
                        <DataRow key={item.id} item={item} />
                    ))
            }
          </Container>
        </div>
        <div className="section landing-section">
       </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;

import React, { useState, Component } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
// import Sonnet from '../../components/Sonnet';
// import InputGroup from 'react-bootstrap/InputGroup';
// import LocationMap from "../Img/LocationMap.jpg";
// import LocationMap2 from "../Img/LocationMap2.jpg";
import Button from 'react-bootstrap/Button';
// import { GiBlackHandShield, GiTargetPoster } from 'react-icons/gi';

// import GoogleMapReact from 'google-map-react';

import { useTranslation} from "react-i18next";
import i18n from 'i18next';








const Third = () => {


  


  const [validated, setValidated] = useState(false);
  const [noValidate, setNoValidate] = useState(true);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    setNoValidate(true);
  };

 
  const{t, i18n} = useTranslation();  


  return (
    <div >


      <section className='find-tabs'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>


              <h1 className='features-extra text-center p-5 m-5'>{t('where_to_find_us')}</h1>

              <Tabs
                defaultActiveKey="profile"
                id="fill-tab-example"
                className="mb-0 arrow"
                fill
              >
                <Tab eventKey="profile" title="Location" >




                  <div className='container'>
                    <div className='row'>
                      <div className='col-12'>

                        <h3 className='features text-center p-5'>reach us</h3>
                      </div>
                    </div>
                  </div>


                  <div className='container g-5 p-0'>
                    <div className='row'>

                      <div className='col-4 g-0 p-4'>
                        <div className="location-card" data-tilt data-tilt-scale="0.95" data-tilt-startY="40">

                          <div className='sub-location-card1'>
                            <h3>Call us</h3>
                            {/* <p>If you have any further questions or curiosity <br/>about the hotel feel free to give us a call </p> */}
                            {/* <h3>phone number</h3> */}
                            <p>phone number: 0212 511 09 10 / 0212 511 09 15</p>


                          </div>
                          {/* <div className="welcome">
                            Welcome to
                          </div>
                          <div className="year">
                            <span className='year1'>Twenty</span>
                            <span className='year1' >Twenty</span>
                            <span className='year1'>One</span>
                          </div> */}
                        </div>
                      </div>
                      <div className='col-4 g-0 p-4'>
                        <div className="location-card" data-tilt data-tilt-scale="0.95" data-tilt-startY="90">
                          <div className='sub-location-card3'>
                            <h3> visit us at</h3>
                            {/* <p> Our hotel is ideally located in the very heart of old and dynamic Laleli</p> */}
                            <p>Balabanağa Mh. Zeynep Kamil Sk. No:22 <br />Laleli/Fatih - Istanbul</p>

                          </div>
                        </div>
                      </div>
                      <div className='col-4 g-0 p-4'>
                        <div className="location-card" data-tilt data-tilt-scale="0.95" data-tilt-startY="40">
                          <div className='sub-location-card2'>


                            <h3> e-mail address</h3>
                            <p> info@polaninhotel.com</p>


                          </div>
                        </div>
                      </div>


                    </div>
                  </div>


                  <div className='container' >
                    <div className='row ' >

                      <div className='col-12  map-img  p-0 g-0' style={{ height: '' }}>
                        {/* <img className='map-img' style={{ height: '50vh', width: '115vh' }} src={LocationMap2}></img> */}
                      </div>



                    </div>
                    <div className='row ' >
                      {/* <div className='col-12 p-5 g-5  ' >
                   

                        <Button variant="link"  href="https://www.google.com/maps/dir//Balabana%C4%9Fa,+Zeynep+Kamil+Sokak+No:22,+Fatih%2F%C4%B0stanbul,+T%C3%BCrkiye/@41.0111673,28.9239742,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14cab98f2a3a8929:0x6486e5aa3fb18b0!2m2!1d28.9589937!2d41.0111726"
                          target="_blank">

                          tap to show on map  </Button>{' '}
                      
                      </div> */}

                      <div className="col-12 p-0 g-0">
                      
                         <Button variant="link"  href="https://www.google.com/maps/dir//Balabana%C4%9Fa,+Zeynep+Kamil+Sokak+No:22,+Fatih%2F%C4%B0stanbul,+T%C3%BCrkiye/@41.0111673,28.9239742,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14cab98f2a3a8929:0x6486e5aa3fb18b0!2m2!1d28.9589937!2d41.0111726"
                         target="_blank"
                         className="button-loc"
                         >
                        <div className="button__line"></div>
                        <div className="button__line"></div> <span className="button__text"> show on map</span>
                        <div className="button__drow1"></div>
                        <div className="button__drow2"></div>
                        </Button>{' '}
                     
                      </div>
                    </div>
                  </div>

                  {/* <Sonnet /> */}
                </Tab>
                <Tab eventKey="home" title="Contact Us" >
                  {/* <Sonnet /> */}

                  <div className='container'>
                    <div className='row'>
                      <div className='col-12'>

                        <h3 className='features text-center p-5'>Get in touch</h3>



                      </div>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-12 g-5 p-0'>


                      <Form noValidate={noValidate} validated={validated} onSubmit={handleSubmit} className="form-info" action="https://formsubmit.co/c9c498ca2a48b2c4fcb08e60691fdac3" method="POST" >

                        <Row className="p-4">
                          <Col md >
                            <FloatingLabel controlId="floatingInputGrid" label="first name"  >
                              <Form.Control type="name" placeholder="first name" for="floatingInputGrid" required />
                              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                              <Form.Control.Feedback type="invalid">
                                Please provide a name
                              </Form.Control.Feedback>
                            </FloatingLabel>


                          </Col>

                          <Col md >
                            <FloatingLabel controlId="floatingInputGrid" label="last name"  >
                              <Form.Control type="name" placeholder="last name" for="floatingInputGrid" required />
                              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                              <Form.Control.Feedback type="invalid">
                                Please provide a last name
                              </Form.Control.Feedback>
                              {/* <Form.Control.Feedback type="invalid">
                                Please provide a valid last name
                              </Form.Control.Feedback> */}
                            </FloatingLabel>


                          </Col>
                        </Row>
                        <Row className="p-4">
                          <Col md>
                            <FloatingLabel controlId="floatingInputGrid" label="Email address"  >
                              <Form.Control type="email" placeholder="name@example.com" for="floatingInputGrid" required />

                              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                              <Form.Control.Feedback type="invalid">
                                Please provide a valid E-mail address
                              </Form.Control.Feedback>
                            </FloatingLabel>


                          </Col>
                          <Col md>

                            <FloatingLabel controlId="floatingPassword" label="Password">
                              <Form.Control type="password" placeholder="Password" for="floatingPassword" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
                              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                              <Form.Control.Feedback type="invalid">
                                Please provide at least one number and one uppercase and lowercase letter, and at least 8 or more characters
                              </Form.Control.Feedback>
                            </FloatingLabel>

                          </Col>


                        </Row>

                        <Row className="p-4">

                          <Col md >


                            <FloatingLabel
                              controlId="floatingSelectGrid"
                              label="Subject"
                            >
                              <Form.Select aria-label="Floating label select example" for="floatingSelectGrid" required>
                                <option selected enabled value=""> Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </Form.Select>
                            </FloatingLabel>
                            {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                          </Col>


                        </Row>

                        <Row className="p-4">

                          <Col md >
                            <FloatingLabel controlId="floatingTextarea2" label="Comments"  >
                              <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '150px' }}
                                for="floatingTextarea2"
                                required
                              />
                            </FloatingLabel>

                          </Col>
                        </Row>

                        <div className='row'>
                          <div className='col-12'>
                            <Button type="submit" onsubmit={handleSubmit} variant="link" className=' button-contact' >
                              
                              
                            <div className="button__line"></div>
                        <div className="button__line"></div> <span className="button__text">   Submit form  </span>
                        <div className="button__drow1"></div>
                        <div className="button__drow2"></div>
                            
                              
                              </Button>
                          </div>
                        </div>




                     



                      </Form>


                      {/* <Form className="row g-3 needs-validation" novalidate>
  <div className="col-md-4">
    <label for="validationCustom01" className="form-label">First name</label>
    <input type="text" className="form-control" id="validationCustom01" value="Mark" required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label for="validationCustom02" className="form-label">Last name</label>
    <input type="text" className="form-control" id="validationCustom02" value="Otto" required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label for="validationCustomUsername" className="form-label">Username</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
      <div className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div className="col-md-6">
    <label for="validationCustom03" className="form-label">City</label>
    <input type="text" className="form-control" id="validationCustom03" required/>
    <div className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div className="col-md-3">
    <label for="validationCustom04" className="form-label">State</label>
    <select className="form-select" id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
    <div className="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div className="col-md-3">
    <label for="validationCustom05" className="form-label">Zip</label>
    <input type="text" className="form-control" id="validationCustom05" required/>
    <div className="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label className="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
  </div>
</Form> */}
                    </div>
                  </div>
                </Tab>
                {/* <Tab eventKey="longer-tab" title="Loooonger Tab">
      
        <span>geongoepwgnwp'</span>
      </Tab> */}

              </Tabs>


            </div>
          </div>
        </div>



      </section>




    </div>
  )
}

export default Third
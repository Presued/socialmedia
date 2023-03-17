import React, { useEffect } from 'react'
import '../Followers/Followers.css'
import { Row, Col, Container, Card } from 'react-bootstrap'
import Twitter from '../../Asset/icon-twitter.svg'
import FaceBook from '../../Asset/icon-facebook.svg'
import Up from '../../Asset/icon-up.svg'
import Instagram from '../../Asset/icon-instagram.svg'
import YouTube from '../../Asset/icon-youtube.svg'
import Down from '../../Asset/icon-down.svg'
import Switch from '../Switch/Switch'
import { useState } from 'react'

export default function Followers() {

    const [value, setValue] = useState(false);
    const [DarkMode, setDarkMode] = useState(false);
    let mode = DarkMode ? 'Dark' : 'Light';

    useEffect(() => {
        DarkMode ? document.body.classList = 'Dark' : document.body.classList = 'Light';
    })

    return <div className={`brColor${mode}`}> 
    
        

            <Row className='rCuz'>
                <Col sm={12} lg={6} md={6}>
                    <h1 className='titleCuz'>Social Media Dashboard</h1>
                    <h4 className='fCuz'>Total Followers: 23,400</h4>
                </Col>
                <Col className='swCuz' sm={12} lg={6} md={6}>
                    <Switch className='toggleSwitch' isOn={DarkMode} handleToggle={() => setDarkMode(!DarkMode)}/>
                </Col>
            </Row>

            <Row className='cCuz'>
                <Col sm={12} lg={3} md={6}>

                    <Card style={{ width: '16rem' }} >
                        <Card.Body className='bCuz'>
                            <div className='topColor'></div>
                            <Card.Title className='iCuz'><img src={FaceBook} />  @nathanf</Card.Title>
                            <Card.Text>
                                <h1 className='numCuz'>1987</h1>
                                <p className='folCuz'>F O L L O W E R S</p>
                                <p className='Cen'><img src={Up} /> 12 Today</p>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} lg={3} md={6}>
                    <Card style={{ width: '16rem' }}>
                        <Card.Body className='bCuz'>
                            <div className='topColor'></div>
                            <Card.Title className='iCuz'><img src={Twitter} /> @nathanf</Card.Title>
                            <Card.Text>
                                <h1 className='numCuz'>1044</h1>
                                <p className='folCuz'>F O L L O W E R S</p>
                                <p className='Cen'><img src={Up} /> 99 Today</p>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} lg={3} md={6}>
                    <Card style={{ width: '16rem' }}>
                        <Card.Body className='bCuz'>
                            <div className='instaColor'></div>
                            <Card.Title className='iCuz'><img src={Instagram} /> @nathanf</Card.Title>
                            <Card.Text>
                                <h1 className='numCuz'>11k</h1>
                                <p className='folCuz'>F O L L O W E R S</p>
                                <p className='Cen'><img src={Up} /> 1099 Today</p>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} lg={3} md={6}>
                    <Card className='hover' style={{ width: '16rem' }}>
                        <Card.Body className='bCuz'>
                            <div className='youCuz'></div>
                            <Card.Title className='iCuz'><img src={YouTube} /> Nathan F.</Card.Title>
                            <Card.Text>
                                <h1 className='numCuz'>8239</h1>
                                <p className='folCuz'>S U B S C R I B E R S</p>
                                <p className='redCuz'><img src={Down} /> 144 Today</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className='otCuz'>
                <Col>
                    <h3 className='tCuz'>Overview - Today</h3>
                </Col>
            </Row>

            <Row className='cnCuz'>
                <Col sm={12} lg={3} md={6}>
                    <Card style={{ width: '16rem' }}>
                        <Card.Body className='bCuz'>
                            <Row>
                                <Col>
                                    <p className='pvColor'>Page Views</p>
                                </Col>
                                <Col >
                                    <img className='lCuz' src={FaceBook} />
                                </Col>

                            </Row>

                            <Row>
                                <Col>
                                    <h3 className=''>87</h3>
                                </Col>
                                <Col>
                                    <p className='yCuz'><img src={Up} /> 3%</p>
                                </Col>
                            </Row>

                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} lg={3} md={6}>
                    <Card style={{ width: '16rem' }}>
                        <Card.Body className='bCuz'>
                            <Row>
                                <Col>
                                    <p className='pvColor'>Likes</p>
                                </Col>
                                <Col >
                                    <img className='lCuz' src={FaceBook} />
                                </Col>

                            </Row>

                            <Row>
                                <Col>
                                    <h3 className=''>52</h3>
                                </Col>
                                <Col>
                                    <p className='pCuz'><img src={Down} /> 2%</p>
                                </Col>
                            </Row>

                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} lg={3} md={6}>
                    <Card style={{ width: '16rem' }}>
                        <Card.Body className='bCuz'>
                            <Row>
                                <Col>
                                    <p className='pvColor'>Likes</p>
                                </Col>
                                <Col >
                                    <img className='lCuz' src={Instagram} />
                                </Col>

                            </Row>

                            <Row>
                                <Col>
                                    <h3 className=''>5462</h3>
                                </Col>
                                <Col>
                                    <p className='aCuz'><img src={Up} /> 2257%</p>
                                </Col>
                            </Row>

                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} lg={3} md={6}>
                    <Card style={{ width: '16rem' }}>
                        <Card.Body className='bCuz'>
                            <Row>
                                <Col>
                                    <p className='pvColor'>Page Views</p>
                                </Col>
                                <Col >
                                    <img className='lCuz' src={Instagram} />
                                </Col>

                            </Row>

                            <Row>
                                <Col>
                                    <h3 className=''>52k</h3>
                                </Col>
                                <Col>
                                    <p className='perCuz'><img className='perCuz' src={Up} /> 1375%</p>
                                </Col>
                            </Row>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <br></br>

            <Row className='cnCuz'>
                <Col sm={12} lg={3} md={6}>
                    <Card style={{ width: '16rem' }}>
                        <Card.Body className='bCuz'>
                            <Row>
                                <Col>
                                    <p className='pvColor'>Retweets</p>
                                </Col>
                                <Col >
                                    <img className='lCuz' src={Twitter} />
                                </Col>

                            </Row>

                            <Row>
                                <Col>
                                    <h3 className=''>117</h3>
                                </Col>
                                <Col>
                                    <p className='yCuz'><img src={Up} /> 3%</p>
                                </Col>
                            </Row>

                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} lg={3} md={6}>
                    <Card style={{ width: '16rem' }}>
                        <Card.Body className='bCuz'>
                            <Row>
                                <Col>
                                    <p className='pvColor'>Likes</p>
                                </Col>
                                <Col >
                                    <img className='lCuz' src={Twitter} />
                                </Col>

                            </Row>

                            <Row>
                                <Col>
                                    <h3 className=''>507</h3>
                                </Col>
                                <Col>
                                    <p className='pCuz'><img src={Down} /> 2%</p>
                                </Col>
                            </Row>

                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} lg={3} md={6}>
                    <Card style={{ width: '16rem' }}>
                        <Card.Body className='bCuz'>
                            <Row>
                                <Col>
                                    <p className='pvColor'>Likes</p>
                                </Col>
                                <Col >
                                    <img className='lCuz' src={YouTube} />
                                </Col>

                            </Row>

                            <Row>
                                <Col>
                                    <h3 className=''>107</h3>
                                </Col>
                                <Col>
                                    <p className='aCuz'><img src={Up} /> 2257%</p>
                                </Col>
                            </Row>

                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} lg={3} md={6}>
                    <Card style={{ width: '16rem' }}>
                        <Card.Body className='bCuz'>
                            <Row>
                                <Col>
                                    <p className='pvColor'>Total Views</p>
                                </Col>
                                <Col >
                                    <img className='lCuz' src={YouTube} />
                                </Col>

                            </Row>

                            <Row>
                                <Col>
                                    <h3 className=''>1407</h3>
                                </Col>
                                <Col>
                                    <p className='perCuz'><img className='perCuz' src={Up} /> 1375%</p>
                                </Col>
                            </Row>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>







        
        </div>
    
}
import React from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Row, Col, DropdownButton, Dropdown } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './App.css';
import {Tab, Tabs, TabList, } from 'react-bootstrap';

export function ChosenQuestion() {
    return (
        <div className="container" style={{backgroundColor: '#090f1a'}}>
            <div className="page" >
                <Button variant="primary" style={{ position: 'absolute', top: 20, left: 20}} className="shadow">
                    Home
                </Button>
                <Button variant="primary" style={{ position: 'absolute', top: 75, left: 700, width: 400}} className="shadow">
                    Questions List
                </Button>
                <Button variant="primary" style={{ position: 'absolute', top: 490, left: 700, width: 400, backgroundColor: 'green'}} 
                className="shadow">
                    GO
                </Button>

                <div style={{position: 'absolute', top: 70, left: 20}}>     

                <Tabs>
                    <Tab eventKey="TeacherQ" title={<div style={{width: 300}}>Teachers' Questions</div>} >
                        
                            <div  style={{backgroundColor: 'beige', width: '100%', position: 'absolute',
                            left: 0, top: 60, height: 400}} className="teacherq"></div>
                        
                    </Tab>
                    <Tab eventKey="UserQ" title={<div style={{width: 300}}>User-Generated Questions</div>}>
                        
                            <div  style={{backgroundColor: 'beige', width: '100%', position: 'absolute',
                            left: 0, top: 60, height: 400}} className="userq"></div>
                        
                    </Tab>
                </Tabs>

                </div>
            </div>
        </div>
    )
}
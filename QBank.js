import React from 'react';
import {Button} from 'react-bootstrap';
import { Row, Col, DropdownButton, Dropdown } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './App.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


export function Background() {
    return (
        <div className="container" style={{backgroundColor: '#090f1a'}}>
            <div className="page">
                <Button variant="primary" style={{ position: 'absolute', top: 20, left: 20}} className="shadow">
                    Home
                </Button>
                <TwoDropdownMenus />
                <QuestionsList />
            </div>
        </div>
    )
}

export function TwoDropdownMenus() {
    const teacherNames = ["Teacher 1", "Teacher 2", "Teacher 3"];
    const diffLevel = ["Level 1", "Level 2", "Level 3"];

    return (
        <Row style={{paddingBottom: 10, position: 'absolute', top: 20, left: 750}}>
          <Col>
            <DropdownButton id="TeacherMenu" title="Teacher's Name">
              {teacherNames.map((option, index) => (
                <Dropdown.Item key={index}>{option}</Dropdown.Item>
              ))}
            </DropdownButton>
          </Col>
          <Col>
            <DropdownButton id="DifficultyLevel" title="Difficulty Level">
              {diffLevel.map((option, index) => (
                <Dropdown.Item key={index}>{option}</Dropdown.Item>
              ))}
            </DropdownButton>
          </Col>
        </Row>
      );
}

export function QuestionsList() {
    const questions = ['Question 1', 'Question 2', 'Question 3'];
    const sections = [
        ['Section 1 of Question 1', 'Section 2 of Question 1', 'Section 3 of Question 1'],
        ['Section 1 of Question 2', 'Section 2 of Question 2', 'Section 3 of Question 2'],
        ['Section 1 of Question 3', 'Section 2 of Question 3', 'Section 3 of Question 3']
    ];

    return (
        <Card style={{ width: '80%' }}>
            <ListGroup variant="flush">
                {questions.map((question, index) => (
                    //<Link to={`/question/${index+1}`} key={index}>
                    <ListGroup.Item key={index}>
                        <Row>
                            {sections[index].map((section, idx) => (
                                <Col key={idx}>{section}</Col>
                            ))}
                        </Row>
                    </ListGroup.Item>
                    //</Link>
                ))}
            </ListGroup>
        </Card>
    );
}


import React from 'react';
import { useState } from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Row, Col, DropdownButton, Dropdown, Table } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './App.css';
import { Tab, Tabs, TabList, } from 'react-bootstrap';

export function TeacherUI() {
    return (
        <div className="container" style={{ backgroundColor: '#090f1a' }}>
            <div className="page" style={{ position: 'relative' }}>
                <Button variant="primary" style={{ position: 'absolute', top: 20, left: 20 }} className="shadow">
                    Home
                </Button>
                <div style={{
                    backgroundColor: 'blue', position: 'absolute',
                    top: 75, left: 20, width: 300, height: 40
                }} className="shadow">

                </div>
                 <div style={{ position: 'absolute',
                 width: '300px', top: 75, left: 330, width: 300, height: 40 }}>
                    <DropDownHere />
                </div>  

                
                <div style={{
                    backgroundColor: 'beige', position: 'absolute',
                    top: 125, left: 20, width: 610, height: 400
                }} className="shadow">
                    <div style={{ position: 'absolute', top: 75, left: 350, width: 400, height: 200,}}>
                        <AddNodeSection />
                        <div style={{ position: 'absolute', top: -100, left: 300, width: 400, height: 75}}>
                        <AddNodeDropDown />
                        </div>
                        <div style={{ position: 'absolute', top: -50, left: 300, width: 400, height: 75}}>
                        <AddNodeButton />
                        </div>
                    </div>
                    <div
                    style={{position: 'absolute', top: 110, left: 650, maxWidth: 200}}>
                        <DynamicTable numColumns={3} cellWidth="10" cellHeight="20"/>
                    </div>
                    <Button variant="primary" style={{ position: 'absolute', top: 365, left: 650, width: 400, backgroundColor: 'green' }}
                        className="shadow">
                        SAVE
                    </Button>

                </div>
            </div>
        </div>
    )
}


function DropDownHere() {
    return (
      <Dropdown>
        <Dropdown.Toggle as={Button} variant="success" id="dropdown-basic" style={{width: 300}}>
          Difficulty Level
        </Dropdown.Toggle>
  
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }

  function AddNodeSection() {
    return (
        <div style={{ position: 'absolute', top: -125, left: 300, width: 400, height: 150,
        backgroundColor: 'blue' }} 
        className="shadow"/>
    )
  }

  function AddNodeButton() {
    return (
        <Button variant="primary" className="shadow" style={{width: 300}}>
        Add Node
    </Button>
    )
  }

  function AddNodeDropDown() {
        return (
            <Dropdown>
            <Dropdown.Toggle as={Button} variant="success" id="dropdown-basic" style={{width: 300}}>
                
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        )
  }

function DynamicTable({ numColumns }) {
  const gridSize = 2 ** (numColumns-1);
  const [inputs, setInputs] = useState(Array(gridSize).fill(Array(numColumns).fill('')));

  const handleInputChange = (row, col, event) => {
    const newInputs = [...inputs];
    newInputs[row][col] = event.target.value;
    setInputs(newInputs);
  };

    const headerCells = [];
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 

    for (let i = 0; i < numColumns; i++) {
        const letter = alphabet[i]; 
        headerCells.push(<th key={`header-${i}`}>{`Column ${letter}`}</th>);
    }


  const tableRows = [];
  for (let i = 0; i < gridSize; i++) {
    const inputCells = [];
    for (let j = 0; j < numColumns; j++) {
      const inputValue = inputs[i][j];
      inputCells.push(
        <td key={`cell-${i}-${j}`}>
          <input size="6"
            type="text"
            value={inputValue}
            onChange={(event) => handleInputChange(i, j, event) 
            }
            style={{height: 30}}
          />
        </td>
      );
    }
    tableRows.push(<tr key={`row-${i}`}>{inputCells}</tr>);
  }

  return (
    <Table bordered className='dynamic-table' style={{backgroundColor: 'beige'}}>
      <thead>
        <tr>{headerCells}</tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </Table>
  );
}

export default DynamicTable;

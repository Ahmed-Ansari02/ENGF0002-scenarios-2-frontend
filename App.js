import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { Row, Col, DropdownButton, Dropdown } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Background, TwoDropdownMenus, QuestionsList } from './QBank';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Background />
      </header>
    </div>
  );
}

export default App;

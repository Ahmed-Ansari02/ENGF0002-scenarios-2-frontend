import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { Row, Col, DropdownButton, Dropdown } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Background, TwoDropdownMenus, QuestionsList, QBankPage } from './QBank';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ChosenQuestion } from './ChosenQuestion';
import { TeacherUI } from './TeacherUI';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/questions" element={<QBankPage />} />
          <Route path="/" element={<ChosenQuestion />} />
          <Route path="/teacher" element={<TeacherUI />} />
        </Routes>
      </header>
    </div>
    </Router>
  );
}

export default App;

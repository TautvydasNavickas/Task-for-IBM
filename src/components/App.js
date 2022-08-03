import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import StockContainer from '../containers/StockContainer';
import Search from '../containers/Search';

class App extends React.Component {
  render() {
    return (
        <Router>
        <Container fluid>
          <Navbar hover="true" style={{backgroundColor:"#34373b"}} expand="lg" variant="dark" sticky="top">
            <Navbar.Brand style={{color:"#dfe2e6"}}href="#">IBM test</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/stock_view">Home</Nav.Link>
              </Nav>
              <Search/>
            </Navbar.Collapse>
          </Navbar>
          <br/>
          <Route exact path="/stock_view" component={StockContainer} />         
        </Container>
      </Router>
    )
  }
}

export default App;
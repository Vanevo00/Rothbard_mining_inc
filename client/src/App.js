import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Buy from './Buy'
import Sell from './Sell'
import Mint from './Mint'

const App = () => {
    return (
        <Router>
            <Navbar bg="primary" variant="dark">
                <LinkContainer to="/">
                    <Navbar.Brand href="#home">Rothbard Mining Inc.</Navbar.Brand>
                </LinkContainer>
                <Nav className="mr-auto">
                    <LinkContainer to="/buy">
                        <Nav.Link>Buy</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/sell">
                        <Nav.Link>Sell</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/mint'>
                        <Nav.Link>Mint</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar>

            <Switch>
                <Route path={['/', '/buy']} exact>
                    <Buy/>
                </Route>
                <Route path="/sell" exact>
                    <Sell/>
                </Route>
                <Route path="/mint" exact>
                    <Mint/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
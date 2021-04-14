import React, { useEffect, useState } from 'react'
import Web3 from 'web3'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Buy from './Buy'
import Sell from './Sell'
import Mint from './Mint'
import detectEthereumProvider from '@metamask/detect-provider'

const App = () => {
  const [userId, setUserId] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const loadBlockchainData = async () => {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545')
    const provider = await detectEthereumProvider()
    if (provider) {
      const accounts = await ethereum.request({ method: 'eth_accounts' })
      setUserId(accounts[0])
    }
    setIsLoading(false)
  }

  useEffect(async () => {
    await loadBlockchainData()
  }, [])

  return (
    <Router>
      <Container fluid className='p-0 min-vh-100 d-flex flex-column'>
        <Navbar bg='primary' variant='dark'>
          <LinkContainer to='/'>
            <Navbar.Brand>Rothbard Mining Inc.</Navbar.Brand>
          </LinkContainer>
          <Nav className='mr-auto'>
            {
              !isLoading && userId &&
              <>
                <LinkContainer to="/buy">
                  <Nav.Link>Buy</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/sell'>
                  <Nav.Link>Sell</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/mint'>
                  <Nav.Link>Mint</Nav.Link>
                </LinkContainer>
              </>
            }
          </Nav>
          <div className='text-white'>{userId}</div>
        </Navbar>

        <Switch>
          <Route path={['/', '/buy']} exact>
            <Buy
              isLoading={isLoading}
              userId={userId}
            />
          </Route>
          <Route path='/sell' exact>
            <Sell/>
          </Route>
          <Route path='/mint' exact>
            <Mint/>
          </Route>
        </Switch>
      </Container>
    </Router>
  )
}

export default App
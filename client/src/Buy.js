import React from 'react'
import { Spinner, Button } from 'react-bootstrap'

const Buy = ({ isLoading, userId }) => {
  if (isLoading) {
    return (
      <div className='flex-grow-1 d-flex justify-content-center align-items-center'>
        <Spinner animation='border' />
      </div>
    )
  }

  if (!userId) {
    return (
      <div className='flex-wrap d-flex justify-content-center mt-5'>
        <h4 className='w-100 text-center'>No ethereum wallet detected. In order to run this application, MetaMask or other ethereum wallet software is necessary.</h4>
        <a href='https://metamask.io/download.html' target='_blank'><Button variant='primary' className='mt-5'>Download MetaMask</Button></a>
      </div>
    )
  }

  return (
    <h1>Buy</h1>
  )
}

export default Buy
import React from 'react'
import Banner from './Banner'
import Branch from './Branch'
import NewAndEvents from './NewAndEvents'
import Partner from './Partner'
import Product from './Product'
import Stepper from './Stepper'

function index() {
  return (
    <div>
      <Banner />
      <Branch />
      <Product />
      <Stepper />
      <Partner />
      <NewAndEvents />
    </div>
  )
}

export default index

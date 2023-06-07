import React from 'react'
import HotelCard from './HotelCard'

describe('<HotelCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<HotelCard />)
  })
})
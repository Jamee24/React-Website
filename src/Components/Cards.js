import React from 'react'
import CardItems from './CardItems'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__item'>
            <CardItems 
              src='Images/img-9.jpg'
              text='Explore the hidden waterfall deep
              inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItems 
              src='Images/img-2.jpg'
              text='Travel through the Island of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
            <CardItems 
              src='Images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItems 
              src='Images/img-4.jpg'
              text='Experience Football on the top of Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItems 
              src='Images/img-8.jpg'
              text='Ride through the Sahara Deserts on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards

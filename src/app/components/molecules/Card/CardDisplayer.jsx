import React from 'react'
import Card from './Card'
import CardData from './CardData'

const CardDisplayer = () => {
  return (
    <div className='card-displayer'><Card details= {CardData} /></div>
    
  )
}

export default CardDisplayer
import React from 'react'
import CareScale from './CareScale'
import '../styles/PlantItem.css'

export default function PlantItem({name, cover, id, light, water}) {
  return (
    <li key={`${id}-${name}-${cover}`} className='lmj-plant-item'>
        <img key={`${name}-${id}`}className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
        {name}
        <div>
            <CareScale careType='water' scaleValue={water} />
            <CareScale careType='light' scaleValue={light} />
        </div>
    </li>
)
}

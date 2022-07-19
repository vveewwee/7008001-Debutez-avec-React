import React from 'react'
import '../styles/Categories.css'

export default function Categories({categories, activeCat, updateActiveCat}) {

 
    return (
        <div>
            <select className="jml-categories"
                value={activeCat}
                onChange={(e) => updateActiveCat(e.target.value)}
            >
            {categories.map((cat, index) => (
                <option key={`${cat}-${index}`}>{cat}</option>
            ))}
            </select>
            <button className="jml-categories"onClick={() => updateActiveCat('')}> Réinitialiser</button>
        </div>
  )
}

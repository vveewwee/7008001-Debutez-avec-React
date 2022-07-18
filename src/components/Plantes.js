import React from 'react'

export default function Plantes() {
    const plantes = [
        {
            id:1,
            price:8,
            name: "monstera"
        },
        {
            id:2,
            price:5,
            name: "laurrier"
        },
        {
            id:3,
            price:10,
            name: "fleurs"
        }
    ]
  return (
    <ul>
        {plantes.map((plante, index) => (
        <li key={`${plante.name}-${index}-${plante.price}`}> {plante.name} {plante.price} euro </li>
        ))}
    </ul>
  );
}
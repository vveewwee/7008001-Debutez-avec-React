import React from 'react'

export default function CareScale(scaleValue, careType) {
    const range = [1, 2, 3]
	const scaleType = scaleValue.careType === 'light' ? '☀️' : '💧'
    return (
    <div>
        {range.map((rangeElem) =>
            scaleValue.scaleValue >= rangeElem ? (
            <span key={rangeElem.toString()}>{scaleType}</span>
            ) : null
        )}
    </div>
  )
}
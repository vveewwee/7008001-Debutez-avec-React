import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function handleClick(scaleValue, careType){
	const care = careType === "water" ? "d'arrosage": "de lumière";
	let phrase = "Cette plante requiert ";
	switch (scaleValue.toString()) {
		case '1': 
			console.log("in 1");
			alert(`${phrase}peu ${care}`);
			break;
		case '2': 
			console.log("in 2");
			alert(`${phrase}modérement ${care}`);
			break;
		case '3': 
			console.log("in 3");
			alert(`${phrase}beaucoup ${care}`);
			break;
		default: alert("oups");
	}
}

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
		<div onClick={()=> handleClick(scaleValue, careType)}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale

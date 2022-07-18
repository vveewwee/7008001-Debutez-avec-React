import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'

function uniqueCategory(plantList){
	const filtered = [];
	plantList.forEach(plant => {
		if (!filtered.includes(plant.category))
			filtered.push(plant.category)
	});
	return filtered
}

function Soldes(){
	return (
		<div className="lmj-sales">
			<p> sales </p>
		</div>
	)
}

function ShoppingList() {
	const uniquecat = uniqueCategory(plantList);

	return (
		<>
			<ul>
				{uniquecat.map((plante, index) => (
					<li key={`${plante}-${index}`}>
						{plante}
						{plante === "classique" && <span>🪴</span>}
						{plante === "extérieur" && <span>🌳</span>}
						{plante === "plante grasse" && <span>🌵</span>}
					</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map(({name, cover, id, light, water}) =>(
					<PlantItem 
						id = {id}
						cover = {cover}
						name = {name}
						light = {light}
						water = {water}
					/>

				)
				)}
			</ul>
		</>
	  );
}

export default ShoppingList


/*
{plantList.map((plante, index) => (
					<li key={`${plante.name}-${index}-${plante.category}`} className='lmj-plant-item'>
						 {plante.name}
						 {plante.category === "classique" && <span>🪴</span>}
						 {plante.category === "extérieur" && <span>🌳</span>}
						 {plante.category === "plante grasse" && <span>🌵</span>}
						 {plante.isBestSale && <Soldes/>}
						 <CareScale  scaleValue={plante.water} careType='water'/>
						 <CareScale  scaleValue={plante.light} careType='light'/>
					</li>
				))}
*/
import { useState } from 'react'
import '../styles/Footer.css'

function handleEmail(inputValue){
	console.log(inputValue);
	if (!inputValue.includes('@')){
		alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.");
		return false;
	}
}

function Footer() {
	const [inputValue, setInputValue] = useState('')

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<form className='lmj-footer-elem' onBlur={()=> handleEmail(inputValue)}>
				<input type='text' placeholder='Inserez votre email' value={inputValue} onChange={(e) => setInputValue(e.target.value)} ></input>
			</form>
		</footer>
	)
}

export default Footer

import { useState, useEffect } from 'react'
import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'

const LOCAL_KEY_STORAGE = 'LMJ.com'

function App() {
	const storedCart = localStorage.getItem(LOCAL_KEY_STORAGE);
	const [cart, updateCart] = useState(storedCart ? JSON.parse(storedCart):[]);
	
	useEffect(()=>{localStorage.setItem(LOCAL_KEY_STORAGE, JSON.stringify(cart))},[cart]);
	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			<Footer />
		</div>
	)
}

export default App

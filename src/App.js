import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';


// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

import {ProductContext} from "./contexts/ProductContext";

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	return (
		// Pass a value prop to your `Provider`(products state, and addItem function)
		<ProductContext.Provider value={[products, addItem]}>
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/" component={Product}/>

			<Route
				path="/cart"
				render={() => <ShoppingCart cart={cart} />}
			/>
		</div>
		</ProductContext.Provider>
	);
}

export default App;

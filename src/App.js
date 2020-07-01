import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import { Route } from "react-router-dom";
import ShopPage from "./pages/shop/ShopPage";

function App() {
	return (
		<div className='App'>
			<Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
		</div>
	);
}

export default App;

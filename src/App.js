import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/header";
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up';

function App() {
	return (
		<div className='App'>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/shop' component={ShopPage} />
				<Route path='/signin' component={SignInAndSignUp} />
			</Switch>
		</div>
	);
}

export default App;

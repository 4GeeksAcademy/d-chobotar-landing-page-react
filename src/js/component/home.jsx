import React from "react";

import Nav from "./Nav";
import Footer from "./Footer";
import Main from "./Main";

//create your first component
const Home = () => {
	console.log("Rendering Home component");
	return (
		<div className="d-flex flex-column min-vh-100 App">
			<Nav/>
			<Main/>
			<Footer/>
	  	</div>
	);
};



export default Home;

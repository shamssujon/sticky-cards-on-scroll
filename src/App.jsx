import React from "react";
import Cards from "./components/Cards/Cards";
import Content from "./components/Content";
import Intro from "./components/Intro";

const App = () => {
	return (
		<div className="bg-slate-900">
			<div className="mx-auto max-w-4xl px-5 py-20">
				<Intro />
				<Cards />
				<Content />
			</div>
		</div>
	);
};

export default App;

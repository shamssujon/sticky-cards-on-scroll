import React from "react";
import Card from "./Card";
import { cardsData } from "./data";

const Cards = () => {
	return (
		<div className="mx-auto max-w-4xl space-y-20 px-5 py-20">
			{cardsData.map((card) => (
				<Card key={card.id} data={card}></Card>
			))}
		</div>
	);
};

export default Cards;

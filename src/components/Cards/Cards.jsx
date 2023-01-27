import React, { useState } from "react";
import Card from "./Card";
import { cardContent } from "./data";

const Cards = () => {
	const [cardsData, setCardsData] = useState(cardContent);
	console.log(cardsData);

	return (
		<div className="space-y-20">
			{cardsData.map((card,index) => (
				// <Card key={card.id} data={card}></Card>
				<Card key={card.id} data={card} topGap={30 * (index + 1)}></Card>
			))}
		</div>
	);
};

export default Cards;

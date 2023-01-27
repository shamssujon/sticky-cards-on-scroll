import React from "react";

const Card = ({ data }) => {
	const { title, body, img } = data;
	return (
		<div className="grid grid-cols-1 overflow-hidden rounded-xl bg-white shadow-md md:grid-cols-2">
			<div className="flex flex-col justify-center p-10">
				<div className="space-y-4">
					<h2 className="font-serif text-5xl">{title}</h2>
					<p className="lg:w-3/4">{body}</p>
					<a href="" className="inline-flex rounded bg-amber-700 px-4 py-2 font-medium text-white">
						Read more
					</a>
				</div>
			</div>
			<div className="relative min-h-[400px]">
				<img src={img} alt="" className="absolute inset-0 block h-full w-full object-cover" />
			</div>
		</div>
	);
};

export default Card;

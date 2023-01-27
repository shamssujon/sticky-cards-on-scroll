import React from "react";

const Card = ({ data, topGap }) => {
	const { title, body, img } = data;
	return (
		<div
			className={`sticky grid grid-cols-1 overflow-hidden rounded-xl bg-white shadow-[0_3px_10px_rgba(0,0,0,0.1)] md:grid-cols-2`}
			style={{ top: topGap }}>
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

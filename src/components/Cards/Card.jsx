import React from "react";

const Card = ({ data, stickyTopSpace }) => {
	const { title, body, img } = data;
	console.log(stickyTopSpace);

	return (
		<div
			className={`sticky grid grid-cols-1 overflow-hidden rounded-xl bg-blue-50 shadow-[0px_0px_30px_-10px_rgba(0,0,0,0.1)] md:grid-cols-2`}
			style={{ top: stickyTopSpace }}>
			<div className="flex flex-col justify-center p-10">
				<div className="space-y-4">
					<h2 className="font-serif text-5xl -mb-2">{title}</h2>
					<p className="lg:w-3/4 text-lg">{body}</p>
					<a href="" className="inline-flex rounded-lg hover:bg-emerald-700 transition bg-emerald-600 px-4 py-2 font-medium text-white">
						Read more
					</a>
				</div>
			</div>
			<div className="relative min-h-[200px] md:min-h-[400px]">
				<img src={img} alt="" className="absolute inset-0 block h-full w-full object-cover" />
			</div>
		</div>
	);
};

export default Card;

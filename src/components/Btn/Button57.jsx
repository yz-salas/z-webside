export default function Button57({ url, title }) {
	return (
		<a
			href={url}
			className="relative border-4 border-black text-black font-extrabold uppercase px-10 py-5 rounded-full bg-transparent transition-transform duration-200 before:absolute before:inset-0 before:bg-white before:rounded-full before:-z-10 before:translate-x-2 before:translate-y-2 before:transition-transform before:duration-200 hover:before:translate-x-0 hover:before:translate-y-0"
		>
			{title}
		</a>
	);
}

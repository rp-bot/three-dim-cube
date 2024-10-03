// app/page.js

import dynamic from "next/dynamic";

const ThreeScene = dynamic(() => import("./components/ThreeScene"), {
	ssr: false,
});

export default function Home() {
	return (
		<div>
			<h1>Three.js with Next.js (App Router)</h1>
			<ThreeScene />
		</div>
	);
}

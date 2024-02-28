import HomeScreen from "@/components/main/HomeScreen";
import MainScreen from "@/components/main/MainScreen";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
	const [name, setName] = useState<string | null>(null);
	const submitNameHandler = (name: string) => {
		setName(name);
	};
	return (
		<>
			<Head>
				<title>{"Showwcase React Challenge"}</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta
					name="title"
					property="og:title"
					content={"Showwcase React Challenge"}
				/>
				<meta
					name="site_name"
					property="og:site_name"
					content={"Showwcase React Challenge"}
				/>
			</Head>
			<div
				className={`flex min-h-screen flex-col items-center justify-between`}
			>
				{name ? (
					<MainScreen name={name} />
				) : (
					<HomeScreen onSubmitName={submitNameHandler} />
				)}
			</div>
		</>
	);
}

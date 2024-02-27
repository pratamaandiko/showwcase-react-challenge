import HomeScreen from "@/components/main/HomeScreen";
import MainScreen from "@/components/main/MainScreen";
import { useState } from "react";

export default function Home() {
	const [name, setName] = useState<string | null>(null);
	const submitNameHandler = (name: string) => {
		setName(name);
	};
	return (
		<div className={`flex min-h-screen flex-col items-center justify-between`}>
			{name ? (
				<MainScreen name={name} />
			) : (
				<HomeScreen onSubmitName={submitNameHandler} />
			)}
		</div>
	);
}

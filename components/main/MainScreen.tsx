import React, { useState } from "react";
import EducationCard from "./EducationCard";
import NewEducationModal from "./NewEducationModal";
import { EducationType } from "@/types/education";
import Link from "next/link";

interface MainScreenProps {
	name: string;
}

const MainScreen: React.FC<MainScreenProps> = ({ name }) => {
	const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
	const [educationsData, setEducationsData] = useState<EducationType[]>([]);

	function openModal() {
		setIsOpenModal(true);
	}

	function closeModal() {
		setIsOpenModal(false);
	}

	const submitEducationHandler = (data: EducationType) => {
		setEducationsData((prevState) => [...prevState, data]);
	};

	return (
		<div className="flex flex-col justify-center items-center space-y-4">
			<header className="flex flex-col justify-center items-center space-y-2">
				<h1>Welcome to {name}&apos;s education page</h1>
				<button onClick={openModal}>Add new Education</button>
			</header>
			<div className="grid grid-cols-3">
				<aside className="col-span-1 flex flex-col space-y-2">
					<h3>Bookmark</h3>
					{educationsData.map((item) => (
						<Link key={item.id} href={`#${item.id}`}>
							{item.school}
						</Link>
					))}
				</aside>
				<main className="col-span-2 flex flex-col space-y-4">
					{educationsData.map((item) => (
						<EducationCard key={item.id} data={item} />
					))}
				</main>
			</div>
			{isOpenModal && (
				<NewEducationModal
					isOpen={isOpenModal}
					onRequestClose={closeModal}
					onSubmitEducation={submitEducationHandler}
				/>
			)}
		</div>
	);
};

export default MainScreen;

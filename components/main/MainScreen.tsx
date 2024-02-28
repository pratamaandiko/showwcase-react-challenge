import React, { useState } from "react";
import EducationCard from "./EducationCard";
import NewEducationModal from "./NewEducationModal";
import { EducationType } from "@/types/education";
import Link from "next/link";
import { StyledButton } from "../styled/Form";
import { StyledH1, StyledH2 } from "../styled/Typography";

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
		<div className="container flex flex-col items-center space-y-8 h-screen w-full p-4 md:p-20 my-6">
			<header className="flex flex-col justify-center items-center space-y-4">
				<StyledH1 fontSize={["1.8rem", "2rem", "3rem"]}>
					Welcome to <span className="text-blue-2">{name}&apos;s</span>{" "}
					education page
				</StyledH1>
				<StyledButton type="button" onClick={openModal}>
					Add new Education
				</StyledButton>
			</header>
			{educationsData.length ? (
				<div className="grid grid-cols-3 w-full gap-4">
					<aside className="col-span-3 md:col-span-1 flex flex-col space-y-2 ">
						<StyledH2
							fontSize={["20px", "24px"]}
							fontWeight={700}
							className="border-b-2 border-b-gray-300 pb-4"
						>
							Bookmark
						</StyledH2>
						{educationsData.map((item) => (
							<Link
								key={item.id}
								href={`#${item.id}`}
								className="font-bold text-ellipsis"
							>
								{item.school}
							</Link>
						))}
					</aside>
					<main className="col-span-3 md:col-span-2 flex flex-col space-y-4">
						<StyledH2
							fontSize={["20px", "24px"]}
							fontWeight={700}
							className="border-b-2 border-b-gray-300 pb-4"
						>
							Educations
						</StyledH2>
						{educationsData.map((item) => (
							<EducationCard key={item.id} data={item} />
						))}
					</main>
				</div>
			) : (
				<StyledH2
					fontSize={["20px", "24px"]}
					fontWeight={700}
					className="p-4 text-center"
				>
					You have no education data!
				</StyledH2>
			)}

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

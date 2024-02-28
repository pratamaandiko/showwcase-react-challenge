import React, { useState } from "react";
import EducationCard from "./EducationCard";
import NewEducationModal from "./NewEducationModal";
import { EducationType } from "@/types/education";
import Link from "next/link";
import { StyledButton } from "../styled/Form";
import { StyledH1, StyledH2 } from "../styled/Typography";
import EditEducationModal from "./EditEducationModal";

interface MainScreenProps {
	name: string;
}

const MainScreen: React.FC<MainScreenProps> = ({ name }) => {
	const [isOpenAddModal, setIsOpenAddModal] = useState<boolean>(false);
	const [isOpenEditModal, setIsOpenEditModal] = useState<EducationType | null>(
		null
	);
	const [educationsData, setEducationsData] = useState<EducationType[]>([]);

	const addEducationHandler = (data: EducationType) => {
		setEducationsData((prevState) => [...prevState, data]);
	};

	const editEducationHandler = (data: EducationType) => {
		setEducationsData((prevState) => {
			return prevState.map((item) => (item.id === data.id ? data : item));
		});
	};

	const deleteEducationHandler = (id: string) => {
		setEducationsData((prevState) => {
			return prevState.filter((item) => item.id !== id);
		});
		setIsOpenEditModal(null);
	};

	return (
		<div className="container flex flex-col items-center space-y-8 h-screen w-full p-4 md:p-20 my-6">
			<header className="flex flex-col justify-center items-center space-y-4">
				<StyledH1 fontSize={["1.8rem", "2rem", "3rem"]}>
					Welcome to <span className="text-blue-2">{name}&apos;s</span>{" "}
					education page
				</StyledH1>
				<StyledButton type="button" onClick={() => setIsOpenAddModal(true)}>
					Add new Education
				</StyledButton>
			</header>
			{educationsData.length ? (
				<div className="grid grid-cols-3 w-full gap-4">
					<aside className="col-span-3 md:col-span-1 flex flex-col ">
						<StyledH2
							fontSize={["20px", "24px"]}
							fontWeight={700}
							className="border-b-2 border-b-gray-300 pb-4 mb-3"
						>
							Bookmark
						</StyledH2>
						{educationsData.map((item) => (
							<Link
								key={item.id}
								href={`#${item.id}`}
								className="font-bold text-ellipsis hover:underline my-2"
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
						{educationsData
							.sort((a, b) => b.endDate.getTime() - a.endDate.getTime())
							.map((item) => (
								<EducationCard
									key={item.id}
									data={item}
									onClickEdit={setIsOpenEditModal}
								/>
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

			{isOpenAddModal && (
				<NewEducationModal
					isOpen={isOpenAddModal}
					onRequestClose={() => setIsOpenAddModal(false)}
					onSubmitEducation={addEducationHandler}
				/>
			)}
			{Boolean(isOpenEditModal) && (
				<EditEducationModal
					dataEdit={isOpenEditModal}
					onRequestClose={() => setIsOpenEditModal(null)}
					onEditeducation={editEducationHandler}
					onDeleteEducation={deleteEducationHandler}
				/>
			)}
		</div>
	);
};

export default MainScreen;

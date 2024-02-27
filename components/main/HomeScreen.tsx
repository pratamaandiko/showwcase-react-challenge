import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import { StyledInput, StyledButton } from "../forms/FormComponents";

const StyledHeading = styled.h1`
	font-family: "onest", sans-serif;
	font-size: 2rem;
	@media (min-width: 640px) {
		font-size: 3rem;
	}
	@media (min-width: 768px) {
		font-size: 4rem;
	}
	font-weight: 800;
	color: #201658;
	text-align: center;
	max-width: 100%;
	@media (min-width: 768px) {
		max-width: 650px;
	}
	line-height: 1;
`;
const StyledSubtitle = styled.h2`
	font-family: "onest", sans-serif;
	font-size: 16px;

	@media (min-width: 768px) {
		font-size: 24px;
	}

	text-align: center;
	line-height: 1.5;
	color: #201658;
`;

type Inputs = {
	name: string;
};

interface HomeScreenProps {
	onSubmitName: (data: string) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onSubmitName }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => onSubmitName(data.name);

	return (
		<main className="flex flex-col justify-center items-center space-y-4 h-screen p-4 md:p-10">
			<StyledHeading>
				Hi there! Welcome to your education showcase.
			</StyledHeading>
			<StyledSubtitle>
				Type your name and click &quot;Enter&quot; below to begin!
			</StyledSubtitle>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col justify-center items-center w-full space-y-4"
			>
				<div className="flex flex-col w-full">
					<StyledInput
						type="text"
						invalid={Boolean(errors.name)}
						{...register("name", { required: true })}
					/>
					{errors.name && (
						<span className="text-xs md:text-sm text-red-500">
							This field is required
						</span>
					)}
				</div>

				<StyledButton type="submit" className="w-[200px]">
					Enter
				</StyledButton>
			</form>
		</main>
	);
};

export default HomeScreen;

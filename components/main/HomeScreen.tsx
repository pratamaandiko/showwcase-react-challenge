import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { StyledInput, StyledButton, StyledErrorMessage } from "../styled/Form";
import { StyledH1, StyledH2 } from "../styled/Typography";

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
			<StyledH1 fontSize={["2rem", "3rem", "5rem"]}>
				<span className="text-blue-2">Hi there!</span> Welcome to your{" "}
				<span className="text-blue-2">education showcase</span>.
			</StyledH1>
			<StyledH2 fontSize={["16px", "24px"]}>
				Type your name and click &quot;Enter&quot; below to begin!
			</StyledH2>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col justify-center items-center w-full space-y-4"
			>
				<div className="flex flex-col w-full">
					<StyledInput
						type="text"
						placeholder="Your name"
						$invalid={Boolean(errors?.name)}
						{...register("name", { required: "Input your name!" })}
					/>
					{errors.name && (
						<StyledErrorMessage>{errors.name.message}</StyledErrorMessage>
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

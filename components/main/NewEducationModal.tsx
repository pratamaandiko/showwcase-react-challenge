import React, { FC } from "react";
import ReactModal from "react-modal";
import { useForm, SubmitHandler } from "react-hook-form";
import { EducationType } from "@/types/education";
import { nanoid } from "nanoid";

interface NewEducationModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
	onSubmitEducation: SubmitHandler<EducationType>;
}

const NewEducationModal: FC<NewEducationModalProps> = ({
	isOpen,
	onRequestClose,
	onSubmitEducation,
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<EducationType>();

	const onSubmit: SubmitHandler<EducationType> = (data) => {
		onSubmitEducation({ ...data, id: nanoid() });
		onRequestClose();
	};

	return (
		<ReactModal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			contentLabel="Example Modal"
		>
			<button onClick={onRequestClose}>close</button>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col justify-center items-center"
			>
				<input {...register("school", { required: true })} />
				{errors.school && <span>This field is required</span>}
				<input {...register("degree", { required: true })} />
				{errors.degree && <span>This field is required</span>}
				<input {...register("field", { required: true })} />
				{errors.field && <span>This field is required</span>}
				<input type="number" {...register("startYear", { required: true })} />
				{errors.startYear && <span>This field is required</span>}
				<input type="number" {...register("endYear", { required: true })} />
				{errors.endYear && <span>This field is required</span>}
				<input type="float" {...register("grade", { required: true })} />
				{errors.grade && <span>This field is required</span>}
				<textarea {...register("description", { required: true })} />
				{errors.description && <span>This field is required</span>}

				<button type="submit">Enter</button>
			</form>
		</ReactModal>
	);
};

export default NewEducationModal;

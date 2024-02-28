import React, { FC, useState } from "react";
import ReactModal from "react-modal";
import { StyledH2 } from "../styled/Typography";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { EducationSubmitType, EducationType } from "@/types/education";
import { nanoid } from "nanoid";
import {
	StyledButton,
	StyledErrorMessage,
	StyledInput,
	StyledLabel,
	StyledTextArea,
} from "../styled/Form";
import styled from "styled-components";
import Select from "react-select";
import { courseList, degreeOptions } from "@/constant/data";
import { useGetUniversity } from "@/hooks/api/useGetUniversity";
import useDebounce from "@/hooks/useDebounce";

interface EditEducationModalProps {
	dataEdit: EducationType | null;
	onRequestClose: () => void;
	onDeleteEducation: (id: string) => void;
	onEditeducation: SubmitHandler<EducationType>;
}
export const CloseButton = styled.button`
	position: absolute;
	top: 5px;
	right: 10px;
	line-height: 1;
	font-size: 36px;
	cursor: pointer;
`;

const customStyles: ReactModal.Styles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		background: "#fff",
		borderRadius: "10px",
		padding: "20px",
		boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
		animation: "modalFade 0.5s ease",
		position: "relative",
	},
	overlay: {
		backgroundColor: "rgba(0, 0, 0, 0.75)",
		transition: "opacity 0.5s ease",
	},
};

const EditEducationModal: FC<EditEducationModalProps> = ({
	dataEdit,
	onRequestClose,
	onEditeducation,
	onDeleteEducation,
}) => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<EducationSubmitType>({
		defaultValues: {
			...dataEdit,
			school: { label: dataEdit!!.school, value: dataEdit!!.school },
			degree: { label: dataEdit!!.degree, value: dataEdit!!.degree },
			field: { label: dataEdit!!.field, value: dataEdit!!.field },
		},
	});
	const [queryUniversity, setQueryUniversity] = useState("");
	const debouncedSearchUniversity = useDebounce(queryUniversity, 750);
	const { data: listUniversity, isFetching: isFetchingListUniversity } =
		useGetUniversity({
			query: {
				limit: 30,
				name: debouncedSearchUniversity,
			},
		});

	const onSubmit: SubmitHandler<EducationSubmitType> = (data) => {
		onEditeducation({
			...data,
			id: dataEdit!!.id,
			school: data.school!!.value,
			degree: data.degree!!.value,
			field: data.field!!.value,
		});
		onRequestClose();
	};
	return (
		<>
			<style>
				{`
					@keyframes modalFade {
						from {
							opacity: 0;
							transform: translate(-50%, -40%);
						}
						to {
							opacity: 1;
							transform: translate(-50%, -50%);
						}
					}
				`}
			</style>
			<ReactModal
				isOpen={Boolean(dataEdit)}
				onRequestClose={onRequestClose}
				style={customStyles}
				ariaHideApp={false}
				className="w-full md:w-[768px]"
			>
				<div className="flex justify-between items-start">
					<StyledH2 fontSize={["20px"]} fontWeight={600}>
						Edit Education
					</StyledH2>
					<CloseButton onClick={onRequestClose}>&times;</CloseButton>
				</div>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col space-y-3 py-4"
				>
					<div className="flex flex-col w-full space-y-1">
						<StyledLabel>
							School<span className="text-red-500">*</span>
						</StyledLabel>

						<Controller
							control={control}
							name="school"
							defaultValue={null}
							rules={{ required: "Input your school!" }}
							render={({ field: { onChange, value } }) => (
								<Select
									instanceId="school"
									placeholder="Select school"
									isClearable
									onInputChange={(inputValue, { action }) => {
										if (action === "menu-close" || action === "input-blur") {
											return;
										}
										setQueryUniversity(inputValue);
									}}
									isLoading={isFetchingListUniversity}
									options={listUniversity?.map((item: { name: string }) => ({
										label: item.name,
										value: item.name,
									}))}
									onChange={onChange}
									value={value}
									inputValue={queryUniversity}
								/>
							)}
						/>
						{errors.school && (
							<StyledErrorMessage>{errors.school.message}</StyledErrorMessage>
						)}
					</div>

					<div className="flex flex-col w-full space-y-1">
						<StyledLabel>
							Degree<span className="text-red-500">*</span>
						</StyledLabel>
						<Controller
							control={control}
							name="degree"
							defaultValue={null}
							rules={{ required: "Input your degree!" }}
							render={({ field: { onChange, value } }) => (
								<Select
									className="basic-single"
									classNamePrefix="select"
									defaultValue={null}
									isClearable
									isSearchable
									options={degreeOptions.map((item) => ({
										label: item,
										value: item,
									}))}
									onChange={onChange}
									value={value}
								/>
							)}
						/>
						{errors.degree && (
							<StyledErrorMessage>{errors.degree.message}</StyledErrorMessage>
						)}
					</div>

					<div className="flex flex-col w-full space-y-1">
						<StyledLabel>
							Field of study<span className="text-red-500">*</span>
						</StyledLabel>
						<Controller
							control={control}
							name="field"
							defaultValue={null}
							rules={{ required: "Input your field!" }}
							render={({ field: { onChange, value } }) => (
								<Select
									className="basic-single"
									classNamePrefix="select"
									defaultValue={null}
									isClearable
									isSearchable
									options={courseList.map((item) => ({
										label: item,
										value: item,
									}))}
									onChange={onChange}
									value={value}
								/>
							)}
						/>
						{errors.field && (
							<StyledErrorMessage>{errors.field.message}</StyledErrorMessage>
						)}
					</div>

					<div className="flex flex-col w-full space-y-1">
						<StyledLabel>
							Start year<span className="text-red-500">*</span>
						</StyledLabel>
						<StyledInput
							type="number"
							placeholder="startYear"
							$invalid={Boolean(errors?.startYear)}
							{...register("startYear", { required: "Input your startYear!" })}
						/>
						{errors.startYear && (
							<StyledErrorMessage>
								{errors.startYear.message}
							</StyledErrorMessage>
						)}
					</div>

					<div className="flex flex-col w-full space-y-1">
						<StyledLabel>
							End year<span className="text-red-500">*</span>
						</StyledLabel>
						<StyledInput
							type="number"
							placeholder="endYear"
							$invalid={Boolean(errors?.endYear)}
							{...register("endYear", { required: "Input your endYear!" })}
						/>
						{errors.endYear && (
							<StyledErrorMessage>{errors.endYear.message}</StyledErrorMessage>
						)}
					</div>

					<div className="flex flex-col w-full space-y-1">
						<StyledLabel>Grade</StyledLabel>
						<StyledInput
							type="float"
							placeholder="grade"
							$invalid={Boolean(errors?.grade)}
							{...register("grade")}
						/>
						{errors.grade && (
							<StyledErrorMessage>{errors.grade.message}</StyledErrorMessage>
						)}
					</div>

					<div className="flex flex-col w-full space-y-1">
						<StyledLabel>Description</StyledLabel>
						<StyledTextArea
							rows={4}
							placeholder="description"
							{...register("description")}
						/>
					</div>

					<div className="flex justify-between items-center">
						<StyledButton
							type="button"
							onClick={() => {
								onDeleteEducation(dataEdit!!.id);
							}}
							$danger={true}
						>
							Delete
						</StyledButton>

						<div className="flex justify-between items-center gap-3">
							<StyledButton
								type="button"
								onClick={onRequestClose}
								$outline={true}
								width={1 / 2}
							>
								Cancel
							</StyledButton>
							<StyledButton type="submit" width={1 / 2}>
								Save
							</StyledButton>
						</div>
					</div>
				</form>
			</ReactModal>
		</>
	);
};

export default EditEducationModal;

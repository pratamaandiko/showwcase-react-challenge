import React, { FC } from "react";
import { EducationType } from "../../types/education";
import { StyledH2 } from "../styled/Typography";
import Markdown from "react-markdown";
import styled from "styled-components";
import EditIcon from "../icons/EditIcon";
import { getMonthYearString } from "@/helpers/functions";

export const EditButton = styled.button`
	position: absolute;
	padding: 10px;
	border-radius: 8px;
	top: 10px;
	right: 14px;
	border: none;
	font-size: 36px;
	line-height: 1;
	cursor: pointer;
	width: max-content;
	&:hover {
		background: #e8e6df;
	}
`;

interface NewEducationModalProps {
	data: EducationType;
	onClickEdit: (data: EducationType) => void;
}

const EducationCard: FC<NewEducationModalProps> = ({ data, onClickEdit }) => {
	return (
		<div
			id={data.id}
			className={`flex flex-col space-y-1 rounded-lg bg-white p-6 py-8 border-2 border-gray-200 relative`}
		>
			<EditButton
				onClick={() => {
					onClickEdit(data);
				}}
			>
				<EditIcon />
			</EditButton>
			<StyledH2 fontSize={["22px", "26px"]} fontWeight={700}>
				{data.degree} of {data.field}
			</StyledH2>
			<p className="text-lg">{data.school}</p>
			<p className="text-gray-400">
				{getMonthYearString(data.startDate)} -{" "}
				{getMonthYearString(data.endDate)}
			</p>
			{data?.grade && <p className="text-gray-400">Grade : {data.grade}</p>}
			{data?.description && <Markdown>{data.description}</Markdown>}
		</div>
	);
};

export default EducationCard;

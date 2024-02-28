import React, { FC, useState } from "react";
import { EducationType } from "../../types/education";
import { StyledH2 } from "../styled/Typography";
import Markdown from "react-markdown";

interface NewEducationModalProps {
	data: EducationType;
}

const EducationCard: FC<NewEducationModalProps> = ({ data }) => {
	const [expanded, setExpanded] = useState(false);
	return (
		<div
			id={data.id}
			className={`flex flex-col space-y-2 rounded-lg bg-white p-6 border-2 border-gray-200`}
		>
			<StyledH2 fontSize={["22px", "26px"]} fontWeight={700}>
				{data.degree} {data.field}
			</StyledH2>
			<p className="text-xl">{data.school}</p>
			<p className="text-gray-400">
				{data.startYear} - {data.endYear}
			</p>
			<Markdown>{data.description}</Markdown>
		</div>
	);
};

export default EducationCard;

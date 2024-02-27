import React, { FC } from "react";
import { EducationType } from "../../types/education";

interface NewEducationModalProps {
	data: EducationType;
}

const EducationCard: FC<NewEducationModalProps> = ({ data }) => {
	return (
		<div id={data.id} className="flex flex-col space-y-2">
			<h2>
				{data.degree} {data.field} @ {data.school}
			</h2>
			<p>
				{data.startYear} - {data.endYear}
			</p>
			<p>{data.description}</p>
		</div>
	);
};

export default EducationCard;

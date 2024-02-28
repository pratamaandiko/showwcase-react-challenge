import styled from "styled-components";
import { typography, TypographyProps } from "styled-system";

export const StyledH1 = styled.h1<TypographyProps>`
	${typography}
	font-family: "onest", sans-serif;
	font-weight: 800;
	color: #201658;
	text-align: center;
	max-width: 100%;
	@media (min-width: 768px) {
		max-width: 650px;
	}
	line-height: 1;
`;

export const StyledH2 = styled.h2<TypographyProps>`
	${typography}
	font-family: "onest", sans-serif;
	line-height: 1.5;
	color: #201658;
`;

export const StyledH3 = styled.h3<TypographyProps>`
	${typography}
	font-family: "onest", sans-serif;
	line-height: 1.5;
	color: #201658;
`;

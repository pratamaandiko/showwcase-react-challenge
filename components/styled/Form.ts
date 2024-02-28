import styled from "styled-components";

interface StyledLabelProps {
	$invalid?: boolean;
}

export const StyledLabel = styled.label<StyledLabelProps>`
	display: block;
	margin-bottom: 5px;
	font-weight: bold;
	color: ${(props) => (props.$invalid ? "red" : "black")};
`;

export const StyledInput = styled.input<StyledLabelProps>`
	width: 100%;
	padding: 10px;
	border: ${(props) => (props.$invalid ? "2px solid red" : "1px solid #ccc")};
	border-radius: 5px;
`;

export const StyledErrorMessage = styled.span`
	font-size: 12px;
	@media (min-width: 480px) {
		font-size: 14px;
	}
	color: red;
`;

export const StyledButton = styled.button`
	align-items: center;
	background-clip: padding-box;
	background-color: #201658;
	border: 1px solid transparent;
	border-radius: 0.25rem;
	box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
	box-sizing: border-box;
	color: #fff;
	cursor: pointer;
	display: inline-flex;
	font-family: system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica,
		Arial, sans-serif;
	font-size: 16px;
	font-weight: 600;
	justify-content: center;
	line-height: 1.25;
	margin: 0;
	min-height: 3rem;
	padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
	position: relative;
	text-decoration: none;
	transition: all 250ms;
	user-select: none;
	-webkit-user-select: none;
	touch-action: manipulation;
	vertical-align: baseline;

	&:hover,
	&:focus {
		background-color: #1d24ca;
		box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
	}
	&:hover {
		transform: translateY(-1px);
	}

	&:active {
		background-color: #201658;
		box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
		transform: translateY(0);
	}
`;
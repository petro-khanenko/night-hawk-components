/* eslint-disable jsx-a11y/control-has-associated-label */
import { ButtonContainer } from "./hexagon-button.styled";
import React from "react";
import {Theme} from "@mui/material";

interface IHexagonBtn {
	title: string;
	variant?: 'outlined' | 'filled';
	disabled?: boolean;
	click?: React.MouseEventHandler<HTMLDivElement>;
	width?: string;
	theme?: Theme;
}

export const HexagonBtn: React.FC<IHexagonBtn> = ({
	title,
	variant,
	disabled,
	click,
	width,
	theme
}) => (
	<ButtonContainer disabled={disabled} variant={variant} onClick={click} width={width} theme={theme}>
		<span>
			{title}
			<button type="submit" disabled={disabled} />
		</span>
	</ButtonContainer>
);

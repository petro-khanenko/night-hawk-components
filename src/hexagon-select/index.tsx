import React, {ReactNode} from "react";
import {Styled} from "./hexagon-select.styled";
import {Grid, Theme} from "@mui/material";
import * as GlobalTypography from "../global-typography";

export interface IHexagonSelectProps {
	name: string;
	label?: string;
	disabled?: boolean | undefined;
	isErrorExists?: boolean | undefined;
	subLabel?: string;
	theme?: Theme;
	children: ReactNode;
}

export const HexagonSelect: React.FC<IHexagonSelectProps> = ({
	disabled,
	isErrorExists,
	label,
	subLabel,
	theme,
	children
}) => {

	return (
		<Grid container direction='column' justifyContent='center' alignItems='center'>
			<Grid container alignItems='center' justifyContent='space-between' pl='1.5rem' pr='2.5rem'>
				{
					label && (
						<GlobalTypography.Text variant="body2" colorVariant={theme?.palette.secondary.main} fontWeight='fontWeightMedium'>
							{label}
						</GlobalTypography.Text>
					)
				}
				{
					subLabel && (
						<GlobalTypography.Text variant="body2" colorVariant={theme?.palette.secondary.main} pl='1rem'>
							{subLabel}
						</GlobalTypography.Text>
					)
				}
			</Grid>

			<Styled.SelectContainer error={isErrorExists} disabled={disabled}>
				{ children }
			</Styled.SelectContainer>
		</Grid>
	);
};

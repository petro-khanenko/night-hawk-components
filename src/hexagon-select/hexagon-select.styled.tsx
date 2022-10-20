import React from "react";
import styled from "@emotion/styled";
import { Grid, Theme } from "@mui/material";
import Select from "@mui/material/Select";
import { TiArrowSortedDown } from "react-icons/ti";
// @ts-ignore
import BigBorder from "../assets/icons/input-big-border.svg";
// @ts-ignore
import BigBorderError from "../assets/icons/input-big-border-error.svg";
import {COLORS} from "../consts/colors";

const ArrowIcon: React.FC<any> = React.forwardRef((props, ref) => (
	<TiArrowSortedDown
		size={24}
		color={COLORS.deepViolet}
		style={{ marginRight: '9px' }}
		{...props}
		ref={ref}
	/>
));

const StandardSelect = React.forwardRef((props, ref) => (
	<Select variant="standard" disableUnderline IconComponent={ArrowIcon} {...props} ref={ref} />
));

export const SelectContainer = styled(Grid)<{ disabled?: boolean | undefined; error?: boolean; theme?: Theme }>`
	position: relative;
	background-repeat: no-repeat;
	min-height: 50px;
	margin-bottom: ${({theme}) => theme.spacing(1)};
	background-image: ${(props) => (props.error ? `url(${BigBorderError})` : `url(${BigBorder})`)};
	min-width: 420px;
`;

export const SelectField = styled(StandardSelect)<{theme?: Theme}>`
	background-color: transparent;
	min-width: 395px;
	align-items: center;
	margin-left: ${({theme}) => theme.spacing(1.5)};
	cursor: pointer;
	& .MuiSelect-select {
		padding-left: 15px;
		margin-top: 11px;
		min-height: 28px !important;
		align-items: center;
	}
`;

export const Styled = {
	SelectContainer,
	Select,
	Option,
	SelectField,
};

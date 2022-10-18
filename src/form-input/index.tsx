/* eslint-disable react/no-unused-prop-types */
import { getIn, useFormikContext } from "formik";
import React from "react";

import { Styled } from "./form-input.styled";
import { Grid } from "@mui/material";
import * as GlobalTypography from "../global-typography";

export interface IFormInputProps {
	text?: string;
	name: string;
	type: string;
	placeholder?: string;
	step?: number;
	min?: number;
	label?: string;
	isEdit?: boolean;
	maxLength?: number;
	disabled?: boolean | undefined;
	passedValue: string;
	isBig?: boolean;
	isOptional?: boolean;
	subLabel?: string;
}

export const FormInput: React.FC<IFormInputProps> = ({
	name,
	type,
	placeholder,
	step,
	min,
	maxLength,
	disabled,
	passedValue,
	label,
	isBig,
	subLabel
}) => {
	const { values, handleChange, errors, touched } = useFormikContext();
	const isErrorExists = getIn(errors, name) && getIn(touched, name);
	const RenderInputContainer = isBig ? Styled.InputLargeContainer : Styled.InputContainer;
	const RenderInput = isBig ? Styled.LargeInput : Styled.Input;

	return (
		<Grid container direction='column' justifyContent='center' alignItems='center'>
			<Grid container alignItems='center' justifyContent='space-between' pl='1.5rem' pr='2rem'>
				{
					label && (
						<GlobalTypography.Text variant="body2" colorVariant="secondary" fontWeight='fontWeightMedium'>
							{label}
						</GlobalTypography.Text>
					)
				}
				{
					subLabel && (
						<GlobalTypography.Text variant="body2" colorVariant="secondary">
							{subLabel}
						</GlobalTypography.Text>
					)
				}
			</Grid>
			<RenderInputContainer
				direction='column'
				justifyContent='center'
				alignItems='center'
				error={isErrorExists}
				disabled={disabled}
			>
				<Styled.InputPrefix />
				<RenderInput
					id={name}
					name={name}
					type={type}
					min={min || 0.01}
					step={step}
					onChange={handleChange(name)}
					value={getIn(values, name) || passedValue}
					placeholder={placeholder}
					maxLength={maxLength}
					disabled={disabled}
				/>
			</RenderInputContainer>
			{isErrorExists && (
				<Styled.ErrorInfoContainer>
					<Styled.ErrorInfoText>{getIn(errors, name)}</Styled.ErrorInfoText>
				</Styled.ErrorInfoContainer>
			)}
		</Grid>
	);
};

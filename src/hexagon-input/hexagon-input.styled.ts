import { Field } from 'formik';
import styled from "@emotion/styled";
import { Grid, Theme } from "@mui/material";
// @ts-ignore
import Border from '../assets/icons/inputBorder.svg';
// @ts-ignore
import BorderError from '../assets/icons/inputBorderError.svg';
// @ts-ignore
import BigBorder from '../assets/icons/input-big-border.svg';
// @ts-ignore
import BigBorderError from '../assets/icons/input-big-border-error.svg';


export const InputContainer = styled(Grid)<{ disabled?: boolean | undefined; error?: boolean; theme?: Theme }>`
	position: relative;
	background-repeat: no-repeat;
	min-height: 50px;
	margin-bottom: ${({theme}) => theme.spacing(1)};
	background-image: ${(props) => (props.error ? `url(${BorderError})` : `url(${Border})`)};
	min-width: 275px;
`;

export const InputLargeContainer = styled(InputContainer)<{
	disabled?: boolean | undefined;
	error?: boolean;
}>`
	background-image: ${(props) => (props.error ? `url(${BigBorderError})` : `url(${BigBorder})`)};
	min-width: 420px;
`;

export const InputPrefix = styled.div`
	align-items: center;
	background-color: transparent;
	display: flex;
	padding-left: 20px;
`;

export const Input = styled(Field)<{theme?: Theme}>`
	background-color: transparent;
	border: none;
	min-width: 230px;
	min-height: 35px;
	margin-top: ${({theme}) => theme.spacing(1)};
	margin-left: ${({theme}) => theme.spacing(3)};
	outline: none;

	::placeholder {
		color: ${({theme}) => theme.palette.secondary.main};
		opacity: 0.85;
	}

	&:-webkit-autofill {
		min-height: 35px;
		box-shadow: ${({theme}) =>`0 0 0 30px ${theme.palette.common.white} inset !important`};
	}
	&:-webkit-autofill:hover {
		min-height: 35px;
		box-shadow: ${({theme}) =>`0 0 0 30px ${theme.palette.common.white} inset !important`};
	}

	&:-webkit-autofill:focus {
		min-height: 35px;
		box-shadow: ${({theme}) =>`0 0 0 30px ${theme.palette.common.white} inset !important`};
	}
`;

export const LargeInput = styled(Input)`
	min-width: 375px;
`;

export const ErrorInfoContainer = styled.div<{ errorJustifyContent?: string; theme?: Theme }>`
	display: flex;
	justify-content: flex-end;
	width: 90%;
	color: ${({theme}) => theme.palette.error.main};
	position: relative;
`;

export const ErrorInfoText = styled.div<{theme?: Theme}>`
	box-sizing: border-box;
	font-size: ${({theme}) => theme.typography.body2.fontSize};
	font-weight: ${({theme}) => theme.typography.fontWeightMedium};
	margin-right: ${({theme}) => theme.spacing(0.25)};
`;

export const Styled = {
	InputContainer,
	InputLargeContainer,
	InputPrefix,
	Input,
	LargeInput,
	ErrorInfoContainer,
	ErrorInfoText,
};

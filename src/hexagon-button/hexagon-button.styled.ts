import styled from "@emotion/styled";
import { Theme } from "@mui/material";
// @ts-ignore
import img from '../assets/images/bg-low-poly-purple.png';

export const ButtonContainer = styled.div<{
	variant?: 'outlined' | 'filled';
	disabled?: boolean;
	width?: string;
	theme?: Theme;
}>`
	position: relative;
	button[type='submit'] {
		border: none;
		outline: none;
		background-color: transparent;
		width: 200px;
		height: 50px;
		position: absolute;
		left: 10px;
		top: 5px;
		cursor: pointer;
	}
	
	span {
		position: relative;
    background-image: none !important;
    display: block;
    cursor: pointer;
		width: ${({width}) => width || '10rem'};
    height: 50px;
		line-height: 50px;
		text-align: center;
		vertical-align: center;
		font-size: ${({theme}) => theme.typography.body1.fontSize};
		font-weight: ${({theme}) => theme.typography.fontWeightMedium};
		text-decoration: none;
		color: ${({variant, theme}) => variant === 'outlined' ? theme.palette.primary.contrastText : theme.palette.common.white};
		z-index: 2;
	}

	span:before,
	span:after {
		width: ${({width}) => width || '10rem'};
		content: '';
		position: absolute;
		border: 2px solid ${({variant, theme}) => 
			variant === 'outlined'
				? theme.palette.primary.contrastText
				: theme.palette.common.white};
		height: 50%;
		left: 0;
		z-index: -1;
		background: ${({ disabled, variant, theme }) =>
			disabled
				? theme.palette.secondary.light
				: variant === 'filled'
					? `url(${img})`
					: `none`};
	}

	span:before {
		border-width: 2px 2px 0 2px;
		top: 0;
		transform-origin: center bottom;
		transform: perspective(1rem) rotateX(3deg);
	}

	span:after {
		position: absolute;
		top: 49.5%;
		content: '';
		border-width: 0 2px 2px 2px;
		bottom: 0;
		transform-origin: center top;
		transform: perspective(1rem) rotateX(-3deg);
	}
`;

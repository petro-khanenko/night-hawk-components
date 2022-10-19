/* eslint-disable react/no-unused-prop-types */
import React from "react";

import {Styled} from "./hexagon-input.styled";
import {Grid} from "@mui/material";
import {Theme} from "@emotion/react";
import * as GlobalTypography from "../global-typography";

export interface IHexagonInputProps {
    text?: string;
    name: string;
    type: string;
    placeholder?: string;
    step?: number;
    min?: number;
    label?: string;
    isEdit?: boolean;
    isErrorExists?: boolean;
    errorText?: string;
    maxLength?: number;
    disabled?: boolean | undefined;
    passedValue: string;
    isBig?: boolean;
    isOptional?: boolean;
    subLabel?: string;
    onChange?: Function;
    theme?: Theme;
}

export const HexagonInput: React.FC<IHexagonInputProps> = ({
                                                               name,
                                                               type,
                                                               placeholder,
                                                               step,
                                                               isErrorExists,
                                                               errorText,
                                                               min,
                                                               maxLength,
                                                               disabled,
                                                               passedValue,
                                                               label,
                                                               isBig,
                                                               subLabel,
                                                               onChange,
                                                               theme
                                                           }) => {

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
                // @ts-ignore
                theme={theme}
                direction='column'
                justifyContent='center'
                alignItems='center'
                error={isErrorExists}
                disabled={disabled}
            >
                <Styled.InputPrefix/>
                <RenderInput
                    // @ts-ignore
                    theme={theme}
                    id={name}
                    name={name}
                    type={type}
                    min={min || 0.01}
                    step={step}
                    onChange={onChange}
                    value={passedValue}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    disabled={disabled}
                />
            </RenderInputContainer>
            {isErrorExists && (
                // @ts-ignore
                <Styled.ErrorInfoContainer theme={theme}>
                    <Styled.ErrorInfoText
                        // @ts-ignore
                        theme={theme}
                    >
                        {errorText}
                    </Styled.ErrorInfoText>
                </Styled.ErrorInfoContainer>
            )}
        </Grid>
    );
};

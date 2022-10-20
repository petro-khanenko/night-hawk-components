/* eslint-disable react/no-unused-prop-types */
import React, {ReactNode} from "react";

import {Styled} from "./hexagon-input.styled";
import {Grid} from "@mui/material";
import {Theme} from "@emotion/react";
import * as GlobalTypography from "../global-typography";

export interface IHexagonInputProps {
    label?: string;
    isErrorExists?: boolean;
    errorText?: string;
    disabled?: boolean | undefined;
    isBig?: boolean;
    isOptional?: boolean;
    subLabel?: string;
    onChange?: Function;
    theme?: Theme;
    children: ReactNode;
}

export const HexagonInput: React.FC<IHexagonInputProps> = ({
                                                               isErrorExists,
                                                               errorText,
                                                               disabled,
                                                               label,
                                                               isBig,
                                                               subLabel,
                                                               theme,
                                                               children
                                                           }) => {

    const RenderInputContainer = isBig ? Styled.InputLargeContainer : Styled.InputContainer;

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
                { children }
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

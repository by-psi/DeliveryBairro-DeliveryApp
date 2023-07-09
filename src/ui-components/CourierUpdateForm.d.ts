/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Courier } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CourierUpdateFormInputValues = {
    Nome?: string;
    Cpf?: string;
    Telefone?: string;
    Tipo?: string;
    UrlFoto?: string;
    TokenSMS?: string;
    Latitude?: number;
    Longitude?: number;
};
export declare type CourierUpdateFormValidationValues = {
    Nome?: ValidationFunction<string>;
    Cpf?: ValidationFunction<string>;
    Telefone?: ValidationFunction<string>;
    Tipo?: ValidationFunction<string>;
    UrlFoto?: ValidationFunction<string>;
    TokenSMS?: ValidationFunction<string>;
    Latitude?: ValidationFunction<number>;
    Longitude?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CourierUpdateFormOverridesProps = {
    CourierUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Nome?: PrimitiveOverrideProps<TextFieldProps>;
    Cpf?: PrimitiveOverrideProps<TextFieldProps>;
    Telefone?: PrimitiveOverrideProps<TextFieldProps>;
    Tipo?: PrimitiveOverrideProps<SelectFieldProps>;
    UrlFoto?: PrimitiveOverrideProps<TextFieldProps>;
    TokenSMS?: PrimitiveOverrideProps<TextFieldProps>;
    Latitude?: PrimitiveOverrideProps<TextFieldProps>;
    Longitude?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CourierUpdateFormProps = React.PropsWithChildren<{
    overrides?: CourierUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    courier?: Courier;
    onSubmit?: (fields: CourierUpdateFormInputValues) => CourierUpdateFormInputValues;
    onSuccess?: (fields: CourierUpdateFormInputValues) => void;
    onError?: (fields: CourierUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CourierUpdateFormInputValues) => CourierUpdateFormInputValues;
    onValidate?: CourierUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CourierUpdateForm(props: CourierUpdateFormProps): React.ReactElement;

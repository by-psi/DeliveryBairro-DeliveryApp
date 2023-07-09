/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CourierCreateFormInputValues = {
    Nome?: string;
    Cpf?: string;
    Telefone?: string;
    Tipo?: string;
    UrlFoto?: string;
    TokenSMS?: string;
    Latitude?: number;
    Longitude?: number;
};
export declare type CourierCreateFormValidationValues = {
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
export declare type CourierCreateFormOverridesProps = {
    CourierCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Nome?: PrimitiveOverrideProps<TextFieldProps>;
    Cpf?: PrimitiveOverrideProps<TextFieldProps>;
    Telefone?: PrimitiveOverrideProps<TextFieldProps>;
    Tipo?: PrimitiveOverrideProps<SelectFieldProps>;
    UrlFoto?: PrimitiveOverrideProps<TextFieldProps>;
    TokenSMS?: PrimitiveOverrideProps<TextFieldProps>;
    Latitude?: PrimitiveOverrideProps<TextFieldProps>;
    Longitude?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CourierCreateFormProps = React.PropsWithChildren<{
    overrides?: CourierCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CourierCreateFormInputValues) => CourierCreateFormInputValues;
    onSuccess?: (fields: CourierCreateFormInputValues) => void;
    onError?: (fields: CourierCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CourierCreateFormInputValues) => CourierCreateFormInputValues;
    onValidate?: CourierCreateFormValidationValues;
} & React.CSSProperties>;
export default function CourierCreateForm(props: CourierCreateFormProps): React.ReactElement;

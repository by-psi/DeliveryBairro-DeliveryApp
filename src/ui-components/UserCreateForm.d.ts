/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserCreateFormInputValues = {
    Nome?: string;
    Sobrenome?: string;
    UrlFoto?: string;
    Token?: string;
    Telefone?: string;
    Endereco?: string;
    Latitude?: number;
    Longitude?: number;
};
export declare type UserCreateFormValidationValues = {
    Nome?: ValidationFunction<string>;
    Sobrenome?: ValidationFunction<string>;
    UrlFoto?: ValidationFunction<string>;
    Token?: ValidationFunction<string>;
    Telefone?: ValidationFunction<string>;
    Endereco?: ValidationFunction<string>;
    Latitude?: ValidationFunction<number>;
    Longitude?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserCreateFormOverridesProps = {
    UserCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Nome?: PrimitiveOverrideProps<TextFieldProps>;
    Sobrenome?: PrimitiveOverrideProps<TextFieldProps>;
    UrlFoto?: PrimitiveOverrideProps<TextFieldProps>;
    Token?: PrimitiveOverrideProps<TextFieldProps>;
    Telefone?: PrimitiveOverrideProps<TextFieldProps>;
    Endereco?: PrimitiveOverrideProps<TextFieldProps>;
    Latitude?: PrimitiveOverrideProps<TextFieldProps>;
    Longitude?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserCreateFormProps = React.PropsWithChildren<{
    overrides?: UserCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserCreateFormInputValues) => UserCreateFormInputValues;
    onSuccess?: (fields: UserCreateFormInputValues) => void;
    onError?: (fields: UserCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserCreateFormInputValues) => UserCreateFormInputValues;
    onValidate?: UserCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserCreateForm(props: UserCreateFormProps): React.ReactElement;

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
export declare type ProdutoCreateFormInputValues = {
    Nome?: string;
    Descricao?: string;
    VrUnitario?: string;
    UrlFoto?: string;
};
export declare type ProdutoCreateFormValidationValues = {
    Nome?: ValidationFunction<string>;
    Descricao?: ValidationFunction<string>;
    VrUnitario?: ValidationFunction<string>;
    UrlFoto?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProdutoCreateFormOverridesProps = {
    ProdutoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Nome?: PrimitiveOverrideProps<TextFieldProps>;
    Descricao?: PrimitiveOverrideProps<TextFieldProps>;
    VrUnitario?: PrimitiveOverrideProps<TextFieldProps>;
    UrlFoto?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProdutoCreateFormProps = React.PropsWithChildren<{
    overrides?: ProdutoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProdutoCreateFormInputValues) => ProdutoCreateFormInputValues;
    onSuccess?: (fields: ProdutoCreateFormInputValues) => void;
    onError?: (fields: ProdutoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProdutoCreateFormInputValues) => ProdutoCreateFormInputValues;
    onValidate?: ProdutoCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProdutoCreateForm(props: ProdutoCreateFormProps): React.ReactElement;

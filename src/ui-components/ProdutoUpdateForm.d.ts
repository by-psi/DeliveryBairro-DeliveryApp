/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Produto } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProdutoUpdateFormInputValues = {
    Nome?: string;
    Descricao?: string;
    VrUnitario?: string;
    UrlFoto?: string;
};
export declare type ProdutoUpdateFormValidationValues = {
    Nome?: ValidationFunction<string>;
    Descricao?: ValidationFunction<string>;
    VrUnitario?: ValidationFunction<string>;
    UrlFoto?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProdutoUpdateFormOverridesProps = {
    ProdutoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Nome?: PrimitiveOverrideProps<TextFieldProps>;
    Descricao?: PrimitiveOverrideProps<TextFieldProps>;
    VrUnitario?: PrimitiveOverrideProps<TextFieldProps>;
    UrlFoto?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProdutoUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProdutoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    produto?: Produto;
    onSubmit?: (fields: ProdutoUpdateFormInputValues) => ProdutoUpdateFormInputValues;
    onSuccess?: (fields: ProdutoUpdateFormInputValues) => void;
    onError?: (fields: ProdutoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProdutoUpdateFormInputValues) => ProdutoUpdateFormInputValues;
    onValidate?: ProdutoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProdutoUpdateForm(props: ProdutoUpdateFormProps): React.ReactElement;

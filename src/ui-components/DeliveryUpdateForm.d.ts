/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Delivery } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DeliveryUpdateFormInputValues = {
    Nome?: string;
    PlanoAssinatura?: string;
    Responsavel?: string;
    Telefone?: string;
    Horario?: string;
    MinDeliveryTime?: number;
    MaxDeliveryTime?: number;
    Rating?: number;
    TaxaEntrega?: number;
    UrlFoto?: string;
    Endereco?: string;
    Latitude?: number;
    Longitude?: number;
    TokenADM?: string;
};
export declare type DeliveryUpdateFormValidationValues = {
    Nome?: ValidationFunction<string>;
    PlanoAssinatura?: ValidationFunction<string>;
    Responsavel?: ValidationFunction<string>;
    Telefone?: ValidationFunction<string>;
    Horario?: ValidationFunction<string>;
    MinDeliveryTime?: ValidationFunction<number>;
    MaxDeliveryTime?: ValidationFunction<number>;
    Rating?: ValidationFunction<number>;
    TaxaEntrega?: ValidationFunction<number>;
    UrlFoto?: ValidationFunction<string>;
    Endereco?: ValidationFunction<string>;
    Latitude?: ValidationFunction<number>;
    Longitude?: ValidationFunction<number>;
    TokenADM?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DeliveryUpdateFormOverridesProps = {
    DeliveryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Nome?: PrimitiveOverrideProps<TextFieldProps>;
    PlanoAssinatura?: PrimitiveOverrideProps<SelectFieldProps>;
    Responsavel?: PrimitiveOverrideProps<TextFieldProps>;
    Telefone?: PrimitiveOverrideProps<TextFieldProps>;
    Horario?: PrimitiveOverrideProps<TextFieldProps>;
    MinDeliveryTime?: PrimitiveOverrideProps<TextFieldProps>;
    MaxDeliveryTime?: PrimitiveOverrideProps<TextFieldProps>;
    Rating?: PrimitiveOverrideProps<TextFieldProps>;
    TaxaEntrega?: PrimitiveOverrideProps<TextFieldProps>;
    UrlFoto?: PrimitiveOverrideProps<TextFieldProps>;
    Endereco?: PrimitiveOverrideProps<TextFieldProps>;
    Latitude?: PrimitiveOverrideProps<TextFieldProps>;
    Longitude?: PrimitiveOverrideProps<TextFieldProps>;
    TokenADM?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DeliveryUpdateFormProps = React.PropsWithChildren<{
    overrides?: DeliveryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    delivery?: Delivery;
    onSubmit?: (fields: DeliveryUpdateFormInputValues) => DeliveryUpdateFormInputValues;
    onSuccess?: (fields: DeliveryUpdateFormInputValues) => void;
    onError?: (fields: DeliveryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DeliveryUpdateFormInputValues) => DeliveryUpdateFormInputValues;
    onValidate?: DeliveryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DeliveryUpdateForm(props: DeliveryUpdateFormProps): React.ReactElement;

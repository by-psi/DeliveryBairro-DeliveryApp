/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Produto } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ProdutoCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Nome: "",
    Descricao: "",
    VrUnitario: "",
    UrlFoto: "",
  };
  const [Nome, setNome] = React.useState(initialValues.Nome);
  const [Descricao, setDescricao] = React.useState(initialValues.Descricao);
  const [VrUnitario, setVrUnitario] = React.useState(initialValues.VrUnitario);
  const [UrlFoto, setUrlFoto] = React.useState(initialValues.UrlFoto);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNome(initialValues.Nome);
    setDescricao(initialValues.Descricao);
    setVrUnitario(initialValues.VrUnitario);
    setUrlFoto(initialValues.UrlFoto);
    setErrors({});
  };
  const validations = {
    Nome: [{ type: "Required" }],
    Descricao: [{ type: "Required" }],
    VrUnitario: [],
    UrlFoto: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Nome,
          Descricao,
          VrUnitario,
          UrlFoto,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Produto(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ProdutoCreateForm")}
      {...rest}
    >
      <TextField
        label="Nome"
        isRequired={true}
        isReadOnly={false}
        value={Nome}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nome: value,
              Descricao,
              VrUnitario,
              UrlFoto,
            };
            const result = onChange(modelFields);
            value = result?.Nome ?? value;
          }
          if (errors.Nome?.hasError) {
            runValidationTasks("Nome", value);
          }
          setNome(value);
        }}
        onBlur={() => runValidationTasks("Nome", Nome)}
        errorMessage={errors.Nome?.errorMessage}
        hasError={errors.Nome?.hasError}
        {...getOverrideProps(overrides, "Nome")}
      ></TextField>
      <TextField
        label="Descricao"
        isRequired={true}
        isReadOnly={false}
        value={Descricao}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nome,
              Descricao: value,
              VrUnitario,
              UrlFoto,
            };
            const result = onChange(modelFields);
            value = result?.Descricao ?? value;
          }
          if (errors.Descricao?.hasError) {
            runValidationTasks("Descricao", value);
          }
          setDescricao(value);
        }}
        onBlur={() => runValidationTasks("Descricao", Descricao)}
        errorMessage={errors.Descricao?.errorMessage}
        hasError={errors.Descricao?.hasError}
        {...getOverrideProps(overrides, "Descricao")}
      ></TextField>
      <TextField
        label="Vr unitario"
        isRequired={false}
        isReadOnly={false}
        value={VrUnitario}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nome,
              Descricao,
              VrUnitario: value,
              UrlFoto,
            };
            const result = onChange(modelFields);
            value = result?.VrUnitario ?? value;
          }
          if (errors.VrUnitario?.hasError) {
            runValidationTasks("VrUnitario", value);
          }
          setVrUnitario(value);
        }}
        onBlur={() => runValidationTasks("VrUnitario", VrUnitario)}
        errorMessage={errors.VrUnitario?.errorMessage}
        hasError={errors.VrUnitario?.hasError}
        {...getOverrideProps(overrides, "VrUnitario")}
      ></TextField>
      <TextField
        label="Url foto"
        isRequired={false}
        isReadOnly={false}
        value={UrlFoto}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nome,
              Descricao,
              VrUnitario,
              UrlFoto: value,
            };
            const result = onChange(modelFields);
            value = result?.UrlFoto ?? value;
          }
          if (errors.UrlFoto?.hasError) {
            runValidationTasks("UrlFoto", value);
          }
          setUrlFoto(value);
        }}
        onBlur={() => runValidationTasks("UrlFoto", UrlFoto)}
        errorMessage={errors.UrlFoto?.errorMessage}
        hasError={errors.UrlFoto?.hasError}
        {...getOverrideProps(overrides, "UrlFoto")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

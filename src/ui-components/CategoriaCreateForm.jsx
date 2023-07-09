/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Categoria } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CategoriaCreateForm(props) {
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
    Descricao: "",
    UrlFoto: "",
    Ordem: "",
  };
  const [Descricao, setDescricao] = React.useState(initialValues.Descricao);
  const [UrlFoto, setUrlFoto] = React.useState(initialValues.UrlFoto);
  const [Ordem, setOrdem] = React.useState(initialValues.Ordem);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setDescricao(initialValues.Descricao);
    setUrlFoto(initialValues.UrlFoto);
    setOrdem(initialValues.Ordem);
    setErrors({});
  };
  const validations = {
    Descricao: [{ type: "Required" }],
    UrlFoto: [],
    Ordem: [],
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
          Descricao,
          UrlFoto,
          Ordem,
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
          await DataStore.save(new Categoria(modelFields));
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
      {...getOverrideProps(overrides, "CategoriaCreateForm")}
      {...rest}
    >
      <TextField
        label="Descricao"
        isRequired={true}
        isReadOnly={false}
        value={Descricao}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Descricao: value,
              UrlFoto,
              Ordem,
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
        label="Url foto"
        isRequired={false}
        isReadOnly={false}
        value={UrlFoto}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Descricao,
              UrlFoto: value,
              Ordem,
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
      <TextField
        label="Ordem"
        isRequired={false}
        isReadOnly={false}
        value={Ordem}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Descricao,
              UrlFoto,
              Ordem: value,
            };
            const result = onChange(modelFields);
            value = result?.Ordem ?? value;
          }
          if (errors.Ordem?.hasError) {
            runValidationTasks("Ordem", value);
          }
          setOrdem(value);
        }}
        onBlur={() => runValidationTasks("Ordem", Ordem)}
        errorMessage={errors.Ordem?.errorMessage}
        hasError={errors.Ordem?.hasError}
        {...getOverrideProps(overrides, "Ordem")}
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

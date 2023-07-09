/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { User } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function UserCreateForm(props) {
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
    Sobrenome: "",
    UrlFoto: "",
    Token: "",
    Telefone: "",
    Endereco: "",
    Latitude: "",
    Longitude: "",
  };
  const [Nome, setNome] = React.useState(initialValues.Nome);
  const [Sobrenome, setSobrenome] = React.useState(initialValues.Sobrenome);
  const [UrlFoto, setUrlFoto] = React.useState(initialValues.UrlFoto);
  const [Token, setToken] = React.useState(initialValues.Token);
  const [Telefone, setTelefone] = React.useState(initialValues.Telefone);
  const [Endereco, setEndereco] = React.useState(initialValues.Endereco);
  const [Latitude, setLatitude] = React.useState(initialValues.Latitude);
  const [Longitude, setLongitude] = React.useState(initialValues.Longitude);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNome(initialValues.Nome);
    setSobrenome(initialValues.Sobrenome);
    setUrlFoto(initialValues.UrlFoto);
    setToken(initialValues.Token);
    setTelefone(initialValues.Telefone);
    setEndereco(initialValues.Endereco);
    setLatitude(initialValues.Latitude);
    setLongitude(initialValues.Longitude);
    setErrors({});
  };
  const validations = {
    Nome: [{ type: "Required" }],
    Sobrenome: [{ type: "Required" }],
    UrlFoto: [],
    Token: [],
    Telefone: [],
    Endereco: [],
    Latitude: [],
    Longitude: [],
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
          Sobrenome,
          UrlFoto,
          Token,
          Telefone,
          Endereco,
          Latitude,
          Longitude,
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
          await DataStore.save(new User(modelFields));
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
      {...getOverrideProps(overrides, "UserCreateForm")}
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
              Sobrenome,
              UrlFoto,
              Token,
              Telefone,
              Endereco,
              Latitude,
              Longitude,
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
        label="Sobrenome"
        isRequired={true}
        isReadOnly={false}
        value={Sobrenome}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nome,
              Sobrenome: value,
              UrlFoto,
              Token,
              Telefone,
              Endereco,
              Latitude,
              Longitude,
            };
            const result = onChange(modelFields);
            value = result?.Sobrenome ?? value;
          }
          if (errors.Sobrenome?.hasError) {
            runValidationTasks("Sobrenome", value);
          }
          setSobrenome(value);
        }}
        onBlur={() => runValidationTasks("Sobrenome", Sobrenome)}
        errorMessage={errors.Sobrenome?.errorMessage}
        hasError={errors.Sobrenome?.hasError}
        {...getOverrideProps(overrides, "Sobrenome")}
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
              Sobrenome,
              UrlFoto: value,
              Token,
              Telefone,
              Endereco,
              Latitude,
              Longitude,
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
        label="Token"
        isRequired={false}
        isReadOnly={false}
        value={Token}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nome,
              Sobrenome,
              UrlFoto,
              Token: value,
              Telefone,
              Endereco,
              Latitude,
              Longitude,
            };
            const result = onChange(modelFields);
            value = result?.Token ?? value;
          }
          if (errors.Token?.hasError) {
            runValidationTasks("Token", value);
          }
          setToken(value);
        }}
        onBlur={() => runValidationTasks("Token", Token)}
        errorMessage={errors.Token?.errorMessage}
        hasError={errors.Token?.hasError}
        {...getOverrideProps(overrides, "Token")}
      ></TextField>
      <TextField
        label="Telefone"
        isRequired={false}
        isReadOnly={false}
        value={Telefone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nome,
              Sobrenome,
              UrlFoto,
              Token,
              Telefone: value,
              Endereco,
              Latitude,
              Longitude,
            };
            const result = onChange(modelFields);
            value = result?.Telefone ?? value;
          }
          if (errors.Telefone?.hasError) {
            runValidationTasks("Telefone", value);
          }
          setTelefone(value);
        }}
        onBlur={() => runValidationTasks("Telefone", Telefone)}
        errorMessage={errors.Telefone?.errorMessage}
        hasError={errors.Telefone?.hasError}
        {...getOverrideProps(overrides, "Telefone")}
      ></TextField>
      <TextField
        label="Endereco"
        isRequired={false}
        isReadOnly={false}
        value={Endereco}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nome,
              Sobrenome,
              UrlFoto,
              Token,
              Telefone,
              Endereco: value,
              Latitude,
              Longitude,
            };
            const result = onChange(modelFields);
            value = result?.Endereco ?? value;
          }
          if (errors.Endereco?.hasError) {
            runValidationTasks("Endereco", value);
          }
          setEndereco(value);
        }}
        onBlur={() => runValidationTasks("Endereco", Endereco)}
        errorMessage={errors.Endereco?.errorMessage}
        hasError={errors.Endereco?.hasError}
        {...getOverrideProps(overrides, "Endereco")}
      ></TextField>
      <TextField
        label="Latitude"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Latitude}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Nome,
              Sobrenome,
              UrlFoto,
              Token,
              Telefone,
              Endereco,
              Latitude: value,
              Longitude,
            };
            const result = onChange(modelFields);
            value = result?.Latitude ?? value;
          }
          if (errors.Latitude?.hasError) {
            runValidationTasks("Latitude", value);
          }
          setLatitude(value);
        }}
        onBlur={() => runValidationTasks("Latitude", Latitude)}
        errorMessage={errors.Latitude?.errorMessage}
        hasError={errors.Latitude?.hasError}
        {...getOverrideProps(overrides, "Latitude")}
      ></TextField>
      <TextField
        label="Longitude"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Longitude}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Nome,
              Sobrenome,
              UrlFoto,
              Token,
              Telefone,
              Endereco,
              Latitude,
              Longitude: value,
            };
            const result = onChange(modelFields);
            value = result?.Longitude ?? value;
          }
          if (errors.Longitude?.hasError) {
            runValidationTasks("Longitude", value);
          }
          setLongitude(value);
        }}
        onBlur={() => runValidationTasks("Longitude", Longitude)}
        errorMessage={errors.Longitude?.errorMessage}
        hasError={errors.Longitude?.hasError}
        {...getOverrideProps(overrides, "Longitude")}
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

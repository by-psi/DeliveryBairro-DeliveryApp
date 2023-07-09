/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Courier } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CourierCreateForm(props) {
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
    Cpf: "",
    Telefone: "",
    Tipo: "",
    UrlFoto: "",
    TokenSMS: "",
    Latitude: "",
    Longitude: "",
  };
  const [Nome, setNome] = React.useState(initialValues.Nome);
  const [Cpf, setCpf] = React.useState(initialValues.Cpf);
  const [Telefone, setTelefone] = React.useState(initialValues.Telefone);
  const [Tipo, setTipo] = React.useState(initialValues.Tipo);
  const [UrlFoto, setUrlFoto] = React.useState(initialValues.UrlFoto);
  const [TokenSMS, setTokenSMS] = React.useState(initialValues.TokenSMS);
  const [Latitude, setLatitude] = React.useState(initialValues.Latitude);
  const [Longitude, setLongitude] = React.useState(initialValues.Longitude);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNome(initialValues.Nome);
    setCpf(initialValues.Cpf);
    setTelefone(initialValues.Telefone);
    setTipo(initialValues.Tipo);
    setUrlFoto(initialValues.UrlFoto);
    setTokenSMS(initialValues.TokenSMS);
    setLatitude(initialValues.Latitude);
    setLongitude(initialValues.Longitude);
    setErrors({});
  };
  const validations = {
    Nome: [{ type: "Required" }],
    Cpf: [{ type: "Required" }],
    Telefone: [{ type: "Required" }],
    Tipo: [{ type: "Required" }],
    UrlFoto: [],
    TokenSMS: [],
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
          Cpf,
          Telefone,
          Tipo,
          UrlFoto,
          TokenSMS,
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
          await DataStore.save(new Courier(modelFields));
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
      {...getOverrideProps(overrides, "CourierCreateForm")}
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
              Cpf,
              Telefone,
              Tipo,
              UrlFoto,
              TokenSMS,
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
        label="Cpf"
        isRequired={true}
        isReadOnly={false}
        value={Cpf}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nome,
              Cpf: value,
              Telefone,
              Tipo,
              UrlFoto,
              TokenSMS,
              Latitude,
              Longitude,
            };
            const result = onChange(modelFields);
            value = result?.Cpf ?? value;
          }
          if (errors.Cpf?.hasError) {
            runValidationTasks("Cpf", value);
          }
          setCpf(value);
        }}
        onBlur={() => runValidationTasks("Cpf", Cpf)}
        errorMessage={errors.Cpf?.errorMessage}
        hasError={errors.Cpf?.hasError}
        {...getOverrideProps(overrides, "Cpf")}
      ></TextField>
      <TextField
        label="Telefone"
        isRequired={true}
        isReadOnly={false}
        value={Telefone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nome,
              Cpf,
              Telefone: value,
              Tipo,
              UrlFoto,
              TokenSMS,
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
      <SelectField
        label="Tipo"
        placeholder="Please select an option"
        isDisabled={false}
        value={Tipo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nome,
              Cpf,
              Telefone,
              Tipo: value,
              UrlFoto,
              TokenSMS,
              Latitude,
              Longitude,
            };
            const result = onChange(modelFields);
            value = result?.Tipo ?? value;
          }
          if (errors.Tipo?.hasError) {
            runValidationTasks("Tipo", value);
          }
          setTipo(value);
        }}
        onBlur={() => runValidationTasks("Tipo", Tipo)}
        errorMessage={errors.Tipo?.errorMessage}
        hasError={errors.Tipo?.hasError}
        {...getOverrideProps(overrides, "Tipo")}
      >
        <option
          children="Driving"
          value="DRIVING"
          {...getOverrideProps(overrides, "Tipooption0")}
        ></option>
        <option
          children="Bicycling"
          value="BICYCLING"
          {...getOverrideProps(overrides, "Tipooption1")}
        ></option>
      </SelectField>
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
              Cpf,
              Telefone,
              Tipo,
              UrlFoto: value,
              TokenSMS,
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
        label="Token sms"
        isRequired={false}
        isReadOnly={false}
        value={TokenSMS}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nome,
              Cpf,
              Telefone,
              Tipo,
              UrlFoto,
              TokenSMS: value,
              Latitude,
              Longitude,
            };
            const result = onChange(modelFields);
            value = result?.TokenSMS ?? value;
          }
          if (errors.TokenSMS?.hasError) {
            runValidationTasks("TokenSMS", value);
          }
          setTokenSMS(value);
        }}
        onBlur={() => runValidationTasks("TokenSMS", TokenSMS)}
        errorMessage={errors.TokenSMS?.errorMessage}
        hasError={errors.TokenSMS?.hasError}
        {...getOverrideProps(overrides, "TokenSMS")}
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
              Cpf,
              Telefone,
              Tipo,
              UrlFoto,
              TokenSMS,
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
              Cpf,
              Telefone,
              Tipo,
              UrlFoto,
              TokenSMS,
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

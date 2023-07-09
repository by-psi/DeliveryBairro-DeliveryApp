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
import { Delivery } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function DeliveryUpdateForm(props) {
  const {
    id: idProp,
    delivery: deliveryModelProp,
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
    PlanoAssinatura: "",
    Responsavel: "",
    Telefone: "",
    Horario: "",
    MinDeliveryTime: "",
    MaxDeliveryTime: "",
    Rating: "",
    TaxaEntrega: "",
    UrlFoto: "",
    Endereco: "",
    Latitude: "",
    Longitude: "",
    TokenADM: "",
  };
  const [Nome, setNome] = React.useState(initialValues.Nome);
  const [PlanoAssinatura, setPlanoAssinatura] = React.useState(
    initialValues.PlanoAssinatura
  );
  const [Responsavel, setResponsavel] = React.useState(
    initialValues.Responsavel
  );
  const [Telefone, setTelefone] = React.useState(initialValues.Telefone);
  const [Horario, setHorario] = React.useState(initialValues.Horario);
  const [MinDeliveryTime, setMinDeliveryTime] = React.useState(
    initialValues.MinDeliveryTime
  );
  const [MaxDeliveryTime, setMaxDeliveryTime] = React.useState(
    initialValues.MaxDeliveryTime
  );
  const [Rating, setRating] = React.useState(initialValues.Rating);
  const [TaxaEntrega, setTaxaEntrega] = React.useState(
    initialValues.TaxaEntrega
  );
  const [UrlFoto, setUrlFoto] = React.useState(initialValues.UrlFoto);
  const [Endereco, setEndereco] = React.useState(initialValues.Endereco);
  const [Latitude, setLatitude] = React.useState(initialValues.Latitude);
  const [Longitude, setLongitude] = React.useState(initialValues.Longitude);
  const [TokenADM, setTokenADM] = React.useState(initialValues.TokenADM);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = deliveryRecord
      ? { ...initialValues, ...deliveryRecord }
      : initialValues;
    setNome(cleanValues.Nome);
    setPlanoAssinatura(cleanValues.PlanoAssinatura);
    setResponsavel(cleanValues.Responsavel);
    setTelefone(cleanValues.Telefone);
    setHorario(cleanValues.Horario);
    setMinDeliveryTime(cleanValues.MinDeliveryTime);
    setMaxDeliveryTime(cleanValues.MaxDeliveryTime);
    setRating(cleanValues.Rating);
    setTaxaEntrega(cleanValues.TaxaEntrega);
    setUrlFoto(cleanValues.UrlFoto);
    setEndereco(cleanValues.Endereco);
    setLatitude(cleanValues.Latitude);
    setLongitude(cleanValues.Longitude);
    setTokenADM(cleanValues.TokenADM);
    setErrors({});
  };
  const [deliveryRecord, setDeliveryRecord] = React.useState(deliveryModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Delivery, idProp)
        : deliveryModelProp;
      setDeliveryRecord(record);
    };
    queryData();
  }, [idProp, deliveryModelProp]);
  React.useEffect(resetStateValues, [deliveryRecord]);
  const validations = {
    Nome: [{ type: "Required" }],
    PlanoAssinatura: [{ type: "Required" }],
    Responsavel: [],
    Telefone: [],
    Horario: [],
    MinDeliveryTime: [],
    MaxDeliveryTime: [],
    Rating: [],
    TaxaEntrega: [],
    UrlFoto: [],
    Endereco: [],
    Latitude: [],
    Longitude: [],
    TokenADM: [],
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
          PlanoAssinatura,
          Responsavel,
          Telefone,
          Horario,
          MinDeliveryTime,
          MaxDeliveryTime,
          Rating,
          TaxaEntrega,
          UrlFoto,
          Endereco,
          Latitude,
          Longitude,
          TokenADM,
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
          await DataStore.save(
            Delivery.copyOf(deliveryRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "DeliveryUpdateForm")}
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
              PlanoAssinatura,
              Responsavel,
              Telefone,
              Horario,
              MinDeliveryTime,
              MaxDeliveryTime,
              Rating,
              TaxaEntrega,
              UrlFoto,
              Endereco,
              Latitude,
              Longitude,
              TokenADM,
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
      <SelectField
        label="Plano assinatura"
        placeholder="Please select an option"
        isDisabled={false}
        value={PlanoAssinatura}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nome,
              PlanoAssinatura: value,
              Responsavel,
              Telefone,
              Horario,
              MinDeliveryTime,
              MaxDeliveryTime,
              Rating,
              TaxaEntrega,
              UrlFoto,
              Endereco,
              Latitude,
              Longitude,
              TokenADM,
            };
            const result = onChange(modelFields);
            value = result?.PlanoAssinatura ?? value;
          }
          if (errors.PlanoAssinatura?.hasError) {
            runValidationTasks("PlanoAssinatura", value);
          }
          setPlanoAssinatura(value);
        }}
        onBlur={() => runValidationTasks("PlanoAssinatura", PlanoAssinatura)}
        errorMessage={errors.PlanoAssinatura?.errorMessage}
        hasError={errors.PlanoAssinatura?.hasError}
        {...getOverrideProps(overrides, "PlanoAssinatura")}
      >
        <option
          children="Free"
          value="FREE"
          {...getOverrideProps(overrides, "PlanoAssinaturaoption0")}
        ></option>
        <option
          children="Basic"
          value="BASIC"
          {...getOverrideProps(overrides, "PlanoAssinaturaoption1")}
        ></option>
        <option
          children="Pro"
          value="PRO"
          {...getOverrideProps(overrides, "PlanoAssinaturaoption2")}
        ></option>
        <option
          children="Premium"
          value="PREMIUM"
          {...getOverrideProps(overrides, "PlanoAssinaturaoption3")}
        ></option>
      </SelectField>
      <TextField
        label="Responsavel"
        isRequired={false}
        isReadOnly={false}
        value={Responsavel}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nome,
              PlanoAssinatura,
              Responsavel: value,
              Telefone,
              Horario,
              MinDeliveryTime,
              MaxDeliveryTime,
              Rating,
              TaxaEntrega,
              UrlFoto,
              Endereco,
              Latitude,
              Longitude,
              TokenADM,
            };
            const result = onChange(modelFields);
            value = result?.Responsavel ?? value;
          }
          if (errors.Responsavel?.hasError) {
            runValidationTasks("Responsavel", value);
          }
          setResponsavel(value);
        }}
        onBlur={() => runValidationTasks("Responsavel", Responsavel)}
        errorMessage={errors.Responsavel?.errorMessage}
        hasError={errors.Responsavel?.hasError}
        {...getOverrideProps(overrides, "Responsavel")}
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
              PlanoAssinatura,
              Responsavel,
              Telefone: value,
              Horario,
              MinDeliveryTime,
              MaxDeliveryTime,
              Rating,
              TaxaEntrega,
              UrlFoto,
              Endereco,
              Latitude,
              Longitude,
              TokenADM,
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
        label="Horario"
        isRequired={false}
        isReadOnly={false}
        value={Horario}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nome,
              PlanoAssinatura,
              Responsavel,
              Telefone,
              Horario: value,
              MinDeliveryTime,
              MaxDeliveryTime,
              Rating,
              TaxaEntrega,
              UrlFoto,
              Endereco,
              Latitude,
              Longitude,
              TokenADM,
            };
            const result = onChange(modelFields);
            value = result?.Horario ?? value;
          }
          if (errors.Horario?.hasError) {
            runValidationTasks("Horario", value);
          }
          setHorario(value);
        }}
        onBlur={() => runValidationTasks("Horario", Horario)}
        errorMessage={errors.Horario?.errorMessage}
        hasError={errors.Horario?.hasError}
        {...getOverrideProps(overrides, "Horario")}
      ></TextField>
      <TextField
        label="Min delivery time"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={MinDeliveryTime}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              Nome,
              PlanoAssinatura,
              Responsavel,
              Telefone,
              Horario,
              MinDeliveryTime: value,
              MaxDeliveryTime,
              Rating,
              TaxaEntrega,
              UrlFoto,
              Endereco,
              Latitude,
              Longitude,
              TokenADM,
            };
            const result = onChange(modelFields);
            value = result?.MinDeliveryTime ?? value;
          }
          if (errors.MinDeliveryTime?.hasError) {
            runValidationTasks("MinDeliveryTime", value);
          }
          setMinDeliveryTime(value);
        }}
        onBlur={() => runValidationTasks("MinDeliveryTime", MinDeliveryTime)}
        errorMessage={errors.MinDeliveryTime?.errorMessage}
        hasError={errors.MinDeliveryTime?.hasError}
        {...getOverrideProps(overrides, "MinDeliveryTime")}
      ></TextField>
      <TextField
        label="Max delivery time"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={MaxDeliveryTime}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              Nome,
              PlanoAssinatura,
              Responsavel,
              Telefone,
              Horario,
              MinDeliveryTime,
              MaxDeliveryTime: value,
              Rating,
              TaxaEntrega,
              UrlFoto,
              Endereco,
              Latitude,
              Longitude,
              TokenADM,
            };
            const result = onChange(modelFields);
            value = result?.MaxDeliveryTime ?? value;
          }
          if (errors.MaxDeliveryTime?.hasError) {
            runValidationTasks("MaxDeliveryTime", value);
          }
          setMaxDeliveryTime(value);
        }}
        onBlur={() => runValidationTasks("MaxDeliveryTime", MaxDeliveryTime)}
        errorMessage={errors.MaxDeliveryTime?.errorMessage}
        hasError={errors.MaxDeliveryTime?.hasError}
        {...getOverrideProps(overrides, "MaxDeliveryTime")}
      ></TextField>
      <TextField
        label="Rating"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Rating}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Nome,
              PlanoAssinatura,
              Responsavel,
              Telefone,
              Horario,
              MinDeliveryTime,
              MaxDeliveryTime,
              Rating: value,
              TaxaEntrega,
              UrlFoto,
              Endereco,
              Latitude,
              Longitude,
              TokenADM,
            };
            const result = onChange(modelFields);
            value = result?.Rating ?? value;
          }
          if (errors.Rating?.hasError) {
            runValidationTasks("Rating", value);
          }
          setRating(value);
        }}
        onBlur={() => runValidationTasks("Rating", Rating)}
        errorMessage={errors.Rating?.errorMessage}
        hasError={errors.Rating?.hasError}
        {...getOverrideProps(overrides, "Rating")}
      ></TextField>
      <TextField
        label="Taxa entrega"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={TaxaEntrega}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Nome,
              PlanoAssinatura,
              Responsavel,
              Telefone,
              Horario,
              MinDeliveryTime,
              MaxDeliveryTime,
              Rating,
              TaxaEntrega: value,
              UrlFoto,
              Endereco,
              Latitude,
              Longitude,
              TokenADM,
            };
            const result = onChange(modelFields);
            value = result?.TaxaEntrega ?? value;
          }
          if (errors.TaxaEntrega?.hasError) {
            runValidationTasks("TaxaEntrega", value);
          }
          setTaxaEntrega(value);
        }}
        onBlur={() => runValidationTasks("TaxaEntrega", TaxaEntrega)}
        errorMessage={errors.TaxaEntrega?.errorMessage}
        hasError={errors.TaxaEntrega?.hasError}
        {...getOverrideProps(overrides, "TaxaEntrega")}
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
              PlanoAssinatura,
              Responsavel,
              Telefone,
              Horario,
              MinDeliveryTime,
              MaxDeliveryTime,
              Rating,
              TaxaEntrega,
              UrlFoto: value,
              Endereco,
              Latitude,
              Longitude,
              TokenADM,
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
        label="Endereco"
        isRequired={false}
        isReadOnly={false}
        value={Endereco}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nome,
              PlanoAssinatura,
              Responsavel,
              Telefone,
              Horario,
              MinDeliveryTime,
              MaxDeliveryTime,
              Rating,
              TaxaEntrega,
              UrlFoto,
              Endereco: value,
              Latitude,
              Longitude,
              TokenADM,
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
              PlanoAssinatura,
              Responsavel,
              Telefone,
              Horario,
              MinDeliveryTime,
              MaxDeliveryTime,
              Rating,
              TaxaEntrega,
              UrlFoto,
              Endereco,
              Latitude: value,
              Longitude,
              TokenADM,
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
              PlanoAssinatura,
              Responsavel,
              Telefone,
              Horario,
              MinDeliveryTime,
              MaxDeliveryTime,
              Rating,
              TaxaEntrega,
              UrlFoto,
              Endereco,
              Latitude,
              Longitude: value,
              TokenADM,
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
      <TextField
        label="Token adm"
        isRequired={false}
        isReadOnly={false}
        value={TokenADM}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Nome,
              PlanoAssinatura,
              Responsavel,
              Telefone,
              Horario,
              MinDeliveryTime,
              MaxDeliveryTime,
              Rating,
              TaxaEntrega,
              UrlFoto,
              Endereco,
              Latitude,
              Longitude,
              TokenADM: value,
            };
            const result = onChange(modelFields);
            value = result?.TokenADM ?? value;
          }
          if (errors.TokenADM?.hasError) {
            runValidationTasks("TokenADM", value);
          }
          setTokenADM(value);
        }}
        onBlur={() => runValidationTasks("TokenADM", TokenADM)}
        errorMessage={errors.TokenADM?.errorMessage}
        hasError={errors.TokenADM?.hasError}
        {...getOverrideProps(overrides, "TokenADM")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || deliveryModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || deliveryModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

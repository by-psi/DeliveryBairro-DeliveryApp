import { useContext } from "react";
import { Form, Input, Button, Card, InputNumber, message } from "antd";
import { useNavigate } from "react-router-dom";
import { DeliveryContext } from "../../contexts/DeliveryContext";
import { DataStore } from "aws-amplify";
import { Produto } from "../../models";

const { TextArea } = Input;

const CreateMenuItem = () => {
  const { delivery } = useContext(DeliveryContext);
  const navigation = useNavigate();

  async function onFinish({ nome, descricao, vrunitario, urlfoto }) {
    await DataStore.save(
      new Produto({
        "Nome": nome,
        "Descricao": descricao,
        "VrUnitario": vrunitario,
        "UrlFoto": urlfoto,
        "deliveryID": delivery.id,
      })
    );
    message.success("Produto foi adicionado");
    navigation("/menu");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Card title="Novo Item do Cardápio" style={{ margin: 20 }}>
      <Form
        layout="vertical"
        wrapperCol={{ span: 8 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Nome do Produto"
          name="name"
          rules={[{ required: true }]}
          required
        >
          <Input placeholder="Digite o nome do produto" />
        </Form.Item>
        <Form.Item
          label="Descrição do Produto"
          name="description"
          rules={[{ required: true }]}
          required
        >
          <TextArea rows={4} placeholder="Digite a descrição do produto" />
        </Form.Item>
        <Form.Item
          label="Preço Unitário R$"
          name="price"
          rules={[{ required: true }]}
          required
        >
          <InputNumber />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            ENVIAR
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default CreateMenuItem;

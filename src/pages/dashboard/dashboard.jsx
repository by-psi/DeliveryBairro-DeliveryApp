import "@aws-amplify/ui-react/styles.css";
import { Layout, Image } from "antd";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";

import SideMenu from "../../components/SideMenu";
import AppRoutes from "../../components/AppRoutes";
import DeliveryContextProvider from "../../contexts/DeliveryContext";
import awsconfig from "../../aws-exports";
import logomarca from "../../assets/logomarca.png";
Amplify.configure(awsconfig);

const { Sider, Content, Footer } = Layout;

function App() {
  return (
    <DeliveryContextProvider>
      <Layout>
        <Sider style={{ height: "100vh", backgroundColor: "white" }}>
          <Image
            src={logomarca} 
            preview={false}
          />
          <SideMenu />
        </Sider>
        <Layout>
          <Content>
            <AppRoutes />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            DeliveryBairro - Delivery App (dashboard) ©2023
          </Footer>
        </Layout>
      </Layout>
    </DeliveryContextProvider>
  );
}

export default withAuthenticator(App);

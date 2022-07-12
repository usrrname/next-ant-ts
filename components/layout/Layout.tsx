import { Layout as AntLayout, LayoutProps } from "antd";
import { Footer } from "../footer/Footer";

const { Header, Content } = AntLayout;

const Layout = ({ children }: LayoutProps) => {
  return (
    <AntLayout>
      <Header></Header>
      <Content>{children}</Content>
      <Footer />
    </AntLayout>
  );
};

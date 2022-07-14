import { Layout as AntLayout, LayoutProps, Row } from "antd";
import { Footer } from "../footer/Footer";

const { Content } = AntLayout;

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <AntLayout>
        <Content>{children}</Content>
        <Footer />
      </AntLayout>
    </>
  );
};

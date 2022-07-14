import { Layout as AntLayout, LayoutProps } from "antd";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
const { Content } = AntLayout;
import styles from "./Layout.module.css";
export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <AntLayout className={styles.layout}>
        <Content>{children}</Content>
        <Footer />
      </AntLayout>
    </>
  );
};

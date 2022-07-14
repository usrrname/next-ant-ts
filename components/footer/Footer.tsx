import { Layout } from "antd";
import Link from "next/link";
import React, { FC } from "react";
import { LinkButton } from "../button/Button";
import styles from "./footer.module.css";

type FooterProps = {
  children?: React.ReactNode;
};

export const Footer: FC<FooterProps> = () => {
  const { Footer } = Layout;
  return (
    <Footer className={styles.footer}>
      <Link href="terms" passHref>
        <LinkButton type="link" href="terms" role={"link"}>
          Terms of Use
        </LinkButton>
      </Link>
      <Link href="privacy" passHref>
        <LinkButton type="link" href="privacy" role={"link"}>
          Privacy Policy
        </LinkButton>
      </Link>
      <Link href="sitemap" role="a" passHref>
        <LinkButton type="link" href="sitemap" role={"link"}>
          Sitemap
        </LinkButton>
      </Link>
    </Footer>
  );
};

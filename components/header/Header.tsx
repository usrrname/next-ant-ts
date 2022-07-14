import { Button, LinkButton } from "..";
import styles from "./header.module.css";
import { PageHeader, PageHeaderProps } from "antd";

export const Header = ({
  title,
  subTitle,
  backIcon,
  ...props
}: PageHeaderProps) => {
  return (
    <PageHeader
      className={styles.header}
      title={title}
      subTitle={subTitle}
      {...props}
    >
      <LinkButton type="link" href="about" role={"link"}>
        About
      </LinkButton>
      <LinkButton type="link" href="#" role={"link"}>
        Link 1
      </LinkButton>
      <LinkButton type="link" href="#" role={"link"}>
        Link 2
      </LinkButton>
    </PageHeader>
  );
};

import Layout from "antd/lib/layout/layout";
import { LinkButton } from "..";

export const Header = () => {
  const Header = Layout;
  return (
    <Header>
      <LinkButton type="link" href="about" role={"link"}>
        About
      </LinkButton>
      <LinkButton type="link" href="#" role={"link"}>
        Link 1
      </LinkButton>
      <LinkButton type="link" href="#" role={"link"}>
        Link 2
      </LinkButton>
    </Header>
  );
};

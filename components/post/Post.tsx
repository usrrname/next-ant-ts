import { MDXProvider } from "@mdx-js/react";
import Image, { ImageProps } from "next/image";
import { Typography, Divider } from "antd";
import { TypographyProps } from "antd/lib/typography/Typography";
import { Components } from "@mdx-js/react/lib";
import { LinkButton } from "../button/Button";

const ResponsiveImage = (props: ImageProps) => (
  <Image alt={props.alt} layout="responsive" {...props} />
);

const { Text, Title } = Typography;

const Title1 = (props: TypographyProps) => <Title level={1} {...props} />;
const Title2 = (props: TypographyProps) => <Title level={2} {...props} />;
const Title3 = (props: TypographyProps) => <Title level={3} {...props} />;
const Title4 = (props: TypographyProps) => <Title level={4} {...props} />;
const Title5 = (props: TypographyProps) => <Title level={5} {...props} />;
const Code = ({ children }: TypographyProps) => <Text code>{children}</Text>;

const components = {
  img: ResponsiveImage,
  h1: Title1,
  h2: Title2,
  h3: Title3,
  h4: Title4,
  h5: Title5,
  hr: Divider,
  a: LinkButton,
  p: Text,
  pre: Code,
  code: Code,
};

export default function Post(props: any) {
  console.log(props);
  return (
    <MDXProvider components={components as Components}>
      <main {...props} />
    </MDXProvider>
  );
}

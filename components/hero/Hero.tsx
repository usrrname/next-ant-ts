import { Card } from "antd";
import { CardMetaProps } from "antd/lib/card";
import Typography from "antd/lib/typography";
import styles from "./Hero.module.css";
type HeroProps = {
  subtitle?: string;
  backgroundImage?: string;
} & CardMetaProps;

export const Hero = ({
  title,
  subtitle,
  description,
  backgroundImage,
}: HeroProps) => {
  const { Title, Text, Paragraph } = Typography;
  return (
    <Card className={styles.Hero} bordered={false}>
      {title && <Card.Meta title={title} />}
      {subtitle && <Title level={4}>{subtitle}</Title>}

      {description && (
        <Paragraph>
          <Text>{description}</Text>
        </Paragraph>
      )}
    </Card>
  );
};

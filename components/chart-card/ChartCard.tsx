import { Button, Card, Progress, Space, Typography } from "antd";
import { FC } from "react";
import styles from "./ChartCard.module.css";

type ChartCardProps = {
  percent: number;
  title?: string;
  description?: string;
  onClick?: () => void;
};

export const ChartCard: FC<ChartCardProps> = ({
  percent,
  title,
  description,
}) => {
  const { Text } = Typography;
  return (
    <>
      <Card title={title ?? null} bordered={false} className={styles.chartCard}>
        <Space size="middle" direction="horizontal">
          <Progress type="circle" percent={percent} width={80} />
          <Space size="small" direction="vertical">
            <Text>{description}</Text>
            <Button
              type="link"
              onClick={() => {}}
              style={{ display: "block", paddingLeft: 0 }}
            >
              View Details
            </Button>
          </Space>
        </Space>
      </Card>
    </>
  );
};

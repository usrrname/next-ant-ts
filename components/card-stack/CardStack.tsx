import { ArrowRightOutlined } from "@ant-design/icons";
import { Card, Progress, Space, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

import React from "react";
import styles from "./CardStack.module.css";
type CardStackProps = {
  name?: string;
  children?: React.ReactNode;
};

export const CardStack: React.FC<CardStackProps> = ({
  name,
  children,
  ...props
}) => {
  const { Text } = Typography;

  return (
    <Card title="Card title" className={styles.CardStack}>
      <div className={styles.CardStack__wrapper}>
        <Avatar
          shape="square"
          size={64}
          src=""
          alt="portrait"
          icon={<UserOutlined />}
        />

        {name && <Text>{name}</Text>}
        <Progress strokeLinecap="butt" type="line" percent={75} />
      </div>
    </Card>
  );
};

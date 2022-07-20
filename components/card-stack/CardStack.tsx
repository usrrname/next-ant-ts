import { RightOutlined } from "@ant-design/icons";
import { Card, Progress, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

import React from "react";
import styles from "./CardStack.module.css";
import { LinkButton } from "../button/Button";
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

  //TODO: add skeleton or loading indicator

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

        {name && <Text style={{ fontSize: "1.7rem" }}>{name}</Text>}
        <Progress strokeLinecap="butt" type="line" percent={75} />

        <LinkButton type="text" href="#" target="_blank" role="link">
          <RightOutlined />
        </LinkButton>
      </div>
    </Card>
  );
};

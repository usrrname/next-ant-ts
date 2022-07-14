import { RadarChartOutlined } from "@ant-design/icons";
import { Row, Card } from "antd";
import Title from "antd/lib/typography/Title";
import styles from "./CardRow.module.css";

export const CardRow = () => {
  return (
    <div className={styles.Row}>
      <Card bordered={false}>
        <Card.Meta
          title={<Title level={5}>Sed ut perspiciatis unde omnis</Title>}
          avatar={<RadarChartOutlined size={24} />}
        />
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </Card>

      <Card bordered={false}>
        <Card.Meta
          title={<Title level={5}>Consectetur Adipiscing Elit</Title>}
          avatar={<RadarChartOutlined size={24} />}
        />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </Card>

      <Card bordered={false}>
        <Card.Meta
          title={<Title level={5}>Voluptate Velit</Title>}
          avatar={<RadarChartOutlined size={24} />}
        />
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.
      </Card>
    </div>
  );
};

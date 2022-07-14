import { Typography, Col } from "antd";
import type { NextPage } from "next";
import { Hero, Layout } from "../components";
import { CardRow } from "../components/card-row/CardRow";

const Home: NextPage = () => {
  const { Paragraph, Text } = Typography;
  return (
    <>
      <Layout>
        <Col xs={24} xl={8}>
          <Hero
            title="Title"
            subtitle="Subtitle"
            description="With Next.js 12, we introduced minification using SWC as part of the Next.js Compiler. Early results showed it was 7x faster than Terser. Minification with SWC is now in Release Candidate (RC) with 12.1 and will become the default in 12.2. powerful AI-driven solution that uses machine learning to make it easier to build and deploy your next.js application."
          />
          <CardRow />
        </Col>
      </Layout>
    </>
  );
};

export default Home;

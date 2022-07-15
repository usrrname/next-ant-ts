import { Typography, Col, Progress } from "antd";
import { Page } from "../additional";
import { Hero, Layout } from "../components";
import { CardRow } from "../components/card-row/CardRow";
import { ChartCard } from "../components/chart-card/ChartCard";
import UploadWithCrop from "../components/uploader/Uploader";
import { useUser } from "../hooks/useUser";

const Home: Page = ({ props }: any) => {
  const { data, isError, isLoading } = useUser(
    "https://randomuser.me/api/?results"
  );
  if (isError) console.warn("An error has occurred.");
  if (isLoading || !data) {
    return <Progress status="active" />;
  }
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
      <UploadWithCrop />
      <ChartCard
        description="Ant Design, a design language for background applications, is refined by Ant UED Team."
        percent={75}
        title="Comparison Measure"
      />
    </>
  );
};

export default Home;

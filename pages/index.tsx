import { LoadingOutlined } from "@ant-design/icons";
import { Col, Space } from "antd";
import { GetServerSideProps } from "next";
import { FC } from "react";
import { Page } from "../additional";
import {
  CardStack,
  Hero,
  Layout,
  CardRow,
  ChartCard,
  Uploader,
} from "../components";
import { parse } from "next-useragent";

// grabs initial token from remote api and hydrates page with it
// actually happens on server side
export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { req } = context;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control":
        process.env.NODE_ENV === "development"
          ? "no-store, max-age=0"
          : "public, max-age=31536000, must-revalidate",
    },
  });

  const token1 = await res.json();
  console.log("/token response: ", token1);

  return {
    props: {
      token1,
      userAgent: parse(context.req.headers["user-agent"]),
    },
  };
};

export const handleSubmit = async (token: string, dataString: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/token1`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      action: "POST",
    },
    body: JSON.stringify({
      token: token,
      data: dataString,
    }),
  });
  const data = await response.json();
  console.log("/token1 response: ", data);
};

const Page: FC<Page> = ({ ...props }) => {
  const data = { ...props };
  const { token1 } = data;
  console.log("token1 fetched from 8000/: ", token1);

  if (!data.hasOwnProperty("token1")) {
    return (
      <Space direction="vertical">
        <LoadingOutlined /> Loading...
      </Space>
    );
  } else {
    handleSubmit(token1, "dummy-string");
  }

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
        <Uploader />
        <ChartCard
          description="Ant Design, a design language for background applications, is refined by Ant UED Team."
          percent={75}
          title="Comparison Measure"
        />
        <CardStack />
      </Layout>
    </>
  );
};

export default Page;

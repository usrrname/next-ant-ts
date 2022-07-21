import { useRouter } from "next/router";
import { PostProps } from "../../typings";
import ErrorPage from "next/error";
import { getPostBySlug, getAllPosts } from "../../util/api";
import { HeroPost } from "../../components";
import Head from "next/head";
import { LoadingOutlined } from "@ant-design/icons";
import { Layout, Typography } from "antd";
import markdownToHtml from "../../util/markdownToHtml";
import SEO from "../../components/seo/seo";
import { Content } from "antd/lib/layout/layout";

export default function Slug({ post, allPosts }: PostProps) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  const { Text, Paragraph } = Typography;
  return (
    <Layout>
      {router.isFallback ? (
        <>
          <LoadingOutlined /> <Text>Loading…</Text>
        </>
      ) : (
        <>
          <Head>
            <SEO title={post.title} />
            <meta property="og:image" content={post?.ogImage?.url} />
          </Head>
          <Content>
            <HeroPost
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
              ogImage={{
                url: post?.ogImage?.url ?? "",
              }}
              content={post.content}
            />
          </Content>
        </>
      )}
    </Layout>
  );
}

type PostParams = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: PostParams) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

import ErrorPage from "next/error";
import { MDXProvider } from "@mdx-js/react";
import { HeroPost, MarkdownComponents } from "../../components";
import { useRouter } from "next/router";
import { Components } from "@mdx-js/react/lib";
import markdownToHtml from "../../util/markdownToHtml";
import { getPostBySlug, getAllPosts } from "../../util/slug.util";

export default function Post({ post, allPosts }: any) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <MDXProvider components={MarkdownComponents as Components}>
      <HeroPost
        slug={post.slug}
        title={post.title}
        date={post.date}
        coverImage={post.coverImage}
        author={post.author}
        excerpt={post.excerpt}
        ogImage={{
          url: "",
        }}
        content={""}
      />
    </MDXProvider>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
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

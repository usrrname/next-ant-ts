import { MDXProvider } from "@mdx-js/react";
import { Components } from "@mdx-js/react/lib";
import { useState } from "react";
import { PostType } from "../../additional";
import { HeroPost, Layout, MarkdownComponents } from "..";
import { getAllPosts } from "../../util/slug.util";

type PostProps = {
  post: PostType;
  allPosts: PostType[];
};

export default function PostLayout({ post, allPosts }: PostProps) {
  const [currentPost, setCurrentPost] = useState<PostType | undefined>(post);

  return (
    <>
      <Layout>
        <MDXProvider components={MarkdownComponents as Components}>
          {allPosts.map((post: PostType, index) => (
            <HeroPost
              key={index}
              title={post.title}
              slug={post.slug}
              coverImage={post.coverImage}
              content={post.content}
              date={post.date}
              author={post.author}
              excerpt={post.excerpt}
              ogImage={{
                url: "",
              }}
            />
          ))}
        </MDXProvider>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};

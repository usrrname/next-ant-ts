import { Components } from "@mdx-js/react/lib";
import { PostType } from "../../typings";
import Post, { MarkdownComponents, ResponsiveImage } from "./Post";

export const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  content,
  slug,
  ...props
}: PostType) => {
  return (
    <>
      {coverImage && (
        <ResponsiveImage
          title={title}
          src={coverImage ?? ""}
          alt=""
          width="100%"
          height="373"
        />
      )}
      {excerpt && <MarkdownComponents.p>{excerpt}</MarkdownComponents.p>}
      {content && <div dangerouslySetInnerHTML={{ __html: content }} />}

      {/* TODO: Get MDXProvider working with MarkdownComponents
        <Post
        components={MarkdownComponents as Components}
        slug={slug}
        {...props}
      /> */}
    </>
  );
};

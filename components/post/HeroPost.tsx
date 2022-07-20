import Paragraph from "antd/lib/skeleton/Paragraph";
import Link from "next/link";
import { PostType } from "../../additional";
import { MarkdownComponents, ResponsiveImage } from "./Post";

export const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  content,
  slug,
}: PostType) => {
  return (
    <section>
      <ResponsiveImage title={title} src={coverImage} alt="" />

      <div className="">
        <div>
          <MarkdownComponents.h3>
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </MarkdownComponents.h3>
        </div>
        <div>
          <Paragraph>{excerpt}</Paragraph>
        </div>
      </div>
    </section>
  );
};

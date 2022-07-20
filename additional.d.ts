import { NextPage } from "next";
import { ComponentType, ReactElement, ReactNode } from "react";

export type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode;
  layout?: ComponentType;
};

export type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: string;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
};

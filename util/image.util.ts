import { ImageProps } from "next/image";

export const customLoader = ({ src, width, quality }: Partial<ImageProps>) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

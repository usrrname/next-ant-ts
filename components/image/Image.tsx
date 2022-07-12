import Image from "next/image";
import { ImageProps as NextImageProps } from "next/image";
import { FC } from "react";

type ImageProps = NextImageProps;

const customLoader = ({ src, width, quality }: Partial<ImageProps>) => {
  return `https://${src}?w=${width}&q=${quality || 75}`;
};

export const Img: FC<ImageProps> = ({ width, height, alt, ...props }) => {
  return (
    <Image
      loader={customLoader}
      src={props.src}
      alt={alt}
      width={width}
      height={height ?? "auto"}
    />
  );
};

import Head from "next/head";
import config from "../../config";
import PostType from "../../typings.d";
export default function SEO({ config }: any): JSX.Element {
  if (config) {
    const { title, description, siteTitle } = config as any;
  }
  if (typeof config === PostType) {
    const { title, excerpt, content } = config as any;
  }

  return (
    <Head>
      <title>{`${config?.title} | ${config?.siteTitle}`}</title>
      <meta name="viewport" content="width=device-width" />
      <meta
        name="description"
        content={config?.description || config?.excerpt}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={config?.title} />
      <meta
        property="og:description"
        content={config?.description || config?.excerpt}
      />
      {config?.siteTitle && (
        <meta property="og:site_name" content={config?.siteTitle} />
      )}
      <meta property="twitter:card" content={config?.excerpt} />
      <meta property="twitter:creator" content={config?.social?.twitter} />
      <meta property="twitter:title" content={config?.title} />
      <meta
        property="twitter:description"
        content={config?.description || config?.excerpt}
      />
    </Head>
  );
}

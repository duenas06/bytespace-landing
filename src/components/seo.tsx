import Head from "next/head";

const SITE_NAME = "ByteSpace";
const DEFAULT_DESCRIPTION =
  "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.";

type SeoProps = {
  title?: string;
  description?: string;
};

export function Seo({ title, description = DEFAULT_DESCRIPTION }: SeoProps) {
  const pageTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} — Get Access to Hundreds Courses Available`;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Head>
  );
}

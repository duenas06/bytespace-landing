import createEmotionServer from "@emotion/server/create-instance";
import type { ComponentType } from "react";
import Document, { Head, Html, Main, NextScript, type DocumentContext } from "next/document";

import { createEmotionCache } from "@/lib/emotion-cache";
import type { ByteSpaceAppProps } from "./_app";

export default class ByteSpaceDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;
    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => {
          const AppWithCache = App as unknown as ComponentType<ByteSpaceAppProps>;

          return function EnhanceApp(props) {
            return <AppWithCache emotionCache={cache} {...props} />;
          };
        },
      });

    const initialProps = await Document.getInitialProps(ctx);
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
      <style
        key={style.key}
        data-emotion={`${style.key} ${style.ids.join(" ")}`}
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ));

    return {
      ...initialProps,
      styles: [
        ...(Array.isArray(initialProps.styles) ? initialProps.styles : []),
        ...emotionStyleTags,
      ],
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

import { CacheProvider, type EmotionCache } from "@emotion/react";
import type { AppProps } from "next/app";
import Head from "next/head";

import { Provider } from "@/components/ui/provider";
import { createEmotionCache } from "@/lib/emotion-cache";
import { fontRootCss } from "@/lib/fonts";

const browserCache = createEmotionCache();

export type ByteSpaceAppProps = AppProps & {
  emotionCache?: EmotionCache;
};

export default function ByteSpaceApp({
  Component,
  pageProps,
  emotionCache = browserCache,
}: ByteSpaceAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <style jsx global>{`
        :root {
          ${fontRootCss}
        }
      `}</style>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </CacheProvider>
  );
}

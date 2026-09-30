import type { Metadata } from "next";

import { Provider } from "@/components/ui/provider";
import { fontVariables } from "@/lib/fonts";

export const metadata: Metadata = {
  title: {
    default: "ByteSpace — Get Access to Hundreds Courses Available",
    template: "%s | ByteSpace",
  },
  description:
    "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
  metadataBase: new URL("https://bytespace.example.com"),
  openGraph: {
    title: "ByteSpace — Get Access to Hundreds Courses Available",
    description:
      "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

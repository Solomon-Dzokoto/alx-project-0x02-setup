import Layout from "@/components/layout/Layout";
import "@/styles/globals.css"; // Ensure Tailwind directives are in globals.css
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

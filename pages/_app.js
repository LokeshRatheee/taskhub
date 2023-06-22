// pages/_app.js

import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import MyProvider from "../Context/MyProvider";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <MyProvider>
        <Component {...pageProps} />
      </MyProvider>
    </SessionProvider>
  );
}

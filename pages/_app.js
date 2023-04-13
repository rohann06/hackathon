import "@/styles/globals.css";
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from "@livepeer/react";
import { AptosClient } from "aptos";
import { createContext, useMemo } from "react";

export const AptosContext = createContext(null);

const livepeerClient = createReactClient({
  provider: studioProvider({
    apiKey: process.env.NEXT_PUBLIC_STUDIO_API_KEY,
  }),
});

export default function App({ Component, pageProps }) {
  const aptosClient = useMemo(
    () => new AptosClient("https://fullnode.devnet.aptoslabs.com/v1"),
    []
  );
  return (
    <AptosContext.Provider value={aptosClient}>
      <LivepeerConfig client={livepeerClient}>
        <Component {...pageProps} />
      </LivepeerConfig>
    </AptosContext.Provider>
  );
}

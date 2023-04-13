import Layout from "@/components/Layout";
import "@/styles/globals.css";
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from "@livepeer/react";
import { AptosClient } from "aptos";
import { createContext, useMemo } from "react";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { BloctoWallet } from "@blocto/aptos-wallet-adapter-plugin";
import { MartianWallet } from "@martianwallet/aptos-wallet-adapter";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";

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

  const wallets = [new PetraWallet(), new MartianWallet()];

  return (
    <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
      <AptosContext.Provider value={aptosClient}>
        <LivepeerConfig client={livepeerClient}>
          <Layout>
            <Component {...pageProps} />{" "}
          </Layout>
        </LivepeerConfig>{" "}
      </AptosContext.Provider>{" "}
    </AptosWalletAdapterProvider>
  );
}

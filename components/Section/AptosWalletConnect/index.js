import React, { useContext ,useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import { AddressContext } from "@/context/AddressProvider";

const AptosWalletConnect = () => {
  const router = useRouter();
  const{setAddress} = useContext(AddressContext)

  const {
    connect,
    account,
    network,
    connected,
    disconnect,
    wallet,
    wallets,
    signAndSubmitTransaction,
    signTransaction,
    signMessage,
    signMessageAndVerify,
  } = useWallet();

  useEffect(() => {
    if (connected) setAddress(account.address);
  }, [connected]);

  return (
    <div className=" flex justify-end  gap-5 mx-6">
      {connected && (
        <button
          onClick={() => router.push("/create")}
          className=" bg-blue-500 text-white text-lg px-5 py-3 rounded-lg"
        >
          + Create
        </button>
      )}

      <WalletSelector />
    </div>
  );
};

export default AptosWalletConnect;

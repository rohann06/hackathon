import React, {
  useContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useRouter } from "next/router";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import { AddressContext } from "@/context/AddressProvider";
import { RiLiveLine } from "react-icons/ri";
import { useTheme } from "next-themes";
import {BsMoonFill, BsFillSunFill} from 'react-icons/bs'

const AptosWalletConnect = () => {
  const router = useRouter();
  const { setAddress } = useContext(AddressContext);
  const { theme, setTheme } = useTheme();

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
    <div className=" flex justify-end items-center  gap-5 mx-6">
      {connected && (
        <div className=" flex items-center gap-5">
          <button
            onClick={() => router.push("/create")}
            className=" bg-blue-500 text-white text-lg px-5 py-3 rounded-lg"
          >
            + Create
          </button>
          <button
            onClick={() => router.push("/live")}
            className=" bg-blue-500 text-white text-lg px-5 py-3 rounded-lg flex items-center gap-5"
          >
            <RiLiveLine />
            Live
          </button>
        </div>
      )}

      <div>
        <WalletSelector />
      </div>

      <div
        className="  border-2  hover:bg-blue-500 hover:text-violet-50 p-2 lg:p-[12px] rounded-full"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? (
          <BsMoonFill className=" text-lg lg:text-xl " />
        ) : (
          <BsFillSunFill className="  text-lg lg:text-xl" />
        )}
      </div>
    </div>
  );
};

export default AptosWalletConnect;

import React from "react";
import { useRouter } from "next/router";
import { useCallback, useMemo, useState } from "react";

const AptosWalletConnect = () => {
  const router = useRouter();
  const [address, setAddress] = useState(null);

  const isAptosDefined = useMemo(
    () => (typeof window !== "undefined" ? Boolean(window?.aptos) : false),
    []
  );

  // callback when a user clicks the "connect" button
  const connectWallet = useCallback(async () => {
    console.log('calling connectwallet')
    try {
      if (isAptosDefined) {
        await window.aptos.connect();
        const account = await window.aptos.account();
        console.log('account :', account.address)
        setAddress(account.address);
      }
    } catch (e) {
      console.error("error: " , e);
    }
  }, [isAptosDefined]);

  return (
    <div className=" flex  gap-5">
      <button
        onClick={() => router.push("/create")}
        className=" bg-blue-600 text-white rounded-xl font-semibold text-[14px] lg:text-[16px] px-8 lg:px-10 py-2"
      >
        + Create
      </button>
      <button
        // disabled={!isAptosDefined}
        onClick={connectWallet}
        className=" bg-blue-600 text-white rounded-xl font-semibold text-[14px] lg:text-[16px] px-8 lg:px-10 py-2 cursor-pointer"
      >
        {!address ? "Connect Wallet" : address}
      </button>
    </div>
  );
};

export default AptosWalletConnect;

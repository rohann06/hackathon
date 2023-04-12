import React from "react";
import { useRouter } from "next/router";

const AptosWalletConnect = () => {
const router = useRouter();
  return (
    <div className=" flex  gap-5">
      <button onClick={() => router.push("/create")} className=" bg-blue-600 text-white rounded-xl font-semibold text-[14px] lg:text-[16px] px-8 lg:px-10 py-2">
        + Create
      </button>
      <button className=" bg-blue-600 text-white rounded-xl font-semibold text-[14px] lg:text-[16px] px-8 lg:px-10 py-2">
        Connect
      </button>
    </div>
  );
};

export default AptosWalletConnect;

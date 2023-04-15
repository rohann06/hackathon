import React from "react";
import { ImBook } from "react-icons/im";
import { useRouter } from "next/router";
import { AddressProvider } from "@/context/AddressProvider";
import AptosWalletConnect from "../Section/AptosWalletConnect";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    
      <div className=" flex h-screen">
        <div className="bg-white dark:bg-slate-800 drop-shadow-lg max-h-full w-[18%] px-4 ">
          <div className=" flex flex-col justify-center items-center py-10">
            <img src="./light-logo.svg" alt="logo" className=" w-40 h-auto" />
            <div
              onClick={() => router.push("/")}
              className=" bg-slate-200 dark:bg-slate-500 font-semibold cursor-pointer rounded-xl  flex items-center  gap-2 text-xl mt-14 px-28 py-3 "
            >
              <ImBook />
              <p>Learn</p>
            </div>
          </div>
        </div>
        <div className=" h-full overflow-y-auto w-full flex flex-col items-end py-10 ">
          <AddressProvider>
            <AptosWalletConnect />
            {children}
          </AddressProvider>
        </div>
      </div>
  );
};

export default Layout;

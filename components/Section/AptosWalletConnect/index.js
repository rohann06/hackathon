import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";


const AptosWalletConnect = () => {
    const router = useRouter();
    const [address, setAddress] = useState(null);

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

    return ( <
        div className = " flex justify-end  gap-5 mx-6" >
        <
        WalletSelector / >
        <
        /
        div >
    );
};

export default AptosWalletConnect;
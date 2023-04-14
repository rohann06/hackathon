import React from "react";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import CreateAndViewAsset from './uploadandview';
import {
    LivepeerConfig,
    createReactClient,
    studioProvider,
} from '@livepeer/react';
import { AptosAccount, AptosClient, HexString, TokenClient } from 'aptos';
import { createContext, useMemo } from 'react';
// declare global {
//     interface Window {
//         aptos: any;
//     }
// };

const AptosContext = createContext < AptosClient | null > (null);

const livepeerClient = createReactClient({
    provider: studioProvider({
        apiKey: process.env.NEXT_PUBLIC_STUDIO_API_KEY | "7e3c1125-b0f7-4f83-a82c-e38c57878843",
    }),
});

const AptosNft = () => {
    const isAptosDefined = useMemo(
        () => (typeof window !== 'undefined' ? Boolean(window ? aptos : false) : false), [],
    );

    const [address, setAddress] = useState < string | null > (null);

    // callback when a user clicks the "connect" button
    const connectWallet = useCallback(async() => {
        try {
            if (isAptosDefined) {
                // we use the global `aptos` object to interact with the wallet browser extension
                await window.aptos.connect();
                //const account: { address: string } = await window.aptos.account();
                const account = await window.aptos.account();

                setAddress(account.address);
            }
        } catch (e) {
            console.error(e);
        }
    }, [isAptosDefined]);

};

const Create = () => {

    // create an aptos client using the devnet endpoint on app mount
    const aptosClient = useMemo(
        () => new AptosClient('https://fullnode.devnet.aptoslabs.com/v1'), [],
    );
    return ( <
        div className = " lg:my-10 lg:mx-80 my-3 mx-3 " >
        <
        h2 className = " dark:text-white lg:text-3xl text-xl font-bold text-center" >
        Post a video🚀 <
        /h2> <
        div className = " lg:mt-10 mt-5" >
        <
        div className = " flex flex-col w-full my-6" >
        <
        label className = " lg:text-lg font-semibold dark:text-white"
        htmlFor = "" >
        Title <
        /label> <
        input type = "text"
        className = " w-full border-2 border-slate-400 dark:border-slate-600 dark:text-white bg-transparent rounded-xl px-4 py-3 my-3 " /
        >
        <
        /div>

        <
        div className = " flex flex-col w-full my-6" >
        <
        label className = " lg:text-lg font-semibold dark:text-white"
        htmlFor = "" >
        Tags <
        /label> <
        input type = "text"
        className = " w-full border-2 border-slate-400 dark:border-slate-600 dark:text-white bg-transparent rounded-xl px-4 py-3 my-3 " /
        >
        <
        /div>

        <
        div className = " flex flex-col w-full my-6" >
        <
        label className = " lg:text-lg font-semibold dark:text-white"
        htmlFor = "" >
        Description <
        /label> <
        textarea type = "text"
        rows = "7"
        className = " w-full border-2 border-slate-400 dark:border-slate-600 dark:text-white bg-transparent rounded-xl px-4 py-3 my-3 " /
        >
        <
        /div>

        <
        div className = " flex flex-col items-center justify-center  rounded-xl dark:bg-gray-800 lg:w-[50%] h-52" >
        <
        BsFillCloudArrowUpFill className = " my-3 text-3xl text-slate-500" / >
        <
        label htmlFor = "upload-video"
        className = " bg-blue-600 text-white rounded-xl font-semibold text-[14px] lg:text-[16px] px-8 lg:px-10 py-2 " >
        Upload <
        /label> <
        input id = "upload-video"
        type = "file"
        className = " hidden" / >
        <
        /div>  <
        button disabled = {!isAptosDefined || Boolean(address) }
        onClick = { Aptot.connectWallet } > {!address ? 'Connect Wallet' : address } <
        /button> <
        AptosContext.Provider value = { aptosClient } >
        <
        LivepeerConfig client = { livepeerClient } >
        <
        CreateAndViewAsset / >
        <
        /LivepeerConfig> < /
        AptosContext.Provider >

        <
        div className = " mt-14 flex justify-center items-center" >
        <
        button className = " bg-blue-600 text-white rounded-xl font-semibold text-[14px] lg:text-[20px] px-8 lg:px-20 py-2 " > Create < /button> < /
        div > <
        /div> < /
        div >
    );
};

export default Create;
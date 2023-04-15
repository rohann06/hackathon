import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Player,
  useCreateStream,
  useAsset,
  useCreateAsset,
  useUpdateAsset,
} from "@livepeer/react";
import * as LitJsSdk from "@lit-protocol/lit-node-client";
import { toast } from "react-toastify";
import { PulseLoader } from "react-spinners";
import { RiLiveLine } from "react-icons/ri";

const accessControlConditions = [
  {
    contractAddress: "0xB56946D84E4Dd277A8E575D5Dae551638010C6A8",
    standardContractType: "ERC721",
    chain: "mumbai",
    method: "balanceOf",
    parameters: [":userAddress"],
    returnValueTest: {
      comparator: ">",
      value: "0",
    },
  },
];

export default function Create() {
  const [playbackId, setPlaybackId] = useState(
    "bafybeigtqixg4ywcem3p6sitz55wy6xvnr565s6kuwhznpwjices3mmxoe"
  );
  const [streamName, setStreamName] = useState("");
  const [loading, setLoading] = useState(false);
  const [stream, setStream] = useState(null);
  const [fileInput, setFileInput] = useState(null);
  const [asset, setAsset] = useState(null);

  const { mutateAsync: createStreamAsync } = useCreateStream({
    name: streamName,
    record: false,
    playbackPolicy: {
      type: "jwt",
    },
    profiles: [
      {
        name: "720p",
        bitrate: 2000000,
        fps: 30,
        width: 1280,
        height: 720,
      },
      {
        name: "480p",
        bitrate: 1000000,
        fps: 30,
        width: 854,
        height: 480,
      },
      {
        name: "360p",
        bitrate: 500000,
        fps: 30,
        width: 640,
        height: 360,
      },
      {
        name: "240p",
        bitrate: 250000,
        fps: 30,
        width: 426,
        height: 240,
      },
    ],
  });

  const { mutateAsync: createAssetAsync } = useCreateAsset({
    // file can also be an ipfs/ youtube/ vimeo link {name: 'video.mp4', url: 'https://www.youtube.com/watch?v=123456'}
    ...(fileInput && {
      sources: [{ name: fileInput.name, file: fileInput }],
    }),
  });

  const { mutateAsync: updateAssetAsync } = useUpdateAsset({
    ...(asset && {
      assetId: asset?.id,
      storage: { ipfs: true },
    }),
  });

  const resourceId = {
    baseUrl: "http://localhost:3000",
    path: "/watch-stream",
    orgId: "livepeer-org",
    role: "developer",
  };

  const handleFileUpload = async () => {
    // stream name input check empty
    if (!fileInput) return toast.error("Please select a file");
    try {
      setLoading(true);
      const asset = await createAssetAsync();
      console.log("created asset:", asset);
      setAsset(asset[0]);
      toast.success("File uploaded successfully");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast.error("Error while uploading file");
      console.log("Error while uploading file:", err);
    }
  };

  const handleUpdateAsset = async () => {
    // stream name input check empty
    if (!asset) return toast.error("Please create asset first");
    try {
      setLoading(true);
      const asset = await updateAssetAsync();
      console.log("updated asset:", asset);
      setAsset(asset);
      toast.success("Asset saved to Ipfs successfully");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast.error("Error while saving asset to Ipfs");
      console.log("Error while saving asset to Ipfs:", err);
    }
  };

  const handleCreateStream = async () => {
    // stream name input check empty
    if (/^[ ]*$/.test(streamName))
      return toast.error("Please enter stream name");
    try {
      setLoading(true);
      const stream = await createStreamAsync();
      console.log("created stream:", stream);
      const client = createReactClient({
        provider: studioProvider({
          apiKey: process.env.NEXT_PUBLIC_STUDIO_API_KEY,
        }),
      });
      await client.connect();
      const authSig = await LitJsSdk.checkAndSignAuthMessage({
        chain: "mumbai",
      });
      await client.saveSigningCondition({
        accessControlConditions,
        chain: "mumbai",
        authSig,
        resourceId: {
          ...resourceId,
          extraData: stream?.playbackId,
        },
      });
      setStream(stream);
      setLoading(false);
      toast.success("Stream created successfully");
    } catch (err) {
      setLoading(false);
      toast.error("Error while creating stream");
      // console.log("error while creating stream:", err);
    }
  };

  return (
    <div className=" flex flex-col justify-center items-center gap-10 mx-80 mt-10">
      <h2 className=" text-4xl font-bold  mb-10">Create Live Stream </h2>
      <p className="  text-lg font-semibold">
        <b>Notice:</b> Your stream viewers required to have a
        <a
          className=" text-blue-500"
          target="_blank"
          rel="noreferrer"
          href="https://aptoslabs.com/testnet-faucet"
        >
          {" "}
          APTOS token{" "}
        </a>
        If they dont have one, Ask them to mint one
        <a
          className=" text-blue-500"
          target="_blank"
          rel="noreferrer"
          href="https://aptoslabs.com/testnet-faucet"
        >
          {" "}
          here
        </a>
      </p>
      <div className=" flex items-center gap-5">
        <input
          className=" py-3 px-5 text-lg rounded-full bg-transparent border border-slate-700"
          name="streamName"
          type="text"
          placeholder="Enter stream name.."
          onChange={(e) => setStreamName(e.target.value)}
        />
        <button
          className=" bg-blue-500 px-5 py-[0.7rem] rounded-full text-white font-medium"
          onClick={handleCreateStream}
          disabled={loading}
        >
          Create
        </button>
      </div>

      {stream ? (
        <>
          <h2>Stream Details</h2>
          <p>Use below details to stream with streaming software like OBS</p>
          <p>
            Stream ID: <b>{stream.id}</b>
          </p>
          <p>
            Stream Name: <b>{stream.name}</b>
          </p>
          <p>
            Stream Playback ID: <b>{stream.playbackId}</b>
          </p>
          <p>
            Stream Playback URL: <b>{stream.playbackUrl}</b>
          </p>
          <p>
            Stream Key: <b>{stream.streamKey}</b>
          </p>
          <p>
            Stream Ingest URL: <b>{stream.rtmpIngestUrl}</b>
          </p>
          {/* watch button */}
          <Link href={`/watch?id=${stream.playbackId}`}>
            <button>Watch Stream</button>
          </Link>
        </>
      ) : (
        <Image
          className=" mt-6"
          src={"/stream.png"}
          alt="image"
          height={500}
          width={500}
        />
      )}
      {asset && (
        <>
          <h2>Uploaded File details</h2>
          <p>
            ID: <b>{asset?.id}</b>
          </p>
          <p>
            Name: <b>{asset?.name}</b>
          </p>
          <div>
            IPFS CID: <b>{asset?.storage?.ipfs?.cid ?? "None"}</b>
          </div>
          <p>
            Playback ID: <b>{asset?.playbackId}</b>
          </p>
          <p>
            Playback URL: <b>{asset?.playbackUrl}</b>
          </p>
          <p>
            Format: <b>{asset?.videoSpec?.format}</b>
          </p>
          <p>
            Duration: <b>{asset?.videoSpec?.duration}</b>
          </p>
          {/* watch button */}
          <Link href={`/watch?id=${asset.playbackId}`}>
            <button>Watch Video</button>
          </Link>
          {!asset?.storage?.ipfs?.cid && (
            <button onClick={handleUpdateAsset} disabled={loading}>
              Save to IPFS
            </button>
          )}
        </>
      )}
      <PulseLoader loading={loading} color="#0070f3" speedMultiplier={1} />
    </div>
  );
}

import Header from "@/components/Header";
import Head from "next/head";
import Feed from "@/components/Feed";

export default function Home() {
  return (
    <>
      <div className="bg-slate-100 h-screen scrollbar-hide">
        <Head>
          <title>Instagram Clone</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Feed />
      </div>
    </>
  );
}

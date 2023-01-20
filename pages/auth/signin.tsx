import React from "react";
import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";
import Image from "next/image";
import logo from "../../assets/instafulllogo.png";

export default function signin({ providers }: { providers: any }) {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen flex-col">
        <Image src={logo} alt="logo" className="w-80 mb-16" />
        <div>
          {Object.values(providers).map((provider: any) => (
            <div key={provider.name} className="flex flex-col justify-center">
              <button
                className="bg-blue-500 m-2 p-2 text-white rounded-md"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}

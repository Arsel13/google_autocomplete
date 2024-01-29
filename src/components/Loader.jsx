import React from "react";
import { CirclesWithBar } from "react-loader-spinner";
export default function Loader() {
  return (
    <section className="fixed h-screen w-full bg-themeBlue z-[100] flex justify-center items-center">
      <CirclesWithBar width={100} height={100} color="#202053" visible={true} />
    </section>
  );
}
export function MiniLoader() {
  return (
    <section className="absolute h-full w-full top-0 left-0 z-[100] flex justify-center items-center">
      <CirclesWithBar width={100} height={100} color="#202053" visible={true} />
    </section>
  );
}

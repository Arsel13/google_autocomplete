import React from "react";

export default function NoInternet() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-white">
      <div>
        <img
          src="/images/no-internet.webp"
          alt="No Internet"
          className="lg:w-[600px] w-96"
        />
      </div>
      <p className="font-medium text-xl text-center">
        Please check your internet connection!
      </p>
    </section>
  );
}

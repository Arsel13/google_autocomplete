import React from "react";
import { Link } from "react-router-dom";

export default function NoPage() {
  return (
    <section className="h-screen flex justify-center items-center relative">
      <div className="fixed top-0 left-0">
        <img src="/images/404/vector-1.webp" alt="vector-1" />
      </div>
      <div className="fixed bottom-0 right-0">
        <img src="/images/404/vector-2.webp" alt="vector-2" />
      </div>
      <div className="w-11/12 mx-auto flex flex-col justify-center items-center gap-y-4 relative">
        <div>
          <img src="/images/404/404.webp" alt="404" className="md:w-96 w-72" />
        </div>
        <h2 className="font-bold md:text-5xl text-4xl text-center">
          Page not found
        </h2>
        <p className="font-normal md:text-xl text-base text-center">
          Oops! The page you are looking for does not exists. It has been
          removed or deleted
        </p>
        <Link
          to="/"
          className="font-medium md:text-xl text-base text-[#DE2D35] border border-[#DE2D35] py-2 px-5 rounded-sm hover:bg-[#DE2D35] hover:text-white"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}

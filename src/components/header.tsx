import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="text-white w-full absolute z-10">
      {/* href, replace , scroll, prefetch  */}
      <nav className="container flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href="/" className="font-bold text-3xl">Home</Link>
        <div className="space-x-5 text-xl">
          <Link href={{ pathname: "/performance", query: { name: "test" } }}>
            Performance
          </Link>
          <Link href={"/reliability"}>Reliability</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;

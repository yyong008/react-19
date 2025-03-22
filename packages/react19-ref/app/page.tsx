"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [k, setK] = useState(false);
  useEffect(() => {
    debugger
    return () => {
      debugger;
      console.log("x");
    };
  }, []);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex gap-3">
        {k ? "d" : "x"}
        <button
          className="border rounded-sm"
          onClick={() => {
            setK((k) => !k);
          }}
        >
          set
        </button>
      </div>
        <div className="flex flex-col">
          <Link href="/ref-props">ref-props</Link>
          <Link href="/ref-clean-function">ref-clean-function</Link>
        </div>
    </div>
  );
}

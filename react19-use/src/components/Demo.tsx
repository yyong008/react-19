"use client";

import { use } from "react";

export default function Demo({ prms }: { prms: Promise<any> }) {
  const a = use(prms);
  console.log("xxx", a, prms)
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {a}
      </main>
    </div>
  );
}

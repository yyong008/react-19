"use client"

import Image from "next/image";
import { useActionState } from "react";
import { action } from "./action";



export default function Home() {
  const [state, formAction] = useActionState(action, null, "/123")
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <form action={formAction}>
          <input type="text" name="name" />
          <button type="submit">提交</button>
        </form>
      </main> 
    </div>
  );
}

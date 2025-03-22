"use client";

import { Theme } from "@/context/theme"
import { use } from "react";

export default function ThemeApp(){
    const theme = use(Theme);
    return <div>当前主题是： {theme}</div>
}

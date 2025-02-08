"use client"

import { useTheme } from "@/hooks/use-theme"


export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme() as any

    return (
        <button onClick={toggleTheme}>
            Switch to {theme === "light" ? "Dark" : "Light"}
        </button>
    )
}
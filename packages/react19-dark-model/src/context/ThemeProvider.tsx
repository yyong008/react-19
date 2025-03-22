'use client'; // 标记为客户端组件

import { createContext, useContext, useState, useEffect } from 'react';

export const ThemeContext = createContext({});

export const ThemeProvider = ({ initTheme, children }: { initTheme: string, children: any}) => {
  const [theme, setTheme] = useState(initTheme);

  useEffect(() => {
    // 从 localStorage 中读取主题
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    setCookie('theme', newTheme, 7);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <ThemeContext value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext>
  );
};


function setCookie(name: string, value: string, days: number) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // 计算过期时间
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${encodeURIComponent(value)}; ${expires}; path=/`;
}

// 调用函数设置 Cookie

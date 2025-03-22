"use client";

import { useRef } from "react";

export default function RefProp() {
  const myRef = useRef<any>(1);
  const element = <div ref={myRef}>234</div>;
  console.log(element.props.ref); // 正确方式（React 19 推荐）
  console.log("react18",element.ref) // react 19 中不推荐使用了
  return <div>{element}</div>;
}

"use client";

import React, { useEffect, useState } from "react";
import { useRef } from "react";

export function RefPropsx() {
  const [mountKey, setMountKey] = useState(0);
  return (
    <div>
      <RefClass key={mountKey} />
      <RefFunction key={mountKey + 1} />
      <button className="border" onClick={() => setMountKey((k) => k + 1)}>
        强制卸载并重新挂载
      </button>
    </div>
  );
}

class RefClass extends React.Component {
  componentWillUnmount(): void {
    console.log("class un mount");
    console.log("✅ Class组件已卸载"); // 观察控制台输出
  }
  render() {
    return (
      <div
        ref={(curElement) => {
          console.log("curElement", curElement);
          // 需要引入的内容例如: ResizeObserver
          return () => {
            debugger;
            // curElement 开始引用的内容，开议在这里清除，例如清楚：ResizeObserver
          };
        }}
      >
        string ref
      </div>
    );
  }
}

// ref value
export default function RefProps() {
  const ref = useRef(1);
  return (
    <div className="flex h-[100vh] justify-center items-center">
      <RefPropsx />
    </div>
  );
}

// ref dom
function RefFunction() {
  useEffect(() => {
    return () => {
      console.log("function unmount");
    };
  }, []);
  return (
    <div
      ref={(curElement) => {
        let div = document.createElement("div") as any;
        div.innerHTML = "divxxx";
        document.body.append(div);
        return () => {
          debugger;
          div = null;
        };
      }}
    >
      string ref
    </div>
  );
}

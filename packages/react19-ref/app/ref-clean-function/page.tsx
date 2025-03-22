"use client";

import { useEffect } from "react";

export default function RefCleanFunction() {
  useEffect(() => {
    debugger;
    return () => {
      debugger;
    };
  }, []);
  return (
    <div
      ref={(ref) => {
        debugger;
        return () => {
          debugger;
        };
      }}
    >
      dsf
    </div>
  );
}

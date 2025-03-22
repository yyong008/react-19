import Demo from "@/components/Demo";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const genP = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(123);
    }, 2000);
  });
};

export default function Home() {
  const pp = genP();
  return (
    <ErrorBoundary fallback={<>出错误了</>}>
      <Suspense fallback={<p>waiting for message...</p>}>
        <Demo prms={pp} />;
      </Suspense>
    </ErrorBoundary>
  );
}
